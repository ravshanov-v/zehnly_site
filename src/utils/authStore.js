import { normalizeEmail } from './validation.js'

const USERS_KEY = 'zehnly-users'
const SESSION_KEY = 'zehnly-session'
const LAST_EMAIL_KEY = 'zehnly-last-email'

const listeners = new Set()

let sessionCache = readSession()

function emit() {
  listeners.forEach((listener) => listener())
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function getSession() {
  return sessionCache
}

function readSession() {
  try {
    const localRaw = localStorage.getItem(SESSION_KEY)
    if (localRaw) return normalizeSession(JSON.parse(localRaw), true)

    const tabRaw = sessionStorage.getItem(SESSION_KEY)
    if (tabRaw) return normalizeSession(JSON.parse(tabRaw), false)

    return null
  } catch {
    return null
  }
}

function normalizeSession(session, remember) {
  if (!session || typeof session !== 'object' || !session.email) return null

  let next = { ...session, remember: session.remember ?? remember }

  if (!next.id) {
    const user = readUsers().find((item) => item.email === next.email)
    if (user?.id) {
      next = { ...next, id: user.id, createdAt: next.createdAt || user.createdAt }
    }
  }

  return next
}

function writeSession(session) {
  sessionCache = session

  try {
    localStorage.removeItem(SESSION_KEY)
    sessionStorage.removeItem(SESSION_KEY)

    if (session) {
      const storage = session.remember ? localStorage : sessionStorage
      storage.setItem(SESSION_KEY, JSON.stringify(session))
    }
  } catch {
    // storage mavjud bo'lmaganda sessiya faqat xotirada qoladi
  }

  emit()
}

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    const users = raw ? JSON.parse(raw) : []
    return Array.isArray(users) ? users : []
  } catch {
    return []
  }
}

function writeUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
  } catch {
    // storage mavjud bo'lmaganda yozuvni o'tkazib yuboramiz
  }
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function randomSalt() {
  const bytes = new Uint8Array(16)

  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes)
    return toHex(bytes)
  }

  for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256)
  return toHex(bytes)
}

function fallbackHash(text) {
  let hash = 2166136261

  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }

  return (hash >>> 0).toString(16).padStart(8, '0')
}

async function hashPassword(password, salt) {
  const text = `${salt}:${password}`

  if (globalThis.crypto?.subtle) {
    const data = new TextEncoder().encode(text)
    const digest = await globalThis.crypto.subtle.digest('SHA-256', data)
    return toHex(digest)
  }

  return fallbackHash(text)
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function getLastEmail() {
  try {
    return localStorage.getItem(LAST_EMAIL_KEY) ?? ''
  } catch {
    return ''
  }
}

export function setLastEmail(email) {
  try {
    localStorage.setItem(LAST_EMAIL_KEY, normalizeEmail(email))
  } catch {
    // muhim emas
  }
}

export function getUsers() {
  return readUsers()
}

export function isEmailRegistered(email) {
  const normalizedEmail = normalizeEmail(email)
  if (!normalizedEmail) return false

  return readUsers().some((user) => user.email === normalizedEmail)
}

export async function registerUser(email, name, password, options = {}) {
  const normalizedEmail = normalizeEmail(email)
  const users = readUsers()

  if (users.some((user) => user.email === normalizedEmail)) {
    return {
      ok: false,
      code: 'EMAIL_TAKEN',
      message: "Bu email allaqachon ro'yxatdan o'tgan",
    }
  }

  const salt = randomSalt()
  const passwordHash = await hashPassword(password, salt)
  const createdAt = new Date().toISOString()
  const displayName = String(name).trim()

  const user = {
    id: createId(),
    email: normalizedEmail,
    name: displayName,
    salt,
    passwordHash,
    createdAt,
  }

  writeUsers([...users, user])
  setLastEmail(normalizedEmail)
  writeSession({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt,
    loggedInAt: createdAt,
    remember: options.remember ?? true,
  })

  return { ok: true, user }
}

export async function loginUser(email, password, options = {}) {
  const normalizedEmail = normalizeEmail(email)
  const user = readUsers().find((item) => item.email === normalizedEmail)

  if (!user) {
    return { ok: false, code: 'INVALID_CREDENTIALS', message: "Email yoki parol noto'g'ri" }
  }

  const passwordHash = await hashPassword(password, user.salt)

  if (passwordHash !== user.passwordHash) {
    return { ok: false, code: 'INVALID_CREDENTIALS', message: "Email yoki parol noto'g'ri" }
  }

  setLastEmail(normalizedEmail)
  writeSession({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    loggedInAt: new Date().toISOString(),
    remember: options.remember ?? true,
  })

  return { ok: true, user }
}

export function logoutUser() {
  writeSession(null)
}

export async function resetPassword(email, newPassword) {
  const normalizedEmail = normalizeEmail(email)
  const users = readUsers()
  const index = users.findIndex((user) => user.email === normalizedEmail)

  if (index === -1) {
    return {
      ok: false,
      code: 'EMAIL_NOT_FOUND',
      message: 'Bunday email bilan akkaunt topilmadi',
    }
  }

  const salt = randomSalt()
  const passwordHash = await hashPassword(newPassword, salt)
  const updatedAt = new Date().toISOString()
  const updatedUser = {
    ...users[index],
    salt,
    passwordHash,
    updatedAt,
  }

  writeUsers(users.map((user, userIndex) => (userIndex === index ? updatedUser : user)))
  setLastEmail(normalizedEmail)

  return { ok: true, user: updatedUser }
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key !== null && event.key !== SESSION_KEY) return

    const next = readSession()
    if (JSON.stringify(next) === JSON.stringify(sessionCache)) return

    sessionCache = next
    emit()
  })
}
