import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/useLanguage.js'
import { useAuthReady } from '../../hooks/useAuthReady.js'
import { useLeaderboard } from '../../hooks/useLeaderboard.js'
import Reveal from '../../Components/Reveal.jsx'
import { ArrowUpRight } from '../../Components/Marks.jsx'

const NUMBER_LOCALES = {
  uz: 'uz-UZ',
  en: 'en-US',
  ru: 'ru-RU',
  de: 'de-DE',
}

const AVATAR_TONES = [
  'from-sky-400 to-indigo-500',
  'from-emerald-400 to-teal-500',
  'from-amber-400 to-orange-500',
  'from-fuchsia-400 to-purple-500',
  'from-rose-400 to-pink-500',
  'from-cyan-400 to-blue-500',
]

const MEDALS = {
  1: {
    badge: 'border-[#F5C451]/45 bg-[#F5C451]/10 text-[#F7D774]',
    ring: 'ring-[#F5C451]/70',
    glow: 'from-[#F5C451] to-[#B7791F]',
  },
  2: {
    badge: 'border-[#C7D2E5]/40 bg-[#C7D2E5]/10 text-[#DCE6F5]',
    ring: 'ring-[#C7D2E5]/60',
    glow: 'from-[#C7D2E5] to-[#7C8BA3]',
  },
  3: {
    badge: 'border-[#D08A5A]/45 bg-[#D08A5A]/10 text-[#E8A87C]',
    ring: 'ring-[#D08A5A]/60',
    glow: 'from-[#D08A5A] to-[#8A4B2A]',
  },
}

const primaryActionClass =
  'inline-flex h-10 items-center gap-2 rounded-xl bg-sky-400 px-4 text-xs font-semibold text-[#04121f] transition-colors hover:bg-sky-300'

const secondaryActionClass =
  'inline-flex h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 text-xs font-semibold text-white transition-colors hover:border-sky-400/50 hover:bg-sky-400/10'

function initialsOf(name) {
  const words = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (words.length === 0) return '?'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}

function toneFor(row) {
  const key = `${row?.id || ''}${row?.name || ''}`
  let hash = 0

  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) >>> 0
  }

  return AVATAR_TONES[hash % AVATAR_TONES.length]
}

function accuracyText(row) {
  return row?.accuracy === null || row?.accuracy === undefined
    ? '—'
    : `${row.accuracy}%`
}

function BoltIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 9.5-12H13l0-8Z" />
    </svg>
  )
}

function CrownIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m3 7 4.5 4L12 4l4.5 7L21 7l-2 11H5L3 7Z" />
      <path d="M5 21h14" />
    </svg>
  )
}

function TrophyIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3" />
    </svg>
  )
}

function WifiOffIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m2 2 20 20" />
      <path d="M8.5 8.5A11 11 0 0 1 21 9.5M3 9.5a11 11 0 0 1 3.1-1.4" />
      <path d="M5.5 13.5a11 11 0 0 1 4-1.3M15 12.4a11 11 0 0 1 3.5 1.1" />
      <path d="M8.8 17a6 6 0 0 1 6.4 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function AlertIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v5M12 17.5v.5" />
    </svg>
  )
}

function LeaderboardAvatar({ row, size = 'h-9 w-9', ring = '', glow = '' }) {
  return (
    <span className="relative inline-flex shrink-0">
      {glow ? (
        <span
          aria-hidden="true"
          className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${glow} opacity-35 blur-md`}
        />
      ) : null}
      <span
        className={`relative flex ${size} items-center justify-center rounded-xl bg-gradient-to-br ${toneFor(row)} font-display text-[11px] font-semibold text-white shadow-[0_10px_30px_-14px_rgba(0,0,0,0.9)] ring-1 ring-white/15 ${ring}`}
      >
        {initialsOf(row?.name)}
      </span>
    </span>
  )
}

function StatCard({ label, value, accent = false }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 backdrop-blur sm:px-4 sm:py-3">
      <span className="block font-mono text-[7px] uppercase tracking-[0.14em] text-white/40 sm:text-[8px]">
        {label}
      </span>
      <span
        className={`mt-1 block font-display text-sm font-semibold leading-none tabular-nums sm:text-lg ${
          accent ? 'text-sky-300' : 'text-white'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function PodiumCard({ row, isCurrent, t, formatNumber }) {
  const medal = MEDALS[row.rank] || MEDALS[3]
  const isFirst = row.rank === 1
  const name = row.name || t('leaderboard.anonymous')

  return (
    <article
      aria-label={t('leaderboard.podiumLabel', {
        rank: row.rank,
        name,
        xp: formatNumber(row.xp),
      })}
      className={[
        'leaderboard-card relative flex flex-col items-center rounded-2xl border border-white/10 px-2 py-4 text-center sm:px-4 sm:py-6',
        isFirst ? 'leaderboard-podium-first sm:-translate-y-3 sm:py-8' : '',
        isCurrent ? 'ring-1 ring-sky-400/70' : '',
      ].join(' ')}
    >
      {isFirst ? (
        <CrownIcon className="mb-1.5 h-5 w-5 text-[#F5C451] drop-shadow-[0_0_10px_rgba(245,196,81,0.55)]" />
      ) : null}

      <span
        className={`flex h-6 items-center rounded-md border px-2 font-mono text-[9px] font-semibold tracking-[0.12em] ${medal.badge}`}
      >
        #{row.rank}
      </span>

      <div className="mt-3">
        <LeaderboardAvatar
          row={row}
          size={isFirst ? 'h-14 w-14 sm:h-20 sm:w-20' : 'h-12 w-12 sm:h-16 sm:w-16'}
          ring={`ring-2 ${medal.ring}`}
          glow={medal.glow}
        />
      </div>

      <p
        title={name}
        className="mt-3 line-clamp-2 min-h-[2.4rem] max-w-full text-[11px] font-semibold leading-tight text-white sm:text-sm"
      >
        {name}
      </p>

      {isCurrent ? (
        <span className="mt-1.5 rounded-full bg-sky-400/15 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.12em] text-sky-300">
          {t('leaderboard.you')}
        </span>
      ) : null}

      <span className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-sky-300 sm:text-sm">
        <BoltIcon className="h-3 w-3" />
        {formatNumber(row.xp)}
      </span>

      <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.06em] text-white/40 sm:text-[8px]">
        {t('leaderboard.testsValue', { count: formatNumber(row.tests) })} ·{' '}
        {accuracyText(row)}
      </p>
    </article>
  )
}

function Podium({ rows, currentId, t, formatNumber }) {
  if (rows.length === 0) return null

  const ordered =
    rows.length >= 3
      ? [rows[1], rows[0], rows[2]]
      : rows.length === 2
        ? [rows[1], rows[0]]
        : [rows[0]]

  const gridClass =
    rows.length === 1
      ? 'mx-auto max-w-[16rem] grid-cols-1'
      : rows.length === 2
        ? 'mx-auto max-w-xl grid-cols-2'
        : 'grid-cols-3'

  return (
    <div className={`leaderboard-podium-3d grid items-end gap-2 sm:gap-4 ${gridClass}`}>
      {ordered.map((row) => (
        <PodiumCard
          key={row.id}
          row={row}
          isCurrent={row.id === currentId}
          t={t}
          formatNumber={formatNumber}
        />
      ))}
    </div>
  )
}

function LeaderboardRow({ row, isCurrent, t, formatNumber }) {
  const name = row.name || t('leaderboard.anonymous')
  const label =
    row.accuracy === null || row.accuracy === undefined
      ? t('leaderboard.podiumLabel', {
          rank: row.rank,
          name,
          xp: formatNumber(row.xp),
        })
      : t('leaderboard.rowLabel', {
          rank: row.rank,
          name,
          xp: formatNumber(row.xp),
          accuracy: row.accuracy,
        })

  return (
    <li
      aria-label={label}
      aria-current={isCurrent ? 'true' : undefined}
      className={[
        'group grid grid-cols-[2rem_2.25rem_minmax(0,1fr)_auto] items-center gap-2.5 rounded-xl border px-2.5 py-2.5 transition-colors sm:grid-cols-[3rem_2.5rem_minmax(0,1fr)_6.5rem_5rem_5rem] sm:gap-4 sm:px-4',
        isCurrent
          ? 'border-sky-400/50 bg-sky-400/[0.08] shadow-[0_0_40px_-22px_rgba(56,189,248,0.8)]'
          : 'border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05]',
      ].join(' ')}
    >
      <span className="font-mono text-[11px] font-semibold tabular-nums text-white/45">
        {String(row.rank).padStart(2, '0')}
      </span>

      <LeaderboardAvatar row={row} size="h-8 w-8 sm:h-9 sm:w-9" />

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p title={name} className="truncate text-[12px] font-semibold text-white sm:text-sm">
            {name}
          </p>
          {isCurrent ? (
            <span className="shrink-0 rounded-full bg-sky-400/15 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-sky-300">
              {t('leaderboard.you')}
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.06em] text-white/35 sm:hidden">
          {t('leaderboard.testsValue', { count: formatNumber(row.tests) })} ·{' '}
          {accuracyText(row)}
        </p>
      </div>

      <span className="flex items-center justify-end gap-1 font-mono text-[11px] font-semibold text-sky-300 sm:justify-start sm:text-xs">
        <BoltIcon className="h-3 w-3" />
        {formatNumber(row.xp)}
      </span>

      <span className="hidden font-mono text-[11px] tabular-nums text-white/55 sm:block">
        {formatNumber(row.tests)}
      </span>

      <span className="hidden font-mono text-[11px] tabular-nums text-white/55 sm:block">
        {accuracyText(row)}
      </span>
    </li>
  )
}

function PodiumSkeleton() {
  return (
    <div className="leaderboard-podium-3d grid grid-cols-3 items-end gap-2 sm:gap-4" aria-hidden="true">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className={`leaderboard-card animate-pulse rounded-2xl border border-white/10 px-2 py-4 sm:px-4 sm:py-6 ${
            item === 1 ? 'sm:-translate-y-3 sm:py-8' : ''
          }`}
        >
          <div className="mx-auto h-6 w-10 rounded-md bg-white/10" />
          <div className="mx-auto mt-4 h-12 w-12 rounded-xl bg-white/10 sm:h-16 sm:w-16" />
          <div className="mx-auto mt-3 h-3 w-20 rounded bg-white/10" />
          <div className="mx-auto mt-2 h-3 w-12 rounded bg-white/10" />
        </div>
      ))}
    </div>
  )
}

function ListSkeleton() {
  return (
    <div className="mt-3 space-y-2" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-[2rem_2.25rem_minmax(0,1fr)_auto] items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2.5 py-2.5 sm:grid-cols-[3rem_2.5rem_minmax(0,1fr)_6.5rem_5rem_5rem] sm:gap-4 sm:px-4"
        >
          <span className="h-3 w-5 animate-pulse rounded bg-white/10" />
          <span className="h-8 w-8 animate-pulse rounded-xl bg-white/10 sm:h-9 sm:w-9" />
          <span className="h-3 w-32 animate-pulse rounded bg-white/10" />
          <span className="h-3 w-12 animate-pulse rounded bg-white/10" />
          <span className="hidden h-3 w-10 animate-pulse rounded bg-white/10 sm:block" />
          <span className="hidden h-3 w-10 animate-pulse rounded bg-white/10 sm:block" />
        </div>
      ))}
    </div>
  )
}

function StatusPanel({ icon, title, description, action }) {
  return (
    <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-12 text-center sm:px-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-300">
        {icon}
      </span>
      <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-white/45">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}

function Hint({ children, action }) {
  return (
    <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm leading-6 text-white/60">{children}</p>
      {action}
    </div>
  )
}

export default function Reyting() {
  const { t, language } = useLanguage()
  const authReady = useAuthReady()
  const { status, rows, current, totalRanked, reload, isGuest } = useLeaderboard()

  const numberFormatter = useMemo(
    () => new Intl.NumberFormat(NUMBER_LOCALES[language] || 'en-US'),
    [language]
  )

  const formatNumber = (value) =>
    numberFormatter.format(Math.max(0, Math.round(Number(value) || 0)))

  const isLoading = status === 'loading'
  const isReady = status === 'ready'
  const currentRank = current?.rank ? `#${current.rank}` : '—'
  const topXp = rows.length > 0 ? formatNumber(rows[0].xp) : '—'
  const podiumRows = rows.slice(0, 3)
  const listRows = rows.slice(3)
  const showList = isReady && listRows.length > 0
  const showGuestHint = isReady && authReady && isGuest && rows.length > 0
  const showUnrankedHint = isReady && authReady && !isGuest && !current && rows.length > 0

  const openAuth = () => {
    if (typeof window === 'undefined') return
    window.dispatchEvent(new Event('kredorium:open-auth'))
  }

  return (
    <div className="relative z-10 w-full pb-16">
      <p role="status" className="sr-only">
        {isLoading ? t('leaderboard.loading') : ''}
      </p>

      <section
        aria-busy={isLoading || undefined}
        className="leaderboard-stage relative overflow-hidden rounded-[1.75rem] border border-white/10 px-4 py-8 text-white shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] sm:rounded-[2rem] sm:px-8 sm:py-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative z-10">
          <Reveal
            as="header"
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/55 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                {t('leaderboard.badge')}
              </span>

              <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                {t('leaderboard.title')}{' '}
                <span className="text-sky-300">{t('leaderboard.titleAccent')}</span>
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-white/55 sm:text-[15px]">
                {t('leaderboard.description')}
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 sm:max-w-md sm:gap-3 lg:w-auto">
              <StatCard
                label={t('leaderboard.playersLabel')}
                value={isReady ? formatNumber(totalRanked) : '—'}
              />
              <StatCard
                label={t('leaderboard.topXp')}
                value={isReady ? topXp : '—'}
                accent
              />
              <StatCard
                label={t('leaderboard.yourRank')}
                value={isReady ? currentRank : '—'}
              />
            </div>
          </Reveal>

          {isLoading ? (
            <>
              <div className="mt-10">
                <PodiumSkeleton />
              </div>
              <div className="mt-8">
                <ListSkeleton />
              </div>
            </>
          ) : null}

          {status === 'unconfigured' ? (
            <StatusPanel
              icon={<WifiOffIcon />}
              title={t('leaderboard.offlineTitle')}
              description={t('leaderboard.offlineDesc')}
              action={
                <Link to="/zakovat" className={primaryActionClass}>
                  {t('leaderboard.arena')}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              }
            />
          ) : null}

          {status === 'offline' || status === 'error' ? (
            <StatusPanel
              icon={
                status === 'offline' ? <WifiOffIcon /> : <AlertIcon />
              }
              title={t('leaderboard.errorTitle')}
              description={t('leaderboard.errorDesc')}
              action={
                <button type="button" onClick={reload} className={secondaryActionClass}>
                  {t('leaderboard.retry')}
                </button>
              }
            />
          ) : null}

          {isReady && rows.length === 0 ? (
            <StatusPanel
              icon={<TrophyIcon />}
              title={t('leaderboard.emptyTitle')}
              description={t('leaderboard.emptyDesc')}
              action={
                <Link to="/zakovat" className={primaryActionClass}>
                  {t('leaderboard.arena')}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              }
            />
          ) : null}

          {isReady && rows.length > 0 ? (
            <>
              <section className="mt-10" aria-labelledby="leaderboard-podium-title">
                <div className="mb-4 flex items-end justify-between gap-3">
                  <div>
                    <h2
                      id="leaderboard-podium-title"
                      className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
                    >
                      {t('leaderboard.podium')}
                    </h2>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35 sm:text-[9px]">
                      {t('leaderboard.listDesc')}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-sky-300/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {t('leaderboard.live')}
                  </span>
                </div>

                <Podium
                  rows={podiumRows}
                  currentId={current?.id}
                  t={t}
                  formatNumber={formatNumber}
                />
              </section>

              {showList ? (
                <section className="mt-8" aria-labelledby="leaderboard-list-title">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h2
                        id="leaderboard-list-title"
                        className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
                      >
                        {t('leaderboard.listTitle')}
                      </h2>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35 sm:text-[9px]">
                        {t('leaderboard.participants', {
                          count: formatNumber(totalRanked),
                        })}
                      </p>
                    </div>
                    <span className="hidden font-mono text-[8px] uppercase tracking-[0.14em] text-white/35 sm:block">
                      {t('leaderboard.listDesc')}
                    </span>
                  </div>

                  <div className="mt-4 hidden grid-cols-[3rem_2.5rem_minmax(0,1fr)_6.5rem_5rem_5rem] gap-4 px-4 font-mono text-[8px] uppercase tracking-[0.16em] text-white/30 sm:grid">
                    <span>{t('leaderboard.rank')}</span>
                    <span aria-hidden="true" />
                    <span>{t('leaderboard.player')}</span>
                    <span>{t('leaderboard.xp')}</span>
                    <span>{t('leaderboard.tests')}</span>
                    <span>{t('leaderboard.accuracy')}</span>
                  </div>

                  <ol
                    className="mt-2 space-y-2"
                    aria-label={t('leaderboard.tableLabel')}
                  >
                    {listRows.map((row) => (
                      <LeaderboardRow
                        key={row.id}
                        row={row}
                        isCurrent={row.id === current?.id}
                        t={t}
                        formatNumber={formatNumber}
                      />
                    ))}
                  </ol>
                </section>
              ) : null}

              {current && !current.inTop ? (
                <section
                  className="mt-6 rounded-2xl border border-sky-400/25 bg-sky-400/[0.05] p-3 sm:p-4"
                  aria-labelledby="leaderboard-your-rank-title"
                >
                  <div className="mb-2 flex items-center justify-between gap-2 px-1">
                    <h2
                      id="leaderboard-your-rank-title"
                      className="font-mono text-[8px] uppercase tracking-[0.16em] text-sky-300"
                    >
                      {t('leaderboard.yourRank')}
                    </h2>
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">
                      {t('leaderboard.outsideTop50')}
                    </span>
                  </div>
                  <ol className="space-y-2">
                    <LeaderboardRow
                      row={current}
                      isCurrent
                      t={t}
                      formatNumber={formatNumber}
                    />
                  </ol>
                </section>
              ) : null}

              {showGuestHint ? (
                <Hint
                  action={
                    <button
                      type="button"
                      onClick={openAuth}
                      className={primaryActionClass}
                    >
                      {t('leaderboard.login')}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  }
                >
                  {t('leaderboard.guestHint')}
                </Hint>
              ) : null}

              {showUnrankedHint ? (
                <Hint
                  action={
                    <Link to="/zakovat" className={secondaryActionClass}>
                      {t('leaderboard.arena')}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  }
                >
                  <span className="font-semibold text-white">
                    {t('leaderboard.notRanked')}.
                  </span>{' '}
                  {t('leaderboard.notRankedDesc')}
                </Hint>
              ) : null}
            </>
          ) : null}
        </div>
      </section>
    </div>
  )
}
