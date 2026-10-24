export default function Statistika({ statsData }) {
  // Haqiqiy ma'lumotlar mavjud bo'lmasa 0 ko'rsatiladi
  const totalTests = statsData?.totalTests || 0;
  const accuracy = statsData?.accuracy || '0%';
  const xp = statsData?.xp || 0;
  const streak = statsData?.streak || 0;

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Yechilgan testlar
          </span>
          <div className="mt-1">
            <span className="text-xl font-bold font-mono text-cyan-600 dark:text-cyan-400">{totalTests} ta</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            O‘rtacha aniqlik
          </span>
          <div className="mt-1">
            <span className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">{accuracy}</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            To‘plangan ball (XP)
          </span>
          <div className="mt-1">
            <span className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400">{xp}</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Ketma-ketlik
          </span>
          <div className="mt-1">
            <span className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400">{streak} kun</span>
          </div>
        </div>
      </div>

      {/* Agar hali test yechilmagan bo'lsa haqiqiy samimiy chaqiriq */}
      {totalTests === 0 ? (
        <div className="p-8 rounded-xl border border-dashed border-slate-300 dark:border-white/10 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200">Faollik hali mavjud emas</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mt-1">
            Platformada birinchi testni topshiring va statistikangiz shu yerda shakllanadi.
          </p>
        </div>
      ) : null}
    </div>
  );
}