import { useSyncExternalStore } from 'react'
import { getAuthReady, subscribe } from '../utils/authStore.js'

export function useAuthReady() {
  return useSyncExternalStore(subscribe, getAuthReady, getAuthReady)
}
