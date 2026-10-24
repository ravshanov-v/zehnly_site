import { NavLink } from 'react-router-dom'
import ProductPreview from '../../Components/ProductPreview.jsx'
import {
  brandGradient,
  brandTextGradient,
  cardClass,
  kickerClass,
  primaryButton,
  secondaryButton,
} from '../../styles/ui.js'

const features = [
  {
    title: 'Zakovat testlari',
    description:
      "Savol-javob rejimida bilimingizni sinang, ball to'plang va natijalaringizni kuzatib boring.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "O'quv maskanlari",
    description: "O'quv maskanlarini qidirib toping, taqqoslang va sevimlilarga qo'shing.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Statistika',
    description: "Natijalaringizni fanlar kesimida tahlil qiling va o'sishingizni kuzatib boring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
      </svg>
    ),
  },
  {
    title: 'Shaxsiy profil',
    description: "Ma'lumotlaringiz, tarix va sevimlilar — barchasi bir joyda va tartibda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function BoshSahifa() {
  return (
    <div className="flex flex-col gap-16 py-6 sm:py-10">
      <section className="relative isolate flex flex-col items-center gap-6 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 -z-10 h-56 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-400/10 blur-[140px] dark:from-indigo-500/20 dark:to-cyan-400/20"
        />
        <span
          className={`${kickerClass} zehnly-fade-up relative z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 backdrop-blur dark:border-line dark:bg-white/[0.03]`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          Zamonaviy ta'lim platformasi
        </span>

        <h1
          className="zehnly-fade-up relative z-10 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          style={{ animationDelay: '60ms' }}
        >
          Bilim va <span className={brandTextGradient}>zakovat</span> — bir platformada
        </h1>

        <p
          className="zehnly-fade-up relative z-10 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300"
          style={{ animationDelay: '120ms' }}
        >
          O'quv maskanlarini kashf eting, bilimingizni sinang va natijalaringizni bir joyda
          kuzatib boring.
        </p>

        <div
          className="zehnly-fade-up relative z-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '180ms' }}
        >
          <NavLink to="/oquv-maskanlari" className={primaryButton}>
            Boshlash
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
            </svg>
          </NavLink>
          <NavLink to="/zakovat" className={secondaryButton}>
            Zakovat testlari
          </NavLink>
        </div>

        <div className="zehnly-fade-up z-10 w-full" style={{ animationDelay: '240ms' }}>
          <ProductPreview />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className={kickerClass}>Imkoniyatlar</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Nimalar mavjud?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${cardClass} p-5 duration-200 hover:border-black/10 dark:hover:border-white/20`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-8 text-center backdrop-blur-xl sm:p-12 dark:border-white/10 dark:bg-slate-900/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[90px] dark:bg-indigo-500/20"
        />
        <div className="relative flex flex-col items-center gap-4">
          <span className={`${brandGradient} flex h-10 w-10 items-center justify-center rounded-xl font-mono text-base font-bold text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/20`}>
            Z
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Bugun boshlang
          </h2>
          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base dark:text-slate-400">
            Bilim sari birinchi qadamni tashlang — bilimingizni sinang va natijani kuzatib
            boring.
          </p>
          <NavLink to="/zakovat" className={`${primaryButton} mt-1`}>
            Zakovatni sinab ko'rish
          </NavLink>
        </div>
      </section>
    </div>
  )
}
