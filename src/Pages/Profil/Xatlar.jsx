import { useLanguage } from '../../context/useLanguage.js'
import { formatRelativeDate, RELATIVE_DATE_LOCALES } from '../../utils/quizHistory.js'

export default function Xatlar({ records = [] }) {
  const { t, language } = useLanguage()
  const dateLocale = RELATIVE_DATE_LOCALES[language] ?? RELATIVE_DATE_LOCALES.uz

  if (records.length === 0) {
    return (
      <div className="flex h-64 animate-fadeIn flex-col items-center justify-center rounded-xl border border-dashed border-hairline-strong p-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-hairline text-ember">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.7}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <h4 className="text-sm font-semibold text-ink">{t('profile.results.emptyTitle')}</h4>
        <p className="mt-1 max-w-xs text-xs leading-5 text-muted">
          {t('profile.results.emptyDesc')}
        </p>
      </div>
    )
  }

  return (
    <div className="animate-fadeIn space-y-2.5">
      {records.slice(0, 6).map((record, index) => {
        const isLatest = index === 0

        return (
          <div
            key={record.id}
            className={`flex items-start justify-between rounded-xl border p-3.5 transition-all ${
              isLatest ? 'border-ember/30 bg-ember/[0.04]' : 'border-hairline bg-paper'
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isLatest ? 'bg-ember' : 'bg-muted/50'
                }`}
              />
              <div>
                <h4
                  className={`text-sm font-medium ${
                    isLatest ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  {t('profile.results.completed', { category: record.categoryTitle })}
                </h4>
                <p className="mt-0.5 text-xs leading-5 text-muted">
                  {t('profile.results.summary', {
                    correct: record.correctCount,
                    total: record.totalAnswered,
                    xp: record.xp,
                    accuracy: record.accuracy,
                  })}
                </p>
              </div>
            </div>
            <span className="ml-2 shrink-0 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              {formatRelativeDate(record.date, t, dateLocale)}
            </span>
          </div>
        )
      })}
    </div>
  )
}
