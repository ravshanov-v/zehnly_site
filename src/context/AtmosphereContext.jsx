import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AtmosphereContext } from './atmosphereContext.js'
import {
  ATMOSPHERE_EFFECTS,
  TASHKENT_COORDINATES,
  getHoliday,
  getSeasonEffect,
  getSeasonPreset,
  getWeatherEffect,
} from '../utils/seasonalAtmosphere.js'

const STORAGE_KEY = 'zehnly-atmosphere-enabled'
const WEATHER_CACHE_KEY = 'zehnly-atmosphere-weather'
const WEATHER_CACHE_TTL = 30 * 60 * 1000

function readEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'false'
  } catch {
    return true
  }
}

function readWeatherCache() {
  try {
    const raw = sessionStorage.getItem(WEATHER_CACHE_KEY)
    if (!raw) return undefined

    const cached = JSON.parse(raw)
    if (!cached || typeof cached !== 'object') return undefined
    if (Date.now() - Number(cached.savedAt) > WEATHER_CACHE_TTL) return undefined

    return cached.effect ?? null
  } catch {
    return undefined
  }
}

function writeWeatherCache(effect) {
  try {
    sessionStorage.setItem(
      WEATHER_CACHE_KEY,
      JSON.stringify({ effect, savedAt: Date.now() })
    )
  } catch {
    return undefined
  }
}

async function getCoordinates() {
  if (!navigator.geolocation) return TASHKENT_COORDINATES

  try {
    if (!navigator.permissions?.query) return TASHKENT_COORDINATES

    const permission = await navigator.permissions.query({ name: 'geolocation' })
    if (permission.state !== 'granted') return TASHKENT_COORDINATES

    return await new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        () => resolve(TASHKENT_COORDINATES),
        { timeout: 4000, maximumAge: 15 * 60 * 1000 }
      )
    })
  } catch {
    return TASHKENT_COORDINATES
  }
}

function buildWeatherUrl({ latitude, longitude }) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: 'weather_code,precipitation,rain,snowfall',
    timezone: 'auto',
    forecast_days: '1',
  })

  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`
}

export function AtmosphereProvider({ children }) {
  const { search } = useLocation()
  const [enabled, setEnabled] = useState(readEnabled)
  const [today] = useState(() => new Date())
  const preset = useMemo(() => {
    const params = new URLSearchParams(search)
    return getSeasonPreset(params.get('season'))
  }, [search])
  const naturalHoliday = useMemo(() => getHoliday(today), [today])
  const naturalSeasonEffect = useMemo(() => getSeasonEffect(today), [today])
  const holiday = preset ? preset.holiday : naturalHoliday
  const seasonEffect = preset ? preset.seasonEffect : naturalSeasonEffect
  const seasonName =
    seasonEffect === 'snow'
      ? 'winter'
      : seasonEffect === 'petals'
        ? 'spring'
        : seasonEffect === 'sun'
          ? 'summer'
          : 'autumn'
  const [weather, setWeather] = useState(() => {
    const cached = readWeatherCache()
    return {
      effect: cached === undefined ? undefined : cached,
      resolved: cached !== undefined,
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(enabled))
    } catch {
      return undefined
    }
  }, [enabled])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.season = seasonName

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const dark = root.classList.contains('dark')
      const autumn = seasonName === 'autumn'
      meta.setAttribute(
        'content',
        dark ? (autumn ? '#0e0905' : '#05060a') : autumn ? '#f7f2e8' : '#f4f5f8'
      )
    }
  }, [seasonName])

  useEffect(() => {
    if (!enabled || preset || weather.resolved) return undefined

    let cancelled = false
    const controller = new AbortController()

    async function loadWeather() {
      const coordinates = await getCoordinates()
      if (cancelled) return

      try {
        const response = await fetch(buildWeatherUrl(coordinates), {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('weather request failed')

        const data = await response.json()
        if (cancelled) return

        const nextEffect = getWeatherEffect(data.current)
        setWeather({ effect: nextEffect, resolved: true })
        writeWeatherCache(nextEffect)
      } catch (error) {
        if (error.name !== 'AbortError' && !cancelled) {
          setWeather({ effect: null, resolved: true })
        }
      }
    }

    loadWeather()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [enabled, preset, weather.resolved])

  const toggleEnabled = useCallback(() => {
    setEnabled((current) => !current)
  }, [])

  const effect = preset?.effect ?? holiday?.effect ?? weather.effect ?? seasonEffect
  const effectLabel = ATMOSPHERE_EFFECTS[effect]?.label ?? ''
  const weatherEffect = preset ? null : weather.effect ?? null

  const value = useMemo(
    () => ({
      enabled,
      toggleEnabled,
      holiday,
      effect,
      effectLabel,
      weatherEffect,
      seasonEffect,
      forcedSeason: preset?.id ?? null,
    }),
    [
      enabled,
      toggleEnabled,
      holiday,
      effect,
      effectLabel,
      weatherEffect,
      seasonEffect,
      preset,
    ]
  )

  return <AtmosphereContext.Provider value={value}>{children}</AtmosphereContext.Provider>
}
