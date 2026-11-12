import {
  categoryGroups,
  categoryMeta,
  getCategoryMeta,
  totalQuestions,
} from './meta.js'

export { categoryGroups, categoryMeta, getCategoryMeta, totalQuestions }

export const allCategoryMeta = categoryMeta

const loaders = {
  matematika: () => import('./MaktabFanlari/Matematika.js'),
  adabiyot: () => import('./MaktabFanlari/Adabiyot.js'),
  tarix: () => import('./MaktabFanlari/Tarix.js'),
  fizika: () => import('./MaktabFanlari/Fizika.js'),
  kimyo: () => import('./MaktabFanlari/Kimyo.js'),
  biologiya: () => import('./MaktabFanlari/Biologiya.js'),
  ona_tili: () => import('./MaktabFanlari/OnaTili.js'),
  geografiya: () => import('./MaktabFanlari/Geografiya.js'),
  informatika: () => import('./MaktabFanlari/Informatika.js'),
  huquq: () => import('./MaktabFanlari/Huquq.js'),
  frontend: () => import('./ITYonalishlari/Frontend.js'),
  backend: () => import('./ITYonalishlari/Backend.js'),
  'mobile-dev': () => import('./ITYonalishlari/MobileDev.js'),
  kiberxavfsizlik: () => import('./ITYonalishlari/Kiberxavfsizlik.js'),
  'suniy-intellekt': () => import('./ITYonalishlari/SuniyIntellekt.js'),
  'dizayn-ui-ux': () => import('./ITYonalishlari/DizaynUIUX.js'),
  'ingliz-tili': () => import('./Tillar/InglizTili.js'),
  'rus-tili': () => import('./Tillar/RusTili.js'),
  'turk-tili': () => import('./Tillar/TurkTili.js'),
  'nemis-tili': () => import('./Tillar/NemisTili.js'),
}

const cache = new Map()

function normalizeText(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ')
}

function cleanQuestionText(value) {
  const text = normalizeText(value)
  const cleaned = text.replace(/^(?:Тест\s+)?DTM\b[^:]{0,120}:\s*/iu, '').trim()

  return cleaned || text
}

function sanitizeQuestion(question) {
  return { ...question, question: cleanQuestionText(question.question) }
}

function questionSignature(question) {
  const options = Array.isArray(question.options) ? question.options : []
  const correctOption = options.find((option) => option.id === question.correct)

  return JSON.stringify({
    text: normalizeText(question.question),
    options: options.map((option) => normalizeText(option.text)).sort(),
    correct: correctOption ? normalizeText(correctOption.text) : question.correct ?? null,
  })
}

function dedupeQuestions(questions) {
  const seen = new Set()

  return questions.filter((question) => {
    const signature = questionSignature(question)

    if (seen.has(signature)) return false

    seen.add(signature)
    return true
  })
}

export function loadCategory(categoryId) {
  if (cache.has(categoryId)) return cache.get(categoryId)

  const loader = loaders[categoryId]
  if (!loader) return Promise.reject(new Error(`Noma'lum fan: ${categoryId}`))

  const promise = loader()
    .then((module) => {
      const data = module.default ?? Object.values(module)[0]
      const meta = getCategoryMeta(categoryId)
      const questions = dedupeQuestions(
        (Array.isArray(data?.questions) ? data.questions : []).map(sanitizeQuestion)
      )

      return {
        ...data,
        id: meta?.id ?? data?.id,
        title: meta?.title ?? data?.title,
        category: meta?.category ?? data?.category,
        questions,
        questionCount: questions.length || meta?.questionCount || 0,
      }
    })
    .catch((error) => {
      cache.delete(categoryId)
      throw error
    })

  cache.set(categoryId, promise)
  return promise
}

export function prefetchCategory(categoryId) {
  loadCategory(categoryId).catch(() => {})
}
