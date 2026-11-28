import { getSession, subscribe as subscribeSession } from './authStore.js'
import { isSupabaseEnabled, supabase } from '../lib/supabase.js'

const GUEST_KEY = 'kredorium_favorites'
const USER_KEY_PREFIX = 'kredorium_favorites:'
const MAX_FAVORITES = 200
const PENDING_PREFIX = 'kredorium_pending_favorites:'

const listeners = new Set()

let activeKey = null
let activeRaw = null
let activeValue = []
let remoteUserId = null
let remoteGeneration = 0

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

function currentUserId() {
  return isSupabaseEnabled ? getSession()?.id || null : null
}

function storageKey(email = currentEmail()) {
  return email ? `${USER_KEY_PREFIX}${email}` : GUEST_KEY
}

function pendingKey(userId) {
  return `${PENDING_PREFIX}${userId}`
}

function readRaw(key) {
  try {
    return localStorage.getItem(key) ?? '[]'
  } catch {
    return '[]'
  }
}

function parseIds(raw) {
  try {
    const value = JSON.parse(raw)
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : []
  } catch {
    return []
  }
}

function parseItems(raw) {
  try {
    const value = JSON.parse(raw)
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

function writeRaw(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // muhim emas
  }
}

function removeRaw(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // muhim emas
  }
}

function readLocal(key) {
  const raw = readRaw(key)

  if (key !== activeKey || raw !== activeRaw) {
    activeKey = key
    activeRaw = raw
    activeValue = parseIds(raw)
  }

  return activeValue
}

function readPending(userId) {
  return parseItems(readRaw(pendingKey(userId)))
}

function writePending(userId, items) {
  writeRaw(pendingKey(userId), items)
}

function enqueuePending(userId, item) {
  writePending(userId, [...readPending(userId), item])
}

async function flushPending(userId) {
  const items = readPending(userId)
  if (items.length === 0) return

  const remaining = []

  for (const item of items) {
    if (item.op === 'add') {
      const { error } = await supabase
        .from('favorites')
        .upsert(
          { user_id: userId, center_id: item.centerId },
          { onConflict: 'user_id,center_id', ignoreDuplicates: true }
        )

      if (error) remaining.push(item)
    } else if (item.op === 'remove') {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', userId)
        .eq('center_id', item.centerId)

      if (error) remaining.push(item)
    }
  }

  writePending(userId, remaining)
}

export function getFavorites() {
  if (currentUserId()) return activeValue

  return readLocal(storageKey())
}

export function isFavorite(id) {
  return getFavorites().includes(id)
}

export function loadFavorites() {
  const userId = currentUserId()

  if (!userId) {
    readLocal(storageKey())
    emit()
    return Promise.resolve(activeValue)
  }

  remoteGeneration += 1
  return loadRemoteFavorites(userId, remoteGeneration)
}

async function loadRemoteFavorites(userId, generation = remoteGeneration) {
  await flushPending(userId)

  const { data, error } = await supabase
    .from('favorites')
    .select('center_id')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(MAX_FAVORITES)

  if (generation !== remoteGeneration || remoteUserId !== userId) return activeValue

  if (error) {
    console.warn('favorites yuklanmadi:', error.message)
    return activeValue
  }

  activeKey = `remote:${userId}`
  activeRaw = null
  activeValue = (data || []).map((row) => row.center_id).filter(Boolean)
  emit()

  return activeValue
}

function syncForSession() {
  const userId = currentUserId()

  if (userId) {
    if (remoteUserId === userId) return

    remoteUserId = userId
    remoteGeneration += 1
    loadRemoteFavorites(userId, remoteGeneration)
    return
  }

  remoteUserId = null
  remoteGeneration += 1
  readLocal(storageKey())
  emit()
}

export function toggleFavorite(id) {
  const userId = currentUserId()

  if (userId) {
    const wasFavorite = activeValue.includes(id)
    const next = wasFavorite
      ? activeValue.filter((item) => item !== id)
      : [id, ...activeValue].slice(0, MAX_FAVORITES)

    activeKey = `remote:${userId}`
    activeRaw = null
    activeValue = next
    emit()

    const op = wasFavorite ? 'remove' : 'add'

    const persist = async () => {
      const request = wasFavorite
        ? supabase.from('favorites').delete().eq('user_id', userId).eq('center_id', id)
        : supabase
            .from('favorites')
            .upsert(
              { user_id: userId, center_id: id },
              { onConflict: 'user_id,center_id', ignoreDuplicates: true }
            )

      const { error } = await request

      if (error) {
        console.warn('favorites saqlanmadi:', error.message)
        enqueuePending(userId, { op, centerId: id })
      }
    }

    persist()

    return next.includes(id)
  }

  const key = storageKey()
  const current = parseIds(readRaw(key))
  const ids = current.includes(id)
    ? current.filter((item) => item !== id)
    : [id, ...current].slice(0, MAX_FAVORITES)

  writeRaw(key, ids)
  activeKey = key
  activeRaw = JSON.stringify(ids)
  activeValue = ids
  emit()

  return ids.includes(id)
}

export async function mergeGuestFavorites(email) {
  const guestIds = parseIds(readRaw(GUEST_KEY))
  const userId = currentUserId()

  if (isSupabaseEnabled) {
    if (!userId) return
    if (guestIds.length === 0) return

    const rows = guestIds.map((centerId) => ({ user_id: userId, center_id: centerId }))
    const { error } = await supabase
      .from('favorites')
      .upsert(rows, { onConflict: 'user_id,center_id', ignoreDuplicates: true })

    if (error) {
      console.warn('Mehmon sevimlilari ko‘chirilmadi:', error.message)
      return
    }

    removeRaw(GUEST_KEY)
    remoteUserId = userId
    remoteGeneration += 1
    return loadRemoteFavorites(userId, remoteGeneration)
  }

  if (!email) return
  if (guestIds.length === 0) return

  const userKey = storageKey(email)
  const userIds = parseIds(readRaw(userKey))
  const merged = [...new Set([...userIds, ...guestIds])].slice(0, MAX_FAVORITES)

  writeRaw(userKey, merged)
  removeRaw(GUEST_KEY)

  if (currentEmail() === email) {
    activeKey = userKey
    activeRaw = JSON.stringify(merged)
    activeValue = merged
  }

  emit()
}

subscribeSession(syncForSession)
syncForSession()
