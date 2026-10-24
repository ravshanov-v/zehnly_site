import { cardDashedClass, kickerClass } from '../../styles/ui.js'

export default function OquvMaskanlari() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <span className={kickerClass}>01 / Katalog</span>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          O'quv maskanlari
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          O'quv maskanlarini qidiring, taqqoslang va sevimlilarga qo'shing
        </p>
      </header>

      <section className={`flex flex-col items-center justify-center gap-4 ${cardDashedClass} px-6 py-20 text-center`}>
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-7 w-7"
          >
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Katalog tayyorlanmoqda
          </h2>
          <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            O'quv maskanlari bazasi tez orada shu yerda paydo bo'ladi.
          </p>
        </div>
      </section>
    </div>
  )
}
