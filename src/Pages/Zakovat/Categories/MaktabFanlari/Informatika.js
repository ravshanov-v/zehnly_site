// Kredorium Zakovat Platformasi - Informatika (1000 savol)

const informatika = {
  "id": "informatika",
  "title": "Informatika",
  "icon": "💻",
  "category": "Maktab fanlari",
  "totalQuestions": 1000,
  "questions": [
    {
      "id": "informatika-1",
      "question": "Bir baytda nechta bit bor?",
      "options": [
        {
          "id": "A",
          "text": "8"
        },
        {
          "id": "B",
          "text": "16"
        },
        {
          "id": "C",
          "text": "4"
        },
        {
          "id": "D",
          "text": "32"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "1 bayt = 8 bit."
    },
    {
      "id": "informatika-2",
      "question": "Kompyuterning asosiy hisoblash qurilmasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Protsessor"
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
          "text": "Monitor"
        }
      ],
      "correct": "A",
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
          "text": "Web sahifa tuzilmasini yaratish"
        },
        {
          "id": "C",
          "text": "Ma’lumotlar bazasini boshqarish"
        },
        {
          "id": "D",
          "text": "Server tomonidagi logikani yozish"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-4",
      "question": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?",
      "options": [
        {
          "id": "A",
          "text": "9"
        },
        {
          "id": "B",
          "text": "10"
        },
        {
          "id": "C",
          "text": "12"
        },
        {
          "id": "D",
          "text": "8"
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
          "text": "2048 bayt"
        },
        {
          "id": "B",
          "text": "512 bayt"
        },
        {
          "id": "C",
          "text": "1024 bayt"
        },
        {
          "id": "D",
          "text": "1000 bayt"
        }
      ],
      "correct": "C",
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
          "text": "1024 KB"
        },
        {
          "id": "C",
          "text": "2048 KB"
        },
        {
          "id": "D",
          "text": "1000 KB"
        }
      ],
      "correct": "B",
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
          "text": "1024 MB"
        },
        {
          "id": "C",
          "text": "1024 KB"
        },
        {
          "id": "D",
          "text": "1000 MB"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "informatika-8",
      "question": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?",
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
      "id": "informatika-9",
      "question": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?",
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
          "text": "1 bayt"
        },
        {
          "id": "D",
          "text": "2 bayt (16 bit)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-10",
      "question": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?",
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
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-11",
      "question": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?",
      "options": [
        {
          "id": "A",
          "text": "X, Y, Z, W, P, Q"
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
          "text": "16"
        },
        {
          "id": "C",
          "text": "7"
        },
        {
          "id": "D",
          "text": "14"
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
          "text": "100000"
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
          "text": "1000"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-14",
      "question": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?",
      "options": [
        {
          "id": "A",
          "text": "8"
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
          "text": "F"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-15",
      "question": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?",
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
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-16",
      "question": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?",
      "options": [
        {
          "id": "A",
          "text": "Doimiy xotira (ROM)"
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
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-18",
      "question": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?",
      "options": [
        {
          "id": "A",
          "text": "Uzoq muddat fayllarni saqlaydi"
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
          "text": "Grafik tasvirlarni chizadi"
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
          "text": "Kesh xotira"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
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
          "text": "DVD-RW"
        },
        {
          "id": "B",
          "text": "SSD (Solid State Drive)"
        },
        {
          "id": "C",
          "text": "FDD"
        },
        {
          "id": "D",
          "text": "CD-ROM"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-21",
      "question": "Taktli chastotaning o'lchov birligi nima?",
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
      "explanation": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-22",
      "question": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?",
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
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-23",
      "question": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?",
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
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-24",
      "question": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?",
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
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-25",
      "question": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkalasi ham yolg'on bo'lganda"
        },
        {
          "id": "B",
          "text": "Hech bo'lmaganda biri chin bo'lganda"
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
      "id": "informatika-26",
      "question": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?",
      "options": [
        {
          "id": "A",
          "text": "Biri chin bo'lganda"
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
          "text": "Hech qachon"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-27",
      "question": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Amalni bekor qiladi"
        },
        {
          "id": "B",
          "text": "Sonni nolga tenglashtiradi"
        },
        {
          "id": "C",
          "text": "Ikkita sonni qo'shadi"
        },
        {
          "id": "D",
          "text": "Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-28",
      "question": "Algoritmning asosiy xossalari qaysilar?",
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
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-29",
      "question": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?",
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
          "text": "Parallelogramm"
        },
        {
          "id": "D",
          "text": "To'g'ri to'rtburchak"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-30",
      "question": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?",
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
          "text": "Doira"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-31",
      "question": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?",
      "options": [
        {
          "id": "A",
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "B",
          "text": "Trapetsiya"
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
      "correct": "A",
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
          "text": "Oval (ellips)"
        },
        {
          "id": "C",
          "text": "Kvadrat"
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
      "id": "informatika-33",
      "question": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?",
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
      "id": "informatika-34",
      "question": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?",
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
          "text": "str"
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
          "text": "float"
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
          "text": "int"
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
          "text": "char"
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
          "text": "dict"
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
          "text": "<a>"
        },
        {
          "id": "C",
          "text": "<url>"
        },
        {
          "id": "D",
          "text": "<href>"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "<a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-40",
      "question": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?",
      "options": [
        {
          "id": "A",
          "text": "<src>"
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
          "text": "<img>"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "informatika-41",
      "question": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "<header>"
        },
        {
          "id": "B",
          "text": "<h1>"
        },
        {
          "id": "C",
          "text": "<title>"
        },
        {
          "id": "D",
          "text": "<h6>"
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
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-43",
      "question": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni arxivlash"
        },
        {
          "id": "B",
          "text": "Web sahifaning tashqi ko'rinishi va dizaynini bezash"
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
          "text": "8 bayt"
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
          "text": "16 bayt"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-45",
      "question": "DNS (Domain Name System) serverining asosiy vazifasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Elektron xat jo'natish"
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
          "text": "Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-46",
      "question": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "MAC-manzil"
        },
        {
          "id": "B",
          "text": "IP-manzil"
        },
        {
          "id": "C",
          "text": "Port"
        },
        {
          "id": "D",
          "text": "URL"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-47",
      "question": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
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
          "text": "FTP"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-48",
      "question": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?",
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
          "text": "POP3"
        },
        {
          "id": "D",
          "text": "IMAP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-49",
      "question": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?",
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
      "id": "informatika-51",
      "question": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Maydon (field / atribut)"
        },
        {
          "id": "B",
          "text": "Yozuv"
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
      "correct": "A",
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-52",
      "question": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Birlamchi kalit (Primary Key)"
        },
        {
          "id": "B",
          "text": "Tashqi kalit"
        },
        {
          "id": "C",
          "text": "Indeks"
        },
        {
          "id": "D",
          "text": "Filtr"
        }
      ],
      "correct": "A",
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
      "id": "informatika-54",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?",
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
      "id": "informatika-55",
      "question": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "correct": "C",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-56",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Doimiy xotira (ROM)"
        },
        {
          "id": "B",
          "text": "SSD"
        },
        {
          "id": "C",
          "text": "Kesh-xotira"
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-57",
      "question": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-58",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?",
      "options": [
        {
          "id": "A",
          "text": "Strimmer"
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
          "text": "Fleshka"
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
      "id": "informatika-60",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "C",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
          "text": "Videokarta (GPU)"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasi"
        },
        {
          "id": "C",
          "text": "Chipset"
        },
        {
          "id": "D",
          "text": "Ovoz kartasi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-63",
      "question": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
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
          "text": "Ona plata (Motherboard)"
        },
        {
          "id": "B",
          "text": "Kuler"
        },
        {
          "id": "C",
          "text": "Quvvat bloki"
        },
        {
          "id": "D",
          "text": "Shina"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-65",
      "question": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "id": "informatika-66",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?",
      "options": [
        {
          "id": "A",
          "text": "Kondensator"
        },
        {
          "id": "B",
          "text": "Stabilizator"
        },
        {
          "id": "C",
          "text": "Quvvat bloki (Power Supply)"
        },
        {
          "id": "D",
          "text": "Invertor"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-67",
      "question": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "id": "informatika-68",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?",
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
          "text": "FTP"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "A",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
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
          "text": "FTP (File Transfer Protocol)"
        },
        {
          "id": "B",
          "text": "DNS"
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
      "correct": "A",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
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
          "text": "SNMP"
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
          "text": "SMTP (Simple Mail Transfer Protocol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-73",
      "question": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-74",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?",
      "options": [
        {
          "id": "A",
          "text": "POP3 va IMAP"
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
      "correct": "A",
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
          "text": "Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish"
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
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-76",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?",
      "options": [
        {
          "id": "A",
          "text": "DHCP (Dynamic Host Configuration Protocol)"
        },
        {
          "id": "B",
          "text": "ARP"
        },
        {
          "id": "C",
          "text": "DNS"
        },
        {
          "id": "D",
          "text": "ICMP"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-77",
      "question": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
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
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-78",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?",
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
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-79",
      "question": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-80",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?",
      "options": [
        {
          "id": "A",
          "text": "Shlyuz"
        },
        {
          "id": "B",
          "text": "MAC manzil"
        },
        {
          "id": "C",
          "text": "Domen"
        },
        {
          "id": "D",
          "text": "IP manzil"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-81",
      "question": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-82",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Xab (Hub)"
        },
        {
          "id": "B",
          "text": "Repiter"
        },
        {
          "id": "C",
          "text": "Kommutator (Switch)"
        },
        {
          "id": "D",
          "text": "Marshrutizator (Router)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-83",
      "question": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
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
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-84",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?",
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
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-85",
      "question": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": ".pptx"
        },
        {
          "id": "B",
          "text": ".xlsx"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
          "text": ".txt"
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
          "text": ".pdf"
        }
      ],
      "correct": "C",
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
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-90",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx"
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
          "text": ".docx"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-91",
      "question": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "id": "informatika-92",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?",
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
          "text": ".js"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
      "id": "informatika-94",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?",
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
          "text": ".mp4"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "C",
          "text": "Raqamli video fayllari kengaytmasi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-96",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?",
      "options": [
        {
          "id": "A",
          "text": ".gif"
        },
        {
          "id": "B",
          "text": ".exe"
        },
        {
          "id": "C",
          "text": ".mp4 / .avi / .mkv"
        },
        {
          "id": "D",
          "text": ".mp3"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-97",
      "question": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-98",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?",
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
          "text": ".jpg / .png / .svg"
        },
        {
          "id": "D",
          "text": ".zip"
        }
      ],
      "correct": "C",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-100",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".iso"
        },
        {
          "id": "B",
          "text": ".exe"
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
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-101",
      "question": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-102",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?",
      "options": [
        {
          "id": "A",
          "text": ".txt"
        },
        {
          "id": "B",
          "text": ".dll"
        },
        {
          "id": "C",
          "text": ".exe / .msi"
        },
        {
          "id": "D",
          "text": ".sys"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-103",
      "question": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-104",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?",
      "options": [
        {
          "id": "A",
          "text": "Uskunaviy vositalar"
        },
        {
          "id": "B",
          "text": "Tizimli dasturiy ta'minot"
        },
        {
          "id": "C",
          "text": "Amaliy dasturiy ta'minot"
        },
        {
          "id": "D",
          "text": "O'yinlar"
        }
      ],
      "correct": "B",
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
          "text": "Tizimli dasturlar"
        },
        {
          "id": "C",
          "text": "BIOS"
        },
        {
          "id": "D",
          "text": "Drayverlar"
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
          "text": "Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur"
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
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-108",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?",
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
          "text": "Brauzer"
        },
        {
          "id": "D",
          "text": "Kompilyator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-109",
      "question": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Windows"
        },
        {
          "id": "D",
          "text": "Dasturlash muhiti"
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
      "id": "informatika-112",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?",
      "options": [
        {
          "id": "A",
          "text": "Operatsion sistema"
        },
        {
          "id": "B",
          "text": "Fayrvol"
        },
        {
          "id": "C",
          "text": "Antivirus dasturi"
        },
        {
          "id": "D",
          "text": "Optimizator"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-113",
      "question": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "O'zgaruvchi (Variable)"
        },
        {
          "id": "D",
          "text": "O'zgarmas (Konstanta)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-115",
      "question": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-116",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchi"
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
          "text": "Massiv (Ro'yxat / List)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-117",
      "question": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "B",
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
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
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-118",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?",
      "options": [
        {
          "id": "A",
          "text": "Kutubxona"
        },
        {
          "id": "B",
          "text": "Tsikl"
        },
        {
          "id": "C",
          "text": "Funksiya (Function)"
        },
        {
          "id": "D",
          "text": "Shart operatori"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-119",
      "question": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-120",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-122",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?",
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
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-123",
      "question": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Kompilyator"
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
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-126",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?",
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
          "text": "<th> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-127",
      "question": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-128",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<tr> tegi"
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
          "text": "<col> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-129",
      "question": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
      "id": "informatika-130",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?",
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
          "text": "<caption> tegi"
        },
        {
          "id": "D",
          "text": "<tr> tegi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-131",
      "question": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
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
          "text": "<textarea> tegi"
        },
        {
          "id": "B",
          "text": "<form> tegi"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-133",
      "question": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
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
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-134",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?",
      "options": [
        {
          "id": "A",
          "text": "<label> tegi"
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
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-136",
      "question": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?",
      "options": [
        {
          "id": "A",
          "text": "SQL"
        },
        {
          "id": "B",
          "text": "HTML"
        },
        {
          "id": "C",
          "text": "JavaScript"
        },
        {
          "id": "D",
          "text": "CSS"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-137",
      "question": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "write()"
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
          "text": "print()"
        },
        {
          "id": "C",
          "text": "read()"
        },
        {
          "id": "D",
          "text": "input()"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-139",
      "question": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?",
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
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "informatika-140",
      "question": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
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
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-141",
      "question": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?",
      "options": [
        {
          "id": "A",
          "text": "switch"
        },
        {
          "id": "B",
          "text": "for"
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
      "correct": "B",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "informatika-142",
      "question": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?",
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
          "text": "range"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "informatika-143",
      "question": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?",
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
          "text": "< > (burchakli qavslar)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-144",
      "question": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?",
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
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-145",
      "question": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?",
      "options": [
        {
          "id": "A",
          "text": "{kalit: qiymat}"
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
          "text": "(kalit; qiymat)"
        }
      ],
      "correct": "A",
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
          "text": "size()"
        },
        {
          "id": "C",
          "text": "count()"
        },
        {
          "id": "D",
          "text": "length()"
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
          "text": "Faqat matnlarga"
        },
        {
          "id": "B",
          "text": "Faqat tovush to'lqinlariga"
        },
        {
          "id": "C",
          "text": "Piksellar (nuqtalar) to'riga"
        },
        {
          "id": "D",
          "text": "Geometrik formulalar va chiziqlarga"
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
          "text": "Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi"
        },
        {
          "id": "B",
          "text": "Piksellardan tuzilgan"
        },
        {
          "id": "C",
          "text": "Faqat oq-qora bo'ladi"
        },
        {
          "id": "D",
          "text": "Hajmi doim juda katta bo'ladi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-149",
      "question": "RGB rang modelida asosiy ranglar qaysilar?",
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
          "text": "Red (Qizil), Green (Yashil), Blue (Ko'k)"
        },
        {
          "id": "D",
          "text": "Red, Green, Black"
        }
      ],
      "correct": "C",
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
          "text": "HSB"
        },
        {
          "id": "C",
          "text": "RGB"
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
          "text": "Faqat arxivlash"
        },
        {
          "id": "B",
          "text": "Tezlik, hajm va rang"
        },
        {
          "id": "C",
          "text": "Faqat parol va login"
        },
        {
          "id": "D",
          "text": "Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-152",
      "question": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?",
      "options": [
        {
          "id": "A",
          "text": "Viruslardan tozalash"
        },
        {
          "id": "B",
          "text": "Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish"
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
      "correct": "B",
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
          "text": "Windows, Linux, macOS, Android"
        },
        {
          "id": "D",
          "text": "Python, C++, Java"
        }
      ],
      "correct": "C",
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
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-155",
      "question": "Microsoft kompaniyasining asoschisi kim?",
      "options": [
        {
          "id": "A",
          "text": "Mark Sukerberg"
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
          "text": "Stiv Jobs va Voznyak"
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
          "text": "Stiv Jobs va Stiv Voznyak"
        },
        {
          "id": "B",
          "text": "Jeff Bezos"
        },
        {
          "id": "C",
          "text": "Sergey Brin"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-157",
      "question": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?",
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
          "text": "Jek Ma"
        },
        {
          "id": "D",
          "text": "Bill Geyts"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-158",
      "question": "«8» quyidagi qaysi savolning to'g'ri javobi? (1 bayt = 8 bit.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "C",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "D",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Bir baytda nechta bit bor?» savolining to'g'ri javobi — 8. 1 bayt = 8 bit."
    },
    {
      "id": "informatika-159",
      "question": "«Protsessor» quyidagi qaysi savolning to'g'ri javobi? (Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "B",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Kompyuterning asosiy hisoblash qurilmasi qaysi?» savolining to'g'ri javobi — Protsessor. Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-160",
      "question": "«Web sahifa tuzilmasini yaratish» quyidagi qaysi savolning to'g'ri javobi? (HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir.)",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
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
      "xp": 250,
      "explanation": "«HTML tili asosan nima uchun ishlatiladi?» savolining to'g'ri javobi — Web sahifa tuzilmasini yaratish. HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-161",
      "question": "«10» quyidagi qaysi savolning to'g'ri javobi? (1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10.)",
      "options": [
        {
          "id": "A",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        }
      ],
      "correct": "A",
      "xp": 300,
      "explanation": "«Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savolining to'g'ri javobi — 10. 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-162",
      "question": "«1024 bayt» quyidagi qaysi savolning to'g'ri javobi? (1 KB = 2¹⁰ bayt = 1024 bayt.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "1 Kilobayt (KB) necha baytga teng?"
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
      "correct": "B",
      "xp": 150,
      "explanation": "«1 Kilobayt (KB) necha baytga teng?» savolining to'g'ri javobi — 1024 bayt. 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-163",
      "question": "«1024 KB» quyidagi qaysi savolning to'g'ri javobi? (1 MB = 1024 KB = 2²⁰ bayt.)",
      "options": [
        {
          "id": "A",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "B",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "C",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "D",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«1 Megabayt (MB) necha Kilobaytga teng?» savolining to'g'ri javobi — 1024 KB. 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-164",
      "question": "«1024 MB» quyidagi qaysi savolning to'g'ri javobi? (1 GB = 1024 MB.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«1 Gigabayt (GB) necha Megabaytga teng?» savolining to'g'ri javobi — 1024 MB. 1 GB = 1024 MB."
    },
    {
      "id": "informatika-165",
      "question": "«1 bayt (8 bit)» quyidagi qaysi savolning to'g'ri javobi? (Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi.)",
      "options": [
        {
          "id": "A",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savolining to'g'ri javobi — 1 bayt (8 bit). Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-166",
      "question": "«2 bayt (16 bit)» quyidagi qaysi savolning to'g'ri javobi? (Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "B",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savolining to'g'ri javobi — 2 bayt (16 bit). Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-167",
      "question": "«N = 2^i» quyidagi qaysi savolning to'g'ri javobi? (N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit).)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savolining to'g'ri javobi — N = 2^i. N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-168",
      "question": "«A, B, C, D, E, F» quyidagi qaysi savolning to'g'ri javobi? (O'n oltilikda 10 dan 15 gacha harflar qo'llanadi.)",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savolining to'g'ri javobi — A, B, C, D, E, F. O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-169",
      "question": "«15» quyidagi qaysi savolning to'g'ri javobi? (8 + 4 + 2 + 1 = 15.)",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "D",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savolining to'g'ri javobi — 15. 8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-170",
      "question": "«10000» quyidagi qaysi savolning to'g'ri javobi? (16 = 2⁴ = 10000₂.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "B",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "C",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savolining to'g'ri javobi — 10000. 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-171",
      "question": "«7» quyidagi qaysi savolning to'g'ri javobi? (Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi.)",
      "options": [
        {
          "id": "A",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
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
      "explanation": "«Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savolining to'g'ri javobi — 7. Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-172",
      "question": "«26» quyidagi qaysi savolning to'g'ri javobi? (1·16¹ + 10·16⁰ = 16 + 10 = 26.)",
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
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "D",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "«O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savolining to'g'ri javobi — 26. 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-173",
      "question": "«Operativ xotira (RAM)» quyidagi qaysi savolning to'g'ri javobi? (RAM - energiyaga bog'liq tezkor xotiradir.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "B",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "C",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "D",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savolining to'g'ri javobi — Operativ xotira (RAM). RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-174",
      "question": "«BIOS dasturlari va dastlabki yuklash ko'rsatmalari» quyidagi qaysi savolning to'g'ri javobi? (ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savolining to'g'ri javobi — BIOS dasturlari va dastlabki yuklash ko'rsatmalari. ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-175",
      "question": "«Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi» quyidagi qaysi savolning to'g'ri javobi? (Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savolining to'g'ri javobi — Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi. Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-176",
      "question": "«Qattiq disk (HDD)» quyidagi qaysi savolning to'g'ri javobi? (HDD magnit disklar asosida ishlaydi.)",
      "options": [
        {
          "id": "A",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "B",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "C",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savolining to'g'ri javobi — Qattiq disk (HDD). HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-177",
      "question": "«SSD (Solid State Drive)» quyidagi qaysi savolning to'g'ri javobi? (SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi.)",
      "options": [
        {
          "id": "A",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savolining to'g'ri javobi — SSD (Solid State Drive). SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-178",
      "question": "«Gers (Gs, MGs, GGs)» quyidagi qaysi savolning to'g'ri javobi? (Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi.)",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "1 Kilobayt (KB) necha baytga teng?"
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
      "correct": "A",
      "xp": 150,
      "explanation": "«Taktli chastotaning o'lchov birligi nima?» savolining to'g'ri javobi — Gers (Gs, MGs, GGs). Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-179",
      "question": "«Skaner» quyidagi qaysi savolning to'g'ri javobi? (Skaner qog'ozdagi tasvirni kompyuterga kiritadi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
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
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savolining to'g'ri javobi — Skaner. Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-180",
      "question": "«Printer» quyidagi qaysi savolning to'g'ri javobi? (Printer raqamli ma'lumotni qog'ozga chiqaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "«Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savolining to'g'ri javobi — Printer. Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-181",
      "question": "«Plotter (grafik yasagich)» quyidagi qaysi savolning to'g'ri javobi? (Plotter katta o'lchamli chizmalar uchun ishlatiladi.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "D",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savolining to'g'ri javobi — Plotter (grafik yasagich). Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-182",
      "question": "«Ikkala mulohaza ham chin (1) bo'lganda» quyidagi qaysi savolning to'g'ri javobi? (A AND B faqat 1 va 1 bo'lganda 1 bo'ladi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savolining to'g'ri javobi — Ikkala mulohaza ham chin (1) bo'lganda. A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-183",
      "question": "«Ikkala mulohaza ham yolg'on (0) bo'lganda» quyidagi qaysi savolning to'g'ri javobi? (A OR B faqat 0 va 0 bo'lganda 0 ga teng.)",
      "options": [
        {
          "id": "A",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "B",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "D",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savolining to'g'ri javobi — Ikkala mulohaza ham yolg'on (0) bo'lganda. A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-184",
      "question": "«Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi» quyidagi qaysi savolning to'g'ri javobi? (NOT 1 = 0, NOT 0 = 1.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
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
      "correct": "B",
      "xp": 150,
      "explanation": "«Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savolining to'g'ri javobi — Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi. NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-185",
      "question": "«Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik» quyidagi qaysi savolning to'g'ri javobi? (Algoritm 5 ta asosiy xossaga ega.)",
      "options": [
        {
          "id": "A",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "B",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "C",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Algoritmning asosiy xossalari qaysilar?» savolining to'g'ri javobi — Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik. Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-186",
      "question": "«Romb» quyidagi qaysi savolning to'g'ri javobi? (Romb ichiga shart yoziladi (ha/yo'q).)",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "C",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savolining to'g'ri javobi — Romb. Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-187",
      "question": "«Parallelogramm» quyidagi qaysi savolning to'g'ri javobi? (Parallelogramm kiritish-chiqarish blokidir.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savolining to'g'ri javobi — Parallelogramm. Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-188",
      "question": "«To'g'ri to'rtburchak» quyidagi qaysi savolning to'g'ri javobi? (Amal yoki hisoblash to'g'ri to'rtburchakda beriladi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-189",
      "question": "«Oval (ellips)» quyidagi qaysi savolning to'g'ri javobi? (Boshlash va tamom oval ichiga yoziladi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "C",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "D",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savolining to'g'ri javobi — Oval (ellips). Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-190",
      "question": "«//» quyidagi qaysi savolning to'g'ri javobi? (Masalan: 7 // 2 = 3.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "B",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "C",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "D",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savolining to'g'ri javobi — //. Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-191",
      "question": "«%» quyidagi qaysi savolning to'g'ri javobi? (Masalan: 7 % 2 = 1.)",
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
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "D",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savolining to'g'ri javobi — %. Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-192",
      "question": "«**» quyidagi qaysi savolning to'g'ri javobi? (Masalan: 2 ** 3 = 8.)",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "B",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "D",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savolining to'g'ri javobi — **. Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-193",
      "question": "«int» quyidagi qaysi savolning to'g'ri javobi? (int - integer (butun son).)",
      "options": [
        {
          "id": "A",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
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
      "xp": 100,
      "explanation": "«Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savolining to'g'ri javobi — int. int - integer (butun son)."
    },
    {
      "id": "informatika-194",
      "question": "«float» quyidagi qaysi savolning to'g'ri javobi? (float - suzuvchi vergulli son.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "«Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savolining to'g'ri javobi — float. float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-195",
      "question": "«str (string)» quyidagi qaysi savolning to'g'ri javobi? (str - qo'shtirnoq ichidagi matn.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
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
      "correct": "B",
      "xp": 100,
      "explanation": "«Satrli (matnli) ma'lumot turi qanday ataladi?» savolining to'g'ri javobi — str (string). str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-196",
      "question": "«<a>» quyidagi qaysi savolning to'g'ri javobi? (<a href='...'>Havola matni</a>.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "B",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        },
        {
          "id": "D",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savolining to'g'ri javobi — <a>. <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-197",
      "question": "«<img>» quyidagi qaysi savolning to'g'ri javobi? (<img src='...' alt='...'>.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savolining to'g'ri javobi — <img>. <img src='...' alt='...'>."
    },
    {
      "id": "informatika-198",
      "question": "«<h1>» quyidagi qaysi savolning to'g'ri javobi? (h1 eng katta sarlavha, h6 eng kichigi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "«HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savolining to'g'ri javobi — <h1>. h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-199",
      "question": "«<ol>» quyidagi qaysi savolning to'g'ri javobi? (ol - ordered list, ul - unordered list.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "B",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savolining to'g'ri javobi — <ol>. ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-200",
      "question": "«Web sahifaning tashqi ko'rinishi va dizaynini bezash» quyidagi qaysi savolning to'g'ri javobi? (CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi.)",
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
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savolining to'g'ri javobi — Web sahifaning tashqi ko'rinishi va dizaynini bezash. CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-201",
      "question": "«4 bayt (32 bit, masalan: 192.168.1.1)» quyidagi qaysi savolning to'g'ri javobi? (IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir.)",
      "options": [
        {
          "id": "A",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "B",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "C",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "D",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savolining to'g'ri javobi — 4 bayt (32 bit, masalan: 192.168.1.1). IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-202",
      "question": "«Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish» quyidagi qaysi savolning to'g'ri javobi? (DNS inson tushunadigan nomni kompyuter IP siga o'giradi.)",
      "options": [
        {
          "id": "A",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«DNS (Domain Name System) serverining asosiy vazifasi nima?» savolining to'g'ri javobi — Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish. DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-203",
      "question": "«MAC-manzil» quyidagi qaysi savolning to'g'ri javobi? (MAC address 48 bitli unikal apparat manzilidir.)",
      "options": [
        {
          "id": "A",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "B",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "C",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        },
        {
          "id": "D",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savolining to'g'ri javobi — MAC-manzil. MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-204",
      "question": "«FTP» quyidagi qaysi savolning to'g'ri javobi? (FTP - File Transfer Protocol.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
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
      "explanation": "«Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savolining to'g'ri javobi — FTP. FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-205",
      "question": "«SMTP» quyidagi qaysi savolning to'g'ri javobi? (SMTP - Simple Mail Transfer Protocol.)",
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
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savolining to'g'ri javobi — SMTP. SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-206",
      "question": "«O'zaro bog'langan jadvallar ko'rinishida» quyidagi qaysi savolning to'g'ri javobi? (Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "«Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savolining to'g'ri javobi — O'zaro bog'langan jadvallar ko'rinishida. Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-207",
      "question": "«Yozuv (kortej / record)» quyidagi qaysi savolning to'g'ri javobi? (Jadval satri bitta ob'ektga tegishli 'yozuv'dir.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savolining to'g'ri javobi — Yozuv (kortej / record). Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-208",
      "question": "«Maydon (field / atribut)» quyidagi qaysi savolning to'g'ri javobi? (Ustunlar ob'ektning xossasi yoki 'maydon'idir.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savolining to'g'ri javobi — Maydon (field / atribut). Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-209",
      "question": "«Birlamchi kalit (Primary Key)» quyidagi qaysi savolning to'g'ri javobi? (Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "D",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savolining to'g'ri javobi — Birlamchi kalit (Primary Key). Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-210",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» quyidagi qaysi savolning to'g'ri javobi? (Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ish…)",
      "options": [
        {
          "id": "A",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "B",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish. Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-211",
      "question": "«Markaziy protsessor (CPU)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savolining to'g'ri javobi — Markaziy protsessor (CPU). Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-212",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» quyidagi qaysi savolning to'g'ri javobi? (Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saq…)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
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
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash. Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-213",
      "question": "«Operativ xotira (RAM)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "B",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "C",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savolining to'g'ri javobi — Operativ xotira (RAM). Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-214",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» quyidagi qaysi savolning to'g'ri javobi? (Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini…)",
      "options": [
        {
          "id": "A",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "B",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "C",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash. Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-215",
      "question": "«Doimiy xotira (ROM)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savolining to'g'ri javobi — Doimiy xotira (ROM). Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-216",
      "question": "«Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish» quyidagi qaysi savolning to'g'ri javobi? (Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezlig…)",
      "options": [
        {
          "id": "A",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "B",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish. Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-217",
      "question": "«Kesh-xotira (Cache)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savolining to'g'ri javobi — Kesh-xotira (Cache). Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-218",
      "question": "«Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish» quyidagi qaysi savolning to'g'ri javobi? (Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish. Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-219",
      "question": "«Videokarta (GPU)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Videokarta (GPU)'ga tegishli.)",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savolining to'g'ri javobi — Videokarta (GPU). Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-220",
      "question": "«Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata» quyidagi qaysi savolning to'g'ri javobi? (Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'l…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-221",
      "question": "«Ona plata (Motherboard)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "C",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savolining to'g'ri javobi — Ona plata (Motherboard). Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-222",
      "question": "«220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish» quyidagi qaysi savolning to'g'ri javobi? (Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'l…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish. Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-223",
      "question": "«Quvvat bloki (Power Supply)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savolining to'g'ri javobi — Quvvat bloki (Power Supply). Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-224",
      "question": "«Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli» quyidagi qaysi savolning to'g'ri javobi? (HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli.)",
      "options": [
        {
          "id": "A",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "explanation": "«Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli. HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-225",
      "question": "«HTTP / HTTPS» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'HTTP / HTTPS'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savolining to'g'ri javobi — HTTP / HTTPS. Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-226",
      "question": "«Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli» quyidagi qaysi savolning to'g'ri javobi? (FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzat…)",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
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
      "id": "informatika-227",
      "question": "«FTP (File Transfer Protocol)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli.)",
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
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-228",
      "question": "«Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli» quyidagi qaysi savolning to'g'ri javobi? (SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qi…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli. SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-229",
      "question": "«SMTP (Simple Mail Transfer Protocol)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
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
      "id": "informatika-230",
      "question": "«Elektron pochta serveridan xatlarni qabul qilib olish protokollari» quyidagi qaysi savolning to'g'ri javobi? (POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
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
      "id": "informatika-231",
      "question": "«POP3 va IMAP» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'POP3 va IMAP'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "B",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savolining to'g'ri javobi — POP3 va IMAP. Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-232",
      "question": "«Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish» quyidagi qaysi savolning to'g'ri javobi? (DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda d…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish. DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-233",
      "question": "«DHCP (Dynamic Host Configuration Protocol)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savolining to'g'ri javobi — DHCP (Dynamic Host Configuration Protocol). Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-234",
      "question": "«Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili» quyidagi qaysi savolning to'g'ri javobi? (IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy un…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili. IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-235",
      "question": "«IP manzil» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'IP manzil'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
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
      "id": "informatika-236",
      "question": "«Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili» quyidagi qaysi savolning to'g'ri javobi? (MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy app…)",
      "options": [
        {
          "id": "A",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "B",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "C",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili. MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-237",
      "question": "«MAC manzil» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'MAC manzil'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savolining to'g'ri javobi — MAC manzil. Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-238",
      "question": "«Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma» quyidagi qaysi savolning to'g'ri javobi? (Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalis…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "C",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "D",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma. Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-239",
      "question": "«Marshrutizator (Router)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "C",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savolining to'g'ri javobi — Marshrutizator (Router). Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-240",
      "question": "«Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma» quyidagi qaysi savolning to'g'ri javobi? (Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC…)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "B",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma. Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-241",
      "question": "«Kommutator (Switch)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Kommutator (Switch)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
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
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savolining to'g'ri javobi — Kommutator (Switch). Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-242",
      "question": "«Microsoft Word matnli hujjati fayl kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
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
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Microsoft Word matnli hujjati fayl kengaytmasi. .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-243",
      "question": "«.docx / .doc» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.docx / .doc'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "D",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savolining to'g'ri javobi — .docx / .doc. Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-244",
      "question": "«Microsoft Excel elektron jadvali fayl kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi.)",
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
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Microsoft Excel elektron jadvali fayl kengaytmasi. .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-245",
      "question": "«.xlsx / .xls» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.xlsx / .xls'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "C",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "D",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savolining to'g'ri javobi — .xlsx / .xls. Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-246",
      "question": "«Microsoft PowerPoint taqdimot fayli kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Microsoft PowerPoint taqdimot fayli kengaytmasi. .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-247",
      "question": "«.pptx / .ppt» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.pptx / .ppt'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savolining to'g'ri javobi — .pptx / .ppt. Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-248",
      "question": "«Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli» quyidagi qaysi savolning to'g'ri javobi? (.html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "C",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "D",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli. .html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-249",
      "question": "«.html / .htm» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.html / .htm'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savolining to'g'ri javobi — .html / .htm. Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-250",
      "question": "«Raqamli audio (tovush) fayllari formati» quyidagi qaysi savolning to'g'ri javobi? (.mp3 / .wav - Raqamli audio (tovush) fayllari formati.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Raqamli audio (tovush) fayllari formati. .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-251",
      "question": "«.mp3 / .wav» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.mp3 / .wav'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savolining to'g'ri javobi — .mp3 / .wav. Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-252",
      "question": "«Raqamli video fayllari kengaytmasi» quyidagi qaysi savolning to'g'ri javobi? (.mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Raqamli video fayllari kengaytmasi. .mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-253",
      "question": "«.mp4 / .avi / .mkv» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "B",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savolining to'g'ri javobi — .mp4 / .avi / .mkv. Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-254",
      "question": "«Raqamli rastrli va vektorli grafik tasvirlar formati» quyidagi qaysi savolning to'g'ri javobi? (.jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati.)",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "B",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "C",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Raqamli rastrli va vektorli grafik tasvirlar formati. .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-255",
      "question": "«.jpg / .png / .svg» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.jpg / .png / .svg'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savolining to'g'ri javobi — .jpg / .png / .svg. Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-256",
      "question": "«Hajmni kichraytirish va arxivlash dasturlari fayli» quyidagi qaysi savolning to'g'ri javobi? (.zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli.)",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "C",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Hajmni kichraytirish va arxivlash dasturlari fayli. .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-257",
      "question": "«.zip / .rar / .7z» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.zip / .rar / .7z'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "C",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "D",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savolining to'g'ri javobi — .zip / .rar / .7z. Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-258",
      "question": "«Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli» quyidagi qaysi savolning to'g'ri javobi? (.exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "C",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli. .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-259",
      "question": "«.exe / .msi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '.exe / .msi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        },
        {
          "id": "C",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "D",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savolining to'g'ri javobi — .exe / .msi. Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-260",
      "question": "«Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar» quyidagi qaysi savolning to'g'ri javobi? (Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar. Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-261",
      "question": "«Tizimli dasturiy ta'minot» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savolining to'g'ri javobi — Tizimli dasturiy ta'minot. Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-262",
      "question": "«Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)» quyidagi qaysi savolning to'g'ri javobi? (Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop). Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-263",
      "question": "«Amaliy dasturiy ta'minot» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-264",
      "question": "«Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur» quyidagi qaysi savolning to'g'ri javobi? (Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtas…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur. Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-265",
      "question": "«Drayver» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Drayver'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savolining to'g'ri javobi — Drayver. Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-266",
      "question": "«Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim» quyidagi qaysi savolning to'g'ri javobi? (BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim. BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-267",
      "question": "«BIOS (Basic Input/Output System)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "C",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "D",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savolining to'g'ri javobi — BIOS (Basic Input/Output System). Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-268",
      "question": "«Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi» quyidagi qaysi savolning to'g'ri javobi? (Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash,…)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi. Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-269",
      "question": "«Antivirus dasturi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Antivirus dasturi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
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
      "id": "informatika-270",
      "question": "«Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha» quyidagi qaysi savolning to'g'ri javobi? (O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi…)",
      "options": [
        {
          "id": "A",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "B",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "D",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha. O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-271",
      "question": "«O'zgaruvchi (Variable)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savolining to'g'ri javobi — O'zgaruvchi (Variable). Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-272",
      "question": "«Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma» quyidagi qaysi savolning to'g'ri javobi? (Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'pla…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma. Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-273",
      "question": "«Massiv (Ro'yxat / List)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savolining to'g'ri javobi — Massiv (Ro'yxat / List). Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-274",
      "question": "«Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki» quyidagi qaysi savolning to'g'ri javobi? (Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ish…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki. Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-275",
      "question": "«Funksiya (Function)» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Funksiya (Function)'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
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
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savolining to'g'ri javobi — Funksiya (Function). Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-276",
      "question": "«Funksiyaning o'zini o'zi qayta chaqirishi hodisasi» quyidagi qaysi savolning to'g'ri javobi? (Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi.)",
      "options": [
        {
          "id": "A",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "C",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Funksiyaning o'zini o'zi qayta chaqirishi hodisasi. Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-277",
      "question": "«Rekursiya» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Rekursiya'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savolining to'g'ri javobi — Rekursiya. Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-278",
      "question": "«Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita» quyidagi qaysi savolning to'g'ri javobi? (Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik k…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita. Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-279",
      "question": "«Kompilyator» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Kompilyator'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savolining to'g'ri javobi — Kompilyator. Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-280",
      "question": "«Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)» quyidagi qaysi savolning to'g'ri javobi? (Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan,…)",
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
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori). Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-281",
      "question": "«Interpretator» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'Interpretator'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savolining to'g'ri javobi — Interpretator. Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-282",
      "question": "«HTML tilida jadval yaratish uchun ochiladigan bosh teg» quyidagi qaysi savolning to'g'ri javobi? (<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — HTML tilida jadval yaratish uchun ochiladigan bosh teg. <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-283",
      "question": "«<table> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<table> tegi'ga tegishli.)",
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
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savolining to'g'ri javobi — <table> tegi. Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-284",
      "question": "«HTML jadvalida yangi satr (qator) hosil qiluvchi teg» quyidagi qaysi savolning to'g'ri javobi? (<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg.)",
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
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — HTML jadvalida yangi satr (qator) hosil qiluvchi teg. <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-285",
      "question": "«<tr> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<tr> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
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
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savolining to'g'ri javobi — <tr> tegi. Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-286",
      "question": "«HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg» quyidagi qaysi savolning to'g'ri javobi? (<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "correct": "A",
      "xp": 200,
      "explanation": "«Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg. <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-287",
      "question": "«<td> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<td> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "B",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "C",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savolining to'g'ri javobi — <td> tegi. Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-288",
      "question": "«Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi» quyidagi qaysi savolning to'g'ri javobi? (<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun sha…)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi. <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-289",
      "question": "«<form> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<form> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savolining to'g'ri javobi — <form> tegi. Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-290",
      "question": "«Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg» quyidagi qaysi savolning to'g'ri javobi? (<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radi…)",
      "options": [
        {
          "id": "A",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "B",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "D",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining to'g'ri javobi — Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg. <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-291",
      "question": "«<input> tegi» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif '<input> tegi'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savolining to'g'ri javobi — <input> tegi. Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-292",
      "question": "«Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili» quyidagi qaysi savolning to'g'ri javobi? (JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash…)",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "C",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
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
      "id": "informatika-293",
      "question": "«JavaScript» quyidagi qaysi savolning to'g'ri javobi? (Ushbu ta'rif 'JavaScript'ga tegishli.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savolining to'g'ri javobi — JavaScript. Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-294",
      "question": "«print()» quyidagi qaysi savolning to'g'ri javobi? (print() orqali natija konsolga chiqariladi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "«Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savolining to'g'ri javobi — print(). print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-295",
      "question": "«input()» quyidagi qaysi savolning to'g'ri javobi? (input() klaviaturadan satr ko'rinishida qabul qiladi.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savolining to'g'ri javobi — input(). input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-296",
      "question": "«if» quyidagi qaysi savolning to'g'ri javobi? (if shart: ... elif ... else.)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "B",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "D",
          "text": "Rastrli grafika nimaga asoslangan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savolining to'g'ri javobi — if. if shart: ... elif ... else."
    },
    {
      "id": "informatika-297",
      "question": "«def» quyidagi qaysi savolning to'g'ri javobi? (def funksiya_nomi(parametrlar): ...)",
      "options": [
        {
          "id": "A",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savolining to'g'ri javobi — def. def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-298",
      "question": "«for» quyidagi qaysi savolning to'g'ri javobi? (for i in range(...): tsikli.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "B",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "«Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savolining to'g'ri javobi — for. for i in range(...): tsikli."
    },
    {
      "id": "informatika-299",
      "question": "«while» quyidagi qaysi savolning to'g'ri javobi? (while shart: ... tsikli.)",
      "options": [
        {
          "id": "A",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savolining to'g'ri javobi — while. while shart: ... tsikli."
    },
    {
      "id": "informatika-300",
      "question": "«[ ] (to'rtburchak qavslar)» quyidagi qaysi savolning to'g'ri javobi? (Ro'yxat: a = [1, 2, 3].)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savolining to'g'ri javobi — [ ] (to'rtburchak qavslar). Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-301",
      "question": "«( ) (oddiy qavslar)» quyidagi qaysi savolning to'g'ri javobi? (Kortej: a = (1, 2, 3).)",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "B",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "D",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savolining to'g'ri javobi — ( ) (oddiy qavslar). Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-302",
      "question": "«{kalit: qiymat}» quyidagi qaysi savolning to'g'ri javobi? (Lug'at: d = {'ism': 'Ali', 'yosh': 16}.)",
      "options": [
        {
          "id": "A",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        },
        {
          "id": "B",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
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
      "correct": "B",
      "xp": 200,
      "explanation": "«Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?» savolining to'g'ri javobi — {kalit: qiymat}. Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-303",
      "question": "«len()» quyidagi qaysi savolning to'g'ri javobi? (len(a) ro'yxat yoki satr uzunligini qaytaradi.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savolining to'g'ri javobi — len(). len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-304",
      "question": "«Piksellar (nuqtalar) to'riga» quyidagi qaysi savolning to'g'ri javobi? (Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG).)",
      "options": [
        {
          "id": "A",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "C",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        },
        {
          "id": "D",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Rastrli grafika nimaga asoslangan?» savolining to'g'ri javobi — Piksellar (nuqtalar) to'riga. Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-305",
      "question": "«Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi» quyidagi qaysi savolning to'g'ri javobi? (Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR).)",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "C",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "D",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savolining to'g'ri javobi — Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi. Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-306",
      "question": "«Red (Qizil), Green (Yashil), Blue (Ko'k)» quyidagi qaysi savolning to'g'ri javobi? (RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model.)",
      "options": [
        {
          "id": "A",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "B",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "«RGB rang modelida asosiy ranglar qaysilar?» savolining to'g'ri javobi — Red (Qizil), Green (Yashil), Blue (Ko'k). RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-307",
      "question": "«CMYK (Cyan, Magenta, Yellow, blacK)» quyidagi qaysi savolning to'g'ri javobi? (CMYK bo'yoqlar aralashuvi modelidir.)",
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
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "D",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "«Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?» savolining to'g'ri javobi — CMYK (Cyan, Magenta, Yellow, blacK). CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-308",
      "question": "«Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)» quyidagi qaysi savolning to'g'ri javobi? (CIA triad: Confidentiality, Integrity, Availability.)",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "D",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "«Axborot xavfsizligining uchta asosiy tamoyili qaysilar?» savolining to'g'ri javobi — Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik). CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-309",
      "question": "«Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish» quyidagi qaysi savolning to'g'ri javobi? (Arxivlash fayl hajmini kamaytiradi (ZIP, RAR).)",
      "options": [
        {
          "id": "A",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "B",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "C",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        },
        {
          "id": "D",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "«Fayllarni siqish (arxivlash)dan asosiy maqsad nima?» savolining to'g'ri javobi — Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish. Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-310",
      "question": "«Windows, Linux, macOS, Android» quyidagi qaysi savolning to'g'ri javobi? (Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir.)",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "«Quyidagilardan qaysi biri operatsion sistema hisoblanadi?» savolining to'g'ri javobi — Windows, Linux, macOS, Android. Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-311",
      "question": "«Linus Torvalds (1991-yilda)» quyidagi qaysi savolning to'g'ri javobi? (Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan.)",
      "options": [
        {
          "id": "A",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "«Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?» savolining to'g'ri javobi — Linus Torvalds (1991-yilda). Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-312",
      "question": "«Bill Geyts va Pol Allen» quyidagi qaysi savolning to'g'ri javobi? (1975-yilda tashkil topgan.)",
      "options": [
        {
          "id": "A",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "B",
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "C",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "«Microsoft kompaniyasining asoschisi kim?» savolining to'g'ri javobi — Bill Geyts va Pol Allen. 1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-313",
      "question": "«Stiv Jobs va Stiv Voznyak» quyidagi qaysi savolning to'g'ri javobi? (1976-yilda Apple I kompyuterini yaratgan.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "«Apple kompaniyasining asoschilari kimlar?» savolining to'g'ri javobi — Stiv Jobs va Stiv Voznyak. 1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-314",
      "question": "«Larri Peyj va Sergey Brin» quyidagi qaysi savolning to'g'ri javobi? (1998-yilda Stenford universiteti talabalari tomonidan yaratilgan.)",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "B",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "«Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?» savolining to'g'ri javobi — Larri Peyj va Sergey Brin. 1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-315",
      "question": "«1 bayt = 8 bit.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "B",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "C",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "D",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "1 bayt = 8 bit."
    },
    {
      "id": "informatika-316",
      "question": "«Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-317",
      "question": "«HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir.» izohi qaysi savolga mos keladi?",
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
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-318",
      "question": "«1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "B",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
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
      "correct": "B",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-319",
      "question": "«1 KB = 2¹⁰ bayt = 1024 bayt.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-320",
      "question": "«1 MB = 1024 KB = 2²⁰ bayt.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "B",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "D",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-321",
      "question": "«1 GB = 1024 MB.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "B",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "C",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        },
        {
          "id": "D",
          "text": "Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "informatika-322",
      "question": "«Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "B",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        },
        {
          "id": "C",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
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
      "id": "informatika-323",
      "question": "«Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-324",
      "question": "«N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-325",
      "question": "«O'n oltilikda 10 dan 15 gacha harflar qo'llanadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-326",
      "question": "«8 + 4 + 2 + 1 = 15.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-327",
      "question": "«16 = 2⁴ = 10000₂.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "B",
          "text": "CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?"
        },
        {
          "id": "C",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "D",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-328",
      "question": "«Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "C",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-329",
      "question": "«1·16¹ + 10·16⁰ = 16 + 10 = 26.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-330",
      "question": "«RAM - energiyaga bog'liq tezkor xotiradir.» izohi qaysi savolga mos keladi?",
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
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-331",
      "question": "«ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "B",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "C",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "D",
          "text": "Rastrli grafika nimaga asoslangan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-332",
      "question": "«Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
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
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-333",
      "question": "«HDD magnit disklar asosida ishlaydi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "B",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "D",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-334",
      "question": "«SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
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
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-335",
      "question": "«Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
    },
    {
      "id": "informatika-336",
      "question": "«Skaner qog'ozdagi tasvirni kompyuterga kiritadi.» izohi qaysi savolga mos keladi?",
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
          "text": "Taktli chastotaning o'lchov birligi nima?"
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
      "id": "informatika-337",
      "question": "«Printer raqamli ma'lumotni qog'ozga chiqaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-338",
      "question": "«Plotter katta o'lchamli chizmalar uchun ishlatiladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
        },
        {
          "id": "B",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-339",
      "question": "«A AND B faqat 1 va 1 bo'lganda 1 bo'ladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-340",
      "question": "«A OR B faqat 0 va 0 bo'lganda 0 ga teng.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-341",
      "question": "«NOT 1 = 0, NOT 0 = 1.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-342",
      "question": "«Algoritm 5 ta asosiy xossaga ega.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
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
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-343",
      "question": "«Romb ichiga shart yoziladi (ha/yo'q).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "C",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "D",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-344",
      "question": "«Parallelogramm kiritish-chiqarish blokidir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
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
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-345",
      "question": "«Amal yoki hisoblash to'g'ri to'rtburchakda beriladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "C",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-346",
      "question": "«Boshlash va tamom oval ichiga yoziladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        },
        {
          "id": "B",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "C",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
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
      "id": "informatika-347",
      "question": "«Masalan: 7 // 2 = 3.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-348",
      "question": "«Masalan: 7 % 2 = 1.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?"
        },
        {
          "id": "D",
          "text": "Rastrli grafika nimaga asoslangan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-349",
      "question": "«Masalan: 2 ** 3 = 8.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache memory) qanday vazifani bajaradi?"
        },
        {
          "id": "B",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "C",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "Python tilida darajaga ko'tarish operatori qanday belgilanadi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-350",
      "question": "«int - integer (butun son).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        },
        {
          "id": "C",
          "text": "Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?"
        },
        {
          "id": "D",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "informatika-351",
      "question": "«float - suzuvchi vergulli son.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "B",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "C",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
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
      "id": "informatika-352",
      "question": "«str - qo'shtirnoq ichidagi matn.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "C",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "D",
          "text": "Algoritmning asosiy xossalari qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-353",
      "question": "«<a href='...'>Havola matni</a>.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "<a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-354",
      "question": "«<img src='...' alt='...'>.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "informatika-355",
      "question": "«h1 eng katta sarlavha, h6 eng kichigi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "B",
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
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
      "correct": "B",
      "xp": 100,
      "explanation": "h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-356",
      "question": "«ol - ordered list, ul - unordered list.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?"
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
          "text": "Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-357",
      "question": "«CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "C",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
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
      "id": "informatika-358",
      "question": "«IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        },
        {
          "id": "B",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
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
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-359",
      "question": "«DNS inson tushunadigan nomni kompyuter IP siga o'giradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-360",
      "question": "«MAC address 48 bitli unikal apparat manzilidir.» izohi qaysi savolga mos keladi?",
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
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-361",
      "question": "«FTP - File Transfer Protocol.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
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
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-362",
      "question": "«SMTP - Simple Mail Transfer Protocol.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "Taktli chastotaning o'lchov birligi nima?"
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
      "correct": "A",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-363",
      "question": "«Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan.» izohi qaysi savolga mos keladi?",
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
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        },
        {
          "id": "D",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-364",
      "question": "«Jadval satri bitta ob'ektga tegishli 'yozuv'dir.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-365",
      "question": "«Ustunlar ob'ektning xossasi yoki 'maydon'idir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?"
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
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-366",
      "question": "«Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi.» izohi qaysi savolga mos keladi?",
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
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-367",
      "question": "«Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-368",
      "question": "«Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "C",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        },
        {
          "id": "D",
          "text": "ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-369",
      "question": "«Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-370",
      "question": "«Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-371",
      "question": "«Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-372",
      "question": "«Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-373",
      "question": "«Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-374",
      "question": "«Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "B",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "D",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-375",
      "question": "«Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-376",
      "question": "«Ushbu ta'rif 'Videokarta (GPU)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-377",
      "question": "«Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-378",
      "question": "«Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-379",
      "question": "«Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-380",
      "question": "«Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-381",
      "question": "«HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-382",
      "question": "«Ushbu ta'rif 'HTTP / HTTPS'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "D",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-383",
      "question": "«FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-384",
      "question": "«Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "D",
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-385",
      "question": "«SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-386",
      "question": "«Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-387",
      "question": "«POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-388",
      "question": "«Ushbu ta'rif 'POP3 va IMAP'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
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
          "text": "1 Kilobayt (KB) necha baytga teng?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-389",
      "question": "«DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-390",
      "question": "«Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
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
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-391",
      "question": "«IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        },
        {
          "id": "B",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "D",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-392",
      "question": "«Ushbu ta'rif 'IP manzil'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-393",
      "question": "«MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
          "text": "Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-394",
      "question": "«Ushbu ta'rif 'MAC manzil'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "1 Gigabayt (GB) necha Megabaytga teng?"
        },
        {
          "id": "B",
          "text": "1 Megabayt (MB) necha Kilobaytga teng?"
        },
        {
          "id": "C",
          "text": "1 Kilobayt (KB) necha baytga teng?"
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
      "id": "informatika-395",
      "question": "«Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "correct": "B",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-396",
      "question": "«Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-397",
      "question": "«Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "C",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "D",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-398",
      "question": "«Ushbu ta'rif 'Kommutator (Switch)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "C",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-399",
      "question": "«.docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-400",
      "question": "«Ushbu ta'rif '.docx / .doc'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-401",
      "question": "«.xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-402",
      "question": "«Ushbu ta'rif '.xlsx / .xls'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-403",
      "question": "«.pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-404",
      "question": "«Ushbu ta'rif '.pptx / .ppt'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-405",
      "question": "«.html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-406",
      "question": "«Ushbu ta'rif '.html / .htm'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-407",
      "question": "«.mp3 / .wav - Raqamli audio (tovush) fayllari formati.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "D",
          "text": "Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-408",
      "question": "«Ushbu ta'rif '.mp3 / .wav'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-409",
      "question": "«.mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-410",
      "question": "«Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "1 Kilobayt (KB) necha baytga teng?"
        },
        {
          "id": "D",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-411",
      "question": "«.jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
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
      "id": "informatika-412",
      "question": "«Ushbu ta'rif '.jpg / .png / .svg'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-413",
      "question": "«.zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-414",
      "question": "«Ushbu ta'rif '.zip / .rar / .7z'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?"
        },
        {
          "id": "D",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-415",
      "question": "«.exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-416",
      "question": "«Ushbu ta'rif '.exe / .msi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-417",
      "question": "«Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-418",
      "question": "«Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?"
        },
        {
          "id": "D",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-419",
      "question": "«Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop).» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-420",
      "question": "«Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?"
        },
        {
          "id": "C",
          "text": "Fayllarni internet orqali uzatishning klassik protokoli qaysi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-421",
      "question": "«Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-422",
      "question": "«Ushbu ta'rif 'Drayver'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?"
        },
        {
          "id": "B",
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "C",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-423",
      "question": "«BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-424",
      "question": "«Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-425",
      "question": "«Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?"
        },
        {
          "id": "C",
          "text": "Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?"
        },
        {
          "id": "D",
          "text": "Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-426",
      "question": "«Ushbu ta'rif 'Antivirus dasturi'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        },
        {
          "id": "D",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-427",
      "question": "«O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        },
        {
          "id": "B",
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "C",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-428",
      "question": "«Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-429",
      "question": "«Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-430",
      "question": "«Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?"
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-431",
      "question": "«Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-432",
      "question": "«Ushbu ta'rif 'Funksiya (Function)'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-433",
      "question": "«Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-434",
      "question": "«Ushbu ta'rif 'Rekursiya'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-435",
      "question": "«Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita.» izohi qaysi savolga mos keladi?",
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
          "text": "Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-436",
      "question": "«Ushbu ta'rif 'Kompilyator'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-437",
      "question": "«Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "B",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "C",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-438",
      "question": "«Ushbu ta'rif 'Interpretator'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "B",
          "text": "Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-439",
      "question": "«<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-440",
      "question": "«Ushbu ta'rif '<table> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?"
        },
        {
          "id": "C",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-441",
      "question": "«<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?"
        },
        {
          "id": "C",
          "text": "Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
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
      "id": "informatika-442",
      "question": "«Ushbu ta'rif '<tr> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "B",
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?"
        },
        {
          "id": "D",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-443",
      "question": "«<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg.» izohi qaysi savolga mos keladi?",
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
          "text": "Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-444",
      "question": "«Ushbu ta'rif '<td> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?"
        },
        {
          "id": "C",
          "text": "Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?"
        },
        {
          "id": "D",
          "text": "Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-445",
      "question": "«<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-446",
      "question": "«Ushbu ta'rif '<form> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-447",
      "question": "«<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "C",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        },
        {
          "id": "D",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-448",
      "question": "«Ushbu ta'rif '<input> tegi'ga tegishli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "HTML tili asosan nima uchun ishlatiladi?"
        },
        {
          "id": "B",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "C",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
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
      "id": "informatika-449",
      "question": "«JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-450",
      "question": "«Ushbu ta'rif 'JavaScript'ga tegishli.» izohi qaysi savolga mos keladi?",
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
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-451",
      "question": "«print() orqali natija konsolga chiqariladi.» izohi qaysi savolga mos keladi?",
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
          "text": "Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-452",
      "question": "«input() klaviaturadan satr ko'rinishida qabul qiladi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?"
        },
        {
          "id": "B",
          "text": "Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?"
        },
        {
          "id": "C",
          "text": "Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?"
        },
        {
          "id": "D",
          "text": "Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-453",
      "question": "«if shart: ... elif ... else.» izohi qaysi savolga mos keladi?",
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
          "text": "Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?"
        },
        {
          "id": "D",
          "text": "Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "informatika-454",
      "question": "«def funksiya_nomi(parametrlar): ...» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Taktli chastotaning o'lchov birligi nima?"
        },
        {
          "id": "B",
          "text": "Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?"
        },
        {
          "id": "C",
          "text": "Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?"
        },
        {
          "id": "D",
          "text": "Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-455",
      "question": "«for i in range(...): tsikli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "informatika-456",
      "question": "«while shart: ... tsikli.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?"
        },
        {
          "id": "B",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "informatika-457",
      "question": "«Ro'yxat: a = [1, 2, 3].» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?"
        },
        {
          "id": "C",
          "text": "DNS (Domain Name System) serverining asosiy vazifasi nima?"
        },
        {
          "id": "D",
          "text": "Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-458",
      "question": "«Kortej: a = (1, 2, 3).» izohi qaysi savolga mos keladi?",
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
          "text": "O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?"
        },
        {
          "id": "D",
          "text": "Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-459",
      "question": "«Lug'at: d = {'ism': 'Ali', 'yosh': 16}.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-460",
      "question": "«len(a) ro'yxat yoki satr uzunligini qaytaradi.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?"
        },
        {
          "id": "D",
          "text": "Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-461",
      "question": "«Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?"
        },
        {
          "id": "B",
          "text": "Rastrli grafika nimaga asoslangan?"
        },
        {
          "id": "C",
          "text": "Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-462",
      "question": "«Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?"
        },
        {
          "id": "B",
          "text": "Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?"
        },
        {
          "id": "C",
          "text": "Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?"
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
      "id": "informatika-463",
      "question": "«RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model.» izohi qaysi savolga mos keladi?",
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
          "text": "RGB rang modelida asosiy ranglar qaysilar?"
        },
        {
          "id": "D",
          "text": "Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-464",
      "question": "«CMYK bo'yoqlar aralashuvi modelidir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        },
        {
          "id": "B",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-465",
      "question": "«CIA triad: Confidentiality, Integrity, Availability.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Axborot xavfsizligining uchta asosiy tamoyili qaysilar?"
        },
        {
          "id": "B",
          "text": "HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?"
        },
        {
          "id": "C",
          "text": "Satrli (matnli) ma'lumot turi qanday ataladi?"
        },
        {
          "id": "D",
          "text": "Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-466",
      "question": "«Arxivlash fayl hajmini kamaytiradi (ZIP, RAR).» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?"
        },
        {
          "id": "D",
          "text": "Fayllarni siqish (arxivlash)dan asosiy maqsad nima?"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-467",
      "question": "«Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?"
        },
        {
          "id": "B",
          "text": "Quyidagilardan qaysi biri operatsion sistema hisoblanadi?"
        },
        {
          "id": "C",
          "text": "Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?"
        },
        {
          "id": "D",
          "text": "Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-468",
      "question": "«Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?"
        },
        {
          "id": "D",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-469",
      "question": "«1975-yilda tashkil topgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?"
        },
        {
          "id": "B",
          "text": "O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?"
        },
        {
          "id": "C",
          "text": "Microsoft kompaniyasining asoschisi kim?"
        },
        {
          "id": "D",
          "text": "O'n oltilikdagi 1A soni o'nlikda nechaga teng?"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-470",
      "question": "«1976-yilda Apple I kompyuterini yaratgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Bir baytda nechta bit bor?"
        },
        {
          "id": "B",
          "text": "Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?"
        },
        {
          "id": "C",
          "text": "Kompyuterning asosiy hisoblash qurilmasi qaysi?"
        },
        {
          "id": "D",
          "text": "Apple kompaniyasining asoschilari kimlar?"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-471",
      "question": "«1998-yilda Stenford universiteti talabalari tomonidan yaratilgan.» izohi qaysi savolga mos keladi?",
      "options": [
        {
          "id": "A",
          "text": "Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "B",
          "text": "Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?"
        },
        {
          "id": "C",
          "text": "Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?"
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
      "id": "informatika-472",
      "question": "«Bir baytda nechta bit bor?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "B",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        },
        {
          "id": "C",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "D",
          "text": "1 bayt = 8 bit."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "1 bayt = 8 bit."
    },
    {
      "id": "informatika-473",
      "question": "«Kompyuterning asosiy hisoblash qurilmasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-474",
      "question": "«HTML tili asosan nima uchun ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
        },
        {
          "id": "C",
          "text": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
        },
        {
          "id": "D",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-475",
      "question": "«Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        },
        {
          "id": "B",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-476",
      "question": "«1 Kilobayt (KB) necha baytga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        },
        {
          "id": "B",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "D",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-477",
      "question": "«1 Megabayt (MB) necha Kilobaytga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "B",
          "text": "1 MB = 1024 KB = 2²⁰ bayt."
        },
        {
          "id": "C",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "D",
          "text": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-478",
      "question": "«1 Gigabayt (GB) necha Megabaytga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 GB = 1024 MB."
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
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 GB = 1024 MB."
    },
    {
      "id": "informatika-479",
      "question": "«ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        },
        {
          "id": "B",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        },
        {
          "id": "C",
          "text": "RAM - energiyaga bog'liq tezkor xotiradir."
        },
        {
          "id": "D",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-480",
      "question": "«Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "B",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-481",
      "question": "«Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
        },
        {
          "id": "C",
          "text": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
        },
        {
          "id": "D",
          "text": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "N - belgilar/hodisalar soni, i - har birining axborot hajmi (bit)."
    },
    {
      "id": "informatika-482",
      "question": "«O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        },
        {
          "id": "B",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "C",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        },
        {
          "id": "D",
          "text": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-483",
      "question": "«Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
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
          "text": "8 + 4 + 2 + 1 = 15."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-484",
      "question": "«O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "B",
          "text": "16 = 2⁴ = 10000₂."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "D",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-485",
      "question": "«Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "B",
          "text": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
        },
        {
          "id": "C",
          "text": "<a href='...'>Havola matni</a>."
        },
        {
          "id": "D",
          "text": "<img src='...' alt='...'>."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-486",
      "question": "«O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "B",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "C",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
        },
        {
          "id": "D",
          "text": "NOT 1 = 0, NOT 0 = 1."
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-487",
      "question": "«Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "C",
          "text": "RAM - energiyaga bog'liq tezkor xotiradir."
        },
        {
          "id": "D",
          "text": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-488",
      "question": "«Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        },
        {
          "id": "B",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-489",
      "question": "«Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
        },
        {
          "id": "C",
          "text": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
        },
        {
          "id": "D",
          "text": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-490",
      "question": "«Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        },
        {
          "id": "B",
          "text": "HDD magnit disklar asosida ishlaydi."
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
      "correct": "B",
      "xp": 150,
      "explanation": "HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-491",
      "question": "«Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "B",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "C",
          "text": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
        },
        {
          "id": "D",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-492",
      "question": "«Taktli chastotaning o'lchov birligi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "B",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "C",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
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
      "id": "informatika-493",
      "question": "«Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.docx / .doc'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
        },
        {
          "id": "D",
          "text": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-494",
      "question": "«Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-495",
      "question": "«Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
        },
        {
          "id": "C",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
    },
    {
      "id": "informatika-496",
      "question": "«Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        },
        {
          "id": "B",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
        },
        {
          "id": "C",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "D",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-497",
      "question": "«Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "B",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        },
        {
          "id": "D",
          "text": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
    },
    {
      "id": "informatika-498",
      "question": "«Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        },
        {
          "id": "B",
          "text": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-499",
      "question": "«Algoritmning asosiy xossalari qaysilar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        },
        {
          "id": "D",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-500",
      "question": "«Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "B",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
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
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-501",
      "question": "«Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "Parallelogramm kiritish-chiqarish blokidir."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-502",
      "question": "«Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
        },
        {
          "id": "B",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        },
        {
          "id": "C",
          "text": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
        },
        {
          "id": "D",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-503",
      "question": "«Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 GB = 1024 MB."
        },
        {
          "id": "B",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        },
        {
          "id": "C",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        },
        {
          "id": "D",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-504",
      "question": "«Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "B",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "C",
          "text": "ol - ordered list, ul - unordered list."
        },
        {
          "id": "D",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-505",
      "question": "«Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "str - qo'shtirnoq ichidagi matn."
        },
        {
          "id": "B",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "C",
          "text": "float - suzuvchi vergulli son."
        },
        {
          "id": "D",
          "text": "int - integer (butun son)."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-506",
      "question": "«Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
        },
        {
          "id": "C",
          "text": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
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
      "id": "informatika-507",
      "question": "«Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        },
        {
          "id": "C",
          "text": "int - integer (butun son)."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "informatika-508",
      "question": "«Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "B",
          "text": "float - suzuvchi vergulli son."
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
      "correct": "B",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-509",
      "question": "«Satrli (matnli) ma'lumot turi qanday ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "B",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "C",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
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
      "id": "informatika-510",
      "question": "«Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<a href='...'>Havola matni</a>."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "C",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "<a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-511",
      "question": "«HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "B",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "C",
          "text": "<img src='...' alt='...'>."
        },
        {
          "id": "D",
          "text": "Masalan: 7 % 2 = 1."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "<img src='...' alt='...'>."
    },
    {
      "id": "informatika-512",
      "question": "«HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "D",
          "text": "if shart: ... elif ... else."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-513",
      "question": "«HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        },
        {
          "id": "B",
          "text": "ol - ordered list, ul - unordered list."
        },
        {
          "id": "C",
          "text": "SMTP - Simple Mail Transfer Protocol."
        },
        {
          "id": "D",
          "text": "FTP - File Transfer Protocol."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-514",
      "question": "«CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        },
        {
          "id": "B",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        },
        {
          "id": "C",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        },
        {
          "id": "D",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-515",
      "question": "«IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        },
        {
          "id": "C",
          "text": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-516",
      "question": "«DNS (Domain Name System) serverining asosiy vazifasi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "ol - ordered list, ul - unordered list."
        },
        {
          "id": "B",
          "text": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
        },
        {
          "id": "C",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "D",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-517",
      "question": "«Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "int - integer (butun son)."
        },
        {
          "id": "B",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "C",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "D",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-518",
      "question": "«Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "D",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-519",
      "question": "«Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "SMTP - Simple Mail Transfer Protocol."
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
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-520",
      "question": "«Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Kompilyator'ga tegishli."
        },
        {
          "id": "B",
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Interpretator'ga tegishli."
        },
        {
          "id": "D",
          "text": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-521",
      "question": "«Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
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
          "text": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-522",
      "question": "«Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
        },
        {
          "id": "D",
          "text": "O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-523",
      "question": "«Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        },
        {
          "id": "B",
          "text": "1 GB = 1024 MB."
        },
        {
          "id": "C",
          "text": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
        },
        {
          "id": "D",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-524",
      "question": "«Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        },
        {
          "id": "B",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        },
        {
          "id": "C",
          "text": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-525",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
        },
        {
          "id": "C",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "D",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-526",
      "question": "«Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
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
      "id": "informatika-527",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        },
        {
          "id": "D",
          "text": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Operativ xotira (RAM)'ga tegishli."
    },
    {
      "id": "informatika-528",
      "question": "«Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "ol - ordered list, ul - unordered list."
        },
        {
          "id": "B",
          "text": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
        },
        {
          "id": "C",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "D",
          "text": "CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-529",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
        },
        {
          "id": "D",
          "text": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-530",
      "question": "«Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
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
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-531",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        },
        {
          "id": "B",
          "text": "SMTP - Simple Mail Transfer Protocol."
        },
        {
          "id": "C",
          "text": "Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
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
      "id": "informatika-532",
      "question": "«Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        },
        {
          "id": "B",
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        },
        {
          "id": "C",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-533",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1975-yilda tashkil topgan."
        },
        {
          "id": "B",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "C",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-534",
      "question": "«Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "D",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-535",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
    },
    {
      "id": "informatika-536",
      "question": "«Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
        },
        {
          "id": "D",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-537",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "h1 eng katta sarlavha, h6 eng kichigi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "C",
          "text": "<img src='...' alt='...'>."
        },
        {
          "id": "D",
          "text": "ol - ordered list, ul - unordered list."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-538",
      "question": "«Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-539",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "B",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-540",
      "question": "«Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "C",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "D",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-541",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        },
        {
          "id": "B",
          "text": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
        },
        {
          "id": "C",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-542",
      "question": "«Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
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
      "correct": "A",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-543",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "C",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-544",
      "question": "«Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
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
      "id": "informatika-545",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
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
      "xp": 200,
      "explanation": "Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-546",
      "question": "«Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        },
        {
          "id": "D",
          "text": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-547",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-548",
      "question": "«Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        },
        {
          "id": "B",
          "text": "8 + 4 + 2 + 1 = 15."
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
      "xp": 200,
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-549",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "B",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        },
        {
          "id": "D",
          "text": "DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-550",
      "question": "«Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-551",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        },
        {
          "id": "C",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-552",
      "question": "«Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "B",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
        },
        {
          "id": "C",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "D",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-553",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "B",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "C",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        },
        {
          "id": "D",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-554",
      "question": "«Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
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
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-555",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
        },
        {
          "id": "B",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
    },
    {
      "id": "informatika-556",
      "question": "«Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
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
          "text": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-557",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.docx / .doc'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        },
        {
          "id": "D",
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.docx / .doc'ga tegishli."
    },
    {
      "id": "informatika-558",
      "question": "«Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
        },
        {
          "id": "B",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        },
        {
          "id": "C",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "D",
          "text": "Masalan: 7 // 2 = 3."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-559",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "C",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        },
        {
          "id": "D",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.xlsx / .xls'ga tegishli."
    },
    {
      "id": "informatika-560",
      "question": "«Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "B",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "C",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "D",
          "text": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-561",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
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
      "explanation": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-562",
      "question": "«Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Ona plata (Motherboard)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "C",
          "text": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
        },
        {
          "id": "D",
          "text": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-563",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "B",
          "text": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-564",
      "question": "«Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
        },
        {
          "id": "D",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-565",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "B",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-566",
      "question": "«Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        },
        {
          "id": "B",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        },
        {
          "id": "C",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
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
      "id": "informatika-567",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "SMTP - Simple Mail Transfer Protocol."
        },
        {
          "id": "B",
          "text": "FTP - File Transfer Protocol."
        },
        {
          "id": "C",
          "text": "MAC address 48 bitli unikal apparat manzilidir."
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
      "id": "informatika-568",
      "question": "«Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
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
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-569",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "B",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-570",
      "question": "«Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
        },
        {
          "id": "C",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-571",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
        },
        {
          "id": "C",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        },
        {
          "id": "D",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
    },
    {
      "id": "informatika-572",
      "question": "«Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "int - integer (butun son)."
        },
        {
          "id": "D",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-573",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Rekursiya'ga tegishli."
        },
        {
          "id": "C",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-574",
      "question": "«Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "C",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        },
        {
          "id": "D",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-575",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Masalan: 7 // 2 = 3."
        },
        {
          "id": "B",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "D",
          "text": "Masalan: 7 % 2 = 1."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-576",
      "question": "«Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
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
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-577",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.docx / .doc'ga tegishli."
        },
        {
          "id": "C",
          "text": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-578",
      "question": "«Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
        },
        {
          "id": "B",
          "text": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        },
        {
          "id": "D",
          "text": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-579",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Drayver'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
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
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-580",
      "question": "«Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
        },
        {
          "id": "B",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "D",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-581",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        },
        {
          "id": "B",
          "text": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
        },
        {
          "id": "C",
          "text": "RAM - energiyaga bog'liq tezkor xotiradir."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-582",
      "question": "«Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        },
        {
          "id": "B",
          "text": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
        },
        {
          "id": "C",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-583",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Romb ichiga shart yoziladi (ha/yo'q)."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-584",
      "question": "«Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        },
        {
          "id": "B",
          "text": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.exe / .msi'ga tegishli."
        },
        {
          "id": "D",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-585",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "ol - ordered list, ul - unordered list."
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
          "text": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-586",
      "question": "«Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
        },
        {
          "id": "B",
          "text": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
        },
        {
          "id": "C",
          "text": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.zip / .rar / .7z'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-587",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'IP manzil'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
        },
        {
          "id": "D",
          "text": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-588",
      "question": "«Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
        },
        {
          "id": "B",
          "text": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'FTP (File Transfer Protocol)'ga tegishli."
        },
        {
          "id": "D",
          "text": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-589",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "B",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-590",
      "question": "«Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "16 = 2⁴ = 10000₂."
        },
        {
          "id": "B",
          "text": "Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
        },
        {
          "id": "C",
          "text": "8 + 4 + 2 + 1 = 15."
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
      "id": "informatika-591",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Rekursiya'ga tegishli."
        },
        {
          "id": "D",
          "text": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Rekursiya'ga tegishli."
    },
    {
      "id": "informatika-592",
      "question": "«Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
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
          "text": "Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-593",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kompilyator'ga tegishli."
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
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-594",
      "question": "«Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HDD magnit disklar asosida ishlaydi."
        },
        {
          "id": "B",
          "text": "Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
        },
        {
          "id": "C",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        },
        {
          "id": "D",
          "text": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-595",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
        },
        {
          "id": "C",
          "text": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Interpretator'ga tegishli."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-596",
      "question": "«Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
        },
        {
          "id": "B",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "C",
          "text": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-597",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<table> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Kommutator (Switch)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "D",
          "text": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-598",
      "question": "«Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "B",
          "text": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
        },
        {
          "id": "C",
          "text": "1 KB = 2¹⁰ bayt = 1024 bayt."
        },
        {
          "id": "D",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-599",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "B",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<tr> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "1975-yilda tashkil topgan."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-600",
      "question": "«Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        },
        {
          "id": "B",
          "text": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
        },
        {
          "id": "D",
          "text": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-601",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
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
          "text": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-602",
      "question": "«Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
        },
        {
          "id": "B",
          "text": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
        },
        {
          "id": "C",
          "text": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-603",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '.html / .htm'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif '.pptx / .ppt'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-604",
      "question": "«Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
        },
        {
          "id": "B",
          "text": "RAM - energiyaga bog'liq tezkor xotiradir."
        },
        {
          "id": "C",
          "text": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
        },
        {
          "id": "D",
          "text": "ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-605",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '<input> tegi'ga tegishli."
        },
        {
          "id": "B",
          "text": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
        },
        {
          "id": "C",
          "text": "HDD magnit disklar asosida ishlaydi."
        },
        {
          "id": "D",
          "text": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-606",
      "question": "«Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
        },
        {
          "id": "B",
          "text": "Boshlash va tamom oval ichiga yoziladi."
        },
        {
          "id": "C",
          "text": "Masalan: 7 % 2 = 1."
        },
        {
          "id": "D",
          "text": "Masalan: 7 // 2 = 3."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-607",
      "question": "«Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "C",
          "text": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-608",
      "question": "«Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        },
        {
          "id": "B",
          "text": "1 bayt = 8 bit."
        },
        {
          "id": "C",
          "text": "print() orqali natija konsolga chiqariladi."
        },
        {
          "id": "D",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-609",
      "question": "«Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        },
        {
          "id": "C",
          "text": "input() klaviaturadan satr ko'rinishida qabul qiladi."
        },
        {
          "id": "D",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-610",
      "question": "«Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "B",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "C",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "D",
          "text": "if shart: ... elif ... else."
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "informatika-611",
      "question": "«Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "def funksiya_nomi(parametrlar): ..."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif '<td> tegi'ga tegishli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '<form> tegi'ga tegishli."
        },
        {
          "id": "D",
          "text": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-612",
      "question": "«Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
        },
        {
          "id": "B",
          "text": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif '.mp3 / .wav'ga tegishli."
        },
        {
          "id": "D",
          "text": "for i in range(...): tsikli."
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "informatika-613",
      "question": "«Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
        },
        {
          "id": "B",
          "text": "while shart: ... tsikli."
        },
        {
          "id": "C",
          "text": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
        },
        {
          "id": "D",
          "text": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "informatika-614",
      "question": "«Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ro'yxat: a = [1, 2, 3]."
        },
        {
          "id": "B",
          "text": "Masalan: 7 // 2 = 3."
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
      "correct": "A",
      "xp": 150,
      "explanation": "Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-615",
      "question": "«O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
        },
        {
          "id": "B",
          "text": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
        },
        {
          "id": "C",
          "text": "Kortej: a = (1, 2, 3)."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'MAC manzil'ga tegishli."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-616",
      "question": "«Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
        },
        {
          "id": "B",
          "text": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
        },
        {
          "id": "C",
          "text": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
        },
        {
          "id": "D",
          "text": "HDD magnit disklar asosida ishlaydi."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Lug'at: d = {'ism': 'Ali', 'yosh': 16}."
    },
    {
      "id": "informatika-617",
      "question": "«Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
        },
        {
          "id": "B",
          "text": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
        },
        {
          "id": "C",
          "text": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
        },
        {
          "id": "D",
          "text": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-618",
      "question": "«Rastrli grafika nimaga asoslangan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
        },
        {
          "id": "B",
          "text": "1 GB = 1024 MB."
        },
        {
          "id": "C",
          "text": "Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
        },
        {
          "id": "D",
          "text": "Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-619",
      "question": "«Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "A OR B faqat 0 va 0 bo'lganda 0 ga teng."
        },
        {
          "id": "B",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        },
        {
          "id": "C",
          "text": "NOT 1 = 0, NOT 0 = 1."
        },
        {
          "id": "D",
          "text": "Algoritm 5 ta asosiy xossaga ega."
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-620",
      "question": "«RGB rang modelida asosiy ranglar qaysilar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
        },
        {
          "id": "B",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        },
        {
          "id": "C",
          "text": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
        },
        {
          "id": "D",
          "text": "Protsessorning tezkorligi GigaGers (GGs)da o'lchanadi."
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
    },
    {
      "id": "informatika-621",
      "question": "«Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
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
      "explanation": "CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-622",
      "question": "«Axborot xavfsizligining uchta asosiy tamoyili qaysilar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
        },
        {
          "id": "B",
          "text": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'Kompilyator'ga tegishli."
        },
        {
          "id": "D",
          "text": "CIA triad: Confidentiality, Integrity, Availability."
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-623",
      "question": "«Fayllarni siqish (arxivlash)dan asosiy maqsad nima?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
        },
        {
          "id": "B",
          "text": "A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
        },
        {
          "id": "C",
          "text": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
        },
        {
          "id": "D",
          "text": "Plotter katta o'lchamli chizmalar uchun ishlatiladi."
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-624",
      "question": "«Quyidagilardan qaysi biri operatsion sistema hisoblanadi?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
        },
        {
          "id": "B",
          "text": "Masalan: 2 ** 3 = 8."
        },
        {
          "id": "C",
          "text": "int - integer (butun son)."
        },
        {
          "id": "D",
          "text": "Masalan: 7 % 2 = 1."
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Bular kompyuter va smartfonlarning boshqaruv operatsion sistemalaridir."
    },
    {
      "id": "informatika-625",
      "question": "«Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
        },
        {
          "id": "B",
          "text": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
        },
        {
          "id": "C",
          "text": "Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
        },
        {
          "id": "D",
          "text": "Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-626",
      "question": "«Microsoft kompaniyasining asoschisi kim?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
        },
        {
          "id": "C",
          "text": "Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
        },
        {
          "id": "D",
          "text": "1975-yilda tashkil topgan."
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "1975-yilda tashkil topgan."
    },
    {
      "id": "informatika-627",
      "question": "«Apple kompaniyasining asoschilari kimlar?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "1976-yilda Apple I kompyuterini yaratgan."
        },
        {
          "id": "B",
          "text": "RGB ekranda yorug'lik nurlari qo'shilishi asosidagi model."
        },
        {
          "id": "C",
          "text": "CMYK bo'yoqlar aralashuvi modelidir."
        },
        {
          "id": "D",
          "text": "Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1976-yilda Apple I kompyuterini yaratgan."
    },
    {
      "id": "informatika-628",
      "question": "«Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?» savolining izohi qaysi variantda to'g'ri?",
      "options": [
        {
          "id": "A",
          "text": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
        },
        {
          "id": "B",
          "text": "Ushbu ta'rif 'JavaScript'ga tegishli."
        },
        {
          "id": "C",
          "text": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
        },
        {
          "id": "D",
          "text": "print() orqali natija konsolga chiqariladi."
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1998-yilda Stenford universiteti talabalari tomonidan yaratilgan."
    },
    {
      "id": "informatika-629",
      "question": "Izohdagi bo'sh joyni to'ldiring: Markaziy ______ (CPU) barcha mantiqiy va arifmetik amallarni bajaradi.",
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
          "text": "Qattiq disk"
        },
        {
          "id": "D",
          "text": "Protsessor"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-630",
      "question": "Izohdagi bo'sh joyni to'ldiring: 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = ______.",
      "options": [
        {
          "id": "A",
          "text": "8"
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
          "text": "9"
        }
      ],
      "correct": "C",
      "xp": 300,
      "explanation": "1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-631",
      "question": "Izohdagi bo'sh joyni to'ldiring: 1 KB = 2¹⁰ bayt = ______.",
      "options": [
        {
          "id": "A",
          "text": "1024 bayt"
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
          "text": "512 bayt"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-632",
      "question": "Izohdagi bo'sh joyni to'ldiring: 1 MB = ______ = 2²⁰ bayt.",
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
      "explanation": "1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-633",
      "question": "Izohdagi bo'sh joyni to'ldiring: 1 GB = ______.",
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
          "text": "1000 MB"
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
      "id": "informatika-634",
      "question": "Izohdagi bo'sh joyni to'ldiring: 8 + 4 + 2 + 1 = ______.",
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
          "text": "15"
        },
        {
          "id": "D",
          "text": "16"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "8 + 4 + 2 + 1 = 15."
    },
    {
      "id": "informatika-635",
      "question": "Izohdagi bo'sh joyni to'ldiring: 16 = 2⁴ = ______₂.",
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
          "text": "100000"
        },
        {
          "id": "D",
          "text": "1111"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-636",
      "question": "Izohdagi bo'sh joyni to'ldiring: 1·16¹ + 10·16⁰ = 16 + 10 = ______.",
      "options": [
        {
          "id": "A",
          "text": "16"
        },
        {
          "id": "B",
          "text": "24"
        },
        {
          "id": "C",
          "text": "26"
        },
        {
          "id": "D",
          "text": "10"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-637",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ qog'ozdagi tasvirni kompyuterga kiritadi.",
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
          "text": "Plotter"
        },
        {
          "id": "D",
          "text": "Monitor"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Skaner qog'ozdagi tasvirni kompyuterga kiritadi."
    },
    {
      "id": "informatika-638",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ raqamli ma'lumotni qog'ozga chiqaradi.",
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
      "explanation": "Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-639",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ ichiga shart yoziladi (ha/yo'q).",
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
          "text": "To'g'ri to'rtburchak"
        },
        {
          "id": "D",
          "text": "Romb"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-640",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ kiritish-chiqarish blokidir.",
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
      "id": "informatika-641",
      "question": "Izohdagi bo'sh joyni to'ldiring: Amal yoki hisoblash ______da beriladi.",
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
      "id": "informatika-642",
      "question": "Izohdagi bo'sh joyni to'ldiring: Masalan: 7 ______ 2 = 3.",
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
      "explanation": "Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-643",
      "question": "Izohdagi bo'sh joyni to'ldiring: Masalan: 2 ______ 3 = 8.",
      "options": [
        {
          "id": "A",
          "text": "**"
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
          "text": "//"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-644",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ - integer (butun son).",
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
      "explanation": "int - integer (butun son)."
    },
    {
      "id": "informatika-645",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ - suzuvchi vergulli son.",
      "options": [
        {
          "id": "A",
          "text": "list"
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
          "text": "char"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-646",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ - File Transfer Protocol.",
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
          "text": "SMTP"
        },
        {
          "id": "D",
          "text": "POP3"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-647",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ - Simple Mail Transfer Protocol.",
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
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "SMTP"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "SMTP - Simple Mail Transfer Protocol."
    },
    {
      "id": "informatika-648",
      "question": "Izohdagi bo'sh joyni to'ldiring: Markaziy protsessor (CPU) - ______.",
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
          "text": "Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-649",
      "question": "Informatika bo'yicha: Izohdagi bo'sh joyni to'ldiring: Ushbu ta'rif '______'ga tegishli.",
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
      "explanation": "Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-650",
      "question": "Izohdagi bo'sh joyni to'ldiring: Operativ xotira (RAM) - ______.",
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
      "correct": "D",
      "xp": 200,
      "explanation": "Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-651",
      "question": "Izohdagi bo'sh joyni to'ldiring: Doimiy xotira (ROM) - ______.",
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
      "correct": "A",
      "xp": 200,
      "explanation": "Doimiy xotira (ROM) - Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash."
    },
    {
      "id": "informatika-652",
      "question": "Izohdagi bo'sh joyni to'ldiring: Kesh-xotira (Cache) - ______.",
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
      "id": "informatika-653",
      "question": "Izohdagi bo'sh joyni to'ldiring: Videokarta (GPU) - ______.",
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
      "explanation": "Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-654",
      "question": "Izohdagi bo'sh joyni to'ldiring: Ona plata (Motherboard) - ______.",
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
      "explanation": "Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-655",
      "question": "Izohdagi bo'sh joyni to'ldiring: Quvvat bloki (Power Supply) - ______.",
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
      "id": "informatika-656",
      "question": "Izohdagi bo'sh joyni to'ldiring: HTTP / HTTPS - ______.",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-657",
      "question": "Izohdagi bo'sh joyni to'ldiring: FTP (File Transfer Protocol) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli"
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
      "explanation": "FTP (File Transfer Protocol) - Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli."
    },
    {
      "id": "informatika-658",
      "question": "Izohdagi bo'sh joyni to'ldiring: SMTP (Simple Mail Transfer Protocol) - ______.",
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
          "text": "Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "SMTP (Simple Mail Transfer Protocol) - Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli."
    },
    {
      "id": "informatika-659",
      "question": "Izohdagi bo'sh joyni to'ldiring: POP3 va IMAP - ______.",
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
          "text": "Elektron pochta serveridan xatlarni qabul qilib olish protokollari"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-660",
      "question": "Izohdagi bo'sh joyni to'ldiring: DHCP (Dynamic Host Configuration Protocol) - ______.",
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
      "id": "informatika-661",
      "question": "Izohdagi bo'sh joyni to'ldiring: IP manzil - ______.",
      "options": [
        {
          "id": "A",
          "text": "Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili"
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
      "explanation": "IP manzil - Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili."
    },
    {
      "id": "informatika-662",
      "question": "Izohdagi bo'sh joyni to'ldiring: MAC manzil - ______.",
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
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "MAC manzil - Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili."
    },
    {
      "id": "informatika-663",
      "question": "Izohdagi bo'sh joyni to'ldiring: Marshrutizator (Router) - ______.",
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
          "text": "Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-664",
      "question": "Izohdagi bo'sh joyni to'ldiring: Kommutator (Switch) - ______.",
      "options": [
        {
          "id": "A",
          "text": "Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma"
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
      "explanation": "Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-665",
      "question": "Izohdagi bo'sh joyni to'ldiring: .docx / .doc - ______.",
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
          "text": "Microsoft Word matnli hujjati fayl kengaytmasi"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": ".docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-666",
      "question": "Izohdagi bo'sh joyni to'ldiring: .xlsx / .xls - ______.",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": ".xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-667",
      "question": "Izohdagi bo'sh joyni to'ldiring: .pptx / .ppt - ______.",
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
          "text": "Microsoft PowerPoint taqdimot fayli kengaytmasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-668",
      "question": "Izohdagi bo'sh joyni to'ldiring: .html / .htm - ______.",
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
          "text": "Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".html / .htm - Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli."
    },
    {
      "id": "informatika-669",
      "question": "Izohdagi bo'sh joyni to'ldiring: .mp3 / .wav - ______.",
      "options": [
        {
          "id": "A",
          "text": "Raqamli audio (tovush) fayllari formati"
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
      "explanation": ".mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-670",
      "question": "Izohdagi bo'sh joyni to'ldiring: .mp4 / .avi / .mkv - ______.",
      "options": [
        {
          "id": "A",
          "text": "Raqamli video fayllari kengaytmasi"
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
      "explanation": ".mp4 / .avi / .mkv - Raqamli video fayllari kengaytmasi."
    },
    {
      "id": "informatika-671",
      "question": "Izohdagi bo'sh joyni to'ldiring: .jpg / .png / .svg - ______.",
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
          "text": "Raqamli rastrli va vektorli grafik tasvirlar formati"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": ".jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-672",
      "question": "Izohdagi bo'sh joyni to'ldiring: .zip / .rar / .7z - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Hajmni kichraytirish va arxivlash dasturlari fayli"
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
      "explanation": ".zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-673",
      "question": "Izohdagi bo'sh joyni to'ldiring: .exe / .msi - ______.",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": ".exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-674",
      "question": "Izohdagi bo'sh joyni to'ldiring: Tizimli dasturiy ta'minot - ______.",
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
          "text": "Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Tizimli dasturiy ta'minot - Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar."
    },
    {
      "id": "informatika-675",
      "question": "Izohdagi bo'sh joyni to'ldiring: Amaliy dasturiy ta'minot - ______.",
      "options": [
        {
          "id": "A",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        },
        {
          "id": "B",
          "text": "Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)"
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
      "explanation": "Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-676",
      "question": "Izohdagi bo'sh joyni to'ldiring: Drayver - ______.",
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
      "id": "informatika-677",
      "question": "Izohdagi bo'sh joyni to'ldiring: BIOS (Basic Input/Output System) - ______.",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-678",
      "question": "Izohdagi bo'sh joyni to'ldiring: Antivirus dasturi - ______.",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-679",
      "question": "Izohdagi bo'sh joyni to'ldiring: O'zgaruvchi (Variable) - ______.",
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
          "text": "Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "O'zgaruvchi (Variable) - Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha."
    },
    {
      "id": "informatika-680",
      "question": "Izohdagi bo'sh joyni to'ldiring: Massiv (Ro'yxat / List) - ______.",
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
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        },
        {
          "id": "D",
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-681",
      "question": "Izohdagi bo'sh joyni to'ldiring: Funksiya (Function) - ______.",
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
          "text": "Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-682",
      "question": "Izohdagi bo'sh joyni to'ldiring: Rekursiya - ______.",
      "options": [
        {
          "id": "A",
          "text": "Funksiyaning o'zini o'zi qayta chaqirishi hodisasi"
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
      "explanation": "Rekursiya - Funksiyaning o'zini o'zi qayta chaqirishi hodisasi."
    },
    {
      "id": "informatika-683",
      "question": "Izohdagi bo'sh joyni to'ldiring: Kompilyator - ______.",
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
      "explanation": "Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-684",
      "question": "Izohdagi bo'sh joyni to'ldiring: Interpretator - ______.",
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
          "text": "Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-685",
      "question": "Izohdagi bo'sh joyni to'ldiring: <table> tegi - ______.",
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
          "text": "Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish"
        },
        {
          "id": "D",
          "text": "Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "<table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-686",
      "question": "Izohdagi bo'sh joyni to'ldiring: <tr> tegi - ______.",
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
      "explanation": "<tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-687",
      "question": "Izohdagi bo'sh joyni to'ldiring: <td> tegi - ______.",
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
          "text": "HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "<td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-688",
      "question": "Izohdagi bo'sh joyni to'ldiring: <form> tegi - ______.",
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
      "explanation": "<form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-689",
      "question": "Izohdagi bo'sh joyni to'ldiring: <input> tegi - ______.",
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
          "text": "Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg"
        },
        {
          "id": "D",
          "text": "Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "<input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-690",
      "question": "Izohdagi bo'sh joyni to'ldiring: JavaScript - ______.",
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
      "explanation": "JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-691",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ orqali natija konsolga chiqariladi.",
      "options": [
        {
          "id": "A",
          "text": "write()"
        },
        {
          "id": "B",
          "text": "input()"
        },
        {
          "id": "C",
          "text": "print()"
        },
        {
          "id": "D",
          "text": "echo()"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-692",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ klaviaturadan satr ko'rinishida qabul qiladi.",
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
      "explanation": "input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-693",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ shart: ... elif ... else.",
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
      "explanation": "if shart: ... elif ... else."
    },
    {
      "id": "informatika-694",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ funksiya_nomi(parametrlar): ...",
      "options": [
        {
          "id": "A",
          "text": "def"
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
          "text": "function"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-695",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ i in range(...): tsikli.",
      "options": [
        {
          "id": "A",
          "text": "for"
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
          "text": "def"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "for i in range(...): tsikli."
    },
    {
      "id": "informatika-696",
      "question": "Izohdagi bo'sh joyni to'ldiring: ______ shart: ... tsikli.",
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
          "text": "range"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "while shart: ... tsikli."
    },
    {
      "id": "informatika-697",
      "question": "«8» varianti «Bir baytda nechta bit bor?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-698",
      "question": "«Protsessor» varianti «Kompyuterning asosiy hisoblash qurilmasi qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-699",
      "question": "«Web sahifa tuzilmasini yaratish» varianti «HTML tili asosan nima uchun ishlatiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-700",
      "question": "«10» varianti «Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-701",
      "question": "«1024 bayt» varianti «1 Kilobayt (KB) necha baytga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-702",
      "question": "«1024 KB» varianti «1 Megabayt (MB) necha Kilobaytga teng?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-703",
      "question": "«1024 MB» varianti «1 Gigabayt (GB) necha Megabaytga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. 1 GB = 1024 MB."
    },
    {
      "id": "informatika-704",
      "question": "«1 bayt (8 bit)» varianti «ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Standart ASCII jadvalida 256 ta belgi bo'lib, har biri 8 bit o'rin oladi."
    },
    {
      "id": "informatika-705",
      "question": "«2 bayt (16 bit)» varianti «Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-706",
      "question": "«N = 2^i» varianti «Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-707",
      "question": "«A, B, C, D, E, F» varianti «O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-708",
      "question": "«15» varianti «Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-709",
      "question": "«10000» varianti «O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-710",
      "question": "«7» varianti «Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Sakkizlikda 0 dan 7 gacha raqamlar ishlatiladi."
    },
    {
      "id": "informatika-711",
      "question": "«26» varianti «O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. 1·16¹ + 10·16⁰ = 16 + 10 = 26."
    },
    {
      "id": "informatika-712",
      "question": "«Operativ xotira (RAM)» varianti «Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-713",
      "question": "«BIOS dasturlari va dastlabki yuklash ko'rsatmalari» varianti «Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-714",
      "question": "«Protsessor va operativ xotira o'rtasidagi ma'lumot almashinuvini tezlashtiradi» varianti «Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Kesh - o'ta yuqori tezlikka ega oraliq bufer xotiradir."
    },
    {
      "id": "informatika-715",
      "question": "«Qattiq disk (HDD)» varianti «Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-716",
      "question": "«SSD (Solid State Drive)» varianti «Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-717",
      "question": "«Gers (Gs, MGs, GGs)» varianti «Taktli chastotaning o'lchov birligi nima?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-718",
      "question": "«Skaner» varianti «Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-719",
      "question": "«Printer» varianti «Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-720",
      "question": "«Plotter (grafik yasagich)» varianti «Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-721",
      "question": "«Ikkala mulohaza ham chin (1) bo'lganda» varianti «Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. A AND B faqat 1 va 1 bo'lganda 1 bo'ladi."
    },
    {
      "id": "informatika-722",
      "question": "«Ikkala mulohaza ham yolg'on (0) bo'lganda» varianti «Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-723",
      "question": "«Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi» varianti «Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-724",
      "question": "«Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik» varianti «Algoritmning asosiy xossalari qaysilar?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-725",
      "question": "«Romb» varianti «Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Romb ichiga shart yoziladi (ha/yo'q)."
    },
    {
      "id": "informatika-726",
      "question": "«Parallelogramm» varianti «Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Parallelogramm kiritish-chiqarish blokidir."
    },
    {
      "id": "informatika-727",
      "question": "«To'g'ri to'rtburchak» varianti «Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Amal yoki hisoblash to'g'ri to'rtburchakda beriladi."
    },
    {
      "id": "informatika-728",
      "question": "«Oval (ellips)» varianti «Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-729",
      "question": "«//» varianti «Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-730",
      "question": "«%» varianti «Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-731",
      "question": "«**» varianti «Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Masalan: 2 ** 3 = 8."
    },
    {
      "id": "informatika-732",
      "question": "«int» varianti «Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. int - integer (butun son)."
    },
    {
      "id": "informatika-733",
      "question": "«float» varianti «Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-734",
      "question": "«str (string)» varianti «Satrli (matnli) ma'lumot turi qanday ataladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-735",
      "question": "«<a>» varianti «Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. <a href='...'>Havola matni</a>."
    },
    {
      "id": "informatika-736",
      "question": "«<img>» varianti «HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-737",
      "question": "«<h1>» varianti «HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. h1 eng katta sarlavha, h6 eng kichigi."
    },
    {
      "id": "informatika-738",
      "question": "«<ol>» varianti «HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. ol - ordered list, ul - unordered list."
    },
    {
      "id": "informatika-739",
      "question": "«Web sahifaning tashqi ko'rinishi va dizaynini bezash» varianti «CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. CSS sahifa ranglari, shriftlari va joylashuvini boshqaradi."
    },
    {
      "id": "informatika-740",
      "question": "«4 bayt (32 bit, masalan: 192.168.1.1)» varianti «IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-741",
      "question": "«Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish» varianti «DNS (Domain Name System) serverining asosiy vazifasi nima?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-742",
      "question": "«MAC-manzil» varianti «Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-743",
      "question": "«FTP» varianti «Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-744",
      "question": "«SMTP» varianti «Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-745",
      "question": "«O'zaro bog'langan jadvallar ko'rinishida» varianti «Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Relyatsion MB - jadvallarga (satr va ustunlarga) asoslangan."
    },
    {
      "id": "informatika-746",
      "question": "«Yozuv (kortej / record)» varianti «Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-747",
      "question": "«Maydon (field / atribut)» varianti «Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ustunlar ob'ektning xossasi yoki 'maydon'idir."
    },
    {
      "id": "informatika-748",
      "question": "«Birlamchi kalit (Primary Key)» varianti «Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-749",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Markaziy protsessor (CPU) - Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish."
    },
    {
      "id": "informatika-750",
      "question": "«Markaziy protsessor (CPU)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-751",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Operativ xotira (RAM) - Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash."
    },
    {
      "id": "informatika-752",
      "question": "«Operativ xotira (RAM)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-753",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-754",
      "question": "«Doimiy xotira (ROM)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-755",
      "question": "«Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish» varianti «Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-756",
      "question": "«Kesh-xotira (Cache)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-757",
      "question": "«Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish» varianti «Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Videokarta (GPU) - Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish."
    },
    {
      "id": "informatika-758",
      "question": "«Videokarta (GPU)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-759",
      "question": "«Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata» varianti «Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-760",
      "question": "«Ona plata (Motherboard)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-761",
      "question": "«220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish» varianti «Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-762",
      "question": "«Quvvat bloki (Power Supply)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-763",
      "question": "«Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli» varianti «Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. HTTP / HTTPS - Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli."
    },
    {
      "id": "informatika-764",
      "question": "«HTTP / HTTPS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-765",
      "question": "«Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli» varianti «Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-766",
      "question": "«FTP (File Transfer Protocol)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-767",
      "question": "«Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli» varianti «Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-768",
      "question": "«SMTP (Simple Mail Transfer Protocol)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-769",
      "question": "«Elektron pochta serveridan xatlarni qabul qilib olish protokollari» varianti «Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. POP3 va IMAP - Elektron pochta serveridan xatlarni qabul qilib olish protokollari."
    },
    {
      "id": "informatika-770",
      "question": "«POP3 va IMAP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'POP3 va IMAP'ga tegishli."
    },
    {
      "id": "informatika-771",
      "question": "«Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish» varianti «Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-772",
      "question": "«DHCP (Dynamic Host Configuration Protocol)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-773",
      "question": "«Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili» varianti «Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-774",
      "question": "«IP manzil» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-775",
      "question": "«Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili» varianti «Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-776",
      "question": "«MAC manzil» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-777",
      "question": "«Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma» varianti «Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-778",
      "question": "«Marshrutizator (Router)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-779",
      "question": "«Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma» varianti «Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Kommutator (Switch) - Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-780",
      "question": "«Kommutator (Switch)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-781",
      "question": "«Microsoft Word matnli hujjati fayl kengaytmasi» varianti «Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .docx / .doc - Microsoft Word matnli hujjati fayl kengaytmasi."
    },
    {
      "id": "informatika-782",
      "question": "«.docx / .doc» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-783",
      "question": "«Microsoft Excel elektron jadvali fayl kengaytmasi» varianti «Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-784",
      "question": "«.xlsx / .xls» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-785",
      "question": "«Microsoft PowerPoint taqdimot fayli kengaytmasi» varianti «Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-786",
      "question": "«.pptx / .ppt» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif '.pptx / .ppt'ga tegishli."
    },
    {
      "id": "informatika-787",
      "question": "«Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli» varianti «Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-788",
      "question": "«.html / .htm» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-789",
      "question": "«Raqamli audio (tovush) fayllari formati» varianti «Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-790",
      "question": "«.mp3 / .wav» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif '.mp3 / .wav'ga tegishli."
    },
    {
      "id": "informatika-791",
      "question": "«Raqamli video fayllari kengaytmasi» varianti «Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-792",
      "question": "«.mp4 / .avi / .mkv» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-793",
      "question": "«Raqamli rastrli va vektorli grafik tasvirlar formati» varianti «Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-794",
      "question": "«.jpg / .png / .svg» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif '.jpg / .png / .svg'ga tegishli."
    },
    {
      "id": "informatika-795",
      "question": "«Hajmni kichraytirish va arxivlash dasturlari fayli» varianti «Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .zip / .rar / .7z - Hajmni kichraytirish va arxivlash dasturlari fayli."
    },
    {
      "id": "informatika-796",
      "question": "«.zip / .rar / .7z» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-797",
      "question": "«Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli» varianti «Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-798",
      "question": "«.exe / .msi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif '.exe / .msi'ga tegishli."
    },
    {
      "id": "informatika-799",
      "question": "«Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar» varianti «Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-800",
      "question": "«Tizimli dasturiy ta'minot» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-801",
      "question": "«Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)» varianti «Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-802",
      "question": "«Amaliy dasturiy ta'minot» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-803",
      "question": "«Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur» varianti «Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-804",
      "question": "«Drayver» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-805",
      "question": "«Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim» varianti «Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. BIOS (Basic Input/Output System) - Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim."
    },
    {
      "id": "informatika-806",
      "question": "«BIOS (Basic Input/Output System)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'BIOS (Basic Input/Output System)'ga tegishli."
    },
    {
      "id": "informatika-807",
      "question": "«Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi» varianti «Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-808",
      "question": "«Antivirus dasturi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-809",
      "question": "«Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha» varianti «Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-810",
      "question": "«O'zgaruvchi (Variable)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-811",
      "question": "«Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma» varianti «Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-812",
      "question": "«Massiv (Ro'yxat / List)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-813",
      "question": "«Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki» varianti «Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Funksiya (Function) - Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki."
    },
    {
      "id": "informatika-814",
      "question": "«Funksiya (Function)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-815",
      "question": "«Funksiyaning o'zini o'zi qayta chaqirishi hodisasi» varianti «Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-816",
      "question": "«Rekursiya» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-817",
      "question": "«Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita» varianti «Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-818",
      "question": "«Kompilyator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-819",
      "question": "«Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)» varianti «Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-820",
      "question": "«Interpretator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-821",
      "question": "«HTML tilida jadval yaratish uchun ochiladigan bosh teg» varianti «Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-822",
      "question": "«<table> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-823",
      "question": "«HTML jadvalida yangi satr (qator) hosil qiluvchi teg» varianti «Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-824",
      "question": "«<tr> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-825",
      "question": "«HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg» varianti «Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-826",
      "question": "«<td> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-827",
      "question": "«Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi» varianti «Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-828",
      "question": "«<form> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-829",
      "question": "«Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg» varianti «Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-830",
      "question": "«<input> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-831",
      "question": "«Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili» varianti «Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-832",
      "question": "«JavaScript» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-833",
      "question": "«print()» varianti «Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-834",
      "question": "«input()» varianti «Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-835",
      "question": "«if» varianti «Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. if shart: ... elif ... else."
    },
    {
      "id": "informatika-836",
      "question": "«def» varianti «Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-837",
      "question": "«for» varianti «Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-838",
      "question": "«while» varianti «Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. while shart: ... tsikli."
    },
    {
      "id": "informatika-839",
      "question": "«[ ] (to'rtburchak qavslar)» varianti «Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-840",
      "question": "«( ) (oddiy qavslar)» varianti «O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-841",
      "question": "«{kalit: qiymat}» varianti «Lug'at (dictionary) ma'lumot turi qanday sintaksisga ega?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-842",
      "question": "«len()» varianti «Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-843",
      "question": "«Piksellar (nuqtalar) to'riga» varianti «Rastrli grafika nimaga asoslangan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-844",
      "question": "«Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi» varianti «Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    },
    {
      "id": "informatika-845",
      "question": "«Red (Qizil), Green (Yashil), Blue (Ko'k)» varianti «RGB rang modelida asosiy ranglar qaysilar?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-846",
      "question": "«CMYK (Cyan, Magenta, Yellow, blacK)» varianti «Bosmaxona va poligrafiyada keng qo'llaniladigan 4 rangli model qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. CMYK bo'yoqlar aralashuvi modelidir."
    },
    {
      "id": "informatika-847",
      "question": "«Maxfiylik, yaxlitlik va foydalanish imkoniyati (barkamollik)» varianti «Axborot xavfsizligining uchta asosiy tamoyili qaysilar?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. CIA triad: Confidentiality, Integrity, Availability."
    },
    {
      "id": "informatika-848",
      "question": "«Xotiradagi hajmini kichraytirish va tarmoqda uzatishni tezlashtirish» varianti «Fayllarni siqish (arxivlash)dan asosiy maqsad nima?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Arxivlash fayl hajmini kamaytiradi (ZIP, RAR)."
    },
    {
      "id": "informatika-849",
      "question": "«Windows, Linux, macOS, Android» varianti «Quyidagilardan qaysi biri operatsion sistema hisoblanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-850",
      "question": "«Linus Torvalds (1991-yilda)» varianti «Linux operatsion sistemasining asosiy yadrosi (kernel) kim tomonidan yaratilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Ha. Finlyandiyalik talaba Linus Torvalds Linux yadrosini yozgan."
    },
    {
      "id": "informatika-851",
      "question": "«Bill Geyts va Pol Allen» varianti «Microsoft kompaniyasining asoschisi kim?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-852",
      "question": "«Stiv Jobs va Stiv Voznyak» varianti «Apple kompaniyasining asoschilari kimlar?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-853",
      "question": "«Larri Peyj va Sergey Brin» varianti «Birlamchi va eng ommabop internet qidiruv tizimi Google kimlar tomonidan asos solingan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-854",
      "question": "«16» varianti «Bir baytda nechta bit bor?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 8. 1 bayt = 8 bit."
    },
    {
      "id": "informatika-855",
      "question": "«Qattiq disk» varianti «Kompyuterning asosiy hisoblash qurilmasi qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Protsessor. Markaziy protsessor (CPU) barcha mantiqiy va arifmetik amallarni bajaradi."
    },
    {
      "id": "informatika-856",
      "question": "«Mobil ilova ishlab chiqish» varianti «HTML tili asosan nima uchun ishlatiladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Web sahifa tuzilmasini yaratish. HTML (HyperText Markup Language) gipermatnli sahifalarni belgilash tilidir."
    },
    {
      "id": "informatika-857",
      "question": "«8» varianti «Ikkilik sanoq sistemasidagi 1010 soni o‘nlikda nechaga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 10. 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10."
    },
    {
      "id": "informatika-858",
      "question": "«1000 bayt» varianti «1 Kilobayt (KB) necha baytga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 1024 bayt. 1 KB = 2¹⁰ bayt = 1024 bayt."
    },
    {
      "id": "informatika-859",
      "question": "«1024 bayt» varianti «1 Megabayt (MB) necha Kilobaytga teng?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 1024 KB. 1 MB = 1024 KB = 2²⁰ bayt."
    },
    {
      "id": "informatika-860",
      "question": "«4096 MB» varianti «1 Gigabayt (GB) necha Megabaytga teng?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-861",
      "question": "«4 bit» varianti «ASCII kodlash jadvalida bitta belgi xotiradan qancha joy egallaydi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-862",
      "question": "«8 bit» varianti «Unicode (UTF-16) kodlash tizimida bitta belgi xotirada qancha joy oladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 2 bayt (16 bit). Unicode dunyo xalqlari alifbosi belgilarini qamrab olish uchun 2 bayt ishlatadi."
    },
    {
      "id": "informatika-863",
      "question": "«N = log₂i» varianti «Hartli formulasi bo'yicha N ta teng ehtimolli hodisaning axborot hajmi qanday topiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-864",
      "question": "«K, L, M, N, O, P» varianti «O'n oltilik sanoq sistemasida 10, 11, 12, 13, 14, 15 sonlari qanday belgilar bilan belgilanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — A, B, C, D, E, F. O'n oltilikda 10 dan 15 gacha harflar qo'llanadi."
    },
    {
      "id": "informatika-865",
      "question": "«14» varianti «Ikkilikdagi 1111 soni o'nlik sanoq sistemasida nechaga teng?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-866",
      "question": "«1111» varianti «O'nlik sanoq sistemasidagi 16 soni ikkilikda qanday yoziladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 10000. 16 = 2⁴ = 10000₂."
    },
    {
      "id": "informatika-867",
      "question": "«F» varianti «Sakkizlik sanoq sistemasidagi eng katta bir xonali raqam qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-868",
      "question": "«10» varianti «O'n oltilikdagi 1A soni o'nlikda nechaga teng?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-869",
      "question": "«Fleshka» varianti «Kompyuter elektr tarmog'idan uzilganda qaysi xotiradagi ma'lumotlar o'chib ketadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Operativ xotira (RAM). RAM - energiyaga bog'liq tezkor xotiradir."
    },
    {
      "id": "informatika-870",
      "question": "«O'yinlar» varianti «Kompyuterning doimiy xotirasi (ROM)da nima saqlanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — BIOS dasturlari va dastlabki yuklash ko'rsatmalari. ROM da ishlab chiqaruvchi tomonidan yozilgan tizim mikrodasturlari bo'ladi."
    },
    {
      "id": "informatika-871",
      "question": "«Grafik tasvirlarni chizadi» varianti «Kesh-xotira (Cache memory) qanday vazifani bajaradi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-872",
      "question": "«Registr» varianti «Kompyuterning ma'lumotlarni uzoq muddatli saqlashga mo'ljallangan magnitli qurilmasi qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Qattiq disk (HDD). HDD magnit disklar asosida ishlaydi."
    },
    {
      "id": "informatika-873",
      "question": "«FDD» varianti «Magnitli qattiq disk (HDD)dan ancha tez ishlaydigan chip/mikrosxemali zamonaviy saqlovchi qurilma qanday ataladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — SSD (Solid State Drive). SSD yarimo'tkazgichli flesh-xotira asosida ishlaydi."
    },
    {
      "id": "informatika-874",
      "question": "«BPS» varianti «Taktli chastotaning o'lchov birligi nima?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-875",
      "question": "«Monitor» varianti «Quyidagilardan qaysi biri axborotni kiritish qurilmasi hisoblanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-876",
      "question": "«Klaviatura» varianti «Quyidagilardan qaysi biri axborotni chiqarish qurilmasi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Printer. Printer raqamli ma'lumotni qog'ozga chiqaradi."
    },
    {
      "id": "informatika-877",
      "question": "«Printer» varianti «Chizmachilik va muhandislikda katta formatli chizmalarni qog'ozga chiqaruvchi qurilma nima?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-878",
      "question": "«Birinchisi chin, ikkinchisi yolg'on bo'lganda» varianti «Mantiqiy 'VA' (Kon'yunksiya) amali qachon chin (1) natija beradi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-879",
      "question": "«Biri chin bo'lganda» varianti «Mantiqiy 'YOKI' (Diz'yunksiya) amali qachon yolg'on (0) natija beradi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-880",
      "question": "«Sonni nolga tenglashtiradi» varianti «Mantiqiy 'INKOR' (Inversiya, NOT) amali qanday amal hisoblanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Unar amal bo'lib, chin qiymatni yolg'onga, yolg'onni chinga aylantiradi. NOT 1 = 0, NOT 0 = 1."
    },
    {
      "id": "informatika-881",
      "question": "«Ranglilik va hajm» varianti «Algoritmning asosiy xossalari qaysilar?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Diskretlik, tushunarlilik, aniqlik (determinallik), ommaviylik, natijaviylik. Algoritm 5 ta asosiy xossaga ega."
    },
    {
      "id": "informatika-882",
      "question": "«To'g'ri to'rtburchak» varianti «Blok-sxemalarda shart tekshirish (tarmoqlanish) qaysi geometrik figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-883",
      "question": "«Romb» varianti «Blok-sxemada ma'lumotlarni kiritish va chiqarish qaysi figura orqali ifodalanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-884",
      "question": "«Romb» varianti «Blok-sxemada jarayon (arifmetik hisoblash amali) qaysi figura bilan chiziladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-885",
      "question": "«To'g'ri to'rtburchak» varianti «Blok-sxemaning boshlanishi va tugallanishi qaysi figura bilan belgilanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Oval (ellips). Boshlash va tamom oval ichiga yoziladi."
    },
    {
      "id": "informatika-886",
      "question": "«**» varianti «Python dasturlash tilida butun sonli bo'lish (bo'linmaning faqat butun qismini olish) amali qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — //. Masalan: 7 // 2 = 3."
    },
    {
      "id": "informatika-887",
      "question": "«**» varianti «Python tilida bo'lishdan qolgan qoldiqni hisoblash operatori qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — %. Masalan: 7 % 2 = 1."
    },
    {
      "id": "informatika-888",
      "question": "«//» varianti «Python tilida darajaga ko'tarish operatori qanday belgilanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-889",
      "question": "«float» varianti «Python dasturlash tilida o'zgaruvchining butun son turini belgilovchi tip qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-890",
      "question": "«char» varianti «Haqiqiy (o'nlik kasrli) sonlar Python tilida qaysi ma'lumot turiga kiradi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — float. float - suzuvchi vergulli son."
    },
    {
      "id": "informatika-891",
      "question": "«int» varianti «Satrli (matnli) ma'lumot turi qanday ataladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — str (string). str - qo'shtirnoq ichidagi matn."
    },
    {
      "id": "informatika-892",
      "question": "«<link>» varianti «Web sahifada giperhavola (link) yaratish uchun qaysi HTML tegi qo'llaniladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-893",
      "question": "«<picture>» varianti «HTML tilida sahifaga rasm joylashtirish uchun qaysi teg ishlatiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-894",
      "question": "«<title>» varianti «HTML tilida eng yuqori darajadagi asosiy sarlavha qaysi teg bilan yoziladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-895",
      "question": "«<dl>» varianti «HTML sahifada tartiblangan (raqamlangan) ro'yxat yaratuvchi teg qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-896",
      "question": "«Ma'lumotlar bazasini tuzish» varianti «CSS (Cascading Style Sheets) texnologiyasi nima uchun xizmat qiladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-897",
      "question": "«16 bayt» varianti «IP manzil (IPv4) nechta baytdan (oktetdan) tashkil topgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 4 bayt (32 bit, masalan: 192.168.1.1). IPv4 to'rtta 0-255 gacha sonlardan iborat bo'lib, 32 bitdir."
    },
    {
      "id": "informatika-898",
      "question": "«Fayllarni yuklash» varianti «DNS (Domain Name System) serverining asosiy vazifasi nima?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Domen nomlarini (masalan, google.com) IP manzilga aylantirib berish. DNS inson tushunadigan nomni kompyuter IP siga o'giradi."
    },
    {
      "id": "informatika-899",
      "question": "«IP-manzil» varianti «Tarmoq kartasining zavod tomonidan berilgan takrorlanmas jismoniy apparat manzili nima deyiladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — MAC-manzil. MAC address 48 bitli unikal apparat manzilidir."
    },
    {
      "id": "informatika-900",
      "question": "«POP3» varianti «Fayllarni internet orqali uzatishning klassik protokoli qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — FTP. FTP - File Transfer Protocol."
    },
    {
      "id": "informatika-901",
      "question": "«POP3» varianti «Elektron pochta xabarlarini jo'natish uchun xizmat qiluvchi protokol qaysi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-902",
      "question": "«Tarmoq shaklida» varianti «Relyatsion ma'lumotlar bazasida ma'lumotlar qanday shaklda saqlanadi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-903",
      "question": "«Maydon (atribut)» varianti «Ma'lumotlar bazasi jadvalining bitta satri nima deb ataladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Yozuv (kortej / record). Jadval satri bitta ob'ektga tegishli 'yozuv'dir."
    },
    {
      "id": "informatika-904",
      "question": "«Katastrofa» varianti «Ma'lumotlar bazasi jadvalining ustuni nima deb ataladi?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-905",
      "question": "«Indeks» varianti «Jadvaldagi har bir yozuvni takrorlanmas qilib birma-bir aniqlab beruvchi maydon nima deyiladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Birlamchi kalit (Primary Key). Primary key jadvalda takrorlanmas unikal qiymatga ega bo'ladi."
    },
    {
      "id": "informatika-906",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Markaziy protsessor (CPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-907",
      "question": "«Operativ xotira» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Markaziy protsessor (CPU). Ushbu ta'rif 'Markaziy protsessor (CPU)'ga tegishli."
    },
    {
      "id": "informatika-908",
      "question": "«Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish» varianti «Informatikada 'Operativ xotira (RAM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-909",
      "question": "«Doimiy xotira (ROM)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-910",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Doimiy xotira (ROM)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-911",
      "question": "«Fleshka» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Doimiy xotira (ROM). Ushbu ta'rif 'Doimiy xotira (ROM)'ga tegishli."
    },
    {
      "id": "informatika-912",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Kesh-xotira (Cache)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish. Kesh-xotira (Cache) - Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish."
    },
    {
      "id": "informatika-913",
      "question": "«Magnit lenta» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Protsessor va operativ xotira o'rtasidagi ma'lumot almashish tezligini oshirish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Kesh-xotira (Cache). Ushbu ta'rif 'Kesh-xotira (Cache)'ga tegishli."
    },
    {
      "id": "informatika-914",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Videokarta (GPU)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-915",
      "question": "«Chipset» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Grafik axborotni qayta ishlash va monitor ekraniga tasvir uzatish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Videokarta (GPU). Ushbu ta'rif 'Videokarta (GPU)'ga tegishli."
    },
    {
      "id": "informatika-916",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Ona plata (Motherboard)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata. Ona plata (Motherboard) - Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata."
    },
    {
      "id": "informatika-917",
      "question": "«Kuler» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuterning barcha ichki va tashqi qurilmalarini o'zaro bog'lovchi bosh plata'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-918",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Quvvat bloki (Power Supply)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish. Quvvat bloki (Power Supply) - 220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish."
    },
    {
      "id": "informatika-919",
      "question": "«Kondensator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: '220V o'zgaruvchan tokni kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas tokka aylantirish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Quvvat bloki (Power Supply). Ushbu ta'rif 'Quvvat bloki (Power Supply)'ga tegishli."
    },
    {
      "id": "informatika-920",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'HTTP / HTTPS' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-921",
      "question": "«SMTP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarni (gipermatnlarni) internet orqali xavfsiz uzatish protokoli'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — HTTP / HTTPS. Ushbu ta'rif 'HTTP / HTTPS'ga tegishli."
    },
    {
      "id": "informatika-922",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'FTP (File Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-923",
      "question": "«DNS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Fayllarni bir kompyuterdan ikkinchisiga tarmoq orqali uzatish protokoli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-924",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'SMTP (Simple Mail Transfer Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-925",
      "question": "«IMAP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta xabarlarini serverga yoki qabul qiluvchiga jo'natish protokoli'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — SMTP (Simple Mail Transfer Protocol). Ushbu ta'rif 'SMTP (Simple Mail Transfer Protocol)'ga tegishli."
    },
    {
      "id": "informatika-926",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'POP3 va IMAP' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-927",
      "question": "«SMTP» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Elektron pochta serveridan xatlarni qabul qilib olish protokollari'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-928",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'DHCP (Dynamic Host Configuration Protocol)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish. DHCP (Dynamic Host Configuration Protocol) - Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish."
    },
    {
      "id": "informatika-929",
      "question": "«DNS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqdagi qurilmalarga avtomatik ravishda dinamik IP manzillarni taqsimlab berish'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — DHCP (Dynamic Host Configuration Protocol). Ushbu ta'rif 'DHCP (Dynamic Host Configuration Protocol)'ga tegishli."
    },
    {
      "id": "informatika-930",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'IP manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-931",
      "question": "«Domen nomi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoqqa ulangan har bir qurilmaning global yoki lokal tarmoqdagi mantiqiy unikal manzili'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — IP manzil. Ushbu ta'rif 'IP manzil'ga tegishli."
    },
    {
      "id": "informatika-932",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'MAC manzil' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-933",
      "question": "«IP manzil» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Tarmoq kartasiga ishlab chiqaruvchi tomonidan berilgan 48 bitli jismoniy apparat manzili'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — MAC manzil. Ushbu ta'rif 'MAC manzil'ga tegishli."
    },
    {
      "id": "informatika-934",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Marshrutizator (Router)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma. Marshrutizator (Router) - Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma."
    },
    {
      "id": "informatika-935",
      "question": "«Xab (Hub)» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Turli tarmoqlar o'rtasida ma'lumotlar paketini optimal yo'nalish bo'yicha yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Marshrutizator (Router). Ushbu ta'rif 'Marshrutizator (Router)'ga tegishli."
    },
    {
      "id": "informatika-936",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Kommutator (Switch)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-937",
      "question": "«Xab» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Lokal tarmoq ichida ma'lumotni faqat qabul qiluvchi qurilmaning MAC manziliga maqsadli yo'naltiruvchi qurilma'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-938",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada '.docx / .doc' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-939",
      "question": "«.xlsx» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Word matnli hujjati fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-940",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada '.xlsx / .xls' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Microsoft Excel elektron jadvali fayl kengaytmasi. .xlsx / .xls - Microsoft Excel elektron jadvali fayl kengaytmasi."
    },
    {
      "id": "informatika-941",
      "question": "«.docx» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft Excel elektron jadvali fayl kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-942",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada '.pptx / .ppt' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Microsoft PowerPoint taqdimot fayli kengaytmasi. .pptx / .ppt - Microsoft PowerPoint taqdimot fayli kengaytmasi."
    },
    {
      "id": "informatika-943",
      "question": "«.mp4» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Microsoft PowerPoint taqdimot fayli kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-944",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.html / .htm' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-945",
      "question": "«.css» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web brauzerlar orqali ochiladigan gipermatnli sahifa fayli'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — .html / .htm. Ushbu ta'rif '.html / .htm'ga tegishli."
    },
    {
      "id": "informatika-946",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.mp3 / .wav' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Raqamli audio (tovush) fayllari formati. .mp3 / .wav - Raqamli audio (tovush) fayllari formati."
    },
    {
      "id": "informatika-947",
      "question": "«.png» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli audio (tovush) fayllari formati'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-948",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.mp4 / .avi / .mkv' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-949",
      "question": "«.exe» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli video fayllari kengaytmasi'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — .mp4 / .avi / .mkv. Ushbu ta'rif '.mp4 / .avi / .mkv'ga tegishli."
    },
    {
      "id": "informatika-950",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.jpg / .png / .svg' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Raqamli rastrli va vektorli grafik tasvirlar formati. .jpg / .png / .svg - Raqamli rastrli va vektorli grafik tasvirlar formati."
    },
    {
      "id": "informatika-951",
      "question": "«.mp3» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Raqamli rastrli va vektorli grafik tasvirlar formati'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-952",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada '.zip / .rar / .7z' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-953",
      "question": "«.exe» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Hajmni kichraytirish va arxivlash dasturlari fayli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-954",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '.exe / .msi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli. .exe / .msi - Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli."
    },
    {
      "id": "informatika-955",
      "question": "«.sys» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Windows operatsion sistemasida bajariluvchi dastur o'rnatish fayli'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-956",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Tizimli dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-957",
      "question": "«O'yinlar» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema, drayverlar va kompyuterning ishlashini ta'minlovchi utilitalar'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Tizimli dasturiy ta'minot. Ushbu ta'rif 'Tizimli dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-958",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Amaliy dasturiy ta'minot' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop). Amaliy dasturiy ta'minot - Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)."
    },
    {
      "id": "informatika-959",
      "question": "«BIOS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchining aniq bir masalasini yechishga mo'ljallangan dasturlar (Word, Excel, Photoshop)'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Amaliy dasturiy ta'minot. Ushbu ta'rif 'Amaliy dasturiy ta'minot'ga tegishli."
    },
    {
      "id": "informatika-960",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Drayver' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur. Drayver - Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur."
    },
    {
      "id": "informatika-961",
      "question": "«Arxivator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Operatsion sistema bilan tashqi yoki ichki qurilma (printer, videokarta) o'rtasidagi muloqotni ta'minlovchi dastur'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Drayver. Ushbu ta'rif 'Drayver'ga tegishli."
    },
    {
      "id": "informatika-962",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'BIOS (Basic Input/Output System)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-963",
      "question": "«Kesh» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Kompyuter yoqilganda qurilmalarni testdan o'tkazuvchi va OTni yuklovchi boshlang'ich tizim'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-964",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada 'Antivirus dasturi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi. Antivirus dasturi - Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi."
    },
    {
      "id": "informatika-965",
      "question": "«Operatsion sistema» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Zararli dasturlarni (viruslar, troyanlar, josus dasturlar) aniqlash, bloklash va zararsizlantirish dasturi'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Antivirus dasturi. Ushbu ta'rif 'Antivirus dasturi'ga tegishli."
    },
    {
      "id": "informatika-966",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'O'zgaruvchi (Variable)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-967",
      "question": "«Modul» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Xotiradan ajratilgan va dastur davomida qiymatini o'zgartirishi mumkin bo'lgan nomlangan soha'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — O'zgaruvchi (Variable). Ushbu ta'rif 'O'zgaruvchi (Variable)'ga tegishli."
    },
    {
      "id": "informatika-968",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Massiv (Ro'yxat / List)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma. Massiv (Ro'yxat / List) - Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma."
    },
    {
      "id": "informatika-969",
      "question": "«Skalyar kattalik» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Bir xil yoki har xil turdagi elementlarning tartiblangan to'plamini bir nom ostida saqlovchi tuzilma'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Massiv (Ro'yxat / List). Ushbu ta'rif 'Massiv (Ro'yxat / List)'ga tegishli."
    },
    {
      "id": "informatika-970",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'Funksiya (Function)' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-971",
      "question": "«Shart operatori» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturning istalgan joyidan nomini aytib bir necha bor chaqirib ishlatish mumkin bo'lgan mustaqil kod bloki'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Funksiya (Function). Ushbu ta'rif 'Funksiya (Function)'ga tegishli."
    },
    {
      "id": "informatika-972",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Rekursiya' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-973",
      "question": "«Iteratsiya» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Funksiyaning o'zini o'zi qayta chaqirishi hodisasi'?» savoliga to'g'ri javobmi?",
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
      "id": "informatika-974",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Kompilyator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita. Kompilyator - Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita."
    },
    {
      "id": "informatika-975",
      "question": "«Translyator» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dasturlash tilida yozilgan barcha kodni birdaniga mashina tiliga (ikkilik kodga) tarjima qilib beruvchi vosita'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Kompilyator. Ushbu ta'rif 'Kompilyator'ga tegishli."
    },
    {
      "id": "informatika-976",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada 'Interpretator' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori). Interpretator - Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)."
    },
    {
      "id": "informatika-977",
      "question": "«Dizassembler» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Dastur kodini qatorma-qator o'qib, ketma-ket bajaruvchi vosita (masalan, Python interpretatori)'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Interpretator. Ushbu ta'rif 'Interpretator'ga tegishli."
    },
    {
      "id": "informatika-978",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '<table> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — HTML tilida jadval yaratish uchun ochiladigan bosh teg. <table> tegi - HTML tilida jadval yaratish uchun ochiladigan bosh teg."
    },
    {
      "id": "informatika-979",
      "question": "«<td> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML tilida jadval yaratish uchun ochiladigan bosh teg'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — <table> tegi. Ushbu ta'rif '<table> tegi'ga tegishli."
    },
    {
      "id": "informatika-980",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada '<tr> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — HTML jadvalida yangi satr (qator) hosil qiluvchi teg. <tr> tegi - HTML jadvalida yangi satr (qator) hosil qiluvchi teg."
    },
    {
      "id": "informatika-981",
      "question": "«<col> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida yangi satr (qator) hosil qiluvchi teg'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — <tr> tegi. Ushbu ta'rif '<tr> tegi'ga tegishli."
    },
    {
      "id": "informatika-982",
      "question": "«Kompyuterning dastlabki yuklanishini ta'minlovchi BIOS dasturlarini doimiy saqlash» varianti «Informatikada '<td> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg. <td> tegi - HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg."
    },
    {
      "id": "informatika-983",
      "question": "«<tr> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'HTML jadvalida satr ichidagi alohida ustun (katakcha) ma'lumotini kirituvchi teg'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — <td> tegi. Ushbu ta'rif '<td> tegi'ga tegishli."
    },
    {
      "id": "informatika-984",
      "question": "«Barcha arifmetik-mantiqiy amallarni bajarish va kompyuter ishini boshqarish» varianti «Informatikada '<form> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi. <form> tegi - Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi."
    },
    {
      "id": "informatika-985",
      "question": "«<button> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchidan ma'lumotlarni qabul qilish va serverga jo'natish uchun shakl yaratish tegi'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — <form> tegi. Ushbu ta'rif '<form> tegi'ga tegishli."
    },
    {
      "id": "informatika-986",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada '<input> tegi' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg. <input> tegi - Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg."
    },
    {
      "id": "informatika-987",
      "question": "«<select> tegi» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Foydalanuvchi ma'lumot kiritishi uchun maydon (matn, parol, checkbox, radio) yaratuvchi teg'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — <input> tegi. Ushbu ta'rif '<input> tegi'ga tegishli."
    },
    {
      "id": "informatika-988",
      "question": "«Joriy vaqtda ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlash» varianti «Informatikada 'JavaScript' tushunchasining asosiy vazifasi yoki ta'rifi qaysi javobda to'g'ri ko'rsatilgan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili. JavaScript - Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili."
    },
    {
      "id": "informatika-989",
      "question": "«CSS» varianti «Quyidagi ta'rif qaysi axborot texnologiyalari qurilmasi, tushunchasi yoki dasturiga tegishli: 'Web sahifalarga dinamik xatti-harakat va interaktivlik qo'shuvchi dasturlash tili'?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — JavaScript. Ushbu ta'rif 'JavaScript'ga tegishli."
    },
    {
      "id": "informatika-990",
      "question": "«echo()» varianti «Python tilida ekranga ma'lumot chiqarish funksiyasi qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — print(). print() orqali natija konsolga chiqariladi."
    },
    {
      "id": "informatika-991",
      "question": "«scan()» varianti «Python tilida foydalanuvchidan klaviatura orqali ma'lumot qabul qilish funksiyasi qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — input(). input() klaviaturadan satr ko'rinishida qabul qiladi."
    },
    {
      "id": "informatika-992",
      "question": "«while» varianti «Python tilida shart operatori qaysi kalit so'z bilan boshlanadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — if. if shart: ... elif ... else."
    },
    {
      "id": "informatika-993",
      "question": "«function» varianti «Python tilida yangi funksiya yaratish uchun qaysi kalit so'z ishlatiladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — def. def funksiya_nomi(parametrlar): ..."
    },
    {
      "id": "informatika-994",
      "question": "«switch» varianti «Python tilida ma'lum qadamlar bilan cheklangan takrorlanish (tsikl) operatori qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — for. for i in range(...): tsikli."
    },
    {
      "id": "informatika-995",
      "question": "«range» varianti «Shartli takrorlanish (shart bajarilib turguncha takrorlanuvchi tsikl) qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — while. while shart: ... tsikli."
    },
    {
      "id": "informatika-996",
      "question": "«{ } (figurali qavslar)» varianti «Python tilida ro'yxat (list) elementlari qaysi qavslar ichiga yoziladi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — [ ] (to'rtburchak qavslar). Ro'yxat: a = [1, 2, 3]."
    },
    {
      "id": "informatika-997",
      "question": "«{ } (figurali qavslar)» varianti «O'zgarmas ro'yxat (kortej / tuple) qaysi qavslar ichida e'lon qilinadi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — ( ) (oddiy qavslar). Kortej: a = (1, 2, 3)."
    },
    {
      "id": "informatika-998",
      "question": "«length()» varianti «Python tilida ro'yxat uzunligini (elementlar sonini) aniqlovchi funksiya qaysi?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — len(). len(a) ro'yxat yoki satr uzunligini qaytaradi."
    },
    {
      "id": "informatika-999",
      "question": "«Geometrik formulalar va chiziqlarga» varianti «Rastrli grafika nimaga asoslangan?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Piksellar (nuqtalar) to'riga. Rastrli tasvirlar mayda nuqtalardan tashkil topadi (masalan, BMP, JPG)."
    },
    {
      "id": "informatika-1000",
      "question": "«Piksellardan tuzilgan» varianti «Vektorli grafikaning rastrli grafikadan asosiy afzalligi nima?» savoliga to'g'ri javobmi?",
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
      "explanation": "Yo'q. To'g'ri javob — Kattalashtirilganda yoki kichraytirilganda sifatini yo'qotmaydi. Vektorli tasvirlar matematik formulalar bilan chiziladi (masalan, SVG, CDR)."
    }
  ]
}

export default informatika
