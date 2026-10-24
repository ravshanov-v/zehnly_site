import { useRef, useState } from 'react'

const answers = [
  { text: 'A) O(n²)', correct: false },
  { text: 'B) O(1) — O‘zgarmas vaqt', correct: true },
  { text: 'C) O(n log n)', correct: false },
]

export default function ProductPreview() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(1420)
  const [isAnswered, setIsAnswered] = useState(false)
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setTilt({
      x: ((y - centerY) / centerY) * -7,
      y: ((x - centerX) / centerX) * 7,
    })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const handleSelect = (index, isCorrect) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)
    if (isCorrect) setScore((prev) => prev + 100)
  }

  return (
    <div
      className="relative mx-auto mt-6 w-full max-w-5xl select-none px-0 perspective-[1200px] sm:px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-2xl border border-black/5 bg-white/70 p-6 text-left shadow-[0_20px_70px_-15px_rgba(79,70,229,0.25)] backdrop-blur-xl will-change-transform sm:p-8 dark:border-white/10 dark:bg-slate-900/60"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-6 dark:border-white/5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-500 dark:border-white/5 dark:bg-white/5 dark:text-slate-400">
              zehnly.uz/demo-preview
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
            <span className="h-2 w-2 animate-ping rounded-full bg-indigo-500 dark:bg-indigo-400" />
            Jonli Ekotizim
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="rounded-xl border border-black/5 bg-white/60 p-5 md:col-span-7 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Zakovat Testi • Savol №12
              </span>
              <span className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                +100 Ball
              </span>
            </div>

            <h4 className="mb-5 text-base font-medium leading-snug text-slate-900 sm:text-lg dark:text-white">
              Qaysi algoritmik murakkablik eng tez hisoblash tezligini taʼminlaydi?
            </h4>

            <div className="space-y-2.5">
              {answers.map((answer, index) => {
                let buttonClass =
                  'border-slate-200 text-slate-600 hover:border-indigo-400/60 hover:bg-white hover:text-slate-900 dark:border-white/5 dark:text-slate-300 dark:hover:border-indigo-500/40 dark:hover:bg-white/[0.04]'
                if (isAnswered) {
                  if (answer.correct) {
                    buttonClass =
                      'border-emerald-500/50 bg-emerald-500/10 text-emerald-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] dark:text-emerald-300'
                  } else if (selectedAnswer === index) {
                    buttonClass =
                      'border-rose-500/50 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  } else {
                    buttonClass =
                      'border-slate-200 text-slate-400 opacity-60 dark:border-white/5 dark:text-slate-500'
                  }
                }

                return (
                  <button
                    key={answer.text}
                    type="button"
                    onClick={() => handleSelect(index, answer.correct)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${buttonClass}`}
                  >
                    <span>{answer.text}</span>
                    {isAnswered && answer.correct && (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        ✓ To‘g‘ri
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 md:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-5 dark:border-white/5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Sizning reytingingiz
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Top 5%
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {score}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">XP</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
                  style={{ width: isAnswered ? '84%' : '78%' }}
                />
              </div>
            </div>

            <div className="rounded-xl border border-black/5 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tavsiya etilgan o‘quv markazi
              </span>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white shadow-md">
                  Z
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Najot Taʼlim
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Dasturlash va Zamonaviy kasblar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
