import { getSession } from './authStore.js'

const GUEST_KEY = 'zehnly_quiz_history'
const USER_KEY_PREFIX = 'zehnly_quiz_history:'
const MAX_RECORDS = 200

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
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

function write(key, records) {
  try {
    localStorage.setItem(key, JSON.stringify(records))
  } catch {
    // localStorage to'lgan yoki mavjud bo'lmagan holatda jim o'tamiz
  }
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  return `record-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function sortByDate(records) {
  return [...records].sort((a, b) => new Date(b.date) - new Date(a.date))
}

function syncCache(key, records) {
  cacheKey = key
  cacheRaw = JSON.stringify(records)
  cacheValue = records
}

export function getHistory() {
  const key = storageKey()
  const raw = readRaw(key)

  if (key !== cacheKey || raw !== cacheRaw) {
    cacheKey = key
    cacheRaw = raw
    cacheValue = parse(raw)
  }

  return cacheValue
}

export function createHistoryRecord({
  categoryId = null,
  categoryTitle,
  categoryGroup,
  totalAnswered,
  correctCount,
  xp,
}) {
  const wrongCount = Math.max(totalAnswered - correctCount, 0)

  return {
    id: createId(),
    date: new Date().toISOString(),
    categoryId: categoryId || 'mixed',
    categoryTitle: categoryTitle || 'Aralash savollar',
    categoryGroup: categoryGroup || 'Arena',
    totalAnswered,
    correctCount,
    wrongCount,
    xp: xp || 0,
    accuracy: totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0,
  }
}

export function addHistoryRecord(record) {
  const key = storageKey()
  const records = sortByDate([record, ...parse(readRaw(key))]).slice(0, MAX_RECORDS)
  write(key, records)
  syncCache(key, records)
  emit()
  return record
}

export function updateHistoryRecord(recordId, patch) {
  const key = storageKey()
  const records = sortByDate(
    parse(readRaw(key)).map((record) =>
      record.id === recordId ? { ...record, ...patch } : record
    )
  )
  write(key, records)
  syncCache(key, records)
  emit()
}

export function mergeGuestHistory(email) {
  if (!email) return

  const guestRecords = parse(readRaw(GUEST_KEY))
  if (guestRecords.length === 0) return

  const userKey = `${USER_KEY_PREFIX}${email}`
  const userRecords = parse(readRaw(userKey))
  const knownIds = new Set(userRecords.map((record) => record.id))
  const merged = sortByDate([
    ...userRecords,
    ...guestRecords.filter((record) => !knownIds.has(record.id)),
  ]).slice(0, MAX_RECORDS)

  write(userKey, merged)
  try {
    localStorage.removeItem(GUEST_KEY)
  } catch {
    // muhim emas
  }

  if (currentEmail() === email) syncCache(userKey, merged)
  emit()
}

function localDateKey(isoDate) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString('en-CA')
}

export function computeStreak(records) {
  const days = new Set(records.map((record) => localDateKey(record.date)).filter(Boolean))
  if (days.size === 0) return 0

  const cursor = new Date()
  if (!days.has(cursor.toLocaleDateString('en-CA'))) {
    cursor.setDate(cursor.getDate() - 1)
    if (!days.has(cursor.toLocaleDateString('en-CA'))) return 0
  }

  let streak = 0
  while (days.has(cursor.toLocaleDateString('en-CA'))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }

  return streak
}

export function computeStats(records = getHistory()) {
  const totalTests = records.length
  const totalAnswered = records.reduce((sum, record) => sum + (record.totalAnswered || 0), 0)
  const correctCount = records.reduce((sum, record) => sum + (record.correctCount || 0), 0)
  const xp = records.reduce((sum, record) => sum + (record.xp || 0), 0)
  const bestXp = records.reduce((best, record) => Math.max(best, record.xp || 0), 0)
  const bestAccuracy = records.reduce((best, record) => Math.max(best, record.accuracy || 0), 0)

  return {
    totalTests,
    totalAnswered,
    correctCount,
    xp,
    bestXp,
    bestAccuracy,
    accuracy: totalAnswered > 0 ? `${Math.round((correctCount / totalAnswered) * 100)}%` : '0%',
    streak: computeStreak(records),
  }
}

export function formatRecordDate(isoDate) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''

  const months = [
    'yanvar',
    'fevral',
    'mart',
    'aprel',
    'may',
    'iyun',
    'iyul',
    'avgust',
    'sentabr',
    'oktabr',
    'noyabr',
    'dekabr',
  ]

  return `${date.getDate()}-${months[date.getMonth()]}, ${date.getFullYear()}`
}

export function formatRelativeDate(isoDate) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''

  const diffMinutes = Math.round((Date.now() - date.getTime()) / 60000)

  if (diffMinutes < 1) return 'Hozir'
  if (diffMinutes < 60) return `${diffMinutes} daqiqa oldin`

  const diffHours = Math.round(diffMinutes / 60)
  if (diffHours < 24) return `${diffHours} soat oldin`

  const diffDays = Math.round(diffHours / 24)
  if (diffDays < 7) return `${diffDays} kun oldin`

  return formatRecordDate(isoDate)
}
