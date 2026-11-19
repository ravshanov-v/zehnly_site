import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navRoutes } from '../../routes.jsx'
import { useTheme } from '../../context/useTheme.js'
import { useAtmosphere } from '../../context/useAtmosphere.js'
import { useSeasonalScene } from '../../context/useSeasonalScene.js'
import { useSession } from '../../hooks/useSession.js'
import { useAuthReady } from '../../hooks/useAuthReady.js'
import { useQuizHistory } from '../../hooks/useQuizHistory.js'
import { useFavorites } from '../../hooks/useFavorites.js'
import { logoutUser } from '../../utils/authStore.js'
import { useToast } from '../../context/useToast.js'
import { formatRecordDate, mergeGuestHistory } from '../../utils/quizHistory.js'
import { mergeGuestFavorites } from '../../utils/favorites.js'
import { mergeGuestProgress } from '../../utils/quizProgress.js'
import { studyCenters } from '../../data/studyCenters.js'
import AuthModal from '../AuthModal/AuthModal.jsx'
import Logo from '../Logo.jsx'
import ProfilLayout from '../../Pages/Profil/ProfilLayout.jsx'
import Malumotlarim from '../../Pages/Profil/Malumotlarim.jsx'
import Sevimlilarim from '../../Pages/Profil/Sevimlilarim.jsx'
import Statistika from '../../Pages/Profil/Statistika.jsx'
import Tarix from '../../Pages/Profil/Tarix.jsx'
import Xatlar from '../../Pages/Profil/Xatlar.jsx'
import Sozlamalar from '../../Pages/Profil/Sozlamalar.jsx'
import { ArrowUpRight, Spark } from '../Marks.jsx'

const navLinkBase =
  'flex items-center rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-150'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const {
    enabled: atmosphereEnabled,
    toggleEnabled: toggleAtmosphere,
    effectLabel: atmosphereLabel,
  } = useAtmosphere()
  const { active: seasonalSceneActive, physicalMode } = useSeasonalScene()
  const { showToast } = useToast()
  const [authOpen, setAuthOpen] = useState(false)
  const [profilOpen, setProfilOpen] = useState(false)
  const [profilTab, setProfilTab] = useState('malumotlarim')
  const [menuOpen, setMenuOpen] = useState(false)
  const session = useSession()
  const authReady = useAuthReady()
  const { records, stats } = useQuizHistory()
  const favoriteIds = useFavorites()
  const isDark = theme === 'dark'

  const displayName = (session?.name || session?.email?.split('@')[0] || '').trim()
  const initial = displayName.charAt(0).toUpperCase()
  const xpLabel = new Intl.NumberFormat('uz-UZ').format(Math.max(stats.xp || 0, 0))

  const historyLogs = records.map((record) => ({
    action: `${record.categoryTitle} · ${record.correctCount}/${record.totalAnswered} to'g'ri · ${record.xp} XP`,
    date: formatRecordDate(record.date),
  }))
  const favoriteItems = studyCenters.filter((center) => favoriteIds.includes(center.id))

  useEffect(() => {
    if (!session?.email) return
    mergeGuestHistory(session.email)
    mergeGuestFavorites(session.email)
    mergeGuestProgress()
  }, [session?.email, session?.id])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleLogout = () => {
    logoutUser()
    setProfilOpen(false)
    setMenuOpen(false)
    showToast('Tizimdan chiqdingiz. Yana kutamiz!', { variant: 'info' })
  }

  return (
    <>
      <header
        className={[
          'sticky top-0 z-50 border-b border-hairline bg-paper/70 backdrop-blur-2xl',
          seasonalSceneActive && physicalMode === 'snow' ? 'seasonal-navbar-frost' : '',
        ].join(' ')}
      >
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Zehnly bosh sahifa"
            className="shrink-0 transition-opacity hover:opacity-85"
          >
            <Logo size="md" />
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.path === '/'}
                className={({ isActive }) =>
                  [
                    navLinkBase,
                    isActive ? 'bg-ink/[0.05] text-ink' : 'text-muted hover:text-ink',
                  ].join(' ')
                }
              >
                {route.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              role="switch"
              aria-checked={isDark}
              aria-label={isDark ? 'Yorugʻ rejimga oʻtish' : 'Tund rejimga oʻtish'}
              title={isDark ? 'Yorugʻ rejim' : 'Tund rejim'}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-transparent text-ink transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] active:scale-95"
            >
              {isDark ? (
                <svg
                  className="h-4 w-4 text-ember"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 text-ember"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={toggleAtmosphere}
              role="switch"
              aria-checked={atmosphereEnabled}
              aria-label={
                atmosphereEnabled
                  ? 'Mavsumiy effektni o‘chirish'
                  : 'Mavsumiy effektni yoqish'
              }
              title={
                atmosphereEnabled
                  ? `${atmosphereLabel} · o‘chirish`
                  : 'Mavsumiy effektni yoqish'
              }
              className={[
                'flex h-9 w-9 items-center justify-center rounded-lg border transition-colors active:scale-95',
                atmosphereEnabled
                  ? 'border-ember/30 bg-ember/[0.06] text-ember hover:bg-ember/10'
                  : 'border-hairline bg-transparent text-muted hover:border-hairline-strong hover:bg-ink/[0.04] hover:text-ink',
              ].join(' ')}
            >
              <Spark className="h-4 w-4" />
            </button>

            {!authReady ? (
              <span
                aria-label="Sessiya tekshirilmoqda"
                className="h-9 w-20 animate-pulse rounded-lg border border-hairline bg-ink/[0.04] sm:w-24"
              />
            ) : session ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setProfilOpen(true)}
                  title={session.name ?? session.email}
                  aria-label="Profil bo'limini ochish"
                  className="group flex h-9 items-center gap-2 rounded-lg border border-hairline bg-paper/60 py-1 pl-1 pr-1.5 transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] lg:pr-3"
                >
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-md gradient-brand font-display text-[12px] font-semibold text-white">
                    {initial}
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-positive" />
                  </span>
                  <span className="hidden min-w-0 flex-col items-start leading-tight lg:flex">
                    <span className="max-w-[9rem] truncate text-[12px] font-semibold text-ink">
                      {displayName}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-ember">
                      {xpLabel} XP
                    </span>
                  </span>
                </button>

                <span
                  title={`${xpLabel} XP`}
                  className="hidden h-9 items-center gap-1 rounded-lg border border-ember/20 bg-ember/[0.07] px-2 font-mono text-[10px] font-semibold tabular-nums text-ember sm:flex lg:hidden"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                    <path d="M13 2 4.5 13.5H11l-1 8.5 9.5-12H13l0-8Z" />
                  </svg>
                  {xpLabel}
                </span>

                <button
                  type="button"
                  onClick={handleLogout}
                  title="Tizimdan chiqish"
                  aria-label="Tizimdan chiqish"
                  className="hidden h-9 w-9 items-center justify-center rounded-lg border border-hairline text-muted transition-colors hover:border-negative/30 hover:bg-negative/10 hover:text-negative sm:flex"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                    <path d="M10 12h10m0 0-3-3m3 3-3 3" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setAuthOpen(true)}
                className="winter-glint spring-glint summer-glint inline-flex h-9 items-center gap-1.5 rounded-lg bg-ink px-3 text-[12px] font-semibold text-paper transition-colors hover:bg-ember hover:text-ember-ink sm:gap-2 sm:px-4"
              >
                <span>Kirish</span>
                <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline text-ink transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] md:hidden"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="zehnly-fade-in border-b border-hairline bg-paper/95 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto max-w-[1240px] px-5 py-4 sm:px-8">
              <div className="flex flex-col">
                {navRoutes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    end={route.path === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        'flex items-center justify-between border-b border-hairline py-3.5 text-sm font-medium transition-colors last:border-b-0',
                        isActive ? 'text-ember' : 'text-ink hover:text-ember',
                      ].join(' ')
                    }
                  >
                    {route.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </NavLink>
                ))}
              </div>

              {session ? (
                <div className="mt-4 rounded-xl border border-hairline bg-paper p-3">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-brand font-display text-base font-semibold text-white">
                      {initial}
                      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-paper bg-positive" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink">{displayName}</p>
                      <p className="truncate text-[11px] text-muted">{session.email}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 rounded-md border border-ember/20 bg-ember/[0.07] px-2 py-1 font-mono text-[10px] font-semibold text-ember">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                        <path d="M13 2 4.5 13.5H11l-1 8.5 9.5-12H13l0-8Z" />
                      </svg>
                      {xpLabel} XP
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false)
                        setProfilOpen(true)
                      }}
                      className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-ink text-xs font-semibold text-paper transition-colors hover:bg-ember hover:text-ember-ink"
                    >
                      Profilim
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex h-10 items-center justify-center gap-1.5 rounded-lg border border-negative/25 bg-negative/[0.05] text-xs font-semibold text-negative transition-colors hover:bg-negative/10"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                        <path d="M10 12h10m0 0-3-3m3 3-3 3" />
                      </svg>
                      Chiqish
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setAuthOpen(true)
                  }}
                  className="winter-glint spring-glint summer-glint summer-sun mt-4 flex h-11 w-full items-center justify-between rounded-xl bg-ember px-4 text-sm font-semibold text-ember-ink"
                >
                  Hisobingizga kiring
                  <ArrowUpRight />
                </button>
              )}
            </div>
          </nav>
        )}
      </header>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      <ProfilLayout
        isOpen={profilOpen}
        onClose={() => setProfilOpen(false)}
        activeTab={profilTab}
        setActiveTab={setProfilTab}
        user={session}
        onLogout={handleLogout}
      >
        {profilTab === 'malumotlarim' && <Malumotlarim user={session} />}
        {profilTab === 'statistika' && <Statistika statsData={stats} />}
        {profilTab === 'sevimlilar' && <Sevimlilarim items={favoriteItems} />}
        {profilTab === 'xatlar' && <Xatlar records={records} />}
        {profilTab === 'tarix' && <Tarix logs={historyLogs} />}
        {profilTab === 'sozlamalar' && <Sozlamalar />}
      </ProfilLayout>
    </>
  )
}
