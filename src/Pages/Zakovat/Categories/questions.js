export function normalizeText(value) {
  return String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
}

export function cleanQuestionText(value) {
  const text = normalizeText(value)
  const cleaned = text.replace(/^(?:Тест\s+)?DTM\b[^:]{0,120}:\s*/iu, '').trim()

  return cleaned || text
}

export function resolveCorrectId(question, options) {
  const raw = question?.correct ?? question?.answer
  if (raw === null || raw === undefined || raw === '') return null

  const value = normalizeText(raw)
  const byId = options.find((option) => normalizeText(option?.id) === value)
  if (byId) return byId.id

  const byText = options.find(
    (option) => normalizeText(option?.text).toLowerCase() === value.toLowerCase()
  )
  if (byText) return byText.id

  if (/^\d+$/.test(value)) {
    const index = Number(value)
    const byIndex = options[index] ?? options[index - 1]
    if (byIndex) return byIndex.id
  }

  return null
}

export function sanitizeQuestion(question) {
  const options = Array.isArray(question?.options) ? question.options : []

  return {
    ...question,
    options,
    question: cleanQuestionText(question.question),
    correct: resolveCorrectId(question, options),
  }
}

export function questionSignature(question) {
  const options = Array.isArray(question.options) ? question.options : []
  const correctOption = options.find((option) => option.id === question.correct)

  return JSON.stringify({
    text: normalizeText(question.question),
    options: options.map((option) => normalizeText(option.text)).sort(),
    correct: correctOption ? normalizeText(correctOption.text) : question.correct ?? null,
  })
}

export function dedupeQuestions(questions) {
  const seen = new Set()

  return questions.filter((question) => {
    const signature = questionSignature(question)

    if (seen.has(signature)) return false

    seen.add(signature)
    return true
  })
}
