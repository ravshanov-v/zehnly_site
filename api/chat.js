const GEMINI_MODEL = 'gemini-1.5-flash'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`
const REQUEST_TIMEOUT_MS = 45000
const MAX_MESSAGES = 16
const MAX_BODY_LENGTH = 1_000_000

const SYSTEM_PROMPT = [
  'Siz Mushohada AI — o‘zbek tilida ishlaydigan o‘quv yordamchisiz.',
  'Foydalanuvchiga tushunarli, qisqa va amaliy javob bering.',
  'Murakkab mavzularni oddiy misollar va qadam-baqadam tushuntirish bilan izohlang.',
  'Agar savol o‘quv yoki umumiy bilimga oid bo‘lmasa, qisqa va xushmuomala javob bering.',
  'Matematik formulalarni tushunarli matn yoki Unicode belgilar bilan yozing; LaTeX va $ belgilaridan foydalanmang.',
  'Foydalanuvchi so‘ramasa, juda uzun javob bermang.',
].join('\n')

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(payload))
}

async function readJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body)
      } catch {
        return null
      }
    }

    if (typeof req.body === 'object') return req.body
  }

  let raw = ''

  try {
    for await (const chunk of req) {
      raw += typeof chunk === 'string' ? chunk : chunk.toString('utf8')
      if (raw.length > MAX_BODY_LENGTH) return null
    }
  } catch {
    return null
  }

  if (!raw) return null

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function normalizeRole(role) {
  if (role === 'assistant' || role === 'model') return 'model'
  if (role === 'user') return 'user'
  return null
}

function getMessageText(message) {
  if (typeof message === 'string') return message.trim()
  if (!message || typeof message !== 'object') return ''

  const value =
    typeof message.text === 'string'
      ? message.text
      : typeof message.content === 'string'
        ? message.content
        : ''

  return value.trim()
}

function buildContents(messages) {
  const recent = messages.slice(-MAX_MESSAGES)
  const firstUserIndex = recent.findIndex((message) => normalizeRole(message?.role) === 'user')
  if (firstUserIndex === -1) return []

  const contents = []

  for (const message of recent.slice(firstUserIndex)) {
    const role = normalizeRole(message?.role)
    const text = getMessageText(message)
    if (!role || !text) continue

    const previous = contents[contents.length - 1]

    if (previous?.role === role) {
      previous.parts[0].text += `\n\n${text}`
    } else {
      contents.push({ role, parts: [{ text }] })
    }
  }

  return contents
}

function buildRequestContents(body) {
  if (Array.isArray(body?.messages) && body.messages.length) {
    return buildContents(body.messages)
  }

  const prompt = typeof body?.prompt === 'string' ? body.prompt.trim() : ''
  if (!prompt) return []

  return [{ role: 'user', parts: [{ text: prompt.slice(0, 12000) }] }]
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

async function readUpstreamError(response, apiKey) {
  const data = await response.json().catch(() => null)
  let detail = typeof data?.error?.message === 'string' ? data.error.message : ''

  if (apiKey) detail = detail.split(apiKey).join('[hidden]')

  if (response.status === 400 && /api key/i.test(detail)) {
    return 'AI xizmati sozlanmagan. Iltimos, keyinroq qayta urinib ko‘ring.'
  }

  if (response.status === 403) {
    return 'AI xizmati ruxsat bermadi. Keyinroq qayta urinib ko‘ring.'
  }

  if (response.status === 429) {
    return 'So‘rovlar limiti tugadi. Bir oz kutib, qayta urinib ko‘ring.'
  }

  if (response.status === 404) {
    return 'AI modeli topilmadi. Keyinroq qayta urinib ko‘ring.'
  }

  if (response.status >= 500) {
    return 'AI servisi vaqtincha band. Bir oz kutib, qayta urinib ko‘ring.'
  }

  return 'AI xizmatida xatolik yuz berdi. Qayta urinib ko‘ring.'
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'Faqat POST so‘rovlari qabul qilinadi.' })
  }

  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return sendJson(res, 500, {
      error: 'AI xizmati sozlanmagan. Iltimos, keyinroq qayta urinib ko‘ring.',
    })
  }

  const body = await readJsonBody(req)

  if (!body || typeof body !== 'object') {
    return sendJson(res, 400, { error: 'So‘rov tanasi noto‘g‘ri yoki bo‘sh.' })
  }

  const contents = buildRequestContents(body)

  if (!contents.length) {
    return sendJson(res, 400, { error: 'Savol matni topilmadi (prompt yoki messages kerak).' })
  }

  const controller = new AbortController()
  let timedOut = false

  const timeoutId = setTimeout(() => {
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
        contents,
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          maxOutputTokens: 1200,
        },
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const statusCode = response.status === 429 ? 429 : 502
      return sendJson(res, statusCode, { error: await readUpstreamError(response, apiKey) })
    }

    const data = await response.json()
    const reply = extractResponseText(data)

    if (!reply) {
      const finishReason = data?.candidates?.[0]?.finishReason
      const blockReason = data?.promptFeedback?.blockReason

      return sendJson(res, 502, {
        error:
          finishReason === 'SAFETY' || blockReason
            ? 'Bu so‘rovga javob berilmadi. Savolni boshqacha ifodalab ko‘ring.'
            : 'Bo‘sh javob keldi. Savolni qisqaroq yoki aniqroq yozib ko‘ring.',
      })
    }

    return sendJson(res, 200, { reply })
  } catch (error) {
    if (error?.name === 'AbortError') {
      return sendJson(res, timedOut ? 504 : 499, {
        error: timedOut
          ? 'So‘rov 45 soniya ichida javob olmadi. Qayta urinib ko‘ring.'
          : 'So‘rov bekor qilindi.',
      })
    }

    return sendJson(res, 502, { error: 'AI xizmatiga ulanib bo‘lmadi. Qayta urinib ko‘ring.' })
  } finally {
    clearTimeout(timeoutId)
  }
}

export const config = {
  maxDuration: 60,
}