import { useSyncExternalStore } from 'react'
import { getProgressState, subscribe } from '../utils/quizProgress.js'

export function useQuizProgress() {
  return useSyncExternalStore(subscribe, getProgressState, getProgressState)
}
