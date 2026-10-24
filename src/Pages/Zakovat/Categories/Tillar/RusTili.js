const rusTili = {
  id: 'rus-tili',
  title: 'Rus tili',
  icon: '🇷🇺',
  category: 'Tillar',
  questions: [
    {
      id: 'rus-1',
      question: '“Здравствуйте” so‘zining o‘zbekcha tarjimasi qaysi?',
      options: [
        { id: 'A', text: 'Assalomu alaykum' },
        { id: 'B', text: 'Xayr' },
        { id: 'C', text: 'Rahmat' },
        { id: 'D', text: 'Kechirasiz' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'rus-2',
      question: '“книга” so‘zining grammatik jinsi qaysi?',
      options: [
        { id: 'A', text: 'Mujskoy rod (erkak jinsi)' },
        { id: 'B', text: 'Sredniy rod (o‘rta jins)' },
        { id: 'C', text: 'Jenskiy rod (ayol jinsi)' },
        { id: 'D', text: 'Jinsi yo‘q' },
      ],
      correct: 'C',
      xp: 300,
    },
    {
      id: 'rus-3',
      question: '“Он ___ в школу.” bo‘sh joyga mos fe’lni tanlang.',
      options: [
        { id: 'A', text: 'читает' },
        { id: 'B', text: 'идёт' },
        { id: 'C', text: 'пишет' },
        { id: 'D', text: 'говорит' },
      ],
      correct: 'B',
      xp: 250,
    },
    {
      id: 'rus-4',
      question: '“Спасибо” so‘zining o‘zbekcha tarjimasi nima?',
      options: [
        { id: 'A', text: 'Salom' },
        { id: 'B', text: 'Xayr' },
        { id: 'C', text: 'Kechirasiz' },
        { id: 'D', text: 'Rahmat' },
      ],
      correct: 'D',
      xp: 200,
    },
  ],
}

export default rusTili
