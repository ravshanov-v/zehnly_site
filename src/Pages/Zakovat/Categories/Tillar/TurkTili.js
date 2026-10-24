const turkTili = {
  id: 'turk-tili',
  title: 'Turk tili',
  icon: '🇹🇷',
  category: 'Tillar',
  questions: [
    {
      id: 'turk-1',
      question: '“Merhaba” so‘zining o‘zbekcha tarjimasi qaysi?',
      options: [
        { id: 'A', text: 'Xayr' },
        { id: 'B', text: 'Salom' },
        { id: 'C', text: 'Rahmat' },
        { id: 'D', text: 'Kechirasiz' },
      ],
      correct: 'B',
      xp: 200,
    },
    {
      id: 'turk-2',
      question: '“Teşekkür ederim” iborasining tarjimasi nima?',
      options: [
        { id: 'A', text: 'Rahmat' },
        { id: 'B', text: 'Salom' },
        { id: 'C', text: 'Yaxshi kun' },
        { id: 'D', text: 'Xayr' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'turk-3',
      question: 'Zamonaviy turk alifbosida nechta harf bor?',
      options: [
        { id: 'A', text: '26' },
        { id: 'B', text: '28' },
        { id: 'C', text: '29' },
        { id: 'D', text: '32' },
      ],
      correct: 'C',
      xp: 300,
    },
    {
      id: 'turk-4',
      question: '“Kitap” so‘zining o‘zbekcha tarjimasi nima?',
      options: [
        { id: 'A', text: 'Qalam' },
        { id: 'B', text: 'Daftar' },
        { id: 'C', text: 'Maktab' },
        { id: 'D', text: 'Kitob' },
      ],
      correct: 'D',
      xp: 250,
    },
  ],
}

export default turkTili
