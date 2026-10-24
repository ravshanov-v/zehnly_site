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
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeSession(session) {
  sessionCache = session

  if (session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  } else {
    localStorage.removeItem(SESSION_KEY)
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
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
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
  return localStorage.getItem(LAST_EMAIL_KEY) ?? ''
}

export function setLastEmail(email) {
  localStorage.setItem(LAST_EMAIL_KEY, normalizeEmail(email))
}

export function getUsers() {
  return readUsers()
}

export async function registerUser(email, name, password) {
  const normalizedEmail = normalizeEmail(email)
  const users = readUsers()

  if (users.some((user) => user.email === normalizedEmail)) {
    return { ok: false, message: "Bu email allaqachon ro'yxatdan o'tgan. Kirish bo'limidan foydalaning" }
  }

  const salt = randomSalt()
  const passwordHash = await hashPassword(password, salt)
  const createdAt = new Date().toISOString()

  const user = {
    id: createId(),
    email: normalizedEmail,
    name,
    salt,
    passwordHash,
    createdAt,
  }

  writeUsers([...users, user])
  setLastEmail(normalizedEmail)
  writeSession({ name: user.name, email: user.email, createdAt, loggedInAt: createdAt })

  return { ok: true, user }
}

export async function loginUser(email, password) {
  const normalizedEmail = normalizeEmail(email)
  const user = readUsers().find((item) => item.email === normalizedEmail)

  if (!user) {
    return { ok: false, message: "Email yoki parol noto'g'ri" }
  }

  const passwordHash = await hashPassword(password, user.salt)

  if (passwordHash !== user.passwordHash) {
    return { ok: false, message: "Email yoki parol noto'g'ri" }
  }

  setLastEmail(normalizedEmail)
  writeSession({ name: user.name, email: user.email, createdAt: user.createdAt, loggedInAt: new Date().toISOString() })

  return { ok: true, user }
}

export function logoutUser() {
  writeSession(null)
}
