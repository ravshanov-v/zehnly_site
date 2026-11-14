import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const CATEGORIES_DIR = resolve(ROOT, 'src/Pages/Zakovat/Categories')
const TARGET = 1000

const files = [
  'MaktabFanlari/Matematika.js',
  'MaktabFanlari/Adabiyot.js',
  'MaktabFanlari/Tarix.js',
  'MaktabFanlari/Fizika.js',
  'MaktabFanlari/Kimyo.js',
  'MaktabFanlari/Biologiya.js',
  'MaktabFanlari/OnaTili.js',
  'MaktabFanlari/Geografiya.js',
  'MaktabFanlari/Informatika.js',
  'MaktabFanlari/Huquq.js',
  'ITYonalishlari/Frontend.js',
  'ITYonalishlari/Backend.js',
  'ITYonalishlari/MobileDev.js',
  'ITYonalishlari/Kiberxavfsizlik.js',
  'ITYonalishlari/SuniyIntellekt.js',
  'ITYonalishlari/DizaynUIUX.js',
  'Tillar/InglizTili.js',
  'Tillar/RusTili.js',
  'Tillar/TurkTili.js',
  'Tillar/NemisTili.js',
]

function cleanText(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ')
}

function normalizeStem(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[.,!?;:„“”‘’'"()[\]{}—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

async function main() {
  const errors = []
  const counts = new Map()

  for (const file of files) {
    const module = await import(pathToFileURL(resolve(CATEGORIES_DIR, file)).href)
    const data = module.default ?? Object.values(module)[0]
    const questions = Array.isArray(data?.questions) ? data.questions : []
    const ids = new Set()
    const stems = new Set()

    counts.set(data.id, questions.length)

    if (questions.length !== TARGET) {
      errors.push(`${file}: ${questions.length} ta savol, ${TARGET} bo'lishi kerak`)
    }

    questions.forEach((question, index) => {
      const label = `${file} #${index + 1}`

      if (!question?.id || ids.has(question.id)) {
        errors.push(`${label}: ID bo'sh yoki takrorlangan`)
      } else {
        ids.add(question.id)
      }

      const stem = normalizeStem(question?.question)

      if (!stem) {
        errors.push(`${label}: savol matni bo'sh`)
      } else if (stems.has(stem)) {
        errors.push(`${label}: savol matni takrorlangan`)
      } else {
        stems.add(stem)
      }

      if (!Array.isArray(question?.options) || question.options.length < 2) {
        errors.push(`${label}: variantlar 2 tadan kam`)
        return
      }

      const optionTexts = new Set()
      let correctFound = false

      for (const option of question.options) {
        const text = cleanText(option?.text)

        if (!text) errors.push(`${label}: variant matni bo'sh`)
        if (optionTexts.has(text.toLowerCase())) {
          errors.push(`${label}: variant matni takrorlangan`)
        }
        optionTexts.add(text.toLowerCase())
        if (option?.id === question.correct) correctFound = true
      }

      if (!correctFound) errors.push(`${label}: to'g'ri javob varianti topilmadi`)
      if (!cleanText(question.explanation)) errors.push(`${label}: izoh bo'sh`)
    })
  }

  const metaModule = await import(pathToFileURL(resolve(CATEGORIES_DIR, 'meta.js')).href)

  for (const category of metaModule.categoryMeta) {
    const actual = counts.get(category.id)

    if (actual === undefined) {
      errors.push(`meta.js: ${category.id} uchun data topilmadi`)
    } else if (actual !== category.questionCount) {
      errors.push(
        `meta.js: ${category.id} ${category.questionCount} deb ko'rsatilgan, data ${actual}`
      )
    }
  }

  const expectedTotal = [...counts.values()].reduce((total, count) => total + count, 0)

  if (metaModule.totalQuestions !== expectedTotal) {
    errors.push(
      `meta.js: totalQuestions ${metaModule.totalQuestions}, kutilgan ${expectedTotal}`
    )
  }

  for (const [id, count] of counts) {
    console.log(`${id.padEnd(18)} ${String(count).padStart(4)} savol`)
  }

  console.log(`Jami: ${expectedTotal.toLocaleString('ru-RU')} savol`)

  if (errors.length > 0) {
    console.error(`\n${errors.length} ta xatolik:`)
    errors.slice(0, 80).forEach((error) => console.error(`- ${error}`))

    if (errors.length > 80) console.error(`... yana ${errors.length - 80} ta`)

    process.exitCode = 1
  } else {
    console.log('Tekshiruv muvaffaqiyatli o‘tdi.')
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
