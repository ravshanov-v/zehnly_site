import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/useTheme.js'
import { AUTUMN_LEAVES } from './leafShapes.js'

const MOBILE_BREAKPOINT = 768
const MOBILE_SIZE_FACTOR = 0.75
const MOBILE_ALPHA_FACTOR = 0.82

const LEAF_LAYERS = [
  {
    count: 4,
    mobileCount: 2,
    size: [11, 21],
    alpha: [0.32, 0.6],
    blur: 0.6,
    speed: [14, 24],
    sway: [7, 18],
    spin: [0.3, 0.9],
    tumble: [0.7, 2.2],
    wind: [0.5, 1],
  },
  {
    count: 5,
    mobileCount: 2,
    size: [22, 39],
    alpha: [0.62, 0.92],
    blur: 0,
    speed: [22, 40],
    sway: [12, 30],
    spin: [0.5, 1.4],
    tumble: [1, 3],
    wind: [0.8, 1.4],
  },
  {
    count: 2,
    mobileCount: 1,
    size: [62, 98],
    alpha: [0.3, 0.5],
    blur: 5.5,
    speed: [34, 54],
    sway: [18, 40],
    spin: [0.25, 0.7],
    tumble: [0.4, 1.1],
    wind: [1, 1.6],
  },
]

const rand = (min, max) => min + Math.random() * (max - min)
const pick = (items) => items[(Math.random() * items.length) | 0]

let spritePromise = null

function loadSprites() {
  if (!spritePromise) {
    spritePromise = Promise.all(
      AUTUMN_LEAVES.map(
        (leaf) =>
          new Promise((resolve, reject) => {
            const image = new Image()
            image.decoding = 'async'
            image.onload = () => resolve({ ...leaf, image })
            image.onerror = reject
            image.src = leaf.src
          })
      )
    )
  }

  return spritePromise
}

function createDustSprite() {
  const sprite = document.createElement('canvas')
  sprite.width = 64
  sprite.height = 64
  const ctx = sprite.getContext('2d')

  if (!ctx) return sprite

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255, 248, 218, 0.95)')
  gradient.addColorStop(0.28, 'rgba(253, 224, 130, 0.65)')
  gradient.addColorStop(0.62, 'rgba(245, 183, 63, 0.24)')
  gradient.addColorStop(1, 'rgba(245, 183, 63, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  return sprite
}

function buildLeafLayers(width, height, sprites, isMobile) {
  const baseScale = Math.min(1.15, Math.max(0.68, width / 1120))
  const sizeScale = baseScale * (isMobile ? MOBILE_SIZE_FACTOR : 1)
  const alphaScale = isMobile ? MOBILE_ALPHA_FACTOR : 1

  return LEAF_LAYERS.map((config) => {
    const particles = []
    const count = isMobile ? config.mobileCount : config.count

    for (let index = 0; index < count; index += 1) {
      const size = rand(config.size[0], config.size[1]) * sizeScale

      particles.push({
        sprite: pick(sprites),
        x: Math.random() * (width + 120) - 60,
        y: rand(-height * 0.55, height),
        size,
        alpha: rand(config.alpha[0], config.alpha[1]) * alphaScale,
        angle: rand(0, Math.PI * 2),
        spin: rand(config.spin[0], config.spin[1]) * (Math.random() < 0.5 ? -1 : 1),
        tumble: rand(0, Math.PI * 2),
        tumbleSpeed: rand(config.tumble[0], config.tumble[1]) * (Math.random() < 0.5 ? -1 : 1),
        vx: rand(-4, 8),
        vy: rand(8, 18),
        terminal: rand(config.speed[0], config.speed[1]),
        gust: rand(config.wind[0], config.wind[1]),
        swayAmp: rand(config.sway[0], config.sway[1]),
        swaySpeed: rand(0.35, 0.9),
        swayPhase: rand(0, Math.PI * 2),
        twinkle: rand(0.5, 1.4),
        kickX: 0,
        kickY: 0,
      })
    }

    return { blur: config.blur, particles }
  })
}

function buildDust(width, height, isDark) {
  const particles = []
  const bokehCount = Math.max(5, Math.round(width / 150))
  const moteCount = Math.max(16, Math.round(width / 34))

  for (let index = 0; index < bokehCount; index += 1) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: rand(9, 24),
      vx: rand(1.5, 5),
      vy: rand(-4.5, -1),
      baseAlpha: isDark ? rand(0.14, 0.34) : rand(0.07, 0.18),
      phase: rand(0, Math.PI * 2),
      twinkle: rand(0.25, 0.7),
      wobble: rand(3, 10),
      wobbleSpeed: rand(0.2, 0.55),
    })
  }

  for (let index = 0; index < moteCount; index += 1) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: rand(0.9, 3.4),
      vx: rand(2, 9),
      vy: rand(-6, 1.5),
      baseAlpha: isDark ? rand(0.28, 0.68) : rand(0.14, 0.38),
      phase: rand(0, Math.PI * 2),
      twinkle: rand(0.6, 1.8),
      wobble: rand(2, 7),
      wobbleSpeed: rand(0.35, 0.9),
    })
  }

  return particles
}

function setupScene({ canvas, container, sprites, isDark }) {
  const ctx = canvas.getContext('2d')

  if (!ctx) return () => {}

  const dustSprite = createDustSprite()
  const pointer = {
    active: false,
    x: -9999,
    y: -9999,
    lastX: null,
    lastY: null,
    lastTime: 0,
    vx: 0,
    vy: 0,
    speed: 0,
  }

  let width = 0
  let height = 0
  let layers = []
  let dust = []
  let elapsed = 0
  let lastFrame = 0
  let rafId = 0
  let visible = true
  let isMobile = window.innerWidth < MOBILE_BREAKPOINT

  const build = () => {
    layers = buildLeafLayers(width, height, sprites, isMobile)
    dust = buildDust(width, height, isDark)
  }

  const resize = () => {
    const rect = container.getBoundingClientRect()
    const nextWidth = Math.max(1, Math.round(rect.width))
    const nextHeight = Math.max(1, Math.round(rect.height))
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    canvas.width = Math.round(nextWidth * dpr)
    canvas.height = Math.round(nextHeight * dpr)
    canvas.style.width = `${nextWidth}px`
    canvas.style.height = `${nextHeight}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const widthChanged = Math.abs(nextWidth - width) > 28
    const nextIsMobile = window.innerWidth < MOBILE_BREAKPOINT
    const modeChanged = nextIsMobile !== isMobile
    width = nextWidth
    height = nextHeight
    isMobile = nextIsMobile

    if (!layers.length || widthChanged || modeChanged) build()
  }

  const drawDust = (seconds) => {
    const t = elapsed
    ctx.save()
    if (isDark) ctx.globalCompositeOperation = 'lighter'

    dust.forEach((mote) => {
      mote.x += mote.vx * seconds + Math.sin(t * mote.wobbleSpeed + mote.phase) * mote.wobble * seconds
      mote.y += mote.vy * seconds + Math.cos(t * mote.wobbleSpeed * 0.8 + mote.phase) * mote.wobble * 0.5 * seconds

      if (mote.x - mote.radius > width) mote.x = -mote.radius - Math.random() * 40
      if (mote.x + mote.radius < 0) mote.x = width + mote.radius
      if (mote.y + mote.radius < -20) mote.y = height + mote.radius
      if (mote.y - mote.radius > height + 20) mote.y = -mote.radius

      const shimmer = 0.5 + 0.5 * Math.sin(t * mote.twinkle + mote.phase)
      const alpha = mote.baseAlpha * (0.4 + 0.6 * shimmer)
      const size = mote.radius * 2

      ctx.globalAlpha = alpha
      ctx.drawImage(dustSprite, mote.x - mote.radius, mote.y - mote.radius, size, size)
    })

    ctx.restore()
  }

  const applyPointerWind = (seconds) => {
    pointer.speed *= Math.exp(-seconds * 6.5)

    if (!pointer.active || pointer.speed < 0.24) return

    const radius = 178
    const directionLength = Math.hypot(pointer.vx, pointer.vy) || 1
    const dirX = pointer.vx / directionLength
    const dirY = pointer.vy / directionLength
    const force = Math.min(pointer.speed, 2.4)

    layers.forEach((layer) => {
      layer.particles.forEach((particle) => {
        const dx = particle.x - pointer.x
        const dy = particle.y - pointer.y
        const distance = Math.hypot(dx, dy)
        const reach = radius + particle.size * 0.7

        if (distance > reach) return

        const falloff = 1 - distance / reach
        const push = force * falloff * falloff * 128
        const nx = distance > 0.001 ? dx / distance : dirX
        const ny = distance > 0.001 ? dy / distance : dirY

        particle.kickX += (nx * 0.42 + dirX) * push
        particle.kickY += (ny * 0.42 + dirY) * push - falloff * 26
        particle.spin += (Math.random() - 0.5) * falloff * 2.4
        particle.tumbleSpeed += (Math.random() - 0.5) * falloff * 1.6
      })
    })
  }

  const drawLeaves = (seconds) => {
    layers.forEach((layer) => {
      ctx.filter = layer.blur > 0 ? `blur(${layer.blur}px)` : 'none'

      layer.particles.forEach((particle) => {
        particle.vx +=
          ((9 + Math.sin(elapsed * 0.23) * 7 + Math.sin(elapsed * 0.57) * 3) * particle.gust +
            Math.cos(elapsed * particle.swaySpeed + particle.swayPhase) * particle.swayAmp -
            particle.vx) *
          Math.min(1, seconds * 1.35)
        particle.vy += (particle.terminal - particle.vy) * Math.min(1, seconds * 0.55)
        particle.kickX *= Math.exp(-seconds * 1.6)
        particle.kickY *= Math.exp(-seconds * 1.6)

        particle.x += (particle.vx + particle.kickX) * seconds
        particle.y += (particle.vy + particle.kickY) * seconds
        particle.angle += particle.spin * seconds
        particle.tumble += particle.tumbleSpeed * seconds

        const horizontalWrap = particle.size * 2 + 120
        if (particle.x > width + horizontalWrap) particle.x = -horizontalWrap
        if (particle.x < -horizontalWrap) particle.x = width + horizontalWrap

        if (particle.y - particle.size > height + 60) {
          particle.y = -particle.size - Math.random() * height * 0.55
          particle.x = Math.random() * (width + 100) - 50
          particle.vy = rand(6, 16)
          particle.kickX = 0
          particle.kickY = 0
        }

        const flip = Math.cos(particle.tumble)
        const scaleX = (flip >= 0 ? 1 : -1) * (0.22 + 0.78 * Math.abs(flip))
        const scaleY = 0.9 + 0.1 * Math.abs(Math.sin(particle.tumble))
        const shimmer = 0.82 + 0.18 * Math.sin(elapsed * particle.twinkle + particle.angle)

        ctx.save()
        ctx.translate(
          particle.x + Math.sin(particle.tumble * 1.4 + particle.swayPhase) * particle.size * 0.06,
          particle.y
        )
        ctx.rotate(particle.angle)
        ctx.scale(scaleX, scaleY)
        ctx.globalAlpha = particle.alpha * shimmer
        ctx.drawImage(
          particle.sprite.image,
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size
        )
        ctx.restore()
      })
    })

    ctx.filter = 'none'
  }

  const frame = (now) => {
    const seconds = lastFrame ? Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000)) : 0.016
    lastFrame = now
    elapsed += seconds

    ctx.clearRect(0, 0, width, height)
    drawDust(seconds)
    applyPointerWind(seconds)
    drawLeaves(seconds)

    rafId = requestAnimationFrame(frame)
  }

  const start = () => {
    if (rafId || !visible || document.hidden) return
    lastFrame = 0
    rafId = requestAnimationFrame(frame)
  }

  const stop = () => {
    if (!rafId) return
    cancelAnimationFrame(rafId)
    rafId = 0
  }

  const onPointerMove = (event) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const now = performance.now()
    const isInside = x >= -20 && x <= rect.width + 20 && y >= -20 && y <= rect.height + 20

    pointer.active = isInside

    if (!isInside) return

    if (pointer.lastX !== null) {
      const delta = Math.max(16, now - pointer.lastTime)
      const vx = (x - pointer.lastX) / delta
      const vy = (y - pointer.lastY) / delta
      pointer.vx = pointer.vx * 0.55 + vx * 0.45
      pointer.vy = pointer.vy * 0.55 + vy * 0.45
      pointer.speed = pointer.speed * 0.5 + Math.hypot(vx, vy) * 0.5
    }

    pointer.x = x
    pointer.y = y
    pointer.lastX = x
    pointer.lastY = y
    pointer.lastTime = now
  }

  const onPointerLeave = () => {
    pointer.active = false
    pointer.lastX = null
    pointer.lastY = null
  }

  const onVisibilityChange = () => {
    if (document.hidden) stop()
    else start()
  }

  resize()
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerLeave, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange)

  const observer = new ResizeObserver(resize)
  observer.observe(container)

  let intersectionObserver = null
  if (typeof IntersectionObserver !== 'undefined') {
    intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) start()
        else stop()
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(container)
  }

  start()

  return () => {
    stop()
    observer.disconnect()
    intersectionObserver?.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerleave', onPointerLeave)
    document.removeEventListener('visibilitychange', onVisibilityChange)
    ctx.clearRect(0, 0, width, height)
  }
}

export default function AutumnLeafCanvas() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    let cancelled = false
    let cleanup = null

    loadSprites()
      .then((sprites) => {
        if (cancelled) return
        cleanup = setupScene({ canvas, container, sprites, isDark })
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [isDark])

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
