import { NavLink } from 'react-router-dom'
import { navRoutes } from '../../routes.jsx'
import { useLanguage } from '../../context/useLanguage.js'
import { getNavLabel } from '../../utils/navLabels.js'
import Logo from '../Logo.jsx'
import { ArrowUpRight } from '../Marks.jsx'

const socialLinks = [
  {
    id: 'telegram',
    label: 'Telegram',
    handle: 'Komron Ravshanov',
    href: 'https://t.me/komron_ravshanov',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
        <path d="M21.94 4.3 18.9 19.1c-.23 1.01-.83 1.26-1.68.78l-4.64-3.42-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.73 8.62-7.79c.37-.33-.08-.52-.58-.19L7.13 12.94 2.6 11.52c-.99-.31-1-.99.2-1.46L20.5 3.1c.82-.3 1.53.2 1.44 1.2Z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: 'Komron Ravshanov',
    href: 'https://instagram.com/ravshanov_web7',
    icon: (
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
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-hairline bg-sunken text-ink">
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <NavLink to="/" aria-label={t('navbar.brandHome')} className="w-fit">
              <Logo size="lg" />
            </NavLink>
            <p className="max-w-xs text-sm leading-6 text-muted">
              {t('footer.description')}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              {t('footer.country')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              {t('footer.sections')}
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {navRoutes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    end={route.path === '/'}
                    className="link-underline text-sm font-medium text-ink-soft transition-colors hover:text-ember"
                  >
                    {getNavLabel(route, t)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              {t('footer.contact')}
            </h3>
            <p className="text-sm leading-6 text-muted">{t('footer.contactPrompt')}</p>
            <ul className="flex flex-col items-start gap-3">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline group flex w-fit items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ember"
                  >
                    <span className="text-muted transition-colors group-hover:text-ember">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-colors group-hover:text-ember group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative select-none border-t border-hairline pt-8">
          <span
            aria-hidden="true"
            className="block font-display text-[clamp(4.4rem,15vw,12rem)] font-semibold leading-[0.78] tracking-[-0.06em] text-ink/[0.06]"
          >
            kredorium.
          </span>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-hairline py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            {t('footer.rights', { year })}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            {t('footer.backToTop')}
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-ember-ink">
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
