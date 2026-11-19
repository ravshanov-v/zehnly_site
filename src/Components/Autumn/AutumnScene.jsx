import AutumnLeafCanvas from './AutumnLeafCanvas.jsx'
import { useSeasonalScene } from '../../context/useSeasonalScene.js'

export default function AutumnScene() {
  const { active, seasonEffect } = useSeasonalScene()

  if (!active || seasonEffect !== 'autumn') return null

  return (
    <div
      aria-hidden="true"
      className="autumn-scene pointer-events-none fixed inset-0 -z-10 h-screen w-screen select-none overflow-hidden bg-transparent"
    >
      <div className="autumn-sun-glow pointer-events-none absolute right-0 -top-32 h-[38rem] w-[38rem] rounded-full" />
      <div className="autumn-rays pointer-events-none absolute inset-0" />
      <div className="autumn-rays autumn-rays-soft pointer-events-none absolute inset-0" />
      <AutumnLeafCanvas />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-700/10 to-transparent dark:from-amber-500/[0.06]" />
    </div>
  )
}
