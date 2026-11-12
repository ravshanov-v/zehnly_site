import { useState } from 'react';
import { useTheme } from '../../context/useTheme.js';

export default function Sozlamalar() {
  const { isDark, toggleTheme } = useTheme();

  const [notifications, setNotifications] = useState(() => {
    if (!('Notification' in window)) return false
    return (
      localStorage.getItem('zehnly_notifications') === 'true' &&
      Notification.permission === 'granted'
    )
  });

  const toggleNotifications = async () => {
    if (notifications) {
      setNotifications(false);
      localStorage.setItem('zehnly_notifications', 'false');
      return;
    }

    if (!('Notification' in window)) return;

    let permission = Notification.permission;
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }

    const enabled = permission === 'granted';
    setNotifications(enabled);
    localStorage.setItem('zehnly_notifications', String(enabled));
  };

  return (
    <div className="animate-fadeIn space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-hairline bg-paper p-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
            {isDark ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">
              {isDark ? 'Qorong‘u rejim' : 'Yorug‘ rejim'}
            </h4>
            <p className="text-xs text-muted">
              {isDark ? 'Tungi interfeys faol' : 'Kunduzgi yorug‘ interfeys faol'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          role="switch"
          aria-checked={isDark}
          aria-label="Qorong‘u rejim"
          className={`relative h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 ${
            isDark ? 'bg-ember' : 'bg-ink/25'
          }`}
        >
          <span
            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-hairline bg-paper p-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt/10 text-cobalt">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">Tizim bildirishnomalari</h4>
            <p className="text-xs text-muted">
              {!('Notification' in window)
                ? 'Brauzeringiz bildirishnomalarni qo‘llab-quvvatlamaydi'
                : 'Sessiya yakunida brauzer bildirishnomasi yuboriladi'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleNotifications}
          role="switch"
          aria-checked={notifications}
          aria-label="Tizim bildirishnomalari"
          className={`relative h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 ${
            notifications ? 'bg-ember' : 'bg-ink/25'
          }`}
        >
          <span
            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
              notifications ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
