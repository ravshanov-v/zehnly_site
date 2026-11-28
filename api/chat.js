const GEMINI_MODEL = 'gemini-1.5-flash'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`
const REQUEST_TIMEOUT_MS = 45000
const MAX_MESSAGES = 16
const MAX_REQUEST_MESSAGES = 64
const MAX_MESSAGE_LENGTH = 4000
const MAX_TOTAL_LENGTH = 24000
const MAX_BODY_LENGTH = 100_000
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 12

const rateLimitStore = globalThis.__kredoriumChatRateLimits ?? new Map()
globalThis.__kredoriumChatRateLimits = rateLimitStore

const SYSTEM_PROMPT = [
  'Siz Kredorium AI — o‘zbek tilida ishlaydigan o‘quv yordamchisiz.',
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
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'no-referrer')
  res.end(JSON.stringify(payload))
}

function clientKey(req) {
  const forwarded = req.headers?.['x-forwarded-for']
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded
  const ip = typeof raw === 'string' ? raw.split(',')[0].trim() : ''

  return ip || req.socket?.remoteAddress || 'unknown'
}

function takeRateLimit(key) {
  const now = Date.now()

  if (rateLimitStore.size > 1000) {
    for (const [entryKey, entry] of rateLimitStore) {
      if (entry.resetAt <= now) rateLimitStore.delete(entryKey)
    }
  }

  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS
    rateLimitStore.set(key, { count: 1, resetAt })
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt }
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: current.resetAt }
  }

  current.count += 1

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - current.count,
    resetAt: current.resetAt,
  }
}

function applyRateLimitHeaders(res, limit) {
  res.setHeader('X-RateLimit-Limit', String(RATE_LIMIT_MAX_REQUESTS))
  res.setHeader('X-RateLimit-Remaining', String(Math.max(limit.remaining, 0)))
  res.setHeader('X-RateLimit-Reset', String(Math.ceil(limit.resetAt / 1000)))
}

async function readJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === 'string') {
      if (req.body.length > MAX_BODY_LENGTH) return null

      try {
        return JSON.parse(req.body)
      } catch {
        return null
      }
    }

    if (typeof req.body === 'object') {
      try {
        if (JSON.stringify(req.body).length > MAX_BODY_LENGTH) return null
      } catch {
        return null
      }

      return req.body
    }
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
  if (typeof message === 'string') return message.trim().slice(0, MAX_MESSAGE_LENGTH)
  if (!message || typeof message !== 'object') return ''

  const value =
    typeof message.text === 'string'
      ? message.text
      : typeof message.content === 'string'
        ? message.content
        : ''

  return value.trim().slice(0, MAX_MESSAGE_LENGTH)
}

function buildContents(messages) {
  const recent = messages.slice(-MAX_MESSAGES)
  const firstUserIndex = recent.findIndex((message) => normalizeRole(message?.role) === 'user')
  if (firstUserIndex === -1) return []

  const contents = []
  let totalLength = 0

  for (const message of recent.slice(firstUserIndex)) {
    const role = normalizeRole(message?.role)
    const text = getMessageText(message)
    if (!role || !text) continue

    const remaining = MAX_TOTAL_LENGTH - totalLength
    if (remaining <= 0) break

    const clipped = text.slice(0, remaining)
    totalLength += clipped.length

    const previous = contents[contents.length - 1]

    if (previous?.role === role) {
      previous.parts[0].text += `\n\n${clipped}`
    } else {
      contents.push({ role, parts: [{ text: clipped }] })
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

  return [{ role: 'user', parts: [{ text: prompt.slice(0, MAX_TOTAL_LENGTH) }] }]
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

function redactSecret(value, secret) {
  const text = String(value ?? '')
  if (!secret) return text

  return text.split(secret).join('[hidden]')
}

async function readUpstreamError(response, apiKey) {
  const data = await response.json().catch(() => null)
  const detail = redactSecret(data?.error?.message, apiKey)

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

  const limit = takeRateLimit(clientKey(req))
  applyRateLimitHeaders(res, limit)

  if (!limit.allowed) {
    const retryAfter = Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000))
    res.setHeader('Retry-After', String(retryAfter))
    return sendJson(res, 429, {
      error: 'So‘rovlar juda ko‘p. Bir oz kutib, qayta urinib ko‘ring.',
    })
  }

  const contentType = String(req.headers?.['content-type'] || '').toLowerCase()
  if (contentType && !contentType.includes('application/json')) {
    return sendJson(res, 415, { error: 'Content-Type application/json bo‘lishi kerak.' })
  }

  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return sendJson(res, 500, {
      error: 'AI xizmati sozlanmagan. Iltimos, keyinroq qayta urinib ko‘ring.',
    })
  }

  const body = await readJsonBody(req)

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return sendJson(res, 400, { error: 'So‘rov tanasi noto‘g‘ri yoki bo‘sh.' })
  }

  if (Array.isArray(body.messages) && body.messages.length > MAX_REQUEST_MESSAGES) {
    return sendJson(res, 400, { error: 'Juda ko‘p xabar yuborildi.' })
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
