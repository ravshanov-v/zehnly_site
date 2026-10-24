const frontend = {
  id: 'frontend',
  title: 'Frontend',
  icon: '🖥️',
  category: 'IT yo‘nalishlari',
  questions: [
    {
      id: 'frontend-1',
      question: "React'da komponent holatini boshqarish uchun qaysi hook ishlatiladi?",
      options: [
        { id: 'A', text: 'useState' },
        { id: 'B', text: 'useContext' },
        { id: 'C', text: 'useRef' },
        { id: 'D', text: 'useEffect' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'frontend-2',
      question: 'CSS Flexbox’da elementlarni asosiy o‘q bo‘ylab markazlash uchun qaysi xususiyat ishlatiladi?',
      options: [
        { id: 'A', text: 'align-items: center' },
        { id: 'B', text: 'justify-content: center' },
        { id: 'C', text: 'text-align: center' },
        { id: 'D', text: 'margin: auto 0' },
      ],
      correct: 'B',
      xp: 250,
    },
    {
      id: 'frontend-3',
      question: "JavaScript'dagi === operatori nimani tekshiradi?",
      options: [
        { id: 'A', text: 'Faqat qiymatni' },
        { id: 'B', text: 'Faqat ma’lumot turini' },
        { id: 'C', text: 'Qiymat va ma’lumot turini qat’iy' },
        { id: 'D', text: 'Xotira manzilini' },
      ],
      correct: 'C',
      xp: 250,
    },
    {
      id: 'frontend-4',
      question: "React'da ro'yxat elementlariga key prop nima uchun beriladi?",
      options: [
        { id: 'A', text: 'Stillarni qo‘llash uchun' },
        { id: 'B', text: 'Event handler ulash uchun' },
        { id: 'C', text: 'Komponentni eksport qilish uchun' },
        { id: 'D', text: 'Elementlarni unikal identifikatsiya qilish uchun' },
      ],
      correct: 'D',
      xp: 300,
    },
  ],
}

export default frontend
