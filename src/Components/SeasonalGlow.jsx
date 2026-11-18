import { useSeasonalScene } from '../context/useSeasonalScene.js'
import { useTheme } from '../context/useTheme.js'

const GLOW_PALETTES = {
  snow: ['#9fc4ff', '#dbeafe', '#7dd3fc'],
  rain: ['#5b8def', '#93c5fd', '#c7dbff'],
  sparkles: ['#3b82f6', '#f6c453', '#93c5fd'],
  petals: ['#f9a8d4', '#c084fc', '#86efac'],
  leaves: ['#34d399', '#f6c453', '#f472b6'],
  autumn: ['#f59e0b', '#d97706', '#fbbf24'],
  confetti: ['#1f6feb', '#1f9d55', '#93c5fd'],
  stars: ['#f6c453', '#fbbf24', '#fde68a'],
  sun: ['#fbbf24', '#fde68a', '#f59e0b'],
}

const HOLIDAY_PALETTES = {
  'new-year': ['#22c55e', '#f6c453', '#fb7185'],
  'independence-day': ['#1f6feb', '#1f9d55', '#93c5fd'],
}

export default function SeasonalGlow() {
  const { active, effect, holiday } = useSeasonalScene()
  const { isDark } = useTheme()

  if (!active) return null

  const palette =
    HOLIDAY_PALETTES[holiday?.id] ?? GLOW_PALETTES[effect] ?? GLOW_PALETTES.snow
  const intensity = isDark ? 0.44 : 0.3

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden"
    >
      <div
        className="animate-drift-a absolute -left-[20rem] -top-[18rem] h-[46rem] w-[46rem] rounded-full blur-[120px] transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${palette[0]}, transparent 68%)`,
          opacity: intensity,
        }}
      />
      <div
        className="animate-drift-b absolute -right-[18rem] top-[18%] h-[40rem] w-[40rem] rounded-full blur-[120px] transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${palette[1]}, transparent 68%)`,
          opacity: intensity * 0.9,
        }}
      />
      <div
        className="animate-drift-a absolute -bottom-[20rem] left-[24%] h-[38rem] w-[38rem] rounded-full blur-[120px] transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${palette[2]}, transparent 68%)`,
          opacity: intensity * 0.75,
          animationDelay: '-9s',
        }}
      />
    </div>
  )
}
