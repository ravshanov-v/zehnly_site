import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from '../../Components/Marks.jsx'
import Reveal from '../../Components/Reveal.jsx'
import StudyCentersPartnerCard from '../../Components/StudyCentersPartnerCard.jsx'
import { useFavorites } from '../../hooks/useFavorites.js'
import { toggleFavorite } from '../../utils/favorites.js'
import { studyCenters } from '../../data/studyCenters.js'

const upcoming = [
  {
    index: '01',
    title: 'Aqlli qidiruv',
    description: "Maskanlar qo‘shilgach, yo‘nalish, tuman va format bo‘yicha qidiruv.",
  },
  {
    index: '02',
    title: 'Ochiq taqqoslash',
    description: "Maskanlar qo‘shilgach, kurslar, narxlar va sharhlarni yonma-yon taqqoslash.",
  },
  {
    index: '03',
    title: 'Sevimlilar',
    description: "Maskanlar qo‘shilgach, tanlanganlarini saqlash va keyin ularga oson qaytish.",
  },
]

const SORT_OPTIONS = [
  { value: 'rating', label: 'Reyting bo‘yicha' },
  { value: 'price', label: 'Narx bo‘yicha' },
  { value: 'name', label: 'Nom bo‘yicha' },
]

function formatPrice(value) {
  if (!value) return 'Kelishiladi'
  return new Intl.NumberFormat('ru-RU').format(value)
}

function HeartIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" />
    </svg>
  )
}

function CatalogCard({ center }) {
  const favoriteIds = useFavorites()
  const isFavorite = favoriteIds.includes(center.id)

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-hairline bg-raised p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-ember/40">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-brand font-display text-lg font-semibold text-ember-ink">
            {center.name.charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-ink">{center.name}</h3>
            <p className="truncate font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              {center.district} · {center.category}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toggleFavorite(center.id)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `${center.name}ni sevimlilardan olib tashlash`
              : `${center.name}ni sevimlilarga qo'shish`
          }
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
            isFavorite
              ? 'border-ember/40 bg-ember/10 text-ember'
              : 'border-hairline text-muted hover:border-ember/40 hover:text-ember'
          }`}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>

      {center.description && (
        <p className="mt-4 line-clamp-2 text-xs leading-5 text-muted">{center.description}</p>
      )}

      {center.directions?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {center.directions.map((direction) => (
            <span
              key={direction}
              className="rounded-md border border-hairline px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted"
            >
              {direction}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-end justify-between border-t border-hairline pt-4">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
            Boshlanish narxi
          </span>
          <p className="mt-1 font-display text-xl font-semibold leading-none text-ink">
            {formatPrice(center.priceFrom)}
            {center.priceFrom ? (
              <span className="ml-1 font-sans text-[10px] font-medium text-muted">so&apos;m/oy</span>
            ) : null}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs tabular-nums text-ink">
            {Number(center.rating || 0).toFixed(1)}
          </p>
          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
            {center.reviews ? `${center.reviews} sharh` : 'reyting'}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function OquvMaskanlari() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Barchasi')
  const [sortBy, setSortBy] = useState('rating')

  const categories = useMemo(
    () => ['Barchasi', ...new Set(studyCenters.map((center) => center.category).filter(Boolean))],
    []
  )

  const visibleCenters = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    const filtered = studyCenters.filter((center) => {
      const matchesCategory =
        activeCategory === 'Barchasi' || center.category === activeCategory
      const haystack = [center.name, center.district, center.category, ...(center.directions || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery))
    })

    return filtered.sort((a, b) => {
      if (sortBy === 'price') return (a.priceFrom || 0) - (b.priceFrom || 0)
      if (sortBy === 'name') return a.name.localeCompare(b.name, 'uz')
      return (b.rating || 0) - (a.rating || 0)
    })
  }, [query, activeCategory, sortBy])

  const hasCenters = studyCenters.length > 0

  return (
    <div className="mx-auto flex max-w-5xl flex-col pb-20 pt-6 sm:pt-10">
      <Reveal as="header">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-raised px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          Katalog · to‘ldirilmoqda
        </span>

        <h1 className="mt-6 font-display text-[clamp(2.8rem,6.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-ink">
          O‘quv <span className="text-ember">maskanlari.</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {hasCenters
            ? "O‘quv maskanlarini qidiring, taqqoslang va sevimlilarga qo‘shing. Har bir maskan yo‘nalishi, narxi va reytingi bilan bir joyda."
            : "O‘quv maskanlari bazasi hali to‘ldirilmagan. Tasdiqlangan ma’lumotlar qo‘shilgach, katalog shu yerda ochiladi. O‘z markazingizni qo‘shmoqchi bo‘lsangiz, biz bilan bog‘laning."}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Toshkent · O‘zbekiston
          </span>
          <span>
            {hasCenters ? `${studyCenters.length} ta maskan` : 'Baza to‘ldirilmoqda'}
          </span>
        </div>
      </Reveal>

      {hasCenters ? (
        <>
          <Reveal delay={80}>
            <section className="mt-10 rounded-2xl border border-hairline bg-raised p-2.5 sm:p-3">
              <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center">
                <label className="relative flex-1">
                  <span className="sr-only">O‘quv maskanlarini qidirish</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Maskan, yo‘nalish yoki tuman..."
                    className="h-11 w-full rounded-xl border border-hairline bg-paper pl-10 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ember focus:ring-2 focus:ring-ember/15"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-1.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`h-9 rounded-lg border px-3 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors ${
                        activeCategory === category
                          ? 'border-ember bg-ember text-ember-ink'
                          : 'border-hairline text-muted hover:border-hairline-strong hover:text-ink'
                      }`}
                    >
                      {category}
                    </button>
                  ))}

                  <label className="ml-auto">
                    <span className="sr-only">Saralash</span>
                    <select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      className="h-9 rounded-lg border border-hairline bg-paper px-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted outline-none transition-colors focus:border-ember focus:ring-2 focus:ring-ember/15"
                    >
                      {SORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            </section>
          </Reveal>

          {visibleCenters.length > 0 ? (
            <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCenters.map((center) => (
                <CatalogCard key={center.id} center={center} />
              ))}
            </section>
          ) : (
            <section className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-hairline-strong px-6 py-16 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline text-muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true" className="h-5 w-5">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                Hech narsa topilmadi.
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                Qidiruv yoki filtrni o‘zgartirib qayta urinib ko‘ring.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveCategory('Barchasi')
                }}
                className="mt-6 inline-flex h-10 items-center rounded-lg border border-hairline-strong px-5 text-xs font-semibold text-ink transition-colors hover:bg-ink/[0.04]"
              >
                Filtrlarni tozalash
              </button>
            </section>
          )}
        </>
      ) : (
        <>
          <Reveal delay={80}>
            <section className="relative mt-10 overflow-hidden rounded-3xl border border-hairline bg-raised px-6 py-12 text-ink sm:px-10 sm:py-14">

              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                    Katalog holati · to‘ldirilmoqda
                  </span>

                  <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
                    Baza hali <span className="text-ember">to‘ldirilmagan.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    O‘quv maskanlari bazasi hali to‘ldirilmagan. Tasdiqlangan ma’lumotlar
                    qo‘shilgach, katalog shu yerda ochiladi. Bu vaqtda zakovat arenasida
                    bilimingizni sinab ko‘ring.
                  </p>

                  <NavLink
                    to="/zakovat"
                    className="group mt-7 inline-flex h-11 items-center gap-2.5 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Zakovat arenasi
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </NavLink>
                </div>

                <div className="rounded-2xl border border-hairline bg-paper p-4">
                  <div className="flex h-10 items-center gap-2 rounded-lg border border-hairline bg-raised px-3 text-xs text-muted">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="h-3.5 w-3.5">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                    Maskan, yo‘nalish yoki tuman...
                  </div>

                  <div className="mt-3 space-y-2">
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg border border-hairline bg-raised p-3"
                      >
                        <span className="h-8 w-8 shrink-0 rounded-lg gradient-brand opacity-60" />
                        <div className="flex-1 space-y-1.5">
                          <span className="block h-2 w-2/5 rounded-full bg-ink/15" />
                          <span className="block h-2 w-3/5 rounded-full bg-ink/[0.07]" />
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                          kutilmoqda
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={140}>
            <StudyCentersPartnerCard className="mt-8" />
          </Reveal>

          <section className="mt-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              Rejadagi imkoniyatlar
            </span>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {upcoming.map((item, index) => (
                <Reveal key={item.index} delay={index * 70}>
                  <div className="h-full rounded-2xl border border-hairline bg-raised p-5 transition-colors hover:border-ember/40">
                    <span className="font-mono text-[10px] tabular-nums tracking-[0.16em] text-ember">
                      {item.index}
                    </span>
                    <h3 className="mt-6 text-sm font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-muted">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
