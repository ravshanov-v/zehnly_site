const suniyIntellekt = {
  id: 'suniy-intellekt',
  title: "Sun'iy intellekt",
  icon: '🤖',
  category: 'IT yo‘nalishlari',
  questions: [
    {
      id: 'ai-1',
      question: 'Prompt nima?',
      options: [
        { id: 'A', text: "Sun'iy intellektga beriladigan ko'rsatma yoki so'rov" },
        { id: 'B', text: 'Modelning ichki og‘irliklari' },
        { id: 'C', text: 'Server quvvati' },
        { id: 'D', text: 'Dasturlash tili' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'ai-2',
      question: "Machine Learning'ning asosiy g'oyasi nima?",
      options: [
        { id: 'A', text: 'Qo‘lda qoidalar yozish' },
        { id: 'B', text: 'Faqat matematik hisob-kitoblar' },
        { id: 'C', text: "Ma'lumotlar asosida naqshlarni o'rganish" },
        { id: 'D', text: 'Tarmoqni sozlash' },
      ],
      correct: 'C',
      xp: 250,
    },
    {
      id: 'ai-3',
      question: 'LLM qisqartmasi nimani anglatadi?',
      options: [
        { id: 'A', text: 'Low Level Machine' },
        { id: 'B', text: 'Large Language Model' },
        { id: 'C', text: 'Logical Learning Method' },
        { id: 'D', text: 'Linear Layer Model' },
      ],
      correct: 'B',
      xp: 300,
    },
    {
      id: 'ai-4',
      question: 'AI modelini o‘qitish (training) jarayoni nima?',
      options: [
        { id: 'A', text: 'Interfeys dizaynini yaratish' },
        { id: 'B', text: 'Serverni yangilash' },
        { id: 'C', text: 'Foydalanuvchi so‘rovlarini saqlash' },
        { id: 'D', text: 'Modelni ma’lumotlar bilan o‘rgatish' },
      ],
      correct: 'D',
      xp: 300,
    },
  ],
}

export default suniyIntellekt
