export const TASHKENT_COORDINATES = Object.freeze({ latitude: 41.31, longitude: 69.28 })

const TASHKENT_TIME_ZONE = 'Asia/Tashkent'

export const HOLIDAYS = {
  newYear: {
    id: 'new-year',
    greeting: 'Yangi yilingiz bilan! · Zehnly',
    effect: 'snow',
    accent: '#f6c453',
    accentGradient: 'linear-gradient(90deg, #22c55e, #f6c453, #f97316, #fb7185)',
    colors: ['#f6c453', '#22c55e', '#fb7185', '#ffffff'],
  },
  defenders: {
    id: 'defenders-day',
    greeting: 'Vatan himoyachilari kuni muborak! · Zehnly',
    effect: 'sparkles',
    accent: '#6ea8ff',
    accentGradient: 'linear-gradient(90deg, #3b82f6, #93c5fd, #f6c453)',
    colors: ['#3b82f6', '#93c5fd', '#f6c453', '#ffffff'],
  },
  women: {
    id: 'womens-day',
    greeting: 'Xalqaro xotin-qizlar kuni muborak! · Zehnly',
    effect: 'petals',
    accent: '#f472b6',
    accentGradient: 'linear-gradient(90deg, #ec4899, #f9a8d4, #c084fc)',
    colors: ['#ec4899', '#f9a8d4', '#c084fc', '#ffffff'],
  },
  navruz: {
    id: 'navruz',
    greeting: 'Navro‘z bayrami muborak! · Zehnly',
    effect: 'leaves',
    accent: '#34d399',
    accentGradient: 'linear-gradient(90deg, #16a34a, #86efac, #f6c453)',
    colors: ['#16a34a', '#86efac', '#f6c453', '#f472b6'],
  },
  independence: {
    id: 'independence-day',
    greeting: 'Mustaqilligimiz muborak! · Zehnly',
    effect: 'confetti',
    accent: '#1f9d55',
    accentGradient: 'linear-gradient(90deg, #1f6feb 0 33%, #ffffff 33% 66%, #1f9d55 66% 100%)',
    colors: ['#1f6feb', '#ffffff', '#1f9d55'],
  },
  teachers: {
    id: 'teachers-day',
    greeting: 'O‘qituvchi va murabbiylar kuni muborak! · Zehnly',
    effect: 'stars',
    accent: '#f6c453',
    accentGradient: 'linear-gradient(90deg, #f59e0b, #fde68a, #fbbf24)',
    colors: ['#f59e0b', '#fde68a', '#fbbf24', '#ffffff'],
  },
}

export const ATMOSPHERE_EFFECTS = {
  snow: { label: 'Mayin qor' },
  rain: { label: "Yengil yomg‘ir" },
  sparkles: { label: 'Bayram uchqunlari' },
  petals: { label: 'Gulbarglar' },
  leaves: { label: 'Bahoriy barglar' },
  autumn: { label: 'Oltin barglar' },
  confetti: { label: 'Bayroq zarlari' },
  stars: { label: 'Oltin yulduzchalar' },
  sun: { label: 'Quyosh jilosi' },
}

export const SEASON_PRESETS = {
  winter: {
    id: 'winter',
    effect: 'snow',
    seasonEffect: 'snow',
    holiday: null,
  },
  spring: {
    id: 'spring',
    effect: 'petals',
    seasonEffect: 'petals',
    holiday: null,
  },
  summer: {
    id: 'summer',
    effect: 'sun',
    seasonEffect: 'sun',
    holiday: null,
  },
  autumn: {
    id: 'autumn',
    effect: 'autumn',
    seasonEffect: 'autumn',
    holiday: null,
  },
  newyear: {
    id: 'newyear',
    effect: HOLIDAYS.newYear.effect,
    seasonEffect: 'snow',
    holiday: HOLIDAYS.newYear,
  },
  navruz: {
    id: 'navruz',
    effect: HOLIDAYS.navruz.effect,
    seasonEffect: 'petals',
    holiday: HOLIDAYS.navruz,
  },
  independence: {
    id: 'independence',
    effect: HOLIDAYS.independence.effect,
    seasonEffect: 'autumn',
    holiday: HOLIDAYS.independence,
  },
}

const SEASON_ALIASES = {
  'new-year': 'newyear',
  navroz: 'navruz',
}

export function getSeasonPreset(value) {
  if (!value) return null

  const key = String(value).trim().toLowerCase()
  if (!key) return null

  return SEASON_PRESETS[SEASON_ALIASES[key] ?? key] ?? null
}

const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86])
const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99])

export function getTashkentDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: TASHKENT_TIME_ZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
  const parts = formatter.formatToParts(date)
  const read = (type) => Number(parts.find((part) => part.type === type)?.value)

  return { year: read('year'), month: read('month'), day: read('day') }
}

export function getHoliday(date = new Date()) {
  const { month, day } = getTashkentDateParts(date)

  if ((month === 12 && day >= 25) || (month === 1 && day <= 3)) return HOLIDAYS.newYear
  if (month === 1 && day === 14) return HOLIDAYS.defenders
  if (month === 3 && day === 8) return HOLIDAYS.women
  if (month === 3 && day === 21) return HOLIDAYS.navruz
  if (month === 9 && day === 1) return HOLIDAYS.independence
  if (month === 10 && day === 1) return HOLIDAYS.teachers

  return null
}

export function getSeasonEffect(date = new Date()) {
  const { month } = getTashkentDateParts(date)

  if (month === 12 || month <= 2) return 'snow'
  if (month <= 5) return 'petals'
  if (month <= 8) return 'sun'
  return 'autumn'
}

export function getWeatherEffect(current) {
  if (!current) return null

  const code = Number(current.weather_code)
  const snowfall = Number(current.snowfall)
  const rain = Number(current.rain)
  const precipitation = Number(current.precipitation)

  if (SNOW_CODES.has(code) || snowfall > 0) return 'snow'
  if (RAIN_CODES.has(code) || rain > 0 || precipitation > 0) return 'rain'

  return null
}
