import { useState } from 'react';
import { CheckMark } from '../../Components/Marks.jsx';
import { useTheme } from '../../context/useTheme.js';
import { useToast } from '../../context/useToast.js';
import { useLanguage } from '../../context/useLanguage.js';
import { updatePassword } from '../../utils/authStore.js';
import {
  getPasswordChecks,
  getPasswordRules,
  getPasswordStrength,
  validateConfirmPassword,
  validatePassword,
} from '../../utils/validation.js';

const STRENGTH_TONES = {
  negative: { bar: 'bg-negative', text: 'text-negative' },
  warning: { bar: 'bg-amber-500', text: 'text-amber-500' },
  positive: { bar: 'bg-positive', text: 'text-positive' },
  muted: { bar: 'bg-ink/10', text: 'text-muted' },
};

const fieldClass =
  'w-full rounded-lg border bg-raised px-3.5 py-2.5 text-base text-ink outline-none transition-all placeholder:text-muted/60 focus:ring-2 sm:text-sm';

const NOTIFICATIONS_KEY = 'kredorium_notifications';

function readNotificationsPreference() {
  try {
    return localStorage.getItem(NOTIFICATIONS_KEY) === 'true';
  } catch {
    return false;
  }
}

function writeNotificationsPreference(enabled) {
  try {
    localStorage.setItem(NOTIFICATIONS_KEY, String(enabled));
  } catch {
    // xususiy rejimda yoki storage to'lgan holatda jim o'tamiz
  }
}

function inputClass(hasError) {
  return [
    fieldClass,
    hasError
      ? 'border-negative/60 focus:border-negative focus:ring-negative/15'
      : 'border-hairline focus:border-ember focus:ring-ember/15',
  ].join(' ');
}

export default function Sozlamalar() {
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const { language, setLanguage, t, languages } = useLanguage();

  const [notifications, setNotifications] = useState(() => {
    if (!('Notification' in window)) return false

    return readNotificationsPreference() && Notification.permission === 'granted'
  });

  const toggleNotifications = async () => {
    if (notifications) {
      setNotifications(false);
      writeNotificationsPreference(false);
      return;
    }

    if (!('Notification' in window)) return;

    let permission = Notification.permission;
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }

    const enabled = permission === 'granted';
    setNotifications(enabled);
    writeNotificationsPreference(enabled);
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordNotice, setPasswordNotice] = useState('');

  const passwordValidation = validatePassword(password, t);
  const confirmValidation = validateConfirmPassword(password, confirmPassword, t);
  const passwordChecks = getPasswordChecks(password);
  const passwordStrength = getPasswordStrength(password, t);
  const passwordRules = getPasswordRules(t);
  const strengthTone = STRENGTH_TONES[passwordStrength.tone] ?? STRENGTH_TONES.muted;
  const authErrorMessage = (result) => t(`auth.errors.${result?.code || 'UNKNOWN'}`);

  const clearPasswordFeedback = () => {
    if (passwordError) setPasswordError('');
    if (passwordNotice) setPasswordNotice('');
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    if (pending) return;

    setSubmitted(true);
    setPasswordError('');
    setPasswordNotice('');

    if (!passwordValidation.valid || !confirmValidation.valid) return;

    setPending(true);

    try {
      const result = await updatePassword(password);

      if (!result?.ok) {
        setPasswordError(
          result?.code ? authErrorMessage(result) : t('profile.settings.updateFailed')
        );
        return;
      }

      setPassword('');
      setConfirmPassword('');
      setSubmitted(false);
      setPasswordNotice(t('profile.settings.updatedNotice'));
      showToast(t('profile.settings.updatedToast'), {
        title: t('profile.settings.updatedToastTitle'),
        variant: 'success',
      });
    } catch {
      setPasswordError(t('profile.settings.unexpectedError'));
    } finally {
      setPending(false);
    }
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
              {isDark ? t('profile.settings.darkMode') : t('profile.settings.lightMode')}
            </h4>
            <p className="text-xs text-muted">
              {isDark ? t('profile.settings.darkActive') : t('profile.settings.lightActive')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          role="switch"
          aria-checked={isDark}
          aria-label={t('profile.settings.themeAria')}
          className={`relative h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 ${
            isDark ? 'bg-ember' : 'bg-ink/25'
          }`}
        >
          <span
            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
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
            <h4 className="text-sm font-semibold text-ink">
              {t('profile.settings.notificationsTitle')}
            </h4>
            <p className="text-xs text-muted">
              {!('Notification' in window)
                ? t('profile.settings.notificationsUnsupported')
                : t('profile.settings.notificationsHint')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleNotifications}
          role="switch"
          aria-checked={notifications}
          aria-label={t('profile.settings.notificationsAria')}
          className={`relative h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 ${
            notifications ? 'bg-ember' : 'bg-ink/25'
          }`}
        >
          <span
            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
              notifications ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      <div className="rounded-xl border border-hairline bg-paper p-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt/10 text-cobalt">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">
              {t('profile.settings.languageTitle')}
            </h4>
            <p className="text-xs text-muted">
              {t('profile.settings.languageDesc')}
            </p>
          </div>
        </div>

        <div
          role="group"
          aria-label={t('profile.settings.languageDesc')}
          className="mt-4 grid grid-cols-2 gap-2"
        >
          {languages.map((item) => {
            const selected = item.code === language;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                aria-pressed={selected}
                className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                  selected
                    ? 'border-ember/40 bg-ember/[0.06] text-ink'
                    : 'border-hairline text-muted hover:border-hairline-strong hover:bg-ink/[0.03] hover:text-ink'
                }`}
              >
                <span className="flex min-w-0 flex-col">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.08em]">
                    {item.label}
                  </span>
                  <span className="truncate text-xs">{item.name}</span>
                </span>
                {selected && (
                  <span className="flex shrink-0 items-center gap-1 text-ember">
                    <CheckMark className="h-3.5 w-3.5" />
                    <span className="sr-only">{t('profile.settings.languageSelected')}</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-hairline bg-paper p-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M16 11V8a4 4 0 00-8 0v3m-1 0h10a1 1 0 011 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1v-7a1 1 0 011-1zm5 4v2" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">
              {t('profile.settings.changePasswordTitle')}
            </h4>
            <p className="text-xs text-muted">
              {t('profile.settings.changePasswordDesc')}
            </p>
          </div>
        </div>

        <form onSubmit={handlePasswordSubmit} className="mt-4 flex flex-col gap-3" noValidate>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profile-new-password"
              className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted"
            >
              {t('profile.settings.newPassword')}
            </label>
            <input
              id="profile-new-password"
              type="password"
              name="newPassword"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                clearPasswordFeedback();
              }}
              placeholder="••••••••"
              autoComplete="new-password"
              aria-invalid={submitted && !passwordValidation.valid}
              aria-describedby="profile-password-rules"
              className={inputClass(submitted && !passwordValidation.valid)}
            />

            {password && (
              <div aria-live="polite">
                <div className="flex items-center justify-between gap-3 text-[10px]">
                  <span className="font-mono uppercase tracking-[0.14em] text-muted">
                    {t('profile.settings.passwordStrength')}
                  </span>
                  <span className={`font-semibold ${strengthTone.text}`}>
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="mt-1.5 flex gap-1" aria-hidden="true">
                  {[1, 2, 3].map((level) => (
                    <span
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        level <= passwordStrength.score ? strengthTone.bar : 'bg-ink/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {submitted && !passwordValidation.valid && (
              <span className="text-xs font-medium text-negative">
                {passwordValidation.message}
              </span>
            )}

            <ul
              id="profile-password-rules"
              className="mt-0.5 grid grid-cols-1 gap-1 text-[11px] sm:grid-cols-2"
            >
              {passwordRules.map((rule) => (
                <li
                  key={rule.key}
                  className={`flex items-center gap-1.5 ${
                    passwordChecks[rule.key] ? 'text-positive' : 'text-muted'
                  }`}
                >
                  <CheckMark className="h-3 w-3" />
                  {rule.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profile-confirm-password"
              className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted"
            >
              {t('profile.settings.confirmNewPassword')}
            </label>
            <input
              id="profile-confirm-password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
                clearPasswordFeedback();
              }}
              placeholder={t('profile.settings.confirmPlaceholder')}
              autoComplete="new-password"
              aria-invalid={submitted && !confirmValidation.valid}
              className={inputClass(submitted && !confirmValidation.valid)}
            />
            {submitted && !confirmValidation.valid && (
              <span className="text-xs font-medium text-negative">
                {confirmValidation.message}
              </span>
            )}
          </div>

          {passwordError && (
            <p
              role="alert"
              className="rounded-lg border border-negative/25 bg-negative/10 px-3 py-2 text-xs text-negative"
            >
              {passwordError}
            </p>
          )}

          {passwordNotice && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-lg border border-positive/25 bg-positive/10 px-3 py-2 text-xs text-positive"
            >
              {passwordNotice}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            aria-busy={pending}
            className="mt-1 flex h-10 w-full items-center justify-center rounded-lg bg-ember px-4 text-xs font-semibold text-ember-ink transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? t('profile.settings.updating') : t('profile.settings.update')}
          </button>
        </form>
      </div>
    </div>
  );
}
