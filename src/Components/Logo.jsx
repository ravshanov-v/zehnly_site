import { useId } from 'react'

const SIZES = {
  sm: { mark: 'h-6 w-6', text: 'text-[15px]' },
  md: { mark: 'h-7 w-7', text: 'text-lg' },
  lg: { mark: 'h-9 w-9', text: 'text-2xl' },
}

export default function Logo({ size = 'md', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const gradientId = `zehnly-mark-${uid}`
  const { mark, text } = SIZES[size] ?? SIZES.md

  return (
    <div
      role="img"
      aria-label="Zehnly"
      className={`inline-flex cursor-pointer select-none items-center gap-2.5 ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={`shrink-0 overflow-visible ${mark}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5b7cff" />
            <stop offset="60%" stopColor="#3556f5" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="9" fill={`url(#${gradientId})`} />
        <path
          d="M9.5 10.5 H22.5 L9.5 21.5 H22.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22.5" cy="10.5" r="2.1" fill="#ffffff" fillOpacity="0.9" />
      </svg>

      <span
        aria-hidden="true"
        className={`font-display font-semibold leading-none tracking-[-0.05em] text-ink ${text}`}
      >
        zehnly
      </span>
    </div>
  )
}
