import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/useTheme.js'

const MOBILE_BREAKPOINT = 768
const DESKTOP_COUNT = [18, 22]
const MOBILE_COUNT = [8, 10]

const rand = (min, max) => min + Math.random() * (max - min)
const pick = (items) => items[(Math.random() * items.length) | 0]

const spriteCache = new Map()

function createCrystalSprite(isDark, variant) {
  const sprite = document.createElement('canvas')
  sprite.width = 128
  sprite.height = 128
  const ctx = sprite.getContext('2d')

  if (!ctx) return sprite

  const color = isDark ? '#eef9ff' : variant === 0 ? '#38bdf8' : '#7dd3fc'
  const glow = isDark ? 'rgba(186, 230, 253, 0.85)' : 'rgba(56, 189, 248, 0.65)'
  const armLength = variant === 0 ? 52 : 47
  const branchAt = variant === 0 ? [0.52, 0.78] : [0.58, 0.82]
  const branchLength = variant === 0 ? [13, 9] : [10, 7]
  const branchAngle = Math.PI / 4.2

  ctx.translate(64, 64)
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  ctx.shadowColor = glow
  ctx.shadowBlur = 8

  for (let index = 0; index < 6; index += 1) {
    ctx.save()
    ctx.rotate((Math.PI / 3) * index)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -armLength)

    branchAt.forEach((position, branchIndex) => {
      const y = -armLength * position
      const length = branchLength[branchIndex]
      const dx = Math.sin(branchAngle) * length
      const dy = Math.cos(branchAngle) * length
      ctx.moveTo(0, y)
      ctx.lineTo(dx, y - dy)
      ctx.moveTo(0, y)
      ctx.lineTo(-dx, y - dy)
    })

    ctx.stroke()
    ctx.restore()
  }

  ctx.beginPath()
  ctx.arc(0, 0, 3.4, 0, Math.PI * 2)
  ctx.fill()

  return sprite
}

function createBokehSprite(isDark) {
  const sprite = document.createElement('canvas')
  sprite.width = 96
  sprite.height = 96
  const ctx = sprite.getContext('2d')

  if (!ctx) return sprite

  const gradient = ctx.createRadialGradient(48, 48, 0, 48, 48, 46)
  gradient.addColorStop(0, isDark ? 'rgba(255, 255, 255, 0.88)' : 'rgba(224, 242, 254, 0.92)')
  gradient.addColorStop(0.4, isDark ? 'rgba(219, 234, 254, 0.34)' : 'rgba(125, 211, 252, 0.46)')
  gradient.addColorStop(0.75, isDark ? 'rgba(147, 197, 253, 0.12)' : 'rgba(56, 189, 248, 0.18)')
  gradient.addColorStop(1, isDark ? 'rgba(147, 197, 253, 0)' : 'rgba(56, 189, 248, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 96, 96)

  return sprite
}

function createSparkleSprite(isDark) {
  const sprite = document.createElement('canvas')
  sprite.width = 64
  sprite.height = 64
  const ctx = sprite.getContext('2d')

  if (!ctx) return sprite

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, isDark ? 'rgba(255, 255, 255, 0.98)' : 'rgba(240, 249, 255, 1)')
  gradient.addColorStop(0.28, isDark ? 'rgba(240, 249, 255, 0.8)' : 'rgba(125, 211, 252, 0.85)')
  gradient.addColorStop(0.62, isDark ? 'rgba(186, 230, 253, 0.3)' : 'rgba(56, 189, 248, 0.32)')
  gradient.addColorStop(1, 'rgba(186, 230, 253, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  return sprite
}

function getSprites(isDark) {
  const key = isDark ? 'dark' : 'light'

  if (!spriteCache.has(key)) {
    spriteCache.set(key, {
      crystals: [createCrystalSprite(isDark, 0), createCrystalSprite(isDark, 1)],
      bokeh: createBokehSprite(isDark),
      sparkles: createSparkleSprite(isDark),
    })
  }

  return spriteCache.get(key)
}

function buildFlakes(width, height, isMobile, sprites) {
  const [minCount, maxCount] = isMobile ? MOBILE_COUNT : DESKTOP_COUNT
  const total = Math.round(rand(minCount, maxCount))
  const crystalCount = Math.max(1, Math.round(total * 0.2))
  const bokehCount = Math.max(2, Math.round(total * 0.35))
  const sparkleCount = Math.max(1, total - crystalCount - bokehCount)
  const sizeScale = isMobile ? 0.8 : 1
  const flakes = []

  const addFlake = (flake) => {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      swayAmp: rand(10, 28),
      swaySpeed: rand(0.16, 0.42),
      phase: rand(0, Math.PI * 2),
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(-0.12, 0.12),
      twinkle: rand(0.4, 1.2),
      ...flake,
    })
  }

  for (let index = 0; index < bokehCount; index += 1) {
    addFlake({
      type: 'bokeh',
      sprite: sprites.bokeh,
      size: rand(7, 15) * sizeScale,
      alpha: rand(0.2, 0.42),
      fallSpeed: rand(4, 9),
      swayAmp: rand(14, 34),
      swaySpeed: rand(0.12, 0.28),
    })
  }

  for (let index = 0; index < crystalCount; index += 1) {
    addFlake({
      type: 'crystal',
      sprite: pick(sprites.crystals),
      size: rand(10, 18) * sizeScale,
      alpha: rand(0.38, 0.68),
      fallSpeed: rand(7, 13),
      swayAmp: rand(9, 26),
      swaySpeed: rand(0.16, 0.36),
    })
  }

  for (let index = 0; index < sparkleCount; index += 1) {
    addFlake({
      type: 'sparkle',
      sprite: sprites.sparkles,
      size: rand(1.5, 3.5),
      alpha: rand(0.3, 0.7),
      fallSpeed: rand(6, 16),
      swayAmp: rand(8, 22),
      swaySpeed: rand(0.2, 0.5),
    })
  }

  return flakes
}

function setupScene({ canvas, container, isDark }) {
  const ctx = canvas.getContext('2d')

  if (!ctx) return () => {}

  const sprites = getSprites(isDark)
  let width = 0
  let height = 0
  let flakes = []
  let elapsed = 0
  let lastFrame = 0
  let rafId = 0
  let visible = true

  const resize = () => {
    const rect = container.getBoundingClientRect()
    const nextWidth = Math.max(1, Math.round(rect.width))
    const nextHeight = Math.max(1, Math.round(rect.height))
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    if (nextWidth === width && nextHeight === height) return

    canvas.width = Math.round(nextWidth * dpr)
    canvas.height = Math.round(nextHeight * dpr)
    canvas.style.width = `${nextWidth}px`
    canvas.style.height = `${nextHeight}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    width = nextWidth
    height = nextHeight
    flakes = buildFlakes(width, height, window.innerWidth < MOBILE_BREAKPOINT, sprites)
  }

  const frame = (now) => {
    const seconds = lastFrame ? Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000)) : 0.016
    lastFrame = now
    elapsed += seconds

    ctx.clearRect(0, 0, width, height)

    flakes.forEach((flake) => {
      flake.y += flake.fallSpeed * seconds

      const drawSize = flake.type === 'sparkle' ? flake.size * 2.2 : flake.size
      const x = flake.x + Math.sin(elapsed * flake.swaySpeed + flake.phase) * flake.swayAmp

      if (flake.y - drawSize / 2 > height) {
        flake.y = -drawSize / 2 - Math.random() * 80
        flake.x = Math.random() * width
      }

      if (flake.type === 'crystal') {
        flake.rotation += flake.rotationSpeed * seconds
        ctx.save()
        ctx.translate(x, flake.y)
        ctx.rotate(flake.rotation + Math.sin(elapsed * 0.2 + flake.phase) * 0.06)
        ctx.globalAlpha = flake.alpha
        ctx.drawImage(flake.sprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize)
        ctx.restore()
        return
      }

      const twinkle =
        flake.type === 'sparkle'
          ? 0.82 + 0.18 * Math.sin(elapsed * flake.twinkle + flake.phase)
          : 1

      ctx.globalAlpha = flake.alpha * twinkle
      ctx.drawImage(flake.sprite, x - drawSize / 2, flake.y - drawSize / 2, drawSize, drawSize)
    })

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

  const onVisibilityChange = () => {
    if (document.hidden) stop()
    else start()
  }

  resize()
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
    document.removeEventListener('visibilitychange', onVisibilityChange)
    ctx.clearRect(0, 0, width, height)
  }
}

export default function WinterSnowCanvas() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    return setupScene({ canvas, container, isDark })
  }, [isDark])

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
