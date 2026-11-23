const EMAIL_REGEX =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/

const MAX_EMAIL_LENGTH = 254
const MAX_LOCAL_LENGTH = 64
export const MIN_PASSWORD_LENGTH = 8
export const MAX_PASSWORD_LENGTH = 64
export const MIN_NAME_LENGTH = 3
export const MAX_NAME_LENGTH = 64

const NAME_REGEX = /^[\p{L}\p{M}\p{N}_.'’ʻ‘ -]+$/u

export function normalizeEmail(value) {
  return String(value ?? '').trim().toLowerCase()
}

export function validateEmail(value) {
  const email = normalizeEmail(value)

  if (!email) return { valid: false, message: 'Email manzilini kiriting' }
  if (email.length > MAX_EMAIL_LENGTH) return { valid: false, message: 'Email juda uzun' }
  if (email.includes('..')) return { valid: false, message: "Emailda ketma-ket nuqta bo'lmasligi kerak" }

  const atIndex = email.indexOf('@')
  if (atIndex === -1) return { valid: false, message: "Emailda '@' belgisi bo'lishi kerak" }

  const local = email.slice(0, atIndex)
  const domain = email.slice(atIndex + 1)

  if (!local) return { valid: false, message: "Email '@' dan oldin qismi bo'sh" }
  if (local.length > MAX_LOCAL_LENGTH) return { valid: false, message: "Email '@' dan oldingi qismi juda uzun" }
  if (local.startsWith('.') || local.endsWith('.')) {
    return { valid: false, message: 'Email nuqta bilan boshlanmaydi yoki tugamaydi' }
  }
  if (!domain.includes('.')) return { valid: false, message: "Domen qismi noto'g'ri (masalan: example.com)" }
  if (domain.startsWith('-') || domain.endsWith('-')) {
    return { valid: false, message: 'Domen chiziqcha bilan boshlanmaydi yoki tugamaydi' }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, message: "Email formati noto'g'ri (masalan: ism@example.com)" }
  }

  return { valid: true, message: '', email }
}

export function getPasswordChecks(value) {
  const password = String(value ?? '')

  return {
    length: password.length >= MIN_PASSWORD_LENGTH,
    maxLength: password.length <= MAX_PASSWORD_LENGTH,
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    letter: /[A-Za-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9\s]/.test(password),
  }
}

export const passwordRules = [
  { key: 'length', label: `Kamida ${MIN_PASSWORD_LENGTH} belgi` },
  { key: 'letter', label: 'Kamida bitta harf' },
  { key: 'number', label: 'Kamida bitta raqam' },
  { key: 'special', label: 'Belgi (!@#$%) — kuchliroq' },
]

export function validatePassword(value) {
  const password = String(value ?? '')
  const checks = getPasswordChecks(password)

  if (!password) return { valid: false, message: 'Parolni kiriting', checks }
  if (!checks.maxLength) {
    return { valid: false, message: `Parol ${MAX_PASSWORD_LENGTH} belgidan oshmasligi kerak`, checks }
  }
  if (!checks.length) {
    return {
      valid: false,
      message: `Parol kamida ${MIN_PASSWORD_LENGTH} belgidan iborat bo'lishi kerak`,
      checks,
    }
  }
  if (!checks.letter || !checks.number) {
    return {
      valid: false,
      message: "Parolda kamida bitta harf va bitta raqam bo'lishi kerak",
      checks,
    }
  }

  return { valid: true, message: '', checks }
}

export function validateLoginPassword(value) {
  const password = String(value ?? '')

  if (!password) return { valid: false, message: 'Parolni kiriting' }
  if (password.length > MAX_PASSWORD_LENGTH) {
    return { valid: false, message: `Parol ${MAX_PASSWORD_LENGTH} belgidan oshmasligi kerak` }
  }

  return { valid: true, message: '' }
}

export function validateConfirmPassword(password, confirmPassword) {
  const value = String(confirmPassword ?? '')

  if (!value) return { valid: false, message: 'Parolni tasdiqlang' }
  if (value !== String(password ?? '')) return { valid: false, message: 'Parollar mos kelmadi' }

  return { valid: true, message: '' }
}

export function validateName(value) {
  const name = String(value ?? '').trim()

  if (!name) return { valid: false, message: 'Ism yoki foydalanuvchi nomini kiriting' }
  if (name.length < MIN_NAME_LENGTH) {
    return { valid: false, message: `Ism kamida ${MIN_NAME_LENGTH} belgidan iborat bo'lishi kerak` }
  }
  if (name.length > MAX_NAME_LENGTH) {
    return { valid: false, message: `Ism juda uzun (maksimal ${MAX_NAME_LENGTH} belgi)` }
  }
  if (!NAME_REGEX.test(name) || !/\p{L}/u.test(name)) {
    return {
      valid: false,
      message: "Ism faqat harf, raqam, bo'sh joy, nuqta, chiziqcha yoki pastki chiziqdan iborat bo'lsin",
    }
  }

  return { valid: true, message: '', name }
}

export function getPasswordStrength(value) {
  const password = String(value ?? '')

  if (!password) return { score: 0, level: 'empty', label: '', tone: 'muted', percent: 0 }

  const checks = getPasswordChecks(password)
  const required = checks.length && checks.letter && checks.number

  let points = 0
  if (checks.length) points += 1
  if (checks.letter && checks.number) points += 1
  if (checks.lower && checks.upper) points += 1
  if (checks.special) points += 1
  if (password.length >= 12) points += 1

  if (!required || points <= 1) {
    return { score: 1, level: 'weak', label: 'Kuchsiz', tone: 'negative', percent: 33 }
  }
  if (points <= 3) {
    return { score: 2, level: 'medium', label: "O'rtacha", tone: 'warning', percent: 66 }
  }

  return { score: 3, level: 'strong', label: 'Kuchli', tone: 'positive', percent: 100 }
}
