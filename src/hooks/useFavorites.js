import { useSyncExternalStore } from 'react'
import { getFavorites, subscribe } from '../utils/favorites.js'

export function useFavorites() {
  return useSyncExternalStore(subscribe, getFavorites, getFavorites)
}
