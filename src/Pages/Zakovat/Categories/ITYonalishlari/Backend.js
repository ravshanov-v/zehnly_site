const backend = {
  id: 'backend',
  title: 'Backend',
  icon: '⚙️',
  category: 'IT yo‘nalishlari',
  questions: [
    {
      id: 'backend-1',
      question: 'HTTP 404 status kodi nimani bildiradi?',
      options: [
        { id: 'A', text: 'Server ichki xatosi' },
        { id: 'B', text: 'So‘ralgan resurs topilmadi' },
        { id: 'C', text: 'Muvaffaqiyatli bajarildi' },
        { id: 'D', text: 'Ruxsat berilmagan' },
      ],
      correct: 'B',
      xp: 200,
    },
    {
      id: 'backend-2',
      question: "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?",
      options: [
        { id: 'A', text: 'POST' },
        { id: 'B', text: 'GET' },
        { id: 'C', text: 'PUT' },
        { id: 'D', text: 'DELETE' },
      ],
      correct: 'A',
      xp: 200,
    },
    {
      id: 'backend-3',
      question: 'SQL nima?',
      options: [
        { id: 'A', text: 'Web sahifa yaratish tili' },
        { id: 'B', text: 'Operatsion tizim' },
        { id: 'C', text: 'Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili' },
        { id: 'D', text: 'Dasturlash muhiti' },
      ],
      correct: 'C',
      xp: 250,
    },
    {
      id: 'backend-4',
      question: 'JWT tokenining asosiy vazifasi nima?',
      options: [
        { id: 'A', text: 'Rasmlarni siqish' },
        { id: 'B', text: 'Ma’lumotlar bazasini zaxiralash' },
        { id: 'C', text: 'Server tezligini oshirish' },
        { id: 'D', text: 'Foydalanuvchi autentifikatsiyasini tasdiqlash' },
      ],
      correct: 'D',
      xp: 300,
    },
  ],
}

export default backend
