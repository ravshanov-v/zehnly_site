import { useSyncExternalStore } from 'react'
import { computeStats, getHistory, subscribe } from '../utils/quizHistory.js'

export function useQuizHistory() {
  const records = useSyncExternalStore(subscribe, getHistory, getHistory)
  return { records, stats: computeStats(records) }
}
