import { useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useSeasonalScene } from '../context/useSeasonalScene.js'
import { useTheme } from '../context/useTheme.js'
import { getSeasonParticleLayers } from '../utils/seasonalParticles.js'

const SEASON_SCENE_EFFECTS = new Set(['autumn', 'snow', 'petals', 'sun'])

export default function SeasonalAtmosphere() {
  const { active, effect, seasonEffect } = useSeasonalScene()
  const { isDark } = useTheme()
  const seasonSceneActive = effect === seasonEffect && SEASON_SCENE_EFFECTS.has(seasonEffect)
  const useParticles = !seasonSceneActive
  const layers = useMemo(
    () => (active && useParticles ? getSeasonParticleLayers(effect, isDark) : []),
    [active, effect, isDark, useParticles]
  )

  if (!active || !useParticles) return null

  const mode = isDark ? 'dark' : 'light'

  return (
    <div
      aria-hidden="true"
      className="seasonal-atmosphere pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 select-none overflow-hidden bg-transparent"
    >
      <ParticlesProvider init={loadSlim}>
        {layers.map((layer) => (
          <Particles
            key={`${effect}-${mode}-${layer.key}`}
            id={`zehnly-${effect}-${mode}-${layer.key}`}
            className="seasonal-particles-canvas"
            options={layer.options}
          />
        ))}
      </ParticlesProvider>
    </div>
  )
}
