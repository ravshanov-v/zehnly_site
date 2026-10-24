import maktabFanlari from './MaktabFanlari/index.js'
import itYonalishlari from './ITYonalishlari/index.js'
import tillar from './Tillar/index.js'

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
    description: 'Zamonaviy texnologiyalar va kasb yo‘nalishlari',
    items: itYonalishlari,
  },
  {
    id: 'tillar',
    title: 'Tillar',
    description: 'Chet tillari bo‘yicha lug‘at va grammatika',
    items: tillar,
  },
]

export const allCategories = [...maktabFanlari, ...itYonalishlari, ...tillar]

export function getCategoryById(categoryId) {
  return allCategories.find((category) => category.id === categoryId) || null
}

export function getRandomQuestion(categoryId = null) {
  const pool = categoryId
    ? allCategories.filter((category) => category.id === categoryId)
    : allCategories

  const source = pool.length > 0 ? pool : allCategories
  const category = source[Math.floor(Math.random() * source.length)]
  const questions = category.questions
  const question = questions[Math.floor(Math.random() * questions.length)]

  return {
    ...question,
    categoryId: category.id,
    categoryTitle: category.title,
    categoryGroup: category.category,
    icon: category.icon,
  }
}
