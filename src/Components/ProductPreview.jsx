import { useState } from 'react'
import TiltBoard from './TiltBoard.jsx'
import { studyCenters } from '../data/studyCenters.js'

const answers = [
  { key: 'A', text: 'O(n²)', correct: false },
  { key: 'B', text: 'O(1) — o‘zgarmas vaqt', correct: true },
  { key: 'C', text: 'O(n log n)', correct: false },
]

const correctIndex = answers.findIndex((answer) => answer.correct)
const featuredCenter = studyCenters[0] ?? null

export default function ProductPreview() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)

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
    <TiltBoard className="relative mx-auto w-full max-w-[640px] select-none">
      <div className="relative rounded-2xl border border-hairline bg-raised p-1.5">
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
                mushohada.uz / arena
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-md border border-ember/25 bg-ember/[0.06] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-ember">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              Interaktiv namuna
            </span>
          </div>

          <div className="mt-4 rounded-xl border border-hairline bg-raised p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                Zakovat testi · Namuna savol
              </span>
              <span className="rounded-md border border-ember/25 bg-ember/[0.06] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-ember">
                Namuna
              </span>
            </div>

            <h4 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
              Qaysi murakkablik eng kam hisoblash vaqtini talab qiladi?
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
                    className={`group/answer flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-[13px] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 focus-visible:ring-offset-2 focus-visible:ring-offset-raised disabled:cursor-default disabled:active:scale-100 ${rowClass}`}
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
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-medium text-muted transition-colors duration-200 hover:bg-ink/[0.05] hover:text-ink active:scale-[0.98]"
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
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-ink px-4 text-xs font-semibold text-paper transition-colors duration-200 hover:bg-ember hover:text-ember-ink active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
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
            <div className="relative overflow-hidden rounded-xl border border-hairline bg-raised p-4">
              <div className="flex items-center justify-between gap-3">
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

            <div className="flex flex-col justify-between rounded-xl border border-hairline bg-raised p-4">
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
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-brand font-display text-base font-semibold text-ember-ink">
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
                  <p className="text-[13px] font-semibold text-ink">Katalog to‘ldirilmoqda</p>
                  <p className="mt-1 text-[11px] leading-5 text-muted">
                    O‘quv maskanlari bazasi hali to‘ldirilmagan. Markazingizni qo‘shish uchun
                    biz bilan bog‘laning.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </TiltBoard>
  )
}
