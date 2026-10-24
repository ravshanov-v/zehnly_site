
const informatika = {
  id: 'informatika',
  title: 'Informatika',
  icon: '💻',
  category: 'Maktab fanlari',
  totalQuestions: 1000,
  questions: [
    {
      "id": "informatika-1",
      "question": "Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "16"
        },
        {
          "id": "B",
          "text": "32"
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
      "id": "informatika-2",
      "question": "Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk"
        },
        {
          "id": "B",
          "text": "Monitor"
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
      "id": "informatika-3",
      "question": "HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Mobil ilova ishlab chiqish"
        },
        {
          "id": "B",
          "text": "Ma’lumotlar bazasini boshqarish"
        },
        {
          "id": "C",
          "text": "Server tomonidagi logikani yozish"
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
      "id": "informatika-4",
      "question": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
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
      "id": "informatika-5",
      "question": "1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 bayt"
        },
        {
          "id": "B",
          "text": "1000 bayt"
        },
        {
          "id": "C",
          "text": "2048 bayt"
        },
        {
          "id": "D",
          "text": "512 bayt"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-6",
      "question": "1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 bayt"
        },
        {
          "id": "B",
          "text": "1000 KB"
        },
        {
          "id": "C",
          "text": "1024 KB"
        },
        {
          "id": "D",
          "text": "2048 KB"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-7",
      "question": "1 Gigabayt (GB) necha Megabaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "4096 MB"
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
          "text": "1024 MB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "informatika-8",
      "question": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
      "options": [
        {
          "id": "A",
          "text": "4 bit"
        },
        {
          "id": "B",
          "text": "1 bayt (8 bit)"
        },
        {
          "id": "C",
          "text": "16 bit"
        },
        {
          "id": "D",
          "text": "2 bayt"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-9",
      "question": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "2 bayt (16 bit)"
        },
        {
          "id": "B",
          "text": "8 bit"
        },
        {
          "id": "C",
          "text": "4 bayt"
        },
        {
          "id": "D",
          "text": "1 bayt"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-10",
      "question": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
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
          "text": "I = 2^N"
        },
        {
          "id": "D",
          "text": "I = m · v"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-11",
      "question": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "K, L, M, N, O, P"
        },
        {
          "id": "B",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        },
        {
          "id": "C",
          "text": "X, Y, Z, W, P, Q"
        },
        {
          "id": "D",
          "text": "A, B, C, D, E, F"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-12",
      "question": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "15"
        },
        {
          "id": "B",
          "text": "14"
        },
        {
          "id": "C",
          "text": "16"
        },
        {
          "id": "D",
          "text": "7"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-13",
      "question": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "1111"
        },
        {
          "id": "B",
          "text": "100000"
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
      "id": "informatika-14",
      "question": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
      "options": [
        {
          "id": "A",
          "text": "F"
        },
        {
          "id": "B",
          "text": "7"
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
      "correct": "B",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-15",
      "question": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "26"
        },
        {
          "id": "D",
          "text": "24"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-16",
      "question": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Fleshka"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "Qattiq disk (HDD/SSD)"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-17",
      "question": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "O'yinlar"
        },
        {
          "id": "B",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        },
        {
          "id": "C",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "D",
          "text": "Faqat foydalanuvchi fayllari"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-18",
      "question": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Grafik tasvirlarni chizadi"
        },
        {
          "id": "B",
          "text": "Elektr toki beradi"
        },
        {
          "id": "C",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
        },
        {
          "id": "D",
          "text": "Uzoq muddat fayllarni saqlaydi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-19",
      "question": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Registr"
        },
        {
          "id": "B",
          "text": "Qattiq disk (HDD)"
        },
        {
          "id": "C",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "D",
          "text": "Kesh xotira"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-20",
      "question": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "SSD (Solid State Drive)"
        },
        {
          "id": "B",
          "text": "FDD"
        },
        {
          "id": "C",
          "text": "CD-ROM"
        },
        {
          "id": "D",
          "text": "DVD-RW"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-21",
      "question": "Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Gers (Gs, MGs, GGs)"
        },
        {
          "id": "B",
          "text": "BPS"
        },
        {
          "id": "C",
          "text": "Bayt"
        },
        {
          "id": "D",
          "text": "Vatt"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-22",
      "question": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
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
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Plotter"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-23",
      "question": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Printer"
        },
        {
          "id": "B",
          "text": "Klaviatura"
        },
        {
          "id": "C",
          "text": "Skaner"
        },
        {
          "id": "D",
          "text": "Mikrofon"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-24",
      "question": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Printer"
        },
        {
          "id": "B",
          "text": "Plotter (grafik yasagich)"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-25",
      "question": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "C",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
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
      "id": "informatika-26",
      "question": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Biri chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        },
        {
          "id": "C",
          "text": "Ikkalasi chin bo'lganda"
        },
        {
          "id": "D",
          "text": "Hech qachon"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-27",
      "question": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Sonni nolga tenglashtiradi"
        },
        {
          "id": "B",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "C",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        },
        {
          "id": "D",
          "text": "Ikkita sonni qo'shadi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-28",
      "question": "Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
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
          "text": "Faqat qisqalik va tezlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-29",
      "question": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
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
          "text": "Oval"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-30",
      "question": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm"
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
          "text": "Doira"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-31",
      "question": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
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
      "id": "informatika-32",
      "question": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "B",
          "text": "Kvadrat"
        },
        {
          "id": "C",
          "text": "Romb"
        },
        {
          "id": "D",
          "text": "Oval (ellips)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-33",
      "question": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
      "options": [
        {
          "id": "A",
          "text": "//"
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
          "text": "/"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-34",
      "question": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "**"
        },
        {
          "id": "B",
          "text": "%"
        },
        {
          "id": "C",
          "text": "/"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-35",
      "question": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
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
      "id": "informatika-36",
      "question": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "float"
        },
        {
          "id": "B",
          "text": "int"
        },
        {
          "id": "C",
          "text": "str"
        },
        {
          "id": "D",
          "text": "bool"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "informatika-37",
      "question": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "char"
        },
        {
          "id": "B",
          "text": "list"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-38",
      "question": "Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "bool"
        },
        {
          "id": "C",
          "text": "dict"
        },
        {
          "id": "D",
          "text": "str (string)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-39",
      "question": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<link>"
        },
        {
          "id": "B",
          "text": "<href>"
        },
        {
          "id": "C",
          "text": "<url>"
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
      "id": "informatika-40",
      "question": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<img>"
        },
        {
          "id": "B",
          "text": "<picture>"
        },
        {
          "id": "C",
          "text": "<image>"
        },
        {
          "id": "D",
          "text": "<src>"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "informatika-41",
      "question": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<title>"
        },
        {
          "id": "B",
          "text": "<h1>"
        },
        {
          "id": "C",
          "text": "<h6>"
        },
        {
          "id": "D",
          "text": "<header>"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-42",
      "question": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<dl>"
        },
        {
          "id": "B",
          "text": "<ol>"
        },
        {
          "id": "C",
          "text": "<ul>"
        },
        {
          "id": "D",
          "text": "<li>"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-43",
      "question": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasini tuzish"
        },
        {
          "id": "B",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        },
        {
          "id": "C",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "D",
          "text": "Server logikasini yozish"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-44",
      "question": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "16 bayt"
        },
        {
          "id": "B",
          "text": "6 bayt"
        },
        {
          "id": "C",
          "text": "8 bayt"
        },
        {
          "id": "D",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-45",
      "question": "DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni yuklash"
        },
        {
          "id": "B",
          "text": "Parollarni saqlash"
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
      "id": "informatika-46",
      "question": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "IP-manzil"
        },
        {
          "id": "B",
          "text": "Port"
        },
        {
          "id": "C",
          "text": "MAC-manzil"
        },
        {
          "id": "D",
          "text": "URL"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-47",
      "question": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "FTP"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-48",
      "question": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "IMAP"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-49",
      "question": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq shaklida"
        },
        {
          "id": "B",
          "text": "Faqat daraxtsimon shaklda"
        },
        {
          "id": "C",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        },
        {
          "id": "D",
          "text": "Faqat bitta matnli faylda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-50",
      "question": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Maydon (atribut)"
        },
        {
          "id": "B",
          "text": "Kalit"
        },
        {
          "id": "C",
          "text": "Indeks"
        },
        {
          "id": "D",
          "text": "Yozuv (kortej / record)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-51",
      "question": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Katastrofa"
        },
        {
          "id": "B",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "C",
          "text": "Jadval"
        },
        {
          "id": "D",
          "text": "Yozuv"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-52",
      "question": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Indeks"
        },
        {
          "id": "B",
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "C",
          "text": "Tashqi kalit"
        },
        {
          "id": "D",
          "text": "Filtr"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-53",
      "question": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-54",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira"
        },
        {
          "id": "B",
          "text": "Qattiq disk"
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU)"
        },
        {
          "id": "D",
          "text": "Videokarta"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-55",
      "question": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
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
      "id": "informatika-56",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "SSD"
        },
        {
          "id": "D",
          "text": "Kesh-xotira"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-57",
      "question": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-58",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Fleshka"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "RAM"
        },
        {
          "id": "D",
          "text": "Strimmer"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-59",
      "question": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-60",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Magnit lenta"
        },
        {
          "id": "B",
          "text": "Kesh-xotira (Cache)"
        },
        {
          "id": "C",
          "text": "Vinchester"
        },
        {
          "id": "D",
          "text": "Optik disk"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-61",
      "question": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-62",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Chipset"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasi"
        },
        {
          "id": "C",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "D",
          "text": "Ovoz kartasi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-63",
      "question": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-64",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Kuler"
        },
        {
          "id": "B",
          "text": "Shina"
        },
        {
          "id": "C",
          "text": "Ona plata (Motherboard)"
        },
        {
          "id": "D",
          "text": "Quvvat bloki"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-65",
      "question": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-66",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Kondensator"
        },
        {
          "id": "B",
          "text": "Invertor"
        },
        {
          "id": "C",
          "text": "Stabilizator"
        },
        {
          "id": "D",
          "text": "Quvvat bloki (Power Supply)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-67",
      "question": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
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
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-68",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "DHCP"
        },
        {
          "id": "C",
          "text": "HTTP / HTTPS"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-69",
      "question": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
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
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-70",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
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
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "TELNET"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-71",
      "question": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-72",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "IMAP"
        },
        {
          "id": "B",
          "text": "SNMP"
        },
        {
          "id": "C",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        },
        {
          "id": "D",
          "text": "POP3"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-73",
      "question": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
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
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-74",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
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
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "POP3 va IMAP"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-75",
      "question": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-76",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "DNS"
        },
        {
          "id": "B",
          "text": "ARP"
        },
        {
          "id": "C",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "D",
          "text": "ICMP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-77",
      "question": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-78",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil"
        },
        {
          "id": "B",
          "text": "Domen nomi"
        },
        {
          "id": "C",
          "text": "Port"
        },
        {
          "id": "D",
          "text": "MAC manzil"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-79",
      "question": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
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
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-80",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil"
        },
        {
          "id": "B",
          "text": "IP manzil"
        },
        {
          "id": "C",
          "text": "Shlyuz"
        },
        {
          "id": "D",
          "text": "Domen"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-81",
      "question": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
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
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-82",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Marshrutizator (Router)"
        },
        {
          "id": "B",
          "text": "Xab (Hub)"
        },
        {
          "id": "C",
          "text": "Repiter"
        },
        {
          "id": "D",
          "text": "Kommutator (Switch)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-83",
      "question": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-84",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
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
          "text": "Kommutator (Switch)"
        },
        {
          "id": "D",
          "text": "Server"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-85",
      "question": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-86",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx"
        },
        {
          "id": "B",
          "text": ".pptx"
        },
        {
          "id": "C",
          "text": ".accdb"
        },
        {
          "id": "D",
          "text": ".docx / .doc"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-87",
      "question": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
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
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-88",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".docx"
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
          "text": ".txt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-89",
      "question": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-90",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4"
        },
        {
          "id": "B",
          "text": ".xlsx"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".pptx / .ppt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-91",
      "question": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
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
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-92",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".css"
        },
        {
          "id": "B",
          "text": ".js"
        },
        {
          "id": "C",
          "text": ".py"
        },
        {
          "id": "D",
          "text": ".html / .htm"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-93",
      "question": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli audio (tovush) fayllari formati"
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
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-94",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
      "options": [
        {
          "id": "A",
          "text": ".png"
        },
        {
          "id": "B",
          "text": ".mp4"
        },
        {
          "id": "C",
          "text": ".jpg"
        },
        {
          "id": "D",
          "text": ".mp3 / .wav"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-95",
      "question": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli video fayllari kengaytmasi"
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
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-96",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".exe"
        },
        {
          "id": "B",
          "text": ".gif"
        },
        {
          "id": "C",
          "text": ".mp3"
        },
        {
          "id": "D",
          "text": ".mp4 / .avi / .mkv"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-97",
      "question": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-98",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".jpg / .png / .svg"
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
          "text": ".docx"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-99",
      "question": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-100",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".exe"
        },
        {
          "id": "B",
          "text": ".zip / .rar / .7z"
        },
        {
          "id": "C",
          "text": ".iso"
        },
        {
          "id": "D",
          "text": ".bat"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-101",
      "question": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
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
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-102",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".exe / .msi"
        },
        {
          "id": "B",
          "text": ".sys"
        },
        {
          "id": "C",
          "text": ".txt"
        },
        {
          "id": "D",
          "text": ".dll"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-103",
      "question": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-104",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
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
      "id": "informatika-105",
      "question": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "id": "informatika-106",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "BIOS"
        },
        {
          "id": "C",
          "text": "Drayverlar"
        },
        {
          "id": "D",
          "text": "Tizimli dasturlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-107",
      "question": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
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
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-108",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Arxivator"
        },
        {
          "id": "B",
          "text": "Kompilyator"
        },
        {
          "id": "C",
          "text": "Brauzer"
        },
        {
          "id": "D",
          "text": "Drayver"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-109",
      "question": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-110",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "BIOS (Basic Input/Output System)"
        },
        {
          "id": "B",
          "text": "Kesh"
        },
        {
          "id": "C",
          "text": "Dasturlash muhiti"
        },
        {
          "id": "D",
          "text": "Windows"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-111",
      "question": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
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
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-112",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Antivirus dasturi"
        },
        {
          "id": "B",
          "text": "Operatsion sistema"
        },
        {
          "id": "C",
          "text": "Optimizator"
        },
        {
          "id": "D",
          "text": "Fayrvol"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-113",
      "question": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-114",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
      "options": [
        {
          "id": "A",
          "text": "Modul"
        },
        {
          "id": "B",
          "text": "Funksiya"
        },
        {
          "id": "C",
          "text": "O'zgarmas (Konstanta)"
        },
        {
          "id": "D",
          "text": "O'zgaruvchi (Variable)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-115",
      "question": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-116",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "Massiv (Ro'yxat / List)"
        },
        {
          "id": "B",
          "text": "Skalyar kattalik"
        },
        {
          "id": "C",
          "text": "O'zgaruvchi"
        },
        {
          "id": "D",
          "text": "Kompilyator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-117",
      "question": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-118",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Funksiya (Function)"
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
          "text": "Tsikl"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-119",
      "question": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
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
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-120",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Rekursiya"
        },
        {
          "id": "B",
          "text": "Iteratsiya"
        },
        {
          "id": "C",
          "text": "Dekrement"
        },
        {
          "id": "D",
          "text": "Inkrement"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-121",
      "question": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-122",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Translyator"
        },
        {
          "id": "B",
          "text": "Assembler"
        },
        {
          "id": "C",
          "text": "Kompilyator"
        },
        {
          "id": "D",
          "text": "Interpretator"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-123",
      "question": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-124",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
      "options": [
        {
          "id": "A",
          "text": "Interpretator"
        },
        {
          "id": "B",
          "text": "Dizassembler"
        },
        {
          "id": "C",
          "text": "Kompilyator"
        },
        {
          "id": "D",
          "text": "Linker"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-125",
      "question": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-126",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<td> tegi"
        },
        {
          "id": "B",
          "text": "<th> tegi"
        },
        {
          "id": "C",
          "text": "<table> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-127",
      "question": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "id": "informatika-128",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<col> tegi"
        },
        {
          "id": "B",
          "text": "<td> tegi"
        },
        {
          "id": "C",
          "text": "<tr> tegi"
        },
        {
          "id": "D",
          "text": "<table> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-129",
      "question": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-130",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<tr> tegi"
        },
        {
          "id": "B",
          "text": "<th> tegi"
        },
        {
          "id": "C",
          "text": "<caption> tegi"
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
      "id": "informatika-131",
      "question": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
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
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-132",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<button> tegi"
        },
        {
          "id": "B",
          "text": "<textarea> tegi"
        },
        {
          "id": "C",
          "text": "<input> tegi"
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
      "id": "informatika-133",
      "question": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-134",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<select> tegi"
        },
        {
          "id": "B",
          "text": "<form> tegi"
        },
        {
          "id": "C",
          "text": "<label> tegi"
        },
        {
          "id": "D",
          "text": "<input> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-135",
      "question": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-136",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "CSS"
        },
        {
          "id": "B",
          "text": "JavaScript"
        },
        {
          "id": "C",
          "text": "HTML"
        },
        {
          "id": "D",
          "text": "SQL"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-137",
      "question": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "echo()"
        },
        {
          "id": "B",
          "text": "input()"
        },
        {
          "id": "C",
          "text": "write()"
        },
        {
          "id": "D",
          "text": "print()"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-138",
      "question": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "scan()"
        },
        {
          "id": "B",
          "text": "input()"
        },
        {
          "id": "C",
          "text": "read()"
        },
        {
          "id": "D",
          "text": "print()"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-139",
      "question": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
      "options": [
        {
          "id": "A",
          "text": "while"
        },
        {
          "id": "B",
          "text": "if"
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
      "correct": "B",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "informatika-140",
      "question": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "function"
        },
        {
          "id": "B",
          "text": "fun"
        },
        {
          "id": "C",
          "text": "proc"
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
      "id": "informatika-141",
      "question": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "for"
        },
        {
          "id": "B",
          "text": "switch"
        },
        {
          "id": "C",
          "text": "def"
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
      "id": "informatika-142",
      "question": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
      "options": [
        {
          "id": "A",
          "text": "range"
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
          "text": "if"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "informatika-143",
      "question": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
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
          "text": "< > (burchakli qavslar)"
        },
        {
          "id": "D",
          "text": "[ ] (to'rtburchak qavslar)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-144",
      "question": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
      "options": [
        {
          "id": "A",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "B",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "C",
          "text": "| |"
        },
        {
          "id": "D",
          "text": "( ) (oddiy qavslar)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-145",
      "question": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "(kalit; qiymat)"
        },
        {
          "id": "B",
          "text": "<kalit=qiymat>"
        },
        {
          "id": "C",
          "text": "[kalit, qiymat]"
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
      "id": "informatika-146",
      "question": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
      "options": [
        {
          "id": "A",
          "text": "len()"
        },
        {
          "id": "B",
          "text": "length()"
        },
        {
          "id": "C",
          "text": "count()"
        },
        {
          "id": "D",
          "text": "size()"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-147",
      "question": "Rastrli grafika nimaga asoslangan?",
      "options": [
        {
          "id": "A",
          "text": "Geometrik formulalar va chiziqlarga"
        },
        {
          "id": "B",
          "text": "Faqat matnlarga"
        },
        {
          "id": "C",
          "text": "Piksellar (nuqtalar) to'riga"
        },
        {
          "id": "D",
          "text": "Faqat tovush to'lqinlariga"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-148",
      "question": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "B",
          "text": "Hajmi doim juda katta bo'ladi"
        },
        {
          "id": "C",
          "text": "Faqat oq-qora bo'ladi"
        },
        {
          "id": "D",
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-149",
      "question": "RGB rang modelida asosiy ranglar qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        },
        {
          "id": "B",
          "text": "Rose, Grey, Brown"
        },
        {
          "id": "C",
          "text": "Cyan, Magenta, Yellow"
        },
        {
          "id": "D",
          "text": "Red, Green, Black"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-150",
      "question": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
      "options": [
        {
          "id": "A",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        },
        {
          "id": "B",
          "text": "RGB"
        },
        {
          "id": "C",
          "text": "HSB"
        },
        {
          "id": "D",
          "text": "Grayscale"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-151",
      "question": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
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
          "text": "Faqat parol va login"
        },
        {
          "id": "D",
          "text": "Faqat arxivlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-152",
      "question": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Rangini o'zgartirish"
        },
        {
          "id": "B",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "C",
          "text": "Fayl formatini o'chirish"
        },
        {
          "id": "D",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-153",
      "question": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Word, Excel, PowerPoint"
        },
        {
          "id": "B",
          "text": "Chrome, Firefox, Safari"
        },
        {
          "id": "C",
          "text": "Python, C++, Java"
        },
        {
          "id": "D",
          "text": "Windows, Linux, macOS, Android"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-154",
      "question": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
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
          "text": "Stiv Jobs"
        },
        {
          "id": "D",
          "text": "Dennis Ritchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-155",
      "question": "Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Stiv Jobs va Voznyak"
        },
        {
          "id": "B",
          "text": "Bill Geyts va Pol Allen"
        },
        {
          "id": "C",
          "text": "Ilon Mask"
        },
        {
          "id": "D",
          "text": "Mark Sukerberg"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-156",
      "question": "Apple kompaniyasining asoschilari kimlar?",
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
      "id": "informatika-157",
      "question": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
      "options": [
        {
          "id": "A",
          "text": "Larri Peyj va Sergey Brin"
        },
        {
          "id": "B",
          "text": "Pavel Durov"
        },
        {
          "id": "C",
          "text": "Bill Geyts"
        },
        {
          "id": "D",
          "text": "Jek Ma"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-158",
      "question": "DTM namunaviy informatika tahlili: Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "16"
        },
        {
          "id": "B",
          "text": "4"
        },
        {
          "id": "C",
          "text": "32"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 1 bayt = 8 bit."
    },
    {
      "id": "informatika-159",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk"
        },
        {
          "id": "B",
          "text": "Operativ xotira"
        },
        {
          "id": "C",
          "text": "Monitor"
        },
        {
          "id": "D",
          "text": "Protsessor"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-160",
      "question": "DTM namunaviy informatika tahlili: HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Web sahifa tuzilmasini yaratish"
        },
        {
          "id": "B",
          "text": "Server tomonidagi logikani yozish"
        },
        {
          "id": "C",
          "text": "Ma’lumotlar bazasini boshqarish"
        },
        {
          "id": "D",
          "text": "Mobil ilova ishlab chiqish"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-161",
      "question": "DTM namunaviy informatika tahlili: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "12"
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
      "xp": 300,
      "explanation": "Nazariy asos: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-162",
      "question": "DTM namunaviy informatika tahlili: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 bayt"
        },
        {
          "id": "B",
          "text": "512 bayt"
        },
        {
          "id": "C",
          "text": "1000 bayt"
        },
        {
          "id": "D",
          "text": "2048 bayt"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-163",
      "question": "DTM namunaviy informatika tahlili: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "2048 KB"
        },
        {
          "id": "B",
          "text": "1024 bayt"
        },
        {
          "id": "C",
          "text": "1000 KB"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-164",
      "question": "DTM namunaviy informatika tahlili: 1 Gigabayt (GB) necha Megabaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "4096 MB"
        },
        {
          "id": "B",
          "text": "1024 KB"
        },
        {
          "id": "C",
          "text": "1024 MB"
        },
        {
          "id": "D",
          "text": "1000 MB"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 GB = 1024 MB."
    },
    {
      "id": "informatika-165",
      "question": "DTM namunaviy informatika tahlili: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
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
          "text": "16 bit"
        },
        {
          "id": "D",
          "text": "4 bit"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-166",
      "question": "DTM namunaviy informatika tahlili: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "4 bayt"
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
          "text": "8 bit"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-167",
      "question": "DTM namunaviy informatika tahlili: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "I = m · v"
        },
        {
          "id": "B",
          "text": "N = 2^i"
        },
        {
          "id": "C",
          "text": "N = log₂i"
        },
        {
          "id": "D",
          "text": "I = 2^N"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-168",
      "question": "DTM namunaviy informatika tahlili: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "B",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        },
        {
          "id": "C",
          "text": "K, L, M, N, O, P"
        },
        {
          "id": "D",
          "text": "X, Y, Z, W, P, Q"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-169",
      "question": "DTM namunaviy informatika tahlili: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "7"
        },
        {
          "id": "B",
          "text": "14"
        },
        {
          "id": "C",
          "text": "16"
        },
        {
          "id": "D",
          "text": "15"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-170",
      "question": "DTM namunaviy informatika tahlili: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "10000"
        },
        {
          "id": "B",
          "text": "100000"
        },
        {
          "id": "C",
          "text": "1000"
        },
        {
          "id": "D",
          "text": "1111"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-171",
      "question": "DTM namunaviy informatika tahlili: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
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
      "explanation": "Nazariy asos: Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-172",
      "question": "DTM namunaviy informatika tahlili: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "16"
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
          "text": "10"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-173",
      "question": "DTM namunaviy informatika tahlili: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk (HDD/SSD)"
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
          "text": "Fleshka"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-174",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "B",
          "text": "Faqat foydalanuvchi fayllari"
        },
        {
          "id": "C",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        },
        {
          "id": "D",
          "text": "O'yinlar"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-175",
      "question": "DTM namunaviy informatika tahlili: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Uzoq muddat fayllarni saqlaydi"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-176",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Registr"
        },
        {
          "id": "B",
          "text": "Qattiq disk (HDD)"
        },
        {
          "id": "C",
          "text": "Kesh xotira"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-177",
      "question": "DTM namunaviy informatika tahlili: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "FDD"
        },
        {
          "id": "B",
          "text": "DVD-RW"
        },
        {
          "id": "C",
          "text": "SSD (Solid State Drive)"
        },
        {
          "id": "D",
          "text": "CD-ROM"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-178",
      "question": "DTM namunaviy informatika tahlili: Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Bayt"
        },
        {
          "id": "B",
          "text": "Gers (Gs, MGs, GGs)"
        },
        {
          "id": "C",
          "text": "Vatt"
        },
        {
          "id": "D",
          "text": "BPS"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-179",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Monitor"
        },
        {
          "id": "B",
          "text": "Printer"
        },
        {
          "id": "C",
          "text": "Skaner"
        },
        {
          "id": "D",
          "text": "Plotter"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-180",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Mikrofon"
        },
        {
          "id": "B",
          "text": "Skaner"
        },
        {
          "id": "C",
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Klaviatura"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-181",
      "question": "DTM namunaviy informatika tahlili: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Skaner"
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
          "text": "Plotter (grafik yasagich)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-182",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "C",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        },
        {
          "id": "D",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-183",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Biri chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Hech qachon"
        },
        {
          "id": "C",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        },
        {
          "id": "D",
          "text": "Ikkalasi chin bo'lganda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-184",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        },
        {
          "id": "B",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "C",
          "text": "Sonni nolga tenglashtiradi"
        },
        {
          "id": "D",
          "text": "Ikkita sonni qo'shadi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-185",
      "question": "DTM namunaviy informatika tahlili: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "B",
          "text": "Ranglilik va hajm"
        },
        {
          "id": "C",
          "text": "Faqat qisqalik va tezlik"
        },
        {
          "id": "D",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-186",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "B",
          "text": "Parallelogramm"
        },
        {
          "id": "C",
          "text": "Oval"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-187",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
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
          "text": "Doira"
        },
        {
          "id": "D",
          "text": "Parallelogramm"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-188",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
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
          "text": "Trapetsiya"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-189",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "B",
          "text": "Kvadrat"
        },
        {
          "id": "C",
          "text": "Romb"
        },
        {
          "id": "D",
          "text": "Oval (ellips)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-190",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
      "options": [
        {
          "id": "A",
          "text": "%"
        },
        {
          "id": "B",
          "text": "**"
        },
        {
          "id": "C",
          "text": "/"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-191",
      "question": "DTM namunaviy informatika tahlili: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "//"
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
          "text": "/"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-192",
      "question": "DTM namunaviy informatika tahlili: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "pow"
        },
        {
          "id": "B",
          "text": "^"
        },
        {
          "id": "C",
          "text": "//"
        },
        {
          "id": "D",
          "text": "**"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-193",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "bool"
        },
        {
          "id": "B",
          "text": "str"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: int - integer (butun son)."
    },
    {
      "id": "informatika-194",
      "question": "DTM namunaviy informatika tahlili: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "char"
        },
        {
          "id": "B",
          "text": "list"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-195",
      "question": "DTM namunaviy informatika tahlili: Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "str (string)"
        },
        {
          "id": "B",
          "text": "int"
        },
        {
          "id": "C",
          "text": "dict"
        },
        {
          "id": "D",
          "text": "bool"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-196",
      "question": "DTM namunaviy informatika tahlili: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<href>"
        },
        {
          "id": "B",
          "text": "<link>"
        },
        {
          "id": "C",
          "text": "<url>"
        },
        {
          "id": "D",
          "text": "<a>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-197",
      "question": "DTM namunaviy informatika tahlili: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<src>"
        },
        {
          "id": "B",
          "text": "<image>"
        },
        {
          "id": "C",
          "text": "<picture>"
        },
        {
          "id": "D",
          "text": "<img>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: <img src='...' alt='...'>."
    },
    {
      "id": "informatika-198",
      "question": "DTM namunaviy informatika tahlili: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<h1>"
        },
        {
          "id": "B",
          "text": "<title>"
        },
        {
          "id": "C",
          "text": "<header>"
        },
        {
          "id": "D",
          "text": "<h6>"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-199",
      "question": "DTM namunaviy informatika tahlili: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<ul>"
        },
        {
          "id": "B",
          "text": "<li>"
        },
        {
          "id": "C",
          "text": "<dl>"
        },
        {
          "id": "D",
          "text": "<ol>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-200",
      "question": "DTM namunaviy informatika tahlili: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        },
        {
          "id": "B",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "C",
          "text": "Server logikasini yozish"
        },
        {
          "id": "D",
          "text": "Ma'lumotlar bazasini tuzish"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-201",
      "question": "DTM namunaviy informatika tahlili: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "16 bayt"
        },
        {
          "id": "B",
          "text": "6 bayt"
        },
        {
          "id": "C",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        },
        {
          "id": "D",
          "text": "8 bayt"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-202",
      "question": "DTM namunaviy informatika tahlili: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        },
        {
          "id": "B",
          "text": "Parollarni saqlash"
        },
        {
          "id": "C",
          "text": "Fayllarni yuklash"
        },
        {
          "id": "D",
          "text": "Elektron xat jo'natish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-203",
      "question": "DTM namunaviy informatika tahlili: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "IP-manzil"
        },
        {
          "id": "B",
          "text": "URL"
        },
        {
          "id": "C",
          "text": "Port"
        },
        {
          "id": "D",
          "text": "MAC-manzil"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-204",
      "question": "DTM namunaviy informatika tahlili: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "FTP"
        },
        {
          "id": "B",
          "text": "POP3"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-205",
      "question": "DTM namunaviy informatika tahlili: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "IMAP"
        },
        {
          "id": "C",
          "text": "POP3"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-206",
      "question": "DTM namunaviy informatika tahlili: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        },
        {
          "id": "B",
          "text": "Faqat bitta matnli faylda"
        },
        {
          "id": "C",
          "text": "Tarmoq shaklida"
        },
        {
          "id": "D",
          "text": "Faqat daraxtsimon shaklda"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-207",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Yozuv (kortej / record)"
        },
        {
          "id": "B",
          "text": "Maydon (atribut)"
        },
        {
          "id": "C",
          "text": "Indeks"
        },
        {
          "id": "D",
          "text": "Kalit"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-208",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Jadval"
        },
        {
          "id": "B",
          "text": "Yozuv"
        },
        {
          "id": "C",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "D",
          "text": "Katastrofa"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-209",
      "question": "DTM namunaviy informatika tahlili: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Filtr"
        },
        {
          "id": "B",
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "C",
          "text": "Indeks"
        },
        {
          "id": "D",
          "text": "Tashqi kalit"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-210",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-211",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira"
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU)"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-212",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-213",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "SSD"
        },
        {
          "id": "C",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "D",
          "text": "Kesh-xotira"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-214",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
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
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-215",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "RAM"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "Fleshka"
        },
        {
          "id": "D",
          "text": "Strimmer"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-216",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-217",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Magnit lenta"
        },
        {
          "id": "B",
          "text": "Kesh-xotira (Cache)"
        },
        {
          "id": "C",
          "text": "Optik disk"
        },
        {
          "id": "D",
          "text": "Vinchester"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-218",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-219",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Ovoz kartasi"
        },
        {
          "id": "B",
          "text": "Chipset"
        },
        {
          "id": "C",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "D",
          "text": "Tarmoq kartasi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-220",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-221",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki"
        },
        {
          "id": "B",
          "text": "Ona plata (Motherboard)"
        },
        {
          "id": "C",
          "text": "Shina"
        },
        {
          "id": "D",
          "text": "Kuler"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-222",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-223",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Invertor"
        },
        {
          "id": "B",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "C",
          "text": "Kondensator"
        },
        {
          "id": "D",
          "text": "Stabilizator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-224",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-225",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
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
          "text": "DHCP"
        },
        {
          "id": "D",
          "text": "HTTP / HTTPS"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-226",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-227",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "TELNET"
        },
        {
          "id": "B",
          "text": "FTP (File Transfer Protocol)"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "DNS"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-228",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-229",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "IMAP"
        },
        {
          "id": "B",
          "text": "POP3"
        },
        {
          "id": "C",
          "text": "SNMP"
        },
        {
          "id": "D",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-230",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-231",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "POP3 va IMAP"
        },
        {
          "id": "B",
          "text": "FTP"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-232",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-233",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "ICMP"
        },
        {
          "id": "B",
          "text": "DNS"
        },
        {
          "id": "C",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "D",
          "text": "ARP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-234",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-235",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil"
        },
        {
          "id": "B",
          "text": "IP manzil"
        },
        {
          "id": "C",
          "text": "Port"
        },
        {
          "id": "D",
          "text": "Domen nomi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-236",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
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
      "explanation": "Nazariy asos: MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-237",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil"
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
          "text": "Domen"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-238",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-239",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "B",
          "text": "Xab (Hub)"
        },
        {
          "id": "C",
          "text": "Marshrutizator (Router)"
        },
        {
          "id": "D",
          "text": "Repiter"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-240",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-241",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Modem"
        },
        {
          "id": "B",
          "text": "Server"
        },
        {
          "id": "C",
          "text": "Xab"
        },
        {
          "id": "D",
          "text": "Kommutator (Switch)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-242",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-243",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx"
        },
        {
          "id": "B",
          "text": ".docx / .doc"
        },
        {
          "id": "C",
          "text": ".pptx"
        },
        {
          "id": "D",
          "text": ".accdb"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-244",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
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
      "explanation": "Nazariy asos: .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-245",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".txt"
        },
        {
          "id": "B",
          "text": ".docx"
        },
        {
          "id": "C",
          "text": ".pdf"
        },
        {
          "id": "D",
          "text": ".xlsx / .xls"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-246",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
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
      "explanation": "Nazariy asos: .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-247",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".pptx / .ppt"
        },
        {
          "id": "B",
          "text": ".mp4"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".xlsx"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-248",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-249",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".js"
        },
        {
          "id": "B",
          "text": ".html / .htm"
        },
        {
          "id": "C",
          "text": ".py"
        },
        {
          "id": "D",
          "text": ".css"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-250",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli audio (tovush) fayllari formati"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-251",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4"
        },
        {
          "id": "B",
          "text": ".mp3 / .wav"
        },
        {
          "id": "C",
          "text": ".png"
        },
        {
          "id": "D",
          "text": ".jpg"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-252",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli video fayllari kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-253",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4 / .avi / .mkv"
        },
        {
          "id": "B",
          "text": ".mp3"
        },
        {
          "id": "C",
          "text": ".exe"
        },
        {
          "id": "D",
          "text": ".gif"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-254",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-255",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".jpg / .png / .svg"
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
          "text": ".docx"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-256",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
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
      "explanation": "Nazariy asos: .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-257",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".bat"
        },
        {
          "id": "B",
          "text": ".zip / .rar / .7z"
        },
        {
          "id": "C",
          "text": ".exe"
        },
        {
          "id": "D",
          "text": ".iso"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-258",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
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
      "explanation": "Nazariy asos: .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-259",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".dll"
        },
        {
          "id": "B",
          "text": ".exe / .msi"
        },
        {
          "id": "C",
          "text": ".txt"
        },
        {
          "id": "D",
          "text": ".sys"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-260",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-261",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "Tizimli dasturiy ta'minot"
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
          "text": "O'yinlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-262",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-263",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "Tizimli dasturlar"
        },
        {
          "id": "B",
          "text": "BIOS"
        },
        {
          "id": "C",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "D",
          "text": "Drayverlar"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-264",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-265",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Drayver"
        },
        {
          "id": "B",
          "text": "Arxivator"
        },
        {
          "id": "C",
          "text": "Kompilyator"
        },
        {
          "id": "D",
          "text": "Brauzer"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-266",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-267",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "Kesh"
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
          "text": "Dasturlash muhiti"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-268",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-269",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Antivirus dasturi"
        },
        {
          "id": "B",
          "text": "Optimizator"
        },
        {
          "id": "C",
          "text": "Fayrvol"
        },
        {
          "id": "D",
          "text": "Operatsion sistema"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-270",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-271",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas (Konstanta)"
        },
        {
          "id": "B",
          "text": "Modul"
        },
        {
          "id": "C",
          "text": "O'zgaruvchi (Variable)"
        },
        {
          "id": "D",
          "text": "Funksiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-272",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
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
      "explanation": "Nazariy asos: Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-273",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchi"
        },
        {
          "id": "B",
          "text": "Kompilyator"
        },
        {
          "id": "C",
          "text": "Massiv (Ro'yxat / List)"
        },
        {
          "id": "D",
          "text": "Skalyar kattalik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-274",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-275",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Kutubxona"
        },
        {
          "id": "B",
          "text": "Shart operatori"
        },
        {
          "id": "C",
          "text": "Tsikl"
        },
        {
          "id": "D",
          "text": "Funksiya (Function)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-276",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-277",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Dekrement"
        },
        {
          "id": "B",
          "text": "Rekursiya"
        },
        {
          "id": "C",
          "text": "Iteratsiya"
        },
        {
          "id": "D",
          "text": "Inkrement"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-278",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-279",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
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
          "text": "Translyator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-280",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
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
      "explanation": "Nazariy asos: Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-281",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
      "options": [
        {
          "id": "A",
          "text": "Interpretator"
        },
        {
          "id": "B",
          "text": "Dizassembler"
        },
        {
          "id": "C",
          "text": "Linker"
        },
        {
          "id": "D",
          "text": "Kompilyator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-282",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-283",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<table> tegi"
        },
        {
          "id": "B",
          "text": "<th> tegi"
        },
        {
          "id": "C",
          "text": "<td> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-284",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "HTML jadvalida yangi satr (qator) hosil qiluvchi teg"
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
      "explanation": "Nazariy asos: <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-285",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
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
          "text": "<col> tegi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-286",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-287",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
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
      "explanation": "Nazariy asos: Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-288",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-289",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<form> tegi"
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
          "text": "<button> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-290",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
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
      "explanation": "Nazariy asos: <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-291",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<label> tegi"
        },
        {
          "id": "B",
          "text": "<form> tegi"
        },
        {
          "id": "C",
          "text": "<input> tegi"
        },
        {
          "id": "D",
          "text": "<select> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-292",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-293",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "CSS"
        },
        {
          "id": "B",
          "text": "SQL"
        },
        {
          "id": "C",
          "text": "HTML"
        },
        {
          "id": "D",
          "text": "JavaScript"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-294",
      "question": "DTM namunaviy informatika tahlili: Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "echo()"
        },
        {
          "id": "B",
          "text": "input()"
        },
        {
          "id": "C",
          "text": "write()"
        },
        {
          "id": "D",
          "text": "print()"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-295",
      "question": "DTM namunaviy informatika tahlili: Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "read()"
        },
        {
          "id": "B",
          "text": "scan()"
        },
        {
          "id": "C",
          "text": "input()"
        },
        {
          "id": "D",
          "text": "print()"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-296",
      "question": "DTM namunaviy informatika tahlili: Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
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
          "text": "if"
        },
        {
          "id": "D",
          "text": "while"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: if shart: ... elif ... else."
    },
    {
      "id": "informatika-297",
      "question": "DTM namunaviy informatika tahlili: Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
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
      "explanation": "Nazariy asos: def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-298",
      "question": "DTM namunaviy informatika tahlili: Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "def"
        },
        {
          "id": "B",
          "text": "if"
        },
        {
          "id": "C",
          "text": "switch"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: for i in range(...): tsikli."
    },
    {
      "id": "informatika-299",
      "question": "DTM namunaviy informatika tahlili: Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
      "options": [
        {
          "id": "A",
          "text": "for"
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
          "text": "if"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: while shart: ... tsikli."
    },
    {
      "id": "informatika-300",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
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
      "explanation": "Nazariy asos: Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-301",
      "question": "DTM namunaviy informatika tahlili: O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
      "options": [
        {
          "id": "A",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "B",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "C",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "D",
          "text": "| |"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-302",
      "question": "DTM namunaviy informatika tahlili: Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "(kalit; qiymat)"
        },
        {
          "id": "B",
          "text": "[kalit, qiymat]"
        },
        {
          "id": "C",
          "text": "<kalit=qiymat>"
        },
        {
          "id": "D",
          "text": "{kalit: qiymat}"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-303",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
      "options": [
        {
          "id": "A",
          "text": "count()"
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
          "text": "length()"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-304",
      "question": "DTM namunaviy informatika tahlili: Rastrli grafika nimaga asoslangan?",
      "options": [
        {
          "id": "A",
          "text": "Geometrik formulalar va chiziqlarga"
        },
        {
          "id": "B",
          "text": "Piksellar (nuqtalar) to'riga"
        },
        {
          "id": "C",
          "text": "Faqat matnlarga"
        },
        {
          "id": "D",
          "text": "Faqat tovush to'lqinlariga"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-305",
      "question": "DTM namunaviy informatika tahlili: Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Hajmi doim juda katta bo'ladi"
        },
        {
          "id": "B",
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        },
        {
          "id": "C",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "D",
          "text": "Faqat oq-qora bo'ladi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-306",
      "question": "DTM namunaviy informatika tahlili: RGB rang modelida asosiy ranglar qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Red, Green, Black"
        },
        {
          "id": "B",
          "text": "Rose, Grey, Brown"
        },
        {
          "id": "C",
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        },
        {
          "id": "D",
          "text": "Cyan, Magenta, Yellow"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-307",
      "question": "DTM namunaviy informatika tahlili: Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
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
          "text": "Grayscale"
        },
        {
          "id": "D",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-308",
      "question": "DTM namunaviy informatika tahlili: Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat parol va login"
        },
        {
          "id": "B",
          "text": "Faqat arxivlash"
        },
        {
          "id": "C",
          "text": "Tezlik, hajm va rang"
        },
        {
          "id": "D",
          "text": "Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-309",
      "question": "DTM namunaviy informatika tahlili: Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
        },
        {
          "id": "B",
          "text": "Rangini o'zgartirish"
        },
        {
          "id": "C",
          "text": "Fayl formatini o'chirish"
        },
        {
          "id": "D",
          "text": "Viruslardan tozalash"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-310",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Windows, Linux, macOS, Android"
        },
        {
          "id": "B",
          "text": "Python, C++, Java"
        },
        {
          "id": "C",
          "text": "Chrome, Firefox, Safari"
        },
        {
          "id": "D",
          "text": "Word, Excel, PowerPoint"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-311",
      "question": "DTM namunaviy informatika tahlili: Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts"
        },
        {
          "id": "B",
          "text": "Stiv Jobs"
        },
        {
          "id": "C",
          "text": "Linus Torvalds (1991-yilda)"
        },
        {
          "id": "D",
          "text": "Dennis Ritchi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-312",
      "question": "DTM namunaviy informatika tahlili: Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts va Pol Allen"
        },
        {
          "id": "B",
          "text": "Stiv Jobs va Voznyak"
        },
        {
          "id": "C",
          "text": "Ilon Mask"
        },
        {
          "id": "D",
          "text": "Mark Sukerberg"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-313",
      "question": "DTM namunaviy informatika tahlili: Apple kompaniyasining asoschilari kimlar?",
      "options": [
        {
          "id": "A",
          "text": "Sergey Brin"
        },
        {
          "id": "B",
          "text": "Stiv Jobs va Stiv Voznyak"
        },
        {
          "id": "C",
          "text": "Jeff Bezos"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-314",
      "question": "DTM namunaviy informatika tahlili: Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
      "options": [
        {
          "id": "A",
          "text": "Pavel Durov"
        },
        {
          "id": "B",
          "text": "Jek Ma"
        },
        {
          "id": "C",
          "text": "Bill Geyts"
        },
        {
          "id": "D",
          "text": "Larri Peyj va Sergey Brin"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-315",
      "question": "DTM namunaviy informatika tahlili: Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "8"
        },
        {
          "id": "B",
          "text": "32"
        },
        {
          "id": "C",
          "text": "4"
        },
        {
          "id": "D",
          "text": "16"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: 1 bayt = 8 bit."
    },
    {
      "id": "informatika-316",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Monitor"
        },
        {
          "id": "B",
          "text": "Protsessor"
        },
        {
          "id": "C",
          "text": "Qattiq disk"
        },
        {
          "id": "D",
          "text": "Operativ xotira"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-317",
      "question": "DTM namunaviy informatika tahlili: HTML tili asosan nima uchun ishlatiladi?",
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
      "explanation": "Nazariy asos: HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-318",
      "question": "DTM namunaviy informatika tahlili: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "9"
        },
        {
          "id": "B",
          "text": "8"
        },
        {
          "id": "C",
          "text": "12"
        },
        {
          "id": "D",
          "text": "10"
        }
      ],
      "correct": "D",
      "xp": 300,
      "explanation": "Nazariy asos: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-319",
      "question": "DTM namunaviy informatika tahlili: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "512 bayt"
        },
        {
          "id": "B",
          "text": "1000 bayt"
        },
        {
          "id": "C",
          "text": "2048 bayt"
        },
        {
          "id": "D",
          "text": "1024 bayt"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-320",
      "question": "DTM namunaviy informatika tahlili: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 bayt"
        },
        {
          "id": "B",
          "text": "2048 KB"
        },
        {
          "id": "C",
          "text": "1000 KB"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-321",
      "question": "DTM namunaviy informatika tahlili: 1 Gigabayt (GB) necha Megabaytga teng?",
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
          "text": "4096 MB"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 GB = 1024 MB."
    },
    {
      "id": "informatika-322",
      "question": "DTM namunaviy informatika tahlili: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
      "options": [
        {
          "id": "A",
          "text": "4 bit"
        },
        {
          "id": "B",
          "text": "1 bayt (8 bit)"
        },
        {
          "id": "C",
          "text": "16 bit"
        },
        {
          "id": "D",
          "text": "2 bayt"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-323",
      "question": "DTM namunaviy informatika tahlili: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "8 bit"
        },
        {
          "id": "B",
          "text": "1 bayt"
        },
        {
          "id": "C",
          "text": "2 bayt (16 bit)"
        },
        {
          "id": "D",
          "text": "4 bayt"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-324",
      "question": "DTM namunaviy informatika tahlili: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "I = 2^N"
        },
        {
          "id": "B",
          "text": "N = log₂i"
        },
        {
          "id": "C",
          "text": "N = 2^i"
        },
        {
          "id": "D",
          "text": "I = m · v"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-325",
      "question": "DTM namunaviy informatika tahlili: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "K, L, M, N, O, P"
        },
        {
          "id": "B",
          "text": "X, Y, Z, W, P, Q"
        },
        {
          "id": "C",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "D",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-326",
      "question": "DTM namunaviy informatika tahlili: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "7"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "14"
        },
        {
          "id": "D",
          "text": "15"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-327",
      "question": "DTM namunaviy informatika tahlili: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "1111"
        },
        {
          "id": "B",
          "text": "1000"
        },
        {
          "id": "C",
          "text": "100000"
        },
        {
          "id": "D",
          "text": "10000"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-328",
      "question": "DTM namunaviy informatika tahlili: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
      "options": [
        {
          "id": "A",
          "text": "F"
        },
        {
          "id": "B",
          "text": "9"
        },
        {
          "id": "C",
          "text": "7"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-329",
      "question": "DTM namunaviy informatika tahlili: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "26"
        },
        {
          "id": "D",
          "text": "24"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-330",
      "question": "DTM namunaviy informatika tahlili: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk (HDD/SSD)"
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
          "text": "Fleshka"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-331",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        },
        {
          "id": "B",
          "text": "Faqat foydalanuvchi fayllari"
        },
        {
          "id": "C",
          "text": "O'yinlar"
        },
        {
          "id": "D",
          "text": "Matnli hujjatlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-332",
      "question": "DTM namunaviy informatika tahlili: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Uzoq muddat fayllarni saqlaydi"
        },
        {
          "id": "B",
          "text": "Grafik tasvirlarni chizadi"
        },
        {
          "id": "C",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
        },
        {
          "id": "D",
          "text": "Elektr toki beradi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-333",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
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
          "text": "Registr"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-334",
      "question": "DTM namunaviy informatika tahlili: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "FDD"
        },
        {
          "id": "B",
          "text": "CD-ROM"
        },
        {
          "id": "C",
          "text": "DVD-RW"
        },
        {
          "id": "D",
          "text": "SSD (Solid State Drive)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-335",
      "question": "DTM namunaviy informatika tahlili: Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Bayt"
        },
        {
          "id": "B",
          "text": "Vatt"
        },
        {
          "id": "C",
          "text": "BPS"
        },
        {
          "id": "D",
          "text": "Gers (Gs, MGs, GGs)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-336",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Plotter"
        },
        {
          "id": "B",
          "text": "Printer"
        },
        {
          "id": "C",
          "text": "Monitor"
        },
        {
          "id": "D",
          "text": "Skaner"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-337",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Mikrofon"
        },
        {
          "id": "B",
          "text": "Skaner"
        },
        {
          "id": "C",
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Klaviatura"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-338",
      "question": "DTM namunaviy informatika tahlili: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Digitayzer"
        },
        {
          "id": "B",
          "text": "Plotter (grafik yasagich)"
        },
        {
          "id": "C",
          "text": "Skaner"
        },
        {
          "id": "D",
          "text": "Printer"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-339",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        },
        {
          "id": "C",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "D",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-340",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkalasi chin bo'lganda"
        },
        {
          "id": "C",
          "text": "Biri chin bo'lganda"
        },
        {
          "id": "D",
          "text": "Hech qachon"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-341",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        },
        {
          "id": "B",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "C",
          "text": "Ikkita sonni qo'shadi"
        },
        {
          "id": "D",
          "text": "Sonni nolga tenglashtiradi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-342",
      "question": "DTM namunaviy informatika tahlili: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "B",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        },
        {
          "id": "C",
          "text": "Faqat qisqalik va tezlik"
        },
        {
          "id": "D",
          "text": "Ranglilik va hajm"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-343",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm"
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
          "text": "Oval"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-344",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
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
          "text": "Parallelogramm"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-345",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "Trapetsiya"
        },
        {
          "id": "B",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "C",
          "text": "Oval"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-346",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
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
          "text": "Kvadrat"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-347",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
      "options": [
        {
          "id": "A",
          "text": "//"
        },
        {
          "id": "B",
          "text": "%"
        },
        {
          "id": "C",
          "text": "**"
        },
        {
          "id": "D",
          "text": "/"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-348",
      "question": "DTM namunaviy informatika tahlili: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
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
          "text": "//"
        },
        {
          "id": "D",
          "text": "%"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-349",
      "question": "DTM namunaviy informatika tahlili: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
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
          "text": "pow"
        },
        {
          "id": "D",
          "text": "^"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-350",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "float"
        },
        {
          "id": "B",
          "text": "int"
        },
        {
          "id": "C",
          "text": "str"
        },
        {
          "id": "D",
          "text": "bool"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: int - integer (butun son)."
    },
    {
      "id": "informatika-351",
      "question": "DTM namunaviy informatika tahlili: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
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
          "text": "list"
        },
        {
          "id": "D",
          "text": "char"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-352",
      "question": "DTM namunaviy informatika tahlili: Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "dict"
        },
        {
          "id": "B",
          "text": "int"
        },
        {
          "id": "C",
          "text": "bool"
        },
        {
          "id": "D",
          "text": "str (string)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-353",
      "question": "DTM namunaviy informatika tahlili: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<a>"
        },
        {
          "id": "B",
          "text": "<url>"
        },
        {
          "id": "C",
          "text": "<href>"
        },
        {
          "id": "D",
          "text": "<link>"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-354",
      "question": "DTM namunaviy informatika tahlili: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<picture>"
        },
        {
          "id": "B",
          "text": "<src>"
        },
        {
          "id": "C",
          "text": "<img>"
        },
        {
          "id": "D",
          "text": "<image>"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: <img src='...' alt='...'>."
    },
    {
      "id": "informatika-355",
      "question": "DTM namunaviy informatika tahlili: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<h6>"
        },
        {
          "id": "B",
          "text": "<title>"
        },
        {
          "id": "C",
          "text": "<header>"
        },
        {
          "id": "D",
          "text": "<h1>"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-356",
      "question": "DTM namunaviy informatika tahlili: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<li>"
        },
        {
          "id": "B",
          "text": "<ol>"
        },
        {
          "id": "C",
          "text": "<ul>"
        },
        {
          "id": "D",
          "text": "<dl>"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-357",
      "question": "DTM namunaviy informatika tahlili: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Server logikasini yozish"
        },
        {
          "id": "B",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasini tuzish"
        },
        {
          "id": "D",
          "text": "Fayllarni arxivlash"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-358",
      "question": "DTM namunaviy informatika tahlili: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "16 bayt"
        },
        {
          "id": "B",
          "text": "8 bayt"
        },
        {
          "id": "C",
          "text": "6 bayt"
        },
        {
          "id": "D",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-359",
      "question": "DTM namunaviy informatika tahlili: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Parollarni saqlash"
        },
        {
          "id": "B",
          "text": "Elektron xat jo'natish"
        },
        {
          "id": "C",
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        },
        {
          "id": "D",
          "text": "Fayllarni yuklash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-360",
      "question": "DTM namunaviy informatika tahlili: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
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
      "explanation": "Nazariy asos: MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-361",
      "question": "DTM namunaviy informatika tahlili: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "SMTP"
        },
        {
          "id": "C",
          "text": "FTP"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-362",
      "question": "DTM namunaviy informatika tahlili: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "IMAP"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "POP3"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-363",
      "question": "DTM namunaviy informatika tahlili: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
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
      "explanation": "Nazariy asos: Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-364",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kalit"
        },
        {
          "id": "B",
          "text": "Indeks"
        },
        {
          "id": "C",
          "text": "Maydon (atribut)"
        },
        {
          "id": "D",
          "text": "Yozuv (kortej / record)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-365",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "B",
          "text": "Jadval"
        },
        {
          "id": "C",
          "text": "Katastrofa"
        },
        {
          "id": "D",
          "text": "Yozuv"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-366",
      "question": "DTM namunaviy informatika tahlili: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
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
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "D",
          "text": "Tashqi kalit"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-367",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-368",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Videokarta"
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU)"
        },
        {
          "id": "C",
          "text": "Operativ xotira"
        },
        {
          "id": "D",
          "text": "Qattiq disk"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-369",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
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
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-370",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "SSD"
        },
        {
          "id": "D",
          "text": "Kesh-xotira"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-371",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-372",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Fleshka"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "Strimmer"
        },
        {
          "id": "D",
          "text": "RAM"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-373",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-374",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Magnit lenta"
        },
        {
          "id": "B",
          "text": "Vinchester"
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache)"
        },
        {
          "id": "D",
          "text": "Optik disk"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-375",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-376",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq kartasi"
        },
        {
          "id": "B",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "C",
          "text": "Ovoz kartasi"
        },
        {
          "id": "D",
          "text": "Chipset"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-377",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-378",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Ona plata (Motherboard)"
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
          "text": "Quvvat bloki"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-379",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
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
      "explanation": "Nazariy asos: Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-380",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Stabilizator"
        },
        {
          "id": "B",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "C",
          "text": "Invertor"
        },
        {
          "id": "D",
          "text": "Kondensator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-381",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-382",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "HTTP / HTTPS"
        },
        {
          "id": "B",
          "text": "SMTP"
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
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-383",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-384",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "TELNET"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "DNS"
        },
        {
          "id": "D",
          "text": "FTP (File Transfer Protocol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-385",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-386",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        },
        {
          "id": "C",
          "text": "SNMP"
        },
        {
          "id": "D",
          "text": "IMAP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-387",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
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
      "explanation": "Nazariy asos: POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-388",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "POP3 va IMAP"
        },
        {
          "id": "C",
          "text": "FTP"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-389",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-390",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "ARP"
        },
        {
          "id": "B",
          "text": "ICMP"
        },
        {
          "id": "C",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "D",
          "text": "DNS"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-391",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-392",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "Port"
        },
        {
          "id": "B",
          "text": "IP manzil"
        },
        {
          "id": "C",
          "text": "MAC manzil"
        },
        {
          "id": "D",
          "text": "Domen nomi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-393",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-394",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "Domen"
        },
        {
          "id": "B",
          "text": "MAC manzil"
        },
        {
          "id": "C",
          "text": "Shlyuz"
        },
        {
          "id": "D",
          "text": "IP manzil"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-395",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-396",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",

      "options": [
        {
          "id": "A",
          "text": "Xab (Hub)"
        },
        {
          "id": "B",
          "text": "Marshrutizator (Router)"
        },
        {
          "id": "C",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "D",
          "text": "Repiter"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-397",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
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
      "explanation": "Nazariy asos: Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-398",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Xab"
        },
        {
          "id": "B",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "C",
          "text": "Modem"
        },
        {
          "id": "D",
          "text": "Server"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-399",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-400",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx"
        },
        {
          "id": "B",
          "text": ".docx / .doc"
        },
        {
          "id": "C",
          "text": ".pptx"
        },
        {
          "id": "D",
          "text": ".accdb"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-401",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-402",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".pdf"
        },
        {
          "id": "B",
          "text": ".txt"
        },
        {
          "id": "C",
          "text": ".xlsx / .xls"
        },
        {
          "id": "D",
          "text": ".docx"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-403",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
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
      "explanation": "Nazariy asos: .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-404",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".pptx / .ppt"
        },
        {
          "id": "B",
          "text": ".mp4"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".xlsx"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-405",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-406",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".py"
        },
        {
          "id": "B",
          "text": ".html / .htm"
        },
        {
          "id": "C",
          "text": ".css"
        },
        {
          "id": "D",
          "text": ".js"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-407",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Raqamli audio (tovush) fayllari formati"
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
      "explanation": "Nazariy asos: .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-408",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
      "options": [
        {
          "id": "A",
          "text": ".png"
        },
        {
          "id": "B",
          "text": ".mp3 / .wav"
        },
        {
          "id": "C",
          "text": ".mp4"
        },
        {
          "id": "D",
          "text": ".jpg"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-409",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli video fayllari kengaytmasi"
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
      "explanation": "Nazariy asos: .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-410",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".gif"
        },
        {
          "id": "B",
          "text": ".mp3"
        },
        {
          "id": "C",
          "text": ".mp4 / .avi / .mkv"
        },
        {
          "id": "D",
          "text": ".exe"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-411",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
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
      "explanation": "Nazariy asos: .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-412",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".zip"
        },
        {
          "id": "B",
          "text": ".docx"
        },
        {
          "id": "C",
          "text": ".jpg / .png / .svg"
        },
        {
          "id": "D",
          "text": ".mp3"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-413",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
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
      "explanation": "Nazariy asos: .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-414",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".exe"
        },
        {
          "id": "B",
          "text": ".bat"
        },
        {
          "id": "C",
          "text": ".iso"
        },
        {
          "id": "D",
          "text": ".zip / .rar / .7z"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-415",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
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
      "explanation": "Nazariy asos: .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-416",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
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
      "explanation": "Nazariy asos: Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-417",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-418",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "Tizimli dasturiy ta'minot"
        },
        {
          "id": "C",
          "text": "O'yinlar"
        },
        {
          "id": "D",
          "text": "Uskunaviy vositalar"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-419",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-420",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "Drayverlar"
        },
        {
          "id": "C",
          "text": "Tizimli dasturlar"
        },
        {
          "id": "D",
          "text": "BIOS"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-421",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
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
      "explanation": "Nazariy asos: Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-422",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Arxivator"
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
          "text": "Brauzer"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-423",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
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
      "explanation": "Nazariy asos: BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-424",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "Dasturlash muhiti"
        },
        {
          "id": "B",
          "text": "Kesh"
        },
        {
          "id": "C",
          "text": "Windows"
        },
        {
          "id": "D",
          "text": "BIOS (Basic Input/Output System)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-425",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-426",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Antivirus dasturi"
        },
        {
          "id": "B",
          "text": "Optimizator"
        },
        {
          "id": "C",
          "text": "Operatsion sistema"
        },
        {
          "id": "D",
          "text": "Fayrvol"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-427",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
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
      "explanation": "Nazariy asos: O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-428",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas (Konstanta)"
        },
        {
          "id": "B",
          "text": "Funksiya"
        },
        {
          "id": "C",
          "text": "O'zgaruvchi (Variable)"
        },
        {
          "id": "D",
          "text": "Modul"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-429",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-430",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "Skalyar kattalik"
        },
        {
          "id": "B",
          "text": "Massiv (Ro'yxat / List)"
        },
        {
          "id": "C",
          "text": "O'zgaruvchi"
        },
        {
          "id": "D",
          "text": "Kompilyator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-431",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-432",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Shart operatori"
        },
        {
          "id": "B",
          "text": "Funksiya (Function)"
        },
        {
          "id": "C",
          "text": "Tsikl"
        },
        {
          "id": "D",
          "text": "Kutubxona"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-433",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
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
      "explanation": "Nazariy asos: Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-434",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Rekursiya"
        },
        {
          "id": "B",
          "text": "Iteratsiya"
        },
        {
          "id": "C",
          "text": "Inkrement"
        },
        {
          "id": "D",
          "text": "Dekrement"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-435",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
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
      "explanation": "Nazariy asos: Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-436",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Assembler"
        },
        {
          "id": "C",
          "text": "Translyator"
        },
        {
          "id": "D",
          "text": "Interpretator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-437",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-438",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Interpretator"
        },
        {
          "id": "C",
          "text": "Linker"
        },
        {
          "id": "D",
          "text": "Dizassembler"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-439",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
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
      "explanation": "Nazariy asos: <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-440",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<table> tegi"
        },
        {
          "id": "B",
          "text": "<td> tegi"
        },
        {
          "id": "C",
          "text": "<tr> tegi"
        },
        {
          "id": "D",
          "text": "<th> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-441",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML jadvalida yangi satr (qator) hosil qiluvchi teg"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-442",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<tr> tegi"
        },
        {
          "id": "B",
          "text": "<col> tegi"
        },
        {
          "id": "C",
          "text": "<table> tegi"
        },
        {
          "id": "D",
          "text": "<td> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-443",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
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
      "explanation": "Nazariy asos: <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-444",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<th> tegi"
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
          "text": "<caption> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-445",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-446",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<input> tegi"
        },
        {
          "id": "B",
          "text": "<button> tegi"
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
      "explanation": "Nazariy asos: Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-447",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
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
      "explanation": "Nazariy asos: <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-448",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<form> tegi"
        },
        {
          "id": "B",
          "text": "<select> tegi"
        },
        {
          "id": "C",
          "text": "<label> tegi"
        },
        {
          "id": "D",
          "text": "<input> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-449",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-450",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "HTML"
        },
        {
          "id": "B",
          "text": "SQL"
        },
        {
          "id": "C",
          "text": "CSS"
        },
        {
          "id": "D",
          "text": "JavaScript"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-451",
      "question": "DTM namunaviy informatika tahlili: Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "print()"
        },
        {
          "id": "B",
          "text": "echo()"
        },
        {
          "id": "C",
          "text": "write()"
        },
        {
          "id": "D",
          "text": "input()"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-452",
      "question": "DTM namunaviy informatika tahlili: Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "scan()"
        },
        {
          "id": "B",
          "text": "input()"
        },
        {
          "id": "C",
          "text": "read()"
        },
        {
          "id": "D",
          "text": "print()"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-453",
      "question": "DTM namunaviy informatika tahlili: Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
      "options": [
        {
          "id": "A",
          "text": "for"
        },
        {
          "id": "B",
          "text": "while"
        },
        {
          "id": "C",
          "text": "if"
        },
        {
          "id": "D",
          "text": "def"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: if shart: ... elif ... else."
    },
    {
      "id": "informatika-454",
      "question": "DTM namunaviy informatika tahlili: Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "fun"
        },
        {
          "id": "B",
          "text": "function"
        },
        {
          "id": "C",
          "text": "proc"
        },
        {
          "id": "D",
          "text": "def"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-455",
      "question": "DTM namunaviy informatika tahlili: Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "switch"
        },
        {
          "id": "B",
          "text": "if"
        },
        {
          "id": "C",
          "text": "def"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: for i in range(...): tsikli."
    },
    {
      "id": "informatika-456",
      "question": "DTM namunaviy informatika tahlili: Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
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
          "text": "range"
        },
        {
          "id": "D",
          "text": "while"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: while shart: ... tsikli."
    },
    {
      "id": "informatika-457",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "B",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "C",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "D",
          "text": "< > (burchakli qavslar)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-458",
      "question": "DTM namunaviy informatika tahlili: O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
      "options": [
        {
          "id": "A",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "B",
          "text": "| |"
        },
        {
          "id": "C",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "D",
          "text": "( ) (oddiy qavslar)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-459",
      "question": "DTM namunaviy informatika tahlili: Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "(kalit; qiymat)"
        },
        {
          "id": "B",
          "text": "{kalit: qiymat}"
        },
        {
          "id": "C",
          "text": "[kalit, qiymat]"
        },
        {
          "id": "D",
          "text": "<kalit=qiymat>"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-460",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
      "options": [
        {
          "id": "A",
          "text": "len()"
        },
        {
          "id": "B",
          "text": "count()"
        },
        {
          "id": "C",
          "text": "length()"
        },
        {
          "id": "D",
          "text": "size()"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-461",
      "question": "DTM namunaviy informatika tahlili: Rastrli grafika nimaga asoslangan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat tovush to'lqinlariga"
        },
        {
          "id": "B",
          "text": "Geometrik formulalar va chiziqlarga"
        },
        {
          "id": "C",
          "text": "Faqat matnlarga"
        },
        {
          "id": "D",
          "text": "Piksellar (nuqtalar) to'riga"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-462",
      "question": "DTM namunaviy informatika tahlili: Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat oq-qora bo'ladi"
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
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-463",
      "question": "DTM namunaviy informatika tahlili: RGB rang modelida asosiy ranglar qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
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
          "text": "Rose, Grey, Brown"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-464",
      "question": "DTM namunaviy informatika tahlili: Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
      "options": [
        {
          "id": "A",
          "text": "RGB"
        },
        {
          "id": "B",
          "text": "Grayscale"
        },
        {
          "id": "C",
          "text": "HSB"
        },
        {
          "id": "D",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-465",
      "question": "DTM namunaviy informatika tahlili: Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat parol va login"
        },
        {
          "id": "B",
          "text": "Faqat arxivlash"
        },
        {
          "id": "C",
          "text": "Tezlik, hajm va rang"
        },
        {
          "id": "D",
          "text": "Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-466",
      "question": "DTM namunaviy informatika tahlili: Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
        },
        {
          "id": "B",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "C",
          "text": "Fayl formatini o'chirish"
        },
        {
          "id": "D",
          "text": "Rangini o'zgartirish"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-467",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Chrome, Firefox, Safari"
        },
        {
          "id": "B",
          "text": "Word, Excel, PowerPoint"
        },
        {
          "id": "C",
          "text": "Python, C++, Java"
        },
        {
          "id": "D",
          "text": "Windows, Linux, macOS, Android"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-468",
      "question": "DTM namunaviy informatika tahlili: Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
      "options": [
        {
          "id": "A",
          "text": "Linus Torvalds (1991-yilda)"
        },
        {
          "id": "B",
          "text": "Dennis Ritchi"
        },
        {
          "id": "C",
          "text": "Stiv Jobs"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-469",
      "question": "DTM namunaviy informatika tahlili: Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Stiv Jobs va Voznyak"
        },
        {
          "id": "B",
          "text": "Mark Sukerberg"
        },
        {
          "id": "C",
          "text": "Bill Geyts va Pol Allen"
        },
        {
          "id": "D",
          "text": "Ilon Mask"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-470",
      "question": "DTM namunaviy informatika tahlili: Apple kompaniyasining asoschilari kimlar?",
      "options": [
        {
          "id": "A",
          "text": "Sergey Brin"
        },
        {
          "id": "B",
          "text": "Jeff Bezos"
        },
        {
          "id": "C",
          "text": "Stiv Jobs va Stiv Voznyak"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-471",
      "question": "DTM namunaviy informatika tahlili: Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
      "options": [
        {
          "id": "A",
          "text": "Jek Ma"
        },
        {
          "id": "B",
          "text": "Pavel Durov"
        },
        {
          "id": "C",
          "text": "Larri Peyj va Sergey Brin"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-472",
      "question": "DTM namunaviy informatika tahlili: Bir baytda nechta bit bor?",
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
      "explanation": "Nazariy asos: 1 bayt = 8 bit."
    },
    {
      "id": "informatika-473",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Monitor"
        },
        {
          "id": "B",
          "text": "Operativ xotira"
        },
        {
          "id": "C",
          "text": "Protsessor"
        },
        {
          "id": "D",
          "text": "Qattiq disk"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-474",
      "question": "DTM namunaviy informatika tahlili: HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Mobil ilova ishlab chiqish"
        },
        {
          "id": "B",
          "text": "Server tomonidagi logikani yozish"
        },
        {
          "id": "C",
          "text": "Web sahifa tuzilmasini yaratish"
        },
        {
          "id": "D",
          "text": "Ma’lumotlar bazasini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-475",
      "question": "DTM namunaviy informatika tahlili: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "12"
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
      "xp": 300,
      "explanation": "Nazariy asos: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-476",
      "question": "DTM namunaviy informatika tahlili: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1000 bayt"
        },
        {
          "id": "B",
          "text": "2048 bayt"
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
      "explanation": "Nazariy asos: 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-477",
      "question": "DTM namunaviy informatika tahlili: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1000 KB"
        },
        {
          "id": "B",
          "text": "2048 KB"
        },
        {
          "id": "C",
          "text": "1024 bayt"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-478",
      "question": "DTM namunaviy informatika tahlili: 1 Gigabayt (GB) necha Megabaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 KB"
        },
        {
          "id": "B",
          "text": "1024 MB"
        },
        {
          "id": "C",
          "text": "1000 MB"
        },
        {
          "id": "D",
          "text": "4096 MB"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 GB = 1024 MB."
    },
    {
      "id": "informatika-479",
      "question": "DTM namunaviy informatika tahlili: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
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
      "explanation": "Nazariy asos: Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-480",
      "question": "DTM namunaviy informatika tahlili: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "8 bit"
        },
        {
          "id": "B",
          "text": "4 bayt"
        },
        {
          "id": "C",
          "text": "2 bayt (16 bit)"
        },
        {
          "id": "D",
          "text": "1 bayt"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-481",
      "question": "DTM namunaviy informatika tahlili: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
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
          "text": "I = 2^N"
        },
        {
          "id": "D",
          "text": "I = m · v"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-482",
      "question": "DTM namunaviy informatika tahlili: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "B",
          "text": "X, Y, Z, W, P, Q"
        },
        {
          "id": "C",
          "text": "K, L, M, N, O, P"
        },
        {
          "id": "D",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-483",
      "question": "DTM namunaviy informatika tahlili: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
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
          "text": "15"
        },
        {
          "id": "D",
          "text": "7"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-484",
      "question": "DTM namunaviy informatika tahlili: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "1000"
        },
        {
          "id": "B",
          "text": "10000"
        },
        {
          "id": "C",
          "text": "1111"
        },
        {
          "id": "D",
          "text": "100000"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-485",
      "question": "DTM namunaviy informatika tahlili: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
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
      "explanation": "Nazariy asos: Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-486",
      "question": "DTM namunaviy informatika tahlili: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "24"
        },
        {
          "id": "B",
          "text": "10"
        },
        {
          "id": "C",
          "text": "16"
        },
        {
          "id": "D",
          "text": "26"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-487",
      "question": "DTM namunaviy informatika tahlili: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk (HDD/SSD)"
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
          "text": "Fleshka"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-488",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "B",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        },
        {
          "id": "C",
          "text": "O'yinlar"
        },
        {
          "id": "D",
          "text": "Faqat foydalanuvchi fayllari"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-489",
      "question": "DTM namunaviy informatika tahlili: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Grafik tasvirlarni chizadi"
        },
        {
          "id": "B",
          "text": "Elektr toki beradi"
        },
        {
          "id": "C",
          "text": "Uzoq muddat fayllarni saqlaydi"
        },
        {
          "id": "D",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-490",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
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
          "text": "Registr"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-491",
      "question": "DTM namunaviy informatika tahlili: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "FDD"
        },
        {
          "id": "B",
          "text": "CD-ROM"
        },
        {
          "id": "C",
          "text": "SSD (Solid State Drive)"
        },
        {
          "id": "D",
          "text": "DVD-RW"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-492",
      "question": "DTM namunaviy informatika tahlili: Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Bayt"
        },
        {
          "id": "B",
          "text": "Gers (Gs, MGs, GGs)"
        },
        {
          "id": "C",
          "text": "Vatt"
        },
        {
          "id": "D",
          "text": "BPS"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-493",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Monitor"
        },
        {
          "id": "B",
          "text": "Printer"
        },
        {
          "id": "C",
          "text": "Skaner"
        },
        {
          "id": "D",
          "text": "Plotter"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-494",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Skaner"
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
          "text": "Printer"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-495",
      "question": "DTM namunaviy informatika tahlili: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Skaner"
        },
        {
          "id": "B",
          "text": "Digitayzer"
        },
        {
          "id": "C",
          "text": "Plotter (grafik yasagich)"
        },
        {
          "id": "D",
          "text": "Printer"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-496",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "B",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        },
        {
          "id": "C",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "D",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-497",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkalasi chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Biri chin bo'lganda"
        },
        {
          "id": "C",
          "text": "Hech qachon"
        },
        {
          "id": "D",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-498",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkita sonni qo'shadi"
        },
        {
          "id": "B",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "C",
          "text": "Sonni nolga tenglashtiradi"
        },
        {
          "id": "D",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-499",
      "question": "DTM namunaviy informatika tahlili: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat qisqalik va tezlik"
        },
        {
          "id": "B",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        },
        {
          "id": "C",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "D",
          "text": "Ranglilik va hajm"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-500",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Oval"
        },
        {
          "id": "B",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "C",
          "text": "Parallelogramm"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-501",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "Parallelogramm"
        },
        {
          "id": "B",
          "text": "Romb"
        },
        {
          "id": "C",
          "text": "Doira"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-502",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "Oval"
        },
        {
          "id": "B",
          "text": "Romb"
        },
        {
          "id": "C",
          "text": "Trapetsiya"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-503",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "C",
          "text": "Oval (ellips)"
        },
        {
          "id": "D",
          "text": "Kvadrat"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-504",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
      "options": [
        {
          "id": "A",
          "text": "/"
        },
        {
          "id": "B",
          "text": "%"
        },
        {
          "id": "C",
          "text": "**"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-505",
      "question": "DTM namunaviy informatika tahlili: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
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
      "explanation": "Nazariy asos: Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-506",
      "question": "DTM namunaviy informatika tahlili: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "//"
        },
        {
          "id": "B",
          "text": "**"
        },
        {
          "id": "C",
          "text": "pow"
        },
        {
          "id": "D",
          "text": "^"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-507",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "bool"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "str"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: int - integer (butun son)."
    },
    {
      "id": "informatika-508",
      "question": "DTM namunaviy informatika tahlili: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "char"
        },
        {
          "id": "B",
          "text": "float"
        },
        {
          "id": "C",
          "text": "int"
        },
        {
          "id": "D",
          "text": "list"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-509",
      "question": "DTM namunaviy informatika tahlili: Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "dict"
        },
        {
          "id": "C",
          "text": "str (string)"
        },
        {
          "id": "D",
          "text": "bool"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-510",
      "question": "DTM namunaviy informatika tahlili: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<url>"
        },
        {
          "id": "B",
          "text": "<a>"
        },
        {
          "id": "C",
          "text": "<link>"
        },
        {
          "id": "D",
          "text": "<href>"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-511",
      "question": "DTM namunaviy informatika tahlili: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<image>"
        },
        {
          "id": "B",
          "text": "<picture>"
        },
        {
          "id": "C",
          "text": "<src>"
        },
        {
          "id": "D",
          "text": "<img>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: <img src='...' alt='...'>."
    },
    {
      "id": "informatika-512",
      "question": "DTM namunaviy informatika tahlili: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<title>"
        },
        {
          "id": "B",
          "text": "<h1>"
        },
        {
          "id": "C",
          "text": "<header>"
        },
        {
          "id": "D",
          "text": "<h6>"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-513",
      "question": "DTM namunaviy informatika tahlili: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<ul>"
        },
        {
          "id": "B",
          "text": "<li>"
        },
        {
          "id": "C",
          "text": "<dl>"
        },
        {
          "id": "D",
          "text": "<ol>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-514",
      "question": "DTM namunaviy informatika tahlili: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "B",
          "text": "Server logikasini yozish"
        },
        {
          "id": "C",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        },
        {
          "id": "D",
          "text": "Ma'lumotlar bazasini tuzish"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-515",
      "question": "DTM namunaviy informatika tahlili: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "16 bayt"
        },
        {
          "id": "B",
          "text": "6 bayt"
        },
        {
          "id": "C",
          "text": "8 bayt"
        },
        {
          "id": "D",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-516",
      "question": "DTM namunaviy informatika tahlili: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni yuklash"
        },
        {
          "id": "B",
          "text": "Elektron xat jo'natish"
        },
        {
          "id": "C",
          "text": "Parollarni saqlash"
        },
        {
          "id": "D",
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-517",
      "question": "DTM namunaviy informatika tahlili: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Port"
        },
        {
          "id": "B",
          "text": "URL"
        },
        {
          "id": "C",
          "text": "IP-manzil"
        },
        {
          "id": "D",
          "text": "MAC-manzil"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-518",
      "question": "DTM namunaviy informatika tahlili: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "FTP"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-519",
      "question": "DTM namunaviy informatika tahlili: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
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
      "explanation": "Nazariy asos: SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-520",
      "question": "DTM namunaviy informatika tahlili: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat bitta matnli faylda"
        },
        {
          "id": "B",
          "text": "Tarmoq shaklida"
        },
        {
          "id": "C",
          "text": "Faqat daraxtsimon shaklda"
        },
        {
          "id": "D",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-521",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kalit"
        },
        {
          "id": "B",
          "text": "Indeks"
        },
        {
          "id": "C",
          "text": "Maydon (atribut)"
        },
        {
          "id": "D",
          "text": "Yozuv (kortej / record)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-522",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Yozuv"
        },
        {
          "id": "B",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "C",
          "text": "Katastrofa"
        },
        {
          "id": "D",
          "text": "Jadval"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-523",
      "question": "DTM namunaviy informatika tahlili: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "B",
          "text": "Indeks"
        },
        {
          "id": "C",
          "text": "Filtr"
        },
        {
          "id": "D",
          "text": "Tashqi kalit"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-524",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-525",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Videokarta"
        },
        {
          "id": "B",
          "text": "Qattiq disk"
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU)"
        },
        {
          "id": "D",
          "text": "Operativ xotira"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-526",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-527",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "B",
          "text": "Kesh-xotira"
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
      "explanation": "Nazariy asos: Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-528",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
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
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-529",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
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
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "D",
          "text": "Strimmer"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-530",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-531",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache)"
        },
        {
          "id": "B",
          "text": "Vinchester"
        },
        {
          "id": "C",
          "text": "Optik disk"
        },
        {
          "id": "D",
          "text": "Magnit lenta"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-532",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-533",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Ovoz kartasi"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasi"
        },
        {
          "id": "C",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "D",
          "text": "Chipset"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-534",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-535",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Shina"
        },
        {
          "id": "B",
          "text": "Kuler"
        },
        {
          "id": "C",
          "text": "Ona plata (Motherboard)"
        },
        {
          "id": "D",
          "text": "Quvvat bloki"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-536",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-537",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "B",
          "text": "Invertor"
        },
        {
          "id": "C",
          "text": "Stabilizator"
        },
        {
          "id": "D",
          "text": "Kondensator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-538",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-539",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "HTTP / HTTPS"
        },
        {
          "id": "B",
          "text": "DHCP"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-540",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-541",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "DNS"
        },
        {
          "id": "C",
          "text": "FTP (File Transfer Protocol)"
        },
        {
          "id": "D",
          "text": "TELNET"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-542",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-543",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "IMAP"
        },
        {
          "id": "C",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        },
        {
          "id": "D",
          "text": "SNMP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-544",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
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
      "explanation": "Nazariy asos: POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-545",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "FTP"
        },
        {
          "id": "C",
          "text": "POP3 va IMAP"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-546",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-547",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "ICMP"
        },
        {
          "id": "B",
          "text": "DNS"
        },
        {
          "id": "C",
          "text": "ARP"
        },
        {
          "id": "D",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-548",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-549",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil"
        },
        {
          "id": "B",
          "text": "IP manzil"
        },
        {
          "id": "C",
          "text": "Port"
        },
        {
          "id": "D",
          "text": "Domen nomi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-550",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-551",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "Shlyuz"
        },
        {
          "id": "B",
          "text": "Domen"
        },
        {
          "id": "C",
          "text": "IP manzil"
        },
        {
          "id": "D",
          "text": "MAC manzil"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-552",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-553",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "B",
          "text": "Xab (Hub)"
        },
        {
          "id": "C",
          "text": "Repiter"
        },
        {
          "id": "D",
          "text": "Marshrutizator (Router)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-554",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-555",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "B",
          "text": "Modem"
        },
        {
          "id": "C",
          "text": "Xab"
        },
        {
          "id": "D",
          "text": "Server"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-556",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-557",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".accdb"
        },
        {
          "id": "B",
          "text": ".docx / .doc"
        },
        {
          "id": "C",
          "text": ".pptx"
        },
        {
          "id": "D",
          "text": ".xlsx"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-558",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
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
      "explanation": "Nazariy asos: .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-559",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".pdf"
        },
        {
          "id": "B",
          "text": ".docx"
        },
        {
          "id": "C",
          "text": ".xlsx / .xls"
        },
        {
          "id": "D",
          "text": ".txt"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-560",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-561",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4"
        },
        {
          "id": "B",
          "text": ".xlsx"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".pptx / .ppt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-562",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-563",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".css"
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
          "text": ".py"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-564",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli audio (tovush) fayllari formati"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-565",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
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
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-566",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Raqamli video fayllari kengaytmasi"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-567",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".gif"
        },
        {
          "id": "B",
          "text": ".mp3"
        },
        {
          "id": "C",
          "text": ".exe"
        },
        {
          "id": "D",
          "text": ".mp4 / .avi / .mkv"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-568",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-569",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".mp3"
        },
        {
          "id": "B",
          "text": ".jpg / .png / .svg"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".zip"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-570",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-571",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".zip / .rar / .7z"
        },
        {
          "id": "B",
          "text": ".exe"
        },
        {
          "id": "C",
          "text": ".bat"
        },
        {
          "id": "D",
          "text": ".iso"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-572",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-573",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
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
      "explanation": "Nazariy asos: Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-574",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
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
      "explanation": "Nazariy asos: Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-575",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "O'yinlar"
        },
        {
          "id": "C",
          "text": "Tizimli dasturiy ta'minot"
        },
        {
          "id": "D",
          "text": "Uskunaviy vositalar"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-576",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-577",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "BIOS"
        },
        {
          "id": "C",
          "text": "Tizimli dasturlar"
        },
        {
          "id": "D",
          "text": "Drayverlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-578",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-579",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Brauzer"
        },
        {
          "id": "B",
          "text": "Drayver"
        },
        {
          "id": "C",
          "text": "Kompilyator"
        },
        {
          "id": "D",
          "text": "Arxivator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-580",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-581",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "Kesh"
        },
        {
          "id": "B",
          "text": "BIOS (Basic Input/Output System)"
        },
        {
          "id": "C",
          "text": "Windows"
        },
        {
          "id": "D",
          "text": "Dasturlash muhiti"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-582",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-583",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Optimizator"
        },
        {
          "id": "B",
          "text": "Operatsion sistema"
        },
        {
          "id": "C",
          "text": "Fayrvol"
        },
        {
          "id": "D",
          "text": "Antivirus dasturi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-584",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
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
      "explanation": "Nazariy asos: O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-585",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas (Konstanta)"
        },
        {
          "id": "B",
          "text": "Modul"
        },
        {
          "id": "C",
          "text": "Funksiya"
        },
        {
          "id": "D",
          "text": "O'zgaruvchi (Variable)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-586",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-587",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "Skalyar kattalik"
        },
        {
          "id": "B",
          "text": "Kompilyator"
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
      "explanation": "Nazariy asos: Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-588",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-589",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Shart operatori"
        },
        {
          "id": "B",
          "text": "Kutubxona"
        },
        {
          "id": "C",
          "text": "Tsikl"
        },
        {
          "id": "D",
          "text": "Funksiya (Function)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-590",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
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
      "explanation": "Nazariy asos: Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-591",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Rekursiya"
        },
        {
          "id": "B",
          "text": "Iteratsiya"
        },
        {
          "id": "C",
          "text": "Inkrement"
        },
        {
          "id": "D",
          "text": "Dekrement"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-592",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-593",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Assembler"
        },
        {
          "id": "B",
          "text": "Translyator"
        },
        {
          "id": "C",
          "text": "Interpretator"
        },
        {
          "id": "D",
          "text": "Kompilyator"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-594",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
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
      "explanation": "Nazariy asos: Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-595",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
      "options": [
        {
          "id": "A",
          "text": "Linker"
        },
        {
          "id": "B",
          "text": "Interpretator"
        },
        {
          "id": "C",
          "text": "Kompilyator"
        },
        {
          "id": "D",
          "text": "Dizassembler"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-596",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-597",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<table> tegi"
        },
        {
          "id": "B",
          "text": "<td> tegi"
        },
        {
          "id": "C",
          "text": "<tr> tegi"
        },
        {
          "id": "D",
          "text": "<th> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-598",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML jadvalida yangi satr (qator) hosil qiluvchi teg"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-599",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<col> tegi"
        },
        {
          "id": "B",
          "text": "<table> tegi"
        },
        {
          "id": "C",
          "text": "<td> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-600",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-601",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<caption> tegi"
        },
        {
          "id": "B",
          "text": "<tr> tegi"
        },
        {
          "id": "C",
          "text": "<th> tegi"
        },
        {
          "id": "D",
          "text": "<td> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-602",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-603",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<button> tegi"
        },
        {
          "id": "B",
          "text": "<textarea> tegi"
        },
        {
          "id": "C",
          "text": "<input> tegi"
        },
        {
          "id": "D",
          "text": "<form> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-604",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-605",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<label> tegi"
        },
        {
          "id": "B",
          "text": "<form> tegi"
        },
        {
          "id": "C",
          "text": "<select> tegi"
        },
        {
          "id": "D",
          "text": "<input> tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-606",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-607",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "CSS"
        },
        {
          "id": "B",
          "text": "JavaScript"
        },
        {
          "id": "C",
          "text": "HTML"
        },
        {
          "id": "D",
          "text": "SQL"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-608",
      "question": "DTM namunaviy informatika tahlili: Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "echo()"
        },
        {
          "id": "B",
          "text": "print()"
        },
        {
          "id": "C",
          "text": "write()"
        },
        {
          "id": "D",
          "text": "input()"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-609",
      "question": "DTM namunaviy informatika tahlili: Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "print()"
        },
        {
          "id": "B",
          "text": "scan()"
        },
        {
          "id": "C",
          "text": "input()"
        },
        {
          "id": "D",
          "text": "read()"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-610",
      "question": "DTM namunaviy informatika tahlili: Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
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
          "text": "def"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: if shart: ... elif ... else."
    },
    {
      "id": "informatika-611",
      "question": "DTM namunaviy informatika tahlili: Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "function"
        },
        {
          "id": "B",
          "text": "fun"
        },
        {
          "id": "C",
          "text": "def"
        },
        {
          "id": "D",
          "text": "proc"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-612",
      "question": "DTM namunaviy informatika tahlili: Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "def"
        },
        {
          "id": "B",
          "text": "for"
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
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: for i in range(...): tsikli."
    },
    {
      "id": "informatika-613",
      "question": "DTM namunaviy informatika tahlili: Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
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
          "text": "range"
        },
        {
          "id": "D",
          "text": "if"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: while shart: ... tsikli."
    },
    {
      "id": "informatika-614",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
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
          "text": "< > (burchakli qavslar)"
        },
        {
          "id": "D",
          "text": "[ ] (to'rtburchak qavslar)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-615",
      "question": "DTM namunaviy informatika tahlili: O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
      "options": [
        {
          "id": "A",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "B",
          "text": "| |"
        },
        {
          "id": "C",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "D",
          "text": "{ } (figurali qavslar)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-616",
      "question": "DTM namunaviy informatika tahlili: Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "(kalit; qiymat)"
        },
        {
          "id": "B",
          "text": "<kalit=qiymat>"
        },
        {
          "id": "C",
          "text": "{kalit: qiymat}"
        },
        {
          "id": "D",
          "text": "[kalit, qiymat]"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-617",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
      "options": [
        {
          "id": "A",
          "text": "length()"
        },
        {
          "id": "B",
          "text": "size()"
        },
        {
          "id": "C",
          "text": "len()"
        },
        {
          "id": "D",
          "text": "count()"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-618",
      "question": "DTM namunaviy informatika tahlili: Rastrli grafika nimaga asoslangan?",
      "options": [
        {
          "id": "A",
          "text": "Piksellar (nuqtalar) to'riga"
        },
        {
          "id": "B",
          "text": "Faqat matnlarga"
        },
        {
          "id": "C",
          "text": "Geometrik formulalar va chiziqlarga"
        },
        {
          "id": "D",
          "text": "Faqat tovush to'lqinlariga"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-619",
      "question": "DTM namunaviy informatika tahlili: Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "B",
          "text": "Hajmi doim juda katta bo'ladi"
        },
        {
          "id": "C",
          "text": "Faqat oq-qora bo'ladi"
        },
        {
          "id": "D",
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-620",
      "question": "DTM namunaviy informatika tahlili: RGB rang modelida asosiy ranglar qaysilar?",
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
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        },
        {
          "id": "D",
          "text": "Cyan, Magenta, Yellow"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-621",
      "question": "DTM namunaviy informatika tahlili: Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
      "options": [
        {
          "id": "A",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        },
        {
          "id": "B",
          "text": "HSB"
        },
        {
          "id": "C",
          "text": "Grayscale"
        },
        {
          "id": "D",
          "text": "RGB"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-622",
      "question": "DTM namunaviy informatika tahlili: Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat arxivlash"
        },
        {
          "id": "B",
          "text": "Faqat parol va login"
        },
        {
          "id": "C",
          "text": "Tezlik, hajm va rang"
        },
        {
          "id": "D",
          "text": "Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-623",
      "question": "DTM namunaviy informatika tahlili: Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Rangini o'zgartirish"
        },
        {
          "id": "B",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "C",
          "text": "Fayl formatini o'chirish"
        },
        {
          "id": "D",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-624",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Chrome, Firefox, Safari"
        },
        {
          "id": "B",
          "text": "Word, Excel, PowerPoint"
        },
        {
          "id": "C",
          "text": "Windows, Linux, macOS, Android"
        },
        {
          "id": "D",
          "text": "Python, C++, Java"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-625",
      "question": "DTM namunaviy informatika tahlili: Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts"
        },
        {
          "id": "B",
          "text": "Stiv Jobs"
        },
        {
          "id": "C",
          "text": "Dennis Ritchi"
        },
        {
          "id": "D",
          "text": "Linus Torvalds (1991-yilda)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-626",
      "question": "DTM namunaviy informatika tahlili: Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts va Pol Allen"
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
          "text": "Stiv Jobs va Voznyak"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-627",
      "question": "DTM namunaviy informatika tahlili: Apple kompaniyasining asoschilari kimlar?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts"
        },
        {
          "id": "B",
          "text": "Jeff Bezos"
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
      "explanation": "Nazariy asos: 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-628",
      "question": "DTM namunaviy informatika tahlili: Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
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
      "explanation": "Nazariy asos: 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-629",
      "question": "DTM namunaviy informatika tahlili: Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "32"
        },
        {
          "id": "B",
          "text": "8"
        },
        {
          "id": "C",
          "text": "4"
        },
        {
          "id": "D",
          "text": "16"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: 1 bayt = 8 bit."
    },
    {
      "id": "informatika-630",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira"
        },
        {
          "id": "B",
          "text": "Qattiq disk"
        },
        {
          "id": "C",
          "text": "Monitor"
        },
        {
          "id": "D",
          "text": "Protsessor"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-631",
      "question": "DTM namunaviy informatika tahlili: HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma’lumotlar bazasini boshqarish"
        },
        {
          "id": "B",
          "text": "Web sahifa tuzilmasini yaratish"
        },
        {
          "id": "C",
          "text": "Server tomonidagi logikani yozish"
        },
        {
          "id": "D",
          "text": "Mobil ilova ishlab chiqish"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-632",
      "question": "DTM namunaviy informatika tahlili: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "12"
        },
        {
          "id": "B",
          "text": "9"
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
      "explanation": "Nazariy asos: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-633",
      "question": "DTM namunaviy informatika tahlili: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1000 bayt"
        },
        {
          "id": "B",
          "text": "2048 bayt"
        },
        {
          "id": "C",
          "text": "512 bayt"
        },
        {
          "id": "D",
          "text": "1024 bayt"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-634",
      "question": "DTM namunaviy informatika tahlili: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "2048 KB"
        },
        {
          "id": "B",
          "text": "1024 bayt"
        },
        {
          "id": "C",
          "text": "1000 KB"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-635",
      "question": "DTM namunaviy informatika tahlili: 1 Gigabayt (GB) necha Megabaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 KB"
        },
        {
          "id": "B",
          "text": "1024 MB"
        },
        {
          "id": "C",
          "text": "1000 MB"
        },
        {
          "id": "D",
          "text": "4096 MB"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 GB = 1024 MB."
    },
    {
      "id": "informatika-636",
      "question": "DTM namunaviy informatika tahlili: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
      "options": [
        {
          "id": "A",
          "text": "4 bit"
        },
        {
          "id": "B",
          "text": "2 bayt"
        },
        {
          "id": "C",
          "text": "16 bit"
        },
        {
          "id": "D",
          "text": "1 bayt (8 bit)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-637",
      "question": "DTM namunaviy informatika tahlili: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "1 bayt"
        },
        {
          "id": "B",
          "text": "4 bayt"
        },
        {
          "id": "C",
          "text": "2 bayt (16 bit)"
        },
        {
          "id": "D",
          "text": "8 bit"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-638",
      "question": "DTM namunaviy informatika tahlili: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "I = m · v"
        },
        {
          "id": "B",
          "text": "N = log₂i"
        },
        {
          "id": "C",
          "text": "N = 2^i"
        },
        {
          "id": "D",
          "text": "I = 2^N"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-639",
      "question": "DTM namunaviy informatika tahlili: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "B",
          "text": "X, Y, Z, W, P, Q"
        },
        {
          "id": "C",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        },
        {
          "id": "D",
          "text": "K, L, M, N, O, P"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-640",
      "question": "DTM namunaviy informatika tahlili: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "7"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "15"
        },
        {
          "id": "D",
          "text": "14"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-641",
      "question": "DTM namunaviy informatika tahlili: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "100000"
        },
        {
          "id": "B",
          "text": "1000"
        },
        {
          "id": "C",
          "text": "1111"
        },
        {
          "id": "D",
          "text": "10000"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-642",
      "question": "DTM namunaviy informatika tahlili: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
      "options": [
        {
          "id": "A",
          "text": "9"
        },
        {
          "id": "B",
          "text": "7"
        },
        {
          "id": "C",
          "text": "8"
        },
        {
          "id": "D",
          "text": "F"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-643",
      "question": "DTM namunaviy informatika tahlili: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
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
          "text": "16"
        },
        {
          "id": "D",
          "text": "24"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-644",
      "question": "DTM namunaviy informatika tahlili: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Fleshka"
        },
        {
          "id": "B",
          "text": "Qattiq disk (HDD/SSD)"
        },
        {
          "id": "C",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-645",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "B",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        },
        {
          "id": "C",
          "text": "O'yinlar"
        },
        {
          "id": "D",
          "text": "Faqat foydalanuvchi fayllari"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-646",
      "question": "DTM namunaviy informatika tahlili: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Elektr toki beradi"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
        },
        {
          "id": "C",
          "text": "Grafik tasvirlarni chizadi"
        },
        {
          "id": "D",
          "text": "Uzoq muddat fayllarni saqlaydi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-647",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "Qattiq disk (HDD)"
        },
        {
          "id": "C",
          "text": "Kesh xotira"
        },
        {
          "id": "D",
          "text": "Registr"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-648",
      "question": "DTM namunaviy informatika tahlili: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "FDD"
        },
        {
          "id": "B",
          "text": "SSD (Solid State Drive)"
        },
        {
          "id": "C",
          "text": "DVD-RW"
        },
        {
          "id": "D",
          "text": "CD-ROM"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-649",
      "question": "DTM namunaviy informatika tahlili: Taktli chastotaning o'lchov birligi nima?",
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
          "text": "Gers (Gs, MGs, GGs)"
        },
        {
          "id": "D",
          "text": "Bayt"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-650",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
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
      "explanation": "Nazariy asos: Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-651",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Skaner"
        },
        {
          "id": "B",
          "text": "Mikrofon"
        },
        {
          "id": "C",
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Klaviatura"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-652",
      "question": "DTM namunaviy informatika tahlili: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
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
      "explanation": "Nazariy asos: Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-653",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "C",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        },
        {
          "id": "D",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-654",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Hech qachon"
        },
        {
          "id": "B",
          "text": "Ikkalasi chin bo'lganda"
        },
        {
          "id": "C",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        },
        {
          "id": "D",
          "text": "Biri chin bo'lganda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-655",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        },
        {
          "id": "B",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "C",
          "text": "Ikkita sonni qo'shadi"
        },
        {
          "id": "D",
          "text": "Sonni nolga tenglashtiradi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-656",
      "question": "DTM namunaviy informatika tahlili: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Ranglilik va hajm"
        },
        {
          "id": "B",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        },
        {
          "id": "C",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "D",
          "text": "Faqat qisqalik va tezlik"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-657",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "Parallelogramm"
        },
        {
          "id": "C",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "D",
          "text": "Oval"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-658",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
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
          "text": "Doira"
        },
        {
          "id": "D",
          "text": "Parallelogramm"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-659",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "Trapetsiya"
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
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-660",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Kvadrat"
        },
        {
          "id": "B",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "C",
          "text": "Oval (ellips)"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-661",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
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
      "explanation": "Nazariy asos: Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-662",
      "question": "DTM namunaviy informatika tahlili: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "%"
        },
        {
          "id": "B",
          "text": "**"
        },
        {
          "id": "C",
          "text": "/"
        },
        {
          "id": "D",
          "text": "//"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-663",
      "question": "DTM namunaviy informatika tahlili: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "^"
        },
        {
          "id": "B",
          "text": "pow"
        },
        {
          "id": "C",
          "text": "//"
        },
        {
          "id": "D",
          "text": "**"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-664",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "float"
        },
        {
          "id": "B",
          "text": "int"
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
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: int - integer (butun son)."
    },
    {
      "id": "informatika-665",
      "question": "DTM namunaviy informatika tahlili: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "list"
        },
        {
          "id": "B",
          "text": "char"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-666",
      "question": "DTM namunaviy informatika tahlili: Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "bool"
        },
        {
          "id": "C",
          "text": "str (string)"
        },
        {
          "id": "D",
          "text": "dict"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-667",
      "question": "DTM namunaviy informatika tahlili: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<href>"
        },
        {
          "id": "B",
          "text": "<link>"
        },
        {
          "id": "C",
          "text": "<url>"
        },
        {
          "id": "D",
          "text": "<a>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-668",
      "question": "DTM namunaviy informatika tahlili: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<src>"
        },
        {
          "id": "B",
          "text": "<img>"
        },
        {
          "id": "C",
          "text": "<picture>"
        },
        {
          "id": "D",
          "text": "<image>"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: <img src='...' alt='...'>."
    },
    {
      "id": "informatika-669",
      "question": "DTM namunaviy informatika tahlili: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<title>"
        },
        {
          "id": "B",
          "text": "<header>"
        },
        {
          "id": "C",
          "text": "<h6>"
        },
        {
          "id": "D",
          "text": "<h1>"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-670",
      "question": "DTM namunaviy informatika tahlili: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<ul>"
        },
        {
          "id": "B",
          "text": "<li>"
        },
        {
          "id": "C",
          "text": "<dl>"
        },
        {
          "id": "D",
          "text": "<ol>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-671",
      "question": "DTM namunaviy informatika tahlili: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasini tuzish"
        },
        {
          "id": "B",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "C",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        },
        {
          "id": "D",
          "text": "Server logikasini yozish"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-672",
      "question": "DTM namunaviy informatika tahlili: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "6 bayt"
        },
        {
          "id": "B",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        },
        {
          "id": "C",
          "text": "8 bayt"
        },
        {
          "id": "D",
          "text": "16 bayt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-673",
      "question": "DTM namunaviy informatika tahlili: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Elektron xat jo'natish"
        },
        {
          "id": "B",
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        },
        {
          "id": "C",
          "text": "Parollarni saqlash"
        },
        {
          "id": "D",
          "text": "Fayllarni yuklash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-674",
      "question": "DTM namunaviy informatika tahlili: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "IP-manzil"
        },
        {
          "id": "B",
          "text": "Port"
        },
        {
          "id": "C",
          "text": "URL"
        },
        {
          "id": "D",
          "text": "MAC-manzil"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-675",
      "question": "DTM namunaviy informatika tahlili: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "FTP"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "POP3"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-676",
      "question": "DTM namunaviy informatika tahlili: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "IMAP"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "POP3"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-677",
      "question": "DTM namunaviy informatika tahlili: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
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
          "text": "Faqat daraxtsimon shaklda"
        },
        {
          "id": "D",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-678",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kalit"
        },
        {
          "id": "B",
          "text": "Indeks"
        },
        {
          "id": "C",
          "text": "Maydon (atribut)"
        },
        {
          "id": "D",
          "text": "Yozuv (kortej / record)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-679",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "B",
          "text": "Katastrofa"
        },
        {
          "id": "C",
          "text": "Jadval"
        },
        {
          "id": "D",
          "text": "Yozuv"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-680",
      "question": "DTM namunaviy informatika tahlili: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "B",
          "text": "Indeks"
        },
        {
          "id": "C",
          "text": "Filtr"
        },
        {
          "id": "D",
          "text": "Tashqi kalit"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-681",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-682",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira"
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU)"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-683",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-684",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "B",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "C",
          "text": "Kesh-xotira"
        },
        {
          "id": "D",
          "text": "SSD"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-685",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-686",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Strimmer"
        },
        {
          "id": "B",
          "text": "RAM"
        },
        {
          "id": "C",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "D",
          "text": "Fleshka"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-687",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-688",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Vinchester"
        },
        {
          "id": "B",
          "text": "Optik disk"
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
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-689",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-690",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq kartasi"
        },
        {
          "id": "B",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "C",
          "text": "Ovoz kartasi"
        },
        {
          "id": "D",
          "text": "Chipset"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-691",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-692",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Ona plata (Motherboard)"
        },
        {
          "id": "B",
          "text": "Shina"
        },
        {
          "id": "C",
          "text": "Kuler"
        },
        {
          "id": "D",
          "text": "Quvvat bloki"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-693",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-694",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "B",
          "text": "Invertor"
        },
        {
          "id": "C",
          "text": "Kondensator"
        },
        {
          "id": "D",
          "text": "Stabilizator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-695",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
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
      "explanation": "Nazariy asos: HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-696",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "HTTP / HTTPS"
        },
        {
          "id": "B",
          "text": "SMTP"
        },
        {
          "id": "C",
          "text": "FTP"
        },
        {
          "id": "D",
          "text": "DHCP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-697",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-698",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "FTP (File Transfer Protocol)"
        },
        {
          "id": "B",
          "text": "TELNET"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "DNS"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-699",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-700",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "IMAP"
        },
        {
          "id": "C",
          "text": "SNMP"
        },
        {
          "id": "D",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-701",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
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
      "explanation": "Nazariy asos: POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-702",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "SMTP"
        },
        {
          "id": "B",
          "text": "POP3 va IMAP"
        },
        {
          "id": "C",
          "text": "FTP"
        },
        {
          "id": "D",
          "text": "HTTP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-703",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
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
      "explanation": "Nazariy asos: DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-704",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "ICMP"
        },
        {
          "id": "B",
          "text": "DNS"
        },
        {
          "id": "C",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "D",
          "text": "ARP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-705",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-706",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil"
        },
        {
          "id": "B",
          "text": "Domen nomi"
        },
        {
          "id": "C",
          "text": "Port"
        },
        {
          "id": "D",
          "text": "IP manzil"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-707",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-708",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil"
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
          "text": "Domen"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-709",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
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
      "explanation": "Nazariy asos: Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-710",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Xab (Hub)"
        },
        {
          "id": "B",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "C",
          "text": "Marshrutizator (Router)"
        },
        {
          "id": "D",
          "text": "Repiter"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-711",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
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
      "explanation": "Nazariy asos: Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-712",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Modem"
        },
        {
          "id": "B",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "C",
          "text": "Xab"
        },
        {
          "id": "D",
          "text": "Server"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-713",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
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
      "explanation": "Nazariy asos: .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-714",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".pptx"
        },
        {
          "id": "B",
          "text": ".xlsx"
        },
        {
          "id": "C",
          "text": ".accdb"
        },
        {
          "id": "D",
          "text": ".docx / .doc"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-715",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-716",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".pdf"
        },
        {
          "id": "B",
          "text": ".xlsx / .xls"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".txt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-717",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
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
      "explanation": "Nazariy asos: .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-718",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4"
        },
        {
          "id": "B",
          "text": ".docx"
        },
        {
          "id": "C",
          "text": ".pptx / .ppt"
        },
        {
          "id": "D",
          "text": ".xlsx"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-719",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
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
      "explanation": "Nazariy asos: .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-720",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".py"
        },
        {
          "id": "B",
          "text": ".css"
        },
        {
          "id": "C",
          "text": ".html / .htm"
        },
        {
          "id": "D",
          "text": ".js"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-721",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-722",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
      "options": [
        {
          "id": "A",
          "text": ".png"
        },
        {
          "id": "B",
          "text": ".mp3 / .wav"
        },
        {
          "id": "C",
          "text": ".jpg"
        },
        {
          "id": "D",
          "text": ".mp4"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-723",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli video fayllari kengaytmasi"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-724",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp3"
        },
        {
          "id": "B",
          "text": ".exe"
        },
        {
          "id": "C",
          "text": ".gif"
        },
        {
          "id": "D",
          "text": ".mp4 / .avi / .mkv"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-725",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-726",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".zip"
        },
        {
          "id": "B",
          "text": ".mp3"
        },
        {
          "id": "C",
          "text": ".docx"
        },
        {
          "id": "D",
          "text": ".jpg / .png / .svg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-727",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-728",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".exe"
        },
        {
          "id": "B",
          "text": ".iso"
        },
        {
          "id": "C",
          "text": ".bat"
        },
        {
          "id": "D",
          "text": ".zip / .rar / .7z"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-729",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
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
      "explanation": "Nazariy asos: .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-730",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".exe / .msi"
        },
        {
          "id": "B",
          "text": ".dll"
        },
        {
          "id": "C",
          "text": ".sys"
        },
        {
          "id": "D",
          "text": ".txt"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-731",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-732",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "Tizimli dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "O'yinlar"
        },
        {
          "id": "C",
          "text": "Uskunaviy vositalar"
        },
        {
          "id": "D",
          "text": "Amaliy dasturiy ta'minot"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-733",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-734",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "Drayverlar"
        },
        {
          "id": "B",
          "text": "BIOS"
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
      "explanation": "Nazariy asos: Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-735",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-736",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Drayver"
        },
        {
          "id": "C",
          "text": "Arxivator"
        },
        {
          "id": "D",
          "text": "Brauzer"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-737",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
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
      "explanation": "Nazariy asos: BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-738",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "Kesh"
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
          "text": "Dasturlash muhiti"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-739",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-740",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Fayrvol"
        },
        {
          "id": "B",
          "text": "Antivirus dasturi"
        },
        {
          "id": "C",
          "text": "Operatsion sistema"
        },
        {
          "id": "D",
          "text": "Optimizator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-741",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
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
      "explanation": "Nazariy asos: O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-742",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
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
          "text": "Funksiya"
        },
        {
          "id": "D",
          "text": "O'zgarmas (Konstanta)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-743",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
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
      "explanation": "Nazariy asos: Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-744",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "Massiv (Ro'yxat / List)"
        },
        {
          "id": "B",
          "text": "Skalyar kattalik"
        },
        {
          "id": "C",
          "text": "Kompilyator"
        },
        {
          "id": "D",
          "text": "O'zgaruvchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-745",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
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
      "explanation": "Nazariy asos: Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-746",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Funksiya (Function)"
        },
        {
          "id": "B",
          "text": "Tsikl"
        },
        {
          "id": "C",
          "text": "Shart operatori"
        },
        {
          "id": "D",
          "text": "Kutubxona"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-747",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-748",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Inkrement"
        },
        {
          "id": "B",
          "text": "Dekrement"
        },
        {
          "id": "C",
          "text": "Iteratsiya"
        },
        {
          "id": "D",
          "text": "Rekursiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-749",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
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
      "explanation": "Nazariy asos: Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-750",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Assembler"
        },
        {
          "id": "B",
          "text": "Kompilyator"
        },
        {
          "id": "C",
          "text": "Interpretator"
        },
        {
          "id": "D",
          "text": "Translyator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-751",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
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
      "explanation": "Nazariy asos: Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-752",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Interpretator"
        },
        {
          "id": "C",
          "text": "Linker"
        },
        {
          "id": "D",
          "text": "Dizassembler"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-753",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-754",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<th> tegi"
        },
        {
          "id": "B",
          "text": "<td> tegi"
        },
        {
          "id": "C",
          "text": "<table> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-755",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-756",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
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
          "text": "<col> tegi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-757",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
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
      "explanation": "Nazariy asos: <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-758",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<tr> tegi"
        },
        {
          "id": "B",
          "text": "<caption> tegi"
        },
        {
          "id": "C",
          "text": "<td> tegi"
        },
        {
          "id": "D",
          "text": "<th> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-759",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-760",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<input> tegi"
        },
        {
          "id": "B",
          "text": "<button> tegi"
        },
        {
          "id": "C",
          "text": "<form> tegi"
        },
        {
          "id": "D",
          "text": "<textarea> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-761",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
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
      "explanation": "Nazariy asos: <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-762",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<input> tegi"
        },
        {
          "id": "B",
          "text": "<form> tegi"
        },
        {
          "id": "C",
          "text": "<label> tegi"
        },
        {
          "id": "D",
          "text": "<select> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-763",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-764",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "CSS"
        },
        {
          "id": "B",
          "text": "JavaScript"
        },
        {
          "id": "C",
          "text": "SQL"
        },
        {
          "id": "D",
          "text": "HTML"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-765",
      "question": "DTM namunaviy informatika tahlili: Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "print()"
        },
        {
          "id": "B",
          "text": "write()"
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
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-766",
      "question": "DTM namunaviy informatika tahlili: Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "input()"
        },
        {
          "id": "B",
          "text": "scan()"
        },
        {
          "id": "C",
          "text": "print()"
        },
        {
          "id": "D",
          "text": "read()"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-767",
      "question": "DTM namunaviy informatika tahlili: Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
      "options": [
        {
          "id": "A",
          "text": "while"
        },
        {
          "id": "B",
          "text": "if"
        },
        {
          "id": "C",
          "text": "def"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: if shart: ... elif ... else."
    },
    {
      "id": "informatika-768",
      "question": "DTM namunaviy informatika tahlili: Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "fun"
        },
        {
          "id": "B",
          "text": "proc"
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
      "explanation": "Nazariy asos: def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-769",
      "question": "DTM namunaviy informatika tahlili: Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "def"
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
          "text": "switch"

        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: for i in range(...): tsikli."
    },
    {
      "id": "informatika-770",
      "question": "DTM namunaviy informatika tahlili: Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
      "options": [
        {
          "id": "A",
          "text": "range"
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
          "text": "while"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: while shart: ... tsikli."
    },
    {
      "id": "informatika-771",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "B",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "C",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "D",
          "text": "< > (burchakli qavslar)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-772",
      "question": "DTM namunaviy informatika tahlili: O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
      "options": [
        {
          "id": "A",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "B",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "C",
          "text": "| |"
        },
        {
          "id": "D",
          "text": "{ } (figurali qavslar)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-773",
      "question": "DTM namunaviy informatika tahlili: Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "[kalit, qiymat]"
        },
        {
          "id": "B",
          "text": "{kalit: qiymat}"
        },
        {
          "id": "C",
          "text": "<kalit=qiymat>"
        },
        {
          "id": "D",
          "text": "(kalit; qiymat)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-774",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
      "options": [
        {
          "id": "A",
          "text": "count()"
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
          "text": "length()"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-775",
      "question": "DTM namunaviy informatika tahlili: Rastrli grafika nimaga asoslangan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat tovush to'lqinlariga"
        },
        {
          "id": "B",
          "text": "Piksellar (nuqtalar) to'riga"
        },
        {
          "id": "C",
          "text": "Faqat matnlarga"
        },
        {
          "id": "D",
          "text": "Geometrik formulalar va chiziqlarga"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-776",
      "question": "DTM namunaviy informatika tahlili: Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "B",
          "text": "Faqat oq-qora bo'ladi"
        },
        {
          "id": "C",
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        },
        {
          "id": "D",
          "text": "Hajmi doim juda katta bo'ladi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-777",
      "question": "DTM namunaviy informatika tahlili: RGB rang modelida asosiy ranglar qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Cyan, Magenta, Yellow"
        },
        {
          "id": "B",
          "text": "Rose, Grey, Brown"
        },
        {
          "id": "C",
          "text": "Red, Green, Black"
        },
        {
          "id": "D",
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-778",
      "question": "DTM namunaviy informatika tahlili: Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Grayscale"
        },
        {
          "id": "B",
          "text": "HSB"
        },
        {
          "id": "C",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        },
        {
          "id": "D",
          "text": "RGB"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-779",
      "question": "DTM namunaviy informatika tahlili: Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)"
        },
        {
          "id": "B",
          "text": "Faqat parol va login"
        },
        {
          "id": "C",
          "text": "Tezlik, hajm va rang"
        },
        {
          "id": "D",
          "text": "Faqat arxivlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-780",
      "question": "DTM namunaviy informatika tahlili: Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Rangini o'zgartirish"
        },
        {
          "id": "B",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
        },
        {
          "id": "C",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "D",
          "text": "Fayl formatini o'chirish"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-781",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Windows, Linux, macOS, Android"
        },
        {
          "id": "B",
          "text": "Python, C++, Java"
        },
        {
          "id": "C",
          "text": "Word, Excel, PowerPoint"
        },
        {
          "id": "D",
          "text": "Chrome, Firefox, Safari"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-782",
      "question": "DTM namunaviy informatika tahlili: Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
      "options": [
        {
          "id": "A",
          "text": "Linus Torvalds (1991-yilda)"
        },
        {
          "id": "B",
          "text": "Stiv Jobs"
        },
        {
          "id": "C",
          "text": "Bill Geyts"
        },
        {
          "id": "D",
          "text": "Dennis Ritchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-783",
      "question": "DTM namunaviy informatika tahlili: Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts va Pol Allen"
        },
        {
          "id": "B",
          "text": "Ilon Mask"
        },
        {
          "id": "C",
          "text": "Stiv Jobs va Voznyak"
        },
        {
          "id": "D",
          "text": "Mark Sukerberg"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-784",
      "question": "DTM namunaviy informatika tahlili: Apple kompaniyasining asoschilari kimlar?",
      "options": [
        {
          "id": "A",
          "text": "Sergey Brin"
        },
        {
          "id": "B",
          "text": "Stiv Jobs va Stiv Voznyak"
        },
        {
          "id": "C",
          "text": "Bill Geyts"
        },
        {
          "id": "D",
          "text": "Jeff Bezos"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-785",
      "question": "DTM namunaviy informatika tahlili: Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
      "options": [
        {
          "id": "A",
          "text": "Larri Peyj va Sergey Brin"
        },
        {
          "id": "B",
          "text": "Jek Ma"
        },
        {
          "id": "C",
          "text": "Bill Geyts"
        },
        {
          "id": "D",
          "text": "Pavel Durov"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-786",
      "question": "DTM namunaviy informatika tahlili: Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "4"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "32"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 1 bayt = 8 bit."
    },
    {
      "id": "informatika-787",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk"
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
          "text": "Operativ xotira"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-788",
      "question": "DTM namunaviy informatika tahlili: HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Server tomonidagi logikani yozish"
        },
        {
          "id": "B",
          "text": "Mobil ilova ishlab chiqish"
        },
        {
          "id": "C",
          "text": "Web sahifa tuzilmasini yaratish"
        },
        {
          "id": "D",
          "text": "Ma’lumotlar bazasini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-789",
      "question": "DTM namunaviy informatika tahlili: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "8"
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
      "correct": "A",
      "xp": 300,
      "explanation": "Nazariy asos: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-790",
      "question": "DTM namunaviy informatika tahlili: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "512 bayt"
        },
        {
          "id": "B",
          "text": "1000 bayt"
        },
        {
          "id": "C",
          "text": "2048 bayt"
        },
        {
          "id": "D",
          "text": "1024 bayt"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-791",
      "question": "DTM namunaviy informatika tahlili: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1000 KB"
        },
        {
          "id": "B",
          "text": "1024 KB"
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
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-792",
      "question": "DTM namunaviy informatika tahlili: 1 Gigabayt (GB) necha Megabaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1024 MB"
        },
        {
          "id": "B",
          "text": "1024 KB"
        },
        {
          "id": "C",
          "text": "1000 MB"
        },
        {
          "id": "D",
          "text": "4096 MB"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 GB = 1024 MB."
    },
    {
      "id": "informatika-793",
      "question": "DTM namunaviy informatika tahlili: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
      "options": [
        {
          "id": "A",
          "text": "16 bit"
        },
        {
          "id": "B",
          "text": "4 bit"
        },
        {
          "id": "C",
          "text": "2 bayt"
        },
        {
          "id": "D",
          "text": "1 bayt (8 bit)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-794",
      "question": "DTM namunaviy informatika tahlili: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "4 bayt"
        },
        {
          "id": "B",
          "text": "8 bit"
        },
        {
          "id": "C",
          "text": "1 bayt"
        },
        {
          "id": "D",
          "text": "2 bayt (16 bit)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-795",
      "question": "DTM namunaviy informatika tahlili: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "I = m · v"
        },
        {
          "id": "B",
          "text": "I = 2^N"
        },
        {
          "id": "C",
          "text": "N = 2^i"
        },
        {
          "id": "D",
          "text": "N = log₂i"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-796",
      "question": "DTM namunaviy informatika tahlili: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "K, L, M, N, O, P"
        },
        {
          "id": "B",
          "text": "X, Y, Z, W, P, Q"
        },
        {
          "id": "C",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "D",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-797",
      "question": "DTM namunaviy informatika tahlili: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "14"
        },
        {
          "id": "B",
          "text": "7"
        },
        {
          "id": "C",
          "text": "16"
        },
        {
          "id": "D",
          "text": "15"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-798",
      "question": "DTM namunaviy informatika tahlili: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "10000"
        },
        {
          "id": "B",
          "text": "100000"
        },
        {
          "id": "C",
          "text": "1000"
        },
        {
          "id": "D",
          "text": "1111"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-799",
      "question": "DTM namunaviy informatika tahlili: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
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
          "text": "8"
        },
        {
          "id": "D",
          "text": "9"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-800",
      "question": "DTM namunaviy informatika tahlili: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "26"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "24"
        },
        {
          "id": "D",
          "text": "10"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-801",
      "question": "DTM namunaviy informatika tahlili: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk (HDD/SSD)"
        },
        {
          "id": "B",
          "text": "Fleshka"
        },
        {
          "id": "C",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-802",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "O'yinlar"
        },
        {
          "id": "B",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        },
        {
          "id": "C",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "D",
          "text": "Faqat foydalanuvchi fayllari"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-803",
      "question": "DTM namunaviy informatika tahlili: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
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
          "text": "Grafik tasvirlarni chizadi"
        },
        {
          "id": "D",
          "text": "Elektr toki beradi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-804",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Registr"
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
          "text": "Qattiq disk (HDD)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-805",
      "question": "DTM namunaviy informatika tahlili: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "CD-ROM"
        },
        {
          "id": "B",
          "text": "FDD"
        },
        {
          "id": "C",
          "text": "DVD-RW"
        },
        {
          "id": "D",
          "text": "SSD (Solid State Drive)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-806",
      "question": "DTM namunaviy informatika tahlili: Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "BPS"
        },
        {
          "id": "B",
          "text": "Bayt"
        },
        {
          "id": "C",
          "text": "Gers (Gs, MGs, GGs)"
        },
        {
          "id": "D",
          "text": "Vatt"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-807",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Plotter"
        },
        {
          "id": "B",
          "text": "Monitor"
        },
        {
          "id": "C",
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Skaner"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-808",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
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
          "text": "Klaviatura"
        },
        {
          "id": "D",
          "text": "Mikrofon"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-809",
      "question": "DTM namunaviy informatika tahlili: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Printer"
        },
        {
          "id": "B",
          "text": "Plotter (grafik yasagich)"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-810",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "C",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        },
        {
          "id": "D",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-811",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Biri chin bo'lganda"
        },
        {
          "id": "B",
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        },
        {
          "id": "C",
          "text": "Hech qachon"
        },
        {
          "id": "D",
          "text": "Ikkalasi chin bo'lganda"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-812",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        },
        {
          "id": "B",
          "text": "Ikkita sonni qo'shadi"
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
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-813",
      "question": "DTM namunaviy informatika tahlili: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "B",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        },
        {
          "id": "C",
          "text": "Faqat qisqalik va tezlik"
        },
        {
          "id": "D",
          "text": "Ranglilik va hajm"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-814",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "B",
          "text": "Oval"
        },
        {
          "id": "C",
          "text": "Parallelogramm"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-815",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
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
          "text": "Doira"
        },
        {
          "id": "D",
          "text": "Parallelogramm"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-816",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "C",
          "text": "Oval"
        },
        {
          "id": "D",
          "text": "Trapetsiya"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-817",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "Kvadrat"
        },
        {
          "id": "C",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "D",
          "text": "Oval (ellips)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-818",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
      "options": [
        {
          "id": "A",
          "text": "//"
        },
        {
          "id": "B",
          "text": "/"
        },
        {
          "id": "C",
          "text": "**"
        },
        {
          "id": "D",
          "text": "%"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-819",
      "question": "DTM namunaviy informatika tahlili: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
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
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-820",
      "question": "DTM namunaviy informatika tahlili: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "pow"
        },
        {
          "id": "B",
          "text": "//"
        },
        {
          "id": "C",
          "text": "^"
        },
        {
          "id": "D",
          "text": "**"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-821",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "str"
        },
        {
          "id": "B",
          "text": "bool"
        },
        {
          "id": "C",
          "text": "int"
        },
        {
          "id": "D",
          "text": "float"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: int - integer (butun son)."
    },
    {
      "id": "informatika-822",
      "question": "DTM namunaviy informatika tahlili: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "list"
        },
        {
          "id": "C",
          "text": "char"
        },
        {
          "id": "D",
          "text": "float"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-823",
      "question": "DTM namunaviy informatika tahlili: Satrli (matnli) ma'lumot turi qanday ataladi?",
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
          "text": "dict"
        },
        {
          "id": "D",
          "text": "bool"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-824",
      "question": "DTM namunaviy informatika tahlili: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<link>"
        },
        {
          "id": "B",
          "text": "<url>"
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
      "explanation": "Nazariy asos: <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-825",
      "question": "DTM namunaviy informatika tahlili: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<picture>"
        },
        {
          "id": "B",
          "text": "<src>"
        },
        {
          "id": "C",
          "text": "<image>"
        },
        {
          "id": "D",
          "text": "<img>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: <img src='...' alt='...'>."
    },
    {
      "id": "informatika-826",
      "question": "DTM namunaviy informatika tahlili: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<h6>"
        },
        {
          "id": "B",
          "text": "<h1>"
        },
        {
          "id": "C",
          "text": "<header>"
        },
        {
          "id": "D",
          "text": "<title>"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-827",
      "question": "DTM namunaviy informatika tahlili: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<li>"
        },
        {
          "id": "B",
          "text": "<dl>"
        },
        {
          "id": "C",
          "text": "<ul>"
        },
        {
          "id": "D",
          "text": "<ol>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-828",
      "question": "DTM namunaviy informatika tahlili: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "B",
          "text": "Server logikasini yozish"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasini tuzish"
        },
        {
          "id": "D",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-829",
      "question": "DTM namunaviy informatika tahlili: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "6 bayt"
        },
        {
          "id": "B",
          "text": "4 bayt (32 bit, masalan: 192.168.1.1)"
        },
        {
          "id": "C",
          "text": "16 bayt"
        },
        {
          "id": "D",
          "text": "8 bayt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-830",
      "question": "DTM namunaviy informatika tahlili: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Elektron xat jo'natish"
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
          "text": "Parollarni saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-831",
      "question": "DTM namunaviy informatika tahlili: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Port"
        },
        {
          "id": "B",
          "text": "IP-manzil"
        },
        {
          "id": "C",
          "text": "URL"
        },
        {
          "id": "D",
          "text": "MAC-manzil"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-832",
      "question": "DTM namunaviy informatika tahlili: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "FTP"
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
          "text": "SMTP"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-833",
      "question": "DTM namunaviy informatika tahlili: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "IMAP"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "POP3"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-834",
      "question": "DTM namunaviy informatika tahlili: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoq shaklida"
        },
        {
          "id": "B",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        },
        {
          "id": "C",
          "text": "Faqat daraxtsimon shaklda"
        },
        {
          "id": "D",
          "text": "Faqat bitta matnli faylda"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-835",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Indeks"
        },
        {
          "id": "B",
          "text": "Kalit"
        },
        {
          "id": "C",
          "text": "Maydon (atribut)"
        },
        {
          "id": "D",
          "text": "Yozuv (kortej / record)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-836",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Jadval"
        },
        {
          "id": "B",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "C",
          "text": "Yozuv"
        },
        {
          "id": "D",
          "text": "Katastrofa"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-837",
      "question": "DTM namunaviy informatika tahlili: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
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
      "explanation": "Nazariy asos: Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-838",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-839",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk"
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
          "text": "Operativ xotira"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-840",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-841",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "C",
          "text": "Kesh-xotira"
        },
        {
          "id": "D",
          "text": "SSD"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-842",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-843",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
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
      "explanation": "Nazariy asos: Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-844",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-845",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
      "options": [
        {
          "id": "A",
          "text": "Magnit lenta"
        },
        {
          "id": "B",
          "text": "Optik disk"
        },
        {
          "id": "C",
          "text": "Vinchester"
        },
        {
          "id": "D",
          "text": "Kesh-xotira (Cache)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-846",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-847",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?",
      "options": [
        {
          "id": "A",
          "text": "Videokarta (GPU)"
        },
        {
          "id": "B",
          "text": "Chipset"
        },
        {
          "id": "C",
          "text": "Ovoz kartasi"
        },
        {
          "id": "D",
          "text": "Tarmoq kartasi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-848",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-849",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?",
      "options": [
        {
          "id": "A",
          "text": "Kuler"
        },
        {
          "id": "B",
          "text": "Quvvat bloki"
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
      "explanation": "Nazariy asos: Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-850",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-851",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Kondensator"
        },
        {
          "id": "B",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "C",
          "text": "Invertor"
        },
        {
          "id": "D",
          "text": "Stabilizator"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-852",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-853",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "DHCP"
        },
        {
          "id": "B",
          "text": "HTTP / HTTPS"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-854",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-855",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "TELNET"
        },
        {
          "id": "C",
          "text": "DNS"
        },
        {
          "id": "D",
          "text": "FTP (File Transfer Protocol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-856",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-857",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?",
      "options": [
        {
          "id": "A",
          "text": "SNMP"
        },
        {
          "id": "B",
          "text": "POP3"
        },
        {
          "id": "C",
          "text": "SMTP (Simple Mail Transfer Protocol)"
        },
        {
          "id": "D",
          "text": "IMAP"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-858",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-859",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "POP3 va IMAP"
        },
        {
          "id": "B",
          "text": "HTTP"
        },
        {
          "id": "C",
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "FTP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-860",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
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
      "explanation": "Nazariy asos: DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-861",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "B",
          "text": "ICMP"
        },
        {
          "id": "C",
          "text": "DNS"
        },
        {
          "id": "D",
          "text": "ARP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-862",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
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
      "explanation": "Nazariy asos: IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-863",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
      "options": [
        {
          "id": "A",
          "text": "Domen nomi"
        },
        {
          "id": "B",
          "text": "MAC manzil"
        },
        {
          "id": "C",
          "text": "IP manzil"
        },
        {
          "id": "D",
          "text": "Port"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-864",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-865",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil"
        },
        {
          "id": "B",
          "text": "IP manzil"
        },
        {
          "id": "C",
          "text": "Shlyuz"
        },
        {
          "id": "D",
          "text": "Domen"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-866",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-867",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Repiter"
        },
        {
          "id": "B",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "C",
          "text": "Marshrutizator (Router)"
        },
        {
          "id": "D",
          "text": "Xab (Hub)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-868",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-869",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
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
          "text": "Kommutator (Switch)"
        },
        {
          "id": "D",
          "text": "Server"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-870",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-871",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx"
        },
        {
          "id": "B",
          "text": ".pptx"
        },
        {
          "id": "C",
          "text": ".docx / .doc"
        },
        {
          "id": "D",
          "text": ".accdb"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-872",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft Excel elektron jadvali fayl kengaytmasi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-873",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".docx"
        },
        {
          "id": "B",
          "text": ".txt"
        },
        {
          "id": "C",
          "text": ".pdf"
        },
        {
          "id": "D",
          "text": ".xlsx / .xls"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-874",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-875",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".mp4"
        },
        {
          "id": "B",
          "text": ".docx"
        },
        {
          "id": "C",
          "text": ".xlsx"
        },
        {
          "id": "D",
          "text": ".pptx / .ppt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-876",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
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
      "explanation": "Nazariy asos: .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-877",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".css"
        },
        {
          "id": "B",
          "text": ".py"
        },
        {
          "id": "C",
          "text": ".html / .htm"
        },
        {
          "id": "D",
          "text": ".js"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-878",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Raqamli audio (tovush) fayllari formati"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-879",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
      "options": [
        {
          "id": "A",
          "text": ".png"
        },
        {
          "id": "B",
          "text": ".jpg"
        },
        {
          "id": "C",
          "text": ".mp4"
        },
        {
          "id": "D",
          "text": ".mp3 / .wav"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-880",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli video fayllari kengaytmasi"
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
      "explanation": "Nazariy asos: .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-881",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".gif"
        },
        {
          "id": "B",
          "text": ".mp4 / .avi / .mkv"
        },
        {
          "id": "C",
          "text": ".exe"
        },
        {
          "id": "D",
          "text": ".mp3"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-882",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
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
      "explanation": "Nazariy asos: .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-883",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
      "options": [
        {
          "id": "A",
          "text": ".docx"
        },
        {
          "id": "B",
          "text": ".zip"
        },
        {
          "id": "C",
          "text": ".mp3"
        },
        {
          "id": "D",
          "text": ".jpg / .png / .svg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-884",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-885",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".exe"
        },
        {
          "id": "B",
          "text": ".iso"
        },
        {
          "id": "C",
          "text": ".zip / .rar / .7z"
        },
        {
          "id": "D",
          "text": ".bat"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-886",
      "question": "DTM namunaviy informatika tahlili: Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-887",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".sys"
        },
        {
          "id": "B",
          "text": ".exe / .msi"
        },
        {
          "id": "C",
          "text": ".dll"
        },
        {
          "id": "D",
          "text": ".txt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-888",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-889",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "Tizimli dasturiy ta'minot"
        },
        {
          "id": "C",
          "text": "Uskunaviy vositalar"
        },
        {
          "id": "D",
          "text": "O'yinlar"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-890",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-891",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?",
      "options": [
        {
          "id": "A",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "B",
          "text": "Drayverlar"
        },
        {
          "id": "C",
          "text": "BIOS"
        },
        {
          "id": "D",
          "text": "Tizimli dasturlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-892",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-893",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Drayver"
        },
        {
          "id": "C",
          "text": "Arxivator"
        },
        {
          "id": "D",
          "text": "Brauzer"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-894",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim"
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
      "explanation": "Nazariy asos: BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-895",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?",
      "options": [
        {
          "id": "A",
          "text": "Windows"
        },
        {
          "id": "B",
          "text": "Kesh"
        },
        {
          "id": "C",
          "text": "BIOS (Basic Input/Output System)"
        },
        {
          "id": "D",
          "text": "Dasturlash muhiti"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-896",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-897",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Antivirus dasturi"
        },
        {
          "id": "B",
          "text": "Fayrvol"
        },
        {
          "id": "C",
          "text": "Operatsion sistema"
        },
        {
          "id": "D",
          "text": "Optimizator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-898",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
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
      "explanation": "Nazariy asos: O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-899",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?",
      "options": [
        {
          "id": "A",
          "text": "Modul"
        },
        {
          "id": "B",
          "text": "Funksiya"
        },
        {
          "id": "C",
          "text": "O'zgaruvchi (Variable)"
        },
        {
          "id": "D",
          "text": "O'zgarmas (Konstanta)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-900",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-901",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchi"
        },
        {
          "id": "B",
          "text": "Kompilyator"
        },
        {
          "id": "C",
          "text": "Massiv (Ro'yxat / List)"
        },
        {
          "id": "D",
          "text": "Skalyar kattalik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-902",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
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
      "explanation": "Nazariy asos: Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-903",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Shart operatori"
        },
        {
          "id": "B",
          "text": "Kutubxona"
        },
        {
          "id": "C",
          "text": "Funksiya (Function)"
        },
        {
          "id": "D",
          "text": "Tsikl"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-904",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
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
      "explanation": "Nazariy asos: Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-905",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Rekursiya"
        },
        {
          "id": "B",
          "text": "Inkrement"
        },
        {
          "id": "C",
          "text": "Iteratsiya"
        },
        {
          "id": "D",
          "text": "Dekrement"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-906",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-907",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator"
        },
        {
          "id": "B",
          "text": "Assembler"
        },
        {
          "id": "C",
          "text": "Interpretator"
        },
        {
          "id": "D",
          "text": "Translyator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-908",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
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
      "explanation": "Nazariy asos: Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-909",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?",
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
          "text": "Interpretator"
        },
        {
          "id": "D",
          "text": "Dizassembler"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-910",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "HTML tilida jadval yaratish uchun ochiladigan bosh teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-911",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
      "options": [
        {
          "id": "A",
          "text": "<th> tegi"
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
          "text": "<td> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-912",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Nazariy asos: <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-913",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<col> tegi"
        },
        {
          "id": "B",
          "text": "<td> tegi"
        },
        {
          "id": "C",
          "text": "<tr> tegi"
        },
        {
          "id": "D",
          "text": "<table> tegi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-914",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
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
      "explanation": "Nazariy asos: <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-915",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<td> tegi"
        },
        {
          "id": "B",
          "text": "<caption> tegi"
        },
        {
          "id": "C",
          "text": "<th> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-916",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-917",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?",
      "options": [
        {
          "id": "A",
          "text": "<form> tegi"
        },
        {
          "id": "B",
          "text": "<textarea> tegi"
        },
        {
          "id": "C",
          "text": "<button> tegi"
        },
        {
          "id": "D",
          "text": "<input> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-918",
      "question": "DTM namunaviy informatika tahlili: Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-919",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<select> tegi"
        },
        {
          "id": "B",
          "text": "<input> tegi"
        },
        {
          "id": "C",
          "text": "<label> tegi"
        },
        {
          "id": "D",
          "text": "<form> tegi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-920",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-921",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "SQL"
        },
        {
          "id": "B",
          "text": "JavaScript"
        },
        {
          "id": "C",
          "text": "HTML"
        },
        {
          "id": "D",
          "text": "CSS"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-922",
      "question": "DTM namunaviy informatika tahlili: Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "print()"
        },
        {
          "id": "B",
          "text": "echo()"
        },
        {
          "id": "C",
          "text": "input()"
        },
        {
          "id": "D",
          "text": "write()"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-923",
      "question": "DTM namunaviy informatika tahlili: Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "input()"
        },
        {
          "id": "B",
          "text": "scan()"
        },
        {
          "id": "C",
          "text": "read()"
        },
        {
          "id": "D",
          "text": "print()"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-924",
      "question": "DTM namunaviy informatika tahlili: Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
      "options": [
        {
          "id": "A",
          "text": "def"
        },
        {
          "id": "B",
          "text": "if"
        },
        {
          "id": "C",
          "text": "for"
        },
        {
          "id": "D",
          "text": "while"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: if shart: ... elif ... else."
    },
    {
      "id": "informatika-925",
      "question": "DTM namunaviy informatika tahlili: Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "proc"
        },
        {
          "id": "B",
          "text": "function"
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
      "explanation": "Nazariy asos: def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-926",
      "question": "DTM namunaviy informatika tahlili: Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
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
      "explanation": "Nazariy asos: for i in range(...): tsikli."
    },
    {
      "id": "informatika-927",
      "question": "DTM namunaviy informatika tahlili: Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
      "options": [
        {
          "id": "A",
          "text": "while"
        },
        {
          "id": "B",
          "text": "range"
        },
        {
          "id": "C",
          "text": "if"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: while shart: ... tsikli."
    },
    {
      "id": "informatika-928",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "( ) (oddiy qavslar)"
        },
        {
          "id": "B",
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "C",
          "text": "{ } (figurali qavslar)"
        },
        {
          "id": "D",
          "text": "< > (burchakli qavslar)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-929",
      "question": "DTM namunaviy informatika tahlili: O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
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
          "text": "[ ] (to'rtburchak qavslar)"
        },
        {
          "id": "D",
          "text": "| |"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-930",
      "question": "DTM namunaviy informatika tahlili: Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "{kalit: qiymat}"
        },
        {
          "id": "B",
          "text": "(kalit; qiymat)"
        },
        {
          "id": "C",
          "text": "[kalit, qiymat]"
        },
        {
          "id": "D",
          "text": "<kalit=qiymat>"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-931",
      "question": "DTM namunaviy informatika tahlili: Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?",
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
          "text": "count()"
        },
        {
          "id": "D",
          "text": "size()"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-932",
      "question": "DTM namunaviy informatika tahlili: Rastrli grafika nimaga asoslangan?",
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
      "explanation": "Nazariy asos: Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-933",
      "question": "DTM namunaviy informatika tahlili: Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat oq-qora bo'ladi"
        },
        {
          "id": "B",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "C",
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        },
        {
          "id": "D",
          "text": "Hajmi doim juda katta bo'ladi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-934",
      "question": "DTM namunaviy informatika tahlili: RGB rang modelida asosiy ranglar qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Cyan, Magenta, Yellow"
        },
        {
          "id": "B",
          "text": "Red, Green, Black"
        },
        {
          "id": "C",
          "text": "Rose, Grey, Brown"
        },
        {
          "id": "D",
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-935",
      "question": "DTM namunaviy informatika tahlili: Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?",
      "options": [
        {
          "id": "A",
          "text": "CMYK (Cyan, Magenta, Yellow, blacK)"
        },
        {
          "id": "B",
          "text": "RGB"
        },
        {
          "id": "C",
          "text": "HSB"
        },
        {
          "id": "D",
          "text": "Grayscale"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-936",
      "question": "DTM namunaviy informatika tahlili: Axborot xavfsizligining uchta asosiy tamoyili qaysilar?",
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
      "explanation": "Nazariy asos: CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-937",
      "question": "DTM namunaviy informatika tahlili: Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "B",
          "text": "Fayl formatini o'chirish"
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
      "explanation": "Nazariy asos: Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-938",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri operatsion sistema hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Word, Excel, PowerPoint"
        },
        {
          "id": "B",
          "text": "Windows, Linux, macOS, Android"
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
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-939",
      "question": "DTM namunaviy informatika tahlili: Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?",
      "options": [
        {
          "id": "A",
          "text": "Linus Torvalds (1991-yilda)"
        },
        {
          "id": "B",
          "text": "Stiv Jobs"
        },
        {
          "id": "C",
          "text": "Dennis Ritchi"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-940",
      "question": "DTM namunaviy informatika tahlili: Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts va Pol Allen"
        },
        {
          "id": "B",
          "text": "Stiv Jobs va Voznyak"
        },
        {
          "id": "C",
          "text": "Mark Sukerberg"
        },
        {
          "id": "D",
          "text": "Ilon Mask"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-941",
      "question": "DTM namunaviy informatika tahlili: Apple kompaniyasining asoschilari kimlar?",
      "options": [
        {
          "id": "A",
          "text": "Bill Geyts"
        },
        {
          "id": "B",
          "text": "Sergey Brin"
        },
        {
          "id": "C",
          "text": "Stiv Jobs va Stiv Voznyak"
        },
        {
          "id": "D",
          "text": "Jeff Bezos"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-942",
      "question": "DTM namunaviy informatika tahlili: Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
      "options": [
        {
          "id": "A",
          "text": "Pavel Durov"
        },
        {
          "id": "B",
          "text": "Larri Peyj va Sergey Brin"
        },
        {
          "id": "C",
          "text": "Bill Geyts"
        },
        {
          "id": "D",
          "text": "Jek Ma"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-943",
      "question": "DTM namunaviy informatika tahlili: Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "32"
        },
        {
          "id": "B",
          "text": "8"
        },
        {
          "id": "C",
          "text": "4"
        },
        {
          "id": "D",
          "text": "16"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: 1 bayt = 8 bit."
    },
    {
      "id": "informatika-944",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning asosiy hisoblash qurilmasi qaysi?",
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
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-945",
      "question": "DTM namunaviy informatika tahlili: HTML tili asosan nima uchun ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Server tomonidagi logikani yozish"
        },
        {
          "id": "B",
          "text": "Ma’lumotlar bazasini boshqarish"
        },
        {
          "id": "C",
          "text": "Web sahifa tuzilmasini yaratish"
        },
        {
          "id": "D",
          "text": "Mobil ilova ishlab chiqish"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-946",
      "question": "DTM namunaviy informatika tahlili: Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "12"
        },
        {
          "id": "C",
          "text": "8"
        },
        {
          "id": "D",
          "text": "9"
        }
      ],
      "correct": "A",
      "xp": 300,
      "explanation": "Nazariy asos: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-947",
      "question": "DTM namunaviy informatika tahlili: 1 Kilobayt (KB) necha baytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1000 bayt"
        },
        {
          "id": "B",
          "text": "1024 bayt"
        },
        {
          "id": "C",
          "text": "512 bayt"
        },
        {
          "id": "D",
          "text": "2048 bayt"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-948",
      "question": "DTM namunaviy informatika tahlili: 1 Megabayt (MB) necha Kilobaytga teng?",
      "options": [
        {
          "id": "A",
          "text": "1000 KB"
        },
        {
          "id": "B",
          "text": "2048 KB"
        },
        {
          "id": "C",
          "text": "1024 KB"
        },
        {
          "id": "D",
          "text": "1024 bayt"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-949",
      "question": "DTM namunaviy informatika tahlili: 1 Gigabayt (GB) necha Megabaytga teng?",
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
          "text": "4096 MB"
        },
        {
          "id": "D",
          "text": "1024 KB"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 GB = 1024 MB."
    },
    {
      "id": "informatika-950",
      "question": "DTM namunaviy informatika tahlili: ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
      "options": [
        {
          "id": "A",
          "text": "2 bayt"
        },
        {
          "id": "B",
          "text": "1 bayt (8 bit)"
        },
        {
          "id": "C",
          "text": "16 bit"
        },
        {
          "id": "D",
          "text": "4 bit"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-951",
      "question": "DTM namunaviy informatika tahlili: Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
      "options": [
        {
          "id": "A",
          "text": "8 bit"
        },
        {
          "id": "B",
          "text": "1 bayt"
        },
        {
          "id": "C",
          "text": "4 bayt"
        },
        {
          "id": "D",
          "text": "2 bayt (16 bit)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-952",
      "question": "DTM namunaviy informatika tahlili: Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = 2^i"
        },
        {
          "id": "B",
          "text": "N = log₂i"
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
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-953",
      "question": "DTM namunaviy informatika tahlili: O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "X, Y, Z, W, P, Q"
        },
        {
          "id": "B",
          "text": "A, B, C, D, E, F"
        },
        {
          "id": "C",
          "text": "1A, 1B, 1C, 1D, 1E, 1F"
        },
        {
          "id": "D",
          "text": "K, L, M, N, O, P"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-954",
      "question": "DTM namunaviy informatika tahlili: Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?",
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
          "text": "15"
        },
        {
          "id": "D",
          "text": "7"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-955",
      "question": "DTM namunaviy informatika tahlili: O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "1000"
        },
        {
          "id": "B",
          "text": "1111"
        },
        {
          "id": "C",
          "text": "10000"
        },
        {
          "id": "D",
          "text": "100000"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-956",
      "question": "DTM namunaviy informatika tahlili: Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
      "options": [
        {
          "id": "A",
          "text": "8"
        },
        {
          "id": "B",
          "text": "F"
        },
        {
          "id": "C",
          "text": "7"
        },
        {
          "id": "D",
          "text": "9"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-957",
      "question": "DTM namunaviy informatika tahlili: O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "16"
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
          "text": "10"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-958",
      "question": "DTM namunaviy informatika tahlili: Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
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
      "explanation": "Nazariy asos: RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-959",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Matnli hujjatlar"
        },
        {
          "id": "B",
          "text": "O'yinlar"
        },
        {
          "id": "C",
          "text": "Faqat foydalanuvchi fayllari"
        },
        {
          "id": "D",
          "text": "BIOS dasturlari va dastlabki yuklash ko'rsatmalari"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-960",
      "question": "DTM namunaviy informatika tahlili: Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Grafik tasvirlarni chizadi"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi"
        },
        {
          "id": "C",
          "text": "Uzoq muddat fayllarni saqlaydi"
        },
        {
          "id": "D",
          "text": "Elektr toki beradi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-961",
      "question": "DTM namunaviy informatika tahlili: Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk (HDD)"
        },
        {
          "id": "B",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "C",
          "text": "Registr"
        },
        {
          "id": "D",
          "text": "Kesh xotira"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-962",
      "question": "DTM namunaviy informatika tahlili: Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "FDD"
        },
        {
          "id": "B",
          "text": "DVD-RW"
        },
        {
          "id": "C",
          "text": "CD-ROM"
        },
        {
          "id": "D",
          "text": "SSD (Solid State Drive)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-963",
      "question": "DTM namunaviy informatika tahlili: Taktli chastotaning o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Vatt"
        },
        {
          "id": "B",
          "text": "Bayt"
        },
        {
          "id": "C",
          "text": "BPS"
        },
        {
          "id": "D",
          "text": "Gers (Gs, MGs, GGs)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-964",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Plotter"
        },
        {
          "id": "B",
          "text": "Printer"
        },
        {
          "id": "C",
          "text": "Monitor"
        },
        {
          "id": "D",
          "text": "Skaner"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-965",
      "question": "DTM namunaviy informatika tahlili: Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
      "options": [
        {
          "id": "A",
          "text": "Klaviatura"
        },
        {
          "id": "B",
          "text": "Printer"
        },
        {
          "id": "C",
          "text": "Mikrofon"
        },
        {
          "id": "D",
          "text": "Skaner"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-966",
      "question": "DTM namunaviy informatika tahlili: Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
      "options": [
        {
          "id": "A",
          "text": "Digitayzer"
        },
        {
          "id": "B",
          "text": "Skaner"
        },
        {
          "id": "C",
          "text": "Printer"
        },
        {
          "id": "D",
          "text": "Plotter (grafik yasagich)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-967",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "B",
          "text": "Birinchisi chin, ikkinchisi yolg'on bo'lganda"
        },
        {
          "id": "C",
          "text": "Ikkala mulohaza ham chin (1) bo'lganda"
        },
        {
          "id": "D",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-968",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
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
          "text": "Ikkala mulohaza ham yolg'on (0) bo'lganda"
        },
        {
          "id": "D",
          "text": "Biri chin bo'lganda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-969",
      "question": "DTM namunaviy informatika tahlili: Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
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
      "explanation": "Nazariy asos: NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-970",
      "question": "DTM namunaviy informatika tahlili: Algoritmning asosiy xossalari qaysilar?",
      "options": [
        {
          "id": "A",
          "text": "Faqat qisqalik va tezlik"
        },
        {
          "id": "B",
          "text": "Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik"
        },
        {
          "id": "C",
          "text": "Faqat cheksizlik"
        },
        {
          "id": "D",
          "text": "Ranglilik va hajm"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-971",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
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
          "text": "Oval"
        },
        {
          "id": "D",
          "text": "Parallelogramm"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-972",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "Parallelogramm"
        },
        {
          "id": "C",
          "text": "Doira"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-973",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "Trapetsiya"
        },
        {
          "id": "B",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "C",
          "text": "Oval"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-974",
      "question": "DTM namunaviy informatika tahlili: Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "Romb"
        },
        {
          "id": "B",
          "text": "Kvadrat"
        },
        {
          "id": "C",
          "text": "Oval (ellips)"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-975",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
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
      "explanation": "Nazariy asos: Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-976",
      "question": "DTM namunaviy informatika tahlili: Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
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
      "explanation": "Nazariy asos: Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-977",
      "question": "DTM namunaviy informatika tahlili: Python tilida darajaga ko'tarish operatori qanday belgilanadi?",
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
          "text": "^"
        },
        {
          "id": "D",
          "text": "**"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-978",
      "question": "DTM namunaviy informatika tahlili: Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?",
      "options": [
        {
          "id": "A",
          "text": "bool"
        },
        {
          "id": "B",
          "text": "int"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "str"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: int - integer (butun son)."
    },
    {
      "id": "informatika-979",
      "question": "DTM namunaviy informatika tahlili: Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?",
      "options": [
        {
          "id": "A",
          "text": "char"
        },
        {
          "id": "B",
          "text": "list"
        },
        {
          "id": "C",
          "text": "float"
        },
        {
          "id": "D",
          "text": "int"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-980",
      "question": "DTM namunaviy informatika tahlili: Satrli (matnli) ma'lumot turi qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "int"
        },
        {
          "id": "B",
          "text": "bool"
        },
        {
          "id": "C",
          "text": "str (string)"
        },
        {
          "id": "D",
          "text": "dict"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-981",
      "question": "DTM namunaviy informatika tahlili: Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "<a>"
        },
        {
          "id": "B",
          "text": "<url>"
        },
        {
          "id": "C",
          "text": "<href>"
        },
        {
          "id": "D",
          "text": "<link>"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-982",
      "question": "DTM namunaviy informatika tahlili: HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<img>"
        },
        {
          "id": "B",
          "text": "<src>"
        },
        {
          "id": "C",
          "text": "<image>"
        },
        {
          "id": "D",
          "text": "<picture>"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: <img src='...' alt='...'>."
    },
    {
      "id": "informatika-983",
      "question": "DTM namunaviy informatika tahlili: HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<h1>"
        },
        {
          "id": "B",
          "text": "<title>"
        },
        {
          "id": "C",
          "text": "<h6>"
        },
        {
          "id": "D",
          "text": "<header>"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-984",
      "question": "DTM namunaviy informatika tahlili: HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?",
      "options": [
        {
          "id": "A",
          "text": "<dl>"
        },
        {
          "id": "B",
          "text": "<ol>"
        },
        {
          "id": "C",
          "text": "<li>"
        },
        {
          "id": "D",
          "text": "<ul>"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-985",
      "question": "DTM namunaviy informatika tahlili: CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasini tuzish"
        },
        {
          "id": "B",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "C",
          "text": "Server logikasini yozish"
        },
        {
          "id": "D",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-986",
      "question": "DTM namunaviy informatika tahlili: IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "8 bayt"
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
          "text": "16 bayt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-987",
      "question": "DTM namunaviy informatika tahlili: DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Parollarni saqlash"
        },
        {
          "id": "B",
          "text": "Elektron xat jo'natish"
        },
        {
          "id": "C",
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        },
        {
          "id": "D",
          "text": "Fayllarni yuklash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-988",
      "question": "DTM namunaviy informatika tahlili: Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "MAC-manzil"
        },
        {
          "id": "B",
          "text": "Port"
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
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-989",
      "question": "DTM namunaviy informatika tahlili: Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
        },
        {
          "id": "B",
          "text": "SMTP"
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
      "explanation": "Nazariy asos: FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-990",
      "question": "DTM namunaviy informatika tahlili: Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
      "options": [
        {
          "id": "A",
          "text": "POP3"
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
          "text": "HTTP"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-991",
      "question": "DTM namunaviy informatika tahlili: Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat daraxtsimon shaklda"
        },
        {
          "id": "B",
          "text": "Tarmoq shaklida"
        },
        {
          "id": "C",
          "text": "O'zaro bog'langan jadvallar ko'rinishida"
        },
        {
          "id": "D",
          "text": "Faqat bitta matnli faylda"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-992",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?",
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
      "explanation": "Nazariy asos: Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-993",
      "question": "DTM namunaviy informatika tahlili: Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Katastrofa"
        },
        {
          "id": "B",
          "text": "Jadval"
        },
        {
          "id": "C",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "D",
          "text": "Yozuv"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-994",
      "question": "DTM namunaviy informatika tahlili: Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Filtr"
        },
        {
          "id": "B",
          "text": "Indeks"
        },
        {
          "id": "C",
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "D",
          "text": "Tashqi kalit"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-995",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-996",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
      "options": [
        {
          "id": "A",
          "text": "Qattiq disk"
        },
        {
          "id": "B",
          "text": "Operativ xotira"
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU)"
        },
        {
          "id": "D",
          "text": "Videokarta"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-997",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "B",
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
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
      "explanation": "Nazariy asos: Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-998",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Operativ xotira (RAM)"
        },
        {
          "id": "B",
          "text": "Kesh-xotira"
        },
        {
          "id": "C",
          "text": "SSD"
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-999",
      "question": "DTM namunaviy informatika tahlili: Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-1000",
      "question": "DTM namunaviy informatika tahlili: Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "RAM"
        },
        {
          "id": "B",
          "text": "Strimmer"
        },
        {
          "id": "C",
          "text": "Fleshka"
        },
        {
          "id": "D",
          "text": "Doimiy xotira (ROM)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    }
  ]
};

export default informatika;
