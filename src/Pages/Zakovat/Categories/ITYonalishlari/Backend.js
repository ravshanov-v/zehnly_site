// Kredorium Zakovat Platformasi - Backend (1000 savol)

const backend = {
  "id": "backend",
  "title": "Backend",
  "icon": "⚙️",
  "category": "IT yo‘nalishlari",
  "totalQuestions": 1000,
  "questions": [
    {
      "id": "backend-1",
      "question": "HTTP 404 status kodi nimani bildiradi?",
      "options": [
        {
          "id": "A",
          "text": "So‘ralgan resurs topilmadi"
        },
        {
          "id": "B",
          "text": "Server ichki xatosi"
        },
        {
          "id": "C",
          "text": "Muvaffaqiyatli bajarildi"
        },
        {
          "id": "D",
          "text": "Ruxsat berilmagan"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-2",
      "question": "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "GET"
        },
        {
          "id": "B",
          "text": "POST"
        },
        {
          "id": "C",
          "text": "PUT"
        },
        {
          "id": "D",
          "text": "DELETE"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "To'g'ri javob: POST."
    },
    {
      "id": "backend-3",
      "question": "SQL nima?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion tizim"
        },
        {
          "id": "B",
          "text": "Web sahifa yaratish tili"
        },
        {
          "id": "C",
          "text": "Dasturlash muhiti"
        },
        {
          "id": "D",
          "text": "Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
    },
    {
      "id": "backend-4",
      "question": "JWT tokenining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Ma’lumotlar bazasini zaxiralash"
        },
        {
          "id": "B",
          "text": "Server tezligini oshirish"
        },
        {
          "id": "C",
          "text": "Foydalanuvchi autentifikatsiyasini tasdiqlash"
        },
        {
          "id": "D",
          "text": "Rasmlarni siqish"
        }
      ],
      "correct": "C",
      "xp": 300,
      "explanation": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
    },
    {
      "id": "backend-5",
      "question": "Backend bo'yicha: Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "32"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "8"
        },
        {
          "id": "D",
          "text": "4"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "1 bayt = 8 bit."
    },
    {
      "id": "backend-6",
      "question": "Backend bo'yicha: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira"
        },
        {
          "id": "B",
          "text": "Protsessor"
        },
        {
          "id": "C",
          "text": "Monitor"
        },
        {
          "id": "D",
          "text": "Qattiq disk"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-7",
      "question": "Backend bo'yicha: HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma’lumotlar bazasini boshqarish"
        },
        {
          "id": "B",
          "text": "Server tomonidagi logikani yozish"
        },
        {
          "id": "C",
          "text": "Mobil ilova ishlab chiqish"
        },
        {
          "id": "D",
          "text": "Web sahifa tuzilmasini yaratish"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "backend-8",
      "question": "Backend bo'yicha: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "9"
        },
        {
          "id": "B",
          "text": "12"
        },
        {
          "id": "C",
          "text": "10"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "correct": "C",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-9",
      "question": "Backend bo'yicha: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "512 bayt"
        },
        {
          "id": "B",
          "text": "2048 bayt"
        },
        {
          "id": "C",
          "text": "1000 bayt"
        },
        {
          "id": "D",
          "text": "1024 bayt"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-10",
      "question": "Backend bo'yicha: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 KB"
        },
        {
          "id": "B",
          "text": "1000 KB"
        },
        {
          "id": "C",
          "text": "1024 bayt"
        },
        {
          "id": "D",
          "text": "2048 KB"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-11",
      "question": "Backend bo'yicha: 1 Gigabayt (GB) necha Megabaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 KB"
        },
        {
          "id": "B",
          "text": "1000 MB"
        },
        {
          "id": "C",
          "text": "4096 MB"
        },
        {
          "id": "D",
          "text": "1024 MB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "backend-12",
      "question": "Backend bo'yicha: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
      "options": [
        {
          "id": "A",
          "text": "1 bayt (8 bit)"
        },
        {
          "id": "B",
          "text": "2 bayt"
        },
        {
          "id": "C",
          "text": "4 bit"
        },
        {
          "id": "D",
          "text": "16 bit"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "backend-13",
      "question": "Backend bo'yicha: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "8 bit"
        },
        {
          "id": "B",
          "text": "2 bayt (16 bit)"
        },
        {
          "id": "C",
          "text": "1 bayt"
        },
        {
          "id": "D",
          "text": "4 bayt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "backend-14",
      "question": "Backend bo'yicha: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = log₂i"
        },
        {
          "id": "B",
          "text": "N = 2^i"
        },
        {
          "id": "C",
          "text": "I = m · v"
        },
        {
          "id": "D",
          "text": "I = 2^N"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "backend-15",
      "question": "Backend bo'yicha: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "B",
          "text": "K, L, M, N, O, P"
        },
        {
          "id": "C",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        },
        {
          "id": "D",
          "text": "X, Y, Z, W, P, Q"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "backend-16",
      "question": "Backend bo'yicha: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "16"
        },
        {
          "id": "B",
          "text": "14"
        },
        {
          "id": "C",
          "text": "15"
        },
        {
          "id": "D",
          "text": "7"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-17",
      "question": "Backend bo'yicha: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "100000"
        },
        {
          "id": "B",
          "text": "1111"
        },
        {
          "id": "C",
          "text": "1000"
        },
        {
          "id": "D",
          "text": "10000"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-18",
      "question": "Backend bo'yicha: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
      "options": [
        {
          "id": "A",
          "text": "7"
        },
        {
          "id": "B",
          "text": "F"
        },
        {
          "id": "C",
          "text": "9"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "backend-19",
      "question": "Backend bo'yicha: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "26"
        },
        {
          "id": "C",
          "text": "24"
        },
        {
          "id": "D",
          "text": "16"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-20",
      "question": "Backend bo'yicha: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "Fleshka"
        },
        {
          "id": "C",
          "text": "Qattiq disk (HDD/SSD)"
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "backend-21",
      "question": "Backend bo'yicha: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat foydalanuvchi fayllari"
        },
        {
          "id": "B",
          "text": "O'yinlar"
        },
        {
          "id": "C",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "D",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "backend-22",
      "question": "Backend bo'yicha: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
        },
        {
          "id": "B",
          "text": "Uzoq muddat fayllarni saqlaydi"
        },
        {
          "id": "C",
          "text": "Elektr toki beradi"
        },
        {
          "id": "D",
          "text": "Grafik tasvirlarni chizadi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "backend-23",
      "question": "Backend bo'yicha: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk (HDD)"
        },
        {
          "id": "B",
          "text": "Kesh xotira"
        },
        {
          "id": "C",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "D",
          "text": "Registr"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "backend-24",
      "question": "Backend bo'yicha: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "DVD-RW"
        },
        {
          "id": "B",
          "text": "CD-ROM"
        },
        {
          "id": "C",
          "text": "FDD"
        },
        {
          "id": "D",
          "text": "SSD (Solid State Drive)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "backend-25",
      "question": "Backend bo'yicha: Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "BPS"
        },
        {
          "id": "B",
          "text": "Vatt"
        },
        {
          "id": "C",
          "text": "Bayt"
        },
        {
          "id": "D",
          "text": "Gers (Gs, MGs, GGs)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "backend-26",
      "question": "Backend bo'yicha: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Printer"
        },
        {
          "id": "B",
          "text": "Skaner"
        },
        {
          "id": "C",
          "text": "Plotter"
        },
        {
          "id": "D",
          "text": "Monitor"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-27",
      "question": "Backend bo'yicha: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Skaner"
        },
        {
          "id": "B",
          "text": "Klaviatura"
        },
        {
          "id": "C",
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Mikrofon"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-28",
      "question": "Backend bo'yicha: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Plotter (grafik yasagich)"
        },
        {
          "id": "B",
          "text": "Printer"
        },
        {
          "id": "C",
          "text": "Digitayzer"
        },
        {
          "id": "D",
          "text": "Skaner"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "backend-29",
      "question": "Backend bo'yicha: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "C",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "D",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "backend-30",
      "question": "Backend bo'yicha: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkalasi chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Hech qachon"
        },
        {
          "id": "C",
          "text": "Biri chin bo'lganda"
        },
        {
          "id": "D",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "backend-31",
      "question": "Backend bo'yicha: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkita sonni qo'shadi"
        },
        {
          "id": "B",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        },
        {
          "id": "C",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "D",
          "text": "Sonni nolga tenglashtiradi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "backend-32",
      "question": "Backend bo'yicha: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat qisqalik va tezlik"
        },
        {
          "id": "B",
          "text": "Ranglilik va hajm"
        },
        {
          "id": "C",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "D",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "backend-33",
      "question": "Backend bo'yicha: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm"
        },
        {
          "id": "B",
          "text": "Oval"
        },
        {
          "id": "C",
          "text": "Romb"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-34",
      "question": "Backend bo'yicha: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "B",
          "text": "Romb"
        },
        {
          "id": "C",
          "text": "Parallelogramm"
        },
        {
          "id": "D",
          "text": "Doira"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-35",
      "question": "Backend bo'yicha: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "Oval"
        },
        {
          "id": "B",
          "text": "Trapetsiya"
        },
        {
          "id": "C",
          "text": "Romb"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-36",
      "question": "Backend bo'yicha: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Kvadrat"
        },
        {
          "id": "B",
          "text": "Oval (ellips)"
        },
        {
          "id": "C",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "backend-37",
      "question": "Backend bo'yicha: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
      "options": [
        {
          "id": "A",
          "text": "**"
        },
        {
          "id": "B",
          "text": "/"
        },
        {
          "id": "C",
          "text": "%"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-38",
      "question": "Backend bo'yicha: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "**"
        },
        {
          "id": "B",
          "text": "//"
        },
        {
          "id": "C",
          "text": "%"
        },
        {
          "id": "D",
          "text": "/"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Masalan: 7 % 2 = 1."
    },
    {
      "id": "backend-39",
      "question": "Backend bo'yicha: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "//"
        },
        {
          "id": "B",
          "text": "pow"
        },
        {
          "id": "C",
          "text": "**"
        },
        {
          "id": "D",
          "text": "^"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-40",
      "question": "Backend bo'yicha: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "float"
        },
        {
          "id": "C",
          "text": "bool"
        },
        {
          "id": "D",
          "text": "str"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "backend-41",
      "question": "Backend bo'yicha: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "float"
        },
        {
          "id": "B",
          "text": "char"
        },
        {
          "id": "C",
          "text": "list"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "backend-42",
      "question": "Backend bo'yicha: Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "str (string)"
        },
        {
          "id": "C",
          "text": "bool"
        },
        {
          "id": "D",
          "text": "dict"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "backend-43",
      "question": "Backend bo'yicha: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<url>"
        },
        {
          "id": "B",
          "text": "<link>"
        },
        {
          "id": "C",
          "text": "<href>"
        },
        {
          "id": "D",
          "text": "<a>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "<a href='...'>Havola matni</a>."
    },
    {
      "id": "backend-44",
      "question": "Backend bo'yicha: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<img>"
        },
        {
          "id": "B",
          "text": "<image>"
        },
        {
          "id": "C",
          "text": "<src>"
        },
        {
          "id": "D",
          "text": "<picture>"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "backend-45",
      "question": "Backend bo'yicha: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<header>"
        },
        {
          "id": "B",
          "text": "<h6>"
        },
        {
          "id": "C",
          "text": "<h1>"
        },
        {
          "id": "D",
          "text": "<title>"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "backend-46",
      "question": "Backend bo'yicha: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<li>"
        },
        {
          "id": "B",
          "text": "<ul>"
        },
        {
          "id": "C",
          "text": "<ol>"
        },
        {
          "id": "D",
          "text": "<dl>"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "backend-47",
      "question": "Backend bo'yicha: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        },
        {
          "id": "B",
          "text": "Server logikasini yozish"
        },
        {
          "id": "C",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "D",
          "text": "Ma'lumotlar bazasini tuzish"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "backend-48",
      "question": "Backend bo'yicha: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "16 bayt"
        },
        {
          "id": "B",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        },
        {
          "id": "C",
          "text": "6 bayt"
        },
        {
          "id": "D",
          "text": "8 bayt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "backend-49",
      "question": "Backend bo'yicha: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Parollarni saqlash"
        },
        {
          "id": "B",
          "text": "Fayllarni yuklash"
        },
        {
          "id": "C",
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        },
        {
          "id": "D",
          "text": "Elektron xat jo'natish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "backend-50",
      "question": "Backend bo'yicha: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Port"
        },
        {
          "id": "B",
          "text": "MAC-manzil"
        },
        {
          "id": "C",
          "text": "URL"
        },
        {
          "id": "D",
          "text": "IP-manzil"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "backend-51",
      "question": "Backend bo'yicha: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "FTP"
        },
        {
          "id": "C",
          "text": "POP3"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "backend-52",
      "question": "Backend bo'yicha: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "SMTP"
        },
        {
          "id": "C",
          "text": "IMAP"
        },
        {
          "id": "D",
          "text": "POP3"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-53",
      "question": "Backend bo'yicha: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq shaklida"
        },
        {
          "id": "B",
          "text": "Faqat bitta matnli faylda"
        },
        {
          "id": "C",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        },
        {
          "id": "D",
          "text": "Faqat daraxtsimon shaklda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "backend-54",
      "question": "Backend bo'yicha: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kalit"
        },
        {
          "id": "B",
          "text": "Maydon (atribut)"
        },
        {
          "id": "C",
          "text": "Yozuv (kortej / record)"
        },
        {
          "id": "D",
          "text": "Indeks"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "backend-55",
      "question": "Backend bo'yicha: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Jadval"
        },
        {
          "id": "B",
          "text": "Katastrofa"
        },
        {
          "id": "C",
          "text": "Yozuv"
        },
        {
          "id": "D",
          "text": "Maydon (field / atribut)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "backend-56",
      "question": "Backend bo'yicha: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Indeks"
        },
        {
          "id": "B",
          "text": "Filtr"
        },
        {
          "id": "C",
          "text": "Tashqi kalit"
        },
        {
          "id": "D",
          "text": "Birlamchi kalit (Primary Key)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "backend-57",
      "question": "Backend bo'yicha: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-58",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira"
        },
        {
          "id": "B",
          "text": "Videokarta"
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU)"
        },
        {
          "id": "D",
          "text": "Qattiq disk"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-59",
      "question": "Backend bo'yicha: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-60",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "D",
          "text": "SSD"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "backend-61",
      "question": "Backend bo'yicha: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-62",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "RAM"
        },
        {
          "id": "B",
          "text": "Fleshka"
        },
        {
          "id": "C",
          "text": "Strimmer"
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "backend-63",
      "question": "Backend bo'yicha: Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-64",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Optik disk"
        },
        {
          "id": "B",
          "text": "Vinchester"
        },
        {
          "id": "C",
          "text": "Magnit lenta"
        },
        {
          "id": "D",
          "text": "Kesh-xotira (Cache)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "backend-65",
      "question": "Backend bo'yicha: Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-66",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Ovoz kartasi"
        },
        {
          "id": "B",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "C",
          "text": "Tarmoq kartasi"
        },
        {
          "id": "D",
          "text": "Chipset"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "backend-67",
      "question": "Backend bo'yicha: Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-68",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki"
        },
        {
          "id": "B",
          "text": "Kuler"
        },
        {
          "id": "C",
          "text": "Shina"
        },
        {
          "id": "D",
          "text": "Ona plata (Motherboard)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "backend-69",
      "question": "Backend bo'yicha: Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-70",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "B",
          "text": "Stabilizator"
        },
        {
          "id": "C",
          "text": "Kondensator"
        },
        {
          "id": "D",
          "text": "Invertor"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "backend-71",
      "question": "Backend bo'yicha: Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-72",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "HTTP / HTTPS"
        },
        {
          "id": "C",
          "text": "DHCP"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "backend-73",
      "question": "Backend bo'yicha: Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-74",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "DNS"
        },
        {
          "id": "B",
          "text": "FTP (File Transfer Protocol)"
        },
        {
          "id": "C",
          "text": "TELNET"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-75",
      "question": "Backend bo'yicha: Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-76",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "IMAP"
        },
        {
          "id": "B",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        },
        {
          "id": "C",
          "text": "POP3"
        },
        {
          "id": "D",
          "text": "SNMP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-77",
      "question": "Backend bo'yicha: Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-78",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "POP3 va IMAP"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "backend-79",
      "question": "Backend bo'yicha: Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-80",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "ICMP"
        },
        {
          "id": "B",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "C",
          "text": "ARP"
        },
        {
          "id": "D",
          "text": "DNS"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "backend-81",
      "question": "Backend bo'yicha: Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-82",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil"
        },
        {
          "id": "B",
          "text": "Port"
        },
        {
          "id": "C",
          "text": "IP manzil"
        },
        {
          "id": "D",
          "text": "Domen nomi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "backend-83",
      "question": "Backend bo'yicha: Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-84",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "Domen"
        },
        {
          "id": "B",
          "text": "Shlyuz"
        },
        {
          "id": "C",
          "text": "MAC manzil"
        },
        {
          "id": "D",
          "text": "IP manzil"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "backend-85",
      "question": "Backend bo'yicha: Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-86",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "B",
          "text": "Marshrutizator (Router)"
        },
        {
          "id": "C",
          "text": "Xab (Hub)"
        },
        {
          "id": "D",
          "text": "Repiter"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "backend-87",
      "question": "Backend bo'yicha: Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-88",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Xab"
        },
        {
          "id": "B",
          "text": "Modem"
        },
        {
          "id": "C",
          "text": "Server"
        },
        {
          "id": "D",
          "text": "Kommutator (Switch)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "backend-89",
      "question": "Backend bo'yicha: Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-90",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx"
        },
        {
          "id": "B",
          "text": ".accdb"
        },
        {
          "id": "C",
          "text": ".docx / .doc"
        },
        {
          "id": "D",
          "text": ".pptx"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "backend-91",
      "question": "Backend bo'yicha: Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-92",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".txt"
        },
        {
          "id": "B",
          "text": ".xlsx / .xls"
        },
        {
          "id": "C",
          "text": ".pdf"
        },
        {
          "id": "D",
          "text": ".docx"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "backend-93",
      "question": "Backend bo'yicha: Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-94",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".docx"
        },
        {
          "id": "B",
          "text": ".pptx / .ppt"
        },
        {
          "id": "C",
          "text": ".mp4"
        },
        {
          "id": "D",
          "text": ".xlsx"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "backend-95",
      "question": "Backend bo'yicha: Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-96",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".py"
        },
        {
          "id": "B",
          "text": ".js"
        },
        {
          "id": "C",
          "text": ".html / .htm"
        },
        {
          "id": "D",
          "text": ".css"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "backend-97",
      "question": "Backend bo'yicha: Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Raqamli audio (tovush) fayllari formati"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-98",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
      "options": [
        {
          "id": "A",
          "text": ".jpg"
        },
        {
          "id": "B",
          "text": ".png"
        },
        {
          "id": "C",
          "text": ".mp3 / .wav"
        },
        {
          "id": "D",
          "text": ".mp4"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "backend-99",
      "question": "Backend bo'yicha: Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Raqamli video fayllari kengaytmasi"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-100",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4 / .avi / .mkv"
        },
        {
          "id": "B",
          "text": ".exe"
        },
        {
          "id": "C",
          "text": ".mp3"
        },
        {
          "id": "D",
          "text": ".gif"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "backend-101",
      "question": "Backend bo'yicha: Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-102",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".docx"
        },
        {
          "id": "B",
          "text": ".mp3"
        },
        {
          "id": "C",
          "text": ".zip"
        },
        {
          "id": "D",
          "text": ".jpg / .png / .svg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "backend-103",
      "question": "Backend bo'yicha: Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-104",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".zip / .rar / .7z"
        },
        {
          "id": "B",
          "text": ".iso"
        },
        {
          "id": "C",
          "text": ".exe"
        },
        {
          "id": "D",
          "text": ".bat"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "backend-105",
      "question": "Backend bo'yicha: Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-106",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".dll"
        },
        {
          "id": "B",
          "text": ".sys"
        },
        {
          "id": "C",
          "text": ".exe / .msi"
        },
        {
          "id": "D",
          "text": ".txt"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "backend-107",
      "question": "Backend bo'yicha: Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-108",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "O'yinlar"
        },
        {
          "id": "B",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "C",
          "text": "Uskunaviy vositalar"
        },
        {
          "id": "D",
          "text": "Tizimli dasturiy ta'minot"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-109",
      "question": "Backend bo'yicha: Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-110",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "BIOS"
        },
        {
          "id": "B",
          "text": "Drayverlar"
        },
        {
          "id": "C",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "D",
          "text": "Tizimli dasturlar"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-111",
      "question": "Backend bo'yicha: Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-112",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Brauzer"
        },
        {
          "id": "B",
          "text": "Kompilyator"
        },
        {
          "id": "C",
          "text": "Drayver"
        },
        {
          "id": "D",
          "text": "Arxivator"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "backend-113",
      "question": "Backend bo'yicha: Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-114",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "Dasturlash muhiti"
        },
        {
          "id": "B",
          "text": "Windows"
        },
        {
          "id": "C",
          "text": "BIOS (Basic Input/Output System)"
        },
        {
          "id": "D",
          "text": "Kesh"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "backend-115",
      "question": "Backend bo'yicha: Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-116",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion sistema"
        },
        {
          "id": "B",
          "text": "Optimizator"
        },
        {
          "id": "C",
          "text": "Antivirus dasturi"
        },
        {
          "id": "D",
          "text": "Fayrvol"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "backend-117",
      "question": "Backend bo'yicha: Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-118",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchi (Variable)"
        },
        {
          "id": "B",
          "text": "Modul"
        },
        {
          "id": "C",
          "text": "O'zgarmas (Konstanta)"
        },
        {
          "id": "D",
          "text": "Funksiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "backend-119",
      "question": "Backend bo'yicha: Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-120",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Skalyar kattalik"
        },
        {
          "id": "C",
          "text": "Massiv (Ro'yxat / List)"
        },
        {
          "id": "D",
          "text": "O'zgaruvchi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "backend-121",
      "question": "Backend bo'yicha: Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-122",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Tsikl"
        },
        {
          "id": "B",
          "text": "Shart operatori"
        },
        {
          "id": "C",
          "text": "Kutubxona"
        },
        {
          "id": "D",
          "text": "Funksiya (Function)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "backend-123",
      "question": "Backend bo'yicha: Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-124",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Inkrement"
        },
        {
          "id": "B",
          "text": "Iteratsiya"
        },
        {
          "id": "C",
          "text": "Rekursiya"
        },
        {
          "id": "D",
          "text": "Dekrement"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "backend-125",
      "question": "Backend bo'yicha: Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-126",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Translyator"
        },
        {
          "id": "B",
          "text": "Interpretator"
        },
        {
          "id": "C",
          "text": "Assembler"
        },
        {
          "id": "D",
          "text": "Kompilyator"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "backend-127",
      "question": "Backend bo'yicha: Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "backend-128",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
      "options": [
        {
          "id": "A",
          "text": "Linker"
        },
        {
          "id": "B",
          "text": "Kompilyator"
        },
        {
          "id": "C",
          "text": "Dizassembler"
        },
        {
          "id": "D",
          "text": "Interpretator"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "backend-129",
      "question": "Backend bo'yicha: Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "backend-130",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<td> tegi"
        },
        {
          "id": "B",
          "text": "<tr> tegi"
        },
        {
          "id": "C",
          "text": "<table> tegi"
        },
        {
          "id": "D",
          "text": "<th> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "backend-131",
      "question": "Backend bo'yicha: Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "HTML jadvalida yangi satr (qator) hosil qiluvchi teg"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "backend-132",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<table> tegi"
        },
        {
          "id": "B",
          "text": "<tr> tegi"
        },
        {
          "id": "C",
          "text": "<td> tegi"
        },
        {
          "id": "D",
          "text": "<col> tegi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "backend-133",
      "question": "Backend bo'yicha: Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "backend-134",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<caption> tegi"
        },
        {
          "id": "B",
          "text": "<th> tegi"
        },
        {
          "id": "C",
          "text": "<tr> tegi"
        },
        {
          "id": "D",
          "text": "<td> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "backend-135",
      "question": "Backend bo'yicha: Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "backend-136",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<button> tegi"
        },
        {
          "id": "B",
          "text": "<input> tegi"
        },
        {
          "id": "C",
          "text": "<textarea> tegi"
        },
        {
          "id": "D",
          "text": "<form> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "backend-137",
      "question": "Backend bo'yicha: Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "backend-138",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<input> tegi"
        },
        {
          "id": "B",
          "text": "<select> tegi"
        },
        {
          "id": "C",
          "text": "<form> tegi"
        },
        {
          "id": "D",
          "text": "<label> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "backend-139",
      "question": "Backend bo'yicha: Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "backend-140",
      "question": "Backend bo'yicha: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "HTML"
        },
        {
          "id": "B",
          "text": "CSS"
        },
        {
          "id": "C",
          "text": "JavaScript"
        },
        {
          "id": "D",
          "text": "SQL"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "backend-141",
      "question": "Backend bo'yicha: Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "write()"
        },
        {
          "id": "B",
          "text": "print()"
        },
        {
          "id": "C",
          "text": "echo()"
        },
        {
          "id": "D",
          "text": "input()"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "backend-142",
      "question": "Backend bo'yicha: Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "input()"
        },
        {
          "id": "B",
          "text": "print()"
        },
        {
          "id": "C",
          "text": "read()"
        },
        {
          "id": "D",
          "text": "scan()"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "backend-143",
      "question": "Backend bo'yicha: Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
      "options": [
        {
          "id": "A",
          "text": "if"
        },
        {
          "id": "B",
          "text": "for"
        },
        {
          "id": "C",
          "text": "while"
        },
        {
          "id": "D",
          "text": "def"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "backend-144",
      "question": "Backend bo'yicha: Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "proc"
        },
        {
          "id": "B",
          "text": "fun"
        },
        {
          "id": "C",
          "text": "function"
        },
        {
          "id": "D",
          "text": "def"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "backend-145",
      "question": "Backend bo'yicha: Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "if"
        },
        {
          "id": "B",
          "text": "def"
        },
        {
          "id": "C",
          "text": "for"
        },
        {
          "id": "D",
          "text": "switch"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "backend-146",
      "question": "Backend bo'yicha: Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
      "options": [
        {
          "id": "A",
          "text": "if"
        },
        {
          "id": "B",
          "text": "while"
        },
        {
          "id": "C",
          "text": "range"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "backend-147",
      "question": "Backend bo'yicha: Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "B",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "C",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "D",
          "text": "< > (burchakli qavslar)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "backend-148",
      "question": "Backend bo'yicha: O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
      "options": [
        {
          "id": "A",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "B",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "C",
          "text": "| |"
        },
        {
          "id": "D",
          "text": "[ ] (to'rtburchak qavslar)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "backend-149",
      "question": "Backend bo'yicha: Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "<kalit=qiymat>"
        },
        {
          "id": "B",
          "text": "[kalit, qiymat]"
        },
        {
          "id": "C",
          "text": "(kalit; qiymat)"
        },
        {
          "id": "D",
          "text": "{kalit: qiymat}"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "backend-150",
      "question": "Backend bo'yicha: Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
      "options": [
        {
          "id": "A",
          "text": "length()"
        },
        {
          "id": "B",
          "text": "len()"
        },
        {
          "id": "C",
          "text": "size()"
        },
        {
          "id": "D",
          "text": "count()"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "backend-151",
      "question": "Backend bo'yicha: Rastrli grafika nimaga asoslangan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat matnlarga"
        },
        {
          "id": "B",
          "text": "Geometrik formulalar va chiziqlarga"
        },
        {
          "id": "C",
          "text": "Faqat tovush to'lqinlariga"
        },
        {
          "id": "D",
          "text": "Piksellar (nuqtalar) to'riga"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "backend-152",
      "question": "Backend bo'yicha: Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        },
        {
          "id": "B",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "C",
          "text": "Hajmi doim juda katta bo'ladi"
        },
        {
          "id": "D",
          "text": "Faqat oq-qora bo'ladi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "backend-153",
      "question": "Backend bo'yicha: RGB rang modelida asosiy ranglar qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Rose, Grey, Brown"
        },
        {
          "id": "B",
          "text": "Red, Green, Black"
        },
        {
          "id": "C",
          "text": "Cyan, Magenta, Yellow"
        },
        {
          "id": "D",
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "backend-154",
      "question": "Backend bo'yicha: Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
      "options": [
        {
          "id": "A",
          "text": "HSB"
        },
        {
          "id": "B",
          "text": "RGB"
        },
        {
          "id": "C",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        },
        {
          "id": "D",
          "text": "Grayscale"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "backend-155",
      "question": "Backend bo'yicha: Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Tezlik, hajm va rang"
        },
        {
          "id": "B",
          "text": "Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)"
        },
        {
          "id": "C",
          "text": "Faqat arxivlash"
        },
        {
          "id": "D",
          "text": "Faqat parol va login"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "backend-156",
      "question": "Backend bo'yicha: Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Fayl formatini o'chirish"
        },
        {
          "id": "B",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "C",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
        },
        {
          "id": "D",
          "text": "Rangini o'zgartirish"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "backend-157",
      "question": "Backend bo'yicha: Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Windows, Linux, macOS, Android"
        },
        {
          "id": "B",
          "text": "Word, Excel, PowerPoint"
        },
        {
          "id": "C",
          "text": "Chrome, Firefox, Safari"
        },
        {
          "id": "D",
          "text": "Python, C++, Java"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "backend-158",
      "question": "Backend bo'yicha: Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts"
        },
        {
          "id": "B",
          "text": "Linus Torvalds (1991-yilda)"
        },
        {
          "id": "C",
          "text": "Dennis Ritchi"
        },
        {
          "id": "D",
          "text": "Stiv Jobs"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "backend-159",
      "question": "Backend bo'yicha: Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Stiv Jobs va Voznyak"
        },
        {
          "id": "B",
          "text": "Ilon Mask"
        },
        {
          "id": "C",
          "text": "Mark Sukerberg"
        },
        {
          "id": "D",
          "text": "Bill Geyts va Pol Allen"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1975-yilda tashkil topgan."
    },
    {
      "id": "backend-160",
      "question": "Backend bo'yicha: Apple kompaniyasining asoschilari kimlar?",
      "options": [
        {
          "id": "A",
          "text": "Jeff Bezos"
        },
        {
          "id": "B",
          "text": "Bill Geyts"
        },
        {
          "id": "C",
          "text": "Stiv Jobs va Stiv Voznyak"
        },
        {
          "id": "D",
          "text": "Sergey Brin"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "backend-161",
      "question": "Backend bo'yicha: Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts"
        },
        {
          "id": "B",
          "text": "Larri Peyj va Sergey Brin"
        },
        {
          "id": "C",
          "text": "Pavel Durov"
        },
        {
          "id": "D",
          "text": "Jek Ma"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "backend-162",
      "question": "«So‘ralgan resurs topilmadi» quyidagi qaysi savolning to'g'ri javobi? (To'g'ri javob: So‘ralgan resurs topilmadi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "B",
          "text": "HTTP 404 status kodi nimani bildiradi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«HTTP 404 status kodi nimani bildiradi?» savolining to'g'ri javobi — So‘ralgan resurs topilmadi. To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-163",
      "question": "«POST» quyidagi qaysi savolning to'g'ri javobi? (To'g'ri javob: POST.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "B",
          "text": "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?» savolining to'g'ri javobi — POST. To'g'ri javob: POST."
    },
    {
      "id": "backend-164",
      "question": "«Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili» quyidagi qaysi savolning to'g'ri javobi? (To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "C",
          "text": "SQL nima?"
        },
        {
          "id": "D",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "«SQL nima?» savolining to'g'ri javobi — Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili. To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
    },
    {
      "id": "backend-165",
      "question": "«Foydalanuvchi autentifikatsiyasini tasdiqlash» quyidagi qaysi savolning to'g'ri javobi? (To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "B",
          "text": "JWT tokenining asosiy vazifasi nima?"
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "D",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        }
      ],
      "correct": "B",
      "xp": 300,
      "explanation": "«JWT tokenining asosiy vazifasi nima?» savolining to'g'ri javobi — Foydalanuvchi autentifikatsiyasini tasdiqlash. To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
    },
    {
      "id": "backend-166",
      "question": "Backend bo'yicha: «8» quyidagi qaysi savolning to'g'ri javobi? (1 bayt = 8 bit.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "D",
          "text": "Bir baytda nechta bit bor?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Bir baytda nechta bit bor?» savolining to'g'ri javobi — 8. 1 bayt = 8 bit."
    },
    {
      "id": "backend-167",
      "question": "Backend bo'yicha: «Protsessor» quyidagi qaysi savolning to'g'ri javobi? (Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Kompyuterning asosiy hisoblash qurilmasi qaysi?» savolining to'g'ri javobi — Protsessor. Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-168",
      "question": "Backend bo'yicha: «Web sahifa tuzilmasini yaratish» quyidagi qaysi savolning to'g'ri javobi? (HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir.)",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "«HTML tili asosan nima uchun ishlatiladi?» savolining to'g'ri javobi — Web sahifa tuzilmasini yaratish. HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "backend-169",
      "question": "Backend bo'yicha: «10» quyidagi qaysi savolning to'g'ri javobi? (1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10.)",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "C",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "D",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        }
      ],
      "correct": "C",
      "xp": 300,
      "explanation": "«Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savolining to'g'ri javobi — 10. 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-170",
      "question": "Backend bo'yicha: «1024 bayt» quyidagi qaysi savolning to'g'ri javobi? (1 KB = 2¹⁰ bayt = 1024 bayt.)",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "C",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«1 Kilobayt (KB) necha baytga teng?» savolining to'g'ri javobi — 1024 bayt. 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-171",
      "question": "Backend bo'yicha: «1024 KB» quyidagi qaysi savolning to'g'ri javobi? (1 MB = 1024 KB = 2²⁰ bayt.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "C",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«1 Megabayt (MB) necha Kilobaytga teng?» savolining to'g'ri javobi — 1024 KB. 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-172",
      "question": "Backend bo'yicha: «1024 MB» quyidagi qaysi savolning to'g'ri javobi? (1 GB = 1024 MB.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "C",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«1 Gigabayt (GB) necha Megabaytga teng?» savolining to'g'ri javobi — 1024 MB. 1 GB = 1024 MB."
    },
    {
      "id": "backend-173",
      "question": "Backend bo'yicha: «1 bayt (8 bit)» quyidagi qaysi savolning to'g'ri javobi? (Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi.)",
      "options": [
        {
          "id": "A",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "C",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "D",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savolining to'g'ri javobi — 1 bayt (8 bit). Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "backend-174",
      "question": "Backend bo'yicha: «2 bayt (16 bit)» quyidagi qaysi savolning to'g'ri javobi? (Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savolining to'g'ri javobi — 2 bayt (16 bit). Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "backend-175",
      "question": "Backend bo'yicha: «N = 2^i» quyidagi qaysi savolning to'g'ri javobi? (N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit).)",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "C",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savolining to'g'ri javobi — N = 2^i. N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "backend-176",
      "question": "Backend bo'yicha: «A, B, C, D, E, F» quyidagi qaysi savolning to'g'ri javobi? (O'n oltilikda 10 dan 15 gacha harflar qo'llanadi.)",
      "options": [
        {
          "id": "A",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "B",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "C",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savolining to'g'ri javobi — A, B, C, D, E, F. O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "backend-177",
      "question": "Backend bo'yicha: «15» quyidagi qaysi savolning to'g'ri javobi? (8 + 4 + 2 + 1 = 15.)",
      "options": [
        {
          "id": "A",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "B",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "C",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "D",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savolining to'g'ri javobi — 15. 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-178",
      "question": "Backend bo'yicha: «10000» quyidagi qaysi savolning to'g'ri javobi? (16 = 2⁴ = 10000₂.)",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "B",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "C",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savolining to'g'ri javobi — 10000. 16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-179",
      "question": "Backend bo'yicha: «7» quyidagi qaysi savolning to'g'ri javobi? (Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi.)",
      "options": [
        {
          "id": "A",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "B",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "C",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "D",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savolining to'g'ri javobi — 7. Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "backend-180",
      "question": "Backend bo'yicha: «26» quyidagi qaysi savolning to'g'ri javobi? (1·16¹ + 10·16⁰ = 16 + 10 = 26.)",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "C",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "D",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "«O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savolining to'g'ri javobi — 26. 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-181",
      "question": "Backend bo'yicha: «Operativ xotira (RAM)» quyidagi qaysi savolning to'g'ri javobi? (RAM - energiyaga bog'liq tezkor xotiradir.)",
      "options": [
        {
          "id": "A",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "D",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savolining to'g'ri javobi — Operativ xotira (RAM). RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "backend-182",
      "question": "Backend bo'yicha: «BIOS dasturlari va dastlabki yuklash ko'rsatmalari» quyidagi qaysi savolning to'g'ri javobi? (ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi.)",
      "options": [
        {
          "id": "A",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "B",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "C",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "D",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savolining to'g'ri javobi — BIOS dasturlari va dastlabki yuklash ko'rsatmalari. ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "backend-183",
      "question": "Backend bo'yicha: «Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi» quyidagi qaysi savolning to'g'ri javobi? (Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir.)",
      "options": [
        {
          "id": "A",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "B",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "C",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "D",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savolining to'g'ri javobi — Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi. Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "backend-184",
      "question": "Backend bo'yicha: «Qattiq disk (HDD)» quyidagi qaysi savolning to'g'ri javobi? (HDD magnit disklar asosida ishlaydi.)",
      "options": [
        {
          "id": "A",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "B",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "D",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savolining to'g'ri javobi — Qattiq disk (HDD). HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "backend-185",
      "question": "Backend bo'yicha: «SSD (Solid State Drive)» quyidagi qaysi savolning to'g'ri javobi? (SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi.)",
      "options": [
        {
          "id": "A",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savolining to'g'ri javobi — SSD (Solid State Drive). SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "backend-186",
      "question": "Backend bo'yicha: «Gers (Gs, MGs, GGs)» quyidagi qaysi savolning to'g'ri javobi? (Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi.)",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Taktli chastotaning o'lchov birligi nima?» savolining to'g'ri javobi — Gers (Gs, MGs, GGs). Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "backend-187",
      "question": "Backend bo'yicha: «Skaner» quyidagi qaysi savolning to'g'ri javobi? (Skaner qog'ozdagi tasvirni kompyuterga kiritadi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savolining to'g'ri javobi — Skaner. Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-188",
      "question": "Backend bo'yicha: «Printer» quyidagi qaysi savolning to'g'ri javobi? (Printer raqamli ma'lumotni qog'ozga chiqaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savolining to'g'ri javobi — Printer. Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-189",
      "question": "Backend bo'yicha: «Plotter (grafik yasagich)» quyidagi qaysi savolning to'g'ri javobi? (Plotter katta o'lchamli chizmalar uchun ishlatiladi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "B",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "C",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savolining to'g'ri javobi — Plotter (grafik yasagich). Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "backend-190",
      "question": "Backend bo'yicha: «Ikkala mulohaza ham chin (1) bo'lganda» quyidagi qaysi savolning to'g'ri javobi? (A AND B faqat 1 va 1 bo'lganda 1 bo'ladi.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "D",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savolining to'g'ri javobi — Ikkala mulohaza ham chin (1) bo'lganda. A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "backend-191",
      "question": "Backend bo'yicha: «Ikkala mulohaza ham yolg'on (0) bo'lganda» quyidagi qaysi savolning to'g'ri javobi? (A OR B faqat 0 va 0 bo'lganda 0 ga teng.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "C",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savolining to'g'ri javobi — Ikkala mulohaza ham yolg'on (0) bo'lganda. A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "backend-192",
      "question": "Backend bo'yicha: «Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi» quyidagi qaysi savolning to'g'ri javobi? (NOT 1 = 0, NOT 0 = 1.)",
      "options": [
        {
          "id": "A",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "C",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "D",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savolining to'g'ri javobi — Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi. NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "backend-193",
      "question": "Backend bo'yicha: «Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik» quyidagi qaysi savolning to'g'ri javobi? (Algoritm 5 ta asosiy xossaga ega.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Algoritmning asosiy xossalari qaysilar?» savolining to'g'ri javobi — Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik. Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "backend-194",
      "question": "Backend bo'yicha: «Romb» quyidagi qaysi savolning to'g'ri javobi? (Romb ichiga shart yoziladi (ha/yo'q).)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "D",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savolining to'g'ri javobi — Romb. Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-195",
      "question": "Backend bo'yicha: «Parallelogramm» quyidagi qaysi savolning to'g'ri javobi? (Parallelogramm kiritish-chiqarish blokidir.)",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savolining to'g'ri javobi — Parallelogramm. Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-196",
      "question": "Backend bo'yicha: «To'g'ri to'rtburchak» quyidagi qaysi savolning to'g'ri javobi? (Amal yoki hisoblash to'g'ri to'rtburchakda beriladi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savolining to'g'ri javobi — To'g'ri to'rtburchak. Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-197",
      "question": "Backend bo'yicha: «Oval (ellips)» quyidagi qaysi savolning to'g'ri javobi? (Boshlash va tamom oval ichiga yoziladi.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "B",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "C",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savolining to'g'ri javobi — Oval (ellips). Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "backend-198",
      "question": "Backend bo'yicha: «//» quyidagi qaysi savolning to'g'ri javobi? (Masalan: 7 // 2 = 3.)",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "D",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savolining to'g'ri javobi — //. Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-199",
      "question": "Backend bo'yicha: «%» quyidagi qaysi savolning to'g'ri javobi? (Masalan: 7 % 2 = 1.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savolining to'g'ri javobi — %. Masalan: 7 % 2 = 1."
    },
    {
      "id": "backend-200",
      "question": "Backend bo'yicha: «**» quyidagi qaysi savolning to'g'ri javobi? (Masalan: 2 ** 3 = 8.)",
      "options": [
        {
          "id": "A",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "B",
          "text": "JWT tokenining asosiy vazifasi nima?"
        },
        {
          "id": "C",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "D",
          "text": "SQL nima?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savolining to'g'ri javobi — **. Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-201",
      "question": "Backend bo'yicha: «int» quyidagi qaysi savolning to'g'ri javobi? (int - integer (butun son).)",
      "options": [
        {
          "id": "A",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "C",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "D",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "«Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savolining to'g'ri javobi — int. int - integer (butun son)."
    },
    {
      "id": "backend-202",
      "question": "Backend bo'yicha: «float» quyidagi qaysi savolning to'g'ri javobi? (float - suzuvchi vergulli son.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "«Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savolining to'g'ri javobi — float. float - suzuvchi vergulli son."
    },
    {
      "id": "backend-203",
      "question": "Backend bo'yicha: «str (string)» quyidagi qaysi savolning to'g'ri javobi? (str - qo'shtirnoq ichidagi matn.)",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "«Satrli (matnli) ma'lumot turi qanday ataladi?» savolining to'g'ri javobi — str (string). str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "backend-204",
      "question": "Backend bo'yicha: «<a>» quyidagi qaysi savolning to'g'ri javobi? (<a href='...'>Havola matni</a>.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savolining to'g'ri javobi — <a>. <a href='...'>Havola matni</a>."
    },
    {
      "id": "backend-205",
      "question": "Backend bo'yicha: «<img>» quyidagi qaysi savolning to'g'ri javobi? (<img src='...' alt='...'>.)",
      "options": [
        {
          "id": "A",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "C",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "D",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savolining to'g'ri javobi — <img>. <img src='...' alt='...'>."
    },
    {
      "id": "backend-206",
      "question": "Backend bo'yicha: «<h1>» quyidagi qaysi savolning to'g'ri javobi? (h1 eng katta sarlavha, h6 eng kichigi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "C",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "«HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savolining to'g'ri javobi — <h1>. h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "backend-207",
      "question": "Backend bo'yicha: «<ol>» quyidagi qaysi savolning to'g'ri javobi? (ol - ordered list, ul - unordered list.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "C",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savolining to'g'ri javobi — <ol>. ol - ordered list, ul - unordered list."
    },
    {
      "id": "backend-208",
      "question": "Backend bo'yicha: «Web sahifaning tashqi ko'rinishi va dizaynini bezash» quyidagi qaysi savolning to'g'ri javobi? (CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "B",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "C",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savolining to'g'ri javobi — Web sahifaning tashqi ko'rinishi va dizaynini bezash. CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "backend-209",
      "question": "Backend bo'yicha: «4 bayt (32 bit, masalan: 192.168.1.1)» quyidagi qaysi savolning to'g'ri javobi? (IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir.)",
      "options": [
        {
          "id": "A",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savolining to'g'ri javobi — 4 bayt (32 bit, masalan: 192.168.1.1). IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "backend-210",
      "question": "Backend bo'yicha: «Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish» quyidagi qaysi savolning to'g'ri javobi? (DNS inson tushunadigan nomni kompyuter IP siga o'giradi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "D",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«DNS (Domain Name System) serverining asosiy vazifasi nima?» savolining to'g'ri javobi — Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish. DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "backend-211",
      "question": "Backend bo'yicha: «MAC-manzil» quyidagi qaysi savolning to'g'ri javobi? (MAC address 48 bitli unikal apparat manzilidir.)",
      "options": [
        {
          "id": "A",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "C",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "D",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savolining to'g'ri javobi — MAC-manzil. MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "backend-212",
      "question": "Backend bo'yicha: «FTP» quyidagi qaysi savolning to'g'ri javobi? (FTP - File Transfer Protocol.)",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "B",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "C",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "D",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savolining to'g'ri javobi — FTP. FTP - File Transfer Protocol."
    },
    {
      "id": "backend-213",
      "question": "Backend bo'yicha: «SMTP» quyidagi qaysi savolning to'g'ri javobi? (SMTP - Simple Mail Transfer Protocol.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savolining to'g'ri javobi — SMTP. SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-214",
      "question": "Backend bo'yicha: «O'zaro bog'langan jadvallar ko'rinishida» quyidagi qaysi savolning to'g'ri javobi? (Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savolining to'g'ri javobi — O'zaro bog'langan jadvallar ko'rinishida. Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "backend-215",
      "question": "Backend bo'yicha: «Yozuv (kortej / record)» quyidagi qaysi savolning to'g'ri javobi? (Jadval satri bitta ob'ektga tegishli 'yozuv'dir.)",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savolining to'g'ri javobi — Yozuv (kortej / record). Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "backend-216",
      "question": "Backend bo'yicha: «Maydon (field / atribut)» quyidagi qaysi savolning to'g'ri javobi? (Ustunlar ob'ektning xossasi yoki 'maydon'idir.)",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "C",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savolining to'g'ri javobi — Maydon (field / atribut). Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "backend-217",
      "question": "Backend bo'yicha: «Birlamchi kalit (Primary Key)» quyidagi qaysi savolning to'g'ri javobi? (Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi.)",
      "options": [
        {
          "id": "A",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "B",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savolining to'g'ri javobi — Birlamchi kalit (Primary Key). Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "backend-218",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» quyidagi qaysi savolning to'g'ri javobi? (Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ish…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish. Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-219",
      "question": "Backend bo'yicha: «Markaziy protsessor (CPU)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savolining to'g'ri javobi — Markaziy protsessor (CPU). Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-220",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» quyidagi qaysi savolning to'g'ri javobi? (Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saq…)",
      "options": [
        {
          "id": "A",
          "text": "JWT tokenining asosiy vazifasi nima?"
        },
        {
          "id": "B",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "C",
          "text": "SQL nima?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash. Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-221",
      "question": "Backend bo'yicha: «Operativ xotira (RAM)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "C",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "D",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savolining to'g'ri javobi — Operativ xotira (RAM). Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "backend-222",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» quyidagi qaysi savolning to'g'ri javobi? (Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "C",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "D",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash. Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-223",
      "question": "Backend bo'yicha: «Doimiy xotira (ROM)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "B",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savolining to'g'ri javobi — Doimiy xotira (ROM). Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "backend-224",
      "question": "Backend bo'yicha: «Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish» quyidagi qaysi savolning to'g'ri javobi? (Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezlig…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish. Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-225",
      "question": "Backend bo'yicha: «Kesh-xotira (Cache)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savolining to'g'ri javobi — Kesh-xotira (Cache). Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "backend-226",
      "question": "Backend bo'yicha: «Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish» quyidagi qaysi savolning to'g'ri javobi? (Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish.)",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "D",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish. Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-227",
      "question": "Backend bo'yicha: «Videokarta (GPU)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Videokarta (GPU)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savolining to'g'ri javobi — Videokarta (GPU). Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "backend-228",
      "question": "Backend bo'yicha: «Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata» quyidagi qaysi savolning to'g'ri javobi? (Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'l…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "C",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata. Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-229",
      "question": "Backend bo'yicha: «Ona plata (Motherboard)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "B",
          "text": "HTTP 404 status kodi nimani bildiradi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savolining to'g'ri javobi — Ona plata (Motherboard). Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "backend-230",
      "question": "Backend bo'yicha: «220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish» quyidagi qaysi savolning to'g'ri javobi? (Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'l…)",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish. Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-231",
      "question": "Backend bo'yicha: «Quvvat bloki (Power Supply)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savolining to'g'ri javobi — Quvvat bloki (Power Supply). Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "backend-232",
      "question": "Backend bo'yicha: «Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli» quyidagi qaysi savolning to'g'ri javobi? (HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "C",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "D",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli. HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-233",
      "question": "Backend bo'yicha: «HTTP / HTTPS» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'HTTP / HTTPS'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savolining to'g'ri javobi — HTTP / HTTPS. Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "backend-234",
      "question": "Backend bo'yicha: «Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli» quyidagi qaysi savolning to'g'ri javobi? (FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzat…)",
      "options": [
        {
          "id": "A",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "C",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli. FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-235",
      "question": "Backend bo'yicha: «FTP (File Transfer Protocol)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "HTTP 404 status kodi nimani bildiradi?"
        },
        {
          "id": "B",
          "text": "SQL nima?"
        },
        {
          "id": "C",
          "text": "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savolining to'g'ri javobi — FTP (File Transfer Protocol). Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-236",
      "question": "Backend bo'yicha: «Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli» quyidagi qaysi savolning to'g'ri javobi? (SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qi…)",
      "options": [
        {
          "id": "A",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "B",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli. SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-237",
      "question": "Backend bo'yicha: «SMTP (Simple Mail Transfer Protocol)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savolining to'g'ri javobi — SMTP (Simple Mail Transfer Protocol). Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-238",
      "question": "Backend bo'yicha: «Elektron pochta serveridan xatlarni qabul qilib olish protokollari» quyidagi qaysi savolning to'g'ri javobi? (POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Elektron pochta serveridan xatlarni qabul qilib olish protokollari. POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-239",
      "question": "Backend bo'yicha: «POP3 va IMAP» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'POP3 va IMAP'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "C",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savolining to'g'ri javobi — POP3 va IMAP. Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "backend-240",
      "question": "Backend bo'yicha: «Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish» quyidagi qaysi savolning to'g'ri javobi? (DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda d…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish. DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-241",
      "question": "Backend bo'yicha: «DHCP (Dynamic Host Configuration Protocol)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "SQL nima?"
        },
        {
          "id": "B",
          "text": "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "D",
          "text": "JWT tokenining asosiy vazifasi nima?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savolining to'g'ri javobi — DHCP (Dynamic Host Configuration Protocol). Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "backend-242",
      "question": "Backend bo'yicha: «Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili» quyidagi qaysi savolning to'g'ri javobi? (IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy un…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili. IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-243",
      "question": "Backend bo'yicha: «IP manzil» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'IP manzil'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savolining to'g'ri javobi — IP manzil. Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "backend-244",
      "question": "Backend bo'yicha: «Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili» quyidagi qaysi savolning to'g'ri javobi? (MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy app…)",
      "options": [
        {
          "id": "A",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "D",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili. MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-245",
      "question": "Backend bo'yicha: «MAC manzil» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'MAC manzil'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savolining to'g'ri javobi — MAC manzil. Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "backend-246",
      "question": "Backend bo'yicha: «Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma» quyidagi qaysi savolning to'g'ri javobi? (Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalis…)",
      "options": [
        {
          "id": "A",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "B",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma. Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-247",
      "question": "Backend bo'yicha: «Marshrutizator (Router)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savolining to'g'ri javobi — Marshrutizator (Router). Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "backend-248",
      "question": "Backend bo'yicha: «Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma» quyidagi qaysi savolning to'g'ri javobi? (Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma. Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-249",
      "question": "Backend bo'yicha: «Kommutator (Switch)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Kommutator (Switch)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "B",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savolining to'g'ri javobi — Kommutator (Switch). Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "backend-250",
      "question": "Backend bo'yicha: «Microsoft Word matnli hujjati fayl kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "B",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Microsoft Word matnli hujjati fayl kengaytmasi. .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-251",
      "question": "Backend bo'yicha: «.docx / .doc» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.docx / .doc'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "C",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savolining to'g'ri javobi — .docx / .doc. Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "backend-252",
      "question": "Backend bo'yicha: «Microsoft Excel elektron jadvali fayl kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Microsoft Excel elektron jadvali fayl kengaytmasi. .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-253",
      "question": "Backend bo'yicha: «.xlsx / .xls» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.xlsx / .xls'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savolining to'g'ri javobi — .xlsx / .xls. Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "backend-254",
      "question": "Backend bo'yicha: «Microsoft PowerPoint taqdimot fayli kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Microsoft PowerPoint taqdimot fayli kengaytmasi. .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-255",
      "question": "Backend bo'yicha: «.pptx / .ppt» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.pptx / .ppt'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savolining to'g'ri javobi — .pptx / .ppt. Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "backend-256",
      "question": "Backend bo'yicha: «Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli» quyidagi qaysi savolning to'g'ri javobi? (.html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli. .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-257",
      "question": "Backend bo'yicha: «.html / .htm» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.html / .htm'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savolining to'g'ri javobi — .html / .htm. Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "backend-258",
      "question": "Backend bo'yicha: «Raqamli audio (tovush) fayllari formati» quyidagi qaysi savolning to'g'ri javobi? (.mp3 / .wav - Raqamli audio (tovush) fayllari formati.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Raqamli audio (tovush) fayllari formati. .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-259",
      "question": "Backend bo'yicha: «.mp3 / .wav» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.mp3 / .wav'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savolining to'g'ri javobi — .mp3 / .wav. Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "backend-260",
      "question": "Backend bo'yicha: «Raqamli video fayllari kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Raqamli video fayllari kengaytmasi. .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-261",
      "question": "Backend bo'yicha: «.mp4 / .avi / .mkv» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savolining to'g'ri javobi — .mp4 / .avi / .mkv. Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "backend-262",
      "question": "Backend bo'yicha: «Raqamli rastrli va vektorli grafik tasvirlar formati» quyidagi qaysi savolning to'g'ri javobi? (.jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Raqamli rastrli va vektorli grafik tasvirlar formati. .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-263",
      "question": "Backend bo'yicha: «.jpg / .png / .svg» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.jpg / .png / .svg'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "B",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "D",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savolining to'g'ri javobi — .jpg / .png / .svg. Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "backend-264",
      "question": "Backend bo'yicha: «Hajmni kichraytirish va arxivlash dasturlari fayli» quyidagi qaysi savolning to'g'ri javobi? (.zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli.)",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "B",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Hajmni kichraytirish va arxivlash dasturlari fayli. .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-265",
      "question": "Backend bo'yicha: «.zip / .rar / .7z» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.zip / .rar / .7z'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "B",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savolining to'g'ri javobi — .zip / .rar / .7z. Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "backend-266",
      "question": "Backend bo'yicha: «Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli» quyidagi qaysi savolning to'g'ri javobi? (.exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli. .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-267",
      "question": "Backend bo'yicha: «.exe / .msi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.exe / .msi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        },
        {
          "id": "C",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "D",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savolining to'g'ri javobi — .exe / .msi. Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "backend-268",
      "question": "Backend bo'yicha: «Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar» quyidagi qaysi savolning to'g'ri javobi? (Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar. Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-269",
      "question": "Backend bo'yicha: «Tizimli dasturiy ta'minot» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savolining to'g'ri javobi — Tizimli dasturiy ta'minot. Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-270",
      "question": "Backend bo'yicha: «Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)» quyidagi qaysi savolning to'g'ri javobi? (Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop). Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-271",
      "question": "Backend bo'yicha: «Amaliy dasturiy ta'minot» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savolining to'g'ri javobi — Amaliy dasturiy ta'minot. Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-272",
      "question": "Backend bo'yicha: «Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur» quyidagi qaysi savolning to'g'ri javobi? (Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtas…)",
      "options": [
        {
          "id": "A",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "C",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur. Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-273",
      "question": "Backend bo'yicha: «Drayver» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Drayver'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "B",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "D",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savolining to'g'ri javobi — Drayver. Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "backend-274",
      "question": "Backend bo'yicha: «Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim» quyidagi qaysi savolning to'g'ri javobi? (BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi…)",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim. BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-275",
      "question": "Backend bo'yicha: «BIOS (Basic Input/Output System)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savolining to'g'ri javobi — BIOS (Basic Input/Output System). Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "backend-276",
      "question": "Backend bo'yicha: «Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi» quyidagi qaysi savolning to'g'ri javobi? (Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash,…)",
      "options": [
        {
          "id": "A",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi. Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-277",
      "question": "Backend bo'yicha: «Antivirus dasturi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Antivirus dasturi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savolining to'g'ri javobi — Antivirus dasturi. Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "backend-278",
      "question": "Backend bo'yicha: «Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha» quyidagi qaysi savolning to'g'ri javobi? (O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "C",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha. O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-279",
      "question": "Backend bo'yicha: «O'zgaruvchi (Variable)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        },
        {
          "id": "B",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savolining to'g'ri javobi — O'zgaruvchi (Variable). Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "backend-280",
      "question": "Backend bo'yicha: «Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma» quyidagi qaysi savolning to'g'ri javobi? (Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'pla…)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "B",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "C",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma. Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-281",
      "question": "Backend bo'yicha: «Massiv (Ro'yxat / List)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        },
        {
          "id": "C",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "D",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savolining to'g'ri javobi — Massiv (Ro'yxat / List). Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "backend-282",
      "question": "Backend bo'yicha: «Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki» quyidagi qaysi savolning to'g'ri javobi? (Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ish…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki. Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-283",
      "question": "Backend bo'yicha: «Funksiya (Function)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Funksiya (Function)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "C",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savolining to'g'ri javobi — Funksiya (Function). Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "backend-284",
      "question": "Backend bo'yicha: «Funksiyaning o'zini o'zi qayta chaqirishi hodisasi» quyidagi qaysi savolning to'g'ri javobi? (Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Funksiyaning o'zini o'zi qayta chaqirishi hodisasi. Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-285",
      "question": "Backend bo'yicha: «Rekursiya» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Rekursiya'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "B",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "C",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "D",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savolining to'g'ri javobi — Rekursiya. Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "backend-286",
      "question": "Backend bo'yicha: «Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita» quyidagi qaysi savolning to'g'ri javobi? (Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik k…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita. Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-287",
      "question": "Backend bo'yicha: «Kompilyator» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Kompilyator'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "D",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savolining to'g'ri javobi — Kompilyator. Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "backend-288",
      "question": "Backend bo'yicha: «Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)» quyidagi qaysi savolning to'g'ri javobi? (Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan,…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "D",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori). Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "backend-289",
      "question": "Backend bo'yicha: «Interpretator» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Interpretator'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savolining to'g'ri javobi — Interpretator. Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "backend-290",
      "question": "Backend bo'yicha: «HTML tilida jadval yaratish uchun ochiladigan bosh teg» quyidagi qaysi savolning to'g'ri javobi? (<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — HTML tilida jadval yaratish uchun ochiladigan bosh teg. <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "backend-291",
      "question": "Backend bo'yicha: «<table> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<table> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "C",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "D",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savolining to'g'ri javobi — <table> tegi. Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "backend-292",
      "question": "Backend bo'yicha: «HTML jadvalida yangi satr (qator) hosil qiluvchi teg» quyidagi qaysi savolning to'g'ri javobi? (<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "D",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — HTML jadvalida yangi satr (qator) hosil qiluvchi teg. <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "backend-293",
      "question": "Backend bo'yicha: «<tr> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<tr> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savolining to'g'ri javobi — <tr> tegi. Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "backend-294",
      "question": "Backend bo'yicha: «HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg» quyidagi qaysi savolning to'g'ri javobi? (<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "C",
          "text": "HTTP 404 status kodi nimani bildiradi?"
        },
        {
          "id": "D",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg. <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "backend-295",
      "question": "Backend bo'yicha: «<td> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<td> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "D",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savolining to'g'ri javobi — <td> tegi. Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "backend-296",
      "question": "Backend bo'yicha: «Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi» quyidagi qaysi savolning to'g'ri javobi? (<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun sha…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "C",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "D",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi. <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "backend-297",
      "question": "Backend bo'yicha: «<form> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<form> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savolining to'g'ri javobi — <form> tegi. Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "backend-298",
      "question": "Backend bo'yicha: «Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg» quyidagi qaysi savolning to'g'ri javobi? (<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radi…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "C",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg. <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "backend-299",
      "question": "Backend bo'yicha: «<input> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<input> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savolining to'g'ri javobi — <input> tegi. Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "backend-300",
      "question": "Backend bo'yicha: «Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili» quyidagi qaysi savolning to'g'ri javobi? (JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili. JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "backend-301",
      "question": "Backend bo'yicha: «JavaScript» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'JavaScript'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "B",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "C",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savolining to'g'ri javobi — JavaScript. Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "backend-302",
      "question": "Backend bo'yicha: «print()» quyidagi qaysi savolning to'g'ri javobi? (print() orqali natija konsolga chiqariladi.)",
      "options": [
        {
          "id": "A",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "B",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "D",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "«Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savolining to'g'ri javobi — print(). print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "backend-303",
      "question": "Backend bo'yicha: «input()» quyidagi qaysi savolning to'g'ri javobi? (input() klaviaturadan satr ko'rinishida qabul qiladi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "«Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savolining to'g'ri javobi — input(). input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "backend-304",
      "question": "Backend bo'yicha: «if» quyidagi qaysi savolning to'g'ri javobi? (if shart: ... elif ... else.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "«Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savolining to'g'ri javobi — if. if shart: ... elif ... else."
    },
    {
      "id": "backend-305",
      "question": "Backend bo'yicha: «def» quyidagi qaysi savolning to'g'ri javobi? (def funksiya_nomi(parametrlar): ...)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "B",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "C",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "D",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savolining to'g'ri javobi — def. def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "backend-306",
      "question": "Backend bo'yicha: «for» quyidagi qaysi savolning to'g'ri javobi? (for i in range(...): tsikli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "D",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "«Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savolining to'g'ri javobi — for. for i in range(...): tsikli."
    },
    {
      "id": "backend-307",
      "question": "Backend bo'yicha: «while» quyidagi qaysi savolning to'g'ri javobi? (while shart: ... tsikli.)",
      "options": [
        {
          "id": "A",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "B",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "C",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "D",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savolining to'g'ri javobi — while. while shart: ... tsikli."
    },
    {
      "id": "backend-308",
      "question": "Backend bo'yicha: «[ ] (to'rtburchak qavslar)» quyidagi qaysi savolning to'g'ri javobi? (Ro'yxat: a = [1, 2, 3].)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        },
        {
          "id": "D",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savolining to'g'ri javobi — [ ] (to'rtburchak qavslar). Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "backend-309",
      "question": "Backend bo'yicha: «( ) (oddiy qavslar)» quyidagi qaysi savolning to'g'ri javobi? (Kortej: a = (1, 2, 3).)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "D",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savolining to'g'ri javobi — ( ) (oddiy qavslar). Kortej: a = (1, 2, 3)."
    },
    {
      "id": "backend-310",
      "question": "Backend bo'yicha: «{kalit: qiymat}» quyidagi qaysi savolning to'g'ri javobi? (Lug'at: d = {'ism': 'Ali', 'yosh': 16}.)",
      "options": [
        {
          "id": "A",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?» savolining to'g'ri javobi — {kalit: qiymat}. Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "backend-311",
      "question": "Backend bo'yicha: «len()» quyidagi qaysi savolning to'g'ri javobi? (len(a) ro'yxat yoki satr uzunligini qaytaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "B",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "D",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savolining to'g'ri javobi — len(). len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "backend-312",
      "question": "Backend bo'yicha: «Piksellar (nuqtalar) to'riga» quyidagi qaysi savolning to'g'ri javobi? (Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG).)",
      "options": [
        {
          "id": "A",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "B",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "Rastrli grafika nimaga asoslangan?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Rastrli grafika nimaga asoslangan?» savolining to'g'ri javobi — Piksellar (nuqtalar) to'riga. Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "backend-313",
      "question": "Backend bo'yicha: «Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi» quyidagi qaysi savolning to'g'ri javobi? (Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR).)",
      "options": [
        {
          "id": "A",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "D",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savolining to'g'ri javobi — Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi. Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "backend-314",
      "question": "Backend bo'yicha: «Red (Qizil), Green (Yashil), Blue (Ko'k)» quyidagi qaysi savolning to'g'ri javobi? (RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model.)",
      "options": [
        {
          "id": "A",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«RGB rang modelida asosiy ranglar qaysilar?» savolining to'g'ri javobi — Red (Qizil), Green (Yashil), Blue (Ko'k). RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "backend-315",
      "question": "Backend bo'yicha: «CMYK (Cyan, Magenta, Yellow, blacK)» quyidagi qaysi savolning to'g'ri javobi? (CMYK bo'yoqlar aralashuvi modelidir.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?» savolining to'g'ri javobi — CMYK (Cyan, Magenta, Yellow, blacK). CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "backend-316",
      "question": "Backend bo'yicha: «Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)» quyidagi qaysi savolning to'g'ri javobi? (CIA triad: Confidentiality, Integrity, Availability.)",
      "options": [
        {
          "id": "A",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "B",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "C",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "D",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Axborot xavfsizligining uchta asosiy tamoyili qaysilar?» savolining to'g'ri javobi — Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik). CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "backend-317",
      "question": "Backend bo'yicha: «Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish» quyidagi qaysi savolning to'g'ri javobi? (Arxivlash fayl hajmini kamaytiradi (ZIP, RAR).)",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«Fayllarni siqish (arxivlash)dan asosiy maqsad nima?» savolining to'g'ri javobi — Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish. Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "backend-318",
      "question": "Backend bo'yicha: «Windows, Linux, macOS, Android» quyidagi qaysi savolning to'g'ri javobi? (Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir.)",
      "options": [
        {
          "id": "A",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "C",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "D",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "«Quyidagilardan qaysi biri operatsion sistema hisoblanadi?» savolining to'g'ri javobi — Windows, Linux, macOS, Android. Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "backend-319",
      "question": "Backend bo'yicha: «Linus Torvalds (1991-yilda)» quyidagi qaysi savolning to'g'ri javobi? (Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan.)",
      "options": [
        {
          "id": "A",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "B",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?» savolining to'g'ri javobi — Linus Torvalds (1991-yilda). Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "backend-320",
      "question": "Backend bo'yicha: «Bill Geyts va Pol Allen» quyidagi qaysi savolning to'g'ri javobi? (1975-yilda tashkil topgan.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "C",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Microsoft kompaniyasining asoschisi kim?» savolining to'g'ri javobi — Bill Geyts va Pol Allen. 1975-yilda tashkil topgan."
    },
    {
      "id": "backend-321",
      "question": "Backend bo'yicha: «Stiv Jobs va Stiv Voznyak» quyidagi qaysi savolning to'g'ri javobi? (1976-yilda Apple I kompyuterini yaratgan.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Apple kompaniyasining asoschilari kimlar?» savolining to'g'ri javobi — Stiv Jobs va Stiv Voznyak. 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "backend-322",
      "question": "Backend bo'yicha: «Larri Peyj va Sergey Brin» quyidagi qaysi savolning to'g'ri javobi? (1998-yilda Stenford universiteti talabalari tomonidan yaratilgan.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?» savolining to'g'ri javobi — Larri Peyj va Sergey Brin. 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "backend-323",
      "question": "«To'g'ri javob: So‘ralgan resurs topilmadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "HTTP 404 status kodi nimani bildiradi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-324",
      "question": "«To'g'ri javob: POST.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "D",
          "text": "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "To'g'ri javob: POST."
    },
    {
      "id": "backend-325",
      "question": "«To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "D",
          "text": "SQL nima?"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
    },
    {
      "id": "backend-326",
      "question": "«To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "C",
          "text": "JWT tokenining asosiy vazifasi nima?"
        },
        {
          "id": "D",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        }
      ],
      "correct": "C",
      "xp": 300,
      "explanation": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
    },
    {
      "id": "backend-327",
      "question": "Backend bo'yicha: «1 bayt = 8 bit.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "1 bayt = 8 bit."
    },
    {
      "id": "backend-328",
      "question": "Backend bo'yicha: «Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-329",
      "question": "Backend bo'yicha: «HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "backend-330",
      "question": "Backend bo'yicha: «1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "D",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        }
      ],
      "correct": "A",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-331",
      "question": "Backend bo'yicha: «1 KB = 2¹⁰ bayt = 1024 bayt.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "B",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "C",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "D",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-332",
      "question": "Backend bo'yicha: «1 MB = 1024 KB = 2²⁰ bayt.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "B",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "C",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-333",
      "question": "Backend bo'yicha: «1 GB = 1024 MB.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "B",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "C",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "D",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "backend-334",
      "question": "Backend bo'yicha: «Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "backend-335",
      "question": "Backend bo'yicha: «Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "C",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "backend-336",
      "question": "Backend bo'yicha: «N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "D",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "backend-337",
      "question": "Backend bo'yicha: «O'n oltilikda 10 dan 15 gacha harflar qo'llanadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "B",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "D",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "backend-338",
      "question": "Backend bo'yicha: «8 + 4 + 2 + 1 = 15.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        },
        {
          "id": "B",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-339",
      "question": "Backend bo'yicha: «16 = 2⁴ = 10000₂.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "B",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-340",
      "question": "Backend bo'yicha: «Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "B",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "backend-341",
      "question": "Backend bo'yicha: «1·16¹ + 10·16⁰ = 16 + 10 = 26.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "B",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-342",
      "question": "Backend bo'yicha: «RAM - energiyaga bog'liq tezkor xotiradir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "C",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "D",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "backend-343",
      "question": "Backend bo'yicha: «ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "C",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "D",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "backend-344",
      "question": "Backend bo'yicha: «Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "backend-345",
      "question": "Backend bo'yicha: «HDD magnit disklar asosida ishlaydi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "B",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "backend-346",
      "question": "Backend bo'yicha: «SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "backend-347",
      "question": "Backend bo'yicha: «Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "C",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "backend-348",
      "question": "Backend bo'yicha: «Skaner qog'ozdagi tasvirni kompyuterga kiritadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-349",
      "question": "Backend bo'yicha: «Printer raqamli ma'lumotni qog'ozga chiqaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-350",
      "question": "Backend bo'yicha: «Plotter katta o'lchamli chizmalar uchun ishlatiladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "backend-351",
      "question": "Backend bo'yicha: «A AND B faqat 1 va 1 bo'lganda 1 bo'ladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "backend-352",
      "question": "Backend bo'yicha: «A OR B faqat 0 va 0 bo'lganda 0 ga teng.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "backend-353",
      "question": "Backend bo'yicha: «NOT 1 = 0, NOT 0 = 1.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "backend-354",
      "question": "Backend bo'yicha: «Algoritm 5 ta asosiy xossaga ega.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "backend-355",
      "question": "Backend bo'yicha: «Romb ichiga shart yoziladi (ha/yo'q).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-356",
      "question": "Backend bo'yicha: «Parallelogramm kiritish-chiqarish blokidir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "B",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "D",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-357",
      "question": "Backend bo'yicha: «Amal yoki hisoblash to'g'ri to'rtburchakda beriladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-358",
      "question": "Backend bo'yicha: «Boshlash va tamom oval ichiga yoziladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "backend-359",
      "question": "Backend bo'yicha: «Masalan: 7 // 2 = 3.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-360",
      "question": "Backend bo'yicha: «Masalan: 7 % 2 = 1.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "C",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "D",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Masalan: 7 % 2 = 1."
    },
    {
      "id": "backend-361",
      "question": "Backend bo'yicha: «Masalan: 2 ** 3 = 8.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-362",
      "question": "Backend bo'yicha: «int - integer (butun son).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "backend-363",
      "question": "Backend bo'yicha: «float - suzuvchi vergulli son.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "D",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "backend-364",
      "question": "Backend bo'yicha: «str - qo'shtirnoq ichidagi matn.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "B",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "C",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "D",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "backend-365",
      "question": "Backend bo'yicha: «<a href='...'>Havola matni</a>.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "<a href='...'>Havola matni</a>."
    },
    {
      "id": "backend-366",
      "question": "Backend bo'yicha: «<img src='...' alt='...'>.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "C",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "backend-367",
      "question": "Backend bo'yicha: «h1 eng katta sarlavha, h6 eng kichigi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "B",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "backend-368",
      "question": "Backend bo'yicha: «ol - ordered list, ul - unordered list.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "D",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "backend-369",
      "question": "Backend bo'yicha: «CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "backend-370",
      "question": "Backend bo'yicha: «IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "B",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "C",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "backend-371",
      "question": "Backend bo'yicha: «DNS inson tushunadigan nomni kompyuter IP siga o'giradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "D",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "backend-372",
      "question": "Backend bo'yicha: «MAC address 48 bitli unikal apparat manzilidir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "C",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "D",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "backend-373",
      "question": "Backend bo'yicha: «FTP - File Transfer Protocol.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "backend-374",
      "question": "Backend bo'yicha: «SMTP - Simple Mail Transfer Protocol.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "B",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "D",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-375",
      "question": "Backend bo'yicha: «Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "B",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "C",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "backend-376",
      "question": "Backend bo'yicha: «Jadval satri bitta ob'ektga tegishli 'yozuv'dir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "D",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "backend-377",
      "question": "Backend bo'yicha: «Ustunlar ob'ektning xossasi yoki 'maydon'idir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "backend-378",
      "question": "Backend bo'yicha: «Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "B",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "C",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "backend-379",
      "question": "Backend bo'yicha: «Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-380",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-381",
      "question": "Backend bo'yicha: «Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Bir baytda nechta bit bor?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-382",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "B",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "C",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "D",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "backend-383",
      "question": "Backend bo'yicha: «Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-384",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "C",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "backend-385",
      "question": "Backend bo'yicha: «Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-386",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "backend-387",
      "question": "Backend bo'yicha: «Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-388",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Videokarta (GPU)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "backend-389",
      "question": "Backend bo'yicha: «Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-390",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "backend-391",
      "question": "Backend bo'yicha: «Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-392",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "backend-393",
      "question": "Backend bo'yicha: «HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "D",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-394",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'HTTP / HTTPS'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "B",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "D",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "backend-395",
      "question": "Backend bo'yicha: «FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "B",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-396",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-397",
      "question": "Backend bo'yicha: «SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-398",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-399",
      "question": "Backend bo'yicha: «POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-400",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'POP3 va IMAP'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "backend-401",
      "question": "Backend bo'yicha: «DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "B",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-402",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "backend-403",
      "question": "Backend bo'yicha: «IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-404",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'IP manzil'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "backend-405",
      "question": "Backend bo'yicha: «MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-406",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'MAC manzil'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "backend-407",
      "question": "Backend bo'yicha: «Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-408",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "backend-409",
      "question": "Backend bo'yicha: «Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-410",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Kommutator (Switch)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "C",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "backend-411",
      "question": "Backend bo'yicha: «.docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-412",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.docx / .doc'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "backend-413",
      "question": "Backend bo'yicha: «.xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "D",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-414",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.xlsx / .xls'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "backend-415",
      "question": "Backend bo'yicha: «.pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-416",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.pptx / .ppt'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "backend-417",
      "question": "Backend bo'yicha: «.html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-418",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.html / .htm'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "C",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "D",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "backend-419",
      "question": "Backend bo'yicha: «.mp3 / .wav - Raqamli audio (tovush) fayllari formati.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "B",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-420",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.mp3 / .wav'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "C",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "backend-421",
      "question": "Backend bo'yicha: «.mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-422",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "backend-423",
      "question": "Backend bo'yicha: «.jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-424",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.jpg / .png / .svg'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "backend-425",
      "question": "Backend bo'yicha: «.zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-426",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.zip / .rar / .7z'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "D",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "backend-427",
      "question": "Backend bo'yicha: «.exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "B",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "C",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-428",
      "question": "Backend bo'yicha: «Ushbu ta'rif '.exe / .msi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "B",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "C",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "backend-429",
      "question": "Backend bo'yicha: «Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "B",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "C",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-430",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "B",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "C",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-431",
      "question": "Backend bo'yicha: «Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "D",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-432",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-433",
      "question": "Backend bo'yicha: «Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-434",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Drayver'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "backend-435",
      "question": "Backend bo'yicha: «BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-436",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "backend-437",
      "question": "Backend bo'yicha: «Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-438",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Antivirus dasturi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "B",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "backend-439",
      "question": "Backend bo'yicha: «O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "JWT tokenining asosiy vazifasi nima?"
        },
        {
          "id": "B",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?"
        },
        {
          "id": "D",
          "text": "SQL nima?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-440",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "backend-441",
      "question": "Backend bo'yicha: «Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-442",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "C",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "backend-443",
      "question": "Backend bo'yicha: «Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "B",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-444",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Funksiya (Function)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "B",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "C",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "backend-445",
      "question": "Backend bo'yicha: «Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-446",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Rekursiya'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "backend-447",
      "question": "Backend bo'yicha: «Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-448",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Kompilyator'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "B",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "backend-449",
      "question": "Backend bo'yicha: «Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "backend-450",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'Interpretator'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "backend-451",
      "question": "Backend bo'yicha: «<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "backend-452",
      "question": "Backend bo'yicha: «Ushbu ta'rif '<table> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "backend-453",
      "question": "Backend bo'yicha: «<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "backend-454",
      "question": "Backend bo'yicha: «Ushbu ta'rif '<tr> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "SQL nima?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "C",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "D",
          "text": "JWT tokenining asosiy vazifasi nima?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "backend-455",
      "question": "Backend bo'yicha: «<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "backend-456",
      "question": "Backend bo'yicha: «Ushbu ta'rif '<td> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "C",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "D",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "backend-457",
      "question": "Backend bo'yicha: «<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "backend-458",
      "question": "Backend bo'yicha: «Ushbu ta'rif '<form> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "B",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "HTTP 404 status kodi nimani bildiradi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "backend-459",
      "question": "Backend bo'yicha: «<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "backend-460",
      "question": "Backend bo'yicha: «Ushbu ta'rif '<input> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "backend-461",
      "question": "Backend bo'yicha: «JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "backend-462",
      "question": "Backend bo'yicha: «Ushbu ta'rif 'JavaScript'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "B",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "D",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "backend-463",
      "question": "Backend bo'yicha: «print() orqali natija konsolga chiqariladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "B",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "backend-464",
      "question": "Backend bo'yicha: «input() klaviaturadan satr ko'rinishida qabul qiladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "B",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "backend-465",
      "question": "Backend bo'yicha: «if shart: ... elif ... else.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "backend-466",
      "question": "Backend bo'yicha: «def funksiya_nomi(parametrlar): ...» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "backend-467",
      "question": "Backend bo'yicha: «for i in range(...): tsikli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "backend-468",
      "question": "Backend bo'yicha: «while shart: ... tsikli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "backend-469",
      "question": "Backend bo'yicha: «Ro'yxat: a = [1, 2, 3].» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "backend-470",
      "question": "Backend bo'yicha: «Kortej: a = (1, 2, 3).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "B",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "C",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "backend-471",
      "question": "Backend bo'yicha: «Lug'at: d = {'ism': 'Ali', 'yosh': 16}.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "B",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "JWT tokenining asosiy vazifasi nima?"
        },
        {
          "id": "D",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "backend-472",
      "question": "Backend bo'yicha: «len(a) ro'yxat yoki satr uzunligini qaytaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "C",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "D",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "backend-473",
      "question": "Backend bo'yicha: «Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "B",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "backend-474",
      "question": "Backend bo'yicha: «Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "backend-475",
      "question": "Backend bo'yicha: «RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "B",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "C",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "D",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "backend-476",
      "question": "Backend bo'yicha: «CMYK bo'yoqlar aralashuvi modelidir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        },
        {
          "id": "C",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "backend-477",
      "question": "Backend bo'yicha: «CIA triad: Confidentiality, Integrity, Availability.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "B",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "D",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "backend-478",
      "question": "Backend bo'yicha: «Arxivlash fayl hajmini kamaytiradi (ZIP, RAR).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "B",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "backend-479",
      "question": "Backend bo'yicha: «Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "B",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "backend-480",
      "question": "Backend bo'yicha: «Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "backend-481",
      "question": "Backend bo'yicha: «1975-yilda tashkil topgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1975-yilda tashkil topgan."
    },
    {
      "id": "backend-482",
      "question": "Backend bo'yicha: «1976-yilda Apple I kompyuterini yaratgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "backend-483",
      "question": "Backend bo'yicha: «1998-yilda Stenford universiteti talabalari tomonidan yaratilgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "D",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "backend-484",
      "question": "«HTTP 404 status kodi nimani bildiradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        },
        {
          "id": "B",
          "text": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
        },
        {
          "id": "C",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-485",
      "question": "«REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "B",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "D",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "To'g'ri javob: POST."
    },
    {
      "id": "backend-486",
      "question": "«SQL nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        },
        {
          "id": "D",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
    },
    {
      "id": "backend-487",
      "question": "«JWT tokenining asosiy vazifasi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
        },
        {
          "id": "C",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 300,
      "explanation": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
    },
    {
      "id": "backend-488",
      "question": "Backend bo'yicha: «Bir baytda nechta bit bor?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 bayt = 8 bit."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
        },
        {
          "id": "D",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "1 bayt = 8 bit."
    },
    {
      "id": "backend-489",
      "question": "Backend bo'yicha: «Kompyuterning asosiy hisoblash qurilmasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        },
        {
          "id": "B",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "D",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-490",
      "question": "Backend bo'yicha: «HTML tili asosan nima uchun ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        },
        {
          "id": "B",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "C",
          "text": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
        },
        {
          "id": "D",
          "text": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "backend-491",
      "question": "Backend bo'yicha: «Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        },
        {
          "id": "B",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        },
        {
          "id": "C",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "D",
          "text": "1 GB = 1024 MB."
        }
      ],
      "correct": "C",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-492",
      "question": "Backend bo'yicha: «1 Kilobayt (KB) necha baytga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
        },
        {
          "id": "B",
          "text": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
        },
        {
          "id": "C",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-493",
      "question": "Backend bo'yicha: «1 Megabayt (MB) necha Kilobaytga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        },
        {
          "id": "D",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-494",
      "question": "Backend bo'yicha: «1 Gigabayt (GB) necha Megabaytga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        },
        {
          "id": "C",
          "text": "1 GB = 1024 MB."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "backend-495",
      "question": "Backend bo'yicha: «ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        },
        {
          "id": "B",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        },
        {
          "id": "C",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "backend-496",
      "question": "Backend bo'yicha: «Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "B",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        },
        {
          "id": "C",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "D",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "backend-497",
      "question": "Backend bo'yicha: «Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Rekursiya'ga tegishli."
        },
        {
          "id": "B",
          "text": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
        },
        {
          "id": "C",
          "text": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
        },
        {
          "id": "D",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "backend-498",
      "question": "Backend bo'yicha: «O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm kiritish-chiqarish blokidir."
        },
        {
          "id": "B",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        },
        {
          "id": "C",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "D",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "backend-499",
      "question": "Backend bo'yicha: «Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "int - integer (butun son)."
        },
        {
          "id": "B",
          "text": "8 + 4 + 2 + 1 = 15."
        },
        {
          "id": "C",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "D",
          "text": "Masalan: 7 % 2 = 1."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-500",
      "question": "Backend bo'yicha: «O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "B",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "C",
          "text": "16 = 2⁴ = 10000₂."
        },
        {
          "id": "D",
          "text": "int - integer (butun son)."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-501",
      "question": "Backend bo'yicha: «Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "B",
          "text": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
        },
        {
          "id": "C",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "D",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "backend-502",
      "question": "Backend bo'yicha: «O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-503",
      "question": "Backend bo'yicha: «Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "D",
          "text": "RAM - energiyaga bog'liq tezkor xotiradir."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "backend-504",
      "question": "Backend bo'yicha: «Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "B",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        },
        {
          "id": "C",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "D",
          "text": "Masalan: 2 ** 3 = 8."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "backend-505",
      "question": "Backend bo'yicha: «Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "B",
          "text": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
        },
        {
          "id": "C",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        },
        {
          "id": "D",
          "text": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "backend-506",
      "question": "Backend bo'yicha: «Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
        },
        {
          "id": "B",
          "text": "HDD magnit disklar asosida ishlaydi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Rekursiya'ga tegishli."
        },
        {
          "id": "D",
          "text": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "backend-507",
      "question": "Backend bo'yicha: «Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
        },
        {
          "id": "B",
          "text": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "backend-508",
      "question": "Backend bo'yicha: «Taktli chastotaning o'lchov birligi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "backend-509",
      "question": "Backend bo'yicha: «Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-510",
      "question": "Backend bo'yicha: «Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "B",
          "text": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
        },
        {
          "id": "C",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        },
        {
          "id": "D",
          "text": "SMTP - Simple Mail Transfer Protocol."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-511",
      "question": "Backend bo'yicha: «Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<img src='...' alt='...'>."
        },
        {
          "id": "B",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "C",
          "text": "<a href='...'>Havola matni</a>."
        },
        {
          "id": "D",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "backend-512",
      "question": "Backend bo'yicha: «Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "B",
          "text": "HDD magnit disklar asosida ishlaydi."
        },
        {
          "id": "C",
          "text": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
        },
        {
          "id": "D",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "backend-513",
      "question": "Backend bo'yicha: «Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
        },
        {
          "id": "C",
          "text": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
        },
        {
          "id": "D",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "backend-514",
      "question": "Backend bo'yicha: «Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
        },
        {
          "id": "B",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "backend-515",
      "question": "Backend bo'yicha: «Algoritmning asosiy xossalari qaysilar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "B",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "C",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "D",
          "text": "NOT 1 = 0, NOT 0 = 1."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "backend-516",
      "question": "Backend bo'yicha: «Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "B",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-517",
      "question": "Backend bo'yicha: «Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "B",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        },
        {
          "id": "C",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        },
        {
          "id": "D",
          "text": "Parallelogramm kiritish-chiqarish blokidir."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-518",
      "question": "Backend bo'yicha: «Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        },
        {
          "id": "B",
          "text": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
        },
        {
          "id": "C",
          "text": "SMTP - Simple Mail Transfer Protocol."
        },
        {
          "id": "D",
          "text": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-519",
      "question": "Backend bo'yicha: «Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
        },
        {
          "id": "D",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "backend-520",
      "question": "Backend bo'yicha: «Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "B",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "C",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        },
        {
          "id": "D",
          "text": "Masalan: 7 // 2 = 3."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-521",
      "question": "Backend bo'yicha: «Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        },
        {
          "id": "B",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Masalan: 7 % 2 = 1."
    },
    {
      "id": "backend-522",
      "question": "Backend bo'yicha: «Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "B",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "C",
          "text": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
        },
        {
          "id": "D",
          "text": "Masalan: 2 ** 3 = 8."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-523",
      "question": "Backend bo'yicha: «Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kortej: a = (1, 2, 3)."
        },
        {
          "id": "B",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        },
        {
          "id": "C",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        },
        {
          "id": "D",
          "text": "int - integer (butun son)."
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "backend-524",
      "question": "Backend bo'yicha: «Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
        },
        {
          "id": "B",
          "text": "float - suzuvchi vergulli son."
        },
        {
          "id": "C",
          "text": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "backend-525",
      "question": "Backend bo'yicha: «Satrli (matnli) ma'lumot turi qanday ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm kiritish-chiqarish blokidir."
        },
        {
          "id": "B",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "C",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "D",
          "text": "str - qo'shtirnoq ichidagi matn."
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "backend-526",
      "question": "Backend bo'yicha: «Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "B",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        },
        {
          "id": "C",
          "text": "if shart: ... elif ... else."
        },
        {
          "id": "D",
          "text": "<a href='...'>Havola matni</a>."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "<a href='...'>Havola matni</a>."
    },
    {
      "id": "backend-527",
      "question": "Backend bo'yicha: «HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "B",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "C",
          "text": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
        },
        {
          "id": "D",
          "text": "<img src='...' alt='...'>."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "backend-528",
      "question": "Backend bo'yicha: «HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        },
        {
          "id": "B",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "C",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        },
        {
          "id": "D",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "backend-529",
      "question": "Backend bo'yicha: «HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        },
        {
          "id": "B",
          "text": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
        },
        {
          "id": "C",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        },
        {
          "id": "D",
          "text": "ol - ordered list, ul - unordered list."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "backend-530",
      "question": "Backend bo'yicha: «CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Interpretator'ga tegishli."
        },
        {
          "id": "B",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "backend-531",
      "question": "Backend bo'yicha: «IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
        },
        {
          "id": "B",
          "text": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
        },
        {
          "id": "C",
          "text": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
        },
        {
          "id": "D",
          "text": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "backend-532",
      "question": "Backend bo'yicha: «DNS (Domain Name System) serverining asosiy vazifasi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Drayver'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "C",
          "text": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
        },
        {
          "id": "D",
          "text": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "backend-533",
      "question": "Backend bo'yicha: «Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        },
        {
          "id": "B",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "D",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "backend-534",
      "question": "Backend bo'yicha: «Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "B",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        },
        {
          "id": "C",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "D",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "backend-535",
      "question": "Backend bo'yicha: «Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "D",
          "text": "SMTP - Simple Mail Transfer Protocol."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-536",
      "question": "Backend bo'yicha: «Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        },
        {
          "id": "B",
          "text": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "D",
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "backend-537",
      "question": "Backend bo'yicha: «Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "B",
          "text": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
        },
        {
          "id": "C",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        },
        {
          "id": "D",
          "text": "if shart: ... elif ... else."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "backend-538",
      "question": "Backend bo'yicha: «Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
        },
        {
          "id": "B",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "C",
          "text": "SMTP - Simple Mail Transfer Protocol."
        },
        {
          "id": "D",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "backend-539",
      "question": "Backend bo'yicha: «Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
        },
        {
          "id": "B",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        },
        {
          "id": "C",
          "text": "HDD magnit disklar asosida ishlaydi."
        },
        {
          "id": "D",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "backend-540",
      "question": "Backend bo'yicha: «Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-541",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "16 = 2⁴ = 10000₂."
        },
        {
          "id": "C",
          "text": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
        },
        {
          "id": "D",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-542",
      "question": "Backend bo'yicha: «Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
        },
        {
          "id": "B",
          "text": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
        },
        {
          "id": "C",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-543",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "backend-544",
      "question": "Backend bo'yicha: «Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
        },
        {
          "id": "B",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        },
        {
          "id": "C",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-545",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "B",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "backend-546",
      "question": "Backend bo'yicha: «Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "float - suzuvchi vergulli son."
        },
        {
          "id": "B",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "D",
          "text": "int - integer (butun son)."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-547",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        },
        {
          "id": "B",
          "text": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
        },
        {
          "id": "C",
          "text": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "backend-548",
      "question": "Backend bo'yicha: «Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "B",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "C",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "D",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-549",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "C",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        },
        {
          "id": "D",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "backend-550",
      "question": "Backend bo'yicha: «Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        },
        {
          "id": "B",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        },
        {
          "id": "C",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        },
        {
          "id": "D",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-551",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "B",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "backend-552",
      "question": "Backend bo'yicha: «Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "if shart: ... elif ... else."
        },
        {
          "id": "B",
          "text": "for i in range(...): tsikli."
        },
        {
          "id": "C",
          "text": "def funksiya_nomi(parametrlar): ..."
        },
        {
          "id": "D",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-553",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "B",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "C",
          "text": "SMTP - Simple Mail Transfer Protocol."
        },
        {
          "id": "D",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "backend-554",
      "question": "Backend bo'yicha: «Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        },
        {
          "id": "B",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        },
        {
          "id": "C",
          "text": "8 + 4 + 2 + 1 = 15."
        },
        {
          "id": "D",
          "text": "16 = 2⁴ = 10000₂."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-555",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "backend-556",
      "question": "Backend bo'yicha: «Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "B",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "C",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-557",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "B",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "C",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-558",
      "question": "Backend bo'yicha: «Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
        },
        {
          "id": "B",
          "text": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
        },
        {
          "id": "C",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        },
        {
          "id": "D",
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-559",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-560",
      "question": "Backend bo'yicha: «Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "D",
          "text": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-561",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "backend-562",
      "question": "Backend bo'yicha: «Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
        },
        {
          "id": "B",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        },
        {
          "id": "C",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "D",
          "text": "1 GB = 1024 MB."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-563",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "backend-564",
      "question": "Backend bo'yicha: «Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        },
        {
          "id": "B",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "C",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-565",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        },
        {
          "id": "B",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "C",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        },
        {
          "id": "D",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "backend-566",
      "question": "Backend bo'yicha: «Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        },
        {
          "id": "B",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        },
        {
          "id": "D",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-567",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "B",
          "text": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "backend-568",
      "question": "Backend bo'yicha: «Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "B",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "C",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "D",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-569",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "D",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "backend-570",
      "question": "Backend bo'yicha: «Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
        },
        {
          "id": "B",
          "text": "Kortej: a = (1, 2, 3)."
        },
        {
          "id": "C",
          "text": "Ro'yxat: a = [1, 2, 3]."
        },
        {
          "id": "D",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-571",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
        },
        {
          "id": "B",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "C",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "D",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "backend-572",
      "question": "Backend bo'yicha: «Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        },
        {
          "id": "B",
          "text": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
        },
        {
          "id": "C",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-573",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.docx / .doc'ga tegishli."
        },
        {
          "id": "B",
          "text": "def funksiya_nomi(parametrlar): ..."
        },
        {
          "id": "C",
          "text": "for i in range(...): tsikli."
        },
        {
          "id": "D",
          "text": "while shart: ... tsikli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "backend-574",
      "question": "Backend bo'yicha: «Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 bayt = 8 bit."
        },
        {
          "id": "B",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "D",
          "text": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-575",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        },
        {
          "id": "D",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "backend-576",
      "question": "Backend bo'yicha: «Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "B",
          "text": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-577",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
        },
        {
          "id": "B",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "backend-578",
      "question": "Backend bo'yicha: «Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "B",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "C",
          "text": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
        },
        {
          "id": "D",
          "text": "Masalan: 2 ** 3 = 8."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-579",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm kiritish-chiqarish blokidir."
        },
        {
          "id": "B",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        },
        {
          "id": "C",
          "text": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "backend-580",
      "question": "Backend bo'yicha: «Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        },
        {
          "id": "B",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        },
        {
          "id": "C",
          "text": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
        },
        {
          "id": "D",
          "text": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-581",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "B",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "C",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "backend-582",
      "question": "Backend bo'yicha: «Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "def funksiya_nomi(parametrlar): ..."
        },
        {
          "id": "B",
          "text": "while shart: ... tsikli."
        },
        {
          "id": "C",
          "text": "for i in range(...): tsikli."
        },
        {
          "id": "D",
          "text": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-583",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "backend-584",
      "question": "Backend bo'yicha: «Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "C",
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-585",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kortej: a = (1, 2, 3)."
        },
        {
          "id": "B",
          "text": "Ro'yxat: a = [1, 2, 3]."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        },
        {
          "id": "D",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "backend-586",
      "question": "Backend bo'yicha: «Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 bayt = 8 bit."
        },
        {
          "id": "B",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        },
        {
          "id": "C",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "D",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-587",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "backend-588",
      "question": "Backend bo'yicha: «Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
        },
        {
          "id": "B",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-589",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Drayver'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "C",
          "text": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "backend-590",
      "question": "Backend bo'yicha: «Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        },
        {
          "id": "B",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-591",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "B",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "C",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "D",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-592",
      "question": "Backend bo'yicha: «Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
        },
        {
          "id": "B",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        },
        {
          "id": "C",
          "text": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-593",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-594",
      "question": "Backend bo'yicha: «Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "float - suzuvchi vergulli son."
        },
        {
          "id": "B",
          "text": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
        },
        {
          "id": "C",
          "text": "str - qo'shtirnoq ichidagi matn."
        },
        {
          "id": "D",
          "text": "int - integer (butun son)."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-595",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "B",
          "text": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Drayver'ga tegishli."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "backend-596",
      "question": "Backend bo'yicha: «Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        },
        {
          "id": "B",
          "text": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        },
        {
          "id": "D",
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-597",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
        },
        {
          "id": "B",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
        },
        {
          "id": "C",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        },
        {
          "id": "D",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "backend-598",
      "question": "Backend bo'yicha: «Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "8 + 4 + 2 + 1 = 15."
        },
        {
          "id": "B",
          "text": "16 = 2⁴ = 10000₂."
        },
        {
          "id": "C",
          "text": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
        },
        {
          "id": "D",
          "text": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-599",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<img src='...' alt='...'>."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
        },
        {
          "id": "C",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "D",
          "text": "<a href='...'>Havola matni</a>."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "backend-600",
      "question": "Backend bo'yicha: «Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "C",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "D",
          "text": "1 bayt = 8 bit."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-601",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "backend-602",
      "question": "Backend bo'yicha: «Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<img src='...' alt='...'>."
        },
        {
          "id": "B",
          "text": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
        },
        {
          "id": "C",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "D",
          "text": "ol - ordered list, ul - unordered list."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-603",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<a href='...'>Havola matni</a>."
        },
        {
          "id": "B",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
        },
        {
          "id": "D",
          "text": "<img src='...' alt='...'>."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "backend-604",
      "question": "Backend bo'yicha: «Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
        },
        {
          "id": "B",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-605",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
        },
        {
          "id": "D",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "backend-606",
      "question": "Backend bo'yicha: «Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-607",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<a href='...'>Havola matni</a>."
        },
        {
          "id": "B",
          "text": "float - suzuvchi vergulli son."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Rekursiya'ga tegishli."
        },
        {
          "id": "D",
          "text": "str - qo'shtirnoq ichidagi matn."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "backend-608",
      "question": "Backend bo'yicha: «Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "for i in range(...): tsikli."
        },
        {
          "id": "B",
          "text": "while shart: ... tsikli."
        },
        {
          "id": "C",
          "text": "Ro'yxat: a = [1, 2, 3]."
        },
        {
          "id": "D",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-609",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kompilyator'ga tegishli."
        },
        {
          "id": "C",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "D",
          "text": "SMTP - Simple Mail Transfer Protocol."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "backend-610",
      "question": "Backend bo'yicha: «Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "B",
          "text": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Drayver'ga tegishli."
        },
        {
          "id": "D",
          "text": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "backend-611",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Interpretator'ga tegishli."
        },
        {
          "id": "B",
          "text": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
        },
        {
          "id": "C",
          "text": "8 + 4 + 2 + 1 = 15."
        },
        {
          "id": "D",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "backend-612",
      "question": "Backend bo'yicha: «Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "B",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "C",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        },
        {
          "id": "D",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "backend-613",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "backend-614",
      "question": "Backend bo'yicha: «Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Interpretator'ga tegishli."
        },
        {
          "id": "B",
          "text": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
        },
        {
          "id": "C",
          "text": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
        },
        {
          "id": "D",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "backend-615",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "while shart: ... tsikli."
        },
        {
          "id": "B",
          "text": "Ro'yxat: a = [1, 2, 3]."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "for i in range(...): tsikli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "backend-616",
      "question": "Backend bo'yicha: «Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        },
        {
          "id": "B",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "C",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        },
        {
          "id": "D",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "backend-617",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "D",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "backend-618",
      "question": "Backend bo'yicha: «Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
        },
        {
          "id": "D",
          "text": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "backend-619",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "C",
          "text": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
        },
        {
          "id": "D",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "backend-620",
      "question": "Backend bo'yicha: «Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "int - integer (butun son)."
        },
        {
          "id": "B",
          "text": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
        },
        {
          "id": "C",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "D",
          "text": "Masalan: 7 % 2 = 1."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "backend-621",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        },
        {
          "id": "B",
          "text": "To'g'ri javob: POST."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "backend-622",
      "question": "Backend bo'yicha: «Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        },
        {
          "id": "B",
          "text": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
        },
        {
          "id": "D",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "backend-623",
      "question": "Backend bo'yicha: «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<a href='...'>Havola matni</a>."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "C",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "D",
          "text": "<img src='...' alt='...'>."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "backend-624",
      "question": "Backend bo'yicha: «Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Interpretator'ga tegishli."
        },
        {
          "id": "C",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        },
        {
          "id": "D",
          "text": "print() orqali natija konsolga chiqariladi."
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "backend-625",
      "question": "Backend bo'yicha: «Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<img src='...' alt='...'>."
        },
        {
          "id": "B",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "C",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        },
        {
          "id": "D",
          "text": "ol - ordered list, ul - unordered list."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "backend-626",
      "question": "Backend bo'yicha: «Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "if shart: ... elif ... else."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "backend-627",
      "question": "Backend bo'yicha: «Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "B",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "C",
          "text": "def funksiya_nomi(parametrlar): ..."
        },
        {
          "id": "D",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "backend-628",
      "question": "Backend bo'yicha: «Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
        },
        {
          "id": "B",
          "text": "for i in range(...): tsikli."
        },
        {
          "id": "C",
          "text": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
        },
        {
          "id": "D",
          "text": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "backend-629",
      "question": "Backend bo'yicha: «Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
        },
        {
          "id": "B",
          "text": "To'g'ri javob: So‘ralgan resurs topilmadi."
        },
        {
          "id": "C",
          "text": "while shart: ... tsikli."
        },
        {
          "id": "D",
          "text": "To'g'ri javob: POST."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "backend-630",
      "question": "Backend bo'yicha: «Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        },
        {
          "id": "B",
          "text": "Ro'yxat: a = [1, 2, 3]."
        },
        {
          "id": "C",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "D",
          "text": "1 GB = 1024 MB."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "backend-631",
      "question": "Backend bo'yicha: «O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
        },
        {
          "id": "C",
          "text": "Kortej: a = (1, 2, 3)."
        },
        {
          "id": "D",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "backend-632",
      "question": "Backend bo'yicha: «Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Rekursiya'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kompilyator'ga tegishli."
        },
        {
          "id": "C",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
        },
        {
          "id": "D",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "backend-633",
      "question": "Backend bo'yicha: «Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "B",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        },
        {
          "id": "C",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "D",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "backend-634",
      "question": "Backend bo'yicha: «Rastrli grafika nimaga asoslangan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "B",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        },
        {
          "id": "C",
          "text": "ol - ordered list, ul - unordered list."
        },
        {
          "id": "D",
          "text": "<img src='...' alt='...'>."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "backend-635",
      "question": "Backend bo'yicha: «Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "D",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "backend-636",
      "question": "Backend bo'yicha: «RGB rang modelida asosiy ranglar qaysilar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "D",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "backend-637",
      "question": "Backend bo'yicha: «Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        },
        {
          "id": "B",
          "text": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "D",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "backend-638",
      "question": "Backend bo'yicha: «Axborot xavfsizligining uchta asosiy tamoyili qaysilar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "C",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "backend-639",
      "question": "Backend bo'yicha: «Fayllarni siqish (arxivlash)dan asosiy maqsad nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "B",
          "text": "Parallelogramm kiritish-chiqarish blokidir."
        },
        {
          "id": "C",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "D",
          "text": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "backend-640",
      "question": "Backend bo'yicha: «Quyidagilardan qaysi biri operatsion sistema hisoblanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "B",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "C",
          "text": "1 bayt = 8 bit."
        },
        {
          "id": "D",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "backend-641",
      "question": "Backend bo'yicha: «Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        },
        {
          "id": "B",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "C",
          "text": "Kortej: a = (1, 2, 3)."
        },
        {
          "id": "D",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "backend-642",
      "question": "Backend bo'yicha: «Microsoft kompaniyasining asoschisi kim?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "B",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        },
        {
          "id": "C",
          "text": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
        },
        {
          "id": "D",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1975-yilda tashkil topgan."
    },
    {
      "id": "backend-643",
      "question": "Backend bo'yicha: «Apple kompaniyasining asoschilari kimlar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
        },
        {
          "id": "B",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "C",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
        },
        {
          "id": "D",
          "text": "16 = 2⁴ = 10000₂."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "backend-644",
      "question": "Backend bo'yicha: «Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "B",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "C",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        },
        {
          "id": "D",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "backend-645",
      "question": "Izohdagi bo'sh joyni to'ldiring: To'g'ri javob: ______.",
      "options": [
        {
          "id": "A",
          "text": "Muvaffaqiyatli bajarildi"
        },
        {
          "id": "B",
          "text": "Server ichki xatosi"
        },
        {
          "id": "C",
          "text": "Ruxsat berilmagan"
        },
        {
          "id": "D",
          "text": "So‘ralgan resurs topilmadi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-646",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Markaziy ______ (CPU) barcha mantiqiy va arifmetik amallarni bajaradi.",
      "options": [
        {
          "id": "A",
          "text": "Monitor"
        },
        {
          "id": "B",
          "text": "Qattiq disk"
        },
        {
          "id": "C",
          "text": "Protsessor"
        },
        {
          "id": "D",
          "text": "Operativ xotira"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-647",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = ______.",
      "options": [
        {
          "id": "A",
          "text": "8"
        },
        {
          "id": "B",
          "text": "10"
        },
        {
          "id": "C",
          "text": "9"
        },
        {
          "id": "D",
          "text": "12"
        }
      ],
      "correct": "B",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-648",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 1 KB = 2¹⁰ bayt = ______.",
      "options": [
        {
          "id": "A",
          "text": "2048 bayt"
        },
        {
          "id": "B",
          "text": "1000 bayt"
        },
        {
          "id": "C",
          "text": "1024 bayt"
        },
        {
          "id": "D",
          "text": "512 bayt"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-649",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 1 MB = ______ = 2²⁰ bayt.",
      "options": [
        {
          "id": "A",
          "text": "1000 KB"
        },
        {
          "id": "B",
          "text": "1024 bayt"
        },
        {
          "id": "C",
          "text": "2048 KB"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-650",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 1 GB = ______.",
      "options": [
        {
          "id": "A",
          "text": "1024 MB"
        },
        {
          "id": "B",
          "text": "1000 MB"
        },
        {
          "id": "C",
          "text": "1024 KB"
        },
        {
          "id": "D",
          "text": "4096 MB"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "backend-651",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 8 + 4 + 2 + 1 = ______.",
      "options": [
        {
          "id": "A",
          "text": "14"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "7"
        },
        {
          "id": "D",
          "text": "15"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-652",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 16 = 2⁴ = ______₂.",
      "options": [
        {
          "id": "A",
          "text": "10000"
        },
        {
          "id": "B",
          "text": "1111"
        },
        {
          "id": "C",
          "text": "1000"
        },
        {
          "id": "D",
          "text": "100000"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-653",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: 1·16¹ + 10·16⁰ = 16 + 10 = ______.",
      "options": [
        {
          "id": "A",
          "text": "26"
        },
        {
          "id": "B",
          "text": "10"
        },
        {
          "id": "C",
          "text": "24"
        },
        {
          "id": "D",
          "text": "16"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-654",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ qog'ozdagi tasvirni kompyuterga kiritadi.",
      "options": [
        {
          "id": "A",
          "text": "Skaner"
        },
        {
          "id": "B",
          "text": "Monitor"
        },
        {
          "id": "C",
          "text": "Plotter"
        },
        {
          "id": "D",
          "text": "Printer"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-655",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ raqamli ma'lumotni qog'ozga chiqaradi.",
      "options": [
        {
          "id": "A",
          "text": "Printer"
        },
        {
          "id": "B",
          "text": "Mikrofon"
        },
        {
          "id": "C",
          "text": "Klaviatura"
        },
        {
          "id": "D",
          "text": "Skaner"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-656",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ ichiga shart yoziladi (ha/yo'q).",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm"
        },
        {
          "id": "B",
          "text": "Oval"
        },
        {
          "id": "C",
          "text": "Romb"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-657",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ kiritish-chiqarish blokidir.",
      "options": [
        {
          "id": "A",
          "text": "Doira"
        },
        {
          "id": "B",
          "text": "Romb"
        },
        {
          "id": "C",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "D",
          "text": "Parallelogramm"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-658",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Amal yoki hisoblash ______da beriladi.",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "Oval"
        },
        {
          "id": "C",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "D",
          "text": "Trapetsiya"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-659",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Masalan: 7 ______ 2 = 3.",
      "options": [
        {
          "id": "A",
          "text": "/"
        },
        {
          "id": "B",
          "text": "**"
        },
        {
          "id": "C",
          "text": "%"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-660",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Masalan: 2 ______ 3 = 8.",
      "options": [
        {
          "id": "A",
          "text": "**"
        },
        {
          "id": "B",
          "text": "^"
        },
        {
          "id": "C",
          "text": "pow"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-661",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ - integer (butun son).",
      "options": [
        {
          "id": "A",
          "text": "float"
        },
        {
          "id": "B",
          "text": "bool"
        },
        {
          "id": "C",
          "text": "str"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "backend-662",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ - suzuvchi vergulli son.",
      "options": [
        {
          "id": "A",
          "text": "char"
        },
        {
          "id": "B",
          "text": "int"
        },
        {
          "id": "C",
          "text": "list"
        },
        {
          "id": "D",
          "text": "float"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "backend-663",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ - File Transfer Protocol.",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "POP3"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "backend-664",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ - Simple Mail Transfer Protocol.",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "IMAP"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "POP3"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-665",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Markaziy protsessor (CPU) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-666",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Ushbu ta'rif '______'ga tegishli.",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU)"
        },
        {
          "id": "B",
          "text": "Operativ xotira"
        },
        {
          "id": "C",
          "text": "Qattiq disk"
        },
        {
          "id": "D",
          "text": "Videokarta"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-667",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Operativ xotira (RAM) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-668",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Doimiy xotira (ROM) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-669",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Kesh-xotira (Cache) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-670",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Videokarta (GPU) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-671",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Ona plata (Motherboard) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-672",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Quvvat bloki (Power Supply) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-673",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: HTTP / HTTPS - ______.",
      "options": [
        {
          "id": "A",
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-674",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: FTP (File Transfer Protocol) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-675",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: SMTP (Simple Mail Transfer Protocol) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-676",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: POP3 va IMAP - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-677",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: DHCP (Dynamic Host Configuration Protocol) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-678",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: IP manzil - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-679",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: MAC manzil - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-680",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Marshrutizator (Router) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-681",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Kommutator (Switch) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-682",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .docx / .doc - ______.",
      "options": [
        {
          "id": "A",
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-683",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .xlsx / .xls - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-684",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .pptx / .ppt - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-685",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .html / .htm - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-686",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .mp3 / .wav - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Raqamli audio (tovush) fayllari formati"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-687",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .mp4 / .avi / .mkv - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Raqamli video fayllari kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-688",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .jpg / .png / .svg - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-689",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .zip / .rar / .7z - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-690",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: .exe / .msi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-691",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Tizimli dasturiy ta'minot - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-692",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Amaliy dasturiy ta'minot - ______.",
      "options": [
        {
          "id": "A",
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-693",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Drayver - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-694",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: BIOS (Basic Input/Output System) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-695",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Antivirus dasturi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-696",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: O'zgaruvchi (Variable) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-697",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Massiv (Ro'yxat / List) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-698",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Funksiya (Function) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-699",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Rekursiya - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-700",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Kompilyator - ______.",
      "options": [
        {
          "id": "A",
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-701",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: Interpretator - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "backend-702",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: <table> tegi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "backend-703",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: <tr> tegi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "HTML jadvalida yangi satr (qator) hosil qiluvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "backend-704",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: <td> tegi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "backend-705",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: <form> tegi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "backend-706",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: <input> tegi - ______.",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "backend-707",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: JavaScript - ______.",
      "options": [
        {
          "id": "A",
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        },
        {
          "id": "B",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "backend-708",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ orqali natija konsolga chiqariladi.",
      "options": [
        {
          "id": "A",
          "text": "echo()"
        },
        {
          "id": "B",
          "text": "write()"
        },
        {
          "id": "C",
          "text": "print()"
        },
        {
          "id": "D",
          "text": "input()"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "backend-709",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ klaviaturadan satr ko'rinishida qabul qiladi.",
      "options": [
        {
          "id": "A",
          "text": "input()"
        },
        {
          "id": "B",
          "text": "print()"
        },
        {
          "id": "C",
          "text": "read()"
        },
        {
          "id": "D",
          "text": "scan()"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "backend-710",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ shart: ... elif ... else.",
      "options": [
        {
          "id": "A",
          "text": "if"
        },
        {
          "id": "B",
          "text": "while"
        },
        {
          "id": "C",
          "text": "for"
        },
        {
          "id": "D",
          "text": "def"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "backend-711",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ funksiya_nomi(parametrlar): ...",
      "options": [
        {
          "id": "A",
          "text": "function"
        },
        {
          "id": "B",
          "text": "proc"
        },
        {
          "id": "C",
          "text": "def"
        },
        {
          "id": "D",
          "text": "fun"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "backend-712",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ i in range(...): tsikli.",
      "options": [
        {
          "id": "A",
          "text": "for"
        },
        {
          "id": "B",
          "text": "def"
        },
        {
          "id": "C",
          "text": "switch"
        },
        {
          "id": "D",
          "text": "if"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "backend-713",
      "question": "Backend bo'yicha: Izohdagi bo'sh joyni to'ldiring: ______ shart: ... tsikli.",
      "options": [
        {
          "id": "A",
          "text": "while"
        },
        {
          "id": "B",
          "text": "for"
        },
        {
          "id": "C",
          "text": "if"
        },
        {
          "id": "D",
          "text": "range"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "backend-714",
      "question": "«So‘ralgan resurs topilmadi» varianti «HTTP 404 status kodi nimani bildiradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-715",
      "question": "«POST» varianti «REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. To'g'ri javob: POST."
    },
    {
      "id": "backend-716",
      "question": "«Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili» varianti «SQL nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Ha. To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
    },
    {
      "id": "backend-717",
      "question": "«Foydalanuvchi autentifikatsiyasini tasdiqlash» varianti «JWT tokenining asosiy vazifasi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 300,
      "explanation": "Ha. To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
    },
    {
      "id": "backend-718",
      "question": "Backend bo'yicha: «8» varianti «Bir baytda nechta bit bor?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. 1 bayt = 8 bit."
    },
    {
      "id": "backend-719",
      "question": "Backend bo'yicha: «Protsessor» varianti «Kompyuterning asosiy hisoblash qurilmasi qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-720",
      "question": "Backend bo'yicha: «Web sahifa tuzilmasini yaratish» varianti «HTML tili asosan nima uchun ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Ha. HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "backend-721",
      "question": "Backend bo'yicha: «10» varianti «Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 300,
      "explanation": "Ha. 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-722",
      "question": "Backend bo'yicha: «1024 bayt» varianti «1 Kilobayt (KB) necha baytga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-723",
      "question": "Backend bo'yicha: «1024 KB» varianti «1 Megabayt (MB) necha Kilobaytga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-724",
      "question": "Backend bo'yicha: «1024 MB» varianti «1 Gigabayt (GB) necha Megabaytga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. 1 GB = 1024 MB."
    },
    {
      "id": "backend-725",
      "question": "Backend bo'yicha: «1 bayt (8 bit)» varianti «ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "backend-726",
      "question": "Backend bo'yicha: «2 bayt (16 bit)» varianti «Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "backend-727",
      "question": "Backend bo'yicha: «N = 2^i» varianti «Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "backend-728",
      "question": "Backend bo'yicha: «A, B, C, D, E, F» varianti «O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "backend-729",
      "question": "Backend bo'yicha: «15» varianti «Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-730",
      "question": "Backend bo'yicha: «10000» varianti «O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. 16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-731",
      "question": "Backend bo'yicha: «7» varianti «Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "backend-732",
      "question": "Backend bo'yicha: «26» varianti «O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Ha. 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-733",
      "question": "Backend bo'yicha: «Operativ xotira (RAM)» varianti «Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "backend-734",
      "question": "Backend bo'yicha: «BIOS dasturlari va dastlabki yuklash ko'rsatmalari» varianti «Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "backend-735",
      "question": "Backend bo'yicha: «Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi» varianti «Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "backend-736",
      "question": "Backend bo'yicha: «Qattiq disk (HDD)» varianti «Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "backend-737",
      "question": "Backend bo'yicha: «SSD (Solid State Drive)» varianti «Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "backend-738",
      "question": "Backend bo'yicha: «Gers (Gs, MGs, GGs)» varianti «Taktli chastotaning o'lchov birligi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "backend-739",
      "question": "Backend bo'yicha: «Skaner» varianti «Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-740",
      "question": "Backend bo'yicha: «Printer» varianti «Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-741",
      "question": "Backend bo'yicha: «Plotter (grafik yasagich)» varianti «Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "backend-742",
      "question": "Backend bo'yicha: «Ikkala mulohaza ham chin (1) bo'lganda» varianti «Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "backend-743",
      "question": "Backend bo'yicha: «Ikkala mulohaza ham yolg'on (0) bo'lganda» varianti «Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "backend-744",
      "question": "Backend bo'yicha: «Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi» varianti «Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "backend-745",
      "question": "Backend bo'yicha: «Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik» varianti «Algoritmning asosiy xossalari qaysilar?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "backend-746",
      "question": "Backend bo'yicha: «Romb» varianti «Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-747",
      "question": "Backend bo'yicha: «Parallelogramm» varianti «Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-748",
      "question": "Backend bo'yicha: «To'g'ri to'rtburchak» varianti «Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-749",
      "question": "Backend bo'yicha: «Oval (ellips)» varianti «Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "backend-750",
      "question": "Backend bo'yicha: «//» varianti «Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-751",
      "question": "Backend bo'yicha: «%» varianti «Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. Masalan: 7 % 2 = 1."
    },
    {
      "id": "backend-752",
      "question": "Backend bo'yicha: «**» varianti «Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-753",
      "question": "Backend bo'yicha: «int» varianti «Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Ha. int - integer (butun son)."
    },
    {
      "id": "backend-754",
      "question": "Backend bo'yicha: «float» varianti «Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. float - suzuvchi vergulli son."
    },
    {
      "id": "backend-755",
      "question": "Backend bo'yicha: «str (string)» varianti «Satrli (matnli) ma'lumot turi qanday ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Ha. str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "backend-756",
      "question": "Backend bo'yicha: «<a>» varianti «Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. <a href='...'>Havola matni</a>."
    },
    {
      "id": "backend-757",
      "question": "Backend bo'yicha: «<img>» varianti «HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. <img src='...' alt='...'>."
    },
    {
      "id": "backend-758",
      "question": "Backend bo'yicha: «<h1>» varianti «HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "backend-759",
      "question": "Backend bo'yicha: «<ol>» varianti «HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. ol - ordered list, ul - unordered list."
    },
    {
      "id": "backend-760",
      "question": "Backend bo'yicha: «Web sahifaning tashqi ko'rinishi va dizaynini bezash» varianti «CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "backend-761",
      "question": "Backend bo'yicha: «4 bayt (32 bit, masalan: 192.168.1.1)» varianti «IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "backend-762",
      "question": "Backend bo'yicha: «Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish» varianti «DNS (Domain Name System) serverining asosiy vazifasi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "backend-763",
      "question": "Backend bo'yicha: «MAC-manzil» varianti «Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "backend-764",
      "question": "Backend bo'yicha: «FTP» varianti «Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. FTP - File Transfer Protocol."
    },
    {
      "id": "backend-765",
      "question": "Backend bo'yicha: «SMTP» varianti «Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-766",
      "question": "Backend bo'yicha: «O'zaro bog'langan jadvallar ko'rinishida» varianti «Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "backend-767",
      "question": "Backend bo'yicha: «Yozuv (kortej / record)» varianti «Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "backend-768",
      "question": "Backend bo'yicha: «Maydon (field / atribut)» varianti «Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "backend-769",
      "question": "Backend bo'yicha: «Birlamchi kalit (Primary Key)» varianti «Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "backend-770",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-771",
      "question": "Backend bo'yicha: «Markaziy protsessor (CPU)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-772",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-773",
      "question": "Backend bo'yicha: «Operativ xotira (RAM)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "backend-774",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-775",
      "question": "Backend bo'yicha: «Doimiy xotira (ROM)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "backend-776",
      "question": "Backend bo'yicha: «Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish» varianti «Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-777",
      "question": "Backend bo'yicha: «Kesh-xotira (Cache)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "backend-778",
      "question": "Backend bo'yicha: «Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish» varianti «Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-779",
      "question": "Backend bo'yicha: «Videokarta (GPU)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "backend-780",
      "question": "Backend bo'yicha: «Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata» varianti «Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-781",
      "question": "Backend bo'yicha: «Ona plata (Motherboard)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "backend-782",
      "question": "Backend bo'yicha: «220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish» varianti «Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-783",
      "question": "Backend bo'yicha: «Quvvat bloki (Power Supply)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "backend-784",
      "question": "Backend bo'yicha: «Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli» varianti «Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-785",
      "question": "Backend bo'yicha: «HTTP / HTTPS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "backend-786",
      "question": "Backend bo'yicha: «Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli» varianti «Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-787",
      "question": "Backend bo'yicha: «FTP (File Transfer Protocol)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-788",
      "question": "Backend bo'yicha: «Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli» varianti «Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-789",
      "question": "Backend bo'yicha: «SMTP (Simple Mail Transfer Protocol)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-790",
      "question": "Backend bo'yicha: «Elektron pochta serveridan xatlarni qabul qilib olish protokollari» varianti «Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-791",
      "question": "Backend bo'yicha: «POP3 va IMAP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "backend-792",
      "question": "Backend bo'yicha: «Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish» varianti «Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-793",
      "question": "Backend bo'yicha: «DHCP (Dynamic Host Configuration Protocol)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "backend-794",
      "question": "Backend bo'yicha: «Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili» varianti «Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-795",
      "question": "Backend bo'yicha: «IP manzil» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "backend-796",
      "question": "Backend bo'yicha: «Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili» varianti «Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-797",
      "question": "Backend bo'yicha: «MAC manzil» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "backend-798",
      "question": "Backend bo'yicha: «Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma» varianti «Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-799",
      "question": "Backend bo'yicha: «Marshrutizator (Router)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "backend-800",
      "question": "Backend bo'yicha: «Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma» varianti «Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-801",
      "question": "Backend bo'yicha: «Kommutator (Switch)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "backend-802",
      "question": "Backend bo'yicha: «Microsoft Word matnli hujjati fayl kengaytmasi» varianti «Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-803",
      "question": "Backend bo'yicha: «.docx / .doc» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "backend-804",
      "question": "Backend bo'yicha: «Microsoft Excel elektron jadvali fayl kengaytmasi» varianti «Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-805",
      "question": "Backend bo'yicha: «.xlsx / .xls» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "backend-806",
      "question": "Backend bo'yicha: «Microsoft PowerPoint taqdimot fayli kengaytmasi» varianti «Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-807",
      "question": "Backend bo'yicha: «.pptx / .ppt» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "backend-808",
      "question": "Backend bo'yicha: «Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli» varianti «Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-809",
      "question": "Backend bo'yicha: «.html / .htm» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "backend-810",
      "question": "Backend bo'yicha: «Raqamli audio (tovush) fayllari formati» varianti «Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-811",
      "question": "Backend bo'yicha: «.mp3 / .wav» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "backend-812",
      "question": "Backend bo'yicha: «Raqamli video fayllari kengaytmasi» varianti «Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-813",
      "question": "Backend bo'yicha: «.mp4 / .avi / .mkv» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "backend-814",
      "question": "Backend bo'yicha: «Raqamli rastrli va vektorli grafik tasvirlar formati» varianti «Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-815",
      "question": "Backend bo'yicha: «.jpg / .png / .svg» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "backend-816",
      "question": "Backend bo'yicha: «Hajmni kichraytirish va arxivlash dasturlari fayli» varianti «Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-817",
      "question": "Backend bo'yicha: «.zip / .rar / .7z» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "backend-818",
      "question": "Backend bo'yicha: «Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli» varianti «Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-819",
      "question": "Backend bo'yicha: «.exe / .msi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "backend-820",
      "question": "Backend bo'yicha: «Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar» varianti «Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-821",
      "question": "Backend bo'yicha: «Tizimli dasturiy ta'minot» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-822",
      "question": "Backend bo'yicha: «Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)» varianti «Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-823",
      "question": "Backend bo'yicha: «Amaliy dasturiy ta'minot» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-824",
      "question": "Backend bo'yicha: «Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur» varianti «Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-825",
      "question": "Backend bo'yicha: «Drayver» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "backend-826",
      "question": "Backend bo'yicha: «Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim» varianti «Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-827",
      "question": "Backend bo'yicha: «BIOS (Basic Input/Output System)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "backend-828",
      "question": "Backend bo'yicha: «Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi» varianti «Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-829",
      "question": "Backend bo'yicha: «Antivirus dasturi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "backend-830",
      "question": "Backend bo'yicha: «Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha» varianti «Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-831",
      "question": "Backend bo'yicha: «O'zgaruvchi (Variable)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "backend-832",
      "question": "Backend bo'yicha: «Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma» varianti «Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-833",
      "question": "Backend bo'yicha: «Massiv (Ro'yxat / List)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "backend-834",
      "question": "Backend bo'yicha: «Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki» varianti «Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-835",
      "question": "Backend bo'yicha: «Funksiya (Function)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "backend-836",
      "question": "Backend bo'yicha: «Funksiyaning o'zini o'zi qayta chaqirishi hodisasi» varianti «Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-837",
      "question": "Backend bo'yicha: «Rekursiya» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "backend-838",
      "question": "Backend bo'yicha: «Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita» varianti «Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-839",
      "question": "Backend bo'yicha: «Kompilyator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "backend-840",
      "question": "Backend bo'yicha: «Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)» varianti «Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "backend-841",
      "question": "Backend bo'yicha: «Interpretator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "backend-842",
      "question": "Backend bo'yicha: «HTML tilida jadval yaratish uchun ochiladigan bosh teg» varianti «Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "backend-843",
      "question": "Backend bo'yicha: «<table> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "backend-844",
      "question": "Backend bo'yicha: «HTML jadvalida yangi satr (qator) hosil qiluvchi teg» varianti «Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "backend-845",
      "question": "Backend bo'yicha: «<tr> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "backend-846",
      "question": "Backend bo'yicha: «HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg» varianti «Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "backend-847",
      "question": "Backend bo'yicha: «<td> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "backend-848",
      "question": "Backend bo'yicha: «Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi» varianti «Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "backend-849",
      "question": "Backend bo'yicha: «<form> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "backend-850",
      "question": "Backend bo'yicha: «Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg» varianti «Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "backend-851",
      "question": "Backend bo'yicha: «<input> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "backend-852",
      "question": "Backend bo'yicha: «Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili» varianti «Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "backend-853",
      "question": "Backend bo'yicha: «JavaScript» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "backend-854",
      "question": "Backend bo'yicha: «print()» varianti «Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Ha. print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "backend-855",
      "question": "Backend bo'yicha: «input()» varianti «Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "backend-856",
      "question": "Backend bo'yicha: «if» varianti «Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Ha. if shart: ... elif ... else."
    },
    {
      "id": "backend-857",
      "question": "Backend bo'yicha: «def» varianti «Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "backend-858",
      "question": "Backend bo'yicha: «for» varianti «Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. for i in range(...): tsikli."
    },
    {
      "id": "backend-859",
      "question": "Backend bo'yicha: «while» varianti «Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. while shart: ... tsikli."
    },
    {
      "id": "backend-860",
      "question": "Backend bo'yicha: «[ ] (to'rtburchak qavslar)» varianti «Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "backend-861",
      "question": "Backend bo'yicha: «( ) (oddiy qavslar)» varianti «O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ha. Kortej: a = (1, 2, 3)."
    },
    {
      "id": "backend-862",
      "question": "Backend bo'yicha: «{kalit: qiymat}» varianti «Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "backend-863",
      "question": "Backend bo'yicha: «len()» varianti «Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "backend-864",
      "question": "Backend bo'yicha: «Piksellar (nuqtalar) to'riga» varianti «Rastrli grafika nimaga asoslangan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "backend-865",
      "question": "Backend bo'yicha: «Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi» varianti «Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "backend-866",
      "question": "Backend bo'yicha: «Red (Qizil), Green (Yashil), Blue (Ko'k)» varianti «RGB rang modelida asosiy ranglar qaysilar?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "backend-867",
      "question": "Backend bo'yicha: «CMYK (Cyan, Magenta, Yellow, blacK)» varianti «Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "backend-868",
      "question": "Backend bo'yicha: «Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)» varianti «Axborot xavfsizligining uchta asosiy tamoyili qaysilar?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ha. CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "backend-869",
      "question": "Backend bo'yicha: «Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish» varianti «Fayllarni siqish (arxivlash)dan asosiy maqsad nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "backend-870",
      "question": "Backend bo'yicha: «Windows, Linux, macOS, Android» varianti «Quyidagilardan qaysi biri operatsion sistema hisoblanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Ha. Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "backend-871",
      "question": "Backend bo'yicha: «Linus Torvalds (1991-yilda)» varianti «Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ha. Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "backend-872",
      "question": "Backend bo'yicha: «Bill Geyts va Pol Allen» varianti «Microsoft kompaniyasining asoschisi kim?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. 1975-yilda tashkil topgan."
    },
    {
      "id": "backend-873",
      "question": "Backend bo'yicha: «Stiv Jobs va Stiv Voznyak» varianti «Apple kompaniyasining asoschilari kimlar?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "backend-874",
      "question": "Backend bo'yicha: «Larri Peyj va Sergey Brin» varianti «Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Ha. 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "backend-875",
      "question": "«Server ichki xatosi» varianti «HTTP 404 status kodi nimani bildiradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — So‘ralgan resurs topilmadi. To'g'ri javob: So‘ralgan resurs topilmadi."
    },
    {
      "id": "backend-876",
      "question": "«GET» varianti «REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — POST. To'g'ri javob: POST."
    },
    {
      "id": "backend-877",
      "question": "«Web sahifa yaratish tili» varianti «SQL nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Yo'q. To'g'ri javob — Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili. To'g'ri javob: Ma’lumotlar bazasi bilan ishlash uchun so‘rovlar tili."
    },
    {
      "id": "backend-878",
      "question": "«Rasmlarni siqish» varianti «JWT tokenining asosiy vazifasi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 300,
      "explanation": "Yo'q. To'g'ri javob — Foydalanuvchi autentifikatsiyasini tasdiqlash. To'g'ri javob: Foydalanuvchi autentifikatsiyasini tasdiqlash."
    },
    {
      "id": "backend-879",
      "question": "Backend bo'yicha: «16» varianti «Bir baytda nechta bit bor?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — 8. 1 bayt = 8 bit."
    },
    {
      "id": "backend-880",
      "question": "Backend bo'yicha: «Qattiq disk» varianti «Kompyuterning asosiy hisoblash qurilmasi qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Protsessor. Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "backend-881",
      "question": "Backend bo'yicha: «Mobil ilova ishlab chiqish» varianti «HTML tili asosan nima uchun ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Yo'q. To'g'ri javob — Web sahifa tuzilmasini yaratish. HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "backend-882",
      "question": "Backend bo'yicha: «8» varianti «Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 300,
      "explanation": "Yo'q. To'g'ri javob — 10. 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "backend-883",
      "question": "Backend bo'yicha: «1000 bayt» varianti «1 Kilobayt (KB) necha baytga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — 1024 bayt. 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "backend-884",
      "question": "Backend bo'yicha: «1024 bayt» varianti «1 Megabayt (MB) necha Kilobaytga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — 1024 KB. 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "backend-885",
      "question": "Backend bo'yicha: «4096 MB» varianti «1 Gigabayt (GB) necha Megabaytga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — 1024 MB. 1 GB = 1024 MB."
    },
    {
      "id": "backend-886",
      "question": "Backend bo'yicha: «4 bit» varianti «ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — 1 bayt (8 bit). Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "backend-887",
      "question": "Backend bo'yicha: «8 bit» varianti «Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — 2 bayt (16 bit). Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "backend-888",
      "question": "Backend bo'yicha: «N = log₂i» varianti «Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — N = 2^i. N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "backend-889",
      "question": "Backend bo'yicha: «K, L, M, N, O, P» varianti «O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — A, B, C, D, E, F. O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "backend-890",
      "question": "Backend bo'yicha: «14» varianti «Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — 15. 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "backend-891",
      "question": "Backend bo'yicha: «1111» varianti «O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — 10000. 16 = 2⁴ = 10000₂."
    },
    {
      "id": "backend-892",
      "question": "Backend bo'yicha: «F» varianti «Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — 7. Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "backend-893",
      "question": "Backend bo'yicha: «10» varianti «O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Yo'q. To'g'ri javob — 26. 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "backend-894",
      "question": "Backend bo'yicha: «Fleshka» varianti «Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Operativ xotira (RAM). RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "backend-895",
      "question": "Backend bo'yicha: «O'yinlar» varianti «Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — BIOS dasturlari va dastlabki yuklash ko'rsatmalari. ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "backend-896",
      "question": "Backend bo'yicha: «Grafik tasvirlarni chizadi» varianti «Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi. Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "backend-897",
      "question": "Backend bo'yicha: «Registr» varianti «Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Qattiq disk (HDD). HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "backend-898",
      "question": "Backend bo'yicha: «FDD» varianti «Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — SSD (Solid State Drive). SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "backend-899",
      "question": "Backend bo'yicha: «BPS» varianti «Taktli chastotaning o'lchov birligi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Gers (Gs, MGs, GGs). Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "backend-900",
      "question": "Backend bo'yicha: «Monitor» varianti «Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Yo'q. To'g'ri javob — Skaner. Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "backend-901",
      "question": "Backend bo'yicha: «Klaviatura» varianti «Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Yo'q. To'g'ri javob — Printer. Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "backend-902",
      "question": "Backend bo'yicha: «Printer» varianti «Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Plotter (grafik yasagich). Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "backend-903",
      "question": "Backend bo'yicha: «Birinchisi chin, ikkinchisi yolg'on bo'lganda» varianti «Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Ikkala mulohaza ham chin (1) bo'lganda. A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "backend-904",
      "question": "Backend bo'yicha: «Biri chin bo'lganda» varianti «Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Ikkala mulohaza ham yolg'on (0) bo'lganda. A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "backend-905",
      "question": "Backend bo'yicha: «Sonni nolga tenglashtiradi» varianti «Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi. NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "backend-906",
      "question": "Backend bo'yicha: «Ranglilik va hajm» varianti «Algoritmning asosiy xossalari qaysilar?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik. Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "backend-907",
      "question": "Backend bo'yicha: «To'g'ri to'rtburchak» varianti «Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Romb. Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "backend-908",
      "question": "Backend bo'yicha: «Romb» varianti «Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Parallelogramm. Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "backend-909",
      "question": "Backend bo'yicha: «Romb» varianti «Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — To'g'ri to'rtburchak. Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "backend-910",
      "question": "Backend bo'yicha: «To'g'ri to'rtburchak» varianti «Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Oval (ellips). Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "backend-911",
      "question": "Backend bo'yicha: «**» varianti «Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — //. Masalan: 7 // 2 = 3."
    },
    {
      "id": "backend-912",
      "question": "Backend bo'yicha: «**» varianti «Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — %. Masalan: 7 % 2 = 1."
    },
    {
      "id": "backend-913",
      "question": "Backend bo'yicha: «//» varianti «Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — **. Masalan: 2 ** 3 = 8."
    },
    {
      "id": "backend-914",
      "question": "Backend bo'yicha: «float» varianti «Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Yo'q. To'g'ri javob — int. int - integer (butun son)."
    },
    {
      "id": "backend-915",
      "question": "Backend bo'yicha: «char» varianti «Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Yo'q. To'g'ri javob — float. float - suzuvchi vergulli son."
    },
    {
      "id": "backend-916",
      "question": "Backend bo'yicha: «int» varianti «Satrli (matnli) ma'lumot turi qanday ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Yo'q. To'g'ri javob — str (string). str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "backend-917",
      "question": "Backend bo'yicha: «<link>» varianti «Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — <a>. <a href='...'>Havola matni</a>."
    },
    {
      "id": "backend-918",
      "question": "Backend bo'yicha: «<picture>» varianti «HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — <img>. <img src='...' alt='...'>."
    },
    {
      "id": "backend-919",
      "question": "Backend bo'yicha: «<title>» varianti «HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Yo'q. To'g'ri javob — <h1>. h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "backend-920",
      "question": "Backend bo'yicha: «<dl>» varianti «HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — <ol>. ol - ordered list, ul - unordered list."
    },
    {
      "id": "backend-921",
      "question": "Backend bo'yicha: «Ma'lumotlar bazasini tuzish» varianti «CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Web sahifaning tashqi ko'rinishi va dizaynini bezash. CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "backend-922",
      "question": "Backend bo'yicha: «16 bayt» varianti «IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — 4 bayt (32 bit, masalan: 192.168.1.1). IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "backend-923",
      "question": "Backend bo'yicha: «Fayllarni yuklash» varianti «DNS (Domain Name System) serverining asosiy vazifasi nima?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish. DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "backend-924",
      "question": "Backend bo'yicha: «IP-manzil» varianti «Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — MAC-manzil. MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "backend-925",
      "question": "Backend bo'yicha: «POP3» varianti «Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — FTP. FTP - File Transfer Protocol."
    },
    {
      "id": "backend-926",
      "question": "Backend bo'yicha: «POP3» varianti «Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — SMTP. SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "backend-927",
      "question": "Backend bo'yicha: «Tarmoq shaklida» varianti «Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — O'zaro bog'langan jadvallar ko'rinishida. Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "backend-928",
      "question": "Backend bo'yicha: «Maydon (atribut)» varianti «Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Yozuv (kortej / record). Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "backend-929",
      "question": "Backend bo'yicha: «Katastrofa» varianti «Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yo'q. To'g'ri javob — Maydon (field / atribut). Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "backend-930",
      "question": "Backend bo'yicha: «Indeks» varianti «Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Birlamchi kalit (Primary Key). Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "backend-931",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish. Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "backend-932",
      "question": "Backend bo'yicha: «Operativ xotira» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Markaziy protsessor (CPU). Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "backend-933",
      "question": "Backend bo'yicha: «Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish» varianti «Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash. Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "backend-934",
      "question": "Backend bo'yicha: «Doimiy xotira (ROM)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Operativ xotira (RAM). Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "backend-935",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash. Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "backend-936",
      "question": "Backend bo'yicha: «Fleshka» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Doimiy xotira (ROM). Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "backend-937",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish. Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "backend-938",
      "question": "Backend bo'yicha: «Magnit lenta» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Kesh-xotira (Cache). Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "backend-939",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish. Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "backend-940",
      "question": "Backend bo'yicha: «Chipset» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Videokarta (GPU). Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "backend-941",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata. Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "backend-942",
      "question": "Backend bo'yicha: «Kuler» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Ona plata (Motherboard). Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "backend-943",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish. Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "backend-944",
      "question": "Backend bo'yicha: «Kondensator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Quvvat bloki (Power Supply). Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "backend-945",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli. HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "backend-946",
      "question": "Backend bo'yicha: «SMTP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — HTTP / HTTPS. Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "backend-947",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli. FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "backend-948",
      "question": "Backend bo'yicha: «DNS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — FTP (File Transfer Protocol). Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-949",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli. SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "backend-950",
      "question": "Backend bo'yicha: «IMAP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — SMTP (Simple Mail Transfer Protocol). Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "backend-951",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Elektron pochta serveridan xatlarni qabul qilib olish protokollari. POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "backend-952",
      "question": "Backend bo'yicha: «SMTP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — POP3 va IMAP. Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "backend-953",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish. DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "backend-954",
      "question": "Backend bo'yicha: «DNS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — DHCP (Dynamic Host Configuration Protocol). Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "backend-955",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili. IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "backend-956",
      "question": "Backend bo'yicha: «Domen nomi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — IP manzil. Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "backend-957",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili. MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "backend-958",
      "question": "Backend bo'yicha: «IP manzil» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — MAC manzil. Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "backend-959",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma. Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-960",
      "question": "Backend bo'yicha: «Xab (Hub)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Marshrutizator (Router). Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "backend-961",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma. Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "backend-962",
      "question": "Backend bo'yicha: «Xab» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Kommutator (Switch). Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "backend-963",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Microsoft Word matnli hujjati fayl kengaytmasi. .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "backend-964",
      "question": "Backend bo'yicha: «.xlsx» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .docx / .doc. Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "backend-965",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Microsoft Excel elektron jadvali fayl kengaytmasi. .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "backend-966",
      "question": "Backend bo'yicha: «.docx» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .xlsx / .xls. Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "backend-967",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Microsoft PowerPoint taqdimot fayli kengaytmasi. .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "backend-968",
      "question": "Backend bo'yicha: «.mp4» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .pptx / .ppt. Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "backend-969",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli. .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "backend-970",
      "question": "Backend bo'yicha: «.css» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .html / .htm. Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "backend-971",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Raqamli audio (tovush) fayllari formati. .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "backend-972",
      "question": "Backend bo'yicha: «.png» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .mp3 / .wav. Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "backend-973",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Raqamli video fayllari kengaytmasi. .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "backend-974",
      "question": "Backend bo'yicha: «.exe» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .mp4 / .avi / .mkv. Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "backend-975",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Raqamli rastrli va vektorli grafik tasvirlar formati. .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "backend-976",
      "question": "Backend bo'yicha: «.mp3» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .jpg / .png / .svg. Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "backend-977",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Hajmni kichraytirish va arxivlash dasturlari fayli. .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "backend-978",
      "question": "Backend bo'yicha: «.exe» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .zip / .rar / .7z. Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "backend-979",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli. .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "backend-980",
      "question": "Backend bo'yicha: «.sys» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — .exe / .msi. Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "backend-981",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar. Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "backend-982",
      "question": "Backend bo'yicha: «O'yinlar» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Tizimli dasturiy ta'minot. Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-983",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop). Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "backend-984",
      "question": "Backend bo'yicha: «BIOS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Amaliy dasturiy ta'minot. Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "backend-985",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur. Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "backend-986",
      "question": "Backend bo'yicha: «Arxivator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Drayver. Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "backend-987",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim. BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "backend-988",
      "question": "Backend bo'yicha: «Kesh» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — BIOS (Basic Input/Output System). Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "backend-989",
      "question": "Backend bo'yicha: «Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi. Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "backend-990",
      "question": "Backend bo'yicha: «Operatsion sistema» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Antivirus dasturi. Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "backend-991",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha. O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "backend-992",
      "question": "Backend bo'yicha: «Modul» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — O'zgaruvchi (Variable). Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "backend-993",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma. Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "backend-994",
      "question": "Backend bo'yicha: «Skalyar kattalik» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Massiv (Ro'yxat / List). Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "backend-995",
      "question": "Backend bo'yicha: «Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki. Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "backend-996",
      "question": "Backend bo'yicha: «Shart operatori» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Funksiya (Function). Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "backend-997",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Funksiyaning o'zini o'zi qayta chaqirishi hodisasi. Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "backend-998",
      "question": "Backend bo'yicha: «Iteratsiya» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Yo'q"
        },
        {
          "id": "B",
          "text": "Ha"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Rekursiya. Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "backend-999",
      "question": "Backend bo'yicha: «Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita. Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "backend-1000",
      "question": "Backend bo'yicha: «Translyator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savoliga to'g'ri javobmi?",
      "options": [
        {
          "id": "A",
          "text": "Ha"
        },
        {
          "id": "B",
          "text": "Yo'q"
        },
        {
          "id": "C",
          "text": "Qisman to'g'ri"
        },
        {
          "id": "D",
          "text": "Aniqlab bo'lmaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yo'q. To'g'ri javob — Kompilyator. Ushbu ta'rif 'Kompilyator'ga tegishli."
    }
  ]
}

export default backend
