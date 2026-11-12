import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes.jsx'
import { useTheme } from '../../context/useTheme.js'
import { useSession } from '../../hooks/useSession.js'
import { useQuizHistory } from '../../hooks/useQuizHistory.js'
import { useFavorites } from '../../hooks/useFavorites.js'
import { logoutUser } from '../../utils/authStore.js'
import { formatRecordDate, mergeGuestHistory } from '../../utils/quizHistory.js'
import { mergeGuestFavorites } from '../../utils/favorites.js'
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
import { ArrowUpRight } from '../Marks.jsx'

const navLinkBase =
  'flex items-center rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-150'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [authOpen, setAuthOpen] = useState(false)
  const [profilOpen, setProfilOpen] = useState(false)
  const [profilTab, setProfilTab] = useState('malumotlarim')
  const [menuOpen, setMenuOpen] = useState(false)
  const session = useSession()
  const { records, stats } = useQuizHistory()
  const favoriteIds = useFavorites()
  const isDark = theme === 'dark'

  const historyLogs = records.map((record) => ({
    action: `${record.categoryTitle} · ${record.correctCount}/${record.totalAnswered} to'g'ri · ${record.xp} XP`,
    date: formatRecordDate(record.date),
  }))
  const favoriteItems = studyCenters.filter((center) => favoriteIds.includes(center.id))

  useEffect(() => {
    if (!session?.email) return
    mergeGuestHistory(session.email)
    mergeGuestFavorites(session.email)
  }, [session?.email])

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
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-paper/70 backdrop-blur-2xl">
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
            {routes.map((route) => (
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

            {session ? (
              <button
                type="button"
                onClick={() => setProfilOpen(true)}
                title={(session.name ?? session.email).trim()}
                aria-label="Profil bo'limini ochish"
                className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#3556f5] to-[#8b5cf6] font-display text-[13px] font-semibold text-white transition-transform duration-150 hover:scale-105 active:scale-95"
              >
                {(session.name ?? session.email).trim().charAt(0).toUpperCase()}
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-positive" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setAuthOpen(true)}
                className="hidden h-9 items-center gap-2 rounded-lg bg-ink px-4 text-[12px] font-semibold text-paper transition-colors hover:bg-ember hover:text-ember-ink sm:inline-flex"
              >
                Kirish
                <ArrowUpRight className="h-3.5 w-3.5" />
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
                {routes.map((route) => (
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
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setProfilOpen(true)
                  }}
                  className="mt-4 flex h-11 w-full items-center justify-between rounded-xl bg-ink px-4 text-sm font-semibold text-paper"
                >
                  Profilim
                  <ArrowUpRight />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setAuthOpen(true)
                  }}
                  className="mt-4 flex h-11 w-full items-center justify-between rounded-xl bg-ember px-4 text-sm font-semibold text-ember-ink"
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
