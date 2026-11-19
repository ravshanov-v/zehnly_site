import SpringPetalCanvas from './SpringPetalCanvas.jsx'
import { useSeasonalScene } from '../../context/useSeasonalScene.js'

export default function SpringScene() {
  const { active, seasonEffect } = useSeasonalScene()

  if (!active || seasonEffect !== 'petals') return null

  return (
    <div
      aria-hidden="true"
      className="spring-scene pointer-events-none fixed inset-0 -z-10 h-screen w-screen select-none overflow-hidden bg-transparent"
    >
      <SpringPetalCanvas />
    </div>
  )
}
