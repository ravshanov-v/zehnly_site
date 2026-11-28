import { ArrowUpRight, CheckMark } from './Marks.jsx'
import { useLanguage } from '../context/useLanguage.js'

const TELEGRAM_URL = 'https://t.me/komron_ravshanov'

const details = [
  'Yo‘nalishlar va kurslar ro‘yxati',
  'Tuman, manzil va aloqa ma’lumotlari',
  'Narxlar hamda o‘qish shakli',
]

export default function StudyCentersPartnerCard({ compact = false, className = '' }) {
  const { t } = useLanguage()

  if (compact) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-ember/20 bg-ember/[0.05] p-4 ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-ember/10 blur-2xl"
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ember">
              {t('partnerCard.open')}
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold text-ink">
            {t('partnerCard.title')}
          </p>
          <p className="mt-1 text-xs leading-5 text-muted">
            {t('partnerCard.description')}
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-ember px-3.5 text-xs font-semibold text-ember-ink transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
          >
            {t('partnerCard.telegram')}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <section
      className={`relative overflow-hidden rounded-2xl border border-hairline bg-raised p-6 sm:p-8 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-ember/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-cobalt/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ember/25 bg-ember/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Hamkorlik uchun ariza · ochiq
          </span>

          <h2 className="mt-4 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.035em] text-ink">
            O‘quv markazingizni katalogga qo‘shing
          </h2>
          <p className="mt-2.5 text-sm leading-6 text-muted">
            O‘quv maskanlari ma’lumotlari e’lon qilishdan oldin tekshirilmoqda. Markazingiz
            haqidagi tasdiqlangan ma’lumotlarni kiritish uchun ariza qoldiring —
            ma’lumotlar tekshirilgach, katalogga joylanadi.
          </p>

          <ul className="mt-4 flex flex-col gap-1.5">
            {details.map((detail) => (
              <li key={detail} className="flex items-center gap-2 text-xs leading-5 text-muted">
                <CheckMark className="h-3.5 w-3.5 shrink-0 text-ember" />
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 lg:text-right">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
          >
            Telegram orqali ariza qoldirish
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            Tasdiqlangan ma’lumotlar asosida
          </p>
        </div>
      </div>
    </section>
  )
}
