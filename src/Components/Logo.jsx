const SIZES = {
  sm: { mark: 'h-6 w-6', text: 'text-[15px]' },
  md: { mark: 'h-7 w-7', text: 'text-lg' },
  lg: { mark: 'h-9 w-9', text: 'text-2xl' },
}

export default function Logo({ size = 'md', className = '' }) {
  const { mark, text } = SIZES[size] ?? SIZES.md

  return (
    <div
      role="img"
      aria-label="Mushohada"
      className={`inline-flex cursor-pointer select-none items-center gap-2.5 ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={`shrink-0 overflow-visible ${mark}`}
      >
        <rect x="1" y="1" width="30" height="30" rx="9" fill="var(--ember)" />
        <path
          d="M8.75 22.75V10.5L16 17l7.25-6.5v12.25"
          fill="none"
          stroke="var(--ember-ink)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="9.4" r="2.05" fill="var(--ember-ink)" fillOpacity="0.92" />
      </svg>

      <span
        aria-hidden="true"
        className={`font-display font-semibold leading-none tracking-[-0.05em] text-ink ${text}`}
      >
        mushohada
      </span>
    </div>
  )
}
