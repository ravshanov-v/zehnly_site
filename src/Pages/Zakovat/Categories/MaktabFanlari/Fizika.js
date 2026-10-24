const fizika = {
  id: 'fizika',
  title: 'Fizika',
  icon: '⚛️',
  category: 'Maktab fanlari',
  questions: [
    {
      id: 'fizika-1',
      question: "Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      options: [
        { id: 'A', text: 'F = m · a' },
        { id: 'B', text: 'E = m · c²' },
        { id: 'C', text: 'A = F · s' },
        { id: 'D', text: 'P = m · g' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'fizika-2',
      question: "Yorug'likning vakuumdagi tezligi taxminan qancha?",
      options: [
        { id: 'A', text: '3 000 km/s' },
        { id: 'B', text: '30 000 km/s' },
        { id: 'C', text: '300 000 km/s' },
        { id: 'D', text: '3 000 000 km/s' },
      ],
      correct: 'C',
      xp: 250,
    },
    {
      id: 'fizika-3',
      question: 'Normal sharoitda suv qaysi haroratda qaynaydi?',
      options: [
        { id: 'A', text: '0 °C' },
        { id: 'B', text: '100 °C' },
        { id: 'C', text: '120 °C' },
        { id: 'D', text: '212 °C' },
      ],
      correct: 'B',
      xp: 200,
    },
    {
      id: 'fizika-4',
      question: "Elektr tok kuchining o'lchov birligi qaysi?",
      options: [
        { id: 'A', text: 'Volt' },
        { id: 'B', text: 'Om' },
        { id: 'C', text: 'Vatt' },
        { id: 'D', text: 'Amper' },
      ],
      correct: 'D',
      xp: 250,
    },
  ],
}

export default fizika
