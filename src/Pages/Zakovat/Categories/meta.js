const maktabFanlari = [
  { id: 'matematika', title: 'Matematika', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'adabiyot', title: 'Adabiyot', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'tarix', title: 'Tarix', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'fizika', title: 'Fizika', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'kimyo', title: 'Kimyo', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'biologiya', title: 'Biologiya', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'ona_tili', title: 'Ona tili', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'geografiya', title: 'Geografiya', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'informatika', title: 'Informatika', category: 'Maktab fanlari', questionCount: 1000 },
  { id: 'huquq', title: 'Huquq', category: 'Maktab fanlari', questionCount: 1000 },
]

const itYonalishlari = [
  { id: 'frontend', title: 'Frontend', category: "IT yo'nalishlari", questionCount: 1000 },
  { id: 'backend', title: 'Backend', category: "IT yo'nalishlari", questionCount: 1000 },
  { id: 'mobile-dev', title: 'Mobile Dev', category: "IT yo'nalishlari", questionCount: 1000 },
  { id: 'kiberxavfsizlik', title: 'Kiberxavfsizlik', category: "IT yo'nalishlari", questionCount: 1000 },
  { id: 'suniy-intellekt', title: "Sun'iy intellekt", category: "IT yo'nalishlari", questionCount: 1000 },
  { id: 'dizayn-ui-ux', title: 'Dizayn UI/UX', category: "IT yo'nalishlari", questionCount: 1000 },
]

const tillar = [
  { id: 'ingliz-tili', title: 'Ingliz tili', category: 'Tillar', questionCount: 1000 },
  { id: 'rus-tili', title: 'Rus tili', category: 'Tillar', questionCount: 1000 },
  { id: 'turk-tili', title: 'Turk tili', category: 'Tillar', questionCount: 1000 },
  { id: 'nemis-tili', title: 'Nemis tili', category: 'Tillar', questionCount: 1000 },
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
