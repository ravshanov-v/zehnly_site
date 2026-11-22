import { useCallback, useEffect, useRef, useState } from 'react'
import { ToastContext } from './toastContext.js'

let nextToastId = 0

const VARIANTS = {
  success: {
    border: 'border-positive/25',
    iconBg: 'bg-positive/10',
    iconText: 'text-positive',
    title: 'text-ink',
  },
  error: {
    border: 'border-negative/25',
    iconBg: 'bg-negative/10',
    iconText: 'text-negative',
    title: 'text-ink',
  },
  info: {
    border: 'border-ember/25',
    iconBg: 'bg-ember/10',
    iconText: 'text-ember',
    title: 'text-ink',
  },
}

function ToastIcon({ variant }) {
  if (variant === 'error') {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  if (variant === 'info') {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.79 6.8-6.79a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ToastItem({ toast, onDismiss }) {
  const variant = VARIANTS[toast.variant] ?? VARIANTS.success

  return (
    <div
      role="status"
      className={`zehnly-toast-in pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border bg-raised px-4 py-3 sm:w-88 ${variant.border}`}
    >
      <span
        aria-hidden="true"
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${variant.iconBg} ${variant.iconText}`}
      >
        <ToastIcon variant={toast.variant} />
      </span>

      <div className="min-w-0 flex-1">
        {toast.title && <p className={`text-sm font-semibold ${variant.title}`}>{toast.title}</p>}
        <p className={`text-xs leading-5 text-muted ${toast.title ? 'mt-0.5' : 'mt-1'}`}>
          {toast.message}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        aria-label="Bildirishnomani yopish"
        className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
    </div>
  )
}

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef(new Map())

  const dismissToast = useCallback((id) => {
    const timer = timersRef.current.get(id)
    if (timer) {
      window.clearTimeout(timer)
      timersRef.current.delete(id)
    }

    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    (message, options = {}) => {
      const id = (nextToastId += 1)
      const toast = {
        id,
        message,
        title: options.title ?? '',
        variant: options.variant ?? 'success',
      }

      setToasts((prev) => [...prev.slice(-2), toast])

      const timer = window.setTimeout(() => dismissToast(id), options.duration ?? 4200)
      timersRef.current.set(id, timer)

      return id
    },
    [dismissToast]
  )

  useEffect(() => {
    const timers = timersRef.current

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      timers.clear()
    }
  }, [])

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}

      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-4 top-20 z-[90] flex flex-col items-center gap-2 sm:inset-x-auto sm:right-6 sm:top-24 sm:items-end"
      >
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
