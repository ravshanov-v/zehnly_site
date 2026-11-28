import { readdirSync, readFileSync } from 'node:fs'
import { basename, dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const CATEGORIES_DIR = resolve(ROOT, 'src/Pages/Zakovat/Categories')
const COUNTS_FILE = resolve(ROOT, 'src/data/questionCounts.json')

const TARGET_PER_SUBJECT = 1000
const EXPECTED_TOTAL = 20000
const EXPECTED_SUBJECT_COUNT = 20

const GROUP_ORDER = ['MaktabFanlari', 'ITYonalishlari', 'Tillar']
const IGNORED_FILES = new Set(['index.js', 'meta.js', 'questions.js'])

const PLACEHOLDER_PATTERNS = [
  { pattern: /\bTODO\b/i, label: 'TODO' },
  { pattern: /\bTBD\b/i, label: 'TBD' },
  { pattern: /\bFIXME\b/i, label: 'FIXME' },
  { pattern: /\bREPLACE_ME\b/i, label: 'REPLACE_ME' },
  { pattern: /\bYOUR_ANSWER\b/i, label: 'YOUR_ANSWER' },
  { pattern: /\blorem ipsum\b/i, label: 'lorem ipsum' },
  { pattern: /\bplaceholder\b/i, label: 'placeholder' },
  { pattern: /\bXXX\b/, label: 'XXX' },
  { pattern: /\?{3,}/, label: '???' },
  { pattern: /\{\{[^}]*\}\}/, label: '{{...}}' },
  { pattern: /\[insert[^\]]*\]/i, label: '[insert...]' },
  { pattern: /<%/, label: '<%' },
  { pattern: /%[sd]/, label: '%s/%d' },
]

const BROKEN_PATTERNS = [
  { pattern: /\uFFFD/, label: 'replacement character (U+FFFD)' },
  { pattern: /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/, label: 'control character' },
  { pattern: /Ã[\u0080-\u00BF]/, label: 'mojibake (Ã...)' },
  { pattern: /â€[\u0080-\u2122]?/, label: 'mojibake (â€...)' },
  { pattern: /Ð[\u0080-\u00BF]/, label: 'mojibake (Ð...)' },
  { pattern: /Ñ[\u0080-\u00BF]/, label: 'mojibake (Ñ...)' },
]

function collectSubjectFiles() {
  const groupDirs = readdirSync(CATEGORIES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => {
      const leftIndex = GROUP_ORDER.indexOf(left)
      const rightIndex = GROUP_ORDER.indexOf(right)
      const leftRank = leftIndex === -1 ? GROUP_ORDER.length : leftIndex
      const rightRank = rightIndex === -1 ? GROUP_ORDER.length : rightIndex

      return leftRank - rightRank || left.localeCompare(right)
    })

  const files = []

  for (const group of groupDirs) {
    const groupDir = join(CATEGORIES_DIR, group)

    for (const entry of readdirSync(groupDir, { withFileTypes: true })) {
      if (!entry.isFile() || extname(entry.name) !== '.js') continue
      if (IGNORED_FILES.has(entry.name)) continue

      files.push(join(groupDir, entry.name))
    }
  }

  return files
}

function normalizeText(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ')
}

function normalizeStem(value) {
  return normalizeText(value)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[.,!?;:„“”‘’'"()[\]{}—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function readTextFields(question) {
  const fields = [{ label: 'question', value: question?.question }]
  const options = Array.isArray(question?.options) ? question.options : []

  options.forEach((option, index) => {
    fields.push({ label: `option ${index + 1} id`, value: option?.id })
    fields.push({ label: `option ${index + 1}`, value: option?.text })
  })

  fields.push({ label: 'explanation', value: question?.explanation })

  return fields
}

function inspectText(label, value) {
  const text = String(value ?? '')
  const problems = []

  for (const { pattern, label: name } of BROKEN_PATTERNS) {
    if (pattern.test(text)) problems.push(`broken character: ${name}`)
  }

  for (const { pattern, label: name } of PLACEHOLDER_PATTERNS) {
    if (pattern.test(text)) problems.push(`placeholder text: ${name}`)
  }

  if (problems.length > 0) return `${label} — ${problems.join(', ')}`

  return null
}

function formatLocation(subjectId, questionIndex, questionId) {
  return `${subjectId} #${questionIndex + 1}${questionId ? ` (${questionId})` : ''}`
}

async function loadSubject(filePath) {
  const module = await import(pathToFileURL(filePath).href)
  const data = module.default ?? Object.values(module)[0]
  const questions = Array.isArray(data?.questions) ? data.questions : []

  return { data, questions }
}

function printList(title, items, limit = 40) {
  if (items.length === 0) return

  console.log(`\n${title} (${items.length}):`)
  items.slice(0, limit).forEach((item) => console.log(`- ${item}`))

  if (items.length > limit) {
    console.log(`... and ${items.length - limit} more`)
  }
}

async function main() {
  const issues = {
    counts: [],
    duplicates: [],
    questions: [],
    text: [],
    metadata: [],
  }

  const files = collectSubjectFiles()
  const expectedFileCount = EXPECTED_SUBJECT_COUNT

  if (files.length !== expectedFileCount) {
    issues.counts.push(
      `Found ${files.length} subject files, expected ${expectedFileCount}`
    )
  }

  let countsData = { categories: {}, total: 0 }

  try {
    countsData = JSON.parse(readFileSync(COUNTS_FILE, 'utf8'))
  } catch {
    issues.metadata.push(`${relative(ROOT, COUNTS_FILE)} could not be read or parsed`)
  }

  const seenStems = new Map()
  const seenIds = new Map()
  const subjectIds = new Set()
  const counts = []
  let totalQuestions = 0
  let totalUnique = 0

  for (const filePath of files) {
    const { data, questions } = await loadSubject(filePath)
    const subjectId = data?.id || basename(filePath, '.js')
    const title = data?.title || subjectId
    const location = relative(ROOT, filePath)

    if (!data || typeof data !== 'object') {
      issues.metadata.push(`${location}: default export is not an object`)
      continue
    }

    if (subjectIds.has(subjectId)) {
      issues.metadata.push(`${location}: duplicate subject id "${subjectId}"`)
    }
    subjectIds.add(subjectId)

    if (questions.length !== TARGET_PER_SUBJECT) {
      issues.counts.push(
        `${subjectId} (${location}): ${questions.length} questions, expected ${TARGET_PER_SUBJECT}`
      )
    }

    if (
      data.totalQuestions !== undefined &&
      Number(data.totalQuestions) !== questions.length
    ) {
      issues.metadata.push(
        `${subjectId}: totalQuestions is ${data.totalQuestions}, found ${questions.length} questions`
      )
    }

    const declaredCount = countsData?.categories?.[subjectId]

    if (declaredCount === undefined) {
      issues.metadata.push(`${subjectId}: missing from src/data/questionCounts.json`)
    } else if (declaredCount !== questions.length) {
      issues.metadata.push(
        `${subjectId}: questionCounts.json says ${declaredCount}, found ${questions.length}`
      )
    }

    let uniqueInSubject = 0

    questions.forEach((question, index) => {
      const questionId = normalizeText(question?.id)
      const questionLabel = formatLocation(subjectId, index, questionId)
      const stem = normalizeText(question?.question)
      const normalizedStem = normalizeStem(question?.question)
      const options = Array.isArray(question?.options) ? question.options : []

      if (!question || typeof question !== 'object') {
        issues.questions.push(`${questionLabel}: question is not an object`)
        return
      }

      if (!questionId) {
        issues.questions.push(`${questionLabel}: missing question id`)
      } else {
        if (seenIds.has(questionId)) {
          issues.questions.push(
            `${questionLabel}: duplicate question id (first seen at ${seenIds.get(questionId)})`
          )
        } else {
          seenIds.set(questionId, questionLabel)
        }
      }

      if (!stem) {
        issues.questions.push(`${questionLabel}: missing or empty question text`)
      }

      if (normalizedStem) {
        if (seenStems.has(normalizedStem)) {
          const first = seenStems.get(normalizedStem)
          issues.duplicates.push(
            `${questionLabel} duplicates ${first.location}: "${stem.slice(0, 90)}"`
          )
        } else {
          seenStems.set(normalizedStem, { location: questionLabel })
          uniqueInSubject += 1
        }
      }

      if (!Array.isArray(question?.options)) {
        issues.questions.push(`${questionLabel}: options is not an array`)
      } else {
        if (options.length < 4) {
          issues.questions.push(
            `${questionLabel}: ${options.length} options, expected at least 4`
          )
        }

        const optionIds = new Set()
        const optionTexts = new Set()

        options.forEach((option, optionIndex) => {
          const optionLabel = `${questionLabel}, option ${optionIndex + 1}`
          const optionId = normalizeText(option?.id)
          const optionText = normalizeText(option?.text)

          if (!optionId) {
            issues.questions.push(`${optionLabel}: missing option id`)
          } else if (optionIds.has(optionId)) {
            issues.questions.push(`${optionLabel}: duplicate option id "${optionId}"`)
          } else {
            optionIds.add(optionId)
          }

          if (!optionText) {
            issues.questions.push(`${optionLabel}: empty option text`)
          } else if (optionTexts.has(optionText.toLowerCase())) {
            issues.questions.push(`${optionLabel}: duplicate option text "${optionText}"`)
          } else {
            optionTexts.add(optionText.toLowerCase())
          }
        })

        const correctIndex = question?.correctIndex

        if (correctIndex !== undefined) {
          const validIndex =
            typeof correctIndex === 'number' &&
            Number.isInteger(correctIndex) &&
            correctIndex >= 0 &&
            correctIndex < options.length

          if (!validIndex) {
            issues.questions.push(
              `${questionLabel}: invalid correctIndex ${JSON.stringify(correctIndex)} (must be an integer between 0 and ${
                options.length - 1
              })`
            )
          } else if (question?.correct !== undefined) {
            const indexedOption = options[correctIndex]
            const declaredOption = options.find(
              (option) => normalizeText(option?.id) === normalizeText(question.correct)
            )

            if (indexedOption && declaredOption && indexedOption.id !== declaredOption.id) {
              issues.questions.push(
                `${questionLabel}: correctIndex points to "${indexedOption.id}" but correct is "${question.correct}"`
              )
            }
          }
        }

        const hasCorrect = question?.correct !== undefined && question?.correct !== null
        const hasCorrectIndex = correctIndex !== undefined

        if (!hasCorrect && !hasCorrectIndex) {
          issues.questions.push(`${questionLabel}: missing correct answer`)
        } else if (hasCorrect) {
          const correctOption = options.find(
            (option) => normalizeText(option?.id) === normalizeText(question.correct)
          )

          if (!correctOption) {
            issues.questions.push(
              `${questionLabel}: correct "${question.correct}" does not match any option id`
            )
          }
        }
      }

      for (const { label, value } of readTextFields(question)) {
        const problem = inspectText(label, value)
        if (problem) issues.text.push(`${questionLabel}: ${problem}`)
      }
    })

    counts.push({
      id: subjectId,
      title,
      count: questions.length,
      unique: uniqueInSubject,
      file: location,
    })

    totalQuestions += questions.length
    totalUnique += uniqueInSubject
  }

  if (totalQuestions !== EXPECTED_TOTAL) {
    issues.counts.push(
      `Total questions is ${totalQuestions}, expected ${EXPECTED_TOTAL}`
    )
  }

  if (Number(countsData?.total) !== totalQuestions) {
    issues.metadata.push(
      `questionCounts.json total is ${countsData?.total}, expected ${totalQuestions}`
    )
  }

  console.log('Question bank audit')
  console.log('')
  console.log(
    `${'Subject'.padEnd(20)} ${'Count'.padStart(6)} ${'Unique'.padStart(7)}  File`
  )

  for (const item of counts) {
    const status = item.count === TARGET_PER_SUBJECT ? ' ' : '!'
    console.log(
      `${status}${item.id.padEnd(19)} ${String(item.count).padStart(6)} ${String(
        item.unique
      ).padStart(7)}  ${item.file}`
    )
  }

  console.log('')
  console.log(`Subjects: ${counts.length}`)
  console.log(`Questions: ${totalQuestions.toLocaleString('en-US')}`)
  console.log(`Unique question texts: ${totalUnique.toLocaleString('en-US')}`)

  printList('Question count issues', issues.counts)
  printList('Duplicate question texts', issues.duplicates)
  printList('Question / option / answer issues', issues.questions)
  printList('Broken characters or placeholder text', issues.text)
  printList('Metadata issues', issues.metadata)

  const issueCount = Object.values(issues).reduce(
    (total, items) => total + items.length,
    0
  )

  console.log('')

  if (issueCount > 0) {
    console.error(`Audit failed: ${issueCount} issue(s) found.`)
    process.exitCode = 1
    return
  }

  console.log('Audit passed: 20 subjects, 20,000 valid and unique questions.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
