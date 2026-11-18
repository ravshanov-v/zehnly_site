import { useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import AutumnScene from './Autumn/AutumnScene.jsx'
import { useSeasonalScene } from '../context/useSeasonalScene.js'
import { useTheme } from '../context/useTheme.js'
import { getSeasonParticleLayers } from '../utils/seasonalParticles.js'

export default function SeasonalAtmosphere() {
  const { active, effect, seasonEffect } = useSeasonalScene()
  const { isDark } = useTheme()
  const isAutumn = seasonEffect === 'autumn'
  const useParticles = effect !== 'autumn'
  const layers = useMemo(
    () => (active && useParticles ? getSeasonParticleLayers(effect, isDark) : []),
    [active, effect, isDark, useParticles]
  )

  if (!active) return null

  const mode = isDark ? 'dark' : 'light'

  return (
    <div
      aria-hidden="true"
      className="seasonal-atmosphere pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      {isAutumn && <AutumnScene />}
      {useParticles && (
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
      )}
    </div>
  )
}
