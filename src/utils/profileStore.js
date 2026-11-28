import { getSession, subscribe as subscribeSession } from './authStore.js'
import { isSupabaseEnabled, supabase } from '../lib/supabase.js'

const GUEST_HISTORY_KEY = 'kredorium_quiz_history'
const GUEST_SYNC_PREFIX = 'kredorium_guest_xp_synced:'
const PROFILE_COLUMNS =
  'id,name,xp,tests_completed,correct_answers,total_answers,created_at,updated_at'

const listeners = new Set()
const guestSyncPromises = new Map()

let state = {
  userId: null,
  profile: null,
  loading: false,
  error: '',
}

let initialized = false
let remoteUserId = null
let generation = 0
let dataVersion = 0

function emit() {
  listeners.forEach((listener) => listener())
}

function setState(patch) {
  state = { ...state, ...patch }
  emit()
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function getProfileState() {
  return state
}

export function getProfile() {
  return state.profile
}

function normalizeRow(row) {
  if (!row || typeof row !== 'object') return null

  return {
    ...row,
    xp: Number(row.xp) || 0,
    tests_completed: Number(row.tests_completed) || 0,
    correct_answers: Number(row.correct_answers) || 0,
    total_answers: Number(row.total_answers) || 0,
  }
}

function applyRpcResult(userId, data) {
  if (!data || state.userId !== userId) return

  const row = normalizeRow(Array.isArray(data) ? data[0] : data)
  if (!row) return

  dataVersion += 1
  setState({ profile: row, loading: false, error: '' })
}

function readGuestRecords() {
  try {
    const raw = localStorage.getItem(GUEST_HISTORY_KEY)
    const records = raw ? JSON.parse(raw) : []
    return Array.isArray(records) ? records : []
  } catch {
    return []
  }
}

function guestSyncKey(userId) {
  return `${GUEST_SYNC_PREFIX}${userId}`
}

function readSyncedGuestIds(userId) {
  try {
    const raw = localStorage.getItem(guestSyncKey(userId))
    const ids = raw ? JSON.parse(raw) : []
    return Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

function writeSyncedGuestIds(userId, ids) {
  try {
    localStorage.setItem(guestSyncKey(userId), JSON.stringify(ids))
  } catch {
    // localStorage mavjud bo'lmasa sinxronizatsiya belgisi saqlanmaydi
  }
}

function pendingGuestStats(userId) {
  const synced = new Set(readSyncedGuestIds(userId))
  const pending = readGuestRecords().filter(
    (record) => record && typeof record.id === 'string' && !synced.has(record.id)
  )

  if (pending.length === 0) return null

  return {
    ids: pending.map((record) => record.id),
    xp: pending.reduce((sum, record) => sum + (Number(record.xp) || 0), 0),
    tests: pending.length,
    correct: pending.reduce((sum, record) => sum + (Number(record.correctCount) || 0), 0),
    total: pending.reduce((sum, record) => sum + (Number(record.totalAnswered) || 0), 0),
  }
}

async function fetchProfile(userId, requestGeneration) {
  const versionAtStart = dataVersion

  const { data, error } = await supabase
    .from('profiles')
    .select(PROFILE_COLUMNS)
    .eq('id', userId)
    .maybeSingle()

  if (requestGeneration !== generation) return

  if (error) {
    setState({ userId, profile: null, loading: false, error: error.message })
    return
  }

  if (data) {
    if (versionAtStart === dataVersion) {
      setState({ userId, profile: normalizeRow(data), loading: false, error: '' })
    }
    return
  }

  const session = getSession()
  const name = String(session?.name || '').trim()

  const { error: createError } = await supabase
    .from('profiles')
    .upsert({ id: userId, name }, { onConflict: 'id', ignoreDuplicates: true })

  if (requestGeneration !== generation) return

  if (createError) {
    setState({ userId, profile: null, loading: false, error: createError.message })
    return
  }

  const { data: created, error: retryError } = await supabase
    .from('profiles')
    .select(PROFILE_COLUMNS)
    .eq('id', userId)
    .maybeSingle()

  if (requestGeneration !== generation) return

  if (retryError) {
    setState({ userId, profile: null, loading: false, error: retryError.message })
    return
  }

  if (versionAtStart === dataVersion) {
    setState({
      userId,
      profile: created ? normalizeRow(created) : null,
      loading: false,
      error: '',
    })
  }
}

function loadProfile(userId) {
  if (!isSupabaseEnabled) {
    setState({ userId: null, profile: null, loading: false, error: '' })
    return
  }

  generation += 1
  const requestGeneration = generation

  setState({ userId, profile: null, loading: true, error: '' })
  fetchProfile(userId, requestGeneration).catch((error) => {
    if (requestGeneration !== generation) return
    setState({
      userId,
      profile: null,
      loading: false,
      error: error?.message || 'Profil yuklanmadi',
    })
  })
}

function handleSessionChange() {
  const session = getSession()
  const userId = isSupabaseEnabled ? session?.id || null : null

  if (!userId) {
    if (remoteUserId === null && state.userId === null && !state.loading) return

    remoteUserId = null
    generation += 1
    setState({ userId: null, profile: null, loading: false, error: '' })
    return
  }

  if (remoteUserId === userId) return

  remoteUserId = userId
  loadProfile(userId)
  syncGuestStatsToProfile()
}

export function initProfileStore() {
  if (initialized) return

  initialized = true
  subscribeSession(handleSessionChange)
  handleSessionChange()
}

export async function recordQuizResult({
  xp = 0,
  correctAnswers = 0,
  testsCompleted = 1,
  totalAnswered = 0,
} = {}) {
  if (!isSupabaseEnabled) return null

  const session = getSession()
  const userId = session?.id
  if (!userId) return null

  const payload = {
    p_correct: Math.max(0, Math.round(Number(correctAnswers) || 0)),
    p_total: Math.max(0, Math.round(Number(totalAnswered) || 0)),
    p_xp: Math.max(0, Math.round(Number(xp) || 0)),
    p_tests: Math.max(0, Math.round(Number(testsCompleted) || 0)),
  }

  if (payload.p_total <= 0) return null
  if (payload.p_tests <= 0) payload.p_tests = 1

  const { data, error } = await supabase.rpc('increment_quiz_stats', payload)

  if (error) {
    console.warn('Profil statistikasi saqlanmadi:', error.message)
    return null
  }

  applyRpcResult(userId, data)
  return data
}

export function syncGuestStatsToProfile() {
  if (!isSupabaseEnabled) return Promise.resolve(null)

  const session = getSession()
  const userId = session?.id
  if (!userId) return Promise.resolve(null)

  const inFlight = guestSyncPromises.get(userId)
  if (inFlight) return inFlight

  const stats = pendingGuestStats(userId)
  if (!stats) return Promise.resolve(null)

  const total = Math.max(stats.total, stats.correct, stats.tests, 1)
  const correct = Math.min(Math.max(stats.correct, 0), total)

  const promise = supabase
    .rpc('increment_quiz_stats', {
      p_correct: correct,
      p_total: total,
      p_xp: Math.max(stats.xp, 0),
      p_tests: Math.max(stats.tests, 1),
    })
    .then(({ data, error }) => {
      if (error) {
        console.warn('Mehmon XP hisobga olinmadi:', error.message)
        return null
      }

      const synced = new Set(readSyncedGuestIds(userId))
      stats.ids.forEach((id) => synced.add(id))
      writeSyncedGuestIds(userId, [...synced])

      applyRpcResult(userId, data)
      return data
    })
    .catch((error) => {
      console.warn('Mehmon XP hisobga olinmadi:', error?.message || error)
      return null
    })
    .finally(() => {
      guestSyncPromises.delete(userId)
    })

  guestSyncPromises.set(userId, promise)
  return promise
}
