export default function Tarix({ logs = [] }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="flex h-64 animate-fadeIn flex-col items-center justify-center rounded-xl border border-dashed border-hairline-strong p-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-hairline text-ember">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-sm font-semibold text-ink">Sessiyalar tarixi mavjud emas</h4>
        <p className="mt-1 max-w-xs text-xs leading-5 text-muted">
          Yakunlangan test sessiyalaringiz shu yerda saqlanadi.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn space-y-2">
      {logs.map((log, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between rounded-lg border border-hairline bg-paper p-3 text-xs"
        >
          <span className="font-medium text-ink">{log.action}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">{log.date}</span>
        </div>
      ))}
    </div>
  );
}
