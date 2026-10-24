export default function Malumotlarim({ user }) {
  // Sanani chiroyli o'zbekcha formatga o'tkazish
  const formatDate = (dateString) => {
    if (!dateString) return "Noma'lum";
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('uz-UZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Foydalanuvchi ismi va uning qisqartmasi
  const displayName = user?.user_metadata?.full_name || user?.name || user?.email?.split('@')[0] || "Foydalanuvchi";
  const email = user?.email || "Ko'rsatilmagan";
  const userId = user?.id ? `#${user.id.slice(0, 8).toUpperCase()}` : "#ZH-00001";
  const createdAt = formatDate(user?.created_at || user?.metadata?.creationTime);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Asosiy Rezident Banner */}
      <div className="relative p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-r from-cyan-50 via-indigo-50 to-transparent dark:from-cyan-950/25 dark:via-indigo-950/20 backdrop-blur-md overflow-hidden transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              Zehnly Rezidenti
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {displayName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {user?.role ? user.role : 'Foydalanuvchi'}
            </p>
          </div>
          <div className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
            <span>FAOL HISOB</span>
          </div>
        </div>
      </div>

      {/* Ma'lumot katakchalari (Faqat haqiqiy qiymatlar) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] transition-colors">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Elektron pochta
          </span>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1 truncate select-all" title={email}>
            {email}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] transition-colors">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Ro‘yxatdan o‘tgan sana
          </span>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">
            {createdAt}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] transition-colors">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Foydalanuvchi ID
          </span>
          <p className="text-sm font-mono text-cyan-600 dark:text-cyan-300 mt-1 select-all">
            {userId}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] transition-colors">
          <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Elektron pochta holati
          </span>
          <p className="text-sm font-medium mt-1 flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            {user?.email_confirmed_at || user?.emailVerified ? (
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tasdiqlangan
              </span>
            ) : (
              <span className="text-amber-600 dark:text-amber-400">Tasdiqlanmagan</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
