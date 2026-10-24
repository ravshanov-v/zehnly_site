export default function Sevimlilarim({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div className="h-64 rounded-xl border border-dashed border-slate-300 dark:border-white/10 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mb-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Sevimlilar ro‘yxati bo‘sh
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mt-1">
          O‘zingizga ma’qul kelgan o‘quv markazlari yoki testlarni saqlab qo‘ying.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5 animate-fadeIn">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200">{item.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}