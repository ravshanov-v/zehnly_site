import { NavLink } from 'react-router-dom'
import routes from '../../routes.jsx'
import Logo from '../Logo.jsx'
import { ArrowUpRight } from '../Marks.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-hairline bg-sunken text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_66%)] blur-3xl"
      />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <NavLink to="/" aria-label="Zehnly bosh sahifa" className="w-fit">
              <Logo size="lg" />
            </NavLink>
            <p className="max-w-xs text-sm leading-6 text-muted">
              Bilim, zakovat va zamonaviy ta&apos;limni bitta tezkor, o&apos;lchanadigan
              tizimga jamlagan platforma.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Toshkent, O&apos;zbekiston
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              Bo&apos;limlar
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    end={route.path === '/'}
                    className="link-underline text-sm font-medium text-ink-soft transition-colors hover:text-ember"
                  >
                    {route.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              Aloqa
            </h3>
            <p className="text-sm leading-6 text-muted">Savollaringiz bo&apos;lsa yozing:</p>
            <a
              href="mailto:support@zehnly.uz"
              className="link-underline flex w-fit items-center gap-1.5 font-mono text-sm font-medium text-ink transition-colors hover:text-ember"
            >
              support@zehnly.uz
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="relative select-none border-t border-hairline pt-8">
          <span
            aria-hidden="true"
            className="block bg-gradient-to-r from-ember via-ink to-cobalt bg-clip-text font-display text-[clamp(4.4rem,15vw,12rem)] font-semibold leading-[0.78] tracking-[-0.06em] text-transparent opacity-25"
          >
            zehnly.
          </span>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-hairline py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            © {year} Zehnly — Barcha huquqlar himoyalangan
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            Yuqoriga
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-ember group-hover:bg-ember group-hover:text-ember-ink">
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
