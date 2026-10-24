import { NavLink } from 'react-router-dom'
import routes from '../../routes.jsx'
import { brandGradient, brandTextGradient, kickerClass } from '../../styles/ui.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white dark:border-line dark:bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="flex items-center gap-2.5">
              <span
                className={`${brandGradient} flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold text-white shadow-md shadow-indigo-600/30 ring-1 ring-white/20`}
              >
                Z
              </span>
              <span className={`${brandTextGradient} text-base font-bold tracking-tight`}>
                Zehnly
              </span>
            </NavLink>
            <p className="max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
              Bilim, zakovat va zamonaviy ta'limni bir joyga jamlagan platforma.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={kickerClass}>01 / Bo'limlar</h3>
            <ul className="flex flex-col items-start gap-2.5">
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    end={route.path === '/'}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {route.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={kickerClass}>02 / Aloqa</h3>
            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
              Savollaringiz bo'lsa yozing:
            </p>
            <a
              href="mailto:support@zehnly.uz"
              className="font-mono text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              support@zehnly.uz
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center dark:border-line">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {year} Zehnly. Barcha huquqlar himoyalangan.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-slate-400 dark:text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Barcha tizimlar ishlamoqda
          </p>
        </div>
      </div>
    </footer>
  )
}
