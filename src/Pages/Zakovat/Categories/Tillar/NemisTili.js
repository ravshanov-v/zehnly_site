const nemisTili = {
  id: 'nemis-tili',
  title: 'Nemis tili',
  icon: '🇩🇪',
  category: 'Tillar',
  questions: [
    {
      id: 'nemis-1',
      question: '“Hallo” so‘zining o‘zbekcha tarjimasi qaysi?',
      options: [
        { id: 'A', text: 'Salom' },
        { id: 'B', text: 'Rahmat' },
        { id: 'C', text: 'Xayr' },
        { id: 'D', text: 'Iltimos' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'nemis-2',
      question: '“Danke” so‘zining o‘zbekcha tarjimasi nima?',
      options: [
        { id: 'A', text: 'Salom' },
        { id: 'B', text: 'Rahmat' },
        { id: 'C', text: 'Kechirasiz' },
        { id: 'D', text: 'Xayr' },
      ],
      correct: 'B',
      xp: 200,
    },
    {
      id: 'nemis-3',
      question: 'Nemis tilida barcha otlar qanday yoziladi?',
      options: [
        { id: 'A', text: 'Kichik harf bilan' },
        { id: 'B', text: 'Faqat qo‘shtirnoq ichida' },
        { id: 'C', text: 'Bosh harf bilan' },
        { id: 'D', text: 'Faqat bo‘g‘in boshida' },
      ],
      correct: 'C',
      xp: 300,
    },
    {
      id: 'nemis-4',
      question: '“Ich ___ Student.” bo‘sh joyga mos fe’lni tanlang.',
      options: [
        { id: 'A', text: 'bist' },
        { id: 'B', text: 'sind' },
        { id: 'C', text: 'seid' },
        { id: 'D', text: 'bin' },
      ],
      correct: 'D',
      xp: 250,
    },
  ],
}

export default nemisTili
