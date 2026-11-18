const toDataUri = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

const AUTUMN_LEAF = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fcd34d"/><stop offset="0.55" stop-color="#f59e0b"/><stop offset="1" stop-color="#b45309"/></linearGradient></defs><path fill="url(#leaf)" d="M55 7C33 10 16 24 11 45c-1.6 7 .4 12 .4 12 9-.4 20-5.4 28-14 9-9.8 14.6-23 15.6-36Z"/></svg>'
)

const GREEN_LEAF = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bbf7d0"/><stop offset="0.55" stop-color="#4ade80"/><stop offset="1" stop-color="#15803d"/></linearGradient></defs><path fill="url(#leaf)" d="M55 7C33 10 16 24 11 45c-1.6 7 .4 12 .4 12 9-.4 20-5.4 28-14 9-9.8 14.6-23 15.6-36Z"/></svg>'
)

const PINK_PETAL = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="petal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fce7f3"/><stop offset="0.5" stop-color="#f9a8d4"/><stop offset="1" stop-color="#db2777"/></linearGradient></defs><path fill="url(#petal)" d="M32 3c9 10 20 20 20 34 0 14-9 24-20 24S12 51 12 37C12 23 23 13 32 3Z"/></svg>'
)

const GREEN_PETAL = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="petal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dcfce7"/><stop offset="0.5" stop-color="#86efac"/><stop offset="1" stop-color="#16a34a"/></linearGradient></defs><path fill="url(#petal)" d="M32 3c9 10 20 20 20 34 0 14-9 24-20 24S12 51 12 37C12 23 23 13 32 3Z"/></svg>'
)

const BOKEH_GLOW = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><radialGradient id="b"><stop offset="0" stop-color="#fff7d6" stop-opacity="0.95"/><stop offset="0.45" stop-color="#fbbf24" stop-opacity="0.55"/><stop offset="0.78" stop-color="#f59e0b" stop-opacity="0.18"/><stop offset="1" stop-color="#f59e0b" stop-opacity="0"/></radialGradient></defs><circle cx="32" cy="32" r="30" fill="url(#b)"/></svg>'
)

const SOFT_SNOW = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><radialGradient id="s"><stop offset="0" stop-color="#ffffff" stop-opacity="0.98"/><stop offset="0.5" stop-color="#dbeafe" stop-opacity="0.55"/><stop offset="0.82" stop-color="#93c5fd" stop-opacity="0.16"/><stop offset="1" stop-color="#93c5fd" stop-opacity="0"/></radialGradient></defs><circle cx="32" cy="32" r="30" fill="url(#s)"/></svg>'
)

const RAIN_STREAK = toDataUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dbeafe"/><stop offset="1" stop-color="#3b82f6"/></linearGradient></defs><rect x="28" y="4" width="8" height="42" rx="4" fill="url(#r)"/><circle cx="32" cy="52" r="7" fill="url(#r)"/></svg>'
)

const imageShape = (src) => ({
  type: 'image',
  options: {
    image: {
      src,
      width: 64,
      height: 64,
    },
  },
})

const PALETTES = {
  snow: {
    dark: ['#ffffff', '#e6f1ff', '#cfe3ff'],
    light: ['#7fa8e0', '#9bbdf0', '#c2d9f7'],
  },
  rain: {
    dark: ['#9ec5ff', '#cfe2ff'],
    light: ['#5f8fd6', '#84aee6'],
  },
  sparkles: {
    dark: ['#5aa2ff', '#f6c453', '#9fc6ff', '#ffe08a'],
    light: ['#3b82f6', '#eab308', '#60a5fa', '#f59e0b'],
  },
  petals: {
    dark: ['#f9a8d4', '#f472b6', '#fbcfe8', '#86efac', '#4ade80'],
    light: ['#ec4899', '#f472b6', '#f9a8d4', '#4ade80'],
  },
  leaves: {
    flowers: ['#f9a8d4', '#f472b6', '#fbcfe8'],
    foliage: ['#34d399', '#22c55e', '#86efac'],
  },
  autumn: {
    dust: ['#fbbf24', '#f59e0b', '#fcd34d'],
    leaves: ['#fbbf24', '#f59e0b', '#d97706', '#b45309', '#fcd34d'],
  },
  confetti: {
    flag: ['#1f6feb', '#ffffff', '#1f9d55'],
    soft: ['#93c5fd', '#bbf7d0', '#ffffff'],
  },
  stars: {
    dark: ['#f6c453', '#fbbf24', '#fde68a'],
    light: ['#d97706', '#eab308', '#f59e0b'],
  },
  sun: {
    dark: ['#fbbf24', '#fde68a', '#f59e0b', '#fef3c7'],
    light: ['#eab308', '#f59e0b', '#fbbf24'],
  },
}

function makeOptions({
  colors,
  count,
  size,
  opacity,
  speed,
  drift,
  direction = 'bottom',
  random = false,
  straight = false,
  shape = { type: 'circle' },
  rotateSpeed = 0,
  opacitySpeed = 0.45,
}) {
  return {
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,
    pauseOnBlur: true,
    particles: {
      number: {
        value: count,
        density: { enable: true, width: 1400, height: 900 },
      },
      color: { value: colors },
      shape,
      opacity: {
        value: opacity,
        animation: { enable: true, speed: opacitySpeed, sync: false },
      },
      size: { value: size },
      move: {
        enable: true,
        direction,
        random,
        speed,
        drift,
        straight,
        outModes: { default: 'out' },
      },
      rotate: {
        value: { min: 0, max: 360 },
        animation: { enable: rotateSpeed > 0, speed: rotateSpeed, sync: false },
      },
    },
  }
}

function snowLayers(isDark) {
  const palette = PALETTES.snow

  return [
    {
      key: 'fine',
      options: makeOptions({
        colors: isDark ? palette.dark : palette.light,
        count: 46,
        size: { min: 1, max: 3.4 },
        opacity: { min: 0.2, max: 0.8 },
        speed: { min: 0.3, max: 0.95 },
        drift: { min: 0.2, max: 1.2 },
        opacitySpeed: 0.55,
      }),
    },
    {
      key: 'soft',
      options: makeOptions({
        colors: ['#ffffff'],
        count: 16,
        size: { min: 4, max: 10 },
        opacity: { min: 0.2, max: 0.5 },
        speed: { min: 0.18, max: 0.55 },
        drift: { min: 0.4, max: 1.6 },
        shape: imageShape(SOFT_SNOW),
      }),
    },
  ]
}

function rainLayers(isDark) {
  return [
    {
      key: 'drizzle',
      options: makeOptions({
        colors: isDark ? PALETTES.rain.dark : PALETTES.rain.light,
        count: 42,
        size: { min: 2, max: 5 },
        opacity: { min: 0.2, max: 0.5 },
        speed: { min: 4.5, max: 8.5 },
        drift: { min: 0.1, max: 0.5 },
        straight: true,
        shape: imageShape(RAIN_STREAK),
      }),
    },
  ]
}

function sparkleLayers(isDark) {
  return [
    {
      key: 'glints',
      options: makeOptions({
        colors: isDark ? PALETTES.sparkles.dark : PALETTES.sparkles.light,
        count: 30,
        size: { min: 1.6, max: 4.4 },
        opacity: { min: 0.25, max: 0.9 },
        speed: { min: 0.05, max: 0.28 },
        drift: { min: 0.2, max: 0.9 },
        direction: 'none',
        random: true,
        shape: { type: 'star' },
        opacitySpeed: 1.3,
      }),
    },
  ]
}

function petalLayers(isDark) {
  return [
    {
      key: 'dust',
      options: makeOptions({
        colors: isDark ? PALETTES.petals.dark : PALETTES.petals.light,
        count: 18,
        size: { min: 1, max: 3 },
        opacity: { min: 0.2, max: 0.65 },
        speed: { min: 0.25, max: 0.75 },
        drift: { min: 0.3, max: 1.2 },
      }),
    },
    {
      key: 'pink-petals',
      options: makeOptions({
        colors: ['#ffffff'],
        count: 18,
        size: { min: 6, max: 15 },
        opacity: { min: 0.35, max: 0.8 },
        speed: { min: 0.3, max: 0.85 },
        drift: { min: 0.5, max: 1.6 },
        shape: imageShape(PINK_PETAL),
        rotateSpeed: 5,
      }),
    },
    {
      key: 'green-petals',
      options: makeOptions({
        colors: ['#ffffff'],
        count: 10,
        size: { min: 5, max: 11 },
        opacity: { min: 0.28, max: 0.65 },
        speed: { min: 0.25, max: 0.7 },
        drift: { min: 0.4, max: 1.3 },
        shape: imageShape(GREEN_PETAL),
        rotateSpeed: 4,
      }),
    },
  ]
}

function leafLayers() {
  return [
    {
      key: 'dust',
      options: makeOptions({
        colors: PALETTES.leaves.foliage,
        count: 16,
        size: { min: 1, max: 3 },
        opacity: { min: 0.2, max: 0.65 },
        speed: { min: 0.25, max: 0.8 },
        drift: { min: 0.3, max: 1.2 },
      }),
    },
    {
      key: 'foliage',
      options: makeOptions({
        colors: ['#ffffff'],
        count: 14,
        size: { min: 8, max: 18 },
        opacity: { min: 0.35, max: 0.8 },
        speed: { min: 0.28, max: 0.8 },
        drift: { min: 0.5, max: 1.5 },
        shape: imageShape(GREEN_LEAF),
        rotateSpeed: 4,
      }),
    },
    {
      key: 'blossoms',
      options: makeOptions({
        colors: ['#ffffff'],
        count: 10,
        size: { min: 6, max: 12 },
        opacity: { min: 0.3, max: 0.7 },
        speed: { min: 0.22, max: 0.65 },
        drift: { min: 0.4, max: 1.3 },
        shape: imageShape(PINK_PETAL),
        rotateSpeed: 4,
      }),
    },
  ]
}

function autumnLayers() {
  return [
    {
      key: 'dust',
      options: makeOptions({
        colors: PALETTES.autumn.dust,
        count: 24,
        size: { min: 1.4, max: 4 },
        opacity: { min: 0.2, max: 0.7 },
        speed: { min: 0.25, max: 0.85 },
        drift: { min: 0.35, max: 1.4 },
      }),
    },
    {
      key: 'leaves',
      options: makeOptions({
        colors: ['#ffffff'],
        count: 18,
        size: { min: 12, max: 26 },
        opacity: { min: 0.35, max: 0.85 },
        speed: { min: 0.3, max: 0.9 },
        drift: { min: 0.5, max: 1.7 },
        shape: imageShape(AUTUMN_LEAF),
        rotateSpeed: 4,
      }),
    },
  ]
}

function confettiLayers() {
  return [
    {
      key: 'ribbons',
      options: makeOptions({
        colors: PALETTES.confetti.flag,
        count: 34,
        size: { min: 3, max: 7 },
        opacity: { min: 0.5, max: 0.95 },
        speed: { min: 0.55, max: 1.5 },
        drift: { min: 0.4, max: 1.5 },
        shape: { type: 'square' },
        rotateSpeed: 9,
        opacitySpeed: 0.8,
      }),
    },
    {
      key: 'sparks',
      options: makeOptions({
        colors: PALETTES.confetti.soft,
        count: 12,
        size: { min: 2, max: 5 },
        opacity: { min: 0.3, max: 0.75 },
        speed: { min: 0.3, max: 0.8 },
        drift: { min: 0.3, max: 1.1 },
      }),
    },
  ]
}

function starLayers(isDark) {
  return [
    {
      key: 'stars',
      options: makeOptions({
        colors: isDark ? PALETTES.stars.dark : PALETTES.stars.light,
        count: 30,
        size: { min: 1.6, max: 4.6 },
        opacity: { min: 0.25, max: 0.9 },
        speed: { min: 0.05, max: 0.3 },
        drift: { min: 0.2, max: 0.9 },
        direction: 'none',
        random: true,
        shape: { type: 'star' },
        opacitySpeed: 1.2,
      }),
    },
  ]
}

function sunLayers(isDark) {
  return [
    {
      key: 'bokeh',
      options: makeOptions({
        colors: isDark ? PALETTES.sun.dark : PALETTES.sun.light,
        count: 22,
        size: { min: 8, max: 26 },
        opacity: { min: 0.18, max: 0.55 },
        speed: { min: 0.08, max: 0.32 },
        drift: { min: 0.10, max: 0.6 },
        direction: 'none',
        random: true,
        shape: imageShape(BOKEH_GLOW),
      }),
    },
    {
      key: 'motes',
      options: makeOptions({
        colors: isDark ? PALETTES.sun.dark : PALETTES.sun.light,
        count: 12,
        size: { min: 1, max: 3 },
        opacity: { min: 0.2, max: 0.6 },
        speed: { min: 0.15, max: 0.5 },
        drift: { min: 0.2, max: 0.9 },
        direction: 'none',
        random: true,
      }),
    },
  ]
}

export function getSeasonParticleLayers(effect, isDark) {
  switch (effect) {
    case 'rain':
      return rainLayers(isDark)
    case 'sparkles':
      return sparkleLayers(isDark)
    case 'petals':
      return petalLayers(isDark)
    case 'leaves':
      return leafLayers()
    case 'autumn':
      return autumnLayers()
    case 'confetti':
      return confettiLayers()
    case 'stars':
      return starLayers(isDark)
    case 'sun':
      return sunLayers(isDark)
    case 'snow':
    default:
      return snowLayers(isDark)
  }
}
