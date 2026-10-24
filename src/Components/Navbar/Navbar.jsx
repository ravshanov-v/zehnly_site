import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes.jsx'
import {
  brandGradient,
  iconButton,
  navLinkClass,
  primaryButtonPill,
} from '../../styles/ui.js'
import { useTheme } from '../../context/useTheme.js'
import { useSession } from '../../hooks/useSession.js'
import { logoutUser } from '../../utils/authStore.js'
import AuthModal from '../AuthModal/AuthModal.jsx'
import ZehnlyInteractiveLogo from '../ZehnlyInteractiveLogo.jsx'
import ProfilLayout from '../../Pages/Profil/ProfilLayout.jsx'
import Malumotlarim from '../../Pages/Profil/Malumotlarim.jsx'
import Sevimlilarim from '../../Pages/Profil/Sevimlilarim.jsx'
import Statistika from '../../Pages/Profil/Statistika.jsx'
import Tarix from '../../Pages/Profil/Tarix.jsx'
import Xatlar from '../../Pages/Profil/Xatlar.jsx'
import Sozlamalar from '../../Pages/Profil/Sozlamalar.jsx'

const mobileLinkClass = ({ isActive }) =>
  [
    'relative flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-colors',
    isActive
      ? 'text-indigo-600 after:absolute after:left-0 after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-b after:from-indigo-500 after:to-violet-500 dark:text-indigo-400'
      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
  ].join(' ')

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [authOpen, setAuthOpen] = useState(false)
  const [profilOpen, setProfilOpen] = useState(false)
  const [profilTab, setProfilTab] = useState('malumotlarim')
  const [menuOpen, setMenuOpen] = useState(false)
  const session = useSession()
  const isDark = theme === 'dark'

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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-line dark:bg-canvas/80">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Zehnly bosh sahifa"
            className="flex shrink-0 items-center"
          >
            <ZehnlyInteractiveLogo size="md" />
          </NavLink>

          <nav className="hidden items-center gap-1 sm:flex">
            {routes.map((route) => (
              <NavLink key={route.path} to={route.path} end={route.path === '/'} className={navLinkClass}>
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
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-indigo-50/70 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 active:scale-95 dark:border-white/10 dark:bg-indigo-500/10 dark:shadow-[0_0_14px_-2px_rgb(99_102_241/0.5)] dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/20"
            >
              {isDark ? (
                <svg
                  className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#zehnly-sun-grad)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="zehnly-sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A5B4FC" />
                      <stop offset="100%" stopColor="#C4B5FD" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="url(#zehnly-moon-grad)"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="zehnly-moon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
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
                className={`${brandGradient} flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-bold text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/20 transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 active:scale-95`}
              >
                {(session.name ?? session.email).trim().charAt(0).toUpperCase()}
              </button>
            ) : (
              <button type="button" onClick={() => setAuthOpen(true)} className={primaryButtonPill}>
                Kirish
              </button>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`${iconButton} sm:hidden`}
            >
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="zehnly-fade-in border-t border-slate-200/80 px-4 py-3 sm:hidden dark:border-line"
          >
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  end={route.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {route.label}
                  <svg
                    className="h-4 w-4 text-slate-400 dark:text-slate-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </NavLink>
              ))}
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
        {profilTab === 'statistika' && <Statistika />}
        {profilTab === 'sevimlilar' && <Sevimlilarim />}
        {profilTab === 'xatlar' && <Xatlar />}
        {profilTab === 'tarix' && <Tarix />}
        {profilTab === 'sozlamalar' && <Sozlamalar />}
      </ProfilLayout>
    </>
  )
}
