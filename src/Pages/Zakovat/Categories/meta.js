import questionCounts from '../../../data/questionCounts.json'

const counts = questionCounts?.categories ?? {}

function withCount(category) {
  return {
    ...category,
    questionCount: counts[category.id] ?? 0,
  }
}

const maktabFanlari = [
  { id: 'matematika', title: 'Matematika', category: 'Maktab fanlari' },
  { id: 'adabiyot', title: 'Adabiyot', category: 'Maktab fanlari' },
  { id: 'tarix', title: 'Tarix', category: 'Maktab fanlari' },
  { id: 'fizika', title: 'Fizika', category: 'Maktab fanlari' },
  { id: 'kimyo', title: 'Kimyo', category: 'Maktab fanlari' },
  { id: 'biologiya', title: 'Biologiya', category: 'Maktab fanlari' },
  { id: 'ona_tili', title: 'Ona tili', category: 'Maktab fanlari' },
  { id: 'geografiya', title: 'Geografiya', category: 'Maktab fanlari' },
  { id: 'informatika', title: 'Informatika', category: 'Maktab fanlari' },
  { id: 'huquq', title: 'Huquq', category: 'Maktab fanlari' },
].map(withCount)

const itYonalishlari = [
  { id: 'frontend', title: 'Frontend', category: "IT yo'nalishlari" },
  { id: 'backend', title: 'Backend', category: "IT yo'nalishlari" },
  { id: 'mobile-dev', title: 'Mobile Dev', category: "IT yo'nalishlari" },
  { id: 'kiberxavfsizlik', title: 'Kiberxavfsizlik', category: "IT yo'nalishlari" },
  { id: 'suniy-intellekt', title: "Sun'iy intellekt", category: "IT yo'nalishlari" },
  { id: 'dizayn-ui-ux', title: 'Dizayn UI/UX', category: "IT yo'nalishlari" },
].map(withCount)

const tillar = [
  { id: 'ingliz-tili', title: 'Ingliz tili', category: 'Tillar' },
  { id: 'rus-tili', title: 'Rus tili', category: 'Tillar' },
  { id: 'turk-tili', title: 'Turk tili', category: 'Tillar' },
  { id: 'nemis-tili', title: 'Nemis tili', category: 'Tillar' },
].map(withCount)

export const categoryMeta = [...maktabFanlari, ...itYonalishlari, ...tillar]

export const categoryGroups = [
  {
    id: 'maktab-fanlari',
    title: 'Maktab fanlari',
    description: "Umumta'lim fanlari bo'yicha bilim sinovi",
    items: maktabFanlari,
  },
  {
    id: 'it-yonalishlari',
    title: "IT yo'nalishlari",
    description: "Zamonaviy texnologiyalar va kasb yo'nalishlari",
    items: itYonalishlari,
  },
  {
    id: 'tillar',
    title: 'Tillar',
    description: "Chet tillari bo'yicha lug'at va grammatika",
    items: tillar,
  },
]

export const totalQuestions = categoryMeta.reduce(
  (total, category) => total + category.questionCount,
  0
)

export function getCategoryMeta(categoryId) {
  return categoryMeta.find((category) => category.id === categoryId) || null
}
