export const brandGradient = 'bg-gradient-to-br from-indigo-500 to-violet-600'

export const brandTextGradient =
  'bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400'

const primaryBase =
  'inline-flex items-center justify-center gap-2 bg-gradient-to-b from-indigo-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.18),0_4px_14px_-4px_rgb(99_102_241/0.65)] transition-all duration-150 hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.22),0_6px_20px_-4px_rgb(99_102_241/0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-canvas active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50'

export const primaryButton = `${primaryBase} rounded-lg`

export const primaryButtonPill = `${primaryBase} rounded-full`

export const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-line dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-line-strong dark:hover:bg-white/[0.06] dark:hover:text-white dark:focus-visible:ring-offset-canvas active:scale-[0.98]'

export const cardClass =
  'rounded-xl border border-black/5 bg-white/70 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/60'

export const cardDashedClass =
  'rounded-xl border border-dashed border-slate-300/80 bg-white/70 backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/60'

export const iconButton =
  'flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 active:scale-95 dark:border-line dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-line-strong dark:hover:text-white'

export const kickerClass =
  'font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500'

export const overlayPanel =
  'border border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60'

export const overlayBackdrop = 'bg-slate-950/60 backdrop-blur-sm'

export const navLinkClass = ({ isActive }) =>
  [
    'relative flex items-center px-3 py-2 text-sm font-medium transition-colors duration-150',
    isActive
      ? 'text-indigo-600 after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500 dark:text-indigo-400'
      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
  ].join(' ')

export const sideNavLinkClass = ({ isActive }) =>
  [
    'relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150',
    isActive
      ? 'text-indigo-600 after:absolute after:left-0 after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-b after:from-indigo-500 after:to-violet-500 dark:text-indigo-400'
      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
  ].join(' ')
