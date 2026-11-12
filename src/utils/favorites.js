import { getSession } from './authStore.js'

const GUEST_KEY = 'zehnly_favorites'
const USER_KEY_PREFIX = 'zehnly_favorites:'
const MAX_FAVORITES = 200

const listeners = new Set()

let cacheKey = null
let cacheRaw = null
let cacheValue = []

function emit() {
  listeners.forEach((listener) => listener())
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function currentEmail() {
  return getSession()?.email || null
}

function storageKey(email = currentEmail()) {
  return email ? `${USER_KEY_PREFIX}${email}` : GUEST_KEY
}

function readRaw(key) {
  try {
    return localStorage.getItem(key) ?? '[]'
  } catch {
    return '[]'
  }
}

function parse(raw) {
  try {
    const value = JSON.parse(raw)
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : []
  } catch {
    return []
  }
}

function write(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids))
  } catch {
    // muhim emas
  }
}

function syncCache(key, ids) {
  cacheKey = key
  cacheRaw = JSON.stringify(ids)
  cacheValue = ids
}

export function getFavorites() {
  const key = storageKey()
  const raw = readRaw(key)

  if (key !== cacheKey || raw !== cacheRaw) {
    cacheKey = key
    cacheRaw = raw
    cacheValue = parse(raw)
  }

  return cacheValue
}

export function isFavorite(id) {
  return getFavorites().includes(id)
}

export function toggleFavorite(id) {
  const key = storageKey()
  const current = parse(readRaw(key))
  const ids = current.includes(id)
    ? current.filter((item) => item !== id)
    : [id, ...current].slice(0, MAX_FAVORITES)

  write(key, ids)
  syncCache(key, ids)
  emit()
  return ids.includes(id)
}

export function mergeGuestFavorites(email) {
  if (!email) return

  const guestIds = parse(readRaw(GUEST_KEY))
  if (guestIds.length === 0) return

  const userKey = `${USER_KEY_PREFIX}${email}`
  const userIds = parse(readRaw(userKey))
  const merged = [...new Set([...userIds, ...guestIds])].slice(0, MAX_FAVORITES)

  write(userKey, merged)
  try {
    localStorage.removeItem(GUEST_KEY)
  } catch {
    // muhim emas
  }

  if (currentEmail() === email) syncCache(userKey, merged)
  emit()
}
