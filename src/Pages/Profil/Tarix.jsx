export default function Tarix({ logs = [] }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="h-64 rounded-xl border border-dashed border-slate-300 dark:border-white/10 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-slate-500/10 text-slate-400 flex items-center justify-center mb-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Amallar tarixi mavjud emas
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mt-1">
          Platformada amalga oshirgan barcha harakatlaringiz shu yerda saqlanadi.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2 animate-fadeIn">
      {logs.map((log, idx) => (
        <div
          key={idx}
          className="p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex items-center justify-between text-xs"
        >
          <span className="text-slate-800 dark:text-slate-200 font-medium">{log.action}</span>
          <span className="text-slate-400 font-mono text-[11px]">{log.date}</span>
        </div>
      ))}
    </div>
  );
}