import { useEffect, useRef, useState } from 'react'
import Logo from '../Logo.jsx'
import { CheckMark } from '../Marks.jsx'
import { getLastEmail, loginUser, registerUser } from '../../utils/authStore.js'
import { mergeGuestFavorites } from '../../utils/favorites.js'
import { mergeGuestHistory } from '../../utils/quizHistory.js'
import {
  MIN_PASSWORD_LENGTH,
  getPasswordChecks,
  normalizeEmail,
  passwordRules,
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validation.js'

function fieldClass(hasError) {
  return [
    'w-full rounded-lg border bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-all placeholder:text-muted/60 focus:ring-2',
    hasError
      ? 'border-negative/60 focus:border-negative focus:ring-negative/15'
      : 'border-hairline focus:border-ember focus:ring-ember/15',
  ].join(' ')
}

const labelClass = 'font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted'

const ctaClass =
  'flex w-full items-center justify-center gap-2 rounded-xl bg-ember py-3 text-sm font-semibold text-ember-ink shadow-[0_18px_40px_-24px_var(--ember)] transition-all hover:-translate-y-px hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/50 focus-visible:ring-offset-2 focus-visible:ring-offset-raised active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60'

function CheckIcon({ passed }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={passed ? 'h-3.5 w-3.5 text-positive' : 'h-3.5 w-3.5 text-muted opacity-50'}
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.79 6.8-6.79a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function EyeIcon({ hidden }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      {hidden ? (
        <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      ) : (
        <>
          <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </>
      )}
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const perks = ['Interaktiv test arenasi', 'Natijalar tarixi va analitika', 'Sevimli maskanlar']

export default function AuthModal({ onClose }) {
  const dialogRef = useRef(null)
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState(() => ({ name: '', email: getLastEmail(), password: '' }))
  const [touched, setTouched] = useState({ name: false, email: false, password: false })
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const [pending, setPending] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isLogin = mode === 'login'
  const emailValidation = validateEmail(form.email)
  const passwordValidation = validatePassword(form.password)
  const nameValidation = validateName(form.name)
  const passwordChecks = getPasswordChecks(form.password)

  const showEmailError = (touched.email || submitted) && !emailValidation.valid
  const showPasswordError = (touched.password || submitted) && !passwordValidation.valid
  const showNameError = (touched.name || submitted) && !nameValidation.valid

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (serverError) setServerError('')
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const switchMode = () => {
    setMode(isLogin ? 'register' : 'login')
    setSubmitted(false)
    setServerError('')
    setTouched({ name: false, email: false, password: false })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(true)
    setServerError('')

    if (!emailValidation.valid || !passwordValidation.valid) return
    if (!isLogin && !nameValidation.valid) return

    setPending(true)

    const email = emailValidation.email ?? normalizeEmail(form.email)
    const name = nameValidation.name ?? form.name.trim()
    const result = isLogin
      ? await loginUser(email, form.password)
      : await registerUser(email, name, form.password)

    setPending(false)

    if (!result.ok) {
      setServerError(result.message)
      return
    }

    mergeGuestHistory(email)
    mergeGuestFavorites(email)
    onClose()
  }

  const tabClass = (active) =>
    [
      'flex items-center justify-center rounded-lg px-3 py-2 text-sm transition-colors duration-150',
      active ? 'bg-ink font-semibold text-paper' : 'text-muted hover:text-ink',
    ].join(' ')

  return (
    <div
      className="zehnly-fade-in scrim fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        tabIndex={-1}
        className="zehnly-scale-in relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-hairline bg-raised text-ink shadow-[var(--shadow-lift)] outline-none focus:outline-none md:grid-cols-[0.92fr_1.08fr]"
      >
        <aside className="relative hidden flex-col justify-between overflow-hidden border-hairline bg-sunken p-8 text-ink md:flex md:border-r">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_68%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent_85%)]"
          />

          <div className="relative">
            <Logo size="md" />
          </div>

          <div className="relative">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Zehnly OS
            </span>
            <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.04em] text-ink">
              Bilimni <span className="text-aurora">tizimga</span> aylantiring.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Hisobingiz natijalar, tarix va sevimlilarni shu brauzerda bir joyda saqlaydi.
            </p>

            <ul className="mt-7 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <CheckMark className="h-4 w-4 text-ember" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <p className="relative font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
            Toshkent · 2026
          </p>
        </aside>

        <div className="relative p-6 sm:p-8">
          <span
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent"
          />

          <div className="flex items-center justify-between gap-4">
            <div className="md:hidden">
              <Logo size="sm" />
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-muted md:inline">
              Hisob
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Yopish"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline text-muted transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] hover:text-ink"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>

          <div
            role="tablist"
            aria-label="Kirish yoki ro'yxatdan o'tish"
            className="mt-5 grid grid-cols-2 gap-1 rounded-xl border border-hairline bg-paper p-1 text-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={isLogin}
              onClick={() => {
                if (!isLogin) switchMode()
              }}
              className={tabClass(isLogin)}
            >
              Kirish
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!isLogin}
              onClick={() => {
                if (isLogin) switchMode()
              }}
              className={tabClass(!isLogin)}
            >
              Ro&apos;yxatdan o&apos;tish
            </button>
          </div>

          <div className="mt-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              {isLogin ? 'Xush kelibsiz' : 'Yangi hisob'}
            </span>
            <h2
              id="auth-modal-title"
              className="mt-2 font-display text-[1.9rem] font-semibold leading-none tracking-[-0.04em] text-ink"
            >
              {isLogin ? 'Tizimga kirish' : "Ro'yxatdan o'tish"}
            </h2>
            <p className="mt-2 min-h-10 text-sm leading-6 text-muted sm:min-h-0">
              {isLogin
                ? 'Hisobingizga kirish uchun maʼlumotlarni kiriting'
                : 'Yangi hisob yaratish uchun maʼlumotlarni kiriting'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4" noValidate>
            {isLogin ? (
              <div className="flex items-center gap-2.5 rounded-xl border border-hairline bg-paper px-3.5 py-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-ember"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs leading-5 text-muted">
                  Natijalar, sevimlilar va statistikangiz shu brauzerda saqlanadi
                </p>
              </div>
            ) : (
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Ism</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ismingizni kiriting"
                  autoComplete="name"
                  aria-invalid={showNameError}
                  aria-describedby={showNameError ? 'name-error' : undefined}
                  className={fieldClass(showNameError)}
                />
                {showNameError && (
                  <span id="name-error" className="flex items-center gap-1.5 text-xs font-medium text-negative">
                    <AlertIcon />
                    {nameValidation.message}
                  </span>
                )}
              </label>
            )}

            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="ism@example.com"
                autoComplete="email"
                inputMode="email"
                autoCapitalize="none"
                spellCheck="false"
                aria-invalid={showEmailError}
                aria-describedby={showEmailError ? 'email-error' : undefined}
                className={fieldClass(showEmailError)}
              />
              {showEmailError && (
                <span id="email-error" className="flex items-center gap-1.5 text-xs font-medium text-negative">
                  <AlertIcon />
                  {emailValidation.message}
                </span>
              )}
            </label>

            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Parol</span>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  aria-invalid={showPasswordError}
                  aria-describedby={['password-rules', showPasswordError ? 'password-error' : '']
                    .filter(Boolean)
                    .join(' ')}
                  className={`${fieldClass(showPasswordError)} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Parolni yashirish' : "Parolni ko'rsatish"}
                  title={showPassword ? 'Parolni yashirish' : "Parolni ko'rsatish"}
                  className="absolute inset-y-0 right-1.5 my-auto flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
                >
                  <EyeIcon hidden={showPassword} />
                </button>
              </div>
              {showPasswordError && (
                <span id="password-error" className="flex items-center gap-1.5 text-xs font-medium text-negative">
                  <AlertIcon />
                  {passwordValidation.message}
                </span>
              )}

              <ul id="password-rules" className="mt-0.5 grid grid-cols-1 gap-1.5 text-xs sm:grid-cols-2 sm:gap-1">
                {passwordRules.map((rule) => (
                  <li
                    key={rule.key}
                    className={`flex items-center gap-1.5 ${
                      passwordChecks[rule.key] ? 'text-positive' : 'text-muted'
                    }`}
                  >
                    <CheckIcon passed={passwordChecks[rule.key]} />
                    {rule.label}
                  </li>
                ))}
              </ul>
              <span className="sr-only">
                Parol kamida {MIN_PASSWORD_LENGTH} belgidan iborat bo'lib, harf, raqam va belgi
                ichishi kerak
              </span>
            </label>

            {serverError && (
              <p
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-negative/25 bg-negative/10 px-3 py-2 text-sm text-negative"
              >
                <AlertIcon />
                {serverError}
              </p>
            )}

            <button type="submit" disabled={pending} className={`${ctaClass} mt-1`}>
              {pending && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M12 2a10 10 0 0 1 10 10h-3A7 7 0 0 0 12 5V2Z"
                  />
                </svg>
              )}
              {pending ? 'Tekshirilmoqda...' : isLogin ? 'Kirish' : "Ro'yxatdan o'tish"}
            </button>

            <p className="text-center text-[11px] leading-5 text-muted">
              Hisob ma’lumotlari faqat shu qurilmada saqlanadi.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
