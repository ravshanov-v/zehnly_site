import { NavLink } from 'react-router-dom'
import Reveal from '../../Components/Reveal.jsx'
import { ArrowRight, ArrowUpRight } from '../../Components/Marks.jsx'
import { useLanguage } from '../../context/useLanguage.js'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center py-12 text-center sm:py-16">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-raised px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          {t('notFound.badge')}
        </span>
      </Reveal>

      <Reveal delay={60}>
        <p
          aria-hidden="true"
          className="mt-8 select-none font-display text-[clamp(5rem,18vw,10rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-ink/[0.08]"
        >
          404
        </p>
        <h1 className="mt-2 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
          {t('notFound.title')}
        </h1>
      </Reveal>

      <Reveal delay={120}>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
          {t('notFound.description')}
        </p>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NavLink
            to="/"
            className="group inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            {t('notFound.backHome')}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </NavLink>
          <NavLink
            to="/zakovat"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-hairline-strong px-5 text-sm font-semibold text-ink transition-colors hover:border-ember/50 hover:bg-ink/[0.04] sm:w-auto"
          >
            {t('notFound.openArena')}
            <ArrowUpRight className="h-4 w-4" />
          </NavLink>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-6 max-w-sm font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-muted">
          {t('notFound.help')}
        </p>
      </Reveal>
    </div>
  )
}
