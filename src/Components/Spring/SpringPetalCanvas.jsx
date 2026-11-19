import { useEffect, useRef } from 'react'

const MOBILE_BREAKPOINT = 768
const DESKTOP_COUNT = [10, 12]
const MOBILE_COUNT = [4, 5]

const rand = (min, max) => min + Math.random() * (max - min)

let spriteCache = null

function createPetalSprite(palette) {
  const sprite = document.createElement('canvas')
  sprite.width = 64
  sprite.height = 64
  const ctx = sprite.getContext('2d')

  if (!ctx) return sprite

  const gradient = ctx.createLinearGradient(0, -24, 0, 22)
  gradient.addColorStop(0, palette[0])
  gradient.addColorStop(0.48, palette[1])
  gradient.addColorStop(1, palette[2])

  ctx.translate(32, 33)
  ctx.fillStyle = gradient
  ctx.shadowColor = 'rgba(251, 207, 232, 0.45)'
  ctx.shadowBlur = 7
  ctx.beginPath()
  ctx.moveTo(0, -24)
  ctx.bezierCurveTo(17, -20, 23, -2, 12, 13)
  ctx.bezierCurveTo(6, 20, -6, 20, -12, 13)
  ctx.bezierCurveTo(-23, -2, -17, -20, 0, -24)
  ctx.closePath()
  ctx.fill()

  return sprite
}

function createLeafSprite() {
  const sprite = document.createElement('canvas')
  sprite.width = 64
  sprite.height = 64
  const ctx = sprite.getContext('2d')

  if (!ctx) return sprite

  const gradient = ctx.createLinearGradient(0, -20, 0, 22)
  gradient.addColorStop(0, 'rgba(209, 250, 229, 0.95)')
  gradient.addColorStop(0.5, 'rgba(134, 239, 172, 0.88)')
  gradient.addColorStop(1, 'rgba(52, 211, 153, 0.72)')

  ctx.translate(32, 32)
  ctx.fillStyle = gradient
  ctx.shadowColor = 'rgba(110, 231, 183, 0.4)'
  ctx.shadowBlur = 6
  ctx.beginPath()
  ctx.moveTo(0, -20)
  ctx.bezierCurveTo(15, -12, 15, 10, 0, 22)
  ctx.bezierCurveTo(-15, 10, -15, -12, 0, -20)
  ctx.closePath()
  ctx.fill()

  return sprite
}

function getSprites() {
  if (!spriteCache) {
    spriteCache = {
      petals: [
        createPetalSprite([
          'rgba(255, 255, 255, 0.96)',
          'rgba(251, 207, 232, 0.9)',
          'rgba(249, 168, 212, 0.74)',
        ]),
        createPetalSprite([
          'rgba(255, 255, 255, 0.97)',
          'rgba(254, 205, 211, 0.9)',
          'rgba(253, 164, 175, 0.68)',
        ]),
      ],
      leaf: createLeafSprite(),
    }
  }

  return spriteCache
}

function buildParticles(width, height, isMobile, sprites) {
  const [minCount, maxCount] = isMobile ? MOBILE_COUNT : DESKTOP_COUNT
  const total = Math.round(rand(minCount, maxCount))
  const petalCount = Math.max(2, Math.round(total * 0.7))
  const leafCount = Math.max(1, total - petalCount)
  const sizeScale = isMobile ? 0.85 : 1
  const particles = []

  const addParticle = (particle) => {
    particles.push({
      x: Math.random() * width,
      y: rand(-height * 0.25, height),
      phase: rand(0, Math.PI * 2),
      swayAmp: rand(16, 34),
      swaySpeed: rand(0.18, 0.4),
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(-0.22, 0.22),
      flipPhase: rand(0, Math.PI * 2),
      flipSpeed: rand(0.35, 0.75),
      ...particle,
    })
  }

  for (let index = 0; index < petalCount; index += 1) {
    addParticle({
      type: 'petal',
      sprite: sprites.petals[index % sprites.petals.length],
      size: rand(8, 14) * sizeScale,
      alpha: rand(0.45, 0.78),
      fallSpeed: rand(6, 12),
      wind: rand(2, 6),
    })
  }

  for (let index = 0; index < leafCount; index += 1) {
    addParticle({
      type: 'leaf',
      sprite: sprites.leaf,
      size: rand(4, 7) * sizeScale,
      alpha: rand(0.4, 0.7),
      fallSpeed: rand(7, 14),
      wind: rand(3, 7),
      swayAmp: rand(12, 26),
      swaySpeed: rand(0.22, 0.45),
    })
  }

  return particles
}

function setupScene({ canvas, container }) {
  const ctx = canvas.getContext('2d')

  if (!ctx) return () => {}

  const sprites = getSprites()
  let width = 0
  let height = 0
  let particles = []
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
    particles = buildParticles(width, height, window.innerWidth < MOBILE_BREAKPOINT, sprites)
  }

  const frame = (now) => {
    const seconds = lastFrame ? Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000)) : 0.016
    lastFrame = now
    elapsed += seconds

    ctx.clearRect(0, 0, width, height)

    particles.forEach((particle) => {
      particle.y += particle.fallSpeed * seconds
      particle.x += particle.wind * seconds
      particle.rotation += particle.rotationSpeed * seconds

      if (particle.y - particle.size > height) {
        particle.y = -particle.size - Math.random() * 60
        particle.x = Math.random() * width
      }

      if (particle.x > width + 60) particle.x = -60
      if (particle.x < -60) particle.x = width + 60

      const x =
        particle.x +
        Math.sin(elapsed * particle.swaySpeed + particle.phase) * particle.swayAmp +
        Math.sin(elapsed * 0.23 + particle.phase * 1.7) * particle.swayAmp * 0.35
      const y = particle.y + Math.cos(elapsed * 0.21 + particle.phase) * 5
      const flip = 0.68 + 0.32 * Math.abs(Math.sin(elapsed * particle.flipSpeed + particle.flipPhase))
      const rotation = particle.rotation + Math.sin(elapsed * 0.3 + particle.phase) * 0.2

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.scale(1, flip)
      ctx.globalAlpha = particle.alpha
      ctx.drawImage(particle.sprite, -particle.size / 2, -particle.size / 2, particle.size, particle.size)
      ctx.restore()
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

export default function SpringPetalCanvas() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    return setupScene({ canvas, container })
  }, [])

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
