import ProfilNav from './profilNav';

export default function ProfilLayout({ isOpen, onClose, activeTab, setActiveTab, user, onLogout, children }) {
  if (!isOpen) return null;

  const displayName = user?.user_metadata?.full_name || user?.name || user?.email?.split('@')[0] || "Foydalanuvchi";
  const email = user?.email || "";
  const firstLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
      {/* Fon qatlami */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-md transition-all duration-300"
      />

      {/* ASOSIY MODAL: YORUG' VA QORONG'U REJIM UYG'UNLIGI */}
      <div className="relative w-full max-w-4xl h-[620px] max-h-[92vh] rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-[#0c1324]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col md:flex-row overflow-hidden text-slate-800 dark:text-slate-200 transition-colors duration-300">
        
        {/* Yengil fon aurosi */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-indigo-500/15 blur-3xl pointer-events-none" />

        {/* CHAP PANEL */}
        <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10 p-5 flex flex-col justify-between relative z-10 bg-slate-50/50 dark:bg-white/[0.02]">
          <div>
            {/* Avatar va ism */}
            <div className="flex items-center gap-3.5 pb-5 border-b border-slate-200 dark:border-white/10">
              <div className="relative group">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {firstLetter}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </div>

              <div className="overflow-hidden">
                <h3 className="font-semibold text-slate-900 dark:text-white truncate text-base">
                  {displayName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate" title={email}>
                  {email}
                </p>
              </div>
            </div>

            {/* Navigatsiya */}
            <div className="mt-5">
              <ProfilNav activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>

          {/* Chiqish */}
          <button
            type="button"
            onClick={onLogout}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-rose-500/20 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Tizimdan chiqish</span>
          </button>
        </div>

        {/* O'NG PANEL */}
        <div className="flex-1 p-6 overflow-y-auto relative z-10 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              {activeTab === 'malumotlarim' && "Mening ma'lumotlarim"}
              {activeTab === 'statistika' && "Faollik va Statistika"}
              {activeTab === 'sevimlilar' && "Sevimlilar ro'yxati"}
              {activeTab === 'xatlar' && "Xabarnomalar"}
              {activeTab === 'tarix' && "Amallar tarixi"}
              {activeTab === 'sozlamalar' && "Tizim sozlamalari"}
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}