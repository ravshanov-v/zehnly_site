import { getSession, subscribe as subscribeSession } from './authStore.js'

const STORAGE_PREFIX = 'zehnly_quiz_progress:'
const GUEST_KEY = 'guest'

export const BATCH_SIZE = 20

const listeners = new Set()

let cacheKey = null
let cacheRaw = null
let cacheValue = {}

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

function storageKey() {
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
