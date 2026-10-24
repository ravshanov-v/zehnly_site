
const matematika = {
  id: 'matematika',
  title: 'Matematika',
  icon: '📐',
  category: 'Maktab fanlari',
  totalQuestions: 1000,
  questions: [
  {
    "id": "matematika-1",
    "question": "48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-2",
    "question": "12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "54"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-3",
    "question": "250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "100"
      },
      {
        "id": "B",
        "text": "75"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "250 · 0.20 = 50."
  },
  {
    "id": "matematika-4",
    "question": "Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "240"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "200"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-5",
    "question": "Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "5/9"
      },
      {
        "id": "B",
        "text": "17/20"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "23/20 (1.15)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-6",
    "question": "Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "11/24"
      },
      {
        "id": "B",
        "text": "5/24"
      },
      {
        "id": "C",
        "text": "13/24"
      },
      {
        "id": "D",
        "text": "6/5"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "(21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-7",
    "question": "Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "3/5 (0.6)"
      },
      {
        "id": "C",
        "text": "4/5"
      },
      {
        "id": "D",
        "text": "2/5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "(2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-8",
    "question": "Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "2/3"
      },
      {
        "id": "B",
        "text": "4/3"
      },
      {
        "id": "C",
        "text": "3/2 (1.5)"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "(4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-9",
    "question": "Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a - b)²"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "D",
        "text": "(a + b)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-10",
    "question": "(a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "B",
        "text": "a² + ab + b²"
      },
      {
        "id": "C",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-11",
    "question": "(a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "B",
        "text": "a³ - b³"
      },
      {
        "id": "C",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "D",
        "text": "a³ - 3a²b + 3ab² - b³"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-12",
    "question": "Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4 (2²)"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-13",
    "question": "Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "18"
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
        "text": "20"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-14",
    "question": "Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-15",
    "question": "Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "3x = 21 => x = 7."
  },
  {
    "id": "matematika-16",
    "question": "Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "1 va 6"
      },
      {
        "id": "B",
        "text": "-2 va -3"
      },
      {
        "id": "C",
        "text": "2 va 3"
      },
      {
        "id": "D",
        "text": "-1 va 6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-17",
    "question": "Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = 4ac - b²"
      },
      {
        "id": "B",
        "text": "D = b² - 4ac"
      },
      {
        "id": "C",
        "text": "D = b - 4ac"
      },
      {
        "id": "D",
        "text": "D = b² + 4ac"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-18",
    "question": "Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "B",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "C",
        "text": "x = 4 va x = -2"
      },
      {
        "id": "D",
        "text": "x = 5 va x = 1"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-19",
    "question": "Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-20",
    "question": "Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-21",
    "question": "Logarifmni hisoblang: log₃81 + log₅125",
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
        "text": "6"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-22",
    "question": "Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x < -3"
      },
      {
        "id": "B",
        "text": "x > 3"
      },
      {
        "id": "C",
        "text": "x < 3"
      },
      {
        "id": "D",
        "text": "x > 5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "3x > 9 => x > 3."
  },
  {
    "id": "matematika-23",
    "question": "Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "39"
      },
      {
        "id": "B",
        "text": "40"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "43"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-24",
    "question": "Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "155"
      },
      {
        "id": "B",
        "text": "145"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "150"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-25",
    "question": "Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "27"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "162"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-26",
    "question": "Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-27",
    "question": "Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "sin²α + cos²α = 1."
  },
  {
    "id": "matematika-28",
    "question": "sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "sin 30° = 1/2."
  },
  {
    "id": "matematika-29",
    "question": "cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "1/2 (0.5)"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "cos 60° = 1/2."
  },
  {
    "id": "matematika-30",
    "question": "tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "√3/3"
      },
      {
        "id": "D",
        "text": "√3"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "tg 45° = 1."
  },
  {
    "id": "matematika-31",
    "question": "Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin²α - cos²α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "2 sin α"
      },
      {
        "id": "D",
        "text": "2 sin α cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-32",
    "question": "Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "2 cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-33",
    "question": "f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "3x²"
      },
      {
        "id": "B",
        "text": "x²"
      },
      {
        "id": "C",
        "text": "x⁴ / 4"
      },
      {
        "id": "D",
        "text": "3x"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "(x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-34",
    "question": "f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x³ - 2"
      },
      {
        "id": "B",
        "text": "20x³"
      },
      {
        "id": "C",
        "text": "5x³ - 2"
      },
      {
        "id": "D",
        "text": "20x⁴ - 2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "(5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-35",
    "question": "f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "cos x"
      },
      {
        "id": "B",
        "text": "-cos x"
      },
      {
        "id": "C",
        "text": "-sin x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "(sin x)' = cos x."
  },
  {
    "id": "matematika-36",
    "question": "f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "-tg x"
      },
      {
        "id": "C",
        "text": "sin x"
      },
      {
        "id": "D",
        "text": "-cos x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "(cos x)' = -sin x."
  },
  {
    "id": "matematika-37",
    "question": "f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "2x² + C"
      },
      {
        "id": "B",
        "text": "2 + C"
      },
      {
        "id": "C",
        "text": "x² / 2 + C"
      },
      {
        "id": "D",
        "text": "x² + C"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-38",
    "question": "Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "[x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-39",
    "question": "To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
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
        "text": "14"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-40",
    "question": "Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "270°"
      },
      {
        "id": "C",
        "text": "90°"
      },
      {
        "id": "D",
        "text": "180°"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-41",
    "question": "Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a²"
      },
      {
        "id": "B",
        "text": "S = 2a²"
      },
      {
        "id": "C",
        "text": "S = 4a"
      },
      {
        "id": "D",
        "text": "S = a² / 2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-42",
    "question": "Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR"
      },
      {
        "id": "B",
        "text": "S = πR²"
      },
      {
        "id": "C",
        "text": "S = πR"
      },
      {
        "id": "D",
        "text": "S = 4πR²"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-43",
    "question": "Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = πR²"
      },
      {
        "id": "C",
        "text": "L = 2πR"
      },
      {
        "id": "D",
        "text": "L = πR"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-44",
    "question": "Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "180°"
      },
      {
        "id": "B",
        "text": "540°"
      },
      {
        "id": "C",
        "text": "720°"
      },
      {
        "id": "D",
        "text": "360°"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-45",
    "question": "Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = a³"
      },
      {
        "id": "B",
        "text": "V = 6a²"
      },
      {
        "id": "C",
        "text": "V = 3a"
      },
      {
        "id": "D",
        "text": "V = a²"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Kub hajmi: V = a³."
  },
  {
    "id": "matematika-46",
    "question": "Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = πR²H"
      },
      {
        "id": "D",
        "text": "V = 2πRH"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-47",
    "question": "Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "C",
        "text": "V = 2πRH"
      },
      {
        "id": "D",
        "text": "V = (4/3)πR³"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-48",
    "question": "Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = 4πR²"
      },
      {
        "id": "B",
        "text": "V = (1/3)πR³"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = πR³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-49",
    "question": "Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = 4πR²"
      },
      {
        "id": "B",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "C",
        "text": "S = πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-50",
    "question": "5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-51",
    "question": "4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "12"
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
    "correct": "D",
    "xp": 150,
    "explanation": "P₄ = 4! = 24."
  },
  {
    "id": "matematika-52",
    "question": "Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/3"
      },
      {
        "id": "C",
        "text": "1/12"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-53",
    "question": "Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/4"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "P = 1/2 = 0.5."
  },
  {
    "id": "matematika-54",
    "question": "Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "6x = 30 => x = 5."
  },
  {
    "id": "matematika-55",
    "question": "Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "120 · (3/4) = 90."
  },
  {
    "id": "matematika-56",
    "question": "Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "90"
      },
      {
        "id": "C",
        "text": "50"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-57",
    "question": "Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "19"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "(14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-58",
    "question": "Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "D",
    "xp": 150,
    "explanation": "√(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-59",
    "question": "x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "B",
        "text": "(x - 3)²"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "x(x - 9)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-60",
    "question": "x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x - 3)²"
      },
      {
        "id": "C",
        "text": "(x + 6)²"
      },
      {
        "id": "D",
        "text": "(x + 9)²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-61",
    "question": "Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x + 2"
      },
      {
        "id": "B",
        "text": "x"
      },
      {
        "id": "C",
        "text": "x - 2"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "(x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-62",
    "question": "Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "4√2"
      },
      {
        "id": "B",
        "text": "3√2"
      },
      {
        "id": "C",
        "text": "2√2"
      },
      {
        "id": "D",
        "text": "√32"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-63",
    "question": "Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "(√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-64",
    "question": "x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "-12"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-65",
    "question": "x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "-10"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-66",
    "question": "2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "±2"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "±4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-67",
    "question": "3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "0 va 2"
      },
      {
        "id": "B",
        "text": "3 va 6"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "0 va -2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-68",
    "question": "y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(0; 6)"
      },
      {
        "id": "B",
        "text": "(0; -3)"
      },
      {
        "id": "C",
        "text": "(-3; 0)"
      },
      {
        "id": "D",
        "text": "(6; 0)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-69",
    "question": "y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "-9"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-70",
    "question": "y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "[4; +∞)"
      },
      {
        "id": "B",
        "text": "(-∞; +∞)"
      },
      {
        "id": "C",
        "text": "(-∞; 4]"
      },
      {
        "id": "D",
        "text": "(4; +∞)"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-71",
    "question": "Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-72",
    "question": "Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "2 · 2 = 4."
  },
  {
    "id": "matematika-73",
    "question": "Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ld x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "lg x = log₁₀ x."
  },
  {
    "id": "matematika-74",
    "question": "Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "log x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "exp x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "ln x = log_e x."
  },
  {
    "id": "matematika-75",
    "question": "sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "-sin α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-76",
    "question": "cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "cos (90° - α) = sin α."
  },
  {
    "id": "matematika-77",
    "question": "sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "-cos α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "sin (180° - α) = sin α."
  },
  {
    "id": "matematika-78",
    "question": "cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "-sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-79",
    "question": "tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "tg²α"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "tg α · ctg α = 1."
  },
  {
    "id": "matematika-80",
    "question": "sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "mavjud emas"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "sin 0° = 0."
  },
  {
    "id": "matematika-81",
    "question": "cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "cos 0° = 1."
  },
  {
    "id": "matematika-82",
    "question": "sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "sin 90° = 1."
  },
  {
    "id": "matematika-83",
    "question": "cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "cos 90° = 0."
  },
  {
    "id": "matematika-84",
    "question": "Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "B",
        "text": "S = a²√3"
      },
      {
        "id": "C",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "D",
        "text": "S = a² / 2"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-85",
    "question": "Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "B",
        "text": "S = 2(d₁ + d₂)"
      },
      {
        "id": "C",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "D",
        "text": "S = d₁² + d₂²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-86",
    "question": "Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a + b) · h"
      },
      {
        "id": "B",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "C",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "D",
        "text": "S = a · b · h"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-87",
    "question": "Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / 4R"
      },
      {
        "id": "B",
        "text": "S = p · r"
      },
      {
        "id": "C",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "D",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-88",
    "question": "Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-89",
    "question": "Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "B",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "C",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-90",
    "question": "Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2pr"
      },
      {
        "id": "B",
        "text": "S = πr²"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = p / r"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "S = p · r."
  },
  {
    "id": "matematika-91",
    "question": "Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abR / 4c"
      },
      {
        "id": "B",
        "text": "S = 4R / abc"
      },
      {
        "id": "C",
        "text": "S = abc / (4R)"
      },
      {
        "id": "D",
        "text": "S = abc / (2R)"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "S = abc / 4R."
  },
  {
    "id": "matematika-92",
    "question": "A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "√13"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-93",
    "question": "a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "-14"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-94",
    "question": "To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-95",
    "question": "Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "96"
      },
      {
        "id": "C",
        "text": "32"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-96",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-97",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "54"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-98",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "75"
      },
      {
        "id": "B",
        "text": "100"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-99",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "200"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "240"
      },
      {
        "id": "D",
        "text": "160"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-100",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "17/20"
      },
      {
        "id": "C",
        "text": "23/20 (1.15)"
      },
      {
        "id": "D",
        "text": "5/9"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-101",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "5/24"
      },
      {
        "id": "B",
        "text": "6/5"
      },
      {
        "id": "C",
        "text": "11/24"
      },
      {
        "id": "D",
        "text": "13/24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-102",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "3/5 (0.6)"
      },
      {
        "id": "C",
        "text": "4/5"
      },
      {
        "id": "D",
        "text": "2/5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-103",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "3/2 (1.5)"
      },
      {
        "id": "B",
        "text": "4/3"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-104",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "B",
        "text": "(a - b)²"
      },
      {
        "id": "C",
        "text": "(a + b)²"
      },
      {
        "id": "D",
        "text": "(a - b)(a + b)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-105",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "a² + ab + b²"
      },
      {
        "id": "D",
        "text": "a² + b²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-106",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "B",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "C",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "D",
        "text": "a³ - b³"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-107",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "4 (2²)"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-108",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-109",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-110",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-111",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "2 va 3"
      },
      {
        "id": "B",
        "text": "-2 va -3"
      },
      {
        "id": "C",
        "text": "-1 va 6"
      },
      {
        "id": "D",
        "text": "1 va 6"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-112",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b² - 4ac"
      },
      {
        "id": "B",
        "text": "D = b² + 4ac"
      },
      {
        "id": "C",
        "text": "D = b - 4ac"
      },
      {
        "id": "D",
        "text": "D = 4ac - b²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-113",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 4 va x = -2"
      },
      {
        "id": "B",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "C",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "D",
        "text": "x = 1 va x = -5"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-114",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-115",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-116",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
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
        "text": "7"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-117",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 5"
      },
      {
        "id": "B",
        "text": "x < 3"
      },
      {
        "id": "C",
        "text": "x > 3"
      },
      {
        "id": "D",
        "text": "x < -3"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-118",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "43"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "39"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-119",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "155"
      },
      {
        "id": "B",
        "text": "145"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "150"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-120",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "27"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "162"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-121",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-122",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-123",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-124",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√2/2"
      },
      {
        "id": "B",
        "text": "1/2 (0.5)"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-125",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "√3/3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "√3"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-126",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin²α - cos²α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "2 sin α cos α"
      },
      {
        "id": "D",
        "text": "2 sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-127",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "2 cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-128",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x²"
      },
      {
        "id": "B",
        "text": "x⁴ / 4"
      },
      {
        "id": "C",
        "text": "3x²"
      },
      {
        "id": "D",
        "text": "3x"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-129",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x³"
      },
      {
        "id": "B",
        "text": "20x⁴ - 2"
      },
      {
        "id": "C",
        "text": "5x³ - 2"
      },
      {
        "id": "D",
        "text": "20x³ - 2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-130",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "tg x"
      },
      {
        "id": "D",
        "text": "cos x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-131",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-tg x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "sin x"
      },
      {
        "id": "D",
        "text": "-cos x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-132",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "2 + C"
      },
      {
        "id": "B",
        "text": "x² / 2 + C"
      },
      {
        "id": "C",
        "text": "x² + C"
      },
      {
        "id": "D",
        "text": "2x² + C"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-133",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "6"
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
        "text": "12"
      }
    ],
    "correct": "C",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-134",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
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
        "text": "14"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-135",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "270°"
      },
      {
        "id": "D",
        "text": "90°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-136",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2a²"
      },
      {
        "id": "B",
        "text": "S = a² / 2"
      },
      {
        "id": "C",
        "text": "S = a²"
      },
      {
        "id": "D",
        "text": "S = 4a"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-137",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR"
      },
      {
        "id": "B",
        "text": "S = πR²"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = πR"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-138",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = πR²"
      },
      {
        "id": "C",
        "text": "L = πR"
      },
      {
        "id": "D",
        "text": "L = 2πR"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-139",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "720°"
      },
      {
        "id": "B",
        "text": "540°"
      },
      {
        "id": "C",
        "text": "180°"
      },
      {
        "id": "D",
        "text": "360°"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-140",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = a³"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = 6a²"
      },
      {
        "id": "D",
        "text": "V = 3a"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-141",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = 2πRH"
      },
      {
        "id": "D",
        "text": "V = πR²H"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-142",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = 2πRH"
      },
      {
        "id": "B",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "C",
        "text": "V = πR²H"
      },
      {
        "id": "D",
        "text": "V = (4/3)πR³"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-143",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR³"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = 4πR²"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR³"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-144",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR²"
      },
      {
        "id": "B",
        "text": "S = πR²"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = (4/3)πR²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-145",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "120"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-146",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-147",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/6"
      },
      {
        "id": "C",
        "text": "1/12"
      },
      {
        "id": "D",
        "text": "1/3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-148",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/4"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "1/2 (0.5)"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-149",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-150",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "100"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-151",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-152",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "19"
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-153",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-154",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "x(x - 9)"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-155",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "(x + 6)²"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "(x + 9)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-156",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "x + 2"
      },
      {
        "id": "D",
        "text": "x - 2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-157",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "4√2"
      },
      {
        "id": "B",
        "text": "√32"
      },
      {
        "id": "C",
        "text": "3√2"
      },
      {
        "id": "D",
        "text": "2√2"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-158",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-159",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "-7"
      },
      {
        "id": "D",
        "text": "-12"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-160",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "-10"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-161",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "±4"
      },
      {
        "id": "D",
        "text": "±2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-162",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "0 va 2"
      },
      {
        "id": "B",
        "text": "0 va -2"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "3 va 6"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-163",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(0; 6)"
      },
      {
        "id": "B",
        "text": "(0; -3)"
      },
      {
        "id": "C",
        "text": "(-3; 0)"
      },
      {
        "id": "D",
        "text": "(6; 0)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-164",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "-9"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-165",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(4; +∞)"
      },
      {
        "id": "B",
        "text": "(-∞; 4]"
      },
      {
        "id": "C",
        "text": "[4; +∞)"
      },
      {
        "id": "D",
        "text": "(-∞; +∞)"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-166",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-167",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-168",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ld x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "lg x"
      },
      {
        "id": "D",
        "text": "log x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-169",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "ln x"
      },
      {
        "id": "B",
        "text": "lg x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "exp x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-170",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-171",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "-cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-172",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-173",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-174",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "tg²α"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-175",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "mavjud emas"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-176",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-177",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-178",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-179",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "B",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "C",
        "text": "S = a²√3"
      },
      {
        "id": "D",
        "text": "S = a² / 2"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-180",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "B",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "C",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "D",
        "text": "S = 2(d₁ + d₂)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-181",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "B",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "C",
        "text": "S = (a + b) · h"
      },
      {
        "id": "D",
        "text": "S = a · b · h"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-182",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "B",
        "text": "S = abc / 4R"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-183",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c = a + b - 2ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "D",
        "text": "c² = a² + b² - 2ab cos γ"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-184",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "B",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "C",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-185",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = p · r"
      },
      {
        "id": "B",
        "text": "S = πr²"
      },
      {
        "id": "C",
        "text": "S = 2pr"
      },
      {
        "id": "D",
        "text": "S = p / r"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-186",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4R / abc"
      },
      {
        "id": "B",
        "text": "S = abR / 4c"
      },
      {
        "id": "C",
        "text": "S = abc / (4R)"
      },
      {
        "id": "D",
        "text": "S = abc / (2R)"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-187",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "√13"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-188",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "-14"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-189",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-190",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "96"
      },
      {
        "id": "B",
        "text": "64"
      },
      {
        "id": "C",
        "text": "32"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-191",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-192",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "54"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-193",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "75"
      },
      {
        "id": "C",
        "text": "50"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-194",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "320"
      },
      {
        "id": "B",
        "text": "160"
      },
      {
        "id": "C",
        "text": "200"
      },
      {
        "id": "D",
        "text": "240"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-195",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "17/20"
      },
      {
        "id": "B",
        "text": "23/20 (1.15)"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "5/9"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-196",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "5/24"
      },
      {
        "id": "B",
        "text": "6/5"
      },
      {
        "id": "C",
        "text": "11/24"
      },
      {
        "id": "D",
        "text": "13/24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-197",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "3/5 (0.6)"
      },
      {
        "id": "C",
        "text": "4/5"
      },
      {
        "id": "D",
        "text": "2/5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-198",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "4/3"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "3/2 (1.5)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-199",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a - b)²"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "(a + b)²"
      },
      {
        "id": "D",
        "text": "(a - b)(a + b)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-200",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + ab + b²"
      },
      {
        "id": "B",
        "text": "a² + b²"
      },
      {
        "id": "C",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² - 2ab + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-201",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "B",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "C",
        "text": "a³ - b³"
      },
      {
        "id": "D",
        "text": "a³ + 3a²b - 3ab² + b³"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-202",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4 (2²)"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-203",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
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
        "text": "20"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-204",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-205",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-206",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "2 va 3"
      },
      {
        "id": "B",
        "text": "1 va 6"
      },
      {
        "id": "C",
        "text": "-1 va 6"
      },
      {
        "id": "D",
        "text": "-2 va -3"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-207",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b² - 4ac"
      },
      {
        "id": "B",
        "text": "D = b - 4ac"
      },
      {
        "id": "C",
        "text": "D = b² + 4ac"
      },
      {
        "id": "D",
        "text": "D = 4ac - b²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-208",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 4 va x = -2"
      },
      {
        "id": "B",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "C",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "D",
        "text": "x = 5 va x = 1"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-209",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-210",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-211",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "8"
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
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-212",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 5"
      },
      {
        "id": "B",
        "text": "x < 3"
      },
      {
        "id": "C",
        "text": "x < -3"
      },
      {
        "id": "D",
        "text": "x > 3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-213",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "40"
      },
      {
        "id": "B",
        "text": "39"
      },
      {
        "id": "C",
        "text": "43"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-214",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "145"
      },
      {
        "id": "C",
        "text": "150"
      },
      {
        "id": "D",
        "text": "155"
      }
    ],
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-215",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "162"
      },
      {
        "id": "B",
        "text": "27"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "54"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-216",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "24"
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
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-217",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "tg²α"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-218",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-219",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1/2 (0.5)"
      },
      {
        "id": "D",
        "text": "√3/2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-220",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "√3"
      },
      {
        "id": "C",
        "text": "√3/3"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-221",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 sin α"
      },
      {
        "id": "B",
        "text": "2 sin α cos α"
      },
      {
        "id": "C",
        "text": "cos²α - sin²α"
      },
      {
        "id": "D",
        "text": "sin²α - cos²α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-222",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "2 cos α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "cos²α - sin²α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-223",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "3x"
      },
      {
        "id": "B",
        "text": "x²"
      },
      {
        "id": "C",
        "text": "3x²"
      },
      {
        "id": "D",
        "text": "x⁴ / 4"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-224",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x³"
      },
      {
        "id": "B",
        "text": "5x³ - 2"
      },
      {
        "id": "C",
        "text": "20x⁴ - 2"
      },
      {
        "id": "D",
        "text": "20x³ - 2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-225",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "-cos x"
      },
      {
        "id": "C",
        "text": "cos x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-226",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "sin x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "-tg x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-227",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x² + C"
      },
      {
        "id": "B",
        "text": "x² / 2 + C"
      },
      {
        "id": "C",
        "text": "2x² + C"
      },
      {
        "id": "D",
        "text": "2 + C"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-228",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
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
        "text": "12"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-229",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
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
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-230",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "270°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "360°"
      },
      {
        "id": "D",
        "text": "90°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-231",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a²"
      },
      {
        "id": "B",
        "text": "S = 4a"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = 2a²"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-232",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR"
      },
      {
        "id": "B",
        "text": "S = πR"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = πR²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-233",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = 2πR"
      },
      {
        "id": "C",
        "text": "L = πR²"
      },
      {
        "id": "D",
        "text": "L = πR"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-234",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "720°"
      },
      {
        "id": "D",
        "text": "540°"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-235",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = a³"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = 6a²"
      },
      {
        "id": "D",
        "text": "V = 3a"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-236",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "D",
        "text": "V = 2πRH"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-237",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = 2πRH"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "D",
        "text": "V = (4/3)πR³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-238",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR³"
      },
      {
        "id": "B",
        "text": "V = 4πR²"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-239",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 4πR²"
      },
      {
        "id": "C",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-240",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "720"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-241",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-242",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "1/12"
      },
      {
        "id": "D",
        "text": "1/3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-243",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/4"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-244",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-245",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "100"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-246",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "60"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-247",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "19"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "21"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-248",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-249",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "(x + 3)²"
      },
      {
        "id": "C",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "D",
        "text": "x(x - 9)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-250",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 6)²"
      },
      {
        "id": "B",
        "text": "(x + 9)²"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "(x - 3)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-251",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "x"
      },
      {
        "id": "C",
        "text": "x + 2"
      },
      {
        "id": "D",
        "text": "x - 2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-252",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "4√2"
      },
      {
        "id": "B",
        "text": "2√2"
      },
      {
        "id": "C",
        "text": "√32"
      },
      {
        "id": "D",
        "text": "3√2"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-253",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-254",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "-12"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-255",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "-10"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-256",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "±2"
      },
      {
        "id": "D",
        "text": "±4"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-257",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "0 va 2"
      },
      {
        "id": "C",
        "text": "0 va -2"
      },
      {
        "id": "D",
        "text": "3 va 6"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-258",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(-3; 0)"
      },
      {
        "id": "B",
        "text": "(6; 0)"
      },
      {
        "id": "C",
        "text": "(0; 6)"
      },
      {
        "id": "D",
        "text": "(0; -3)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-259",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "-9"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-260",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "[4; +∞)"
      },
      {
        "id": "B",
        "text": "(4; +∞)"
      },
      {
        "id": "C",
        "text": "(-∞; 4]"
      },
      {
        "id": "D",
        "text": "(-∞; +∞)"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-261",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-262",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-263",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ln x"
      },
      {
        "id": "B",
        "text": "ld x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-264",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "ln x"
      },
      {
        "id": "B",
        "text": "log x"
      },
      {
        "id": "C",
        "text": "lg x"
      },
      {
        "id": "D",
        "text": "exp x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-265",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-266",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-267",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-268",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-269",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "tg²α"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-270",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "mavjud emas"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-271",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-272",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-273",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-274",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = a² / 2"
      },
      {
        "id": "B",
        "text": "S = a²√3"
      },
      {
        "id": "C",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "D",
        "text": "S = (a²√3) / 4"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-275",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = 2(d₁ + d₂)"
      },
      {
        "id": "B",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "C",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "D",
        "text": "S = d₁² + d₂²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-276",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "B",
        "text": "S = (a + b) · h"
      },
      {
        "id": "C",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "D",
        "text": "S = a · b · h"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-277",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / 4R"
      },
      {
        "id": "B",
        "text": "S = p · r"
      },
      {
        "id": "C",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      },
      {
        "id": "D",
        "text": "S = p(p - a)(p - b)(p - c)"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-278",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-279",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "B",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "C",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-280",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = p · r"
      },
      {
        "id": "B",
        "text": "S = 2pr"
      },
      {
        "id": "C",
        "text": "S = p / r"
      },
      {
        "id": "D",
        "text": "S = πr²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-281",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / (4R)"
      },
      {
        "id": "B",
        "text": "S = abR / 4c"
      },
      {
        "id": "C",
        "text": "S = abc / (2R)"
      },
      {
        "id": "D",
        "text": "S = 4R / abc"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-282",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "√13"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-283",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "14"
      },
      {
        "id": "C",
        "text": "-14"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-284",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-285",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "32"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "96"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-286",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-287",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-288",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "75"
      },
      {
        "id": "B",
        "text": "25"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-289",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "240"
      },
      {
        "id": "D",
        "text": "200"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-290",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "5/9"
      },
      {
        "id": "C",
        "text": "17/20"
      },
      {
        "id": "D",
        "text": "23/20 (1.15)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-291",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "5/24"
      },
      {
        "id": "B",
        "text": "11/24"
      },
      {
        "id": "C",
        "text": "13/24"
      },
      {
        "id": "D",
        "text": "6/5"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-292",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "2/5"
      },
      {
        "id": "B",
        "text": "1/3"
      },
      {
        "id": "C",
        "text": "3/5 (0.6)"
      },
      {
        "id": "D",
        "text": "4/5"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-293",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "4/3"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "3/2 (1.5)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-294",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "B",
        "text": "(a + b)²"
      },
      {
        "id": "C",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "D",
        "text": "(a - b)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-295",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "B",
        "text": "a² + ab + b²"
      },
      {
        "id": "C",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² + b²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-296",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "B",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "C",
        "text": "a³ - b³"
      },
      {
        "id": "D",
        "text": "a³ - 3ab + b³"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-297",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "4 (2²)"
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
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-298",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-299",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-300",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-301",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "-2 va -3"
      },
      {
        "id": "B",
        "text": "2 va 3"
      },
      {
        "id": "C",
        "text": "-1 va 6"
      },
      {
        "id": "D",
        "text": "1 va 6"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-302",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b - 4ac"
      },
      {
        "id": "B",
        "text": "D = 4ac - b²"
      },
      {
        "id": "C",
        "text": "D = b² + 4ac"
      },
      {
        "id": "D",
        "text": "D = b² - 4ac"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-303",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "B",
        "text": "x = 4 va x = -2"
      },
      {
        "id": "C",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "D",
        "text": "x = 5 va x = 1"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-304",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-305",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-306",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-307",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 3"
      },
      {
        "id": "B",
        "text": "x > 5"
      },
      {
        "id": "C",
        "text": "x < 3"
      },
      {
        "id": "D",
        "text": "x < -3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-308",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "43"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "39"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-309",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "145"
      },
      {
        "id": "B",
        "text": "155"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "150"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-310",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "27"
      },
      {
        "id": "B",
        "text": "54"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "162"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-311",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-312",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-313",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-314",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-315",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√3/3"
      },
      {
        "id": "D",
        "text": "√3"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-316",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 sin α"
      },
      {
        "id": "B",
        "text": "2 sin α cos α"
      },
      {
        "id": "C",
        "text": "cos²α - sin²α"
      },
      {
        "id": "D",
        "text": "sin²α - cos²α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-317",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos²α - sin²α"
      },
      {
        "id": "B",
        "text": "2 cos α"
      },
      {
        "id": "C",
        "text": "1 - sin 2α"
      },
      {
        "id": "D",
        "text": "sin²α - cos²α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-318",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x⁴ / 4"
      },
      {
        "id": "B",
        "text": "3x²"
      },
      {
        "id": "C",
        "text": "x²"
      },
      {
        "id": "D",
        "text": "3x"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-319",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x⁴ - 2"
      },
      {
        "id": "B",
        "text": "5x³ - 2"
      },
      {
        "id": "C",
        "text": "20x³"
      },
      {
        "id": "D",
        "text": "20x³ - 2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-320",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "tg x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "cos x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-321",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "-tg x"
      },
      {
        "id": "C",
        "text": "sin x"
      },
      {
        "id": "D",
        "text": "-sin x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-322",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x² + C"
      },
      {
        "id": "B",
        "text": "2x² + C"
      },
      {
        "id": "C",
        "text": "x² / 2 + C"
      },
      {
        "id": "D",
        "text": "2 + C"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-323",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-324",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "14"
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
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-325",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "90°"
      },
      {
        "id": "D",
        "text": "270°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-326",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a² / 2"
      },
      {
        "id": "B",
        "text": "S = 2a²"
      },
      {
        "id": "C",
        "text": "S = 4a"
      },
      {
        "id": "D",
        "text": "S = a²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-327",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 2πR"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = πR"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-328",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = πR"
      },
      {
        "id": "C",
        "text": "L = 2πR"
      },
      {
        "id": "D",
        "text": "L = πR²"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-329",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "540°"
      },
      {
        "id": "B",
        "text": "360°"
      },
      {
        "id": "C",
        "text": "180°"
      },
      {
        "id": "D",
        "text": "720°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-330",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 3a"
      },
      {
        "id": "B",
        "text": "V = 6a²"
      },
      {
        "id": "C",
        "text": "V = a³"
      },
      {
        "id": "D",
        "text": "V = a²"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-331",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = 2πRH"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = πR²H"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-332",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = πR²H"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = 2πRH"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-333",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR³"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR³"
      },
      {
        "id": "D",
        "text": "V = 4πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-334",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "B",
        "text": "S = 2πR²"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = πR²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-335",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "120"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-336",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-337",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "1/3"
      },
      {
        "id": "D",
        "text": "1/12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-338",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/4"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "1/2 (0.5)"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-339",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-340",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "100"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "80"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-341",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "80"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-342",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "19"
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-343",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
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
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-344",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "x(x - 9)"
      },
      {
        "id": "B",
        "text": "(x - 3)²"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "(x - 3)(x + 3)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-345",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "(x + 6)²"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "(x + 9)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-346",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x"
      },
      {
        "id": "B",
        "text": "x + 2"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "x - 2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-347",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "2√2"
      },
      {
        "id": "B",
        "text": "√32"
      },
      {
        "id": "C",
        "text": "3√2"
      },
      {
        "id": "D",
        "text": "4√2"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-348",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-349",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "-12"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-350",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "-10"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-351",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "±2"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "±4"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-352",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "0 va 2"
      },
      {
        "id": "B",
        "text": "0 va -2"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "3 va 6"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-353",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(6; 0)"
      },
      {
        "id": "B",
        "text": "(-3; 0)"
      },
      {
        "id": "C",
        "text": "(0; 6)"
      },
      {
        "id": "D",
        "text": "(0; -3)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-354",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "-9"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-355",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "[4; +∞)"
      },
      {
        "id": "B",
        "text": "(4; +∞)"
      },
      {
        "id": "C",
        "text": "(-∞; 4]"
      },
      {
        "id": "D",
        "text": "(-∞; +∞)"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-356",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-357",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-358",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "log x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "ld x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-359",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "lg x"
      },
      {
        "id": "B",
        "text": "log x"
      },
      {
        "id": "C",
        "text": "exp x"
      },
      {
        "id": "D",
        "text": "ln x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-360",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-361",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-362",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-363",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-364",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-365",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "mavjud emas"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-366",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-367",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-368",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√2/2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-369",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "B",
        "text": "S = a² / 2"
      },
      {
        "id": "C",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "D",
        "text": "S = a²√3"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-370",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "B",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "C",
        "text": "S = 2(d₁ + d₂)"
      },
      {
        "id": "D",
        "text": "S = d₁ · d₂"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-371",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a · b · h"
      },
      {
        "id": "B",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "C",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "D",
        "text": "S = (a + b) · h"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-372",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "B",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      },
      {
        "id": "C",
        "text": "S = abc / 4R"
      },
      {
        "id": "D",
        "text": "S = p · r"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-373",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "C",
        "text": "c = a + b - 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c² = a² + b² - 2ab cos γ"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-374",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "B",
        "text": "a / sin α = R"
      },
      {
        "id": "C",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "D",
        "text": "a / cos α = b / cos β"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-375",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = πr²"
      },
      {
        "id": "B",
        "text": "S = 2pr"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = p / r"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-376",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4R / abc"
      },
      {
        "id": "B",
        "text": "S = abc / (2R)"
      },
      {
        "id": "C",
        "text": "S = abR / 4c"
      },
      {
        "id": "D",
        "text": "S = abc / (4R)"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-377",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "√13"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-378",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "-14"
      },
      {
        "id": "C",
        "text": "-2"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-379",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-380",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "96"
      },
      {
        "id": "B",
        "text": "32"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "64"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-381",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-382",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-383",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "75"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-384",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "240"
      },
      {
        "id": "D",
        "text": "320"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-385",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "23/20 (1.15)"
      },
      {
        "id": "B",
        "text": "5/9"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "17/20"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-386",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "11/24"
      },
      {
        "id": "B",
        "text": "6/5"
      },
      {
        "id": "C",
        "text": "13/24"
      },
      {
        "id": "D",
        "text": "5/24"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-387",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "3/5 (0.6)"
      },
      {
        "id": "B",
        "text": "4/5"
      },
      {
        "id": "C",
        "text": "2/5"
      },
      {
        "id": "D",
        "text": "1/3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-388",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "2/3"
      },
      {
        "id": "B",
        "text": "3/2 (1.5)"
      },
      {
        "id": "C",
        "text": "4/3"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-389",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a - b)²"
      },
      {
        "id": "B",
        "text": "(a + b)²"
      },
      {
        "id": "C",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "D",
        "text": "(a - b)(a + b)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-390",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + b²"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² + ab + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-391",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "B",
        "text": "a³ - b³"
      },
      {
        "id": "C",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "D",
        "text": "a³ - 3a²b + 3ab² - b³"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-392",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "4 (2²)"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-393",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "14"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-394",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-395",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-396",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "-1 va 6"
      },
      {
        "id": "B",
        "text": "-2 va -3"
      },
      {
        "id": "C",
        "text": "1 va 6"
      },
      {
        "id": "D",
        "text": "2 va 3"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-397",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b² + 4ac"
      },
      {
        "id": "B",
        "text": "D = 4ac - b²"
      },
      {
        "id": "C",
        "text": "D = b² - 4ac"
      },
      {
        "id": "D",
        "text": "D = b - 4ac"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-398",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "B",
        "text": "x = 4 va x = -2"
      },
      {
        "id": "C",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "D",
        "text": "x = 5 va x = 1"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-399",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-400",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-401",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-402",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 3"
      },
      {
        "id": "B",
        "text": "x < 3"
      },
      {
        "id": "C",
        "text": "x > 5"
      },
      {
        "id": "D",
        "text": "x < -3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-403",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "43"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "39"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-404",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "150"
      },
      {
        "id": "C",
        "text": "155"
      },
      {
        "id": "D",
        "text": "145"
      }
    ],
    "correct": "C",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-405",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "162"
      },
      {
        "id": "C",
        "text": "27"
      },
      {
        "id": "D",
        "text": "54"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-406",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
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
        "text": "24"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-407",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "tg²α"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-408",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "1/2 (0.5)"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-409",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "√3/2"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-410",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√3"
      },
      {
        "id": "D",
        "text": "√3/3"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-411",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin²α - cos²α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "2 sin α"
      },
      {
        "id": "D",
        "text": "2 sin α cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-412",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 cos α"
      },
      {
        "id": "B",
        "text": "1 - sin 2α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "cos²α - sin²α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-413",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x²"
      },
      {
        "id": "B",
        "text": "3x"
      },
      {
        "id": "C",
        "text": "3x²"
      },
      {
        "id": "D",
        "text": "x⁴ / 4"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-414",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x⁴ - 2"
      },
      {
        "id": "B",
        "text": "20x³ - 2"
      },
      {
        "id": "C",
        "text": "5x³ - 2"
      },
      {
        "id": "D",
        "text": "20x³"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-415",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "cos x"
      },
      {
        "id": "C",
        "text": "-sin x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-416",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "sin x"
      },
      {
        "id": "D",
        "text": "-tg x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-417",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "2 + C"
      },
      {
        "id": "B",
        "text": "x² + C"
      },
      {
        "id": "C",
        "text": "x² / 2 + C"
      },
      {
        "id": "D",
        "text": "2x² + C"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-418",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
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
        "text": "12"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-419",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
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
        "text": "14"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-420",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "90°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "270°"
      },
      {
        "id": "D",
        "text": "360°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-421",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4a"
      },
      {
        "id": "B",
        "text": "S = a² / 2"
      },
      {
        "id": "C",
        "text": "S = 2a²"
      },
      {
        "id": "D",
        "text": "S = a²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-422",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 2πR"
      },
      {
        "id": "C",
        "text": "S = πR"
      },
      {
        "id": "D",
        "text": "S = 4πR²"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-423",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = 2πR"
      },
      {
        "id": "C",
        "text": "L = πR"
      },
      {
        "id": "D",
        "text": "L = πR²"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-424",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "720°"
      },
      {
        "id": "B",
        "text": "360°"
      },
      {
        "id": "C",
        "text": "180°"
      },
      {
        "id": "D",
        "text": "540°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-425",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 6a²"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = 3a"
      },
      {
        "id": "D",
        "text": "V = a³"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-426",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = πR²H"
      },
      {
        "id": "C",
        "text": "V = 2πRH"
      },
      {
        "id": "D",
        "text": "V = (4/3)πR³"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-427",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = πR²H"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = 2πRH"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-428",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR³"
      },
      {
        "id": "B",
        "text": "V = πR³"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = 4πR²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-429",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 4πR²"
      },
      {
        "id": "C",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-430",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "720"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-431",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "12"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-432",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/12"
      },
      {
        "id": "B",
        "text": "1/3"
      },
      {
        "id": "C",
        "text": "1/6"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-433",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "1/4"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-434",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-435",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-436",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "90"
      },
      {
        "id": "C",
        "text": "60"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-437",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "19"
      },
      {
        "id": "D",
        "text": "21"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-438",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-439",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "x(x - 9)"
      },
      {
        "id": "C",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "D",
        "text": "(x + 3)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-440",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x + 9)²"
      },
      {
        "id": "C",
        "text": "(x + 6)²"
      },
      {
        "id": "D",
        "text": "(x - 3)²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-441",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x"
      },
      {
        "id": "B",
        "text": "x + 2"
      },
      {
        "id": "C",
        "text": "x - 2"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-442",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "2√2"
      },
      {
        "id": "B",
        "text": "4√2"
      },
      {
        "id": "C",
        "text": "√32"
      },
      {
        "id": "D",
        "text": "3√2"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-443",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-444",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "-12"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-445",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "-10"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-446",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "±4"
      },
      {
        "id": "D",
        "text": "±2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-447",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "0 va 2"
      },
      {
        "id": "B",
        "text": "0 va -2"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "3 va 6"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-448",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(0; -3)"
      },
      {
        "id": "B",
        "text": "(6; 0)"
      },
      {
        "id": "C",
        "text": "(0; 6)"
      },
      {
        "id": "D",
        "text": "(-3; 0)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-449",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "-9"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-450",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(4; +∞)"
      },
      {
        "id": "B",
        "text": "[4; +∞)"
      },
      {
        "id": "C",
        "text": "(-∞; 4]"
      },
      {
        "id": "D",
        "text": "(-∞; +∞)"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-451",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-452",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-453",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "lg x"
      },
      {
        "id": "B",
        "text": "ld x"
      },
      {
        "id": "C",
        "text": "ln x"
      },
      {
        "id": "D",
        "text": "log x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-454",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "exp x"
      },
      {
        "id": "B",
        "text": "lg x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "ln x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-455",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-456",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-457",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "-sin α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-458",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-459",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "tg²α"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-460",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "mavjud emas"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-461",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-462",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-463",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-464",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "B",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = a²√3"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-465",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "B",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "C",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "D",
        "text": "S = 2(d₁ + d₂)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-466",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "B",
        "text": "S = a · b · h"
      },
      {
        "id": "C",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "D",
        "text": "S = (a + b) · h"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-467",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / 4R"
      },
      {
        "id": "B",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      },
      {
        "id": "C",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "D",
        "text": "S = p · r"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-468",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-469",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "B",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "C",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-470",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = πr²"
      },
      {
        "id": "B",
        "text": "S = p · r"
      },
      {
        "id": "C",
        "text": "S = 2pr"
      },
      {
        "id": "D",
        "text": "S = p / r"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-471",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abR / 4c"
      },
      {
        "id": "B",
        "text": "S = abc / (2R)"
      },
      {
        "id": "C",
        "text": "S = abc / (4R)"
      },
      {
        "id": "D",
        "text": "S = 4R / abc"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-472",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "√13"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-473",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "22"
      },
      {
        "id": "C",
        "text": "-14"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-474",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-475",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "32"
      },
      {
        "id": "C",
        "text": "64"
      },
      {
        "id": "D",
        "text": "96"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-476",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-477",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-478",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "50"
      },
      {
        "id": "C",
        "text": "75"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-479",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "320"
      },
      {
        "id": "B",
        "text": "160"
      },
      {
        "id": "C",
        "text": "240"
      },
      {
        "id": "D",
        "text": "200"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-480",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "23/20 (1.15)"
      },
      {
        "id": "B",
        "text": "5/9"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "17/20"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-481",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "6/5"
      },
      {
        "id": "B",
        "text": "13/24"
      },
      {
        "id": "C",
        "text": "11/24"
      },
      {
        "id": "D",
        "text": "5/24"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-482",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "3/5 (0.6)"
      },
      {
        "id": "B",
        "text": "2/5"
      },
      {
        "id": "C",
        "text": "1/3"
      },
      {
        "id": "D",
        "text": "4/5"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-483",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "4/3"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "3/2 (1.5)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-484",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a + b)²"
      },
      {
        "id": "B",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "C",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "D",
        "text": "(a - b)²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-485",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "B",
        "text": "a² + b²"
      },
      {
        "id": "C",
        "text": "a² + ab + b²"
      },
      {
        "id": "D",
        "text": "a² + 2ab + b²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-486",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "B",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "C",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "D",
        "text": "a³ - b³"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-487",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "4 (2²)"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-488",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "20"
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
        "text": "18"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-489",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-490",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "-7"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-491",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "2 va 3"
      },
      {
        "id": "B",
        "text": "1 va 6"
      },
      {
        "id": "C",
        "text": "-2 va -3"
      },
      {
        "id": "D",
        "text": "-1 va 6"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-492",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = 4ac - b²"
      },
      {
        "id": "B",
        "text": "D = b² - 4ac"
      },
      {
        "id": "C",
        "text": "D = b² + 4ac"
      },
      {
        "id": "D",
        "text": "D = b - 4ac"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-493",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "B",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "C",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "D",
        "text": "x = 4 va x = -2"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-494",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-495",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-496",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "6"
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
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-497",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 5"
      },
      {
        "id": "B",
        "text": "x > 3"
      },
      {
        "id": "C",
        "text": "x < 3"
      },
      {
        "id": "D",
        "text": "x < -3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-498",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "43"
      },
      {
        "id": "B",
        "text": "39"
      },
      {
        "id": "C",
        "text": "40"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-499",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "145"
      },
      {
        "id": "B",
        "text": "155"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "150"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-500",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "162"
      },
      {
        "id": "C",
        "text": "27"
      },
      {
        "id": "D",
        "text": "54"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-501",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
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
        "text": "18"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-502",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "tg²α"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-503",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-504",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "√3/2"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-505",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/3"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√3"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-506",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 sin α cos α"
      },
      {
        "id": "B",
        "text": "sin²α - cos²α"
      },
      {
        "id": "C",
        "text": "cos²α - sin²α"
      },
      {
        "id": "D",
        "text": "2 sin α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-507",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin²α - cos²α"
      },
      {
        "id": "B",
        "text": "2 cos α"
      },
      {
        "id": "C",
        "text": "cos²α - sin²α"
      },
      {
        "id": "D",
        "text": "1 - sin 2α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-508",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "3x²"
      },
      {
        "id": "B",
        "text": "x⁴ / 4"
      },
      {
        "id": "C",
        "text": "3x"
      },
      {
        "id": "D",
        "text": "x²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-509",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x⁴ - 2"
      },
      {
        "id": "B",
        "text": "5x³ - 2"
      },
      {
        "id": "C",
        "text": "20x³ - 2"
      },
      {
        "id": "D",
        "text": "20x³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-510",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "tg x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "cos x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-511",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-tg x"
      },
      {
        "id": "B",
        "text": "sin x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "-sin x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-512",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x² / 2 + C"
      },
      {
        "id": "B",
        "text": "2 + C"
      },
      {
        "id": "C",
        "text": "2x² + C"
      },
      {
        "id": "D",
        "text": "x² + C"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-513",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "16"
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
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-514",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text":
 "10"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-515",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "90°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "270°"
      },
      {
        "id": "D",
        "text": "360°"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-516",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a² / 2"
      },
      {
        "id": "B",
        "text": "S = 4a"
      },
      {
        "id": "C",
        "text": "S = 2a²"
      },
      {
        "id": "D",
        "text": "S = a²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-517",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4πR²"
      },
      {
        "id": "B",
        "text": "S = πR"
      },
      {
        "id": "C",
        "text": "S = πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-518",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 2πR"
      },
      {
        "id": "B",
        "text": "L = πR²"
      },
      {
        "id": "C",
        "text": "L = πR"
      },
      {
        "id": "D",
        "text": "L = 4πR"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-519",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "540°"
      },
      {
        "id": "C",
        "text": "720°"
      },
      {
        "id": "D",
        "text": "180°"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-520",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 6a²"
      },
      {
        "id": "B",
        "text": "V = a³"
      },
      {
        "id": "C",
        "text": "V = 3a"
      },
      {
        "id": "D",
        "text": "V = a²"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-521",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "B",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "C",
        "text": "V = 2πRH"
      },
      {
        "id": "D",
        "text": "V = πR²H"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-522",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "B",
        "text": "V = 2πRH"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "D",
        "text": "V = πR²H"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-523",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR³"
      },
      {
        "id": "B",
        "text": "V = 4πR²"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = πR³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-524",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 4πR²"
      },
      {
        "id": "C",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-525",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "120"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-526",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-527",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/3"
      },
      {
        "id": "C",
        "text": "1/12"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-528",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/4"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-529",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-530",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "100"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-531",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "50"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-532",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "19"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "21"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-533",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-534",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x - 3)²"
      },
      {
        "id": "C",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "D",
        "text": "x(x - 9)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-535",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x + 6)²"
      },
      {
        "id": "C",
        "text": "(x - 3)²"
      },
      {
        "id": "D",
        "text": "(x + 9)²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-536",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x + 2"
      },
      {
        "id": "B",
        "text": "x"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "x - 2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-537",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "3√2"
      },
      {
        "id": "B",
        "text": "2√2"
      },
      {
        "id": "C",
        "text": "4√2"
      },
      {
        "id": "D",
        "text": "√32"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-538",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-539",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "-12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-540",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "-10"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-541",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "±2"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "±4"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-542",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "0 va -2"
      },
      {
        "id": "C",
        "text": "0 va 2"
      },
      {
        "id": "D",
        "text": "3 va 6"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-543",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(0; 6)"
      },
      {
        "id": "B",
        "text": "(6; 0)"
      },
      {
        "id": "C",
        "text": "(-3; 0)"
      },
      {
        "id": "D",
        "text": "(0; -3)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-544",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "-9"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-545",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(-∞; +∞)"
      },
      {
        "id": "B",
        "text": "(-∞; 4]"
      },
      {
        "id": "C",
        "text": "(4; +∞)"
      },
      {
        "id": "D",
        "text": "[4; +∞)"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-546",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-547",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-548",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ld x"
      },
      {
        "id": "B",
        "text": "lg x"
      },
      {
        "id": "C",
        "text": "ln x"
      },
      {
        "id": "D",
        "text": "log x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-549",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "exp x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "lg x"
      },
      {
        "id": "D",
        "text": "log x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-550",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-551",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "-cos α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-552",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "-cos α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-553",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "-sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-554",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-555",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "mavjud emas"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-556",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-557",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-558",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-559",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "B",
        "text": "S = a² / 2"
      },
      {
        "id": "C",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "D",
        "text": "S = a²√3"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-560",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "B",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "C",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "D",
        "text": "S = 2(d₁ + d₂)"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-561",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a · b · h"
      },
      {
        "id": "B",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "C",
        "text": "S = (a + b) · h"
      },
      {
        "id": "D",
        "text": "S = (a · b) / 2 · h"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-562",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "B",
        "text": "S = p · r"
      },
      {
        "id": "C",
        "text": "S = abc / 4R"
      },
      {
        "id": "D",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-563",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-564",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "B",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "C",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-565",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = p / r"
      },
      {
        "id": "B",
        "text": "S = 2pr"
      },
      {
        "id": "C",
        "text": "S = πr²"
      },
      {
        "id": "D",
        "text": "S = p · r"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-566",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / (4R)"
      },
      {
        "id": "B",
        "text": "S = 4R / abc"
      },
      {
        "id": "C",
        "text": "S = abc / (2R)"
      },
      {
        "id": "D",
        "text": "S = abR / 4c"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-567",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "√13"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-568",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "14"
      },
      {
        "id": "C",
        "text": "-14"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-569",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-570",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "32"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "96"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-571",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-572",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-573",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "75"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-574",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "240"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "320"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-575",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "23/20 (1.15)"
      },
      {
        "id": "B",
        "text": "5/9"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "17/20"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-576",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "13/24"
      },
      {
        "id": "B",
        "text": "5/24"
      },
      {
        "id": "C",
        "text": "11/24"
      },
      {
        "id": "D",
        "text": "6/5"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-577",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "2/5"
      },
      {
        "id": "B",
        "text": "4/5"
      },
      {
        "id": "C",
        "text": "1/3"
      },
      {
        "id": "D",
        "text": "3/5 (0.6)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-578",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "4/3"
      },
      {
        "id": "B",
        "text": "3/2 (1.5)"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "2/3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-579",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a - b)²"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "(a + b)²"
      },
      {
        "id": "D",
        "text": "(a - b)(a + b)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-580",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + ab + b²"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-581",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "B",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "C",
        "text": "a³ - b³"
      },
      {
        "id": "D",
        "text": "a³ + 3a²b - 3ab² + b³"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-582",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "4 (2²)"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-583",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-584",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-585",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "-7"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-586",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "2 va 3"
      },
      {
        "id": "B",
        "text": "1 va 6"
      },
      {
        "id": "C",
        "text": "-2 va -3"
      },
      {
        "id": "D",
        "text": "-1 va 6"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-587",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b² + 4ac"
      },
      {
        "id": "B",
        "text": "D = b - 4ac"
      },
      {
        "id": "C",
        "text": "D = 4ac - b²"
      },
      {
        "id": "D",
        "text": "D = b² - 4ac"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-588",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "B",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "C",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "D",
        "text": "x = 4 va x = -2"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-589",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-590",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-591",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "6"
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
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-592",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x < -3"
      },
      {
        "id": "B",
        "text": "x > 5"
      },
      {
        "id": "C",
        "text": "x < 3"
      },
      {
        "id": "D",
        "text": "x > 3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-593",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "40"
      },
      {
        "id": "B",
        "text": "39"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "43"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-594",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "155"
      },
      {
        "id": "B",
        "text": "150"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "145"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-595",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "162"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "27"
      },
      {
        "id": "D",
        "text": "54"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-596",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
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
        "text": "24"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-597",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "tg²α"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-598",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√2/2"
      },
      {
        "id": "B",
        "text": "1/2 (0.5)"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-599",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-600",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/3"
      },
      {
        "id": "B",
        "text": "√3"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-601",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 sin α cos α"
      },
      {
        "id": "B",
        "text": "2 sin α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "cos²α - sin²α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-602",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "2 cos α"
      },
      {
        "id": "D",
        "text": "sin²α - cos²α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-603",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x²"
      },
      {
        "id": "B",
        "text": "3x²"
      },
      {
        "id": "C",
        "text": "3x"
      },
      {
        "id": "D",
        "text": "x⁴ / 4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-604",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x⁴ - 2"
      },
      {
        "id": "B",
        "text": "20x³ - 2"
      },
      {
        "id": "C",
        "text": "20x³"
      },
      {
        "id": "D",
        "text": "5x³ - 2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-605",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "cos x"
      },
      {
        "id": "C",
        "text": "tg x"
      },
      {
        "id": "D",
        "text": "-cos x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-606",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "sin x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "-tg x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-607",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "2 + C"
      },
      {
        "id": "B",
        "text": "2x² + C"
      },
      {
        "id": "C",
        "text": "x² + C"
      },
      {
        "id": "D",
        "text": "x² / 2 + C"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-608",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
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
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-609",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
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
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-610",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "90°"
      },
      {
        "id": "C",
        "text": "180°"
      },
      {
        "id": "D",
        "text": "270°"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-611",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4a"
      },
      {
        "id": "B",
        "text": "S = 2a²"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = a²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-612",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 2πR"
      },
      {
        "id": "C",
        "text": "S = πR"
      },
      {
        "id": "D",
        "text": "S = 4πR²"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-613",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = πR"
      },
      {
        "id": "B",
        "text": "L = πR²"
      },
      {
        "id": "C",
        "text": "L = 2πR"
      },
      {
        "id": "D",
        "text": "L = 4πR"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-614",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "720°"
      },
      {
        "id": "D",
        "text": "540°"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-615",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 3a"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = a³"
      },
      {
        "id": "D",
        "text": "V = 6a²"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-616",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "B",
        "text": "V = πR²H"
      },
      {
        "id": "C",
        "text": "V = 2πRH"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR²H"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-617",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = 2πRH"
      },
      {
        "id": "B",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = πR²H"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-618",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "B",
        "text": "V = 4πR²"
      },
      {
        "id": "C",
        "text": "V = πR³"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR³"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-619",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR²"
      },
      {
        "id": "B",
        "text": "S = 4πR²"
      },
      {
        "id": "C",
        "text": "S = πR²"
      },
      {
        "id": "D",
        "text": "S = (4/3)πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-620",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "720"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-621",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-622",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "1/12"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "1/6"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-623",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-624",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-625",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-626",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-627",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "19"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-628",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-629",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "B",
        "text": "(x + 3)²"
      },
      {
        "id": "C",
        "text": "(x - 3)²"
      },
      {
        "id": "D",
        "text": "x(x - 9)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-630",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x + 6)²"
      },
      {
        "id": "C",
        "text": "(x - 3)²"
      },
      {
        "id": "D",
        "text": "(x + 9)²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-631",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x - 2"
      },
      {
        "id": "B",
        "text": "x"
      },
      {
        "id": "C",
        "text": "x + 2"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-632",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "4√2"
      },
      {
        "id": "B",
        "text": "2√2"
      },
      {
        "id": "C",
        "text": "3√2"
      },
      {
        "id": "D",
        "text": "√32"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-633",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-634",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "-7"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "-12"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-635",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "-10"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-636",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "±2"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "±4"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-637",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "0 va -2"
      },
      {
        "id": "B",
        "text": "3 va 6"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "0 va 2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-638",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(0; 6)"
      },
      {
        "id": "B",
        "text": "(-3; 0)"
      },
      {
        "id": "C",
        "text": "(6; 0)"
      },
      {
        "id": "D",
        "text": "(0; -3)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-639",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "-9"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-640",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(4; +∞)"
      },
      {
        "id": "B",
        "text": "(-∞; 4]"
      },
      {
        "id": "C",
        "text": "[4; +∞)"
      },
      {
        "id": "D",
        "text": "(-∞; +∞)"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-641",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-642",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-643",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ln x"
      },
      {
        "id": "B",
        "text": "lg x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "ld x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-644",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "ln x"
      },
      {
        "id": "B",
        "text": "log x"
      },
      {
        "id": "C",
        "text": "exp x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-645",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-646",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-647",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-648",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-649",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-650",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "mavjud emas"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-651",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-652",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-653",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-654",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "B",
        "text": "S = a²√3"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = (a²√3) / 4"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-655",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "B",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "C",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "D",
        "text": "S = 2(d₁ + d₂)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-656",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a · b · h"
      },
      {
        "id": "B",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "C",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "D",
        "text": "S = (a + b) · h"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-657",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = p · r"
      },
      {
        "id": "B",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      },
      {
        "id": "C",
        "text": "S = abc / 4R"
      },
      {
        "id": "D",
        "text": "S = p(p - a)(p - b)(p - c)"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-658",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-659",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "B",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "C",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-660",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = πr²"
      },
      {
        "id": "B",
        "text": "S = p / r"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = 2pr"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-661",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / (4R)"
      },
      {
        "id": "B",
        "text": "S = abR / 4c"
      },
      {
        "id": "C",
        "text": "S = abc / (2R)"
      },
      {
        "id": "D",
        "text": "S = 4R / abc"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-662",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "√13"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-663",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "-14"
      },
      {
        "id": "B",
        "text": "14"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-664",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-665",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "96"
      },
      {
        "id": "D",
        "text": "32"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-666",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-667",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "72"
      },
      {
        "id": "B",
        "text": "54"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-668",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "50"
      },
      {
        "id": "C",
        "text": "75"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-669",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "320"
      },
      {
        "id": "D",
        "text": "240"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-670",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "23/20 (1.15)"
      },
      {
        "id": "C",
        "text": "5/9"
      },
      {
        "id": "D",
        "text": "17/20"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-671",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "11/24"
      },
      {
        "id": "B",
        "text": "13/24"
      },
      {
        "id": "C",
        "text": "6/5"
      },
      {
        "id": "D",
        "text": "5/24"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-672",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "2/5"
      },
      {
        "id": "B",
        "text": "1/3"
      },
      {
        "id": "C",
        "text": "4/5"
      },
      {
        "id": "D",
        "text": "3/5 (0.6)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-673",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "3/2 (1.5)"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "4/3"
      },
      {
        "id": "D",
        "text": "2/3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-674",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a + b)²"
      },
      {
        "id": "B",
        "text": "(a - b)²"
      },
      {
        "id": "C",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "D",
        "text": "a² - 2ab + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-675",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + b²"
      },
      {
        "id": "B",
        "text": "a² + ab + b²"
      },
      {
        "id": "C",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² + 2ab + b²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-676",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "B",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "C",
        "text": "a³ - b³"
      },
      {
        "id": "D",
        "text": "a³ - 3ab + b³"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-677",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "4 (2²)"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-678",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "20"
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
        "text": "18"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-679",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-680",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-681",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "-1 va 6"
      },
      {
        "id": "B",
        "text": "1 va 6"
      },
      {
        "id": "C",
        "text": "-2 va -3"
      },
      {
        "id": "D",
        "text": "2 va 3"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-682",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b - 4ac"
      },
      {
        "id": "B",
        "text": "D = 4ac - b²"
      },
      {
        "id": "C",
        "text": "D = b² - 4ac"
      },
      {
        "id": "D",
        "text": "D = b² + 4ac"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-683",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "B",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "C",
        "text": "x = 4 va x = -2"
      },
      {
        "id": "D",
        "text": "x = 5 va x = -1"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-684",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-685",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "5"
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
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-686",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "6"
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
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-687",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x < -3"
      },
      {
        "id": "B",
        "text": "x > 5"
      },
      {
        "id": "C",
        "text": "x > 3"
      },
      {
        "id": "D",
        "text": "x < 3"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-688",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "43"
      },
      {
        "id": "C",
        "text": "39"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-689",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "145"
      },
      {
        "id": "C",
        "text": "150"
      },
      {
        "id": "D",
        "text": "155"
      }
    ],
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-690",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "162"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "27"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-691",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
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
        "text": "18"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-692",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "tg²α"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-693",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-694",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "1/2 (0.5)"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-695",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/3"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "√3"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-696",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos²α - sin²α"
      },
      {
        "id": "B",
        "text": "2 sin α"
      },
      {
        "id": "C",
        "text": "2 sin α cos α"
      },
      {
        "id": "D",
        "text": "sin²α - cos²α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-697",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos²α - sin²α"
      },
      {
        "id": "B",
        "text": "sin²α - cos²α"
      },
      {
        "id": "C",
        "text": "1 - sin 2α"
      },
      {
        "id": "D",
        "text": "2 cos α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-698",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "3x"
      },
      {
        "id": "B",
        "text": "x²"
      },
      {
        "id": "C",
        "text": "x⁴ / 4"
      },
      {
        "id": "D",
        "text": "3x²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-699",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x³"
      },
      {
        "id": "B",
        "text": "20x³ - 2"
      },
      {
        "id": "C",
        "text": "20x⁴ - 2"
      },
      {
        "id": "D",
        "text": "5x³ - 2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-700",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "-cos x"
      },
      {
        "id": "C",
        "text": "cos x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-701",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "sin x"
      },
      {
        "id": "C",
        "text": "-tg x"
      },
      {
        "id": "D",
        "text": "-cos x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-702",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "2 + C"
      },
      {
        "id": "B",
        "text": "x² / 2 + C"
      },
      {
        "id": "C",
        "text": "x² + C"
      },
      {
        "id": "D",
        "text": "2x² + C"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-703",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
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
        "text": "12"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-704",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
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
        "text": "14"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-705",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "270°"
      },
      {
        "id": "B",
        "text": "360°"
      },
      {
        "id": "C",
        "text": "90°"
      },
      {
        "id": "D",
        "text": "180°"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-706",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a² / 2"
      },
      {
        "id": "B",
        "text": "S = a²"
      },
      {
        "id": "C",
        "text": "S = 2a²"
      },
      {
        "id": "D",
        "text": "S = 4a"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-707",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR"
      },
      {
        "id": "B",
        "text": "S = πR"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = πR²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-708",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 2πR"
      },
      {
        "id": "B",
        "text": "L = πR"
      },
      {
        "id": "C",
        "text": "L = 4πR"
      },
      {
        "id": "D",
        "text": "L = πR²"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-709",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "540°"
      },
      {
        "id": "D",
        "text": "720°"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-710",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = a³"
      },
      {
        "id": "B",
        "text": "V = 6a²"
      },
      {
        "id": "C",
        "text": "V = a²"
      },
      {
        "id": "D",
        "text": "V = 3a"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-711",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = πR²H"
      },
      {
        "id": "D",
        "text": "V = 2πRH"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-712",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = 2πRH"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR²H"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-713",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR³"
      },
      {
        "id": "B",
        "text": "V = 4πR²"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = πR³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-714",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = 4πR²"
      },
      {
        "id": "B",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "C",
        "text": "S = πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-715",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "720"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-716",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-717",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/12"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "1/3"
      },
      {
        "id": "D",
        "text": "1/6"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-718",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "1/2 (0.5)"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-719",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
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
        "text": "5"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-720",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "90"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-721",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "50"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-722",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "19"
      },
      {
        "id": "C",
        "text": "21"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-723",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-724",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "C",
        "text": "(x - 3)²"
      },
      {
        "id": "D",
        "text": "x(x - 9)"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-725",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 6)²"
      },
      {
        "id": "B",
        "text": "(x + 3)²"
      },
      {
        "id": "C",
        "text": "(x - 3)²"
      },
      {
        "id": "D",
        "text": "(x + 9)²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-726",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x + 2"
      },
      {
        "id": "B",
        "text": "x"
      },
      {
        "id": "C",
        "text": "x - 2"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-727",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "2√2"
      },
      {
        "id": "B",
        "text": "3√2"
      },
      {
        "id": "C",
        "text": "√32"
      },
      {
        "id": "D",
        "text": "4√2"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-728",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-729",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "-12"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-730",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-10"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-731",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "±4"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "±2"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-732",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "3 va 6"
      },
      {
        "id": "B",
        "text": "0 va -2"
      },
      {
        "id": "C",
        "text": "0 va 2"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-733",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(0; 6)"
      },
      {
        "id": "B",
        "text": "(-3; 0)"
      },
      {
        "id": "C",
        "text": "(6; 0)"
      },
      {
        "id": "D",
        "text": "(0; -3)"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-734",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-9"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-735",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(-∞; 4]"
      },
      {
        "id": "B",
        "text": "[4; +∞)"
      },
      {
        "id": "C",
        "text": "(4; +∞)"
      },
      {
        "id": "D",
        "text": "(-∞; +∞)"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-736",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-737",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-738",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "lg x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "ld x"
      },
      {
        "id": "D",
        "text": "log x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-739",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "log x"
      },
      {
        "id": "B",
        "text": "exp x"
      },
      {
        "id": "C",
        "text": "lg x"
      },
      {
        "id": "D",
        "text": "ln x"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-740",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-741",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-742",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "sin α"
      },
      {
        "id": "D",
        "text": "-sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-743",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-744",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "tg²α"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-745",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "mavjud emas"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-746",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-747",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-748",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-749",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "B",
        "text": "S = a²√3"
      },
      {
        "id": "C",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "D",
        "text": "S = a² / 2"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-750",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = d₁ · d₂"
      },
      {
        "id": "B",
        "text": "S = 2(d₁ + d₂)"
      },
      {
        "id": "C",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "D",
        "text": "S = d₁² + d₂²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-751",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a + b) · h"
      },
      {
        "id": "B",
        "text": "S = a · b · h"
      },
      {
        "id": "C",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "D",
        "text": "S = (a · b) / 2 · h"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-752",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / 4R"
      },
      {
        "id": "B",
        "text": "S = p · r"
      },
      {
        "id": "C",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "D",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-753",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-754",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "B",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "C",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "D",
        "text": "a / sin α = R"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-755",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = p / r"
      },
      {
        "id": "B",
        "text": "S = πr²"
      },
      {
        "id": "C",
        "text": "S = 2pr"
      },
      {
        "id": "D",
        "text": "S = p · r"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-756",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / (4R)"
      },
      {
        "id": "B",
        "text": "S = abR / 4c"
      },
      {
        "id": "C",
        "text": "S = 4R / abc"
      },
      {
        "id": "D",
        "text": "S = abc / (2R)"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-757",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "√13"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-758",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "-14"
      },
      {
        "id": "C",
        "text": "-2"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-759",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-760",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "32"
      },
      {
        "id": "B",
        "text": "64"
      },
      {
        "id": "C",
        "text": "96"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-761",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-762",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "72"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-763",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "50"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "75"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-764",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "200"
      },
      {
        "id": "D",
        "text": "240"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-765",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "23/20 (1.15)"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "5/9"
      },
      {
        "id": "D",
        "text": "17/20"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-766",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "11/24"
      },
      {
        "id": "B",
        "text": "13/24"
      },
      {
        "id": "C",
        "text": "6/5"
      },
      {
        "id": "D",
        "text": "5/24"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-767",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "2/5"
      },
      {
        "id": "B",
        "text": "4/5"
      },
      {
        "id": "C",
        "text": "1/3"
      },
      {
        "id": "D",
        "text": "3/5 (0.6)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-768",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "3/2 (1.5)"
      },
      {
        "id": "B",
        "text": "4/3"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-769",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "B",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "C",
        "text": "(a - b)²"
      },
      {
        "id": "D",
        "text": "(a + b)²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-770",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "B",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "C",
        "text": "a² + ab + b²"
      },
      {
        "id": "D",
        "text": "a² + b²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-771",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - b³"
      },
      {
        "id": "B",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "C",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "D",
        "text": "a³ - 3ab + b³"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-772",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4 (2²)"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-773",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-774",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-775",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-776",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "1 va 6"
      },
      {
        "id": "B",
        "text": "2 va 3"
      },
      {
        "id": "C",
        "text": "-1 va 6"
      },
      {
        "id": "D",
        "text": "-2 va -3"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-777",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b² + 4ac"
      },
      {
        "id": "B",
        "text": "D = b - 4ac"
      },
      {
        "id": "C",
        "text": "D = b² - 4ac"
      },
      {
        "id": "D",
        "text": "D = 4ac - b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-778",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "B",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "C",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "D",
        "text": "x = 4 va x = -2"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-779",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-780",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-781",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-782",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 5"
      },
      {
        "id": "B",
        "text": "x > 3"
      },
      {
        "id": "C",
        "text": "x < -3"
      },
      {
        "id": "D",
        "text": "x < 3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-783",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "43"
      },
      {
        "id": "B",
        "text": "40"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "39"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-784",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "150"
      },
      {
        "id": "B",
        "text": "155"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "145"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-785",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "162"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "27"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-786",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correct": "C",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-787",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-788",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1/2 (0.5)"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-789",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√3/2"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-790",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3"
      },
      {
        "id": "B",
        "text": "√3/3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-791",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 sin α cos α"
      },
      {
        "id": "B",
        "text": "2 sin α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "cos²α - sin²α"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-792",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "2 cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-793",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x⁴ / 4"
      },
      {
        "id": "B",
        "text": "x²"
      },
      {
        "id": "C",
        "text": "3x"
      },
      {
        "id": "D",
        "text": "3x²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-794",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x³ - 2"
      },
      {
        "id": "B",
        "text": "5x³ - 2"
      },
      {
        "id": "C",
        "text": "20x⁴ - 2"
      },
      {
        "id": "D",
        "text": "20x³"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-795",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "cos x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-796",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-tg x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "sin x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-797",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x² / 2 + C"
      },
      {
        "id": "B",
        "text": "2x² + C"
      },
      {
        "id": "C",
        "text": "2 + C"
      },
      {
        "id": "D",
        "text": "x² + C"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-798",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-799",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-800",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "90°"
      },
      {
        "id": "C",
        "text": "270°"
      },
      {
        "id": "D",
        "text": "180°"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-801",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4a"
      },
      {
        "id": "B",
        "text": "S = 2a²"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = a²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-802",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2πR"
      },
      {
        "id": "B",
        "text": "S = πR"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = πR²"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-803",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = πR"
      },
      {
        "id": "C",
        "text": "L = 2πR"
      },
      {
        "id": "D",
        "text": "L = πR²"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-804",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "540°"
      },
      {
        "id": "B",
        "text": "720°"
      },
      {
        "id": "C",
        "text": "360°"
      },
      {
        "id": "D",
        "text": "180°"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-805",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 6a²"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = a³"
      },
      {
        "id": "D",
        "text": "V = 3a"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-806",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "D",
        "text": "V = 2πRH"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-807",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = 2πRH"
      },
      {
        "id": "B",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = πR²H"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-808",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = 4πR²"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = πR³"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR³"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-809",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = 4πR²"
      },
      {
        "id": "B",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "C",
        "text": "S = 2πR²"
      },
      {
        "id": "D",
        "text": "S = πR²"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-810",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "720"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "120"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-811",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "48"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-812",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "1/3"
      },
      {
        "id": "D",
        "text": "1/12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-813",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1/4"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-814",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "5"
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
        "text": "6"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-815",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "90"
      },
      {
        "id": "C",
        "text": "80"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-816",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-817",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "19"
      },
      {
        "id": "C",
        "text": "21"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-818",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
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
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-819",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "x(x - 9)"
      },
      {
        "id": "C",
        "text": "(x - 3)(x + 3)"
      },
      {
        "id": "D",
        "text": "(x + 3)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-820",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x + 6)²"
      },
      {
        "id": "B",
        "text": "(x + 9)²"
      },
      {
        "id": "C",
        "text": "(x + 3)²"
      },
      {
        "id": "D",
        "text": "(x - 3)²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-821",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "x + 2"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "x"
      },
      {
        "id": "D",
        "text": "x - 2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-822",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "2√2"
      },
      {
        "id": "B",
        "text": "√32"
      },
      {
        "id": "C",
        "text": "4√2"
      },
      {
        "id": "D",
        "text": "3√2"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-823",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-824",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "-12"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-825",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "-10"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-826",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "±4"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "±2"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-827",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "0 va 2"
      },
      {
        "id": "B",
        "text": "0 va -2"
      },
      {
        "id": "C",
        "text": "3 va 6"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-828",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(6; 0)"
      },
      {
        "id": "B",
        "text": "(-3; 0)"
      },
      {
        "id": "C",
        "text": "(0; 6)"
      },
      {
        "id": "D",
        "text": "(0; -3)"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-829",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "-9"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-830",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "[4; +∞)"
      },
      {
        "id": "B",
        "text": "(4; +∞)"
      },
      {
        "id": "C",
        "text": "(-∞; +∞)"
      },
      {
        "id": "D",
        "text": "(-∞; 4]"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-831",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-832",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-833",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ld x"
      },
      {
        "id": "B",
        "text": "lg x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "ln x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-834",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "log x"
      },
      {
        "id": "B",
        "text": "exp x"
      },
      {
        "id": "C",
        "text": "ln x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-835",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-836",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-cos α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-sin α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-837",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "cos α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-838",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "sin α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-839",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "tg²α"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-840",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "mavjud emas"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-841",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-842",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-843",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-844",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = (a²√3) / 4"
      },
      {
        "id": "B",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = a²√3"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-845",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "B",
        "text": "S = 2(d₁ + d₂)"
      },
      {
        "id": "C",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "D",
        "text": "S = d₁ · d₂"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-846",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a · b · h"
      },
      {
        "id": "B",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "C",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "D",
        "text": "S = (a + b) · h"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-847",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      },
      {
        "id": "B",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "C",
        "text": "S = abc / 4R"
      },
      {
        "id": "D",
        "text": "S = p · r"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-848",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - ab cos γ"
      },
      {
        "id": "C",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c = a + b - 2ab cos γ"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-849",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "B",
        "text": "a · sin α = b · sin β"
      },
      {
        "id": "C",
        "text": "a / sin α = R"
      },
      {
        "id": "D",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-850",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = p / r"
      },
      {
        "id": "B",
        "text": "S = πr²"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = 2pr"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-851",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / (4R)"
      },
      {
        "id": "B",
        "text": "S = 4R / abc"
      },
      {
        "id": "C",
        "text": "S = abc / (2R)"
      },
      {
        "id": "D",
        "text": "S = abR / 4c"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-852",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "√13"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-853",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "-14"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-854",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-855",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "32"
      },
      {
        "id": "B",
        "text": "64"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "96"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-856",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "48"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-857",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "72"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-858",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "75"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-859",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "240"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "200"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-860",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "5/9"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "23/20 (1.15)"
      },
      {
        "id": "D",
        "text": "17/20"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-861",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "6/5"
      },
      {
        "id": "B",
        "text": "11/24"
      },
      {
        "id": "C",
        "text": "5/24"
      },
      {
        "id": "D",
        "text": "13/24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-862",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "3/5 (0.6)"
      },
      {
        "id": "B",
        "text": "2/5"
      },
      {
        "id": "C",
        "text": "4/5"
      },
      {
        "id": "D",
        "text": "1/3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-863",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "4/3"
      },
      {
        "id": "B",
        "text": "2/3"
      },
      {
        "id": "C",
        "text": "3/2 (1.5)"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-864",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "B",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "C",
        "text": "(a - b)²"
      },
      {
        "id": "D",
        "text": "(a + b)²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-865",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + b²"
      },
      {
        "id": "B",
        "text": "a² + ab + b²"
      },
      {
        "id": "C",
        "text": "a² - 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² + 2ab + b²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-866",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "B",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "C",
        "text": "a³ - b³"
      },
      {
        "id": "D",
        "text": "a³ - 3ab + b³"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-867",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4 (2²)"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-868",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-869",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-870",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "-7"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-871",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "1 va 6"
      },
      {
        "id": "B",
        "text": "-1 va 6"
      },
      {
        "id": "C",
        "text": "2 va 3"
      },
      {
        "id": "D",
        "text": "-2 va -3"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-872",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = b² + 4ac"
      },
      {
        "id": "B",
        "text": "D = b - 4ac"
      },
      {
        "id": "C",
        "text": "D = 4ac - b²"
      },
      {
        "id": "D",
        "text": "D = b² - 4ac"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-873",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "B",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "C",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "D",
        "text": "x = 4 va x = -2"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-874",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-875",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-876",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "6"
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
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-877",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x < 3"
      },
      {
        "id": "B",
        "text": "x > 3"
      },
      {
        "id": "C",
        "text": "x < -3"
      },
      {
        "id": "D",
        "text": "x > 5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-878",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "40"
      },
      {
        "id": "C",
        "text": "43"
      },
      {
        "id": "D",
        "text": "39"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-879",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "155"
      },
      {
        "id": "B",
        "text": "145"
      },
      {
        "id": "C",
        "text": "150"
      },
      {
        "id": "D",
        "text": "160"
      }
    ],
    "correct": "A",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-880",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "162"
      },
      {
        "id": "C",
        "text": "27"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-881",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "24"
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
        "text": "18"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-882",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "tg²α"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-883",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√2/2"
      },
      {
        "id": "B",
        "text": "√3/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-884",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√3/2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1/2 (0.5)"
      },
      {
        "id": "D",
        "text": "√2/2"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-885",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√3/3"
      },
      {
        "id": "D",
        "text": "√3"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-886",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos²α - sin²α"
      },
      {
        "id": "B",
        "text": "2 sin α cos α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "2 sin α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-887",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "sin²α - cos²α"
      },
      {
        "id": "C",
        "text": "2 cos α"
      },
      {
        "id": "D",
        "text": "cos²α - sin²α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-888",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x⁴ / 4"
      },
      {
        "id": "B",
        "text": "3x"
      },
      {
        "id": "C",
        "text": "x²"
      },
      {
        "id": "D",
        "text": "3x²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-889",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "5x³ - 2"
      },
      {
        "id": "B",
        "text": "20x³"
      },
      {
        "id": "C",
        "text": "20x³ - 2"
      },
      {
        "id": "D",
        "text": "20x⁴ - 2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-890",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "cos x"
      },
      {
        "id": "C",
        "text": "-cos x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-891",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "-tg x"
      },
      {
        "id": "C",
        "text": "-sin x"
      },
      {
        "id": "D",
        "text": "sin x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-892",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x² + C"
      },
      {
        "id": "B",
        "text": "x² / 2 + C"
      },
      {
        "id": "C",
        "text": "2x² + C"
      },
      {
        "id": "D",
        "text": "2 + C"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-893",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-894",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
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
        "text": "9"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-895",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "180°"
      },
      {
        "id": "B",
        "text": "90°"
      },
      {
        "id": "C",
        "text": "360°"
      },
      {
        "id": "D",
        "text": "270°"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-896",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = a²"
      },
      {
        "id": "B",
        "text": "S = 2a²"
      },
      {
        "id": "C",
        "text": "S = a² / 2"
      },
      {
        "id": "D",
        "text": "S = 4a"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-897",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4πR²"
      },
      {
        "id": "B",
        "text": "S = πR"
      },
      {
        "id": "C",
        "text": "S = πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-898",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = πR"
      },
      {
        "id": "C",
        "text": "L = 2πR"
      },
      {
        "id": "D",
        "text": "L = πR²"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-899",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "180°"
      },
      {
        "id": "B",
        "text": "540°"
      },
      {
        "id": "C",
        "text": "360°"
      },
      {
        "id": "D",
        "text": "720°"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-900",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 3a"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = 6a²"
      },
      {
        "id": "D",
        "text": "V = a³"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-901",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = 2πRH"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "D",
        "text": "V = (4/3)πR³"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-902",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = 2πRH"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = πR²H"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR²H"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-903",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR³"
      },
      {
        "id": "B",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "C",
        "text": "V = (1/3)πR³"
      },
      {
        "id": "D",
        "text": "V = 4πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-904",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = πR²"
      },
      {
        "id": "B",
        "text": "S = 4πR²"
      },
      {
        "id": "C",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-905",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "60"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  },
  {
    "id": "matematika-906",
    "question": "DTM namunaviy matematika tahlili: 4 elementli to'plamning barcha o'rinlashtirishlar soni (P₄) nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "48"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: P₄ = 4! = 24."
  },
  {
    "id": "matematika-907",
    "question": "DTM namunaviy matematika tahlili: Bitta standart o'yin suyagi (zarik) tashlanganda 6 ochko tushishi ehtimolligi qancha?",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "1/12"
      },
      {
        "id": "C",
        "text": "1/6"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Jami 6 ta teng ehtimolli holatdan qulay holat bitta: P = 1/6."
  },
  {
    "id": "matematika-908",
    "question": "DTM namunaviy matematika tahlili: Tanga bir marta tashlanganda gerb tomoni tushishi ehtimoli qancha?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2 (0.5)"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: P = 1/2 = 0.5."
  },
  {
    "id": "matematika-909",
    "question": "DTM namunaviy matematika tahlili: Nisbat va mutanosiblik: 3 : x = 6 : 10 proporsiyadan x ni toping.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 6x = 30 => x = 5."
  },
  {
    "id": "matematika-910",
    "question": "DTM namunaviy matematika tahlili: Sonning qismi: 120 ning 3/4 qismini toping.",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "100"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 120 · (3/4) = 90."
  },
  {
    "id": "matematika-911",
    "question": "DTM namunaviy matematika tahlili: Teskarisi: Qaysi sonning 2/3 qismi 40 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: x · (2/3) = 40 => x = 40 · 3 / 2 = 60."
  },
  {
    "id": "matematika-912",
    "question": "DTM namunaviy matematika tahlili: Arifmetik o'rta: 14, 18 va 28 sonlarining o'rta arifmetigini toping.",
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "22"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "19"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: (14 + 18 + 28) / 3 = 60 / 3 = 20."
  },
  {
    "id": "matematika-913",
    "question": "DTM namunaviy matematika tahlili: Geometrik o'rta: 4 va 16 sonlarining o'rta geometrigini toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "6"
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
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: √(4 · 16) = √64 = 8."
  },
  {
    "id": "matematika-914",
    "question": "DTM namunaviy matematika tahlili: x² - 9 ko'phadni ko'paytuvchilarga ajrating.",
    "options": [
      {
        "id": "A",
        "text": "(x + 3)²"
      },
      {
        "id": "B",
        "text": "(x - 3)²"
      },
      {
        "id": "C",
        "text": "x(x - 9)"
      },
      {
        "id": "D",
        "text": "(x - 3)(x + 3)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: x² - 3² = (x - 3)(x + 3)."
  },
  {
    "id": "matematika-915",
    "question": "DTM namunaviy matematika tahlili: x² + 6x + 9 ifodani yig'indining kvadrati shaklida yozing.",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)²"
      },
      {
        "id": "B",
        "text": "(x + 6)²"
      },
      {
        "id": "C",
        "text": "(x + 9)²"
      },
      {
        "id": "D",
        "text": "(x + 3)²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: x² + 2·3·x + 3² = (x + 3)²."
  },
  {
    "id": "matematika-916",
    "question": "DTM namunaviy matematika tahlili: Kasrni qisqartiring: (x² - 4) / (x - 2)",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "x + 2"
      },
      {
        "id": "C",
        "text": "x"
      },
      {
        "id": "D",
        "text": "x - 2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (x - 2)(x + 2) / (x - 2) = x + 2 (x ≠ 2)."
  },
  {
    "id": "matematika-917",
    "question": "DTM namunaviy matematika tahlili: Irratsional ifodani soddalashtiring: √50 - √18",
    "options": [
      {
        "id": "A",
        "text": "√32"
      },
      {
        "id": "B",
        "text": "3√2"
      },
      {
        "id": "C",
        "text": "2√2"
      },
      {
        "id": "D",
        "text": "4√2"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 5√2 - 3√2 = 2√2."
  },
  {
    "id": "matematika-918",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: (√7 - 2)(√7 + 2)",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (√7)² - 2² = 7 - 4 = 3."
  },
  {
    "id": "matematika-919",
    "question": "DTM namunaviy matematika tahlili: x² - 7x + 12 = 0 tenglamaning ildizlari yig'indisini toping.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "-12"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = -(-7) = 7."
  },
  {
    "id": "matematika-920",
    "question": "DTM namunaviy matematika tahlili: x² + 3x - 10 = 0 tenglamaning ildizlari ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "-10"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ · x₂ = -10."
  },
  {
    "id": "matematika-921",
    "question": "DTM namunaviy matematika tahlili: 2x² - 8 = 0 chala kvadrat tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "±2"
      },
      {
        "id": "C",
        "text": "±4"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2x² = 8 => x² = 4 => x = ±2."
  },
  {
    "id": "matematika-922",
    "question": "DTM namunaviy matematika tahlili: 3x² - 6x = 0 tenglamaning ildizlarini toping.",
    "options": [
      {
        "id": "A",
        "text": "3 va 6"
      },
      {
        "id": "B",
        "text": "0 va 2"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "0 va -2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x(x - 2) = 0 => x = 0 yoki x = 2."
  },
  {
    "id": "matematika-923",
    "question": "DTM namunaviy matematika tahlili: y = 2x + 6 to'g'ri chiziqning Oy o'qi bilan kesishish nuqtasi koordinatasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(6; 0)"
      },
      {
        "id": "B",
        "text": "(0; 6)"
      },
      {
        "id": "C",
        "text": "(0; -3)"
      },
      {
        "id": "D",
        "text": "(-3; 0)"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: x = 0 bo'lganda y = 6 bo'ladi."
  },
  {
    "id": "matematika-924",
    "question": "DTM namunaviy matematika tahlili: y = 3x - 9 funksiyaning noli (Ox o'qi bilan kesishish nuqtasi) qaysi?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "-9"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: y = 0 => 3x - 9 = 0 => x = 3."
  },
  {
    "id": "matematika-925",
    "question": "DTM namunaviy matematika tahlili: y = √(x - 4) funksiyaning aniqlanish sohasini toping.",
    "options": [
      {
        "id": "A",
        "text": "(-∞; 4]"
      },
      {
        "id": "B",
        "text": "[4; +∞)"
      },
      {
        "id": "C",
        "text": "(-∞; +∞)"
      },
      {
        "id": "D",
        "text": "(4; +∞)"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Ildiz osti noldan katta yoki teng: x - 4 ≥ 0 => x ≥ 4."
  },
  {
    "id": "matematika-926",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₅25 - log₂8",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: log₅25 = 2, log₂8 = 3 => 2 - 3 = -1."
  },
  {
    "id": "matematika-927",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: log₃9 · log₄16",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 2 · 2 = 4."
  },
  {
    "id": "matematika-928",
    "question": "DTM namunaviy matematika tahlili: Asosi 10 bo'lgan logarifm (o'nli logarifm) qanday belgilanadi?",
    "options": [
      {
        "id": "A",
        "text": "ld x"
      },
      {
        "id": "B",
        "text": "lg x"
      },
      {
        "id": "C",
        "text": "ln x"
      },
      {
        "id": "D",
        "text": "log x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: lg x = log₁₀ x."
  },
  {
    "id": "matematika-929",
    "question": "DTM namunaviy matematika tahlili: Asosi e (Eyler soni ≈ 2.718) bo'lgan natural logarifm qanday yoziladi?",
    "options": [
      {
        "id": "A",
        "text": "exp x"
      },
      {
        "id": "B",
        "text": "ln x"
      },
      {
        "id": "C",
        "text": "log x"
      },
      {
        "id": "D",
        "text": "lg x"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: ln x = log_e x."
  },
  {
    "id": "matematika-930",
    "question": "DTM namunaviy matematika tahlili: sin (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Keltirish formulasi: sin (90° - α) = cos α."
  },
  {
    "id": "matematika-931",
    "question": "DTM namunaviy matematika tahlili: cos (90° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-sin α"
      },
      {
        "id": "B",
        "text": "sin α"
      },
      {
        "id": "C",
        "text": "cos α"
      },
      {
        "id": "D",
        "text": "-cos α"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (90° - α) = sin α."
  },
  {
    "id": "matematika-932",
    "question": "DTM namunaviy matematika tahlili: sin (180° - α) keltirish formulasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "-cos α"
      },
      {
        "id": "C",
        "text": "-sin α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: sin (180° - α) = sin α."
  },
  {
    "id": "matematika-933",
    "question": "DTM namunaviy matematika tahlili: cos (180° - α) nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "cos α"
      },
      {
        "id": "B",
        "text": "-sin α"
      },
      {
        "id": "C",
        "text": "-cos α"
      },
      {
        "id": "D",
        "text": "sin α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos (180° - α) = -cos α."
  },
  {
    "id": "matematika-934",
    "question": "DTM namunaviy matematika tahlili: tg α · ctg α ko'paytmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "tg²α"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg α · ctg α = 1."
  },
  {
    "id": "matematika-935",
    "question": "DTM namunaviy matematika tahlili: sin 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "mavjud emas"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 0° = 0."
  },
  {
    "id": "matematika-936",
    "question": "DTM namunaviy matematika tahlili: cos 0° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 0° = 1."
  },
  {
    "id": "matematika-937",
    "question": "DTM namunaviy matematika tahlili: sin 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 90° = 1."
  },
  {
    "id": "matematika-938",
    "question": "DTM namunaviy matematika tahlili: cos 90° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "√2/2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 90° = 0."
  },
  {
    "id": "matematika-939",
    "question": "DTM namunaviy matematika tahlili: Muntazam uchburchakning tomoni a bo'lsa, uning yuzi qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = a² / 2"
      },
      {
        "id": "B",
        "text": "S = a²√3"
      },
      {
        "id": "C",
        "text": "S = (a²√3) / 2"
      },
      {
        "id": "D",
        "text": "S = (a²√3) / 4"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: Teng tomonli uchburchak yuzi: S = (a²√3) / 4."
  },
  {
    "id": "matematika-940",
    "question": "DTM namunaviy matematika tahlili: Rombning diagonallari d₁ va d₂ bo'lsa, uning yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = (d₁ · d₂) / 2"
      },
      {
        "id": "B",
        "text": "S = d₁² + d₂²"
      },
      {
        "id": "C",
        "text": "S = 2(d₁ + d₂)"
      },
      {
        "id": "D",
        "text": "S = d₁ · d₂"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Romb yuzi diagonallar ko'paytmasining yarmiga teng."
  },
  {
    "id": "matematika-941",
    "question": "DTM namunaviy matematika tahlili: Trapetsiyaning asoslari a va b, balandligi h bo'lsa, yuzi qanday hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = ((a + b) / 2) · h"
      },
      {
        "id": "B",
        "text": "S = (a + b) · h"
      },
      {
        "id": "C",
        "text": "S = (a · b) / 2 · h"
      },
      {
        "id": "D",
        "text": "S = a · b · h"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Trapetsiya yuzi o'rta chiziq bilan balandlik ko'paytmasiga teng."
  },
  {
    "id": "matematika-942",
    "question": "DTM namunaviy matematika tahlili: Geron formulasi yordamida uchburchak yuzi qanday topiladi (p - yarim perimetr)?",
    "options": [
      {
        "id": "A",
        "text": "S = p(p - a)(p - b)(p - c)"
      },
      {
        "id": "B",
        "text": "S = √(p(p - a)(p - b)(p - c))"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = abc / 4R"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Geron formulasi uchta tomon berilganda yuzni hisoblash formulasidir."
  },
  {
    "id": "matematika-943",
    "question": "DTM namunaviy matematika tahlili: Kosinuslar teoremasi qaysi javobda to'g'ri ifodalangan?",
    "options": [
      {
        "id": "A",
        "text": "c² = a² + b² + 2ab cos γ"
      },
      {
        "id": "B",
        "text": "c² = a² + b² - 2ab cos γ"
      },
      {
        "id": "C",
        "text": "c = a + b - 2ab cos γ"
      },
      {
        "id": "D",
        "text": "c² = a² + b² - ab cos γ"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: Kosinuslar teoremasi ixtiyoriy uchburchak uchun o'rinli."
  },
  {
    "id": "matematika-944",
    "question": "DTM namunaviy matematika tahlili: Sinuslar teoremasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a / sin α = R"
      },
      {
        "id": "B",
        "text": "a / cos α = b / cos β"
      },
      {
        "id": "C",
        "text": "a / sin α = b / sin β = c / sin γ = 2R"
      },
      {
        "id": "D",
        "text": "a · sin α = b · sin β"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Tomonning qarshisidagi burchak sinusiga nisbati tashqi chizilgan aylana diametriga teng."
  },
  {
    "id": "matematika-945",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka ichki chizilgan aylananing radiusi (r) va yarim perimetr (p) orqali yuz qanday topiladi?",
    "options": [
      {
        "id": "A",
        "text": "S = p / r"
      },
      {
        "id": "B",
        "text": "S = 2pr"
      },
      {
        "id": "C",
        "text": "S = p · r"
      },
      {
        "id": "D",
        "text": "S = πr²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: S = p · r."
  },
  {
    "id": "matematika-946",
    "question": "DTM namunaviy matematika tahlili: Uchburchakka tashqi chizilgan aylananing radiusi (R) orqali yuz formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = abc / (2R)"
      },
      {
        "id": "B",
        "text": "S = abc / (4R)"
      },
      {
        "id": "C",
        "text": "S = abR / 4c"
      },
      {
        "id": "D",
        "text": "S = 4R / abc"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: S = abc / 4R."
  },
  {
    "id": "matematika-947",
    "question": "DTM namunaviy matematika tahlili: A(1; 3) va B(4; 7) nuqtalar orasidagi masofani toping.",
    "options": [
      {
        "id": "A",
        "text": "√13"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: d = √((4 - 1)² + (7 - 3)²) = √(3² + 4²) = 5."
  },
  {
    "id": "matematika-948",
    "question": "DTM namunaviy matematika tahlili: a(2; -3) va b(5; 4) vektorlarning skalyar ko'paytmasini toping.",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "-14"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: a · b = 2·5 + (-3)·4 = 10 - 12 = -2."
  },
  {
    "id": "matematika-949",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli parallelepipedning o'lchamlari 2, 3 va 4 bo'lsa, uning hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: V = a · b · c = 2 · 3 · 4 = 24."
  },
  {
    "id": "matematika-950",
    "question": "DTM namunaviy matematika tahlili: Muntazam to'rtburchakli piramidaning asosi tomoni 4 ga, balandligi 6 ga teng bo'lsa, hajmini toping.",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "64"
      },
      {
        "id": "C",
        "text": "32"
      },
      {
        "id": "D",
        "text": "96"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: V = (1/3) · S_asos · h = (1/3) · 16 · 6 = 32."
  },
  {
    "id": "matematika-951",
    "question": "DTM namunaviy matematika tahlili: 48 va 72 sonlarining eng katta umumiy bo'luvchisini (EKUB) toping.",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "xp": 200,
    "explanation": "Yechilish asosi: 48 = 2⁴ · 3, 72 = 2³ · 3². EKUB(48, 72) = 2³ · 3 = 24."
  },
  {
    "id": "matematika-952",
    "question": "DTM namunaviy matematika tahlili: 12 va 18 sonlarining eng kichik umumiy karralisini (EKUK) toping.",
    "options": [
      {
        "id": "A",
        "text": "72"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: 12 = 2² · 3, 18 = 2 · 3². EKUK(12, 18) = 2² · 3² = 36."
  },
  {
    "id": "matematika-953",
    "question": "DTM namunaviy matematika tahlili: 250 sonining 20% ini toping.",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "25"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "75"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 250 · 0.20 = 50."
  },
  {
    "id": "matematika-954",
    "question": "DTM namunaviy matematika tahlili: Qaysi sonning 40% i 80 ga teng?",
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "200"
      },
      {
        "id": "D",
        "text": "240"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: x · 0.40 = 80 => x = 80 / 0.4 = 200."
  },
  {
    "id": "matematika-955",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 3/4 + 2/5",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "17/20"
      },
      {
        "id": "C",
        "text": "5/9"
      },
      {
        "id": "D",
        "text": "23/20 (1.15)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Umumiy maxraj 20: (15 + 8) / 20 = 23/20 = 1.15."
  },
  {
    "id": "matematika-956",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: 7/8 - 1/3",
    "options": [
      {
        "id": "A",
        "text": "6/5"
      },
      {
        "id": "B",
        "text": "11/24"
      },
      {
        "id": "C",
        "text": "5/24"
      },
      {
        "id": "D",
        "text": "13/24"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (21 - 8) / 24 = 13/24."
  },
  {
    "id": "matematika-957",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (2/3) · (9/10)",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "3/5 (0.6)"
      },
      {
        "id": "C",
        "text": "2/5"
      },
      {
        "id": "D",
        "text": "4/5"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: (2 · 9) / (3 · 10) = 18/30 = 3/5."
  },
  {
    "id": "matematika-958",
    "question": "DTM namunaviy matematika tahlili: Amalni bajaring: (4/5) : (8/15)",
    "options": [
      {
        "id": "A",
        "text": "4/3"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "3/2 (1.5)"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (4/5) · (15/8) = 60/40 = 3/2 = 1.5."
  },
  {
    "id": "matematika-959",
    "question": "DTM namunaviy matematika tahlili: Qisqa ko'paytirish formulasi: a² - b² nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "(a + b)²"
      },
      {
        "id": "B",
        "text": "(a - b)²"
      },
      {
        "id": "C",
        "text": "(a - b)(a + b)"
      },
      {
        "id": "D",
        "text": "a² - 2ab + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
  },
  {
    "id": "matematika-960",
    "question": "DTM namunaviy matematika tahlili: (a + b)² ifodaning yoyilmasi qaysi javobda to'g'ri ko'rsatilgan?",
    "options": [
      {
        "id": "A",
        "text": "a² + b²"
      },
      {
        "id": "B",
        "text": "a² + ab + b²"
      },
      {
        "id": "C",
        "text": "a² + 2ab + b²"
      },
      {
        "id": "D",
        "text": "a² - 2ab + b²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Yig'indining kvadrati: a² + 2ab + b²."
  },
  {
    "id": "matematika-961",
    "question": "DTM namunaviy matematika tahlili: (a - b)³ ifodaning yoyilmasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "a³ - 3ab + b³"
      },
      {
        "id": "B",
        "text": "a³ + 3a²b - 3ab² + b³"
      },
      {
        "id": "C",
        "text": "a³ - 3a²b + 3ab² - b³"
      },
      {
        "id": "D",
        "text": "a³ - b³"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Ayirmaning kubi: a³ - 3a²b + 3ab² - b³."
  },
  {
    "id": "matematika-962",
    "question": "DTM namunaviy matematika tahlili: Ifodani soddalashtiring: 2⁵ · 2³ : 2⁶",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "4 (2²)"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2^(5 + 3 - 6) = 2² = 4."
  },
  {
    "id": "matematika-963",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: √144 + √81 - √25",
    "options": [
      {
        "id": "A",
        "text": "20"
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
        "text": "18"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: 12 + 9 - 5 = 16."
  },
  {
    "id": "matematika-964",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: ³√216",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: 6³ = 216 bo'lgani sababli ³√216 = 6."
  },
  {
    "id": "matematika-965",
    "question": "DTM namunaviy matematika tahlili: Chiziqli tenglamani yeching: 5x - 15 = 2x + 6",
    "options": [
      {
        "id": "A",
        "text": "-7"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x = 21 => x = 7."
  },
  {
    "id": "matematika-966",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning ildizlarini toping: x² - 5x + 6 = 0",
    "options": [
      {
        "id": "A",
        "text": "-1 va 6"
      },
      {
        "id": "B",
        "text": "-2 va -3"
      },
      {
        "id": "C",
        "text": "2 va 3"
      },
      {
        "id": "D",
        "text": "1 va 6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: Viyet teoremasiga ko'ra: x₁ + x₂ = 5, x₁ · x₂ = 6 => 2 va 3."
  },
  {
    "id": "matematika-967",
    "question": "DTM namunaviy matematika tahlili: Kvadrat tenglamaning diskriminant formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "D = 4ac - b²"
      },
      {
        "id": "B",
        "text": "D = b - 4ac"
      },
      {
        "id": "C",
        "text": "D = b² + 4ac"
      },
      {
        "id": "D",
        "text": "D = b² - 4ac"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: Kvadrat tenglama diskriminanti: D = b² - 4ac."
  },
  {
    "id": "matematika-968",
    "question": "DTM namunaviy matematika tahlili: Modulli tenglamani yeching: |2x - 4| = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 1 va x = -5"
      },
      {
        "id": "B",
        "text": "x = 5 va x = 1"
      },
      {
        "id": "C",
        "text": "x = 5 va x = -1"
      },
      {
        "id": "D",
        "text": "x = 4 va x = -2"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: 2x - 4 = 6 => x = 5; 2x - 4 = -6 => x = -1."
  },
  {
    "id": "matematika-969",
    "question": "DTM namunaviy matematika tahlili: Ko'rsatkichli tenglamani yeching: 3^(x+1) = 81",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: 81 = 3⁴ => x + 1 = 4 => x = 3."
  },
  {
    "id": "matematika-970",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₂32",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: 2⁵ = 32 bo'lgani uchun log₂32 = 5."
  },
  {
    "id": "matematika-971",
    "question": "DTM namunaviy matematika tahlili: Logarifmni hisoblang: log₃81 + log₅125",
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
        "text": "6"
      }
    ],
    "correct": "C",
    "xp": 200,
    "explanation": "Yechilish asosi: log₃81 = 4, log₅125 = 3 => 4 + 3 = 7."
  },
  {
    "id": "matematika-972",
    "question": "DTM namunaviy matematika tahlili: Tengsizlikni yeching: 3x - 7 > 2",
    "options": [
      {
        "id": "A",
        "text": "x > 3"
      },
      {
        "id": "B",
        "text": "x > 5"
      },
      {
        "id": "C",
        "text": "x < -3"
      },
      {
        "id": "D",
        "text": "x < 3"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 3x > 9 => x > 3."
  },
  {
    "id": "matematika-973",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁₀ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "39"
      },
      {
        "id": "B",
        "text": "43"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correct": "A",
    "xp": 200,
    "explanation": "Yechilish asosi: a_n = a₁ + (n - 1)d => a₁₀ = 3 + 9 · 4 = 39."
  },
  {
    "id": "matematika-974",
    "question": "DTM namunaviy matematika tahlili: Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, dastlabki 10 ta hadi yig'indisini (S₁₀) toping.",
    "options": [
      {
        "id": "A",
        "text": "145"
      },
      {
        "id": "B",
        "text": "150"
      },
      {
        "id": "C",
        "text": "160"
      },
      {
        "id": "D",
        "text": "155"
      }
    ],
    "correct": "D",
    "xp": 250,
    "explanation": "Yechilish asosi: S₁₀ = ((2a₁ + 9d)/2) · 10 = ((4 + 27)/2) · 10 = 31 · 5 = 155."
  },
  {
    "id": "matematika-975",
    "question": "DTM namunaviy matematika tahlili: Geometrik progressiyada b₁ = 2, q = 3 bo'lsa, b₄ ni toping.",
    "options": [
      {
        "id": "A",
        "text": "162"
      },
      {
        "id": "B",
        "text": "27"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "54"
      }
    ],
    "correct": "D",
    "xp": 200,
    "explanation": "Yechilish asosi: b₄ = b₁ · q³ = 2 · 27 = 54."
  },
  {
    "id": "matematika-976",
    "question": "DTM namunaviy matematika tahlili: Cheksiz kamayuvchi geometrik progressiyada b₁ = 6, q = 1/2 bo'lsa, uning yig'indisini (S) toping.",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correct": "B",
    "xp": 250,
    "explanation": "Yechilish asosi: S = b₁ / (1 - q) = 6 / (1 - 0.5) = 12."
  },
  {
    "id": "matematika-977",
    "question": "DTM namunaviy matematika tahlili: Asosiy trigonometrik ayniyat: sin²α + cos²α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "tg²α"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: sin²α + cos²α = 1."
  },
  {
    "id": "matematika-978",
    "question": "DTM namunaviy matematika tahlili: sin 30° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "√2/2"
      },
      {
        "id": "B",
        "text": "1/2 (0.5)"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "√3/2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: sin 30° = 1/2."
  },
  {
    "id": "matematika-979",
    "question": "DTM namunaviy matematika tahlili: cos 60° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1/2 (0.5)"
      },
      {
        "id": "B",
        "text": "√3/2"
      },
      {
        "id": "C",
        "text": "√2/2"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: cos 60° = 1/2."
  },
  {
    "id": "matematika-980",
    "question": "DTM namunaviy matematika tahlili: tg 45° ning qiymati nechaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "√3"
      },
      {
        "id": "D",
        "text": "√3/3"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: tg 45° = 1."
  },
  {
    "id": "matematika-981",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak sinusi: sin 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "2 sin α"
      },
      {
        "id": "B",
        "text": "cos²α - sin²α"
      },
      {
        "id": "C",
        "text": "sin²α - cos²α"
      },
      {
        "id": "D",
        "text": "2 sin α cos α"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: sin 2α = 2 sin α cos α."
  },
  {
    "id": "matematika-982",
    "question": "DTM namunaviy matematika tahlili: Ikkilangan burchak kosinusi: cos 2α nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "1 - sin 2α"
      },
      {
        "id": "B",
        "text": "2 cos α"
      },
      {
        "id": "C",
        "text": "cos²α - sin²α"
      },
      {
        "id": "D",
        "text": "sin²α - cos²α"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: cos 2α = cos²α - sin²α."
  },
  {
    "id": "matematika-983",
    "question": "DTM namunaviy matematika tahlili: f(x) = x³ funksiyaning hosilasini toping.",
    "options": [
      {
        "id": "A",
        "text": "x²"
      },
      {
        "id": "B",
        "text": "3x"
      },
      {
        "id": "C",
        "text": "x⁴ / 4"
      },
      {
        "id": "D",
        "text": "3x²"
      }
    ],
    "correct": "D",
    "xp": 150,
    "explanation": "Yechilish asosi: (x^n)' = n · x^(n-1) => (x³)' = 3x²."
  },
  {
    "id": "matematika-984",
    "question": "DTM namunaviy matematika tahlili: f(x) = 5x⁴ - 2x + 7 funksiyaning hosilasi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "20x³ - 2"
      },
      {
        "id": "B",
        "text": "20x³"
      },
      {
        "id": "C",
        "text": "20x⁴ - 2"
      },
      {
        "id": "D",
        "text": "5x³ - 2"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: (5x⁴)' - (2x)' + 7' = 20x³ - 2."
  },
  {
    "id": "matematika-985",
    "question": "DTM namunaviy matematika tahlili: f(x) = sin x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-cos x"
      },
      {
        "id": "B",
        "text": "-sin x"
      },
      {
        "id": "C",
        "text": "cos x"
      },
      {
        "id": "D",
        "text": "tg x"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: (sin x)' = cos x."
  },
  {
    "id": "matematika-986",
    "question": "DTM namunaviy matematika tahlili: f(x) = cos x funksiyaning hosilasi nima?",
    "options": [
      {
        "id": "A",
        "text": "-sin x"
      },
      {
        "id": "B",
        "text": "-cos x"
      },
      {
        "id": "C",
        "text": "sin x"
      },
      {
        "id": "D",
        "text": "-tg x"
      }
    ],
    "correct": "A",
    "xp": 100,
    "explanation": "Yechilish asosi: (cos x)' = -sin x."
  },
  {
    "id": "matematika-987",
    "question": "DTM namunaviy matematika tahlili: f(x) = 2x funksiyaning boshlang'ich funksiyasini toping.",
    "options": [
      {
        "id": "A",
        "text": "2 + C"
      },
      {
        "id": "B",
        "text": "x² + C"
      },
      {
        "id": "C",
        "text": "x² / 2 + C"
      },
      {
        "id": "D",
        "text": "2x² + C"
      }
    ],
    "correct": "B",
    "xp": 150,
    "explanation": "Yechilish asosi: ∫ 2x dx = 2 · (x²/2) + C = x² + C."
  },
  {
    "id": "matematika-988",
    "question": "DTM namunaviy matematika tahlili: Hisoblang: Aniq integral ∫₀² 3x² dx",
    "options": [
      {
        "id": "A",
        "text": "6"
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
        "text": "16"
      }
    ],
    "correct": "C",
    "xp": 250,
    "explanation": "Yechilish asosi: [x³]₀² = 2³ - 0³ = 8."
  },
  {
    "id": "matematika-989",
    "question": "DTM namunaviy matematika tahlili: To'g'ri burchakli uchburchakda katetlari 6 va 8 bo'lsa, gipotenuzasini toping.",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "14"
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
    "xp": 150,
    "explanation": "Yechilish asosi: Pifagor teoremasi: c = √(6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
    "id": "matematika-990",
    "question": "DTM namunaviy matematika tahlili: Uchburchakning ichki burchaklari yig'indisi necha darajaga teng?",
    "options": [
      {
        "id": "A",
        "text": "360°"
      },
      {
        "id": "B",
        "text": "90°"
      },
      {
        "id": "C",
        "text": "180°"
      },
      {
        "id": "D",
        "text": "270°"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Har qanday uchburchakning ichki burchaklari yig'indisi 180°."
  },
  {
    "id": "matematika-991",
    "question": "DTM namunaviy matematika tahlili: Tomoni a bo'lgan kvadratning yuzi qanday formula bilan hisoblanadi?",
    "options": [
      {
        "id": "A",
        "text": "S = 2a²"
      },
      {
        "id": "B",
        "text": "S = a²"
      },
      {
        "id": "C",
        "text": "S = 4a"
      },
      {
        "id": "D",
        "text": "S = a² / 2"
      }
    ],
    "correct": "B",
    "xp": 100,
    "explanation": "Yechilish asosi: Kvadrat yuzi: S = a²."
  },
  {
    "id": "matematika-992",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "S = 4πR²"
      },
      {
        "id": "B",
        "text": "S = 2πR"
      },
      {
        "id": "C",
        "text": "S = πR²"
      },
      {
        "id": "D",
        "text": "S = πR"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: Doira yuzi: S = πR²."
  },
  {
    "id": "matematika-993",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan aylananing uzunligi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "L = 4πR"
      },
      {
        "id": "B",
        "text": "L = πR²"
      },
      {
        "id": "C",
        "text": "L = πR"
      },
      {
        "id": "D",
        "text": "L = 2πR"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Aylana uzunligi: L = 2πR."
  },
  {
    "id": "matematika-994",
    "question": "DTM namunaviy matematika tahlili: Qavariq to'rtburchakning ichki burchaklari yig'indisi necha daraja?",
    "options": [
      {
        "id": "A",
        "text": "180°"
      },
      {
        "id": "B",
        "text": "720°"
      },
      {
        "id": "C",
        "text": "360°"
      },
      {
        "id": "D",
        "text": "540°"
      }
    ],
    "correct": "C",
    "xp": 100,
    "explanation": "Yechilish asosi: To'rtburchak ichki burchaklari yig'indisi: (4 - 2) · 180° = 360°."
  },
  {
    "id": "matematika-995",
    "question": "DTM namunaviy matematika tahlili: Qirrasi a bo'lgan kubning hajmi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "V = 3a"
      },
      {
        "id": "B",
        "text": "V = a²"
      },
      {
        "id": "C",
        "text": "V = 6a²"
      },
      {
        "id": "D",
        "text": "V = a³"
      }
    ],
    "correct": "D",
    "xp": 100,
    "explanation": "Yechilish asosi: Kub hajmi: V = a³."
  },
  {
    "id": "matematika-996",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan silindrning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR²H"
      },
      {
        "id": "B",
        "text": "V = 2πRH"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR²H"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Silindr hajmi asos yuzi bilan balandlik ko'paytmasiga teng: V = πR²H."
  },
  {
    "id": "matematika-997",
    "question": "DTM namunaviy matematika tahlili: Asosining radiusi R, balandligi H bo'lgan konusning hajmi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = (1/3)πR²H"
      },
      {
        "id": "B",
        "text": "V = πR²H"
      },
      {
        "id": "C",
        "text": "V = 2πRH"
      },
      {
        "id": "D",
        "text": "V = (4/3)πR³"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: Konus hajmi: V = (1/3)πR²H."
  },
  {
    "id": "matematika-998",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sharning hajmi formulasi qaysi?",
    "options": [
      {
        "id": "A",
        "text": "V = πR³"
      },
      {
        "id": "B",
        "text": "V = 4πR²"
      },
      {
        "id": "C",
        "text": "V = (4/3)πR³"
      },
      {
        "id": "D",
        "text": "V = (1/3)πR³"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Shar hajmi: V = (4/3)πR³."
  },
  {
    "id": "matematika-999",
    "question": "DTM namunaviy matematika tahlili: Radiusi R bo'lgan sfera sirtining yuzi nimaga teng?",
    "options": [
      {
        "id": "A",
        "text": "S = (4/3)πR²"
      },
      {
        "id": "B",
        "text": "S = πR²"
      },
      {
        "id": "C",
        "text": "S = 4πR²"
      },
      {
        "id": "D",
        "text": "S = 2πR²"
      }
    ],
    "correct": "C",
    "xp": 150,
    "explanation": "Yechilish asosi: Sfera sirti: S = 4πR²."
  },
  {
    "id": "matematika-1000",
    "question": "DTM namunaviy matematika tahlili: 5! (5 faktorial) ning qiymatini hisoblang.",
    "options": [
      {
        "id": "A",
        "text": "120"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "720"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correct": "A",
    "xp": 150,
    "explanation": "Yechilish asosi: 5! = 1 · 2 · 3 · 4 · 5 = 120."
  }
]
};

export default matematika;
