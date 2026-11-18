import { useEffect, useRef } from 'react'
import { useSeasonalScene } from '../../context/useSeasonalScene.js'
import { AUTUMN_LEAVES } from './leafShapes.js'

const SPRITE_SIZE = 192
const SPRITE_INSET = 36
const SPRITE_LEAF = SPRITE_SIZE - SPRITE_INSET * 2
const SPRITE_SCALE = SPRITE_SIZE / SPRITE_LEAF

const LAYERS = [
  {
    share: 0.38,
    leaves: ['maple-rust', 'oak-crimson', 'maple-copper', 'oak-rust', 'birch-rust', 'oak-olive'],
    size: [32, 54],
    alpha: [0.78, 0.92],
    brightness: 0.5,
    saturation: 0.74,
    shadowColor: 'rgba(22, 8, 2, 0.62)',
    shadowBlur: 26,
    shadowOffset: 10,
    spring: 24,
    damping: 6.2,
    gravity: 320,
    reachX: 78,
    reachY: 72,
  },
  {
    share: 0.34,
    leaves: ['oak-amber', 'maple-amber', 'birch-copper', 'maple-rust', 'oak-rust', 'birch-rust'],
    size: [28, 48],
    alpha: [0.86, 0.97],
    brightness: 0.78,
    saturation: 0.92,
    shadowColor: 'rgba(32, 13, 3, 0.58)',
    shadowBlur: 24,
    shadowOffset: 9,
    spring: 19,
    damping: 5.4,
    gravity: 280,
    reachX: 84,
    reachY: 78,
  },
  {
    share: 0.28,
    leaves: ['maple-gold', 'oak-gold', 'birch-gold', 'birch-amber', 'maple-amber', 'oak-amber', 'maple-copper'],
    size: [26, 44],
    alpha: [0.92, 1],
    brightness: 1.08,
    saturation: 1.12,
    shadowColor: 'rgba(40, 17, 4, 0.55)',
    shadowBlur: 28,
    shadowOffset: 11,
    spring: 14,
    damping: 4.4,
    gravity: 230,
    reachX: 92,
    reachY: 84,
  },
]

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
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
            image.onload = () => resolve([leaf.id, image])
            image.onerror = reject
            image.src = leaf.src
          })
      )
    ).then((entries) => Object.fromEntries(entries))
  }

  return spritePromise
}

function buildLayerSprites(images) {
  return LAYERS.map((layer) => {
    const sprites = layer.leaves
      .map((id) => {
        const image = images[id]
        if (!image) return null

        const canvas = document.createElement('canvas')
        canvas.width = SPRITE_SIZE
        canvas.height = SPRITE_SIZE
        const ctx = canvas.getContext('2d')
        if (!ctx) return null

        ctx.filter = `brightness(${layer.brightness}) saturate(${layer.saturation})`
        ctx.shadowColor = layer.shadowColor
        ctx.shadowBlur = layer.shadowBlur
        ctx.shadowOffsetY = layer.shadowOffset
        ctx.drawImage(image, SPRITE_INSET, SPRITE_INSET, SPRITE_LEAF, SPRITE_LEAF)

        return canvas
      })
      .filter(Boolean)

    return sprites
  })
}

function surfaceAt(x, width, height) {
  const t = width > 0 ? x / width : 0
  const wave =
    Math.sin(t * Math.PI * 2.3 + 0.55) * 0.52 +
    Math.sin(t * Math.PI * 5.1 + 2.1) * 0.3 +
    Math.sin(t * Math.PI * 9.7 + 0.9) * 0.18

  return height * (0.37 + wave * 0.15)
}

function buildParticles(width, height, layerSprites) {
  const scale = clamp(Math.sqrt(width / 1120), 0.68, 1.35)
  const total = clamp(Math.round(width / 7), 180, 220)
  const counts = LAYERS.map((layer) => Math.round(total * layer.share))
  counts[counts.length - 1] += total - counts.reduce((sum, count) => sum + count, 0)

  const particles = []

  LAYERS.forEach((layer, layerIndex) => {
    const sprites = layerSprites[layerIndex]
    if (!sprites.length) return

    const count = counts[layerIndex]
    const span = width + 56

    for (let index = 0; index < count; index += 1) {
      const x = -28 + ((index + rand(0.05, 0.95) + layerIndex * 0.31) / count) * span
      const surface = surfaceAt(x, width, height)
      const depth = height - surface
      const size = rand(layer.size[0], layer.size[1]) * scale

      let y
      if (layerIndex === 0) y = surface + depth * rand(0.36, 1.01)
      else if (layerIndex === 1) y = surface + depth * rand(0.14, 0.78)
      else y = surface + depth * rand(-0.03, 0.34)

      const angle = rand(-Math.PI * 0.92, Math.PI * 0.92)

      particles.push({
        layerIndex,
        sprite: pick(sprites),
        x,
        y,
        homeX: x,
        homeY: y,
        vx: 0,
        vy: 0,
        size,
        angle,
        homeAngle: angle,
        angular: 0,
        alpha: rand(layer.alpha[0], layer.alpha[1]),
        swayPhase: rand(0, Math.PI * 2),
        swaySpeed: rand(0.4, 1.1),
      })
    }
  })

  return particles.sort((a, b) => a.homeY - b.homeY)
}

function setupScene({ canvas, container, layerSprites }) {
  const ctx = canvas.getContext('2d')

  if (!ctx) return () => {}

  ctx.imageSmoothingQuality = 'medium'

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  const pointer = {
    active: false,
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastClientX: null,
    lastClientY: null,
    lastTime: 0,
  }

  let width = 0
  let height = 0
  let particles = []
  let elapsed = 0
  let lastFrame = 0
  let rafId = 0
  let visible = true

  const rebuild = () => {
    particles = buildParticles(width, height, layerSprites)
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

    const changed = Math.abs(nextWidth - width) > 20 || Math.abs(nextHeight - height) > 8
    width = nextWidth
    height = nextHeight

    if (!particles.length || changed) rebuild()
  }

  const drawBackdrop = () => {
    const gradient = ctx.createLinearGradient(0, height * 0.4, 0, height)
    gradient.addColorStop(0, 'rgba(92, 42, 11, 0)')
    gradient.addColorStop(0.6, 'rgba(74, 32, 8, 0.1)')
    gradient.addColorStop(1, 'rgba(40, 16, 4, 0.34)')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  const draw = (seconds) => {
    for (let layerIndex = 0; layerIndex < LAYERS.length; layerIndex += 1) {
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index]
        if (particle.layerIndex !== layerIndex) continue

        const sway = Math.sin(seconds * particle.swaySpeed + particle.swayPhase)
        const drawX = particle.x + sway * 0.55
        const drawY = particle.y + Math.cos(seconds * particle.swaySpeed * 0.8 + particle.swayPhase) * 0.35
        const drawAngle = particle.angle + sway * 0.012
        const drawSize = particle.size * SPRITE_SCALE

        ctx.globalAlpha = particle.alpha
        ctx.save()
        ctx.translate(drawX, drawY)
        ctx.rotate(drawAngle)
        ctx.drawImage(particle.sprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize)
        ctx.restore()
      }
    }

    ctx.globalAlpha = 1
  }

  const update = (dt) => {
    pointer.vx *= Math.exp(-dt * 3.2)
    pointer.vy *= Math.exp(-dt * 3.2)
    pointer.speed *= Math.exp(-dt * 5.8)

    const pointerX = pointer.x
    const pointerY = pointer.y
    const pointerActive = pointer.active

    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index]
      const layer = LAYERS[particle.layerIndex]

      let ax = (particle.homeX - particle.x) * layer.spring
      let ay = (particle.homeY - particle.y) * layer.spring
      let angularAcceleration = (particle.homeAngle - particle.angle) * 8

      if (particle.y < particle.homeY) {
        ay += layer.gravity * Math.min(1.35, (particle.homeY - particle.y) / 16)
      }

      if (pointerActive) {
        const reachX = layer.reachX + particle.size * 0.75
        const reachY = layer.reachY + particle.size * 0.9
        const dx = particle.x - pointerX
        const dy = particle.y - pointerY
        const distance = Math.hypot(dx / reachX, dy / reachY)

        if (distance < 1) {
          const influence = (1 - distance) ** 2
          const speed = Math.min(pointer.speed, 2200)
          const wind = Math.min(1, speed / 1400)
          const length = Math.hypot(dx, dy) || 1
          const directionX = dx / length
          const directionY = dy / length

          ax += (pointer.vx * 2.1 + directionX * 300) * influence * wind
          ay += (pointer.vy * 2.1 + directionY * 260) * influence * wind

          if (pointerY > particle.y + 1) {
            const below = Math.min(1, (pointerY - particle.y) / (reachY * 0.9))
            const motion = Math.min(1, speed / 1200)
            ay -= 1250 * influence * below * motion
            angularAcceleration += (Math.random() - 0.5) * 52 * influence * motion
          }

          angularAcceleration += (Math.random() - 0.5) * (14 + wind * 46) * influence
        }
      }

      particle.vx = clamp(particle.vx + ax * dt, -1000, 1000) * Math.exp(-layer.damping * dt)
      particle.vy = clamp(particle.vy + ay * dt, -1000, 1000) * Math.exp(-layer.damping * dt)
      particle.x += particle.vx * dt
      particle.y += particle.vy * dt

      particle.angular = (particle.angular + angularAcceleration * dt) * Math.exp(-2.8 * dt)
      particle.angle += particle.angular * dt
    }
  }

  const frame = (now) => {
    const dt = lastFrame ? clamp((now - lastFrame) / 1000, 0.001, 0.034) : 0.016
    lastFrame = now
    elapsed += dt

    update(dt)
    ctx.clearRect(0, 0, width, height)
    drawBackdrop()
    draw(elapsed)

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
    const now = performance.now()

    pointer.active = true
    pointer.x = event.clientX - rect.left
    pointer.y = event.clientY - rect.top

    if (pointer.lastClientX !== null && now - pointer.lastTime < 140) {
      const delta = Math.max(10, now - pointer.lastTime)
      const rawVx = ((event.clientX - pointer.lastClientX) / delta) * 1000
      const rawVy = ((event.clientY - pointer.lastClientY) / delta) * 1000

      pointer.vx += (clamp(rawVx, -2400, 2400) - pointer.vx) * 0.42
      pointer.vy += (clamp(rawVy, -2400, 2400) - pointer.vy) * 0.42
      pointer.speed = Math.hypot(pointer.vx, pointer.vy)
    } else {
      pointer.vx = 0
      pointer.vy = 0
      pointer.speed = 0
    }

    pointer.lastClientX = event.clientX
    pointer.lastClientY = event.clientY
    pointer.lastTime = now
  }

  const onPointerLeave = () => {
    pointer.active = false
    pointer.vx = 0
    pointer.vy = 0
    pointer.speed = 0
    pointer.lastClientX = null
    pointer.lastClientY = null
  }

  const onVisibilityChange = () => {
    if (document.hidden) stop()
    else start()
  }

  resize()

  if (reducedMotion) {
    const redraw = () => {
      resize()
      ctx.clearRect(0, 0, width, height)
      drawBackdrop()
      draw(0)
    }

    const observer = new ResizeObserver(redraw)
    observer.observe(container)
    redraw()

    return () => {
      observer.disconnect()
      ctx.clearRect(0, 0, width, height)
    }
  }

  const observer = new ResizeObserver(resize)
  observer.observe(container)

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerLeave, { passive: true })
  window.addEventListener('blur', onPointerLeave)
  document.addEventListener('visibilitychange', onVisibilityChange)

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
    window.removeEventListener('blur', onPointerLeave)
    document.removeEventListener('visibilitychange', onVisibilityChange)
    ctx.clearRect(0, 0, width, height)
  }
}

export default function AutumnGround() {
  const { enabled, seasonEffect } = useSeasonalScene()
  const isAutumn = enabled && seasonEffect === 'autumn'
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!isAutumn) return undefined

    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return undefined

    let cancelled = false
    let cleanup = null

    loadSprites()
      .then((images) => {
        if (cancelled) return
        const layerSprites = buildLayerSprites(images)
        cleanup = setupScene({ canvas, container, layerSprites })
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [isAutumn])

  if (!isAutumn) return null

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="autumn-ground pointer-events-none relative -mb-24 -mt-8 h-[104px] w-full select-none sm:-mt-10 sm:h-[124px] lg:h-[130px]"
    >
      <canvas ref={canvasRef} className="pointer-events-none block h-full w-full" />
    </div>
  )
}
