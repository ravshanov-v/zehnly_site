import { useCallback, useEffect, useState } from 'react'
import { isSupabaseEnabled, supabase } from '../lib/supabase.js'
import { useSession } from './useSession.js'

const TOP_LIMIT = 50
const PRIMARY_COLUMNS =
  'id,name,xp,tests_completed,correct_answers,total_answers,updated_at'
const FALLBACK_COLUMNS = 'id,name,xp,tests_completed,correct_answers,updated_at'

const initialState = {
  status: isSupabaseEnabled ? 'loading' : 'unconfigured',
  rows: [],
  current: null,
  totalRanked: 0,
  error: '',
}

function normalizeRow(row, rank = null) {
  const xp = Math.max(0, Math.round(Number(row?.xp) || 0))
  const total = Math.max(0, Math.round(Number(row?.total_answers) || 0))
  const correct = Math.max(
    0,
    Math.min(Math.round(Number(row?.correct_answers) || 0), total)
  )
  const tests = Math.max(0, Math.round(Number(row?.tests_completed) || 0))

  return {
    id: String(row?.id || ''),
    name: String(row?.name || '').trim(),
    xp,
    tests,
    correct,
    total,
    accuracy: total > 0 ? Math.min(100, Math.round((correct / total) * 100)) : null,
    updatedAt: row?.updated_at || null,
    rank,
  }
}

function isMissingTotalColumn(error) {
  return /total_answers/i.test(String(error?.message || ''))
}

async function fetchTopRows() {
  const query = (columns) =>
    supabase
      .from('profiles')
      .select(columns)
      .gt('xp', 0)
      .order('xp', { ascending: false })
      .order('updated_at', { ascending: true })
      .limit(TOP_LIMIT)

  let result = await query(PRIMARY_COLUMNS)

  if (result.error && isMissingTotalColumn(result.error)) {
    result = await query(FALLBACK_COLUMNS)
  }

  return result
}

async function fetchOwnRow(userId) {
  const query = (columns) =>
    supabase.from('profiles').select(columns).eq('id', userId).maybeSingle()

  let result = await query(PRIMARY_COLUMNS)

  if (result.error && isMissingTotalColumn(result.error)) {
    result = await query(FALLBACK_COLUMNS)
  }

  return result
}

async function fetchRankedCount() {
  const { count, error } = await supabase
    .from('profiles')
    .select('id', { count: 'exact', head: true })
    .gt('xp', 0)

  return error ? null : count || 0
}

async function fetchRank(userId, xp) {
  const { data, error } = await supabase.rpc('get_profile_rank', {
    p_user_id: userId,
  })

  if (!error && data !== null && data !== undefined) {
    const rank = Number(data)
    if (Number.isFinite(rank) && rank > 0) return rank
  }

  const { count } = await supabase
    .from('profiles')
    .select('id', { count: 'exact', head: true })
    .gt('xp', xp)

  return (count || 0) + 1
}

export function useLeaderboard() {
  const session = useSession()
  const [state, setState] = useState(initialState)
  const [version, setVersion] = useState(0)
  const [online, setOnline] = useState(
    () => typeof navigator === 'undefined' || navigator.onLine
  )

  useEffect(() => {
    const handleOnline = () => setOnline(true)
    const handleOffline = () => setOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const reload = useCallback(() => {
    setState((previous) => ({
      ...previous,
      status: previous.rows.length > 0 ? 'ready' : 'loading',
      error: '',
    }))
    setVersion((value) => value + 1)
  }, [])

  useEffect(() => {
    if (!isSupabaseEnabled || !online) return undefined

    let cancelled = false

    const load = async () => {
      const top = await fetchTopRows()
      if (cancelled) return
      if (top.error) throw top.error

      const rows = (top.data || []).map((row, index) => normalizeRow(row, index + 1))
      const totalRanked = await fetchRankedCount()
      if (cancelled) return

      let current = null

      if (session?.id) {
        const inTop = rows.find((row) => row.id === session.id)

        if (inTop) {
          current = { ...inTop, inTop: true }
        } else {
          const own = await fetchOwnRow(session.id)
          if (cancelled) return

          if (!own.error && own.data && Number(own.data.xp) > 0) {
            const rank = await fetchRank(session.id, Number(own.data.xp))
            if (cancelled) return
            current = { ...normalizeRow(own.data, rank), inTop: false }
          }
        }
      }

      if (cancelled) return

      setState({
        status: 'ready',
        rows,
        current,
        totalRanked: totalRanked ?? rows.length,
        error: '',
      })
    }

    load().catch((error) => {
      if (cancelled) return

      setState((previous) => ({
        ...previous,
        status: 'error',
        error: error?.message || '',
      }))
    })

    return () => {
      cancelled = true
    }
  }, [session?.id, version, online])

  const status = !isSupabaseEnabled ? 'unconfigured' : !online ? 'offline' : state.status

  return {
    ...state,
    status,
    online,
    isGuest: !session,
    isConfigured: isSupabaseEnabled,
    reload,
  }
}
