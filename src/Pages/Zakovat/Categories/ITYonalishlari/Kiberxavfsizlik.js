const kiberxavfsizlik = {
  id: 'kiberxavfsizlik',
  title: 'Kiberxavfsizlik',
  icon: '🛡️',
  category: 'IT yo‘nalishlari',
  questions: [
    {
      id: 'kiber-1',
      question: 'Hashing jarayonining asosiy xususiyati nima?',
      options: [
        { id: 'A', text: 'Ma’lumotni ikki tomonlama shifrlash' },
        { id: 'B', text: 'Qaytarib bo‘lmaydigan bir tomonlama shifrlash' },
        { id: 'C', text: 'Fayllarni siqish' },
        { id: 'D', text: 'Tarmoq tezligini oshirish' },
      ],
      correct: 'B',
      xp: 250,
    },
    {
      id: 'kiber-2',
      question: 'Parollarni saqlashning eng xavfsiz usuli qaysi?',
      options: [
        { id: 'A', text: 'Tuz (salt) qo‘shilgan hash' },
        { id: 'B', text: 'Ochiq matn ko‘rinishida' },
        { id: 'C', text: 'Base64 bilan kodlash' },
        { id: 'D', text: 'Fayl nomiga yozish' },
      ],
      correct: 'A',
      xp: 300,
    },
    {
      id: 'kiber-3',
      question: 'Phishing hujumi nima?',
      options: [
        { id: 'A', text: 'Serverdagi ortiqcha yuklama' },
        { id: 'B', text: 'Tarmoq kabelini uzish' },
        { id: 'C', text: 'Aldash yo‘li bilan maxfiy ma’lumotlarni qo‘lga kiritish' },
        { id: 'D', text: 'Dastur kodini optimallashtirish' },
      ],
      correct: 'C',
      xp: 250,
    },
    {
      id: 'kiber-4',
      question: 'HTTPS protokoli qaysi texnologiya asosida xavfsiz aloqa o‘rnatadi?',
      options: [
        { id: 'A', text: 'FTP' },
        { id: 'B', text: 'SMTP' },
        { id: 'C', text: 'UDP' },
        { id: 'D', text: 'TLS/SSL' },
      ],
      correct: 'D',
      xp: 300,
    },
  ],
}

export default kiberxavfsizlik
