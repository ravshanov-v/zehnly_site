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

export function validateEmail(value, t) {
  const email = normalizeEmail(value)

  if (!email) return { valid: false, message: t('validation.emailRequired') }
  if (email.length > MAX_EMAIL_LENGTH) {
    return { valid: false, message: t('validation.emailTooLong') }
  }
  if (email.includes('..')) {
    return { valid: false, message: t('validation.emailConsecutiveDots') }
  }

  const atIndex = email.indexOf('@')
  if (atIndex === -1) return { valid: false, message: t('validation.emailAtSign') }

  const local = email.slice(0, atIndex)
  const domain = email.slice(atIndex + 1)

  if (!local) return { valid: false, message: t('validation.emailLocalEmpty') }
  if (local.length > MAX_LOCAL_LENGTH) {
    return { valid: false, message: t('validation.emailLocalTooLong') }
  }
  if (local.startsWith('.') || local.endsWith('.')) {
    return { valid: false, message: t('validation.emailDotEdge') }
  }
  if (!domain.includes('.')) {
    return { valid: false, message: t('validation.emailDomainInvalid') }
  }
  if (domain.startsWith('-') || domain.endsWith('-')) {
    return { valid: false, message: t('validation.emailDomainHyphen') }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, message: t('validation.emailFormat') }
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

export function getPasswordRules(t) {
  return [
    { key: 'length', label: t('validation.ruleLength', { count: MIN_PASSWORD_LENGTH }) },
    { key: 'letter', label: t('validation.ruleLetter') },
    { key: 'number', label: t('validation.ruleNumber') },
    { key: 'special', label: t('validation.ruleSpecial') },
  ]
}

export function validatePassword(value, t) {
  const password = String(value ?? '')
  const checks = getPasswordChecks(password)

  if (!password) return { valid: false, message: t('validation.passwordRequired'), checks }
  if (!checks.maxLength) {
    return {
      valid: false,
      message: t('validation.passwordTooLong', { max: MAX_PASSWORD_LENGTH }),
      checks,
    }
  }
  if (!checks.length) {
    return {
      valid: false,
      message: t('validation.passwordTooShort', { min: MIN_PASSWORD_LENGTH }),
      checks,
    }
  }
  if (!checks.letter || !checks.number) {
    return {
      valid: false,
      message: t('validation.passwordLetterNumber'),
      checks,
    }
  }

  return { valid: true, message: '', checks }
}

export function validateLoginPassword(value, t) {
  const password = String(value ?? '')

  if (!password) return { valid: false, message: t('validation.passwordRequired') }
  if (password.length > MAX_PASSWORD_LENGTH) {
    return {
      valid: false,
      message: t('validation.passwordTooLong', { max: MAX_PASSWORD_LENGTH }),
    }
  }

  return { valid: true, message: '' }
}

export function validateConfirmPassword(password, confirmPassword, t) {
  const value = String(confirmPassword ?? '')

  if (!value) return { valid: false, message: t('validation.confirmRequired') }
  if (value !== String(password ?? '')) {
    return { valid: false, message: t('validation.confirmMismatch') }
  }

  return { valid: true, message: '' }
}

export function validateName(value, t) {
  const name = String(value ?? '').trim()

  if (!name) return { valid: false, message: t('validation.nameRequired') }
  if (name.length < MIN_NAME_LENGTH) {
    return { valid: false, message: t('validation.nameTooShort', { min: MIN_NAME_LENGTH }) }
  }
  if (name.length > MAX_NAME_LENGTH) {
    return { valid: false, message: t('validation.nameTooLong', { max: MAX_NAME_LENGTH }) }
  }
  if (!NAME_REGEX.test(name) || !/\p{L}/u.test(name)) {
    return {
      valid: false,
      message: t('validation.nameInvalid'),
    }
  }

  return { valid: true, message: '', name }
}

export function getPasswordStrength(value, t) {
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
    return {
      score: 1,
      level: 'weak',
      label: t('validation.strengthWeak'),
      tone: 'negative',
      percent: 33,
    }
  }
  if (points <= 3) {
    return {
      score: 2,
      level: 'medium',
      label: t('validation.strengthMedium'),
      tone: 'warning',
      percent: 66,
    }
  }

  return {
    score: 3,
    level: 'strong',
    label: t('validation.strengthStrong'),
    tone: 'positive',
    percent: 100,
  }
}
