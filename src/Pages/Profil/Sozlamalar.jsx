import { useState } from 'react';
import { useTheme } from '../../context/useTheme.js';

export default function Sozlamalar() {
  // Saytning yagona umumiy rejimidan foydalanamiz
  const { isDark, toggleTheme } = useTheme();

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem('zehnly_notifications') === 'true';
  });

  const toggleNotifications = async () => {
    const nextState = !notifications;
    setNotifications(nextState);
    localStorage.setItem('zehnly_notifications', String(nextState));

    if (nextState && 'Notification' in window && Notification.permission !== 'granted') {
      await Notification.requestPermission();
    }
  };

  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* 1. TIZIM REJIMI BOSHQARUVI (BUTUN SAYT BILAN BIRGA O'ZGARADI) */}
      <div className="p-4 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-cyan-600 dark:text-cyan-400">
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
              {isDark ? 'Qorong‘u rejim' : 'Yorug‘ rejim'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isDark ? 'Tungi interfeys faol' : 'Kunduzgi yorug‘ interfeys faol'}
            </p>
          </div>
        </div>

        {/* Butun sayt rejimini o'zgartiruvchi Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          role="switch"
          aria-checked={!isDark}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
            !isDark ? 'bg-cyan-500' : 'bg-slate-700'
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 shadow-md ${
              !isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* 2. BILDIRISHNOMALAR */}
      <div className="p-4 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-indigo-600 dark:text-indigo-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-white">Tizim bildirishnomalari</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Yangi testlar va natijalar haqida xabar berish</p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleNotifications}
          role="switch"
          aria-checked={notifications}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
            notifications ? 'bg-indigo-500' : 'bg-slate-700'
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 shadow-md ${
              notifications ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}