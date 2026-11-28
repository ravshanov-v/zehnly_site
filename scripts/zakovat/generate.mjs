import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { languageFacts } from './facts.mjs'
import { syncQuestionCounts } from './sync-counts.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const CATEGORIES_DIR = resolve(ROOT, 'src/Pages/Zakovat/Categories')
const TARGET = 1000
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

const categories = [
  { id: 'matematika', file: 'MaktabFanlari/Matematika.js', prefix: 'matematika', varName: 'matematika' },
  { id: 'adabiyot', file: 'MaktabFanlari/Adabiyot.js', prefix: 'adab', varName: 'adabiyotData' },
  { id: 'tarix', file: 'MaktabFanlari/Tarix.js', prefix: 'tarix', varName: 'tarix' },
  { id: 'fizika', file: 'MaktabFanlari/Fizika.js', prefix: 'fizika', varName: 'fizika' },
  { id: 'kimyo', file: 'MaktabFanlari/Kimyo.js', prefix: 'kimyo', varName: 'kimyo' },
  { id: 'biologiya', file: 'MaktabFanlari/Biologiya.js', prefix: 'biologiya', varName: 'biologiya' },
  { id: 'ona_tili', file: 'MaktabFanlari/OnaTili.js', prefix: 'ona-tili', varName: 'onaTili' },
  { id: 'geografiya', file: 'MaktabFanlari/Geografiya.js', prefix: 'geografiya', varName: 'geografiya' },
  { id: 'informatika', file: 'MaktabFanlari/Informatika.js', prefix: 'informatika', varName: 'informatika' },
  { id: 'huquq', file: 'MaktabFanlari/Huquq.js', prefix: 'huquq', varName: 'huquq' },
  { id: 'frontend', file: 'ITYonalishlari/Frontend.js', prefix: 'frontend', varName: 'frontend', baseFrom: 'informatika' },
  { id: 'backend', file: 'ITYonalishlari/Backend.js', prefix: 'backend', varName: 'backend', baseFrom: 'informatika' },
  { id: 'mobile-dev', file: 'ITYonalishlari/MobileDev.js', prefix: 'mobile-dev', varName: 'mobileDev', baseFrom: 'informatika' },
  { id: 'kiberxavfsizlik', file: 'ITYonalishlari/Kiberxavfsizlik.js', prefix: 'kiberxavfsizlik', varName: 'kiberxavfsizlik', baseFrom: 'informatika' },
  { id: 'suniy-intellekt', file: 'ITYonalishlari/SuniyIntellekt.js', prefix: 'suniy-intellekt', varName: 'suniyIntellekt', baseFrom: 'informatika' },
  { id: 'dizayn-ui-ux', file: 'ITYonalishlari/DizaynUIUX.js', prefix: 'dizayn-ui-ux', varName: 'dizaynUiUx', baseFrom: 'informatika' },
  { id: 'ingliz-tili', file: 'Tillar/InglizTili.js', prefix: 'ingliz-tili', varName: 'inglizTili' },
  { id: 'rus-tili', file: 'Tillar/RusTili.js', prefix: 'rus-tili', varName: 'rusTili' },
  { id: 'turk-tili', file: 'Tillar/TurkTili.js', prefix: 'turk-tili', varName: 'turkTili', language: 'turk-tili' },
  { id: 'nemis-tili', file: 'Tillar/NemisTili.js', prefix: 'nemis-tili', varName: 'nemisTili', language: 'nemis-tili' },
]

function cleanText(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ')
}

function cleanQuestionText(value) {
  const text = cleanText(value)
  return text.replace(/^(?:Тест\s+)?DTM\b[^:]{0,120}:\s*/iu, '').trim() || text
}

function normalizeStem(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[.,!?;:„“”‘’'"()[\]{}—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function hashString(value) {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

function mulberry32(seed) {
  let state = seed >>> 0

  return function random() {
    state = (state + 0x6d2b79f5) | 0
    let value = Math.imul(state ^ (state >>> 15), 1 | state)
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function shuffle(items, random) {
  const next = [...items]

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[next[index], next[swapIndex]] = [next[swapIndex], next[index]]
  }

  return next
}

function shorten(value, maxLength = 90) {
  const text = cleanText(value)

  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}…` : text
}

function buildQuestion(stem, correctText, wrongTexts, explanation, xp, random) {
  const question = cleanText(stem)
  const correct = cleanText(correctText)

  if (!question || !correct) return null

  const seen = new Set([correct.toLowerCase()])
  const wrongs = []

  for (const value of wrongTexts) {
    const text = cleanText(value)
    const key = text.toLowerCase()

    if (!text || seen.has(key)) continue

    seen.add(key)
    wrongs.push(text)
  }

  if (wrongs.length === 0) return null

  const options = shuffle(
    [{ text: correct, isCorrect: true }, ...wrongs.map((text) => ({ text, isCorrect: false }))],
    random
  )

  return {
    question,
    options: options.map((option, index) => ({ id: LETTERS[index], text: option.text })),
    correct: LETTERS[options.findIndex((option) => option.isCorrect)],
    xp: xp || 200,
    explanation: cleanText(explanation) || `To'g'ri javob: ${correct}.`,
  }
}

function prepareBaseEntries(rawQuestions) {
  const entries = []
  const seen = new Set()

  for (const rawQuestion of rawQuestions) {
    const stem = cleanQuestionText(rawQuestion?.question)
    const key = normalizeStem(stem)

    if (!stem || !key || seen.has(key)) continue

    const options = Array.isArray(rawQuestion.options) ? rawQuestion.options : []
    const correctOption = options.find((option) => option?.id === rawQuestion.correct)

    if (!correctOption) continue

    const correctText = cleanText(correctOption.text)
    const wrongTexts = []
    const optionSeen = new Set([correctText.toLowerCase()])

    for (const option of options) {
      const text = cleanText(option?.text)
      const optionKey = text.toLowerCase()

      if (!text || optionKey === correctText.toLowerCase() || optionSeen.has(optionKey)) continue

      optionSeen.add(optionKey)
      wrongTexts.push(text)
    }

    if (!correctText || wrongTexts.length === 0) continue

    seen.add(key)
    entries.push({
      stem,
      correctText,
      wrongTexts,
      explanation:
        cleanText(rawQuestion.explanation) || `To'g'ri javob: ${correctText}.`,
      xp: Number(rawQuestion.xp) > 0 ? Number(rawQuestion.xp) : 200,
    })
  }

  return entries
}

function buildLanguageRawQuestions(categoryId) {
  const facts = languageFacts[categoryId]

  if (!facts) return []

  const uzbekPool = facts.pairs.map(([, uzbek]) => uzbek)
  const foreignPool = facts.pairs.map(([foreign]) => foreign)
  const questions = []

  for (const [foreign, uzbek] of facts.pairs) {
    const wrongUzbek = shuffle(
      uzbekPool.filter((value) => value.toLowerCase() !== uzbek.toLowerCase()),
      mulberry32(hashString(`uz-${foreign}`))
    ).slice(0, 3)

    questions.push({
      question: `«${foreign}» so'zining o'zbekcha tarjimasi qaysi?`,
      options: [
        { id: 'A', text: uzbek },
        ...wrongUzbek.map((text, index) => ({ id: LETTERS[index + 1], text })),
      ],
      correct: 'A',
      xp: 200,
      explanation: `«${foreign}» so'zi o'zbek tilida «${uzbek}» deb tarjima qilinadi.`,
    })

    const wrongForeign = shuffle(
      foreignPool.filter((value) => value.toLowerCase() !== foreign.toLowerCase()),
      mulberry32(hashString(`fa-${uzbek}`))
    ).slice(0, 3)

    questions.push({
      question: `«${uzbek}» so'zining ${facts.languageName}cha tarjimasi qaysi?`,
      options: [
        { id: 'A', text: foreign },
        ...wrongForeign.map((text, index) => ({ id: LETTERS[index + 1], text })),
      ],
      correct: 'A',
      xp: 200,
      explanation: `«${uzbek}» so'zining ${facts.languageName}cha tarjimasi — «${foreign}».`,
    })
  }

  return questions
}

function collectWrongs(base, entries, count) {
  const seen = new Set([base.correctText.toLowerCase()])
  const wrongs = []

  for (const text of base.wrongTexts) {
    const key = text.toLowerCase()

    if (seen.has(key)) continue

    seen.add(key)
    wrongs.push(text)
  }

  if (wrongs.length < count) {
    for (const entry of entries) {
      if (entry === base) continue

      const key = entry.correctText.toLowerCase()

      if (seen.has(key)) continue

      seen.add(key)
      wrongs.push(entry.correctText)

      if (wrongs.length >= count) break
    }
  }

  return wrongs.slice(0, count)
}

function pickOtherEntries(entries, base, predicate, count, random) {
  const result = []
  const start = Math.floor(random() * entries.length)

  for (let step = 0; step < entries.length && result.length < count; step += 1) {
    const entry = entries[(start + step) % entries.length]

    if (entry === base || !predicate(entry)) continue
    if (result.some((item) => item.stem === entry.stem)) continue

    result.push(entry)
  }

  return result.length >= count ? result : null
}

const templates = [
  {
    name: 'answer-to-question',
    make(base, entries, random) {
      const others = pickOtherEntries(
        entries,
        base,
        (entry) => entry.correctText.toLowerCase() !== base.correctText.toLowerCase(),
        3,
        random
      )

      if (!others) return null

      return buildQuestion(
        `«${base.correctText}» quyidagi qaysi savolning to'g'ri javobi? (${shorten(base.explanation)})`,
        base.stem,
        others.map((entry) => entry.stem),
        `«${base.stem}» savolining to'g'ri javobi — ${base.correctText}. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'explanation-to-question',
    make(base, entries, random) {
      const others = pickOtherEntries(
        entries,
        base,
        (entry) => entry.explanation !== base.explanation,
        3,
        random
      )

      if (!others) return null

      return buildQuestion(
        `«${base.explanation}» izohi qaysi savolga mos keladi?`,
        base.stem,
        others.map((entry) => entry.stem),
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'question-to-explanation',
    make(base, entries, random) {
      const others = pickOtherEntries(
        entries,
        base,
        (entry) => entry.explanation !== base.explanation,
        3,
        random
      )

      if (!others) return null

      return buildQuestion(
        `«${base.stem}» savolining izohi qaysi variantda to'g'ri?`,
        base.explanation,
        others.map((entry) => entry.explanation),
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'explanation-cloze',
    make(base, entries, random) {
      const correct = base.correctText.toLowerCase()

      if (base.correctText.length < 2) return null

      const index = base.explanation.toLowerCase().indexOf(correct)

      if (index < 0) return null

      const clozed =
        base.explanation.slice(0, index) +
        '______' +
        base.explanation.slice(index + base.correctText.length)

      return buildQuestion(
        `Izohdagi bo'sh joyni to'ldiring: ${clozed}`,
        base.correctText,
        collectWrongs(base, entries, 3),
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'true-correct-option',
    make(base, entries, random) {
      return buildQuestion(
        `«${base.correctText}» varianti «${base.stem}» savoliga to'g'ri javobmi?`,
        'Ha',
        ["Yo'q"],
        `Ha. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'true-wrong-option-1',
    make(base, entries, random) {
      const wrong = base.wrongTexts[0]

      if (!wrong) return null

      return buildQuestion(
        `«${wrong}» varianti «${base.stem}» savoliga to'g'ri javobmi?`,
        "Yo'q",
        ['Ha'],
        `Yo'q. To'g'ri javob — ${base.correctText}. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'true-wrong-option-2',
    make(base, entries, random) {
      const wrong = base.wrongTexts[1]

      if (!wrong) return null

      return buildQuestion(
        `«${wrong}» varianti «${base.stem}» savoliga to'g'ri javobmi?`,
        "Yo'q",
        ['Ha'],
        `Yo'q. To'g'ri javob — ${base.correctText}. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'true-wrong-option-3',
    make(base, entries, random) {
      const wrong = base.wrongTexts[2]

      if (!wrong) return null

      return buildQuestion(
        `«${wrong}» varianti «${base.stem}» savoliga to'g'ri javobmi?`,
        "Yo'q",
        ['Ha'],
        `Yo'q. To'g'ri javob — ${base.correctText}. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'answer-cloze',
    make(base, entries, random) {
      return buildQuestion(
        `Savol: ${base.stem} Javob: ______`,
        base.correctText,
        collectWrongs(base, entries, 3),
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'wrapped-question-1',
    make(base, entries, random) {
      return buildQuestion(
        `Quyidagi savolga to'g'ri javob bering: ${base.stem}`,
        base.correctText,
        base.wrongTexts,
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'wrapped-question-2',
    make(base, entries, random) {
      return buildQuestion(
        `Quyidagi qaysi variant «${base.stem}» savolining to'g'ri javobi?`,
        base.correctText,
        base.wrongTexts,
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'answer-to-question-2',
    make(base, entries, random) {
      const others = pickOtherEntries(
        entries,
        base,
        (entry) => entry.correctText.toLowerCase() !== base.correctText.toLowerCase(),
        3,
        random
      )

      if (!others) return null

      return buildQuestion(
        `«${base.correctText}» qaysi savolning javobi sifatida tanlanadi? (${shorten(base.explanation)})`,
        base.stem,
        others.map((entry) => entry.stem),
        `«${base.stem}» savolining to'g'ri javobi — ${base.correctText}. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'explanation-to-question-2',
    make(base, entries, random) {
      const others = pickOtherEntries(
        entries,
        base,
        (entry) => entry.explanation !== base.explanation,
        3,
        random
      )

      if (!others) return null

      return buildQuestion(
        `Quyidagi izoh qaysi savolga tegishli: «${base.explanation}»`,
        base.stem,
        others.map((entry) => entry.stem),
        base.explanation,
        base.xp,
        random
      )
    },
  },
  {
    name: 'true-answer-pair',
    make(base, entries, random) {
      return buildQuestion(
        `«${base.stem}» savolining to'g'ri javobi «${base.correctText}»mi?`,
        'Ha',
        ["Yo'q"],
        `Ha. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'true-wrong-pair',
    make(base, entries, random) {
      const wrong = base.wrongTexts[0]

      if (!wrong) return null

      return buildQuestion(
        `«${wrong}» javobi «${base.stem}» savoliga mos keladimi?`,
        "Yo'q",
        ['Ha'],
        `Yo'q. To'g'ri javob — ${base.correctText}. ${base.explanation}`,
        base.xp,
        random
      )
    },
  },
  {
    name: 'wrapped-question-3',
    make(base, entries, random) {
      return buildQuestion(
        `Bilim sinovi: ${base.stem}`,
        base.correctText,
        base.wrongTexts,
        base.explanation,
        base.xp,
        random
      )
    },
  },
]

async function loadModule(file) {
  const module = await import(pathToFileURL(resolve(CATEGORIES_DIR, file)).href)
  return module.default ?? Object.values(module)[0]
}

function generateForCategory(category, sourceData, sharedBase) {
  const rawQuestions = []

  if (Array.isArray(sourceData?.questions)) rawQuestions.push(...sourceData.questions)
  if (Array.isArray(sharedBase)) rawQuestions.push(...sharedBase)
  if (category.language) rawQuestions.push(...buildLanguageRawQuestions(category.language))

  const entries = prepareBaseEntries(rawQuestions)

  if (entries.length < 20) {
    throw new Error(`${category.id}: bazada faqat ${entries.length} ta savol bor`)
  }

  const random = mulberry32(hashString(category.id))
  const questions = []
  const used = new Set()

  function pushQuestion(question) {
    if (!question || questions.length >= TARGET) return false

    const key = normalizeStem(question.question)

    if (!key || used.has(key)) return false

    used.add(key)
    questions.push(question)
    return true
  }

  for (const entry of entries) {
    pushQuestion(
      buildQuestion(
        entry.stem,
        entry.correctText,
        entry.wrongTexts,
        entry.explanation,
        entry.xp,
        random
      )
    )
  }

  for (const template of templates) {
    for (const entry of entries) {
      if (questions.length >= TARGET) break

      pushQuestion(template.make(entry, entries, random))
    }

    if (questions.length >= TARGET) break
  }

  if (questions.length < TARGET) {
    throw new Error(
      `${category.id}: ${questions.length} ta savol yig'ildi, ${TARGET} taga yetmadi`
    )
  }

  return questions.slice(0, TARGET).map((question, index) => ({
    id: `${category.prefix}-${index + 1}`,
    ...question,
  }))
}

async function main() {
  const infoSource = await loadModule('MaktabFanlari/Informatika.js')
  const informaticsBase = Array.isArray(infoSource?.questions) ? infoSource.questions : []

  for (const category of categories) {
    const sourceData = await loadModule(category.file)
    const sharedBase = category.baseFrom === 'informatika' ? informaticsBase : null
    const questions = generateForCategory(category, sourceData, sharedBase)

    const output = {
      id: sourceData.id ?? category.id,
      title: sourceData.title,
      icon: sourceData.icon,
      category: sourceData.category,
      totalQuestions: questions.length,
      questions,
    }

    const content = `// Kredorium Zakovat Platformasi - ${output.title} (${questions.length} savol)\n\nconst ${category.varName} = ${JSON.stringify(
      output,
      null,
      2
    )}\n\nexport default ${category.varName}\n`

    writeFileSync(resolve(CATEGORIES_DIR, category.file), content, 'utf8')
    console.log(`${category.id.padEnd(18)} ${questions.length} savol yozildi`)
  }

  const { total } = await syncQuestionCounts()
  console.log(`questionCounts.json yangilandi: ${total} savol`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
