import { getSession, subscribe as subscribeSession } from './authStore.js'
import { isSupabaseEnabled, supabase } from '../lib/supabase.js'

const STORAGE_PREFIX = 'kredorium_quiz_progress:'
const GUEST_KEY = 'guest'
const SYNC_DELAY_MS = 800

export const BATCH_SIZE = 20

const listeners = new Set()
const syncTimers = new Map()

let cacheKey = null
let cacheRaw = null
let cacheValue = {}
let remoteUserId = null
let remoteGeneration = 0

function emit() {
  listeners.forEach((listener) => listener())
}

export function subscribe(listener) {
  listeners.add(listener)
  const unsubscribeSession = subscribeSession(listener)

  return () => {
    listeners.delete(listener)
    unsubscribeSession()
  }
}

function currentUserId() {
  return isSupabaseEnabled ? getSession()?.id || null : null
}

function storageKey() {
  if (isSupabaseEnabled) {
    const session = getSession()
    return `${STORAGE_PREFIX}${session?.id ? `user:${session.id}` : GUEST_KEY}`
  }

  return `${STORAGE_PREFIX}${getSession()?.email || GUEST_KEY}`
}

function readRaw(key) {
  try {
    return localStorage.getItem(key) ?? '{}'
  } catch {
    return '{}'
  }
}

function parse(raw) {
  try {
    const value = JSON.parse(raw)
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
  } catch {
    return {}
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage to'lgan yoki mavjud bo'lmagan holatda jim o'tamiz
  }
}

function removeRaw(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // muhim emas
  }
}

function syncCache(key, value) {
  cacheKey = key
  cacheRaw = JSON.stringify(value)
  cacheValue = value
}

function saveState(value) {
  const key = storageKey()
  write(key, value)
  syncCache(key, value)
  emit()
}

function shuffleIds(ids) {
  const next = [...ids]

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }

  return next
}

export function getProgressState() {
  const key = storageKey()
  const raw = readRaw(key)

  if (key !== cacheKey || raw !== cacheRaw) {
    cacheKey = key
    cacheRaw = raw
    cacheValue = parse(raw)
  }

  return cacheValue
}

export function getCategoryProgress(categoryId) {
  return getProgressState()[categoryId] || null
}

function scheduleRemoteSync(categoryId) {
  const userId = currentUserId()
  if (!userId) return

  const existing = syncTimers.get(categoryId)
  if (existing) clearTimeout(existing)

  syncTimers.set(
    categoryId,
    setTimeout(() => {
      syncTimers.delete(categoryId)

      const session = getSession()
      if (!session?.id || session.id !== userId) return

      const state = getProgressState()[categoryId]
      if (!state) return

      supabase
        .from('quiz_progress')
        .upsert(
          {
            user_id: userId,
            category_id: categoryId,
            question_order: state.order,
            cursor: state.cursor,
            cycles: state.cycles || 0,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,category_id' }
        )
        .then(({ error }) => {
          if (error) console.warn('progress saqlanmadi:', error.message)
        })
    }, SYNC_DELAY_MS)
  )
}

function clearSyncTimers() {
  syncTimers.forEach((timer) => clearTimeout(timer))
  syncTimers.clear()
}

function mapRemote(row) {
  return {
    order: Array.isArray(row.question_order) ? row.question_order : [],
    cursor: Number.isFinite(row.cursor) ? row.cursor : 0,
    cycles: Number.isFinite(row.cycles) ? row.cycles : 0,
    updatedAt: row.updated_at || new Date().toISOString(),
  }
}

async function loadRemoteProgress(userId, generation = remoteGeneration) {
  const { data, error } = await supabase
    .from('quiz_progress')
    .select('*')
    .eq('user_id', userId)

  if (generation !== remoteGeneration || remoteUserId !== userId) return

  if (error) {
    console.warn('progress yuklanmadi:', error.message)
    return
  }

  const key = storageKey()
  const localState = parse(readRaw(key))
  const remoteRows = data || []
  const merged = { ...localState }
  const toPush = []

  for (const row of remoteRows) {
    const remote = mapRemote(row)
    const local = merged[row.category_id]

    if (!local) {
      merged[row.category_id] = remote
      continue
    }

    const localTime = new Date(local.updatedAt || 0).getTime()
    const remoteTime = new Date(remote.updatedAt || 0).getTime()

    if (remoteTime >= localTime) {
      merged[row.category_id] = remote
    } else {
      toPush.push(row.category_id)
    }
  }

  const remoteIds = new Set(remoteRows.map((row) => row.category_id))

  for (const categoryId of Object.keys(localState)) {
    if (!remoteIds.has(categoryId)) toPush.push(categoryId)
  }

  write(key, merged)
  syncCache(key, merged)
  emit()

  toPush.forEach((categoryId) => scheduleRemoteSync(categoryId))
}

function syncForSession() {
  const userId = currentUserId()
  clearSyncTimers()

  if (userId) {
    if (remoteUserId === userId) return

    remoteUserId = userId
    remoteGeneration += 1
    loadRemoteProgress(userId, remoteGeneration)
    return
  }

  remoteUserId = null
  remoteGeneration += 1

  const key = storageKey()
  const raw = readRaw(key)
  cacheKey = key
  cacheRaw = raw
  cacheValue = parse(raw)
  emit()
}

export async function mergeGuestProgress() {
  const userId = currentUserId()
  if (!userId) return

  const guestKey = `${STORAGE_PREFIX}${GUEST_KEY}`
  const guestState = parse(readRaw(guestKey))
  const categoryIds = Object.keys(guestState)
  if (categoryIds.length === 0) return

  const { data, error } = await supabase
    .from('quiz_progress')
    .select('category_id')
    .eq('user_id', userId)

  if (error) {
    console.warn('Mehmon progressi tekshirilmadi:', error.message)
    return
  }

  const existing = new Set((data || []).map((row) => row.category_id))
  const rows = categoryIds
    .filter((categoryId) => !existing.has(categoryId))
    .map((categoryId) => {
      const item = guestState[categoryId] || {}

      return {
        user_id: userId,
        category_id: categoryId,
        question_order: Array.isArray(item.order) ? item.order : [],
        cursor: Number.isFinite(item.cursor) ? item.cursor : 0,
        cycles: Number.isFinite(item.cycles) ? item.cycles : 0,
        updated_at: item.updatedAt || new Date().toISOString(),
      }
    })

  if (rows.length > 0) {
    const { error: upsertError } = await supabase
      .from('quiz_progress')
      .upsert(rows, { onConflict: 'user_id,category_id', ignoreDuplicates: true })

    if (upsertError) {
      console.warn('Mehmon progressi ko‘chirilmadi:', upsertError.message)
      return
    }
  }

  removeRaw(guestKey)
  remoteUserId = userId
  remoteGeneration += 1
  return loadRemoteProgress(userId, remoteGeneration)
}

export function ensureCategoryProgress(
  categoryId,
  questionIds,
  { reset = false, shuffle = false } = {}
) {
  const state = getProgressState()
  const current = state[categoryId] || null
  const idSet = new Set(questionIds)

  const orderIsValid =
    Array.isArray(current?.order) &&
    current.order.length === questionIds.length &&
    current.order.every((id) => idSet.has(id))

  let order = orderIsValid ? current.order : null
  let cursor = orderIsValid ? current.cursor : 0
  let cycles = orderIsValid ? current.cycles || 0 : 0

  if (!order || reset) {
    order = shuffle ? shuffleIds(questionIds) : [...questionIds]
    cursor = 0
  }

  if (!Number.isFinite(cursor) || cursor < 0 || cursor > order.length) cursor = 0

  const next = {
    order,
    cursor,
    cycles,
    updatedAt: new Date().toISOString(),
  }

  const unchanged =
    current &&
    !reset &&
    current.cursor === next.cursor &&
    current.cycles === next.cycles &&
    Array.isArray(current.order) &&
    current.order.length === order.length &&
    current.order.every((id, index) => id === order[index])

  if (!unchanged) {
    saveState({ ...state, [categoryId]: next })
    scheduleRemoteSync(categoryId)
  }

  return next
}

export function advanceCategoryProgress(categoryId, amount = 1) {
  const state = getProgressState()
  const current = state[categoryId]

  if (!current) return null

  const cursor = Math.min(Math.max(current.cursor + amount, 0), current.order.length)

  if (cursor === current.cursor) return current

  const next = {
    ...current,
    cursor,
    cycles: cursor >= current.order.length ? (current.cycles || 0) + 1 : current.cycles || 0,
    updatedAt: new Date().toISOString(),
  }

  saveState({ ...state, [categoryId]: next })
  scheduleRemoteSync(categoryId)
  return next
}

export function resetCategoryProgress(categoryId, questionIds, { shuffle = false } = {}) {
  return ensureCategoryProgress(categoryId, questionIds, { reset: true, shuffle })
}

export function getCategoryBatch(categoryId, questions) {
  const ids = questions.map((question) => question.id)
  const state = ensureCategoryProgress(categoryId, ids)
  const byId = new Map(questions.map((question) => [question.id, question]))
  const start = state.cursor
  const end = Math.min(start + BATCH_SIZE, state.order.length)
  const batch = state.order
    .slice(start, end)
    .map((id) => byId.get(id))
    .filter(Boolean)

  return {
    state,
    batch,
    start,
    total: state.order.length,
    completed: start >= state.order.length,
  }
}

subscribeSession(syncForSession)
syncForSession()
