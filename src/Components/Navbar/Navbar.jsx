import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navRoutes } from '../../routes.jsx'
import { useTheme } from '../../context/useTheme.js'
import { useLanguage } from '../../context/useLanguage.js'
import { useSession } from '../../hooks/useSession.js'
import { useAuthReady } from '../../hooks/useAuthReady.js'
import { useQuizHistory } from '../../hooks/useQuizHistory.js'
import { useProfile } from '../../hooks/useProfile.js'
import { useFavorites } from '../../hooks/useFavorites.js'
import { logoutUser } from '../../utils/authStore.js'
import { syncGuestStatsToProfile } from '../../utils/profileStore.js'
import { useToast } from '../../context/useToast.js'
import {
  formatRecordDate,
  mergeGuestHistory,
  RELATIVE_DATE_LOCALES,
} from '../../utils/quizHistory.js'
import { mergeGuestFavorites } from '../../utils/favorites.js'
import { mergeGuestProgress } from '../../utils/quizProgress.js'
import { getNavLabel } from '../../utils/navLabels.js'
import { studyCenters } from '../../data/studyCenters.js'
import AuthModal from '../AuthModal/AuthModal.jsx'
import UserAvatar from '../UserAvatar.jsx'
import Logo from '../Logo.jsx'
import ProfilLayout from '../../Pages/Profil/ProfilLayout.jsx'
import Malumotlarim from '../../Pages/Profil/Malumotlarim.jsx'
import Sevimlilarim from '../../Pages/Profil/Sevimlilarim.jsx'
import Statistika from '../../Pages/Profil/Statistika.jsx'
import Tarix from '../../Pages/Profil/Tarix.jsx'
import Xatlar from '../../Pages/Profil/Xatlar.jsx'
import Sozlamalar from '../../Pages/Profil/Sozlamalar.jsx'
import { ArrowUpRight } from '../Marks.jsx'

const navLinkBase =
  'flex items-center rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-150'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t, languages } = useLanguage()
  const { showToast } = useToast()
  const [authOpen, setAuthOpen] = useState(false)
  const [profilOpen, setProfilOpen] = useState(false)
  const [profilTab, setProfilTab] = useState('malumotlarim')
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)
  const session = useSession()
  const authReady = useAuthReady()
  const { records, stats } = useQuizHistory()
  const { profile } = useProfile()
  const favoriteIds = useFavorites()
  const isDark = theme === 'dark'
  const activeLanguage = languages.find((item) => item.code === language) ?? languages[0]

  const displayName = (session?.name || session?.email?.split('@')[0] || '').trim()
  const avatarUrl = session?.avatarUrl || ''
  const liveXp = session ? profile?.xp ?? stats.xp : stats.xp
  const xpLabel = new Intl.NumberFormat('uz-UZ').format(Math.max(liveXp || 0, 0))

  const dateLocale = RELATIVE_DATE_LOCALES[language] ?? RELATIVE_DATE_LOCALES.uz
  const historyLogs = records.map((record) => ({
    action: t('profile.history.action', {
      category: record.categoryTitle,
      correct: record.correctCount,
      total: record.totalAnswered,
      xp: record.xp,
    }),
    date: formatRecordDate(record.date, dateLocale),
  }))
  const favoriteItems = studyCenters.filter((center) => favoriteIds.includes(center.id))

  useEffect(() => {
    if (!session?.email) return
    syncGuestStatsToProfile()
    mergeGuestHistory(session.email)
    mergeGuestFavorites(session.email)
    mergeGuestProgress()
  }, [session?.email, session?.id])

  useEffect(() => {
    const openAuth = () => setAuthOpen(true)

    window.addEventListener('kredorium:open-auth', openAuth)
    return () => window.removeEventListener('kredorium:open-auth', openAuth)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!langOpen) return

    const onPointerDown = (event) => {
      if (!langRef.current?.contains(event.target)) setLangOpen(false)
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLangOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [langOpen])

  const handleLogout = () => {
    logoutUser()
    setProfilOpen(false)
    setMenuOpen(false)
    showToast(t('navbar.loggedOut'), { variant: 'info' })
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-paper">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label={t('navbar.brandHome')}
            className="shrink-0 transition-opacity hover:opacity-85"
          >
            <Logo size="md" />
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
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
                {getNavLabel(route, t)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              role="switch"
              aria-checked={isDark}
              aria-label={isDark ? t('navbar.themeToLight') : t('navbar.themeToDark')}
              title={isDark ? t('navbar.themeLight') : t('navbar.themeDark')}
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

            <div ref={langRef} className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setLangOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={t('navbar.chooseLanguage')}
                title={t('navbar.language')}
                className="flex h-9 items-center gap-1.5 rounded-lg border border-hairline bg-transparent px-2.5 text-ink transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-ember"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
                <span className="font-mono text-[10px] font-semibold tracking-[0.08em]">
                  {activeLanguage.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`h-3 w-3 text-muted transition-transform duration-150 ${langOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {langOpen && (
                <div
                  role="listbox"
                  aria-label={t('navbar.chooseLanguage')}
                  className="kredorium-fade-in absolute right-0 z-50 mt-1.5 w-28 overflow-hidden rounded-lg border border-hairline bg-raised p-1 shadow-xl"
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      role="option"
                      aria-selected={item.code === language}
                      onClick={() => {
                        setLanguage(item.code)
                        setLangOpen(false)
                      }}
                      className={[
                        'flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left font-mono text-[10px] font-semibold tracking-[0.08em] transition-colors',
                        item.code === language
                          ? 'bg-ember/10 text-ember'
                          : 'text-muted hover:bg-ink/[0.04] hover:text-ink',
                      ].join(' ')}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-normal tracking-normal">{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {!authReady ? (
              <span
                aria-label={t('navbar.sessionChecking')}
                className="h-9 w-20 animate-pulse rounded-lg border border-hairline bg-ink/[0.04] sm:w-24"
              />
            ) : session ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setProfilOpen(true)}
                  title={session.name ?? session.email}
                  aria-label={t('navbar.openProfile')}
                  className="group flex h-9 items-center gap-2 rounded-lg border border-hairline bg-paper/60 py-1 pl-1 pr-1.5 transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] lg:pr-3"
                >
                  <UserAvatar src={avatarUrl} name={displayName} />
                  <span className="hidden min-w-0 flex-col items-start leading-tight xl:flex">
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
                  className="hidden h-9 items-center gap-1 rounded-lg border border-ember/20 bg-ember/[0.07] px-2 font-mono text-[10px] font-semibold tabular-nums text-ember sm:flex xl:hidden"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                    <path d="M13 2 4.5 13.5H11l-1 8.5 9.5-12H13l0-8Z" />
                  </svg>
                  {xpLabel}
                </span>

                <button
                  type="button"
                  onClick={handleLogout}
                  title={t('navbar.logout')}
                  aria-label={t('navbar.logout')}
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
              <div className="flex items-center gap-2">
                {stats.xp > 0 && (
                  <span
                    title={`${xpLabel} XP · ${t('navbar.guest')}`}
                    className="hidden h-9 items-center gap-1 rounded-lg border border-ember/20 bg-ember/[0.07] px-2 font-mono text-[10px] font-semibold tabular-nums text-ember sm:flex"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                      <path d="M13 2 4.5 13.5H11l-1 8.5 9.5-12H13l0-8Z" />
                    </svg>
                    {xpLabel}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setAuthOpen(true)}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-ink px-3 text-[12px] font-semibold text-paper transition-colors hover:bg-ember hover:text-ember-ink sm:gap-2 sm:px-4"
                >
                  <span>{t('navbar.login')}</span>
                  <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline text-ink transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] lg:hidden"
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
            className="kredorium-fade-in border-b border-hairline bg-paper lg:hidden"
          >
            <div className="mx-auto max-w-[1240px] px-5 py-4 sm:px-8">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  {t('navbar.language')}
                </span>
                <div
                  role="group"
                  aria-label={t('navbar.chooseLanguage')}
                  className="inline-flex items-center rounded-lg border border-hairline p-0.5"
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setLanguage(item.code)}
                      aria-pressed={item.code === language}
                      className={[
                        'flex h-7 min-w-9 items-center justify-center rounded-md px-2 font-mono text-[10px] font-semibold tracking-[0.08em] transition-colors',
                        item.code === language
                          ? 'bg-ink text-paper'
                          : 'text-muted hover:text-ink',
                      ].join(' ')}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

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
                    {getNavLabel(route, t)}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </NavLink>
                ))}
              </div>

              {session ? (
                <div className="mt-4 rounded-xl border border-hairline bg-paper p-3">
                  <div className="flex items-center gap-3">
                    <UserAvatar
                      src={avatarUrl}
                      name={displayName}
                      size="h-10 w-10"
                      textSize="text-base"
                    />
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
                      {t('navbar.profile')}
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
                      {t('navbar.exit')}
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
                  className="mt-4 flex h-11 w-full items-center justify-between rounded-xl bg-ember px-4 text-sm font-semibold text-ember-ink"
                >
                  {t('navbar.loginPrompt')}
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
