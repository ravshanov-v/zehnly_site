import { useEffect, useRef } from 'react'

export default function SpacetimeFabric() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (event) => {
      mouseRef.current.targetX = event.clientX
      mouseRef.current.targetY = event.clientY
      mouseRef.current.active = true
    }

    const onMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    // Qator va ustunlar parametrlari
    const spacing = 42 // Kataklar orasi

    const render = () => {
      time += 0.015

      // Kursor inersiyasi (lerp)
      if (mouseRef.current.active) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08
      } else {
        mouseRef.current.x = -1000
        mouseRef.current.y = -1000
      }

      const w = window.innerWidth
      const h = window.innerHeight
      const isDark = document.documentElement.classList.contains('dark')

      ctx.clearRect(0, 0, w, h)

      const cols = Math.ceil(w / spacing) + 2
      const rows = Math.ceil(h / spacing) + 2

      // To'r nuqtalarining egilish koordinatalarini hisoblash
      const points = []

      for (let r = 0; r <= rows; r++) {
        points[r] = []
        for (let c = 0; c <= cols; c++) {
          const originX = c * spacing
          const originY = r * spacing

          // Tabiiy kosmik to'lqinlanish
          const waveX = Math.sin(r * 0.25 + time) * 6
          const waveY = Math.cos(c * 0.25 + time * 0.8) * 6

          let posX = originX + waveX
          let posY = originY + waveY

          // Gravitatsiya tortilishi (kursor yaqinida to'r cho'kadi)
          if (mouseRef.current.active) {
            const dx = posX - mouseRef.current.x
            const dy = posY - mouseRef.current.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const maxDist = 260

            if (dist < maxDist && dist > 0) {
              const force = Math.pow(1 - dist / maxDist, 2) * 45
              posX -= (dx / dist) * force
              posY -= (dy / dist) * force
            }
          }

          points[r][c] = { x: posX, y: posY }
        }
      }

      // 1. Gorizontal chiziqlarni chizish
      ctx.beginPath()
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0.08)'
      ctx.lineWidth = 1

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = points[r][c]
          const p2 = points[r][c + 1]
          if (c === 0) ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
        }
      }
      ctx.stroke()

      // 2. Vertikal chiziqlarni chizish
      ctx.beginPath()
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r < rows; r++) {
          const p1 = points[r][c]
          const p2 = points[r + 1][c]
          if (r === 0) ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
        }
      }
      ctx.stroke()

      // 3. Kesishmalardagi kvant nuqtalar (yulduzlar)
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const p = points[r][c]

          // Faqat kursor yaqinida nuqtalarni yoritish
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const isNear = dist < 200

          ctx.beginPath()
          const dotRadius = isNear ? 2.4 : 1.2
          ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2)

          if (isDark) {
            ctx.fillStyle = isNear
              ? 'rgba(167, 139, 250, 0.85)' // Binafsha yorqin nur
              : 'rgba(224, 231, 255, 0.25)' // Mayin kosmik oq
          } else {
            ctx.fillStyle = isNear ? 'rgba(79, 70, 229, 0.8)' : 'rgba(100, 116, 139, 0.2)'
          }
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 select-none overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-[#04060f]"
    >
      {/* Markaziy kosmik yorug'lik aurosi */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[160px] dark:bg-indigo-500/15" />
      <canvas ref={canvasRef} className="pointer-events-none block h-full w-full opacity-20" />
    </div>
  )
}
