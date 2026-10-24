import { useId } from 'react'

const SIZES = {
  sm: { mark: 'h-5 w-5', text: 'text-base' },
  md: { mark: 'h-6 w-6', text: 'text-lg' },
  lg: { mark: 'h-7 w-7', text: 'text-xl' },
}

export default function Logo({ size = 'md' }) {
  const uid = useId().replace(/:/g, '')
  const zId = `zehnly-z-${uid}`
  const ringId = `zehnly-zring-${uid}`
  const coreId = `zehnly-zcore-${uid}`
  const { mark, text } = SIZES[size] ?? SIZES.md

  return (
    <div className="inline-flex cursor-pointer select-none items-center gap-1.5">
      <svg
        viewBox="0 0 26 26"
        aria-hidden="true"
        className={`shrink-0 overflow-visible ${mark}`}
      >
        <defs>
          <linearGradient id={zId} gradientUnits="userSpaceOnUse" x1="4" y1="13" x2="22" y2="13">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id={ringId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id={coreId}>
            <stop offset="0%" stopColor="#f0fdff" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M4.5 5.5 H21.5 L4.5 20.5 H21.5"
          fill="none"
          stroke={`url(#${zId})`}
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        <g className="logo-orbit">
          <g transform="rotate(55 13 13)">
            <ellipse
              cx="13"
              cy="13"
              rx="11"
              ry="4.2"
              fill="none"
              stroke={`url(#${ringId})`}
              strokeWidth="0.9"
            />
            <circle cx="24" cy="13" r="1.1" className="logo-twinkle fill-cyan-300 dark:fill-cyan-100" />
          </g>
        </g>

        <circle cx="21.5" cy="5.5" r="3.4" fill={`url(#${coreId})`} className="logo-core" />
        <circle cx="21.5" cy="5.5" r="1.2" fill="#ffffff" className="opacity-95" />
      </svg>

      <span
        className={`font-bold leading-none tracking-tight text-slate-900 dark:text-white ${text}`}
      >
        ehnly
      </span>
    </div>
  )
}
