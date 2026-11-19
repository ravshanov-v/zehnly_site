import { useRef, useState } from 'react'
import { useSeasonalScene } from '../context/useSeasonalScene.js'
import { studyCenters } from '../data/studyCenters.js'

const answers = [
  { key: 'A', text: 'O(n²)', correct: false },
  { key: 'B', text: 'O(1) — o‘zgarmas vaqt', correct: true },
  { key: 'C', text: 'O(n log n)', correct: false },
]

const correctIndex = answers.findIndex((answer) => answer.correct)
const featuredCenter = studyCenters[0] ?? null

export default function ProductPreview() {
  const { active: atmosphereActive, physicalMode, seasonEffect } = useSeasonalScene()
  const isFrosted = atmosphereActive && physicalMode === 'snow'
  const isAutumn = atmosphereActive && seasonEffect === 'autumn'
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)
  const [pointer, setPointer] = useState({ tiltX: 0, tiltY: 0, x: 50, y: 32 })
  const cardRef = useRef(null)

  const handleMouseMove = (event) => {
    const node = cardRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    setPointer({
      tiltX: ((y - rect.height / 2) / (rect.height / 2)) * -1.6,
      tiltY: ((x - rect.width / 2) / (rect.width / 2)) * 1.6,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setPointer((prev) => ({ ...prev, tiltX: 0, tiltY: 0 }))
  }

  const handleSelect = (index) => {
    if (isAnswered) return
    setSelectedAnswer(index)
  }

  const handleCheck = () => {
    if (isAnswered || selectedAnswer === null) return
    setIsAnswered(true)
    if (answers[selectedAnswer].correct) setScore((prev) => prev + 100)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
  }

  const isCorrectSelection = selectedAnswer === correctIndex

  const statusText = !isAnswered
    ? selectedAnswer === null
      ? 'Javobni tanlang va tekshiring.'
      : `${answers[selectedAnswer].key} varianti tanlandi.`
    : isCorrectSelection
      ? 'Ajoyib — to‘g‘ri javob. Namuna hisobiga +100 XP qo‘shildi.'
      : 'To‘g‘ri javob — B. Yana bir bor urinib ko‘ring.'

  return (
    <div
      className="relative mx-auto w-full max-w-[640px] select-none"
      style={{ perspective: '1600px' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-8 -z-10 h-2/3 rounded-full bg-[radial-gradient(60%_60%_at_50%_0%,var(--halo),transparent_72%)] blur-3xl"
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${pointer.tiltX}deg) rotateY(${pointer.tiltY}deg)`,
          transition: 'transform 250ms cubic-bezier(0.22, 1, 0.36, 1)',
          '--fx': `${pointer.x}%`,
          '--fy': `${pointer.y}%`,
        }}
        className={[
          'group winter-frost spring-dew summer-sheen winter-glint spring-glint summer-glint relative rounded-2xl border border-hairline bg-raised/90 p-1.5 shadow-[var(--shadow-lift)] backdrop-blur-xl will-change-transform',
          isFrosted ? 'seasonal-glass-frost' : '',
        ].join(' ')}
      >
        <div
          aria-hidden="true"
          className="card-spotlight pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {isAutumn && (
          <div
            aria-hidden="true"
            className="autumn-card-glow pointer-events-none absolute inset-0 z-20 rounded-2xl"
          />
        )}

        <div className="relative rounded-[14px] border border-hairline bg-paper p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-3.5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ember" />
                <span className="h-2 w-2 rounded-full bg-cobalt/70" />
                <span className="h-2 w-2 rounded-full bg-ink/20" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-raised px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                zehnly.uz / arena
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-md border border-ember/25 bg-ember/[0.06] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-ember">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              Interaktiv namuna
            </span>
          </div>

          <div className="winter-frost spring-dew summer-sheen winter-glint spring-glint summer-glint mt-4 rounded-xl border border-hairline bg-raised p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                Zakovat testi · Namuna savol
              </span>
              <span className="rounded-md border border-ember/25 bg-ember/[0.06] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-ember">
                Namuna
              </span>
            </div>

            <h4 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
              Qaysi algoritmik murakkablik eng tez hisoblash tezligini ta’minlaydi?
            </h4>

            <div className="mt-3 space-y-1.5" role="group" aria-label="Javob variantlari">
              {answers.map((answer, index) => {
                const isSelected = selectedAnswer === index
                let rowClass =
                  'border-hairline bg-paper text-ink-soft hover:-translate-y-px hover:border-ember/45 hover:bg-ember/[0.04] hover:text-ink'
                let badgeClass = 'border-hairline bg-raised text-muted'
                let dotClass = 'border-hairline-strong'

                if (!isAnswered && isSelected) {
                  rowClass = 'border-ember/60 bg-ember/[0.07] text-ink'
                  badgeClass = 'border-ember/40 bg-ember/10 text-ember'
                  dotClass = 'border-ember bg-ember'
                }

                if (isAnswered) {
                  if (answer.correct) {
                    rowClass = 'border-positive/45 bg-positive/[0.07] text-ink'
                    badgeClass = 'border-positive/35 bg-positive/10 text-positive'
                    dotClass = 'border-positive bg-positive/15 text-positive'
                  } else if (isSelected) {
                    rowClass = 'border-negative/40 bg-negative/[0.05] text-ink'
                    badgeClass = 'border-negative/35 bg-negative/10 text-negative'
                    dotClass = 'border-negative bg-negative/15 text-negative'
                  } else {
                    rowClass = 'border-hairline bg-transparent text-muted opacity-50'
                    badgeClass = 'border-hairline bg-transparent text-muted'
                    dotClass = 'border-hairline'
                  }
                }

                return (
                  <button
                    key={answer.key}
                    type="button"
                    onClick={() => handleSelect(index)}
                    disabled={isAnswered}
                    aria-pressed={isSelected}
                    className={`group/answer flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-[13px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 focus-visible:ring-offset-2 focus-visible:ring-offset-raised disabled:cursor-default ${rowClass}`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] transition-colors duration-200 ${badgeClass}`}
                    >
                      {answer.key}
                    </span>
                    <span className="flex-1 leading-5">{answer.text}</span>
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${dotClass}`}
                    >
                      {isAnswered && answer.correct && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          aria-hidden="true"
                          className="h-2.5 w-2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      )}
                      {isAnswered && isSelected && !answer.correct && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          aria-hidden="true"
                          className="h-2.5 w-2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      )}
                      {!isAnswered && isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-ember-ink" />
                      )}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-3.5">
              <p aria-live="polite" className="min-h-5 text-xs leading-5 text-muted">
                {statusText}
              </p>

              {isAnswered ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-medium text-muted transition-colors duration-200 hover:bg-ink/[0.05] hover:text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5V9H9" />
                  </svg>
                  Qayta urinish
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCheck}
                  disabled={selectedAnswer === null}
                  className="winter-glint spring-glint summer-glint inline-flex h-8 items-center gap-1.5 rounded-lg bg-ink px-4 text-xs font-semibold text-paper transition-all duration-200 hover:bg-ember hover:text-ember-ink disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Tekshirish
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M4 12h16M13 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="winter-frost spring-dew summer-sheen winter-glint spring-glint summer-glint relative overflow-hidden rounded-xl border border-hairline bg-raised p-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-ember/10 blur-2xl"
              />

              <div className="relative flex items-center justify-between gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  Namuna hisobi
                </span>
                <span className="rounded-md border border-hairline px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                  Demo
                </span>
              </div>

              <div className="relative mt-2 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-semibold leading-none tracking-tight text-ink tabular-nums">
                  {score}
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  Namuna XP
                </span>
              </div>

              <p className="relative mt-3 text-[11px] leading-5 text-muted">
                Bu namuna mashq — natija haqiqiy hisobingizga ta’sir qilmaydi.
              </p>
            </div>

            <div className="winter-frost spring-dew summer-sheen winter-glint spring-glint summer-glint flex flex-col justify-between rounded-xl border border-hairline bg-raised p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  O‘quv maskanlari
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                  {featuredCenter ? 'Katalog' : 'Baza'}
                </span>
              </div>

              {featuredCenter ? (
                <>
                  <div className="mt-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-brand font-display text-base font-semibold text-white">
                      {featuredCenter.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="truncate text-[13px] font-semibold text-ink">
                        {featuredCenter.name}
                      </h5>
                      <p className="truncate text-[11px] text-muted">
                        {featuredCenter.district} · {featuredCenter.category}
                      </p>
                    </div>
                  </div>

                  {(featuredCenter.directions ?? []).length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {featuredCenter.directions.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-hairline px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-3">
                  <p className="text-[13px] font-semibold text-ink">Katalog hozircha bo‘sh</p>
                  <p className="mt-1 text-[11px] leading-5 text-muted">
                    Maskanlar bazasi hozircha bo‘sh. Ma’lumotlar qo‘shilgach, katalog shu
                    yerda ko‘rinadi.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
