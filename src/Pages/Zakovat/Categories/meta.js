const maktabFanlari = [
  { id: 'matematika', title: 'Matematika', category: 'Maktab fanlari', questionCount: 95 },
  { id: 'adabiyot', title: 'Adabiyot', category: 'Maktab fanlari', questionCount: 628 },
  { id: 'tarix', title: 'Tarix', category: 'Maktab fanlari', questionCount: 83 },
  { id: 'fizika', title: 'Fizika', category: 'Maktab fanlari', questionCount: 199 },
  { id: 'kimyo', title: 'Kimyo', category: 'Maktab fanlari', questionCount: 134 },
  { id: 'biologiya', title: 'Biologiya', category: 'Maktab fanlari', questionCount: 246 },
  { id: 'ona_tili', title: 'Ona tili', category: 'Maktab fanlari', questionCount: 95 },
  { id: 'geografiya', title: 'Geografiya', category: 'Maktab fanlari', questionCount: 186 },
  { id: 'informatika', title: 'Informatika', category: 'Maktab fanlari', questionCount: 157 },
  { id: 'huquq', title: 'Huquq', category: 'Maktab fanlari', questionCount: 123 },
]

const itYonalishlari = [
  { id: 'frontend', title: 'Frontend', category: "IT yo'nalishlari", questionCount: 4 },
  { id: 'backend', title: 'Backend', category: "IT yo'nalishlari", questionCount: 4 },
  { id: 'mobile-dev', title: 'Mobile Dev', category: "IT yo'nalishlari", questionCount: 4 },
  { id: 'kiberxavfsizlik', title: 'Kiberxavfsizlik', category: "IT yo'nalishlari", questionCount: 4 },
  { id: 'suniy-intellekt', title: "Sun'iy intellekt", category: "IT yo'nalishlari", questionCount: 4 },
  { id: 'dizayn-ui-ux', title: 'Dizayn UI/UX', category: "IT yo'nalishlari", questionCount: 4 },
]

const tillar = [
  { id: 'ingliz-tili', title: 'Ingliz tili', category: 'Tillar', questionCount: 98 },
  { id: 'rus-tili', title: 'Rus tili', category: 'Tillar', questionCount: 78 },
  { id: 'turk-tili', title: 'Turk tili', category: 'Tillar', questionCount: 4 },
  { id: 'nemis-tili', title: 'Nemis tili', category: 'Tillar', questionCount: 4 },
]

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
