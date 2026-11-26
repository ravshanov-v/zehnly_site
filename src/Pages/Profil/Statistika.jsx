import { useLanguage } from '../../context/useLanguage.js'

export default function Statistika({ statsData }) {
  const { t } = useLanguage()
  const totalTests = statsData?.totalTests || 0;
  const accuracy = statsData?.accuracy || '0%';
  const xp = statsData?.xp || 0;
  const streak = statsData?.streak || 0;

  const cells = [
    {
      label: t('profile.stats.tests'),
      value: t('profile.stats.testsValue', { count: totalTests }),
      accent: 'text-ember',
    },
    { label: t('profile.stats.accuracy'), value: accuracy, accent: 'text-positive' },
    { label: t('profile.stats.xp'), value: xp, accent: 'text-cobalt' },
    {
      label: t('profile.stats.streak'),
      value: t('profile.stats.streakValue', { count: streak }),
      accent: 'text-ink',
    },
  ];

  return (
    <div className="animate-fadeIn space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {cells.map((cell) => (
          <div key={cell.label} className="rounded-xl border border-hairline bg-paper p-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {cell.label}
            </span>
            <div className="mt-2">
              <span className={`font-display text-[1.7rem] font-semibold leading-none tabular-nums ${cell.accent}`}>
                {cell.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {totalTests === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-hairline-strong p-8 text-center">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-hairline text-ember">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-sm font-medium text-ink">{t('profile.stats.emptyTitle')}</h4>
          <p className="mt-1 max-w-xs text-xs leading-5 text-muted">
            {t('profile.stats.emptyDesc')}
          </p>
        </div>
      ) : null}
    </div>
  );
}
