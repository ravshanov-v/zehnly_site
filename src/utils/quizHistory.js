import { getSession, subscribe as subscribeSession } from './authStore.js'
import { isSupabaseEnabled, supabase } from '../lib/supabase.js'

const GUEST_KEY = 'zehnly_quiz_history'
const USER_KEY_PREFIX = 'zehnly_quiz_history:'
const MAX_RECORDS = 200
const REMOTE_PREFIX = 'remote:'
const PENDING_PREFIX = 'zehnly_pending_history:'

const listeners = new Set()
const pendingInserts = new Map()

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

function writeRaw(key, value) {
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

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  return `record-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    String(value ?? '')
  )
}

function sortByDate(records) {
  return [...records].sort((a, b) => new Date(b.date) - new Date(a.date))
}

function mapRow(row) {
  return {
    id: row.id,
    date: row.created_at,
    categoryId: row.category_id,
    categoryTitle: row.category_title,
    categoryGroup: row.category_group,
    totalAnswered: row.total_answered || 0,
    correctCount: row.correct_count || 0,
    wrongCount: row.wrong_count || 0,
    xp: row.xp || 0,
    accuracy: row.accuracy || 0,
  }
}

function toRow(record, userId) {
  return {
    id: isUuid(record.id) ? record.id : createId(),
    user_id: userId,
    category_id: record.categoryId || 'mixed',
    category_title: record.categoryTitle || 'Aralash savollar',
    category_group: record.categoryGroup || 'Arena',
    total_answered: record.totalAnswered || 0,
    correct_count: record.correctCount || 0,
    wrong_count: record.wrongCount || 0,
    xp: record.xp || 0,
    accuracy: record.accuracy || 0,
    created_at: record.date || new Date().toISOString(),
  }
}

function toRowPatch(patch = {}) {
  const row = {}

  if (patch.date) row.created_at = patch.date
  if (patch.categoryId) row.category_id = patch.categoryId
  if (patch.categoryTitle) row.category_title = patch.categoryTitle
  if (patch.categoryGroup) row.category_group = patch.categoryGroup
  if (patch.totalAnswered !== undefined) row.total_answered = patch.totalAnswered
  if (patch.correctCount !== undefined) row.correct_count = patch.correctCount
  if (patch.wrongCount !== undefined) row.wrong_count = patch.wrongCount
  if (patch.xp !== undefined) row.xp = patch.xp
  if (patch.accuracy !== undefined) row.accuracy = patch.accuracy

  return row
}

function pendingKey(userId) {
  return `${PENDING_PREFIX}${userId}`
}

function readPending(userId) {
  return parse(readRaw(pendingKey(userId)))
}

function writePending(userId, items) {
  writeRaw(pendingKey(userId), items)
}

function enqueuePending(userId, item) {
  const items = readPending(userId)

  if (item.type === 'insert' && items.some((entry) => entry.type === 'insert' && entry.record.id === item.record.id)) {
    return
  }

  writePending(userId, [...items, item])
}

async function flushPending(userId) {
  const items = readPending(userId)
  if (items.length === 0) return

  const remaining = []

  for (const item of items) {
    if (item.type === 'insert') {
      const { error } = await supabase
        .from('quiz_history')
        .upsert(toRow(item.record, userId), { onConflict: 'id', ignoreDuplicates: true })

      if (error) remaining.push(item)
    } else if (item.type === 'update') {
      const { error } = await supabase
        .from('quiz_history')
        .update(toRowPatch(item.patch))
        .eq('id', item.id)
        .eq('user_id', userId)

      if (error) remaining.push(item)
    }
  }

  writePending(userId, remaining)
}

function readLocal(key) {
  const raw = readRaw(key)

  if (key !== activeKey || raw !== activeRaw) {
    activeKey = key
    activeRaw = raw
    activeValue = parse(raw)
  }

  return activeValue
}

export function getHistory() {
  if (currentUserId()) return activeValue

  return readLocal(storageKey())
}

export function loadHistory() {
  const userId = currentUserId()

  if (!userId) {
    readLocal(storageKey())
    emit()
    return Promise.resolve(activeValue)
  }

  remoteGeneration += 1
  return loadRemoteHistory(userId, remoteGeneration)
}

async function loadRemoteHistory(userId, generation = remoteGeneration) {
  await flushPending(userId)

  const { data, error } = await supabase
    .from('quiz_history')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(MAX_RECORDS)

  if (generation !== remoteGeneration || remoteUserId !== userId) return activeValue

  if (error) {
    console.warn('quiz_history yuklanmadi:', error.message)
    return activeValue
  }

  const rows = (data || []).map(mapRow)
  const pendingIds = new Set(pendingInserts.keys())
  const optimistic = activeValue.filter(
    (record) => pendingIds.has(record.id) && !rows.some((row) => row.id === record.id)
  )

  activeKey = `${REMOTE_PREFIX}${userId}`
  activeRaw = null
  activeValue = sortByDate([...rows, ...optimistic]).slice(0, MAX_RECORDS)
  emit()

  return activeValue
}

function syncForSession() {
  const userId = currentUserId()

  if (userId) {
    if (remoteUserId === userId) return

    remoteUserId = userId
    remoteGeneration += 1
    loadRemoteHistory(userId, remoteGeneration)
    return
  }

  remoteUserId = null
  remoteGeneration += 1
  readLocal(storageKey())
  emit()
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
  const userId = currentUserId()

  if (userId) {
    activeKey = `${REMOTE_PREFIX}${userId}`
    activeRaw = null
    activeValue = sortByDate([record, ...activeValue]).slice(0, MAX_RECORDS)
    emit()

    const promise = supabase
      .from('quiz_history')
      .upsert(toRow(record, userId), { onConflict: 'id', ignoreDuplicates: true })
      .then(({ error }) => {
        if (error) {
          console.warn('quiz_history saqlanmadi:', error.message)
          enqueuePending(userId, { type: 'insert', record })
        }
      })

    pendingInserts.set(record.id, promise)
    promise.finally(() => pendingInserts.delete(record.id))

    return record
  }

  const key = storageKey()
  const records = sortByDate([record, ...parse(readRaw(key))]).slice(0, MAX_RECORDS)
  writeRaw(key, records)
  activeKey = key
  activeRaw = JSON.stringify(records)
  activeValue = records
  emit()

  return record
}

export function updateHistoryRecord(recordId, patch) {
  const userId = currentUserId()

  if (userId) {
    activeValue = activeValue.map((record) =>
      record.id === recordId ? { ...record, ...patch } : record
    )
    emit()

    const persist = async () => {
      const { error } = await supabase
        .from('quiz_history')
        .update(toRowPatch(patch))
        .eq('id', recordId)
        .eq('user_id', userId)

      if (error) {
        console.warn('quiz_history yangilanmadi:', error.message)
        enqueuePending(userId, { type: 'update', id: recordId, patch })
      }
    }

    const insertPromise = pendingInserts.get(recordId)
    return insertPromise ? insertPromise.then(persist) : persist()
  }

  const key = storageKey()
  const records = sortByDate(
    parse(readRaw(key)).map((record) =>
      record.id === recordId ? { ...record, ...patch } : record
    )
  )
  writeRaw(key, records)
  activeKey = key
  activeRaw = JSON.stringify(records)
  activeValue = records
  emit()

  return Promise.resolve()
}

export async function mergeGuestHistory(email) {
  const guestRecords = parse(readRaw(GUEST_KEY))
  const userId = currentUserId()

  if (isSupabaseEnabled) {
    if (!userId) return

    if (guestRecords.length === 0) return

    const rows = guestRecords.map((record) => toRow(record, userId))
    const { error } = await supabase
      .from('quiz_history')
      .upsert(rows, { onConflict: 'id', ignoreDuplicates: true })

    if (error) {
      console.warn('Mehmon tarixi ko‘chirilmadi:', error.message)
      return
    }

    removeRaw(GUEST_KEY)
    remoteUserId = userId
    remoteGeneration += 1
    return loadRemoteHistory(userId, remoteGeneration)
  }

  if (!email) return

  if (guestRecords.length === 0) return

  const userKey = storageKey(email)
  const userRecords = parse(readRaw(userKey))
  const knownIds = new Set(userRecords.map((record) => record.id))
  const merged = sortByDate([
    ...userRecords,
    ...guestRecords.filter((record) => !knownIds.has(record.id)),
  ]).slice(0, MAX_RECORDS)

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
