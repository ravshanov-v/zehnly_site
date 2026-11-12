import { NavLink } from 'react-router-dom'
import ProductPreview from '../../Components/ProductPreview.jsx'
import Reveal from '../../Components/Reveal.jsx'
import AnimatedNumber from '../../Components/AnimatedNumber.jsx'
import { ArrowRight, ArrowUpRight, CheckMark, Spark } from '../../Components/Marks.jsx'
import { useSession } from '../../hooks/useSession.js'
import { useQuizHistory } from '../../hooks/useQuizHistory.js'
import { studyCenters } from '../../data/studyCenters.js'
import { categoryGroups, categoryMeta, totalQuestions } from '../Zakovat/Categories/meta.js'

const formattedTotalQuestions = totalQuestions.toLocaleString('ru-RU')

const metrics = [
  { value: categoryMeta.length, suffix: '', label: 'Fanlar' },
  { value: totalQuestions, suffix: '', label: 'Savol bazasi' },
  { value: 30, suffix: 's', label: 'Savol taymeri' },
  { value: categoryGroups.length, suffix: '', label: 'Yo‘nalish' },
]

const weekdayLabels = ['Y', 'D', 'S', 'C', 'P', 'J', 'Sh']

function buildWeeklyActivity(records) {
  const days = []

  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() - offset)
    days.push({
      key: date.toLocaleDateString('en-CA'),
      label: weekdayLabels[date.getDay()],
      count: 0,
    })
  }

  const byKey = new Map(days.map((day) => [day.key, day]))

  records.forEach((record) => {
    const date = new Date(record.date)
    if (Number.isNaN(date.getTime())) return

    const day = byKey.get(date.toLocaleDateString('en-CA'))
    if (day) day.count += record.totalAnswered || 0
  })

  const max = Math.max(1, ...days.map((day) => day.count))

  return days.map((day) => ({
    ...day,
    height: Math.round((day.count / max) * 100),
  }))
}

const steps = [
  {
    title: 'Tanlang',
    description:
      'Fan bo‘yicha aniq mashq qiling yoki aralash rejimda kutilmagan savollarga tayyorlaning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
        <path d="M4 6h16M4 12h10M4 18h7" />
      </svg>
    ),
  },
  {
    title: 'Sinang',
    description:
      'Har bir savolga 30 soniya. Tezlik, aniqlik va sovuqqonlik — arena faqat shularni o‘lchaydi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
        <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
      </svg>
    ),
  },
  {
    title: 'O‘sing',
    description:
      'Aniqlik, XP va sessiyalar tarixini profilda kuzatib boring. Har bir urinish — aniq signal.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
        <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
      </svg>
    ),
  },
]

const miniAnswers = [
  { key: 'A', text: 'O(n²)', tone: 'idle' },
  { key: 'B', text: 'O(1) — o‘zgarmas vaqt', tone: 'active' },
  { key: 'C', text: 'O(n log n)', tone: 'idle' },
]

function BentoCard({ className = '', children }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-hairline bg-raised p-6 transition-all duration-300 hover:border-ember/40 hover:shadow-[var(--shadow-soft)] sm:p-7 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </article>
  )
}

function CardEyebrow({ children, icon }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember/10 text-ember">
        {icon}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
        {children}
      </span>
    </div>
  )
}

export default function BoshSahifa() {
  const session = useSession()
  const { records, stats } = useQuizHistory()
  const weeklyActivity = buildWeeklyActivity(records)
  const weeklyAnswered = weeklyActivity.reduce((sum, day) => sum + day.count, 0)
  const hasWeeklyActivity = weeklyAnswered > 0
  const displayName = session?.name || session?.email?.split('@')[0] || 'Mehmon'
  const displayEmail = session?.email || 'Hisob yaratilmagan'
  const firstLetter = displayName.charAt(0).toUpperCase()
  const hasHistory = stats.totalAnswered > 0
  const hasCenters = studyCenters.length > 0

  return (
    <div className="flex flex-col pb-8">
      <section className="relative pt-6 sm:pt-10 lg:pt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div>
            <Reveal className="flex items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-raised/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
                </span>
                Zehnly Arena · ochiq
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 font-display text-[clamp(2.9rem,6.4vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-ink">
                Bilim uchun
                <br />
                yangi <span className="text-gradient">infratuzilma.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                {formattedTotalQuestions} savol, 30 soniyalik interaktiv arena va o‘sish
                analitikasi — bitta tezkor, aniq tizimda. Har bir urinish o‘lchanadi, har bir
                natija ko‘rinadi.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <NavLink
                  to="/zakovat"
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink shadow-[0_20px_50px_-24px_var(--ember)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
                >
                  Arenani boshlash
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember-ink/15 transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </NavLink>

                <NavLink
                  to="/oquv-maskanlari"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-hairline-strong px-5 text-sm font-semibold text-ink transition-colors hover:border-ember/50 hover:bg-ink/[0.04]"
                >
                  Maskanlarni ko‘rish
                  <ArrowRight className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-x-0.5" />
                </NavLink>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                <CheckMark className="h-3.5 w-3.5 text-positive" />
                Bepul boshlash · Karta talab qilinmaydi
              </p>
            </Reveal>

            <Reveal delay={260}>
              <dl className="mt-10 grid max-w-lg grid-cols-3 border-y border-hairline">
                <div className="py-5 pr-3">
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {categoryMeta.length}
                  </dd>
                  <dt className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Fan
                  </dt>
                </div>
                <div className="border-x border-hairline px-3 py-5 sm:px-5">
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {formattedTotalQuestions}
                  </dd>
                  <dt className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Savol
                  </dt>
                </div>
                <div className="py-5 pl-3 sm:pl-5">
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink">
                    30<span className="ml-0.5 text-sm text-muted">s</span>
                  </dd>
                  <dt className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Arena
                  </dt>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <ProductPreview />
          </Reveal>
        </div>
      </section>

      <section className="mt-20 sm:mt-24">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-raised px-5 py-6 sm:px-6">
                <AnimatedNumber
                  value={metric.value}
                  suffix={metric.suffix}
                  className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                />
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-24 sm:mt-32">
        <Reveal className="max-w-2xl">
          <span className="kicker">Imkoniyatlar</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            Bitta tizim. <span className="text-gradient">To‘liq nazorat.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">
            Arena, katalog va analitika alohida vositalar emas — ular bir-birini
            kuchaytiradigan yagona ish muhiti.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Reveal delay={40} className="lg:col-span-7">
            <BentoCard className="h-full">
              <div className="flex items-start justify-between gap-3">
                <CardEyebrow
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
                    </svg>
                  }
                >
                  Interaktiv arena
                </CardEyebrow>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-positive/25 bg-positive/[0.06] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-positive">
                  <span className="h-1 w-1 rounded-full bg-positive" />
                  Ochiq
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                30 soniyalik haqiqiy muhit
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                Har bir savol taymer bilan ishlaydi. Javobni tanlang, natijani darhol ko‘ring va
                keyingi savolga o‘ting.
              </p>

              <div className="mt-6 rounded-xl border border-hairline bg-paper p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Namuna savol · Algoritmlar
                  </span>
                  <span className="rounded-md border border-ember/25 bg-ember/[0.06] px-2 py-0.5 font-mono text-[9px] text-ember">
                    +100 XP
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-ink">
                  Qaysi murakkablik eng tez hisoblash vaqtini ta’minlaydi?
                </p>
                <div className="mt-3 space-y-1.5">
                  {miniAnswers.map((answer) => (
                    <div
                      key={answer.key}
                      className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-xs ${
                        answer.tone === 'active'
                          ? 'border-ember/50 bg-ember/[0.06] text-ink'
                          : 'border-hairline bg-raised text-muted'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-md border font-mono text-[9px] ${
                          answer.tone === 'active'
                            ? 'border-ember/40 bg-ember/10 text-ember'
                            : 'border-hairline text-muted'
                        }`}
                      >
                        {answer.key}
                      </span>
                      {answer.text}
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <BentoCard className="h-full">
              <CardEyebrow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                    <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
                  </svg>
                }
              >
                O‘sish analitikasi
              </CardEyebrow>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                Raqamlar yolg‘on gapirmaydi
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {hasWeeklyActivity
                  ? `Oxirgi 7 kunda ${weeklyAnswered} savolga javob berdingiz.`
                  : hasHistory
                    ? 'Bu hafta faollik yo‘q — yangi sessiya boshlang.'
                    : 'Birinchi sessiyadan so‘ng shaxsiy faollik shu yerda ko‘rinadi.'}
              </p>

              <div className="mt-6 flex h-28 items-end gap-1.5">
                {weeklyActivity.map((day) => (
                  <div key={day.key} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex h-24 w-full items-end rounded-md bg-ink/[0.04]">
                      <div
                        className="w-full rounded-md bg-gradient-to-t from-ember to-cobalt opacity-80 transition-all duration-500 group-hover:opacity-100"
                        style={{ height: `${day.height}%` }}
                      />
                    </div>
                    <span className="font-mono text-[8px] text-muted/70">{day.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-hairline pt-4">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    O‘rtacha aniqlik
                  </span>
                  <p className="mt-1 font-display text-xl font-semibold text-ink">
                    {hasHistory ? stats.accuracy : '—'}
                  </p>
                </div>
                <span className="rounded-md border border-hairline px-2 py-1 font-mono text-[9px] text-muted">
                  {stats.totalTests} sessiya
                </span>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={40} className="lg:col-span-5">
            <BentoCard className="h-full">
              <div className="flex items-start justify-between gap-3">
                <CardEyebrow
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                      <path d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  }
                >
                  O‘quv maskanlari
                </CardEyebrow>
                <span className="rounded-md border border-hairline px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  {hasCenters ? `${studyCenters.length} maskan` : '2026'}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                {hasCenters ? 'Katalog tayyor' : 'Katalog hozircha bo‘sh'}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {hasCenters
                  ? "Yo‘nalish, tuman va format bo‘yicha filtrlab, o‘zingizga mos maskanni toping."
                  : "Maskanlar bazasi hozircha bo‘sh. Ma’lumotlar qo‘shilgach, katalog shu yerda ochiladi."}
              </p>

              <div className="mt-6 rounded-xl border border-hairline bg-paper p-3">
                <div className="flex h-10 items-center gap-2 rounded-lg border border-hairline bg-raised px-3 text-xs text-muted/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="h-3.5 w-3.5">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  Maskan, yo‘nalish yoki tuman...
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Dasturlash', 'Dizayn', 'Tillar', 'Marketing'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-hairline px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  {hasCenters ? 'Barcha maskanlar' : 'Baza bo‘sh'}
                </span>
                <NavLink
                  to="/oquv-maskanlari"
                  className="group/link inline-flex items-center gap-1 text-xs font-semibold text-ember"
                >
                  {hasCenters ? 'Ko‘rish' : 'Holat'}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </NavLink>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <BentoCard className="h-full">
              <CardEyebrow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2" />
                  </svg>
                }
              >
                Yagona profil
              </CardEyebrow>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                Butun yo‘lingiz bir joyda
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                Sessiyalar tarixi, sevimlilar va natijalar — brauzeringizda saqlanadigan
                yagona, tartibli profil.
              </p>

              <div className="mt-6 rounded-xl border border-hairline bg-paper p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3556f5] to-[#8b5cf6] font-display text-lg font-semibold text-white">
                    {firstLetter}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink">{displayName}</p>
                    <p className="truncate font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                      {displayEmail}
                    </p>
                  </div>
                  <span className="rounded-md border border-ember/25 bg-ember/[0.06] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ember">
                    {session ? 'Faol hisob' : 'Mehmon'}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 divide-x divide-hairline border-t border-hairline pt-4">
                  {[
                    { value: stats.totalTests, label: 'Sessiya' },
                    { value: hasHistory ? stats.accuracy : '—', label: 'Aniqlik' },
                    { value: stats.xp.toLocaleString('ru-RU'), label: 'XP' },
                  ].map((item) => (
                    <div key={item.label} className="px-2 first:pl-0 last:pr-0">
                      <p className="font-display text-lg font-semibold text-ink">{item.value}</p>
                      <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <Reveal className="max-w-2xl">
          <span className="kicker">Qanday ishlaydi</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            Uch qadamda <span className="text-gradient">o‘sish.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">
            Ortiqcha sozlash yo‘q. Tanlang, sinang va natijani kuzatib boring.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-hairline bg-raised p-6 transition-colors hover:border-ember/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tabular-nums tracking-[0.16em] text-ember">
                    0{index + 1}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-paper text-muted">
                    {step.icon}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <Reveal className="relative overflow-hidden rounded-3xl border border-hairline bg-raised px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_66%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent_80%)]"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              <Spark className="h-3.5 w-3.5 text-ember" />
              Bepul boshlash
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.3rem,5.4vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-ink">
              Bugun <span className="text-aurora">birinchi signalni</span> yuboring.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted">
              Ro‘yxatdan o‘ting va birinchi sessiyangizni boshlang. Natijani bir necha
              daqiqada ko‘rasiz.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <NavLink
                to="/zakovat"
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
              >
                Arenaga kirish
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NavLink>
              <NavLink
                to="/oquv-maskanlari"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-hairline-strong px-5 text-sm font-semibold text-ink transition-colors hover:border-ember/50 hover:bg-ink/[0.04] sm:w-auto"
              >
                Maskanlarni ko‘rish
              </NavLink>
            </div>

            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              Bepul · Karta talab qilinmaydi
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
