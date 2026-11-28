const CHAT_ENDPOINT = '/api/chat'
const REQUEST_TIMEOUT_MS = 45000
const MAX_MESSAGES = 16
const MAX_MESSAGE_LENGTH = 4000
const MAX_TOTAL_LENGTH = 24000

function buildRequestMessages(conversation) {
  let remaining = MAX_TOTAL_LENGTH
  const messages = []

  for (const message of conversation.slice(-MAX_MESSAGES).reverse()) {
    const role = message?.role === 'assistant' ? 'assistant' : 'user'
    const raw = typeof message?.text === 'string' ? message.text.trim() : ''
    const text = raw.slice(0, Math.min(MAX_MESSAGE_LENGTH, remaining))

    if (!text) continue

    remaining = Math.max(remaining - text.length, 0)
    messages.push({ role, text })
  }

  return messages.reverse()
}

async function readApiError(response) {
  const data = await response.json().catch(() => null)
  const detail = typeof data?.error === 'string' ? data.error.trim() : ''

  if (detail) return detail

  if (response.status === 429) {
    return 'So‘rovlar limiti tugadi. Bir oz kutib, qayta urinib ko‘ring.'
  }

  if (response.status === 404) {
    return 'AI xizmati topilmadi. Keyinroq qayta urinib ko‘ring.'
  }

  if (response.status === 504) {
    return 'So‘rov 45 soniya ichida javob olmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring.'
  }

  if (response.status >= 500) {
    return 'AI servisi vaqtincha band. Bir oz kutib, qayta urinib ko‘ring.'
  }

  return `Server xatosi (${response.status}). Qayta urinib ko‘ring.`
}

function extractReply(data) {
  if (typeof data?.reply === 'string') return data.reply.trim()
  if (typeof data?.text === 'string') return data.text.trim()
  return ''
}

export async function generateGeminiReply(conversation, externalSignal) {
  const messages = buildRequestMessages(conversation)

  if (!messages.length) {
    throw new Error('Savol matni bo‘sh. Iltimos, savolingizni yozing.')
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
    const response = await fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(await readApiError(response))
    }

    const data = await response.json()
    const answer = extractReply(data)

    if (!answer) {
      throw new Error('Bo‘sh javob keldi. Savolni qisqaroq yoki aniqroq yozib ko‘ring.')
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

    if (error instanceof Error) throw error

    throw new Error('Noma’lum xatolik yuz berdi. Qayta urinib ko‘ring.', { cause: error })
  } finally {
    window.clearTimeout(timeoutId)
    externalSignal?.removeEventListener('abort', handleExternalAbort)
  }
}