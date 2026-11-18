import { useLocation } from 'react-router-dom'
import { useAtmosphere } from './useAtmosphere.js'

export function useSeasonalScene() {
  const { pathname } = useLocation()
  const scene = useAtmosphere()
  const active = scene.enabled && pathname === '/'
  const physicalMode =
    scene.weatherEffect === 'snow'
      ? 'snow'
      : scene.weatherEffect === 'rain'
        ? 'rain'
        : scene.seasonEffect

  return { ...scene, active, physicalMode }
}
