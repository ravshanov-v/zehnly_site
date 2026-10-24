import { useEffect, useRef } from 'react'

const FONT_STACK = 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'

const PALETTES = {
  light: {
    text: '#0f172a',
    z: ['#22d3ee', '#6366f1', '#a855f7'],
    ring: ['#22d3ee', '#c4b5fd'],
    particles: ['#6366f1', '#8b5cf6', '#0ea5e9'],
    particleAlpha: 0.6,
  },
  dark: {
    text: '#f8fafc',
    z: ['#22d3ee', '#6366f1', '#a855f7'],
    ring: ['#a5f3fc', '#c4b5fd'],
    particles: ['#22d3ee', '#818cf8', '#c4b5fd'],
    particleAlpha: 0.85,
  },
}

const SIZES = {
  sm: { width: 110, height: 34, font: 18, count: 26 },
  md: { width: 124, height: 40, font: 22, count: 40 },
  lg: { width: 140, height: 46, font: 26, count: 52 },
}

const REPEL_RADIUS = 58
const REPEL_FORCE = 0.55
const SPRING = 0.012
const DAMPING = 0.9

export default function ZehnlyInteractiveLogo({ size = 'md', className = '' }) {
  const canvasRef = useRef(null)
  const { width, height, font, count } = SIZES[size] ?? SIZES.md

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const isDark = () => document.documentElement.classList.contains('dark')
    let palette = PALETTES[isDark() ? 'dark' : 'light']

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const zScale = font / 26
    const zX = 4
    const zY = (height - 26 * zScale) / 2
    const zCenter = { x: zX + 13 * zScale, y: height / 2 }

    const particles = Array.from({ length: count }, (_, index) => {
      const angle = Math.random() * Math.PI * 2
      const radius = 15 + Math.random() * 17
      const hx = zCenter.x + Math.cos(angle) * radius
      const hy = zCenter.y + Math.sin(angle) * radius * 0.8
      return {
        hx,
        hy,
        x: hx,
        y: hy,
        vx: 0,
        vy: 0,
        size: 0.6 + Math.random() * 1.1,
        color: palette.particles[index % palette.particles.length],
        phase: Math.random() * Math.PI * 2,
      }
    })

    const pointer = { x: -9999, y: -9999 }
    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    const resetPointer = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    window.addEventListener('pointermove', onPointerMove)
    document.documentElement.addEventListener('pointerleave', resetPointer)
    window.addEventListener('blur', resetPointer)

    const observer = new MutationObserver(() => {
      palette = PALETTES[isDark() ? 'dark' : 'light']
      particles.forEach((particle, index) => {
        particle.color = palette.particles[index % palette.particles.length]
      })
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const addStops = (gradient, colors) => {
      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color)
      })
    }

    const drawZ = (time) => {
      ctx.save()
      ctx.translate(zCenter.x, zCenter.y)
      ctx.rotate((55 * Math.PI) / 180)
      const ringGradient = ctx.createLinearGradient(-11 * zScale, 0, 11 * zScale, 0)
      addStops(ringGradient, palette.ring)
      ctx.globalAlpha = 0.75
      ctx.strokeStyle = ringGradient
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(0, 0, 11 * zScale, 4.2 * zScale, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      const zGradient = ctx.createLinearGradient(zX + 4 * zScale, 0, zX + 22 * zScale, 0)
      addStops(zGradient, palette.z)
      ctx.lineCap = 'square'
      ctx.lineJoin = 'miter'
      ctx.lineWidth = 3.5 * zScale
      ctx.strokeStyle = zGradient
      ctx.beginPath()
      ctx.moveTo(zX + 4.5 * zScale, zY + 5.5 * zScale)
      ctx.lineTo(zX + 21.5 * zScale, zY + 5.5 * zScale)
      ctx.lineTo(zX + 4.5 * zScale, zY + 20.5 * zScale)
      ctx.lineTo(zX + 21.5 * zScale, zY + 20.5 * zScale)
      ctx.stroke()

      const pulse = 1 + 0.18 * Math.sin(time / 900)
      const dotX = zX + 21.5 * zScale
      const dotY = zY + 5.5 * zScale
      const glow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 5.2 * zScale * pulse)
      glow.addColorStop(0, 'rgba(240, 253, 255, 0.95)')
      glow.addColorStop(0.45, 'rgba(34, 211, 238, 0.85)')
      glow.addColorStop(1, 'rgba(34, 211, 238, 0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(dotX, dotY, 5.2 * zScale * pulse, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
      ctx.beginPath()
      ctx.arc(dotX, dotY, 1.2 * zScale, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawText = () => {
      ctx.font = `700 ${font}px ${FONT_STACK}`
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'left'
      if ('letterSpacing' in ctx) ctx.letterSpacing = '-0.3px'
      ctx.fillStyle = palette.text
      ctx.fillText('ehnly', zX + 26 * zScale + 2, height / 2 + 1)
      if ('letterSpacing' in ctx) ctx.letterSpacing = '0px'
    }

    let raf = 0
    const frame = (time) => {
      ctx.clearRect(0, 0, width, height)

      for (const particle of particles) {
        if (!reduced) {
          const dx = particle.x - pointer.x
          const dy = particle.y - pointer.y
          const distance = Math.hypot(dx, dy)

          if (distance < REPEL_RADIUS && distance > 0.001) {
            const force = (((REPEL_RADIUS - distance) / REPEL_RADIUS) ** 2) * REPEL_FORCE
            particle.vx += (dx / distance) * force
            particle.vy += (dy / distance) * force
          }

          particle.vx += (particle.hx - particle.x) * SPRING
          particle.vy += (particle.hy - particle.y) * SPRING
          particle.vx *= DAMPING
          particle.vy *= DAMPING
          particle.x += particle.vx
          particle.y += particle.vy
        }

        const twinkle = 0.5 + 0.5 * Math.sin(time / 1000 + particle.phase)
        ctx.globalAlpha = palette.particleAlpha * (0.45 + 0.55 * twinkle)
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      drawZ(time)
      drawText()

      if (!reduced) raf = requestAnimationFrame(frame)
    }

    frame(0)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', resetPointer)
      window.removeEventListener('blur', resetPointer)
    }
  }, [width, height, font, count])

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Zehnly"
      className={`block cursor-pointer select-none ${className}`}
      style={{ width, height }}
    />
  )
}
