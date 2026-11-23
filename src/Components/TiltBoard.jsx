import { useEffect, useRef } from 'react'

const MAX_TILT = 3.5
const FINE_POINTER = '(hover: hover) and (pointer: fine)'
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

export default function TiltBoard({
  as: Tag = 'div',
  strength = MAX_TILT,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (!window.matchMedia(FINE_POINTER).matches) return undefined
    if (window.matchMedia(REDUCED_MOTION).matches) return undefined

    let frame = 0
    let targetX = 0
    let targetY = 0

    const paint = () => {
      node.style.setProperty('--tilt-x', `${targetX.toFixed(2)}deg`)
      node.style.setProperty('--tilt-y', `${targetY.toFixed(2)}deg`)
      frame = 0
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return

      const rect = node.getBoundingClientRect()
      if (!rect.width || !rect.height) return

      const relativeX = (event.clientX - rect.left) / rect.width - 0.5
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5

      targetY = Math.max(-strength, Math.min(strength, relativeX * strength * 2))
      targetX = Math.max(-strength, Math.min(strength, relativeY * -strength * 2))
      node.dataset.tilting = 'true'
      schedule()
    }

    const handlePointerLeave = () => {
      targetX = 0
      targetY = 0
      delete node.dataset.tilting
      schedule()
    }

    node.addEventListener('pointermove', handlePointerMove)
    node.addEventListener('pointerleave', handlePointerLeave)
    node.addEventListener('pointercancel', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerleave', handlePointerLeave)
      node.removeEventListener('pointercancel', handlePointerLeave)
      node.style.removeProperty('--tilt-x')
      node.style.removeProperty('--tilt-y')
      delete node.dataset.tilting
    }
  }, [strength])

  return (
    <Tag ref={ref} className={`tilt ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
