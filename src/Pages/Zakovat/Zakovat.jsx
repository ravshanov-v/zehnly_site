import { useEffect, useRef, useState } from 'react'
import {
  allCategoryMeta,
  categoryGroups,
  getCategoryMeta,
  loadCategory,
  prefetchCategory,
  totalQuestions,
} from './Categories/index.js'
import {
  addHistoryRecord,
  computeStats,
  createHistoryRecord,
  getHistory,
  updateHistoryRecord,
} from '../../utils/quizHistory.js'
import {
  advanceCategoryProgress,
  getCategoryBatch,
  resetCategoryProgress,
} from '../../utils/quizProgress.js'
import { useQuizProgress } from '../../hooks/useQuizProgress.js'
import { ArrowRight, ArrowUpRight } from '../../Components/Marks.jsx'
import Reveal from '../../Components/Reveal.jsx'

const ARENA_SECONDS = 30
const TIMER_RADIUS = 19
const TIMER_CIRCUMFERENCE = 2 * Math.PI * TIMER_RADIUS

const EMPTY_STATS = {
  totalAnswered: 0,
  correctCount: 0,
  wrongCount: 0,
  totalEarnedXP: 0,
}

const formattedTotal = totalQuestions.toLocaleString('ru-RU')

function notifySessionResult({ totalAnswered, correctCount, totalEarnedXP }) {
  try {
    if (localStorage.getItem('zehnly_notifications') !== 'true') return
    if (!('Notification' in window) || Notification.permission !== 'granted') return

    new Notification('Zehnly sessiyasi yakunlandi', {
      body: `${correctCount}/${totalAnswered} to'g'ri javob · ${totalEarnedXP} XP`,
    })
  } catch {
    // Bildirishnoma yuborilmasa ham sessiya saqlanadi
  }
}

function subjectMark(title) {
  const mark = title
    .split(/\s+/)
    .map((word) => word.replace(/[^A-Za-zʻ‘’']/g, ''))
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return mark || title.slice(0, 2).toUpperCase()
}

function shuffle(items) {
  const next = [...items]

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }

  return next
}

function buildSessionQueue(categories) {
  const queue = categories.flatMap((category) => {
    const meta = getCategoryMeta(category.id)

    return category.questions.map((question) => ({
      ...question,
      categoryId: category.id,
      categoryTitle: meta?.title ?? category.title,
      categoryGroup: meta?.category ?? category.category,
    }))
  })

  return shuffle(queue)
}

function pickMixedCategoryIds() {
  const school = allCategoryMeta.filter((category) => category.category === 'Maktab fanlari')
  const rest = allCategoryMeta.filter((category) => category.category !== 'Maktab fanlari')
  const picks = [...shuffle(school).slice(0, 1), ...shuffle(rest).slice(0, 2)]

  return picks.length > 0 ? picks.map((category) => category.id) : [allCategoryMeta[0].id]
}

export default function Zakovat() {
  const [gameState, setGameState] = useState('lobby')
  const [timeLeft, setTimeLeft] = useState(ARENA_SECONDS)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [sessionQuestions, setSessionQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [sessionStartCursor, setSessionStartCursor] = useState(0)
  const [sessionTotal, setSessionTotal] = useState(0)
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [stats, setStats] = useState(EMPTY_STATS)
  const [loadingCategoryId, setLoadingCategoryId] = useState(null)
  const [loadError, setLoadError] = useState('')
  const resolvedQuestionRef = useRef(false)
  const sessionRecordIdRef = useRef(null)

  const historyStats = computeStats(getHistory())
  const progressState = useQuizProgress()
  const isLoading = loadingCategoryId !== null

  const currentQuestion = sessionQuestions[questionIndex] || null
  const correctOptionId = currentQuestion?.correct ?? null

  const isTimerRunning =
    gameState === 'arena' && !isAnswered && timeLeft > 0 && currentQuestion !== null

  useEffect(() => {
    if (!isTimerRunning) return undefined

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [isTimerRunning, questionIndex, sessionQuestions])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [gameState, questionIndex])

  const isDone = isAnswered || (gameState === 'arena' && timeLeft <= 0)

  useEffect(() => {
    if (gameState !== 'arena' || isAnswered || timeLeft > 0 || !currentQuestion) return
    if (resolvedQuestionRef.current) return

    resolvedQuestionRef.current = true
    if (activeCategoryId) advanceCategoryProgress(activeCategoryId)
    setStats((prev) => ({
      ...prev,
      totalAnswered: prev.totalAnswered + 1,
      wrongCount: prev.wrongCount + 1,
    }))
  }, [gameState, isAnswered, timeLeft, currentQuestion, activeCategoryId])

  const startArena = async (categoryId = null, { reset = false, shuffle: shouldShuffle = false } = {}) => {
    if (isLoading) return

    setLoadingCategoryId(categoryId ?? 'mixed')
    setLoadError('')

    try {
      if (categoryId) {
        const category = await loadCategory(categoryId)
        const ids = category.questions.map((question) => question.id)

        if (reset) resetCategoryProgress(categoryId, ids, { shuffle: shouldShuffle })

        const { batch, start, total, completed } = getCategoryBatch(
          categoryId,
          category.questions
        )

        setActiveCategoryId(categoryId)
        setSessionStartCursor(start)
        setSessionTotal(total)
        setQuestionIndex(0)
        setTimeLeft(ARENA_SECONDS)
        setSelectedOption(null)
        setIsAnswered(false)
        setStats(EMPTY_STATS)
        resolvedQuestionRef.current = false
        sessionRecordIdRef.current = null

        if (completed) {
          setSessionQuestions([])
          setGameState('cycle-complete')
          return
        }

        setSessionQuestions(batch)
        setGameState('arena')
        return
      }

      const ids = pickMixedCategoryIds()
      const categories = await Promise.all(ids.map((id) => loadCategory(id)))
      const queue = buildSessionQueue(categories)

      setActiveCategoryId(null)
      setSessionStartCursor(0)
      setSessionTotal(queue.length)
      setSessionQuestions(queue)
      setQuestionIndex(0)
      setTimeLeft(ARENA_SECONDS)
      setSelectedOption(null)
      setIsAnswered(false)
      setStats(EMPTY_STATS)
      resolvedQuestionRef.current = false
      sessionRecordIdRef.current = null
      setGameState('arena')
    } catch {
      setLoadError("Savollarni yuklab bo'lmadi. Qayta urinib ko'ring.")
    } finally {
      setLoadingCategoryId(null)
    }
  }

  const startNextQuestion = () => {
    const nextIndex = questionIndex + 1

    if (activeCategoryId) {
      if (nextIndex >= sessionQuestions.length) {
        finishSession()
        return
      }

      setQuestionIndex(nextIndex)
    } else if (nextIndex >= sessionQuestions.length) {
      setSessionQuestions((prev) => shuffle(prev))
      setQuestionIndex(0)
    } else {
      setQuestionIndex(nextIndex)
    }

    setTimeLeft(ARENA_SECONDS)
    setSelectedOption(null)
    setIsAnswered(false)
    resolvedQuestionRef.current = false
  }

  const finishSession = () => {
    if (stats.totalAnswered > 0) {
      const meta = activeCategoryId ? getCategoryMeta(activeCategoryId) : null
      const record = createHistoryRecord({
        categoryId: activeCategoryId,
        categoryTitle: meta?.title || 'Aralash savollar',
        categoryGroup: meta?.category || 'Arena',
        totalAnswered: stats.totalAnswered,
        correctCount: stats.correctCount,
        xp: stats.totalEarnedXP,
      })

      if (sessionRecordIdRef.current) {
        updateHistoryRecord(sessionRecordIdRef.current, {
          date: record.date,
          totalAnswered: record.totalAnswered,
          correctCount: record.correctCount,
          wrongCount: record.wrongCount,
          xp: record.xp,
          accuracy: record.accuracy,
        })
      } else {
        sessionRecordIdRef.current = record.id
        addHistoryRecord(record)
      }

      notifySessionResult(stats)
    }

    setGameState('summary')
  }

  const resumeSession = () => {
    if (activeCategoryId) {
      startArena(activeCategoryId)
      return
    }

    setGameState('arena')
  }

  const handleSelectOption = (id) => {
    if (isDone || resolvedQuestionRef.current) return

    const isAnswerCorrect = id === correctOptionId
    resolvedQuestionRef.current = true
    if (activeCategoryId) advanceCategoryProgress(activeCategoryId)

    setSelectedOption(id)
    setIsAnswered(true)
    setStats((prev) => ({
      totalAnswered: prev.totalAnswered + 1,
      correctCount: prev.correctCount + (isAnswerCorrect ? 1 : 0),
      wrongCount: prev.wrongCount + (isAnswerCorrect ? 0 : 1),
      totalEarnedXP: prev.totalEarnedXP + (isAnswerCorrect ? currentQuestion?.xp || 0 : 0),
    }))
  }

  const handleBackToLobby = () => {
    setGameState('lobby')
    setSessionQuestions([])
    setQuestionIndex(0)
    setSessionStartCursor(0)
    setSessionTotal(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setTimeLeft(ARENA_SECONDS)
    setStats(EMPTY_STATS)
    resolvedQuestionRef.current = false
    sessionRecordIdRef.current = null
  }

  const isCorrect = isDone && selectedOption === correctOptionId
  const isTimeout = isDone && selectedOption === null
  const activeMeta = activeCategoryId ? getCategoryMeta(activeCategoryId) : null
  const activeProgress = activeCategoryId ? progressState[activeCategoryId] : null
  const activeCursor = activeProgress?.cursor ?? 0
  const activeCount = activeCategoryId
    ? getCategoryMeta(activeCategoryId)?.questionCount ?? sessionTotal
    : sessionQuestions.length
  const remainingQuestions = activeCategoryId ? Math.max(activeCount - activeCursor, 0) : 0
  const correctOption = currentQuestion?.options.find(
    (option) => option.id === correctOptionId
  )
  const accuracyPercentage =
    stats.totalAnswered > 0 ? Math.round((stats.correctCount / stats.totalAnswered) * 100) : 0
  const questionProgress = sessionQuestions.length
    ? ((questionIndex + 1) / sessionQuestions.length) * 100
    : 0

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-5xl select-none flex-col gap-10 pb-20 pt-6 sm:pt-10">
      {gameState === 'lobby' && (
        <div className="zehnly-fade-in flex flex-col gap-14">
          <Reveal as="header">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-raised/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
              </span>
              Ochiq arena · interaktiv
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.8rem,6.6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-ink">
              Zakovat <span className="text-gradient">arenasi.</span>
            </h1>

            <div className="mt-5 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-pretty text-sm leading-7 text-muted sm:text-base">
                Har bir savol uchun 30 soniya. Bilim, tezlik va sovuqqonlik — maydonda faqat
                shu uchtasi hal qiladi.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="flex items-baseline gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <strong className="font-display text-base font-semibold text-ink">
                    {allCategoryMeta.length}
                  </strong>{' '}
                  fan
                </span>
                <span className="h-3 w-px bg-hairline" />
                <span className="flex items-baseline gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <strong className="font-display text-base font-semibold text-ink">
                    {formattedTotal}
                  </strong>{' '}
                  savol
                </span>
                <span className="h-3 w-px bg-hairline" />
                <span className="flex items-baseline gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <strong className="font-display text-base font-semibold text-ink">30</strong>{' '}
                  soniya
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <section className="relative overflow-hidden rounded-3xl border border-hairline bg-raised p-6 text-ink sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_68%)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent_85%)]"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    Ochiq arena · aralash rejim
                  </span>
                  <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
                    30 soniya. Bir savol.
                    <br />
                    <span className="text-aurora">Cheksiz o‘sish.</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                    O‘zingizni sinang yoki yo‘nalishni tanlab, faqat o‘zingiz bilgan sohada
                    kuch sinashing. Har bir to‘g‘ri javob XP beradi.
                  </p>

                  <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => startArena()}
                      disabled={isLoading}
                      className="winter-glint spring-glint summer-glint summer-sun group inline-flex h-12 items-center gap-3 rounded-xl bg-ember pl-5 pr-2 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
                    >
                      {loadingCategoryId === 'mixed' ? 'Yuklanmoqda…' : 'Arenaga kirish'}
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember-ink/15 transition-transform duration-200 group-hover:translate-x-0.5">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      30s taymer · +XP
                    </span>
                  </div>
                  {loadError && (
                    <p role="alert" className="mt-4 text-xs font-medium text-negative">
                      {loadError}
                    </p>
                  )}
                </div>

                <div className="relative mx-auto flex flex-col items-center gap-5">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-hairline sm:h-48 sm:w-48">
                    <div className="absolute inset-3 rounded-full border border-dashed border-hairline" />
                    <div className="absolute inset-9 rounded-full border border-hairline" />
                    <span className="absolute left-1/2 top-3 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ember" />
                    <div className="text-center">
                      <span className="block font-display text-6xl font-semibold leading-none text-ink">30</span>
                      <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
                        soniya / savol
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-hairline bg-paper px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    {formattedTotal} savol bazasi
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <section className="flex flex-col gap-5">
            <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="kicker">Yo‘nalishlar</span>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
                  Fanni <span className="text-gradient">tanlang.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-muted sm:text-right">
                Fan ustiga bosib, o‘sha yo‘nalishdan tasodifiy savol bilan arenaga kiring.
              </p>
            </Reveal>

            {categoryGroups.map((group, groupIndex) => (
              <Reveal key={group.id} delay={groupIndex * 60}>
                <section className="rounded-2xl border border-hairline bg-raised p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {group.title}
                    </h3>
                    <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                      {group.items.length} ta fan
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-muted">{group.description}</p>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                    {group.items.map((subject) => {
                      const subjectProgress = progressState[subject.id]
                      const subjectCursor = Math.min(
                        subjectProgress?.cursor || 0,
                        subject.questionCount || 0
                      )
                      const subjectCompleted =
                        subject.questionCount > 0 && subjectCursor >= subject.questionCount

                      return (
                      <button
                        key={subject.id}
                        type="button"
                        onClick={() => startArena(subject.id)}
                        onMouseEnter={() => prefetchCategory(subject.id)}
                        onFocus={() => prefetchCategory(subject.id)}
                        disabled={isLoading}
                        className="group relative flex min-h-[7.5rem] flex-col justify-between overflow-hidden rounded-xl border border-hairline bg-paper p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ember/50 hover:shadow-[var(--shadow-soft)] disabled:cursor-wait disabled:opacity-60"
                      >
                        <div className="flex w-full items-start justify-between gap-2">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember/10 font-display text-sm font-semibold text-ember">
                            {subjectMark(subject.title)}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                        </div>
                        <div>
                          <h4 className="text-[13px] font-semibold leading-tight text-ink">
                            {subject.title}
                          </h4>
                          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                            {loadingCategoryId === subject.id
                              ? 'Yuklanmoqda…'
                              : subjectCompleted
                                ? `${subject.questionCount.toLocaleString('ru-RU')} savol · yakunlangan`
                                : subjectCursor > 0
                                  ? `${subjectCursor.toLocaleString('ru-RU')} / ${subject.questionCount.toLocaleString('ru-RU')} savol`
                                  : `${subject.questionCount.toLocaleString('ru-RU')} savol`}
                          </span>
                          {subject.questionCount > 0 && subjectCursor > 0 && (
                            <span className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-ink/[0.06]">
                              <span
                                className="block h-full rounded-full bg-ember transition-all duration-300"
                                style={{
                                  width: `${Math.min(
                                    100,
                                    (subjectCursor / subject.questionCount) * 100
                                  )}%`,
                                }}
                              />
                            </span>
                          )}
                        </div>
                      </button>
                      )
                    })}
                  </div>
                </section>
              </Reveal>
            ))}
          </section>

          <section className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-hairline bg-raised p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Sizning rekordingiz
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ember/10 text-ember">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
                    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4ZM5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3" />
                  </svg>
                </span>
              </div>
              {historyStats.totalTests > 0 ? (
                <>
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="font-display text-3xl font-semibold leading-none text-ember">
                      {historyStats.bestAccuracy}%
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                      aniqlik
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    {historyStats.totalTests} ta sessiya · eng yaxshi {historyStats.bestXp} XP
                  </p>
                </>
              ) : (
                <>
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="font-display text-3xl font-semibold leading-none text-ink/25">
                      —
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                      natija
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    Birinchi sessiyadan so‘ng eng yaxshi natijangiz shu yerda paydo bo‘ladi.
                  </p>
                </>
              )}
            </div>

            <div className="rounded-2xl border border-hairline bg-raised p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Savollar bazasi
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-ember/70" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-3xl font-semibold leading-none text-ink">
                  {formattedTotal}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                  savol
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-muted">
                {allCategoryMeta.length} fan · 3 yo‘nalish · har savolga 30 soniya
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-raised p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Sizning holatingiz
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    historyStats.totalTests > 0 ? 'bg-positive' : 'bg-muted'
                  }`}
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-3xl font-semibold leading-none text-ink">
                  {historyStats.totalTests}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                  sessiya
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-muted">
                {historyStats.totalTests > 0
                  ? `Jami ${historyStats.xp.toLocaleString('ru-RU')} XP to'plangan`
                  : 'Birinchi savolga javob berib hisobni oching'}
              </p>
            </div>
          </section>
        </div>
      )}

      {gameState === 'arena' && currentQuestion && (
        <div className="zehnly-fade-in flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-hairline bg-raised px-4 py-3.5 sm:px-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-ember/25 bg-ember/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ember">
                {currentQuestion.categoryGroup} · {currentQuestion.categoryTitle}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                {activeCategoryId ? (
                  <>
                    Savol{' '}
                    <strong className="mx-0.5 text-xs text-ink">
                      {Math.min(sessionStartCursor + questionIndex + 1, sessionTotal).toLocaleString(
                        'ru-RU'
                      )}
                    </strong>{' '}
                    / {sessionTotal.toLocaleString('ru-RU')}
                    <span className="ml-2 text-muted/70">
                      ({questionIndex + 1}/{sessionQuestions.length} partiya)
                    </span>
                  </>
                ) : (
                  <>
                    Savol{' '}
                    <strong className="mx-0.5 text-xs text-ink">{questionIndex + 1}</strong> /{' '}
                    {sessionQuestions.length.toLocaleString('ru-RU')}
                  </>
                )}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                +{currentQuestion.xp} XP
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11">
                <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle
                    cx="22"
                    cy="22"
                    r={TIMER_RADIUS}
                    fill="none"
                    strokeWidth="2"
                    className="stroke-hairline"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r={TIMER_RADIUS}
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={TIMER_CIRCUMFERENCE}
                    strokeDashoffset={
                      TIMER_CIRCUMFERENCE * (1 - Math.max(timeLeft, 0) / ARENA_SECONDS)
                    }
                    className={timeLeft <= 10 ? 'text-negative' : 'text-ember'}
                    stroke="currentColor"
                    style={{ transition: 'stroke-dashoffset 1s linear, color 0.3s' }}
                  />
                </svg>
                <span
                  className={`absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold tabular-nums ${
                    timeLeft <= 10 ? 'animate-pulse text-negative' : 'text-ink'
                  }`}
                >
                  {timeLeft}
                </span>
              </div>

              <button
                type="button"
                onClick={finishSession}
                className="rounded-lg border border-hairline px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-negative/50 hover:text-negative"
              >
                Yakunlash
              </button>
            </div>
          </div>

          <div className="h-1 w-full overflow-hidden rounded-full bg-ink/[0.07]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-ember to-cobalt transition-all duration-500"
              style={{ width: `${questionProgress}%` }}
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-raised px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-12 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,var(--halo),transparent_70%)] blur-2xl"
            />
            <span className="relative font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Savol
            </span>
            <p className="relative mx-auto mt-4 max-w-3xl font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
              &ldquo;{currentQuestion.question}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option.id
              const isRight = option.id === correctOptionId

              let btnStyle =
                'border-hairline bg-raised text-ink-soft hover:-translate-y-0.5 hover:border-ember/60 hover:bg-ember/[0.04] hover:text-ink'
              let badgeStyle = 'border-hairline bg-paper text-muted'

              if (!isDone && isSelected) {
                btnStyle = 'border-ember/70 bg-ember/[0.07] text-ink'
                badgeStyle = 'border-ember bg-ember text-ember-ink'
              }

              if (isDone) {
                if (isRight) {
                  btnStyle =
                    'border-positive bg-positive/10 text-ink ring-1 ring-positive/30'
                  badgeStyle = 'border-positive bg-positive text-white'
                } else if (isSelected) {
                  btnStyle = 'border-negative/50 bg-negative/[0.05] text-ink'
                  badgeStyle = 'border-negative bg-negative text-white'
                } else {
                  btnStyle = 'border-hairline bg-raised text-muted opacity-45'
                  badgeStyle = 'border-hairline bg-paper text-muted'
                }
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isDone}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex cursor-pointer items-start gap-3.5 rounded-xl border p-4 text-left transition-all duration-200 disabled:cursor-default ${btnStyle}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-[11px] font-semibold transition-colors ${badgeStyle}`}
                  >
                    {option.id}
                  </span>
                  <span className="pt-1.5 text-sm font-medium leading-6">{option.text}</span>
                  {isDone && isRight && !isSelected && (
                    <span className="ml-auto shrink-0 self-center rounded-full bg-positive/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-positive">
                      To&apos;g&apos;ri
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {isDone && (
            <div className="zehnly-fade-in flex flex-col gap-4 rounded-2xl border border-hairline bg-raised p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    isCorrect ? 'bg-positive/15 text-positive' : 'bg-negative/15 text-negative'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3 w-3">
                    {isCorrect ? <path d="m5 12.5 4.5 4.5L19 6.5" /> : <path d="M6 18 18 6M6 6l12 12" />}
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {isCorrect
                      ? `To‘g‘ri javob! +${currentQuestion.xp} XP hisobingizga qo‘shildi.`
                      : isTimeout
                        ? 'Vaqt tugadi.'
                        : 'Afsuski, javob xato.'}
                  </p>
                  {!isCorrect && correctOption && (
                    <p className="mt-1 text-xs leading-5 text-muted">
                      To‘g‘ri javob:{' '}
                      <span className="font-medium text-positive">
                        {correctOption.id}) {correctOption.text}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2.5">
                <button
                  type="button"
                  onClick={startNextQuestion}
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-xs font-semibold text-paper transition-colors hover:bg-ember hover:text-ember-ink"
                >
                  Keyingi savol
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleBackToLobby}
                  className="inline-flex h-10 items-center rounded-lg border border-hairline px-4 text-xs font-medium text-muted transition-colors hover:border-hairline-strong hover:text-ink"
                >
                  Lobby
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {gameState === 'cycle-complete' && (
        <div className="zehnly-fade-in">
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-raised px-6 py-14 text-center text-ink sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_66%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent_80%)]"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                {activeMeta?.title || 'Fan'} · 1000 savol
              </span>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
                Bosqich yakunlandi.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted">
                Bu fan bo‘yicha 1000 ta savolning barchasini ishladingiz. Endi qaytadan
                boshlashingiz yoki savollarni aralashtirib davom ettirishingiz mumkin.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => startArena(activeCategoryId, { reset: true })}
                  className="winter-glint spring-glint summer-glint summer-sun inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ember px-6 text-xs font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                >
                  1-dan qayta
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => startArena(activeCategoryId, { reset: true, shuffle: true })}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-hairline-strong px-6 text-xs font-semibold text-ink transition-colors hover:border-ember/50 hover:bg-ink/[0.04] sm:w-auto"
                >
                  Aralashtirib davom etish
                </button>
                <button
                  type="button"
                  onClick={handleBackToLobby}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl px-4 text-xs font-medium text-muted transition-colors hover:text-ink sm:w-auto"
                >
                  Lobbyga qaytish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {gameState === 'summary' && (
        <div className="zehnly-fade-in">
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-raised px-6 py-14 text-center text-ink sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_66%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent_80%)]"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                {activeMeta?.title || 'Aralash savollar'} · Yakunlandi
              </span>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
                Sessiya yakunlandi.
              </h2>

              <div className="mt-8 flex items-baseline justify-center gap-3">
                <span className="text-aurora font-display text-[clamp(4rem,11vw,6.5rem)] font-semibold leading-none tracking-[-0.04em]">
                  {accuracyPercentage}%
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  aniqlik
                </span>
              </div>

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                Jami ishlangan savollar — {stats.totalAnswered} ta
              </p>
              {activeCategoryId && activeCount > 0 && (
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Progress — {Math.min(activeCursor, activeCount).toLocaleString('ru-RU')} /{' '}
                  {activeCount.toLocaleString('ru-RU')}
                </p>
              )}

              <div className="mx-auto mt-8 grid max-w-xl divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="p-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    To‘g‘ri
                  </span>
                  <p className="mt-2 font-display text-3xl font-semibold leading-none text-ink">
                    {stats.correctCount}
                  </p>
                </div>
                <div className="p-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    Noto‘g‘ri
                  </span>
                  <p className="mt-2 font-display text-3xl font-semibold leading-none text-ink">
                    {stats.wrongCount}
                  </p>
                </div>
                <div className="p-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    To‘plangan XP
                  </span>
                  <p className="mt-2 font-display text-3xl font-semibold leading-none text-ember">
                    +{stats.totalEarnedXP}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resumeSession}
                  className="winter-glint spring-glint summer-glint summer-sun inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ember px-6 text-xs font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                >
                  {activeCategoryId && remainingQuestions > 0 ? 'Keyingi 20 savol' : 'Davom etish'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      activeCategoryId &&
                      !window.confirm(
                        "Bu fan bo'yicha progress noldan boshlanadi. Davom etasizmi?"
                      )
                    ) {
                      return
                    }

                    startArena(activeCategoryId, { reset: true })
                  }}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-hairline-strong px-6 text-xs font-semibold text-ink transition-colors hover:border-ember/50 hover:bg-ink/[0.04] sm:w-auto"
                >
                  Qayta boshlash
                </button>
                <button
                  type="button"
                  onClick={handleBackToLobby}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl px-4 text-xs font-medium text-muted transition-colors hover:text-ink sm:w-auto"
                >
                  Lobbyga qaytish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
