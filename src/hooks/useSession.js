import { useSyncExternalStore } from 'react'
import { getSession, subscribe } from '../utils/authStore.js'

export function useSession() {
  return useSyncExternalStore(subscribe, getSession, getSession)
}
