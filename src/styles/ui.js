export const brandGradient = 'bg-ember'

export const brandTextGradient = 'text-gradient'

const primaryBase =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-ember px-4 py-2.5 text-sm font-semibold text-ember-ink shadow-[0_18px_40px_-24px_var(--ember)] transition-all duration-200 hover:-translate-y-px hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50'

export const primaryButton = primaryBase

export const primaryButtonPill = primaryBase

export const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-hairline-strong bg-transparent px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-px hover:border-ember/50 hover:bg-ink/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-0'

export const cardClass = 'rounded-2xl border border-hairline bg-raised transition-colors'

export const cardDashedClass =
  'rounded-2xl border border-dashed border-hairline-strong bg-raised/60'

export const iconButton =
  'flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-transparent text-ink transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 active:scale-95'

export const kickerClass = 'kicker'

export const inputClass =
  'h-11 w-full rounded-xl border border-hairline bg-paper px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ember focus:ring-2 focus:ring-ember/15'

export const overlayPanel = 'rounded-2xl border border-hairline bg-raised'

export const overlayBackdrop = 'scrim backdrop-blur-md'

export const navLinkClass = ({ isActive }) =>
  [
    'relative flex items-center rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-150',
    isActive ? 'bg-ink/[0.05] text-ink' : 'text-muted hover:text-ink',
  ].join(' ')

export const sideNavLinkClass = ({ isActive }) =>
  [
    'relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors duration-150',
    isActive
      ? 'bg-ink/[0.05] text-ink after:absolute after:left-0 after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:rounded-full after:bg-ember'
      : 'text-muted hover:bg-ink/[0.03] hover:text-ink',
  ].join(' ')
