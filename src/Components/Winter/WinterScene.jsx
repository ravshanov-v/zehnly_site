import WinterSnowCanvas from './WinterSnowCanvas.jsx'
import { useSeasonalScene } from '../../context/useSeasonalScene.js'

export default function WinterScene() {
  const { active, seasonEffect } = useSeasonalScene()

  if (!active || seasonEffect !== 'snow') return null

  return (
    <div
      aria-hidden="true"
      className="winter-scene pointer-events-none fixed inset-0 -z-10 h-screen w-screen select-none overflow-hidden bg-transparent"
    >
      <WinterSnowCanvas />
    </div>
  )
}
