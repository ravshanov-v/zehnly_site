import { isSupabaseEnabled, supabase } from '../lib/supabase.js'
import { normalizeEmail } from './validation.js'

const USERS_KEY = 'kredorium-users'
const SESSION_KEY = 'kredorium-session'
const LAST_EMAIL_KEY = 'kredorium-last-email'

const listeners = new Set()

let sessionCache = null
let authReady = false
let initPromise = null
let storageListenerAttached = false

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

export function getAuthReady() {
  return authReady
}

export const isRemoteAuth = isSupabaseEnabled

function mapSupabaseSession(session) {
  const user = session?.user
  if (!user?.email) return null

  const metadata = user.user_metadata || {}

  return {
    id: user.id,
    email: user.email,
    name:
      metadata.name ||
      metadata.full_name ||
      metadata.user_name ||
      user.email.split('@')[0],
    avatarUrl: metadata.avatar_url || metadata.picture || '',
    createdAt: user.created_at,
    created_at: user.created_at,
    loggedInAt: new Date().toISOString(),
    remember: true,
  }
}

function applySupabaseSession(session) {
  const next = mapSupabaseSession(session)
  const changed = JSON.stringify(next) !== JSON.stringify(sessionCache)

  sessionCache = next
  authReady = true
  if (changed) emit()

  return next
}

function mapAuthError(error) {
  const message = String(error?.message || '')
  const code = String(error?.code || '')
  const normalized = `${code} ${message}`.toLowerCase()

  if (
    normalized.includes('invalid login credentials') ||
    normalized.includes('invalid_credentials')
  ) {
    return {
      ok: false,
      code: 'INVALID_CREDENTIALS',
      message: "Email yoki parol noto'g'ri",
    }
  }

  if (
    normalized.includes('already registered') ||
    normalized.includes('already been registered') ||
    normalized.includes('user_already_exists')
  ) {
    return {
      ok: false,
      code: 'EMAIL_TAKEN',
      message: "Bu email allaqachon ro'yxatdan o'tgan",
    }
  }

  if (normalized.includes('email not confirmed')) {
    return {
      ok: false,
      code: 'EMAIL_NOT_CONFIRMED',
      message: "Avval emailingizni tasdiqlang. Pochta qutingizni tekshiring",
    }
  }

  if (
    normalized.includes('rate limit') ||
    normalized.includes('too many requests') ||
    normalized.includes('over_email_send_rate_limit')
  ) {
    return {
      ok: false,
      code: 'RATE_LIMIT',
      message: "Juda ko'p urinish bo'ldi. Bir oz kutib, qayta urinib ko'ring",
    }
  }

  if (normalized.includes('password') && normalized.includes('least')) {
    return {
      ok: false,
      code: 'WEAK_PASSWORD',
      message: "Parol kamida 6 belgidan iborat bo'lishi kerak",
    }
  }

  if (
    normalized.includes('provider is not enabled') ||
    normalized.includes('unsupported provider') ||
    normalized.includes('provider_disabled') ||
    normalized.includes('provider not found')
  ) {
    return {
      ok: false,
      code: 'PROVIDER_DISABLED',
      message: 'Google orqali kirish hozircha mavjud emas',
    }
  }

  if (normalized.includes('oauth') || normalized.includes('callback')) {
    return {
      ok: false,
      code: 'OAUTH_ERROR',
      message: "Google orqali kirishda xatolik yuz berdi. Qayta urinib ko'ring",
    }
  }

  if (normalized.includes('failed to fetch') || normalized.includes('network')) {
    return {
      ok: false,
      code: 'NETWORK_ERROR',
      message: "Tarmoq bilan aloqa yo'q. Internetni tekshirib, qayta urinib ko'ring",
    }
  }

  return {
    ok: false,
    code: 'UNKNOWN',
    message: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring",
  }
}

export function initAuth() {
  if (initPromise) return initPromise

  if (!isSupabaseEnabled) {
    sessionCache = readLocalSession()

    if (typeof window !== 'undefined' && !storageListenerAttached) {
      storageListenerAttached = true
      window.addEventListener('storage', (event) => {
        if (event.key !== null && event.key !== SESSION_KEY) return

        const next = readLocalSession()
        if (JSON.stringify(next) === JSON.stringify(sessionCache)) return

        sessionCache = next
        emit()
      })
    }

    authReady = true
    emit()
    initPromise = Promise.resolve()
    return initPromise
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'INITIAL_SESSION') return
    applySupabaseSession(session)
  })

  initPromise = supabase.auth
    .getSession()
    .then(({ data }) => {
      applySupabaseSession(data?.session)
    })
    .catch(() => {
      sessionCache = null
    })
    .finally(() => {
      authReady = true
      emit()
    })

  return initPromise
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

export async function registerUser(email, name, password, options = {}) {
  const normalizedEmail = normalizeEmail(email)
  const displayName = String(name ?? '').trim()

  if (isSupabaseEnabled) {
    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: { data: { name: displayName } },
    })

    if (error) return mapAuthError(error)

    if (data?.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
      return {
        ok: false,
        code: 'EMAIL_TAKEN',
        message: "Bu email allaqachon ro'yxatdan o'tgan",
      }
    }

    if (!data?.session) {
      return {
        ok: false,
        code: 'EMAIL_CONFIRMATION_REQUIRED',
        message:
          "Hisob yaratildi. Emailingizga yuborilgan tasdiqlash havolasini bosing va keyin kiring",
      }
    }

    setLastEmail(normalizedEmail)

    return { ok: true, user: applySupabaseSession(data.session) }
  }

  return registerLocalUser(normalizedEmail, displayName, password, options)
}

export async function loginUser(email, password, options = {}) {
  const normalizedEmail = normalizeEmail(email)

  if (isSupabaseEnabled) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    })

    if (error) return mapAuthError(error)
    if (!data?.session) {
      return {
        ok: false,
        code: 'UNKNOWN',
        message: "Tizimga kirib bo'lmadi. Qayta urinib ko'ring",
      }
    }

    setLastEmail(normalizedEmail)

    return { ok: true, user: applySupabaseSession(data.session) }
  }

  return loginLocalUser(normalizedEmail, password, options)
}

export async function loginWithGoogle() {
  if (!isSupabaseEnabled) {
    return {
      ok: false,
      code: 'PROVIDER_DISABLED',
      message: "Google orqali kirish hozircha mavjud emas. Mehmon rejimida davom eting",
    }
  }

  try {
    const redirectTo =
      typeof window === 'undefined' ? undefined : `${window.location.origin}/`

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: { prompt: 'select_account' },
      },
    })

    if (error) return mapAuthError(error)

    return { ok: true, redirect: true }
  } catch (error) {
    return mapAuthError(error)
  }
}

export function logoutUser() {
  if (!isSupabaseEnabled) {
    writeLocalSession(null)
    return Promise.resolve()
  }

  sessionCache = null
  emit()

  return supabase.auth.signOut().catch(() => {})
}

function recoveryRedirectUrl() {
  if (typeof window === 'undefined') return undefined
  return `${window.location.origin}/auth/recover`
}

export async function resetPassword(email, newPassword = '') {
  const normalizedEmail = normalizeEmail(email)

  if (isSupabaseEnabled) {
    const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
      redirectTo: recoveryRedirectUrl(),
    })

    if (error) return mapAuthError(error)

    return { ok: true }
  }

  if (newPassword) return resetLocalPassword(normalizedEmail, newPassword)

  return sendLocalReset(normalizedEmail)
}

export async function updatePassword(newPassword) {
  if (isSupabaseEnabled) {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword })

    if (error) return mapAuthError(error)

    return { ok: true, user: data?.user ? applySupabaseSession({ user: data.user }) : null }
  }

  const email = sessionCache?.email
  if (!email) {
    return {
      ok: false,
      code: 'NO_SESSION',
      message: "Sessiya topilmadi. Parolni tiklash havolasidan qayta foydalaning",
    }
  }

  return resetLocalPassword(email, newPassword)
}

// --- Lokal fallback (Supabase sozlanmagan holat uchun) --------------------

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

function readLocalSession() {
  const session = readSession()
  if (session) session.remember = session.remember ?? true
  return session
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

function writeLocalSession(session) {
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

function registerLocalUser(normalizedEmail, displayName, password, options = {}) {
  const users = readUsers()

  if (users.some((user) => user.email === normalizedEmail)) {
    return {
      ok: false,
      code: 'EMAIL_TAKEN',
      message: "Bu email allaqachon ro'yxatdan o'tgan",
    }
  }

  const salt = randomSalt()

  return hashPassword(password, salt).then((passwordHash) => {
    const createdAt = new Date().toISOString()
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
    writeLocalSession({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt,
      loggedInAt: createdAt,
      remember: options.remember ?? true,
    })

    return { ok: true, user }
  })
}

async function loginLocalUser(normalizedEmail, password, options = {}) {
  const user = readUsers().find((item) => item.email === normalizedEmail)

  if (!user) {
    return { ok: false, code: 'INVALID_CREDENTIALS', message: "Email yoki parol noto'g'ri" }
  }

  const passwordHash = await hashPassword(password, user.salt)

  if (passwordHash !== user.passwordHash) {
    return { ok: false, code: 'INVALID_CREDENTIALS', message: "Email yoki parol noto'g'ri" }
  }

  setLastEmail(normalizedEmail)
  writeLocalSession({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    loggedInAt: new Date().toISOString(),
    remember: options.remember ?? true,
  })

  return { ok: true, user }
}

function sendLocalReset(normalizedEmail) {
  const user = readUsers().find((item) => item.email === normalizedEmail)

  if (!user) {
    return {
      ok: false,
      code: 'EMAIL_NOT_FOUND',
      message: 'Bunday email bilan hisob topilmadi',
    }
  }

  return { ok: true, local: true }
}

async function resetLocalPassword(normalizedEmail, newPassword) {
  const users = readUsers()
  const index = users.findIndex((user) => user.email === normalizedEmail)

  if (index === -1) {
    return {
      ok: false,
      code: 'EMAIL_NOT_FOUND',
      message: 'Bunday email bilan hisob topilmadi',
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
