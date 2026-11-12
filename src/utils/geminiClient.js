import { getGeminiApiKey } from './aiAccess.js'

const GEMINI_MODEL = 'gemini-3.6-flash'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`
const REQUEST_TIMEOUT_MS = 45000

const SYSTEM_PROMPT = [
  'Siz Zehnly AI — o‘zbek tilida ishlaydigan o‘quv yordamchisiz.',
  'Foydalanuvchiga tushunarli, qisqa va amaliy javob bering.',
  'Murakkab mavzularni oddiy misollar va qadam-baqadam tushuntirish bilan izohlang.',
  'Agar savol o‘quv yoki umumiy bilimga oid bo‘lmasa, qisqa va xushmuomala javob bering.',
  'Matematik formulalarni tushunarli matn yoki Unicode belgilar bilan yozing; LaTeX va $ belgilaridan foydalanmang.',
  'Foydalanuvchi so‘ramasa, juda uzun javob bermang.',
].join('\n')

export function isGeminiConfigured() {
  return Boolean(getGeminiApiKey())
}

function sanitize(value, apiKey) {
  const text = String(value || '')
  return apiKey ? text.split(apiKey).join('[yashirilgan]') : text
}

async function readApiError(response, apiKey) {
  let detail

  try {
    const data = await response.json()
    detail = typeof data?.error?.message === 'string' ? data.error.message : ''
  } catch {
    detail = ''
  }

  detail = sanitize(detail, apiKey)

  if (response.status === 400 && /api key/i.test(detail)) {
    return 'Gemini API kaliti qabul qilinmadi. Sozlamalarni tekshiring.'
  }

  if (response.status === 403) {
    return 'Gemini API ruxsat bermadi. Kalit va loyiha sozlamalarini tekshiring.'
  }

  if (response.status === 429) {
    return 'So‘rovlar limiti tugadi. Bir oz kutib, qayta urinib ko‘ring.'
  }

  if (response.status === 404) {
    return 'Gemini modeli topilmadi. Keyinroq qayta urinib ko‘ring.'
  }

  if (response.status === 500 || response.status === 503) {
    return 'Gemini servisi vaqtincha band. Bir oz kutib, qayta urinib ko‘ring.'
  }

  return detail ? `Gemini API: ${detail}` : `Gemini API xatosi (${response.status}).`
}

function extractResponseText(data) {
  const parts = data?.candidates?.[0]?.content?.parts
  if (!Array.isArray(parts)) return ''

  return parts
    .map((part) => (typeof part?.text === 'string' ? part.text : ''))
    .filter(Boolean)
    .join('\n')
    .trim()
}

function buildContents(conversation) {
  const recent = conversation.slice(-16)
  const firstUserIndex = recent.findIndex((message) => message?.role === 'user')
  if (firstUserIndex === -1) return []

  const contents = []

  for (const message of recent.slice(firstUserIndex)) {
    if (message?.role !== 'user' && message?.role !== 'assistant') continue

    const text = typeof message.text === 'string' ? message.text.trim() : ''
    if (!text) continue

    const role = message.role === 'assistant' ? 'model' : 'user'
    const previous = contents[contents.length - 1]

    if (previous?.role === role) {
      previous.parts[0].text += `\n\n${text}`
    } else {
      contents.push({ role, parts: [{ text }] })
    }
  }

  return contents
}

export async function generateGeminiReply(conversation, externalSignal) {
  const apiKey = getGeminiApiKey()

  if (!apiKey) {
    throw new Error('Gemini API kaliti sozlanmagan. Iltimos, keyinroq qayta urinib ko‘ring.')
  }

  const controller = new AbortController()
  let timedOut = false

  const handleExternalAbort = () => controller.abort()
  if (externalSignal) {
    if (externalSignal.aborted) controller.abort()
    else externalSignal.addEventListener('abort', handleExternalAbort, { once: true })
  }

  const timeoutId = window.setTimeout(() => {
    timedOut = true
    controller.abort()
  }, REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: buildContents(conversation),
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          maxOutputTokens: 1200,
          thinkingConfig: {
            thinkingLevel: 'LOW',
          },
        },
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(await readApiError(response, apiKey))
    }

    const data = await response.json()
    const answer = extractResponseText(data)

    if (!answer) {
      const finishReason = data?.candidates?.[0]?.finishReason
      const blockReason = data?.promptFeedback?.blockReason

      throw new Error(
        finishReason === 'SAFETY' || blockReason
          ? 'Bu so‘rovga javob berilmadi. Savolni boshqacha ifodalab ko‘ring.'
          : 'Bo‘sh javob keldi. Savolni qisqaroq yoki aniqroq yozib ko‘ring.',
      )
    }

    return answer
  } catch (error) {
    if (error?.name === 'AbortError') {
      if (externalSignal?.aborted && !timedOut) {
        const abortedError = new Error('So‘rov bekor qilindi.', { cause: error })
        abortedError.name = 'AbortError'
        throw abortedError
      }

      const timeoutError = new Error(
        'So‘rov 45 soniya ichida javob olmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring.',
        { cause: error },
      )
      timeoutError.name = 'TimeoutError'
      throw timeoutError
    }

    if (error instanceof TypeError) {
      const networkError = new Error(
        'Tarmoq xatosi yuz berdi. Internet aloqasini tekshirib, qayta urinib ko‘ring.',
        { cause: error },
      )
      networkError.name = 'NetworkError'
      throw networkError
    }

    if (error instanceof Error) {
      error.message = sanitize(error.message, apiKey)
      throw error
    }

    throw new Error('Noma’lum xatolik yuz berdi. Qayta urinib ko‘ring.', { cause: error })
  } finally {
    window.clearTimeout(timeoutId)
    externalSignal?.removeEventListener('abort', handleExternalAbort)
  }
}
