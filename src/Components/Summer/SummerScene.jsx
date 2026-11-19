import { useSeasonalScene } from '../../context/useSeasonalScene.js'

export default function SummerScene() {
  const { active, seasonEffect } = useSeasonalScene()

  if (!active || seasonEffect !== 'sun') return null

  return (
    <div
      aria-hidden="true"
      className="summer-scene pointer-events-none fixed inset-0 -z-10 h-screen w-screen select-none overflow-hidden bg-transparent"
    >
      <div className="summer-solar-halo" />
      <div className="summer-solar-glow" />
    </div>
  )
}
