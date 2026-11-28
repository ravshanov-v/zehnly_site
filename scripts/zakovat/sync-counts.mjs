import { readdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dedupeQuestions, sanitizeQuestion } from '../../src/Pages/Zakovat/Categories/questions.js'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const CATEGORIES_DIR = resolve(ROOT, 'src/Pages/Zakovat/Categories')
const OUTPUT_FILE = resolve(ROOT, 'src/data/questionCounts.json')
const IGNORED_FILES = new Set(['index.js', 'meta.js', 'questions.js'])

function collectQuestionFiles(directory) {
  const files = []

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...collectQuestionFiles(entryPath))
      continue
    }

    if (extname(entry.name) !== '.js' || IGNORED_FILES.has(entry.name)) continue

    files.push(entryPath)
  }

  return files.sort()
}

async function countQuestions(filePath) {
  const module = await import(pathToFileURL(filePath).href)
  const data = module.default ?? Object.values(module)[0]
  const questions = Array.isArray(data?.questions) ? data.questions : []
  const unique = dedupeQuestions(questions.map(sanitizeQuestion))

  return {
    id: data?.id ?? basename(filePath, '.js'),
    count: unique.length,
  }
}

export async function syncQuestionCounts() {
  const categories = {}
  const files = collectQuestionFiles(CATEGORIES_DIR)

  for (const filePath of files) {
    const { id, count } = await countQuestions(filePath)
    categories[id] = count
  }

  const sortedCategories = Object.fromEntries(
    Object.entries(categories).sort(([left], [right]) => left.localeCompare(right))
  )
  const total = Object.values(sortedCategories).reduce((sum, count) => sum + count, 0)
  const payload = { categories: sortedCategories, total }

  writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  return payload
}

const invokedDirectly =
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url

if (invokedDirectly) {
  syncQuestionCounts()
    .then(({ categories, total }) => {
      for (const [id, count] of Object.entries(categories)) {
        console.log(`${id.padEnd(18)} ${count} savol`)
      }
      console.log(`Jami: ${total} savol`)
    })
    .catch((error) => {
      console.error(error)
      process.exitCode = 1
    })
}
