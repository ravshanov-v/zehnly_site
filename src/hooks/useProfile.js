import { useSyncExternalStore } from 'react'
import { getProfileState, subscribe } from '../utils/profileStore.js'

export function useProfile() {
  return useSyncExternalStore(subscribe, getProfileState, getProfileState)
}
