import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../Components/Logo.jsx'
import { ArrowRight, CheckMark } from '../../Components/Marks.jsx'
import { useAuthReady } from '../../hooks/useAuthReady.js'
import { useSession } from '../../hooks/useSession.js'
import { useToast } from '../../context/useToast.js'
import { updatePassword } from '../../utils/authStore.js'
import {
  getPasswordChecks,
  getPasswordStrength,
  passwordRules,
  validateConfirmPassword,
  validatePassword,
} from '../../utils/validation.js'

const STRENGTH_TONES = {
  negative: { bar: 'bg-negative', text: 'text-negative' },
  warning: { bar: 'bg-amber-500', text: 'text-amber-500' },
  positive: { bar: 'bg-positive', text: 'text-positive' },
  muted: { bar: 'bg-ink/10', text: 'text-muted' },
}

const fieldClass =
  'w-full rounded-lg border border-hairline bg-paper px-3.5 py-2.5 text-base text-ink outline-none transition-all placeholder:text-muted/60 focus:border-ember focus:ring-2 focus:ring-ember/15 sm:text-sm'

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

function Spinner() {
  return (
    <span className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute inset-0 animate-spin rounded-full border border-hairline border-t-ember" />
      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
    </span>
  )
}

export default function RecoverPassword() {
  const session = useSession()
  const authReady = useAuthReady()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const passwordValidation = validatePassword(password)
  const confirmValidation = validateConfirmPassword(password, confirmPassword)
  const checks = getPasswordChecks(password)
  const strength = getPasswordStrength(password)
  const tone = STRENGTH_TONES[strength.tone] ?? STRENGTH_TONES.muted

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Parolni tiklash — Zehnly"

    return () => {
      document.title = previousTitle
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (pending) return

    setSubmitted(true)
    setError('')

    if (!passwordValidation.valid || !confirmValidation.valid) return

    setPending(true)

    try {
      const result = await updatePassword(password)

      if (!result.ok) {
        setError(result.message)
        return
      }

      setDone(true)
      showToast('Parolingiz yangilandi. Endi hisobingizga kirishingiz mumkin.', {
        title: 'Parol yangilandi',
        variant: 'success',
      })
    } catch {
      setError("Kutilmagan xatolik yuz berdi. Iltimos, qayta urinib ko'ring")
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-paper px-4 py-10 text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_68%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.16),transparent_68%)] blur-3xl" />
        <div className="dot-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,black,transparent_80%)]" />
      </div>

      <Link to="/" aria-label="Zehnly bosh sahifa" className="relative z-10 mb-6">
        <Logo size="lg" />
      </Link>

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-hairline bg-raised p-6 shadow-[var(--shadow-lift)] sm:p-8">
        {!authReady ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <Spinner />
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
              Tekshirilmoqda
            </p>
          </div>
        ) : !session ? (
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-negative/25 bg-negative/[0.06] text-negative">
              <AlertIcon />
            </span>
            <h1 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
              Havola yaroqsiz
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted">
              Parolni tiklash havolasi muddati tugagan yoki allaqachon ishlatilgan. Yangi havola
              olish uchun saytga qaytib, &ldquo;Parolni unutdingizmi?&rdquo; bo&apos;limidan qayta
              urinib ko&apos;ring.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Bosh sahifaga qaytish
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : done ? (
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-positive/10 text-positive">
              <CheckMark className="h-5 w-5" />
            </span>
            <h1 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
              Parol yangilandi
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted">
              Endi yangi parolingiz bilan bemalol davom etishingiz mumkin.
            </p>
            <button
              type="button"
              onClick={() => navigate('/', { replace: true })}
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Davom etish
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Hisob xavfsizligi
            </span>
            <h1 className="mt-3 font-display text-[1.9rem] font-semibold leading-none tracking-[-0.04em] text-ink">
              Yangi parol
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted">
              <span className="font-medium text-ink">{session.email}</span> uchun yangi parol
              o&apos;rnating.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
                  Yangi parol
                </span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                    if (error) setError('')
                  }}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className={fieldClass}
                />

                {password && (
                  <div aria-live="polite" className="mt-0.5">
                    <div className="flex items-center justify-between gap-3 text-[10px]">
                      <span className="font-mono uppercase tracking-[0.14em] text-muted">
                        Parol kuchliligi
                      </span>
                      <span className={`font-semibold ${tone.text}`}>{strength.label}</span>
                    </div>
                    <div className="mt-1.5 flex gap-1" aria-hidden="true">
                      {[1, 2, 3].map((level) => (
                        <span
                          key={level}
                          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                            level <= strength.score ? tone.bar : 'bg-ink/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {submitted && !passwordValidation.valid && (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-negative">
                    <AlertIcon />
                    {passwordValidation.message}
                  </span>
                )}

                <ul className="mt-0.5 grid grid-cols-1 gap-1.5 text-xs sm:grid-cols-2 sm:gap-1">
                  {passwordRules.map((rule) => (
                    <li
                      key={rule.key}
                      className={`flex items-center gap-1.5 ${
                        checks[rule.key] ? 'text-positive' : 'text-muted'
                      }`}
                    >
                      <CheckMark
                        className={`h-3.5 w-3.5 ${
                          checks[rule.key] ? 'text-positive' : 'text-muted opacity-50'
                        }`}
                      />
                      {rule.label}
                    </li>
                  ))}
                </ul>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
                  Parolni tasdiqlash
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value)
                    if (error) setError('')
                  }}
                  placeholder="Parolni qayta kiriting"
                  autoComplete="new-password"
                  className={fieldClass}
                />
                {submitted && !confirmValidation.valid && (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-negative">
                    <AlertIcon />
                    {confirmValidation.message}
                  </span>
                )}
              </label>

              {error && (
                <p
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-negative/25 bg-negative/10 px-3 py-2 text-sm text-negative"
                >
                  <AlertIcon />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ember px-5 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-px hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? 'Yangilanmoqda...' : 'Parolni yangilash'}
                {!pending && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </>
        )}
      </div>

      <Link
        to="/"
        className="relative z-10 mt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
      >
        Zehnly · bosh sahifa
      </Link>
    </div>
  )
}
