import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { useSeasonalScene } from '../context/useSeasonalScene.js'

const STORAGE_PREFIX = 'zehnly-confetti'

export default function HolidayConfetti() {
  const { active, holiday } = useSeasonalScene()
  const firedRef = useRef(null)

  useEffect(() => {
    if (!active || !holiday) return undefined
    if (firedRef.current === holiday.id) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const storageKey = `${STORAGE_PREFIX}:${holiday.id}`

    try {
      if (sessionStorage.getItem(storageKey)) {
        firedRef.current = holiday.id
        return undefined
      }
      sessionStorage.setItem(storageKey, '1')
    } catch {
      return undefined
    }

    firedRef.current = holiday.id

    const timeout = window.setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 78,
        origin: { x: 0.5, y: 0.32 },
        startVelocity: 42,
        gravity: 1.05,
        decay: 0.92,
        scalar: 0.92,
        ticks: 240,
        colors: holiday.colors ?? ['#f6c453', '#ffffff', '#34d399'],
        disableForReducedMotion: true,
      })
    }, 420)

    return () => window.clearTimeout(timeout)
  }, [active, holiday])

  return null
}
