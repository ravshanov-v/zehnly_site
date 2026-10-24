const EMAIL_REGEX =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/

const MAX_EMAIL_LENGTH = 254
const MAX_LOCAL_LENGTH = 64
const MIN_PASSWORD_LENGTH = 6
const MAX_PASSWORD_LENGTH = 64

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
    letter: /[A-Za-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9\s]/.test(password),
  }
}

export const passwordRules = [
  { key: 'length', label: `Kamida ${MIN_PASSWORD_LENGTH} belgi` },
  { key: 'letter', label: 'Kamida bitta harf (a-z, A-Z)' },
  { key: 'number', label: 'Kamida bitta raqam (0-9)' },
  { key: 'special', label: "Kamida bitta belgi (!@#$% va h.k.)" },
]

export function validatePassword(value) {
  const password = String(value ?? '')

  if (!password) return { valid: false, message: 'Parolni kiriting', checks: getPasswordChecks(password) }

  const checks = getPasswordChecks(password)

  if (!checks.maxLength) {
    return { valid: false, message: `Parol ${MAX_PASSWORD_LENGTH} belgidan oshmasligi kerak`, checks }
  }
  if (!checks.length) {
    return { valid: false, message: `Parol kamida ${MIN_PASSWORD_LENGTH} belgidan iborat bo'lishi kerak`, checks }
  }

  const missing = []
  if (!checks.letter) missing.push('harf')
  if (!checks.number) missing.push('raqam')
  if (!checks.special) missing.push('belgi')

  if (missing.length > 0) {
    return { valid: false, message: `Parolda kamida bitta ${missing.join(', ')} bo'lishi kerak`, checks }
  }

  return { valid: true, message: '', checks }
}

export function validateName(value) {
  const name = String(value ?? '').trim()

  if (!name) return { valid: false, message: 'Ismingizni kiriting' }
  if (name.length < 2) return { valid: false, message: "Ism kamida 2 belgidan iborat bo'lishi kerak" }
  if (name.length > 64) return { valid: false, message: "Ism juda uzun (maksimal 64 belgi)" }
  if (!/^[A-Za-zÀ-ž]{2,}(?:[ '-][A-Za-zÀ-ž]+)*$/.test(name)) {
    return { valid: false, message: "Ism faqat harflardan iborat bo'lishi kerak" }
  }

  return { valid: true, message: '', name }
}

export { MIN_PASSWORD_LENGTH }
