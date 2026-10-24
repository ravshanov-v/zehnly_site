const informatika = {
  id: 'informatika',
  title: 'Informatika',
  icon: '💻',
  category: 'Maktab fanlari',
  questions: [
    {
      id: 'informatika-1',
      question: 'Bir baytda nechta bit bor?',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '8' },
        { id: 'C', text: '16' },
        { id: 'D', text: '32' },
      ],
      correct: 'B',
      xp: 200,
    },
    {
      id: 'informatika-2',
      question: 'Kompyuterning asosiy hisoblash qurilmasi qaysi?',
      options: [
        { id: 'A', text: 'Protsessor' },
        { id: 'B', text: 'Operativ xotira' },
        { id: 'C', text: 'Qattiq disk' },
        { id: 'D', text: 'Monitor' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'informatika-3',
      question: 'HTML tili asosan nima uchun ishlatiladi?',
      options: [
        { id: 'A', text: 'Ma’lumotlar bazasini boshqarish' },
        { id: 'B', text: 'Server tomonidagi logikani yozish' },
        { id: 'C', text: 'Web sahifa tuzilmasini yaratish' },
        { id: 'D', text: 'Mobil ilova ishlab chiqish' },
      ],
      correct: 'C',
      xp: 250,
    },
    {
      id: 'informatika-4',
      question: 'Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?',
      options: [
        { id: 'A', text: '8' },
        { id: 'B', text: '9' },
        { id: 'C', text: '12' },
        { id: 'D', text: '10' },
      ],
      correct: 'D',
      xp: 300,
    },
  ],
}

export default informatika
