import { useEffect, useRef, useState } from 'react'
import Logo from '../Logo.jsx'
import { CheckMark } from '../Marks.jsx'
import { getLastEmail, isRemoteAuth, loginUser, registerUser, resetPassword } from '../../utils/authStore.js'
import { mergeGuestFavorites } from '../../utils/favorites.js'
import { mergeGuestHistory } from '../../utils/quizHistory.js'
import { useToast } from '../../context/useToast.js'
import {
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  getPasswordChecks,
  getPasswordStrength,
  normalizeEmail,
  passwordRules,
  validateConfirmPassword,
  validateEmail,
  validateLoginPassword,
  validateName,
  validatePassword,
} from '../../utils/validation.js'

function fieldClass(hasError) {
  return [
    'w-full rounded-lg border bg-paper px-3.5 py-2.5 text-base text-ink outline-none transition-all placeholder:text-muted/60 focus:ring-2 sm:text-sm',
    hasError
      ? 'border-negative/60 focus:border-negative focus:ring-negative/15'
      : 'border-hairline focus:border-ember focus:ring-ember/15',
  ].join(' ')
}

const labelClass = 'font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted'

const ctaClass =
  'flex w-full items-center justify-center gap-2 rounded-xl bg-ember py-3 text-sm font-semibold text-ember-ink transition-all hover:-translate-y-px hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/50 focus-visible:ring-offset-2 focus-visible:ring-offset-raised active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

const STRENGTH_TONES = {
  negative: { bar: 'bg-negative', text: 'text-negative' },
  warning: { bar: 'bg-amber-500', text: 'text-amber-500' },
  positive: { bar: 'bg-positive', text: 'text-positive' },
  muted: { bar: 'bg-ink/10', text: 'text-muted' },
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

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

function PasswordVisibilityButton({ visible, onToggle, label }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={visible ? `${label}ni yashirish` : `${label}ni ko'rsatish`}
      title={visible ? `${label}ni yashirish` : `${label}ni ko'rsatish`}
      className="absolute inset-y-0 right-1.5 my-auto flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
    >
      <EyeIcon hidden={visible} />
    </button>
  )
}

function PasswordStrength({ strength }) {
  const tone = STRENGTH_TONES[strength.tone] ?? STRENGTH_TONES.muted

  return (
    <div aria-live="polite" className="mt-0.5">
      <div className="flex items-center justify-between gap-3 text-[10px]">
        <span className="font-mono uppercase tracking-[0.14em] text-muted">Parol kuchliligi</span>
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
  )
}

const perks = [
  'Interaktiv test arenasi',
  'Qurilmalararo sinxron natijalar',
  'Sevimli maskanlar va progress',
]

export default function AuthModal({ onClose }) {
  const dialogRef = useRef(null)
  const panelRef = useRef(null)
  const { showToast } = useToast()
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState(() => ({
    name: '',
    email: getLastEmail(),
    password: '',
    confirmPassword: '',
    remember: true,
  }))
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const [pending, setPending] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [resetStep, setResetStep] = useState('email')
  const [resetEmail, setResetEmail] = useState('')
  const [resetPasswordValue, setResetPasswordValue] = useState('')
  const [resetConfirmValue, setResetConfirmValue] = useState('')
  const [resetTouched, setResetTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  })
  const [resetSubmitted, setResetSubmitted] = useState(false)
  const [resetError, setResetError] = useState('')
  const [showResetPassword, setShowResetPassword] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

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
  const isRegister = mode === 'register'
  const isReset = mode === 'reset'
  const emailValidation = validateEmail(form.email)
  const nameValidation = validateName(form.name)
  const passwordValidation = isLogin
    ? validateLoginPassword(form.password)
    : validatePassword(form.password)
  const confirmValidation = validateConfirmPassword(form.password, form.confirmPassword)
  const passwordChecks = getPasswordChecks(form.password)
  const passwordStrength = getPasswordStrength(form.password)

  const resetEmailValidation = validateEmail(resetEmail)
  const resetPasswordValidation = validatePassword(resetPasswordValue)
  const resetConfirmValidation = validateConfirmPassword(
    resetPasswordValue,
    resetConfirmValue
  )
  const resetPasswordChecks = getPasswordChecks(resetPasswordValue)
  const resetPasswordStrength = getPasswordStrength(resetPasswordValue)

  const isTouched = (key) => touched[key] || submitted

  const showNameError = isRegister && isTouched('name') && !nameValidation.valid
  const showEmailError = isTouched('email') && !emailValidation.valid
  const showPasswordError = isTouched('password') && !passwordValidation.valid
  const showConfirmError =
    isRegister && isTouched('confirmPassword') && !confirmValidation.valid
  const emailFieldInvalid = showEmailError || (isLogin && invalidCredentials)
  const passwordFieldInvalid = showPasswordError || (isLogin && invalidCredentials)

  const resetEmailInvalid =
    (resetTouched.email || resetSubmitted) && !resetEmailValidation.valid
  const showResetEmailError = resetEmailInvalid || Boolean(resetError)
  const showResetPasswordError =
    (resetTouched.password || resetSubmitted) && !resetPasswordValidation.valid
  const showResetConfirmError =
    (resetTouched.confirmPassword || resetSubmitted) && !resetConfirmValidation.valid

  const emailErrorMessage = emailValidation.message

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (serverError) setServerError('')
    if (invalidCredentials) setInvalidCredentials(false)
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const scrollToPanelTop = () => {
    panelRef.current?.scrollTo({ top: 0 })
  }

  const clearFormFeedback = () => {
    setTouched({ name: false, email: false, password: false, confirmPassword: false })
    setSubmitted(false)
    setServerError('')
    setInvalidCredentials(false)
    setShowPassword(false)
    setShowConfirmPassword(false)
    scrollToPanelTop()
  }

  const clearResetFlow = () => {
    setResetStep('email')
    setResetEmail('')
    setResetPasswordValue('')
    setResetConfirmValue('')
    setResetTouched({ email: false, password: false, confirmPassword: false })
    setResetSubmitted(false)
    setResetError('')
    setShowResetPassword(false)
    setShowResetConfirm(false)
  }

  const goToLogin = (email) => {
    setMode('login')
    setForm((prev) => ({
      ...prev,
      email: email ?? prev.email,
      password: '',
      confirmPassword: '',
    }))
    clearResetFlow()
    clearFormFeedback()
  }

  const goToRegister = () => {
    setMode('register')
    setForm((prev) => ({ ...prev, password: '', confirmPassword: '' }))
    clearResetFlow()
    clearFormFeedback()
  }

  const switchMode = () => {
    if (mode === 'register') goToLogin()
    else goToRegister()
  }

  const openReset = () => {
    setMode('reset')
    setResetStep('email')
    setResetEmail(form.email.trim())
    setResetPasswordValue('')
    setResetConfirmValue('')
    setResetTouched({ email: false, password: false, confirmPassword: false })
    setResetSubmitted(false)
    setResetError('')
    setShowResetPassword(false)
    setShowResetConfirm(false)
    clearFormFeedback()
  }

  const editResetEmail = () => {
    setResetStep('email')
    setResetPasswordValue('')
    setResetConfirmValue('')
    setResetTouched({ email: false, password: false, confirmPassword: false })
    setResetSubmitted(false)
    setResetError('')
    setShowResetPassword(false)
    setShowResetConfirm(false)
    scrollToPanelTop()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (pending) return

    setSubmitted(true)
    setServerError('')
    setInvalidCredentials(false)

    if (!emailValidation.valid) return

    if (isLogin) {
      if (!passwordValidation.valid) return
    } else {
      if (!nameValidation.valid || !passwordValidation.valid || !confirmValidation.valid) return
    }

    setPending(true)

    try {
      const email = emailValidation.email ?? normalizeEmail(form.email)
      const authPromise = isLogin
        ? loginUser(email, form.password, { remember: form.remember })
        : registerUser(email, nameValidation.name, form.password, { remember: true })

      const [result] = await Promise.all([authPromise, wait(450)])

      if (!result.ok) {
        setPending(false)
        setServerError(result.message)
        if (result.code === 'INVALID_CREDENTIALS') setInvalidCredentials(true)
        return
      }

      mergeGuestHistory(email)
      mergeGuestFavorites(email)

      const displayName = (result.user?.name || email).trim()

      showToast(
        isLogin
          ? `Xush kelibsiz, ${displayName}!`
          : `Hisobingiz yaratildi. Xush kelibsiz, ${displayName}!`,
        {
          title: isLogin ? 'Tizimga muvaffaqiyatli kirdingiz' : "Ro'yxatdan o'tish yakunlandi",
          variant: 'success',
        }
      )

      setPending(false)
      onClose()
    } catch {
      setPending(false)
      setServerError("Kutilmagan xatolik yuz berdi. Iltimos, qayta urinib ko'ring")
    }
  }

  const handleResetChange = (event) => {
    const { name, value } = event.target

    if (name === 'email') setResetEmail(value)
    else if (name === 'password') setResetPasswordValue(value)
    else if (name === 'confirmPassword') setResetConfirmValue(value)

    if (resetError) setResetError('')
  }

  const handleResetBlur = (event) => {
    const { name } = event.target
    setResetTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleResetSubmit = async (event) => {
    event.preventDefault()
    if (pending) return

    if (resetStep === 'email') {
      setResetSubmitted(true)
      setResetError('')

      if (!resetEmailValidation.valid) return

      setPending(true)

      try {
        const [result] = await Promise.all([
          resetPassword(resetEmailValidation.email),
          wait(400),
        ])

        setPending(false)

        if (!result.ok) {
          setResetError(result.message)
          return
        }

        setResetEmail(resetEmailValidation.email)
        setResetSubmitted(false)
        setResetTouched({ email: false, password: false, confirmPassword: false })
        setShowResetPassword(false)
        setShowResetConfirm(false)

        if (isRemoteAuth) {
          setResetStep('sent')
          showToast('Parolni tiklash havolasi emailingizga yuborildi.', {
            title: 'Email yuborildi',
            variant: 'success',
          })
        } else {
          setResetStep('password')
        }

        scrollToPanelTop()
      } catch {
        setPending(false)
        setResetError("Kutilmagan xatolik yuz berdi. Iltimos, qayta urinib ko'ring")
      }

      return
    }

    setResetSubmitted(true)
    setResetError('')

    if (!resetPasswordValidation.valid || !resetConfirmValidation.valid) return

    setPending(true)

    try {
      const [result] = await Promise.all([
        resetPassword(resetEmail, resetPasswordValue),
        wait(450),
      ])

      setPending(false)

      if (!result.ok) {
        setResetError(result.message)
        return
      }

      const email = resetEmailValidation.email ?? normalizeEmail(resetEmail)
      goToLogin(email)
      showToast('Parolingiz yangilandi. Endi yangi parol bilan tizimga kiring.', {
        title: 'Parol muvaffaqiyatli tiklandi',
        variant: 'success',
      })
    } catch {
      setPending(false)
      setResetError("Kutilmagan xatolik yuz berdi. Iltimos, qayta urinib ko'ring")
    }
  }

  const tabClass = (active) =>
    [
      'flex items-center justify-center rounded-lg px-3 py-2 text-sm transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60',
      active ? 'bg-ink font-semibold text-paper' : 'text-muted hover:text-ink',
    ].join(' ')

  return (
    <div
      className="zehnly-fade-in scrim fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4"
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
        className="zehnly-scale-in relative grid h-[calc(100dvh_-_1.5rem)] w-full max-w-3xl overflow-hidden rounded-2xl border border-hairline bg-raised text-ink outline-none focus:outline-none sm:h-[min(92vh,760px)] md:grid-cols-[0.92fr_1.08fr]"
      >
        <aside className="relative hidden flex-col justify-between overflow-hidden border-hairline bg-sunken p-8 text-ink md:flex md:border-r">

          <div className="relative">
            <Logo size="md" />
          </div>

          <div className="relative">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Mushohada OS
            </span>
            <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.04em] text-ink">
              Bilimni <span className="text-ember">tizimga</span> aylantiring.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              {isRemoteAuth
                ? "Hisobingiz natijalar, tarix va sevimlilarni qurilmalararo sinxron saqlaydi."
                : 'Hisobingiz natijalar, tarix va sevimlilarni shu brauzerda bir joyda saqlaydi.'}
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

        <div ref={panelRef} className="relative flex min-h-0 flex-col overflow-y-auto overscroll-contain p-5 sm:p-8">
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
              aria-selected={!isRegister}
              disabled={pending}
              onClick={() => {
                if (!isLogin) goToLogin()
              }}
              className={tabClass(!isRegister)}
            >
              Kirish
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isRegister}
              disabled={pending}
              onClick={() => {
                if (!isRegister) goToRegister()
              }}
              className={tabClass(isRegister)}
            >
              Ro&apos;yxatdan o&apos;tish
            </button>
          </div>

          <div className="mt-5 sm:mt-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              {isLogin ? 'Xush kelibsiz' : isRegister ? 'Yangi hisob' : 'Hisobni tiklash'}
            </span>
            <h2
              id="auth-modal-title"
              className="mt-2 font-display text-[1.7rem] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[1.9rem]"
            >
              {isLogin ? 'Tizimga kirish' : isRegister ? "Ro'yxatdan o'tish" : 'Parolni tiklash'}
            </h2>
            <p className="mt-2 min-h-10 text-sm leading-6 text-muted sm:min-h-0">
              {isLogin
                ? 'Hisobingizga kirish uchun maʼlumotlarni kiriting'
                : isRegister
                  ? 'Yangi hisob yaratish uchun maʼlumotlarni kiriting'
                  : resetStep === 'sent'
                    ? 'Pochta qutingizga yuborilgan havolani bosing'
                    : resetStep === 'email'
                      ? 'Roʻyxatdan oʻtgan emailingizni kiriting'
                      : 'Akkauntingiz uchun yangi parol oʻrnating'}
            </p>
          </div>

          {isReset ? (
            <form
              key="reset"
              onSubmit={handleResetSubmit}
              className="zehnly-fade-in mt-5 flex flex-1 flex-col gap-4"
              noValidate
            >
              {resetStep === 'sent' ? (
                <div className="flex flex-col items-center rounded-xl border border-positive/25 bg-positive/[0.05] px-5 py-7 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-positive/10 text-positive">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Havola yuborildi
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                    <span className="font-medium text-ink">{resetEmail}</span> manziliga parolni
                    tiklash havolasini yubordik. Havolani bosib, yangi parol o&apos;rnating.
                  </p>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    Havola 60 daqiqa amal qiladi
                  </p>
                  <button
                    type="button"
                    onClick={editResetEmail}
                    className="mt-5 text-xs font-semibold text-ember transition-colors hover:text-cobalt hover:underline underline-offset-2"
                  >
                    Boshqa email kiritish
                  </button>
                </div>
              ) : resetStep === 'email' ? (
                <label className="flex flex-col gap-1.5">
                  <span className={labelClass}>Ro&apos;yxatdan o&apos;tgan email</span>
                  <input
                    type="email"
                    name="email"
                    value={resetEmail}
                    onChange={handleResetChange}
                    onBlur={handleResetBlur}
                    placeholder="ism@example.com"
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="none"
                    spellCheck="false"
                    aria-invalid={showResetEmailError}
                    aria-describedby={
                      [
                        showResetEmailError && resetEmailValidation.message
                          ? 'reset-email-error'
                          : '',
                        resetError ? 'reset-error' : '',
                      ]
                        .filter(Boolean)
                        .join(' ') || undefined
                    }
                    className={fieldClass(showResetEmailError)}
                  />

                  {showResetEmailError && resetEmailValidation.message && (
                    <span
                      id="reset-email-error"
                      className="flex items-center gap-1.5 text-xs font-medium text-negative"
                    >
                      <AlertIcon />
                      {resetEmailValidation.message}
                    </span>
                  )}

                  {resetError && (
                    <p
                      id="reset-error"
                      role="alert"
                      className="flex items-start gap-2 rounded-lg border border-negative/25 bg-negative/10 px-3 py-2 text-sm text-negative"
                    >
                      <AlertIcon />
                      {resetError}
                    </p>
                  )}

                  <span className="text-xs leading-5 text-muted">
                    {isRemoteAuth
                      ? "Emailingizga parolni tiklash havolasini yuboramiz."
                      : "Akkauntingizni tasdiqlash uchun ro'yxatdan o'tgan emailni kiriting."}
                  </span>
                </label>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-hairline bg-paper px-3.5 py-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-ember">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path d="M3 4a2 2 0 0 0-2 2v.161a.75.75 0 0 0 .3.6l8 6a1.25 1.25 0 0 0 1.4 0l8-6a.75.75 0 0 0 .3-.6V6a2 2 0 0 0-2-2H3Z" />
                          <path d="M18 8.339 11.09 13.52a2.75 2.75 0 0 1-3.18 0L1 8.34V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.34Z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <span className={labelClass}>Akkaunt</span>
                        <p className="truncate text-sm font-medium text-ink" title={resetEmail}>
                          {resetEmail}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={editResetEmail}
                      disabled={pending}
                      className="shrink-0 text-xs font-semibold text-ember transition-colors hover:text-cobalt hover:underline underline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      O&apos;zgartirish
                    </button>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className={labelClass}>Yangi parol</span>
                    <div className="relative">
                      <input
                        type={showResetPassword ? 'text' : 'password'}
                        name="password"
                        value={resetPasswordValue}
                        onChange={handleResetChange}
                        onBlur={handleResetBlur}
                        placeholder="••••••••"
                        autoComplete="new-password"
                        aria-invalid={showResetPasswordError}
                        aria-describedby={
                          [
                            'reset-password-rules',
                            showResetPasswordError ? 'reset-password-error' : '',
                          ]
                            .filter(Boolean)
                            .join(' ') || undefined
                        }
                        className={`${fieldClass(showResetPasswordError)} pr-11`}
                      />
                      <PasswordVisibilityButton
                        visible={showResetPassword}
                        onToggle={() => setShowResetPassword((prev) => !prev)}
                        label="Yangi parol"
                      />
                    </div>

                    {resetPasswordValue && (
                      <PasswordStrength strength={resetPasswordStrength} />
                    )}

                    {showResetPasswordError && (
                      <span
                        id="reset-password-error"
                        className="flex items-center gap-1.5 text-xs font-medium text-negative"
                      >
                        <AlertIcon />
                        {resetPasswordValidation.message}
                      </span>
                    )}

                    <ul
                      id="reset-password-rules"
                      className="mt-0.5 grid grid-cols-1 gap-1.5 text-xs sm:grid-cols-2 sm:gap-1"
                    >
                      {passwordRules.map((rule) => (
                        <li
                          key={rule.key}
                          className={`flex items-center gap-1.5 ${
                            resetPasswordChecks[rule.key] ? 'text-positive' : 'text-muted'
                          }`}
                        >
                          <CheckIcon passed={resetPasswordChecks[rule.key]} />
                          {rule.label}
                        </li>
                      ))}
                    </ul>
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className={labelClass}>Yangi parolni tasdiqlash</span>
                    <div className="relative">
                      <input
                        type={showResetConfirm ? 'text' : 'password'}
                        name="confirmPassword"
                        value={resetConfirmValue}
                        onChange={handleResetChange}
                        onBlur={handleResetBlur}
                        placeholder="Parolni qayta kiriting"
                        autoComplete="new-password"
                        aria-invalid={showResetConfirmError}
                        aria-describedby={
                          showResetConfirmError ? 'reset-confirm-error' : undefined
                        }
                        className={`${fieldClass(showResetConfirmError)} pr-11`}
                      />
                      <PasswordVisibilityButton
                        visible={showResetConfirm}
                        onToggle={() => setShowResetConfirm((prev) => !prev)}
                        label="Tasdiqlash paroli"
                      />
                    </div>
                    {showResetConfirmError && (
                      <span
                        id="reset-confirm-error"
                        className="flex items-center gap-1.5 text-xs font-medium text-negative"
                      >
                        <AlertIcon />
                        {resetConfirmValidation.message}
                      </span>
                    )}
                  </label>

                  {resetError && (
                    <p
                      role="alert"
                      className="flex items-start gap-2 rounded-lg border border-negative/25 bg-negative/10 px-3 py-2 text-sm text-negative"
                    >
                      <AlertIcon />
                      {resetError}
                    </p>
                  )}
                </>
              )}

              {resetStep !== 'sent' && (
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
                  {pending
                    ? 'Yuborilmoqda...'
                    : resetStep === 'email'
                      ? isRemoteAuth
                        ? 'Havolani yuborish'
                        : 'Emailni tekshirish'
                      : 'Parolni yangilash'}
                </button>
              )}

              <div className="mt-auto flex flex-col gap-2 pt-1">
                <p className="text-center text-xs text-muted">
                  <button
                    type="button"
                    onClick={() => goToLogin()}
                    disabled={pending}
                    className="font-semibold text-ember transition-colors hover:text-cobalt disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Kirishga qaytish
                  </button>
                </p>

                <p className="text-center text-[11px] leading-5 text-muted">
                  {isRemoteAuth
                    ? "Havola bir marta ishlaydi va 60 daqiqa amal qiladi."
                    : 'Parol faqat shu qurilmada xavfsiz yangilanadi.'}
                </p>
              </div>
            </form>
          ) : (
          <form key={mode} onSubmit={handleSubmit} className="zehnly-fade-in mt-5 flex flex-1 flex-col gap-4" noValidate>
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
                  {isRemoteAuth
                    ? "Natijalar, sevimlilar va statistika hisobingizga bog'lanadi va sinxronlanadi"
                    : 'Natijalar, sevimlilar va statistikangiz shu brauzerda xavfsiz saqlanadi'}
                </p>
              </div>
            ) : (
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Ism yoki username</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={`Kamida ${MIN_NAME_LENGTH} ta belgi`}
                  autoComplete="name"
                  maxLength={64}
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
                aria-invalid={emailFieldInvalid}
                aria-describedby={[
                  showEmailError ? 'email-error' : '',
                  isLogin && invalidCredentials ? 'auth-server-error' : '',
                ]
                  .filter(Boolean)
                  .join(' ') || undefined}
                className={fieldClass(emailFieldInvalid)}
              />
              {showEmailError && (
                <span id="email-error" className="flex items-center gap-1.5 text-xs font-medium text-negative">
                  <AlertIcon />
                  {emailErrorMessage}
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
                  aria-invalid={passwordFieldInvalid}
                  aria-describedby={[
                    !isLogin ? 'password-rules' : '',
                    showPasswordError ? 'password-error' : '',
                    isLogin && invalidCredentials ? 'auth-server-error' : '',
                  ]
                    .filter(Boolean)
                    .join(' ') || undefined}
                  className={`${fieldClass(passwordFieldInvalid)} pr-11`}
                />
                <PasswordVisibilityButton
                  visible={showPassword}
                  onToggle={() => setShowPassword((prev) => !prev)}
                  label="Parol"
                />
              </div>

              {!isLogin && form.password && <PasswordStrength strength={passwordStrength} />}

              {showPasswordError && (
                <span id="password-error" className="flex items-center gap-1.5 text-xs font-medium text-negative">
                  <AlertIcon />
                  {passwordValidation.message}
                </span>
              )}

              {!isLogin && (
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
              )}

              <span className="sr-only">
                Parol kamida {MIN_PASSWORD_LENGTH} belgidan iborat bo&apos;lib, kamida bitta harf va
                bitta raqamni o&apos;z ichiga olishi kerak
              </span>
            </label>

            {!isLogin && (
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Parolni tasdiqlash</span>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Parolni qayta kiriting"
                    autoComplete="new-password"
                    aria-invalid={showConfirmError}
                    aria-describedby={showConfirmError ? 'confirm-password-error' : undefined}
                    className={`${fieldClass(showConfirmError)} pr-11`}
                  />
                  <PasswordVisibilityButton
                    visible={showConfirmPassword}
                    onToggle={() => setShowConfirmPassword((prev) => !prev)}
                    label="Tasdiqlash paroli"
                  />
                </div>
                {showConfirmError && (
                  <span
                    id="confirm-password-error"
                    className="flex items-center gap-1.5 text-xs font-medium text-negative"
                  >
                    <AlertIcon />
                    {confirmValidation.message}
                  </span>
                )}
              </label>
            )}

            {isLogin && (
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="flex w-fit cursor-pointer select-none items-center gap-2.5 text-xs text-muted">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="h-4 w-4 cursor-pointer rounded border-hairline accent-[var(--ember)]"
                  />
                  Meni eslab qol
                </label>

                <button
                  type="button"
                  onClick={openReset}
                  disabled={pending}
                  className="text-xs font-medium text-ember transition-colors hover:text-cobalt hover:underline underline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Parolni unutdingizmi?
                </button>
              </div>
            )}

            {serverError && (
              <p
                id="auth-server-error"
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

            <div className="mt-auto flex flex-col gap-2 pt-1">
              <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-xs text-muted">
                {isLogin ? "Akkauntingiz yo'qmi?" : 'Akkauntingiz bormi?'}
                <button
                  type="button"
                  onClick={switchMode}
                  disabled={pending}
                  className="font-semibold text-ember transition-colors hover:text-cobalt disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLogin ? "Ro'yxatdan o'ting" : 'Kirish'}
                </button>
              </p>

              <p className="text-center text-[11px] leading-5 text-muted">
                {isRemoteAuth
                  ? "Hisobingiz Supabase orqali xavfsiz saqlanadi va qurilmalararo sinxronlanadi."
                  : 'Hisob ma’lumotlari faqat shu qurilmada saqlanadi.'}
              </p>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  )
}
