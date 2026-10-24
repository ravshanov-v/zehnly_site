
const fizika = {
  id: 'fizika',
  title: 'Fizika',
  icon: '⚛️',
  category: 'Maktab fanlari',
  totalQuestions: 1000,
  questions: [
    {
      "id": "fizika-1",
      "question": "Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "P = m · g"
        },
        {
          "id": "C",
          "text": "A = F · s"
        },
        {
          "id": "D",
          "text": "F = m · a"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Jismga ta'sir etuvchi kuch uning massasi va tezlanishi ko'paytmasiga teng."
    },
    {
      "id": "fizika-2",
      "question": "Yorug'likning vakuumdagi tezligi taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "30 000 km/s"
        },
        {
          "id": "B",
          "text": "3 000 km/s"
        },
        {
          "id": "C",
          "text": "300 000 km/s"
        },
        {
          "id": "D",
          "text": "3 000 000 km/s"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "c ≈ 3·10^8 m/s = 300 000 km/s."
    },
    {
      "id": "fizika-3",
      "question": "Normal sharoitda suv qaysi haroratda qaynaydi?",
      "options": [
        {
          "id": "A",
          "text": "100 °C"
        },
        {
          "id": "B",
          "text": "120 °C"
        },
        {
          "id": "C",
          "text": "0 °C"
        },
        {
          "id": "D",
          "text": "212 °C"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Normal atmosfera bosimida suv 100 °C da qaynaydi."
    },
    {
      "id": "fizika-4",
      "question": "Elektr tok kuchining o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Vatt"
        },
        {
          "id": "B",
          "text": "Om"
        },
        {
          "id": "C",
          "text": "Volt"
        },
        {
          "id": "D",
          "text": "Amper"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Xalqaro birliklar sistemasida tok kuchi Amperda o'lchanadi."
    },
    {
      "id": "fizika-5",
      "question": "Tezlanishning SI sistemasidagi asosiy o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "N/kg"
        },
        {
          "id": "B",
          "text": "km/soat"
        },
        {
          "id": "C",
          "text": "m/s"
        },
        {
          "id": "D",
          "text": "m/s²"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Tezlanish birligi metr taqsim soniya kvadratidir."
    },
    {
      "id": "fizika-6",
      "question": "To'g'ri chiziqli tekis harakatda tezlik qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Nolga teng bo'ladi"
        },
        {
          "id": "B",
          "text": "Kamayadi"
        },
        {
          "id": "C",
          "text": "O'zgarmas qoladi (v = const)"
        },
        {
          "id": "D",
          "text": "Vaqtga to'g'ri mutanosib ortadi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Tekis harakatda tezlik yo'nalishi va qiymati bo'yicha o'zgarmaydi."
    },
    {
      "id": "fizika-7",
      "question": "Erkin tushish tezlanishining Yer sirtidagi o'rtacha qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "9.8 m/s²"
        },
        {
          "id": "B",
          "text": "8.9 m/s²"
        },
        {
          "id": "C",
          "text": "6.67 m/s²"
        },
        {
          "id": "D",
          "text": "10.5 m/s²"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "g ≈ 9.8 m/s² (amaliy hisoblashlarda ko'pincha 10 olinadi)."
    },
    {
      "id": "fizika-8",
      "question": "Burchak tezlik va aylanish davri o'rtasidagi bog'liqlik formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "ω = 2π / T"
        },
        {
          "id": "B",
          "text": "ω = T / 2π"
        },
        {
          "id": "C",
          "text": "ω = 2π · T"
        },
        {
          "id": "D",
          "text": "ω = v · R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Burchak tezlik ω = 2π/T = 2πν ga teng."
    },
    {
      "id": "fizika-9",
      "question": "Inersiya qonuni Nyutonning nechanchi qonuni hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Uchinchi qonuni"
        },
        {
          "id": "B",
          "text": "Birinchi qonuni"
        },
        {
          "id": "C",
          "text": "Butunjahon tortishish qonuni"
        },
        {
          "id": "D",
          "text": "Ikkinchi qonuni"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nyutonning 1-qonuni inersiya qonunidir."
    },
    {
      "id": "fizika-10",
      "question": "Nyutonning uchinchi qonuniga ko'ra ikki jismning o'zaro ta'sir kuchlari qanday bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Bir xil yo'nalgan va teng"
        },
        {
          "id": "B",
          "text": "Moduli bo'yicha teng, yo'nalishi qarama-qarshi"
        },
        {
          "id": "C",
          "text": "Har xil modulli"
        },
        {
          "id": "D",
          "text": "Biri ikkinchisidan doim katta"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "F1 = -F2 (ta'sir aks ta'sirga teng va qarama-qarshi)."
    },
    {
      "id": "fizika-11",
      "question": "Guk qonuni bo'yicha elastiklik kuchi qanday ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = μ · N"
        },
        {
          "id": "B",
          "text": "F = -k · x"
        },
        {
          "id": "C",
          "text": "F = m · a"
        },
        {
          "id": "D",
          "text": "F = G · m1m2 / R²"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Elastiklik kuchi jism deformatsiyasiga to'g'ri mutanosib."
    },
    {
      "id": "fizika-12",
      "question": "Sirpanish ishqalanish kuchi qaysi formula bilan topiladi?",
      "options": [
        {
          "id": "A",
          "text": "F = k · x"
        },
        {
          "id": "B",
          "text": "F = P · S"
        },
        {
          "id": "C",
          "text": "F = m · g"
        },
        {
          "id": "D",
          "text": "F = μ · N"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Ishqalanish kuchi reaksiya kuchiga mutanosib."
    },
    {
      "id": "fizika-13",
      "question": "Butunjahon tortishish doimiysi G ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "6.67 · 10⁻¹¹ N·m²/kg²"
        },
        {
          "id": "B",
          "text": "1.38 · 10⁻²³ J/K"
        },
        {
          "id": "C",
          "text": "8.31 J/(mol·K)"
        },
        {
          "id": "D",
          "text": "9.8 m/s²"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Gravitatsion doimiy G = 6.67·10^-11 N·m²/kg²."
    },
    {
      "id": "fizika-14",
      "question": "Jismning Yer sirtidan uzoqlashishi bilan unga ta'sir etuvchi tortishish kuchi qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Ortadi"
        },
        {
          "id": "B",
          "text": "Chiziqli kamayadi"
        },
        {
          "id": "C",
          "text": "O'zgarmaydi"
        },
        {
          "id": "D",
          "text": "Masofa kvadratiga teskari kamayadi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "F ~ 1/R² qonuniyati bo'yicha masofa oshganda kamayadi."
    },
    {
      "id": "fizika-15",
      "question": "Jism impulsi (harakat miqdori) qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · a"
        },
        {
          "id": "B",
          "text": "p = m · g · h"
        },
        {
          "id": "C",
          "text": "p = m · v"
        },
        {
          "id": "D",
          "text": "p = F · t"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Jism impulsi massa va tezlik ko'paytmasiga teng."
    },
    {
      "id": "fizika-16",
      "question": "Kinetik energiya formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "E_k = (m · v²) / 2"
        },
        {
          "id": "C",
          "text": "A = F · s"
        },
        {
          "id": "D",
          "text": "E_p = m · g · h"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Kinetik energiya tezlikning kvadratiga to'g'ri proporsional."
    },
    {
      "id": "fizika-17",
      "question": "Mexanik ish qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Paskal (Pa)"
        },
        {
          "id": "B",
          "text": "Nyuton (N)"
        },
        {
          "id": "C",
          "text": "Joul (J)"
        },
        {
          "id": "D",
          "text": "Vatt (W)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 Joul = 1 Nyuton · 1 metr."
    },
    {
      "id": "fizika-18",
      "question": "Quvvatning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton (N)"
        },
        {
          "id": "B",
          "text": "Amper (A)"
        },
        {
          "id": "C",
          "text": "Vatt (W)"
        },
        {
          "id": "D",
          "text": "Joul (J)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 Vatt = 1 Joul / 1 soniya."
    },
    {
      "id": "fizika-19",
      "question": "Foydali ish koeffitsienti (FIK) qanday kattalik?",
      "options": [
        {
          "id": "A",
          "text": "Vaqtga teskari qiymat"
        },
        {
          "id": "B",
          "text": "Foydali ishning to'liq sarflangan ishga nisbati"
        },
        {
          "id": "C",
          "text": "Faqat kuchlar nisbati"
        },
        {
          "id": "D",
          "text": "Bajarilgan ish va quvvat ko'paytmasi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "FIK = (A_foydali / A_to'liq) · 100%."
    },
    {
      "id": "fizika-20",
      "question": "Bosimning SI sistemasidagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton"
        },
        {
          "id": "B",
          "text": "Paskal (Pa)"
        },
        {
          "id": "C",
          "text": "Bar"
        },
        {
          "id": "D",
          "text": "Torr"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "1 Pa = 1 N / m²."
    },
    {
      "id": "fizika-21",
      "question": "Suyuqlik ustunining gidrostatik bosimi qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · g"
        },
        {
          "id": "B",
          "text": "p = F / S"
        },
        {
          "id": "C",
          "text": "p = ρ · g · h"
        },
        {
          "id": "D",
          "text": "p = V · ρ"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Gidrostatik bosim zichlik, erkin tushish tezlanishi va balandlikka bog'liq."
    },
    {
      "id": "fizika-22",
      "question": "Arximed kuchi (ko'tarish kuchi) qaysi formula orqali hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "F_A = ρ_s · g · V_ch"
        },
        {
          "id": "B",
          "text": "F = m · a"
        },
        {
          "id": "C",
          "text": "F = k · x"
        },
        {
          "id": "D",
          "text": "F = P · S"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Arximed kuchi siqib chiqarilgan suyuqlik og'irligiga teng."
    },
    {
      "id": "fizika-23",
      "question": "Paskal qonuniga ko'ra suyuqlik va gazlarga berilgan tashqi bosim qanday uzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat pastga qarab uzatiladi"
        },
        {
          "id": "B",
          "text": "Barcha yo'nalishlarda o'zgarishsiz teng uzatiladi"
        },
        {
          "id": "C",
          "text": "Masofaga qarab kamayadi"
        },
        {
          "id": "D",
          "text": "Faqat idish devorlariga uzatiladi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Paskal qonuni: bosim barcha yo'nalishlarga teng tarqaladi."
    },
    {
      "id": "fizika-24",
      "question": "Normal atmosfera bosimi simob ustunining necha millimetr balandligiga teng?",
      "options": [
        {
          "id": "A",
          "text": "100 mm Hg"
        },
        {
          "id": "B",
          "text": "780 mm Hg"
        },
        {
          "id": "C",
          "text": "760 mm Hg"
        },
        {
          "id": "D",
          "text": "720 mm Hg"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "1 atm = 760 mm simob ustuni ≈ 101325 Pa."
    },
    {
      "id": "fizika-25",
      "question": "Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "p = ρ · g · h"
        },
        {
          "id": "B",
          "text": "p = (1/3) · n · m_0 · v²"
        },
        {
          "id": "C",
          "text": "E = k · T"
        },
        {
          "id": "D",
          "text": "p · V = const"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Bosim zarrachalar konsentratsiyasi va o'rtacha kinetik energiyasiga bog'liq."
    },
    {
      "id": "fizika-26",
      "question": "Mendeleyev-Klapeyron tenglamasi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "p · V = (m / M) · R · T"
        },
        {
          "id": "B",
          "text": "p / T = const"
        },
        {
          "id": "C",
          "text": "V / T = const"
        },
        {
          "id": "D",
          "text": "p · V = const"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ideal gaz holat tenglamasi: pV = νRT."
    },
    {
      "id": "fizika-27",
      "question": "Izotermik jarayonda gazning qaysi parametri o'zgarmas saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const)"
        },
        {
          "id": "B",
          "text": "Bosim (p = const)"
        },
        {
          "id": "C",
          "text": "Massa va hajm"
        },
        {
          "id": "D",
          "text": "Harorat (T = const, Boyl-Mariott qonuni)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "T = const bo'lganda pV = const."
    },
    {
      "id": "fizika-28",
      "question": "Izobarik jarayonda gazning qaysi parametri doimiy bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Bosim (p = const, Gey-Lyussak qonuni)"
        },
        {
          "id": "B",
          "text": "Zichlik"
        },
        {
          "id": "C",
          "text": "Harorat (T = const)"
        },
        {
          "id": "D",
          "text": "Hajm (V = const)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "p = const bo'lganda V/T = const."
    },
    {
      "id": "fizika-29",
      "question": "Izoxorik jarayonda gazning qaysi kattaligi o'zgarmaydi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const, Sharl qonuni)"
        },
        {
          "id": "B",
          "text": "Harorat (T = const)"
        },
        {
          "id": "C",
          "text": "Bosim (p = const)"
        },
        {
          "id": "D",
          "text": "Ichki energiya"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "V = const bo'lganda p/T = const."
    },
    {
      "id": "fizika-30",
      "question": "Issiqlik almashinuvsiz kechuvchi termodinamik jarayon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Adiabatik jarayon (Q = 0)"
        },
        {
          "id": "B",
          "text": "Izobarik jarayon"
        },
        {
          "id": "C",
          "text": "Izotermik jarayon"
        },
        {
          "id": "D",
          "text": "Izoxorik jarayon"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Tashqi muhit bilan issiqlik almashinmaydigan jarayon adiabatik deyiladi."
    },
    {
      "id": "fizika-31",
      "question": "Termodinamikaning birinchi qonuni qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "A = p · ΔV"
        },
        {
          "id": "B",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "C",
          "text": "ΔU = Q + A"
        },
        {
          "id": "D",
          "text": "Q = ΔU + A"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Tizimga berilgan issiqlik uning ichki energiyasini oshirishga va ish bajarishga sarflanadi."
    },
    {
      "id": "fizika-32",
      "question": "Mutloq nol harorat Selsiy shkalasi bo'yicha necha darajaga to'g'ri keladi?",
      "options": [
        {
          "id": "A",
          "text": "-373.15 °C"
        },
        {
          "id": "B",
          "text": "-273.15 °C"
        },
        {
          "id": "C",
          "text": "0 °C"
        },
        {
          "id": "D",
          "text": "-100 °C"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "0 Kelvin = -273.15 °C."
    },
    {
      "id": "fizika-33",
      "question": "Karno sikli bo'yicha ishlovchi ideal issiqlik mashinasining FIK formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "η = Q_2 / Q_1"
        },
        {
          "id": "B",
          "text": "η = T_2 / T_1"
        },
        {
          "id": "C",
          "text": "η = (T_1 + T_2) / T_1"
        },
        {
          "id": "D",
          "text": "η = (T_1 - T_2) / T_1"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "T1 - isitgich, T2 - sovutgich harorati."
    },
    {
      "id": "fizika-34",
      "question": "Kulon qonuniga ko'ra nuqtaviy zaryadlarning o'zaro ta'sir kuchi qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = k · |q1 · q2| / r²"
        },
        {
          "id": "B",
          "text": "F = I · B · L"
        },
        {
          "id": "C",
          "text": "F = q · E"
        },
        {
          "id": "D",
          "text": "F = q · v · B"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Kulon kuchi zaryadlar ko'paytmasiga to'g'ri va masofa kvadratiga teskari mutanosib."
    },
    {
      "id": "fizika-35",
      "question": "Elektr maydon kuchlanganligi E ning ta'rif formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = F / q"
        },
        {
          "id": "B",
          "text": "E = k · q / r"
        },
        {
          "id": "C",
          "text": "φ = W / q"
        },
        {
          "id": "D",
          "text": "E = U / d"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Kuchlanganlik birlik musbat zaryadga ta'sir qiluvchi kuchdir."
    },
    {
      "id": "fizika-36",
      "question": "Kondensator sig'imining SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Klon (C)"
        },
        {
          "id": "B",
          "text": "Veber (Wb)"
        },
        {
          "id": "C",
          "text": "Farad (F)"
        },
        {
          "id": "D",
          "text": "Genri (H)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Elektr sig'im Faradlarda o'lchanadi."
    },
    {
      "id": "fizika-37",
      "question": "Zanjirning bir qismi uchun Om qonuni qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = U / R"
        },
        {
          "id": "B",
          "text": "U = I · R²"
        },
        {
          "id": "C",
          "text": "I = E / (R + r)"
        },
        {
          "id": "D",
          "text": "P = I · U"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosib."
    },
    {
      "id": "fizika-38",
      "question": "To'liq zanjir uchun Om qonuni formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = U / R"
        },
        {
          "id": "B",
          "text": "P = I² · R"
        },
        {
          "id": "C",
          "text": "U = ε - I · r"
        },
        {
          "id": "D",
          "text": "I = ε / (R + r)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "ε - EYK, R - tashqi qarshilik, r - ichki qarshilik."
    },
    {
      "id": "fizika-39",
      "question": "O'tkazgichning qarshiligi uning o'lchamlariga qanday bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "R = ρ · l / S"
        },
        {
          "id": "B",
          "text": "R = P / I²"
        },
        {
          "id": "C",
          "text": "R = U / I"
        },
        {
          "id": "D",
          "text": "R = S / (ρ · l)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Qarshilik uzunlikka to'g'ri, ko'ndalang kesim yuziga teskari proportsional."
    },
    {
      "id": "fizika-40",
      "question": "Ketma-ket ulangan o'tkazgichlarda qaysi fizik kattalik bir xil bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Kuchlanish (U)"
        },
        {
          "id": "B",
          "text": "Quvvat (P)"
        },
        {
          "id": "C",
          "text": "Tok kuchi (I = const)"
        },
        {
          "id": "D",
          "text": "Qarshilik (R)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Ketma-ket ulanishda barcha qismlardan bir xil tok o'tadi."
    },
    {
      "id": "fizika-41",
      "question": "Parallel ulangan o'tkazgichlarda qaysi parametr barchasida teng bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Kuchlanish (U = const)"
        },
        {
          "id": "B",
          "text": "Tok kuchi (I)"
        },
        {
          "id": "C",
          "text": "Qarshilik (R)"
        },
        {
          "id": "D",
          "text": "Zaryad (q)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Parallel tarmoqlarda kuchlanishlar bir xil bo'ladi."
    },
    {
      "id": "fizika-42",
      "question": "Joul-Lens qonuni bo'yicha o'tkazgichda ajraladigan issiqlik miqdori qanday hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Q = U · I"
        },
        {
          "id": "B",
          "text": "Q = I · R · t"
        },
        {
          "id": "C",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "D",
          "text": "Q = I² · R · t"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ajraladigan issiqlik tok kvadratiga to'g'ri proportsional."
    },
    {
      "id": "fizika-43",
      "question": "Magnit maydon induksiyasi B ning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Veber (Wb)"
        },
        {
          "id": "B",
          "text": "Ersted"
        },
        {
          "id": "C",
          "text": "Genri (H)"
        },
        {
          "id": "D",
          "text": "Tesla (Tl)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Magnit maydon induksiyasi Teslada o'lchanadi."
    },
    {
      "id": "fizika-44",
      "question": "Magnit oqimi Φ ning SI dagi o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Genri (H)"
        },
        {
          "id": "B",
          "text": "Veber (Wb)"
        },
        {
          "id": "C",
          "text": "Volt"
        },
        {
          "id": "D",
          "text": "Tesla (Tl)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Magnit oqimi Veberda o'lchanadi (1 Wb = 1 Tl · m²)."
    },
    {
      "id": "fizika-45",
      "question": "Magnit maydonida harakatlanayotgan zaryadli zarrachaga ta'sir qiluvchi kuch nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Lorens kuchi (F = q·v·B·sinα)"
        },
        {
          "id": "B",
          "text": "Amper kuchi"
        },
        {
          "id": "C",
          "text": "Gravitatsiya kuchi"
        },
        {
          "id": "D",
          "text": "Kulon kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Lorens kuchi harakatdagi zaryadga ta'sir qiladi."
    },
    {
      "id": "fizika-46",
      "question": "Tokli o'tkazgichga magnit maydoni tomonidan ta'sir etuvchi kuch qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "C",
          "text": "Lorens kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi (F = I·B·L·sinα)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Amper kuchi tokli o'tkazgichga ta'sir qiladi."
    },
    {
      "id": "fizika-47",
      "question": "Elektromagnit induksiya hodisasini 1831-yilda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Genrix Gers"
        },
        {
          "id": "B",
          "text": "Maykl Faradey"
        },
        {
          "id": "C",
          "text": "Jeyms Maksvell"
        },
        {
          "id": "D",
          "text": "Gans Ersted"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Faradey o'zgaruvchan magnit maydoni tok hosil qilishini isbotlagan."
    },
    {
      "id": "fizika-48",
      "question": "Konturda hosil bo'lgan induksion tok yo'nalishini aniqlovchi qoida qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Chap qo'l qoidasi"
        },
        {
          "id": "B",
          "text": "O'ng qo'l qoidasi"
        },
        {
          "id": "C",
          "text": "Vint qoidasi"
        },
        {
          "id": "D",
          "text": "Lens qoidasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Lens qoidasi: induksion tok o'zini vujudga keltirgan sababga qarshilik ko'rsatadi."
    },
    {
      "id": "fizika-49",
      "question": "G'altakning induktivlik birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Farad (F)"
        },
        {
          "id": "B",
          "text": "Tesla (Tl)"
        },
        {
          "id": "C",
          "text": "Veber (Wb)"
        },
        {
          "id": "D",
          "text": "Genri (H)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "O'zinduksiya kattaligi Genrida o'lchanadi."
    },
    {
      "id": "fizika-50",
      "question": "Matematik mayatnikning tebranish davri qaysi formula bilan ifodalanadi (Gyuygens formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "B",
          "text": "T = 1 / ν"
        },
        {
          "id": "C",
          "text": "T = 2π · √(g / l)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(l / g)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Mayatnik davri uzunlikka va erkin tushish tezlanishiga bog'liq."
    },
    {
      "id": "fizika-51",
      "question": "Prujinali mayatnikning tebranish davri formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "B",
          "text": "T = m · v / k"
        },
        {
          "id": "C",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(k / m)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Davr massa va bikrlikka bog'liq."
    },
    {
      "id": "fizika-52",
      "question": "Elektromagnit tebranish konturining tebranish davri formulasi qanday ataladi (Tomson formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "ν = 1 / (2πLC)"
        },
        {
          "id": "B",
          "text": "T = 2π · L · C"
        },
        {
          "id": "C",
          "text": "T = 2π · √(L / C)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(L · C)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Tomson formulasi: T = 2π√(LC)."
    },
    {
      "id": "fizika-53",
      "question": "To'lqin uzunligi λ, tarqalish tezligi v va chastota ν orasidagi bog'liqlik qaysi?",
      "options": [
        {
          "id": "A",
          "text": "v = λ / T²"
        },
        {
          "id": "B",
          "text": "λ = v · ν"
        },
        {
          "id": "C",
          "text": "λ = ν / v"
        },
        {
          "id": "D",
          "text": "λ = v / ν"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "To'lqin uzunligi tezlikning tebranish chastotasiga nisbatiga teng."
    },
    {
      "id": "fizika-54",
      "question": "Yorug'likning qaytish qonuniga ko'ra tushish burchagi α va qaytish burchagi β qanday munosabatda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "α < β"
        },
        {
          "id": "B",
          "text": "α = β (tushish burchagi qaytish burchagiga teng)"
        },
        {
          "id": "C",
          "text": "α > β"
        },
        {
          "id": "D",
          "text": "α + β = 90°"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Yorug'likning qaytish burchagi tushish burchagiga teng."
    },
    {
      "id": "fizika-55",
      "question": "Yorug'likning sinish qonuni (Snellius qonuni) qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "sinα · sinβ = n"
        },
        {
          "id": "B",
          "text": "sinα / sinβ = n_2 / n_1"
        },
        {
          "id": "C",
          "text": "tgα = n"
        },
        {
          "id": "D",
          "text": "cosα / cosβ = n"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Sinuslarning nisbati nisbiy sindirish ko'rsatkichiga teng."
    },
    {
      "id": "fizika-56",
      "question": "Yupqa qavariq linzaning fokus masofasi F, jism masofasi d va tasvir masofasi f orasidagi formula qaysi?",
      "options": [
        {
          "id": "A",
          "text": "F = d + f"
        },
        {
          "id": "B",
          "text": "D = d / f"
        },
        {
          "id": "C",
          "text": "1/F = 1/d + 1/f"
        },
        {
          "id": "D",
          "text": "1/F = 1/d - 1/f"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Yupqa linza formulasi: 1/F = 1/d + 1/f."
    },
    {
      "id": "fizika-57",
      "question": "Linzaning optik kuchi D qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Dioptriya (dptr)"
        },
        {
          "id": "B",
          "text": "Radian"
        },
        {
          "id": "C",
          "text": "Metr (m)"
        },
        {
          "id": "D",
          "text": "Gradus"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "1 dptr = 1 / 1 m."
    },
    {
      "id": "fizika-58",
      "question": "Oq yorug'likning prizmadan o'tganda spektrga (ranglarga) ajralish hodisasi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Polyarizatsiya"
        },
        {
          "id": "B",
          "text": "Interferensiya"
        },
        {
          "id": "C",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nyuton ochgan dispersiya hodisasi."
    },
    {
      "id": "fizika-59",
      "question": "Yorug'lik to'lqinlarining to'siqlarni aylanib o'tish hodisasi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Refraksiya"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "To'lqinlarning to'siq ortiga o'tishi diffraksiyadir."
    },
    {
      "id": "fizika-60",
      "question": "Kogerent to'lqinlarning fazoda qo'shilib, kuchayishi yoki susayishi hodisasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Yutilish"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Yorug'lik interferensiyasi to'lqin xususiyatini isbotlaydi."
    },
    {
      "id": "fizika-61",
      "question": "Foton energiyasi Plank formulasi bo'yicha qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = p · c²"
        },
        {
          "id": "B",
          "text": "E = h · ν"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "E = h / λ²"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "h - Plank doimiysi, ν - chastota."
    },
    {
      "id": "fizika-62",
      "question": "Plank doimiysi h ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "3 · 10⁸ m/s"
        },
        {
          "id": "B",
          "text": "9.11 · 10⁻³¹ kg"
        },
        {
          "id": "C",
          "text": "6.63 · 10⁻³⁴ J·s"
        },
        {
          "id": "D",
          "text": "1.6 · 10⁻¹⁹ C"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Plank doimiysi h ≈ 6.63·10^-34 J·s."
    },
    {
      "id": "fizika-63",
      "question": "Fotoeffekt uchun Eynshteyn tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h · ν = A_chiqish + (m · v²) / 2"
        },
        {
          "id": "B",
          "text": "A = e · U"
        },
        {
          "id": "C",
          "text": "h · ν = A_chiqish"
        },
        {
          "id": "D",
          "text": "E = m · c²"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Yutilgan foton energiyasi elektronni chiqarish va unga kinetik energiya berishga sarflanadi."
    },
    {
      "id": "fizika-64",
      "question": "Atomning sayyorasimon (planetar) modelini kim taklif etgan?",
      "options": [
        {
          "id": "A",
          "text": "J. Tomson"
        },
        {
          "id": "B",
          "text": "Ernest Rezerford (1911-yilda)"
        },
        {
          "id": "C",
          "text": "Nils Bor"
        },
        {
          "id": "D",
          "text": "D. Mendeleyev"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Rezerford alfa-zarrachalar sochilishi tajribasidan so'ng yadro modelini yaratdi."
    },
    {
      "id": "fizika-65",
      "question": "Atom yadrosi qanday zarrachalardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Protonlar va elektronlar"
        },
        {
          "id": "B",
          "text": "Protonlar va neytronlar (nuklonlar)"
        },
        {
          "id": "C",
          "text": "Faqat neytronlar"
        },
        {
          "id": "D",
          "text": "Elektronlar va pozitronlar"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Yadro musbat proton va neytral neytronlardan iborat."
    },
    {
      "id": "fizika-66",
      "question": "Yadrodagi neytronlar soni N qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = A + Z"
        },
        {
          "id": "B",
          "text": "N = A - Z"
        },
        {
          "id": "C",
          "text": "N = A / Z"
        },
        {
          "id": "D",
          "text": "N = Z - A"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Massaviy son A dan tartib raqam Z ayiriladi."
    },
    {
      "id": "fizika-67",
      "question": "Yarim yemirilish davri T nima?",
      "options": [
        {
          "id": "A",
          "text": "To'liq yemirilish vaqti"
        },
        {
          "id": "B",
          "text": "Zarrachalar tezligi 2 barobar kamayishi"
        },
        {
          "id": "C",
          "text": "Yadro massasining 2 barobar ortish vaqti"
        },
        {
          "id": "D",
          "text": "Dastlabki radioaktiv yadrolar sonining yarmi yemirilishi uchun ketgan vaqt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "N(t) = N_0 · 2^(-t/T)."
    },
    {
      "id": "fizika-68",
      "question": "Eynshteynning massa va energiya bog'liqligi formulasini toping:",
      "options": [
        {
          "id": "A",
          "text": "E = h · ν"
        },
        {
          "id": "B",
          "text": "E = m · c²"
        },
        {
          "id": "C",
          "text": "E = p² / 2m"
        },
        {
          "id": "D",
          "text": "E = k · T"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Tinchlikdagi massa va energiyaning fundamental bog'liqligi."
    },
    {
      "id": "fizika-69",
      "question": "Fizikada 'Tezlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Tezlik - Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)."
    },
    {
      "id": "fizika-70",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)'?",
      "options": [
        {
          "id": "A",
          "text": "Impuls"
        },
        {
          "id": "B",
          "text": "Kuch"
        },
        {
          "id": "C",
          "text": "Tezlik"
        },
        {
          "id": "D",
          "text": "Tezlanish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Tezlikga tegishli."
    },
    {
      "id": "fizika-71",
      "question": "Fizikada 'Tezlanish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Tezlanish - Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)."
    },
    {
      "id": "fizika-72",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)'?",
      "options": [
        {
          "id": "A",
          "text": "Burchak tezlik"
        },
        {
          "id": "B",
          "text": "Tezlik"
        },
        {
          "id": "C",
          "text": "Kuch"
        },
        {
          "id": "D",
          "text": "Tezlanish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Tezlanishga tegishli."
    },
    {
      "id": "fizika-73",
      "question": "Fizikada 'Kuch' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Kuch - Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)."
    },
    {
      "id": "fizika-74",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch"
        },
        {
          "id": "B",
          "text": "Bosim"
        },
        {
          "id": "C",
          "text": "Massa"
        },
        {
          "id": "D",
          "text": "Impuls"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Kuchga tegishli."
    },
    {
      "id": "fizika-75",
      "question": "Fizikada 'Og'irlik kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Og'irlik kuchi - Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)."
    },
    {
      "id": "fizika-76",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik (vazn)"
        },
        {
          "id": "B",
          "text": "Ishqalanish"
        },
        {
          "id": "C",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "D",
          "text": "Og'irlik kuchi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Og'irlik kuchiga tegishli."
    },
    {
      "id": "fizika-77",
      "question": "Fizikada 'Jismning vazni (P)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Jismning vazni (P) - Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi."
    },
    {
      "id": "fizika-78",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi'?",
      "options": [
        {
          "id": "A",
          "text": "Jismning vazni (P)"
        },
        {
          "id": "B",
          "text": "Massa"
        },
        {
          "id": "C",
          "text": "Inersiya"
        },
        {
          "id": "D",
          "text": "Og'irlik kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Jismning vazni (P)ga tegishli."
    },
    {
      "id": "fizika-79",
      "question": "Fizikada 'Impuls (Harakat miqdori)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Impuls (Harakat miqdori) - Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)."
    },
    {
      "id": "fizika-80",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)'?",
      "options": [
        {
          "id": "A",
          "text": "Impuls (Harakat miqdori)"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Quvvat"
        },
        {
          "id": "D",
          "text": "Kuch impulsi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Impuls (Harakat miqdori)ga tegishli."
    },
    {
      "id": "fizika-81",
      "question": "Fizikada 'Kuch impulsi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kuch impulsi - Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)."
    },
    {
      "id": "fizika-82",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)'?",
      "options": [
        {
          "id": "A",
          "text": "Mexanik ish"
        },
        {
          "id": "B",
          "text": "Jism impulsi"
        },
        {
          "id": "C",
          "text": "Moment"
        },
        {
          "id": "D",
          "text": "Kuch impulsi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Kuch impulsiga tegishli."
    },
    {
      "id": "fizika-83",
      "question": "Fizikada 'Kinetik energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Kinetik energiya - Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)."
    },
    {
      "id": "fizika-84",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial energiya"
        },
        {
          "id": "B",
          "text": "To'liq energiya"
        },
        {
          "id": "C",
          "text": "Ichki energiya"
        },
        {
          "id": "D",
          "text": "Kinetik energiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Kinetik energiyaga tegishli."
    },
    {
      "id": "fizika-85",
      "question": "Fizikada 'Potensial energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Potensial energiya - O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)."
    },
    {
      "id": "fizika-86",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial energiya"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Ish"
        },
        {
          "id": "D",
          "text": "Issiqlik miqdori"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Potensial energiyaga tegishli."
    },
    {
      "id": "fizika-87",
      "question": "Fizikada 'Kuch momenti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Kuch momenti - Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)."
    },
    {
      "id": "fizika-88",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Bosim"
        },
        {
          "id": "B",
          "text": "Kuch impulsi"
        },
        {
          "id": "C",
          "text": "Kuch momenti"
        },
        {
          "id": "D",
          "text": "Bajarilgan ish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Kuch momentiga tegishli."
    },
    {
      "id": "fizika-89",
      "question": "Fizikada 'Zichlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Zichlik - Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)."
    },
    {
      "id": "fizika-90",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa"
        },
        {
          "id": "B",
          "text": "Zichlik"
        },
        {
          "id": "C",
          "text": "Bosim"
        },
        {
          "id": "D",
          "text": "Hajm"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif Zichlikga tegishli."
    },
    {
      "id": "fizika-91",
      "question": "Fizikada 'Gidrostatik bosim' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Gidrostatik bosim - Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)."
    },
    {
      "id": "fizika-92",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Atmosfera bosimi"
        },
        {
          "id": "B",
          "text": "Arximed kuchi"
        },
        {
          "id": "C",
          "text": "Gidrostatik bosim"
        },
        {
          "id": "D",
          "text": "Dinamik bosim"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Gidrostatik bosimga tegishli."
    },
    {
      "id": "fizika-93",
      "question": "Fizikada 'Arximed kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Arximed kuchi - Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)."
    },
    {
      "id": "fizika-94",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)'?",
      "options": [
        {
          "id": "A",
          "text": "Qovushqoqlik kuchi"
        },
        {
          "id": "B",
          "text": "Sirt taranglik"
        },
        {
          "id": "C",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "D",
          "text": "Arximed kuchi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Arximed kuchiga tegishli."
    },
    {
      "id": "fizika-95",
      "question": "Fizikada 'Sirt taranglik koeffitsienti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Sirt taranglik koeffitsienti - Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)."
    },
    {
      "id": "fizika-96",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)'?",
      "options": [
        {
          "id": "A",
          "text": "Kapillyarlik"
        },
        {
          "id": "B",
          "text": "Zichlik"
        },
        {
          "id": "C",
          "text": "Sirt taranglik koeffitsienti"
        },
        {
          "id": "D",
          "text": "Qovushqoqlik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Sirt taranglik koeffitsientiga tegishli."
    },
    {
      "id": "fizika-97",
      "question": "Fizikada 'Modda miqdori' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Modda miqdori - Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)."
    },
    {
      "id": "fizika-98",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)'?",
      "options": [
        {
          "id": "A",
          "text": "Molyar massa"
        },
        {
          "id": "B",
          "text": "Modda miqdori"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Konsentratsiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif Modda miqdoriga tegishli."
    },
    {
      "id": "fizika-99",
      "question": "Fizikada 'Avogadro doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Avogadro doimiysi - 1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)."
    },
    {
      "id": "fizika-100",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)'?",
      "options": [
        {
          "id": "A",
          "text": "Avogadro doimiysi"
        },
        {
          "id": "B",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "C",
          "text": "Plank doimiysi"
        },
        {
          "id": "D",
          "text": "Bolsman doimiysi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Avogadro doimiysiga tegishli."
    },
    {
      "id": "fizika-101",
      "question": "Fizikada 'Bolsman doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Bolsman doimiysi - Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)."
    },
    {
      "id": "fizika-102",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)'?",
      "options": [
        {
          "id": "A",
          "text": "Faradey doimiysi"
        },
        {
          "id": "B",
          "text": "Avogadro doimiysi"
        },
        {
          "id": "C",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "D",
          "text": "R-doimiy"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Bolsman doimiysiga tegishli."
    },
    {
      "id": "fizika-103",
      "question": "Fizikada 'Universal gaz doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Universal gaz doimiysi - 1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))."
    },
    {
      "id": "fizika-104",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))'?",
      "options": [
        {
          "id": "A",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "B",
          "text": "Kulon doimiysi"
        },
        {
          "id": "C",
          "text": "Plank doimiysi"
        },
        {
          "id": "D",
          "text": "Bolsman doimiysi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Universal gaz doimiysiga tegishli."
    },
    {
      "id": "fizika-105",
      "question": "Fizikada 'Solishtirma issiqlik sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Solishtirma issiqlik sig'imi - 1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))."
    },
    {
      "id": "fizika-106",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma erish issiqligi"
        },
        {
          "id": "B",
          "text": "Solishtirma yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "D",
          "text": "Solishtirma issiqlik sig'imi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Solishtirma issiqlik sig'imiga tegishli."
    },
    {
      "id": "fizika-107",
      "question": "Fizikada 'Solishtirma erish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Solishtirma erish issiqligi - Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)."
    },
    {
      "id": "fizika-108",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Issiqlik sig'imi"
        },
        {
          "id": "B",
          "text": "Yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "D",
          "text": "Solishtirma erish issiqligi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Solishtirma erish issiqligiga tegishli."
    },
    {
      "id": "fizika-109",
      "question": "Fizikada 'Solishtirma bug'lanish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Solishtirma bug'lanish issiqligi - Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)."
    },
    {
      "id": "fizika-110",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Yonish issiqligi"
        },
        {
          "id": "B",
          "text": "Solishtirma bug'lanish issiqligi"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Erish issiqligi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif Solishtirma bug'lanish issiqligiga tegishli."
    },
    {
      "id": "fizika-111",
      "question": "Fizikada 'Ichki energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ichki energiya - Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi."
    },
    {
      "id": "fizika-112",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi'?",
      "options": [
        {
          "id": "A",
          "text": "Mexanik energiya"
        },
        {
          "id": "B",
          "text": "Ichki energiya"
        },
        {
          "id": "C",
          "text": "Kimyoviy energiya"
        },
        {
          "id": "D",
          "text": "Entalpiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Ushbu ta'rif Ichki energiyaga tegishli."
    },
    {
      "id": "fizika-113",
      "question": "Fizikada 'Elektr zaryadi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Elektr zaryadi - Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)."
    },
    {
      "id": "fizika-114",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuchlanish"
        },
        {
          "id": "B",
          "text": "Tok kuchi"
        },
        {
          "id": "C",
          "text": "Sig'im"
        },
        {
          "id": "D",
          "text": "Elektr zaryadi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Elektr zaryadiga tegishli."
    },
    {
      "id": "fizika-115",
      "question": "Fizikada 'Elektr sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Elektr sig'imi - O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)."
    },
    {
      "id": "fizika-116",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr sig'imi"
        },
        {
          "id": "B",
          "text": "O'tkazuvchanlik"
        },
        {
          "id": "C",
          "text": "Qarshilik"
        },
        {
          "id": "D",
          "text": "Induktivlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Elektr sig'imiga tegishli."
    },
    {
      "id": "fizika-117",
      "question": "Fizikada 'Elektr kuchlanish (potensiallar ayirmasi)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Elektr kuchlanish (potensiallar ayirmasi) - Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)."
    },
    {
      "id": "fizika-118",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr kuchlanish (potensiallar ayirmasi)"
        },
        {
          "id": "B",
          "text": "Kuchlanganlik"
        },
        {
          "id": "C",
          "text": "Tok kuchi"
        },
        {
          "id": "D",
          "text": "EYK"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Elektr kuchlanish (potensiallar ayirmasi)ga tegishli."
    },
    {
      "id": "fizika-119",
      "question": "Fizikada 'Elektr yurituvchi kuch (EYK)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Elektr yurituvchi kuch (EYK) - Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)."
    },
    {
      "id": "fizika-120",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial"
        },
        {
          "id": "B",
          "text": "Kuchlanish"
        },
        {
          "id": "C",
          "text": "Tok kuchi"
        },
        {
          "id": "D",
          "text": "Elektr yurituvchi kuch (EYK)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Elektr yurituvchi kuch (EYK)ga tegishli."
    },
    {
      "id": "fizika-121",
      "question": "Fizikada 'Solishtirma qarshilik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Solishtirma qarshilik - Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)."
    },
    {
      "id": "fizika-122",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma qarshilik"
        },
        {
          "id": "B",
          "text": "O'tkazuvchanlik"
        },
        {
          "id": "C",
          "text": "Elektr sig'im"
        },
        {
          "id": "D",
          "text": "Induktivlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Solishtirma qarshilikga tegishli."
    },
    {
      "id": "fizika-123",
      "question": "Fizikada 'Elektr tokining quvvati' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Elektr tokining quvvati - Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)."
    },
    {
      "id": "fizika-124",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok zichligi"
        },
        {
          "id": "B",
          "text": "EYK"
        },
        {
          "id": "C",
          "text": "Elektr ishi"
        },
        {
          "id": "D",
          "text": "Elektr tokining quvvati"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Elektr tokining quvvatiga tegishli."
    },
    {
      "id": "fizika-125",
      "question": "Fizikada 'Lorens kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Lorens kuchi - Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-126",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Amper kuchi"
        },
        {
          "id": "C",
          "text": "Lorens kuchi"
        },
        {
          "id": "D",
          "text": "Kulon kuchi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Lorens kuchiga tegishli."
    },
    {
      "id": "fizika-127",
      "question": "Fizikada 'Amper kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Amper kuchi - Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-128",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Lorens kuchi"
        },
        {
          "id": "C",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Amper kuchiga tegishli."
    },
    {
      "id": "fizika-129",
      "question": "Fizikada 'O'zinduksiya hodisasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "O'zinduksiya hodisasi - Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi."
    },
    {
      "id": "fizika-130",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "Gistorezisi"
        },
        {
          "id": "B",
          "text": "Fotoeffekt"
        },
        {
          "id": "C",
          "text": "O'zaro induksiya"
        },
        {
          "id": "D",
          "text": "O'zinduksiya hodisasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif O'zinduksiya hodisasiga tegishli."
    },
    {
      "id": "fizika-131",
      "question": "Fizikada 'Transformator' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Transformator - O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma."
    },
    {
      "id": "fizika-132",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Transformator"
        },
        {
          "id": "B",
          "text": "Generator"
        },
        {
          "id": "C",
          "text": "Kondensator"
        },
        {
          "id": "D",
          "text": "Dvigatel"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Transformatorga tegishli."
    },
    {
      "id": "fizika-133",
      "question": "Fizikada 'Tebranish davri' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Tebranish davri - Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)."
    },
    {
      "id": "fizika-134",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)'?",
      "options": [
        {
          "id": "A",
          "text": "Tebranish davri"
        },
        {
          "id": "B",
          "text": "Chastota"
        },
        {
          "id": "C",
          "text": "Amplituda"
        },
        {
          "id": "D",
          "text": "Faza"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Tebranish davriga tegishli."
    },
    {
      "id": "fizika-135",
      "question": "Fizikada 'Tebranish chastotasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Tebranish chastotasi - Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)."
    },
    {
      "id": "fizika-136",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)'?",
      "options": [
        {
          "id": "A",
          "text": "Tebranish chastotasi"
        },
        {
          "id": "B",
          "text": "Amplituda"
        },
        {
          "id": "C",
          "text": "Davr"
        },
        {
          "id": "D",
          "text": "To'lqin soni"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Tebranish chastotasiga tegishli."
    },
    {
      "id": "fizika-137",
      "question": "Fizikada 'To'lqin interferensiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "To'lqin interferensiyasi - Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi."
    },
    {
      "id": "fizika-138",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "Dispersiya"
        },
        {
          "id": "B",
          "text": "Yutilish"
        },
        {
          "id": "C",
          "text": "To'lqin interferensiyasi"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif To'lqin interferensiyasiga tegishli."
    },
    {
      "id": "fizika-139",
      "question": "Fizikada 'To'lqin diffraksiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "To'lqin diffraksiyasi - To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi."
    },
    {
      "id": "fizika-140",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "To'lqin diffraksiyasi"
        },
        {
          "id": "B",
          "text": "Interferensiya"
        },
        {
          "id": "C",
          "text": "Polyarizatsiya"
        },
        {
          "id": "D",
          "text": "Sinish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif To'lqin diffraksiyasiga tegishli."
    },
    {
      "id": "fizika-141",
      "question": "Fizikada 'Yorug'lik dispersiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Yorug'lik dispersiyasi - Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi."
    },
    {
      "id": "fizika-142",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi'?",
      "options": [
        {
          "id": "A",
          "text": "Interferensiya"
        },
        {
          "id": "B",
          "text": "Yutilish"
        },
        {
          "id": "C",
          "text": "Diffraksiya"
        },
        {
          "id": "D",
          "text": "Yorug'lik dispersiyasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Ushbu ta'rif Yorug'lik dispersiyasiga tegishli."
    },
    {
      "id": "fizika-143",
      "question": "Fizikada 'To'liq ichki qaytish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "To'liq ichki qaytish - Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi."
    },
    {
      "id": "fizika-144",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi'?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Sinish"
        },
        {
          "id": "C",
          "text": "To'liq ichki qaytish"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif To'liq ichki qaytishga tegishli."
    },
    {
      "id": "fizika-145",
      "question": "Fizikada 'Fotoeffekt' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Fotoeffekt - Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi."
    },
    {
      "id": "fizika-146",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi'?",
      "options": [
        {
          "id": "A",
          "text": "Termoemissiya"
        },
        {
          "id": "B",
          "text": "Rentgen nurlanishi"
        },
        {
          "id": "C",
          "text": "Fotoeffekt"
        },
        {
          "id": "D",
          "text": "Lyuminessensiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Fotoeffektga tegishli."
    },
    {
      "id": "fizika-147",
      "question": "Fizikada 'Yorug'likning qizil chegarasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Yorug'likning qizil chegarasi - Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)."
    },
    {
      "id": "fizika-148",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)'?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya burchagi"
        },
        {
          "id": "B",
          "text": "Ko'rinish chegarasi"
        },
        {
          "id": "C",
          "text": "Yorug'likning qizil chegarasi"
        },
        {
          "id": "D",
          "text": "Spektr chegarasi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Yorug'likning qizil chegarasiga tegishli."
    },
    {
      "id": "fizika-149",
      "question": "Fizikada 'Yadro bog'lanish energiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Yadro bog'lanish energiyasi - Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)."
    },
    {
      "id": "fizika-150",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)'?",
      "options": [
        {
          "id": "A",
          "text": "Yadro bog'lanish energiyasi"
        },
        {
          "id": "B",
          "text": "Aktivlanish energiyasi"
        },
        {
          "id": "C",
          "text": "Chiqish ishi"
        },
        {
          "id": "D",
          "text": "Ionlanish energiyasi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Ushbu ta'rif Yadro bog'lanish energiyasiga tegishli."
    },
    {
      "id": "fizika-151",
      "question": "Fizikada 'Massa defekti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Massa defekti - Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)."
    },
    {
      "id": "fizika-152",
      "question": "Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa nisbati"
        },
        {
          "id": "B",
          "text": "Relativistik massa"
        },
        {
          "id": "C",
          "text": "Massa defekti"
        },
        {
          "id": "D",
          "text": "Zichlik defekti"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Ushbu ta'rif Massa defektiga tegishli."
    },
    {
      "id": "fizika-153",
      "question": "Moddiy nuqta nima?",
      "options": [
        {
          "id": "A",
          "text": "Hajmi nolga teng jism"
        },
        {
          "id": "B",
          "text": "Harakat sharoitida o'lchamlari hisobga olinmasa ham bo'ladigan jism"
        },
        {
          "id": "C",
          "text": "Faqat mikrozarracha"
        },
        {
          "id": "D",
          "text": "Qo'zg'almas jism"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "O'lchamlari ko'rilayotgan masofalarga nisbatan juda kichik bo'lgan jism."
    },
    {
      "id": "fizika-154",
      "question": "Sanoq sistemasi qanday elementlardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat Yer sathi"
        },
        {
          "id": "B",
          "text": "Faqat harakat trayektoriyasi"
        },
        {
          "id": "C",
          "text": "Sanoq jismi, u bilan bog'langan koordinatalar sistemasi va vaqt o'lchagich (soat)"
        },
        {
          "id": "D",
          "text": "Faqat chizg'ich va soat"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Sanoq sistemasi = Sanoq jismi + Koordinata sistemasi + Soat."
    },
    {
      "id": "fizika-155",
      "question": "Trayektoriya nima?",
      "options": [
        {
          "id": "A",
          "text": "Harakatlanayotgan jism qoldirgan yoki chizgan chiziq"
        },
        {
          "id": "B",
          "text": "Bosib o'tilgan yo'l uzunligi"
        },
        {
          "id": "C",
          "text": "Boshlang'ich va oxirgi nuqtalarni tutashtiruvchi vektor"
        },
        {
          "id": "D",
          "text": "Vaqt birligi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Fazoda jism harakatlangan iz/chiziq trayektoriya deyiladi."
    },
    {
      "id": "fizika-156",
      "question": "Ko'chish nima?",
      "options": [
        {
          "id": "A",
          "text": "Trayektoriyaning uzunligi"
        },
        {
          "id": "B",
          "text": "Faqat tezlik vektori"
        },
        {
          "id": "C",
          "text": "Harakatning boshlang'ich va oxirgi nuqtalarini tutashtiruvchi yo'nalishga ega to'g'ri chiziq kesmasi (vektor)"
        },
        {
          "id": "D",
          "text": "Bosib o'tilgan yo'l"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Ko'chish vektor kattalik, yo'l esa skalyar kattalik."
    },
    {
      "id": "fizika-157",
      "question": "Teng o'zgaruvchan harakatda tezlanish qanday kattalik hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Doimiy ortib boruvchi"
        },
        {
          "id": "B",
          "text": "Vaqt o'tishi bilan o'zgarmas (a = const)"
        },
        {
          "id": "C",
          "text": "Davriy tebranuvchi"
        },
        {
          "id": "D",
          "text": "Nolga teng"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Teng o'zgaruvchan harakatda a = const bo'ladi."
    },
    {
      "id": "fizika-158",
      "question": "Boshlang'ich tezliksiz erkin tushayotgan jismning t vaqtdagi tushish balandligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h = g · t"
        },
        {
          "id": "B",
          "text": "h = v · t"
        },
        {
          "id": "C",
          "text": "h = 2g / t²"
        },
        {
          "id": "D",
          "text": "h = (g · t²) / 2"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Boshlang'ich tezlik v0 = 0 bo'lganda h = gt²/2."
    },
    {
      "id": "fizika-159",
      "question": "Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Aylana"
        },
        {
          "id": "B",
          "text": "Parabola"
        },
        {
          "id": "C",
          "text": "To'g'ri chiziq"
        },
        {
          "id": "D",
          "text": "Giperbola"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Havoning qarshiligi hisobga olinmaganda trayektoriya paraboladir."
    },
    {
      "id": "fizika-160",
      "question": "Aylanma harakatda markazga intilma tezlanish formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "a = v² / R = ω² · R"
        },
        {
          "id": "B",
          "text": "a = v · R"
        },
        {
          "id": "C",
          "text": "a = v / t"
        },
        {
          "id": "D",
          "text": "a = ω / R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Markazga intilma tezlanish a_m = v²/R."
    },
    {
      "id": "fizika-161",
      "question": "Birinchi kosmik tezlikning Yer uchun taxminiy qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "16.7 km/s"
        },
        {
          "id": "B",
          "text": "300 000 km/s"
        },
        {
          "id": "C",
          "text": "11.2 km/s"
        },
        {
          "id": "D",
          "text": "7.9 km/s"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Yer atrofida pastki orbitada aylanish tezligi v1 ≈ 7.9 km/s."
    },
    {
      "id": "fizika-162",
      "question": "Ikkinchi kosmik tezlik (parabolik tezlik) Yer uchun qanchaga teng?",
      "options": [
        {
          "id": "A",
          "text": "16.7 km/s"
        },
        {
          "id": "B",
          "text": "9.8 km/s"
        },
        {
          "id": "C",
          "text": "7.9 km/s"
        },
        {
          "id": "D",
          "text": "11.2 km/s"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Yer gravitatsiyasini yengib chiqish tezligi v2 ≈ 11.2 km/s."
    },
    {
      "id": "fizika-163",
      "question": "Uchinchi kosmik tezlik Yer uchun qancha?",
      "options": [
        {
          "id": "A",
          "text": "7.9 km/s"
        },
        {
          "id": "B",
          "text": "11.2 km/s"
        },
        {
          "id": "C",
          "text": "42 km/s"
        },
        {
          "id": "D",
          "text": "16.7 km/s"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Quyosh sistemasini tark etish tezligi v3 ≈ 16.7 km/s."
    },
    {
      "id": "fizika-164",
      "question": "Og'irlik markazi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tayanch nuqtasi"
        },
        {
          "id": "B",
          "text": "Jismning geometrik o'rtasi"
        },
        {
          "id": "C",
          "text": "Jismning barcha qismlariga ta'sir qiluvchi og'irlik kuchlarining teng ta'sir etuvchisi qo'yilgan nuqta"
        },
        {
          "id": "D",
          "text": "Massa eng ko'p to'plangan nuqta"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Og'irlik kuchining qo'yilish nuqtasi."
    },
    {
      "id": "fizika-165",
      "question": "Richagning muvozanat sharti qanday ifodalanadi (Arximed qoidasi)?",
      "options": [
        {
          "id": "A",
          "text": "F1 · l1 = F2 · l2"
        },
        {
          "id": "B",
          "text": "F1 · F2 = l1 · l2"
        },
        {
          "id": "C",
          "text": "F1 + F2 = l1 + l2"
        },
        {
          "id": "D",
          "text": "F1 / l1 = F2 / l2"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Kuchlar momentlari o'zaro teng bo'lishi kerak."
    },
    {
      "id": "fizika-166",
      "question": "Ko'chmas blok qanday mexanik yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ishdan 2 marta yutuq beradi"
        },
        {
          "id": "B",
          "text": "Kuchdan yutuq bermaydi, faqat kuch yo'nalishini o'zgartiradi"
        },
        {
          "id": "C",
          "text": "Kuchdan 2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "Tezlikdan yutuq beradi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ko'chmas blok kuchdan yutuq bermaydi."
    },
    {
      "id": "fizika-167",
      "question": "Ko'char blok kuchdan necha marta yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "4 marta"
        },
        {
          "id": "B",
          "text": "3 marta"
        },
        {
          "id": "C",
          "text": "Kuchdan yutuq bermaydi"
        },
        {
          "id": "D",
          "text": "2 marta yutuq beradi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Ko'char blok kuchdan 2 barobar yutuq beradi (masofada 2 marta yutqazadi)."
    },
    {
      "id": "fizika-168",
      "question": "Mexanikaning 'oltin qoidasi' qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Ishdan 2 marta yutish mumkin"
        },
        {
          "id": "B",
          "text": "Faqat tezlikdan yutish mumkin"
        },
        {
          "id": "C",
          "text": "Har doim energiyada yutuq bo'ladi"
        },
        {
          "id": "D",
          "text": "Kuchdan necha marta yutsak, masofada shuncha yutqazamiz (ishdan yutuq olinmaydi)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Oddiy mexanizmlar ishdan yutuq bermaydi."
    },
    {
      "id": "fizika-169",
      "question": "Ideal gaz nima?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlikka aylanmaydigan gaz"
        },
        {
          "id": "B",
          "text": "Faqat vodorod gazi"
        },
        {
          "id": "C",
          "text": "Xona haroratidagi har qanday gaz"
        },
        {
          "id": "D",
          "text": "Molekulalari o'lchamlari hisobga olinmaydigan, to'qnashuvdan boshqa vaqtda o'zaro ta'sirlashmaydigan nazariy model"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Fizikada qo'llanadigan ideallashtirilgan model."
    },
    {
      "id": "fizika-170",
      "question": "Termodinamik harorat T va Selsiy harorati t o'rtasidagi bog'lanish qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = t - 273.15"
        },
        {
          "id": "B",
          "text": "T = t + 273.15"
        },
        {
          "id": "C",
          "text": "T = 273.15 / t"
        },
        {
          "id": "D",
          "text": "T = t · 1.8"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Kelvin shkalasi T = t + 273.15 K."
    },
    {
      "id": "fizika-171",
      "question": "Diffuziya hodisasi nimani isbotlaydi?",
      "options": [
        {
          "id": "A",
          "text": "Modda molekulalarining uzluksiz va tartibsiz (xaotik) harakatini"
        },
        {
          "id": "B",
          "text": "Molekulalarning bo'linishini"
        },
        {
          "id": "C",
          "text": "Gravitatsiya ta'sirini"
        },
        {
          "id": "D",
          "text": "Jismning qattiqligini"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Moddalarning o'z-o'zidan aralashib ketishi ularning harakatdaligini ko'rsatadi."
    },
    {
      "id": "fizika-172",
      "question": "Broun harakati nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat tirik bakteriyalar harakati"
        },
        {
          "id": "B",
          "text": "Konveksiya oqimi"
        },
        {
          "id": "C",
          "text": "Molekulalarning aylanishi"
        },
        {
          "id": "D",
          "text": "Suyuqlik yoki gazda muallaq turgan mikroskopik zarrachalarning tartibsiz harakati"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Suyuqlik molekulalarining zarbalari oqibatida yuz beradi."
    },
    {
      "id": "fizika-173",
      "question": "Suyuqlikning bug'lanish tezligi nimalarga bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlik turiga, sirt yuzasiga, haroratga va shamolga"
        },
        {
          "id": "B",
          "text": "Faqat havo bosimiga"
        },
        {
          "id": "C",
          "text": "Faqat suyuqlik massasiga"
        },
        {
          "id": "D",
          "text": "Faqat idishning rangiga"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Sirt yuzi, harorat va ochiq havo oqimi bug'lanishni tezlashtiradi."
    },
    {
      "id": "fizika-174",
      "question": "To'yingan bug' nima?",
      "options": [
        {
          "id": "A",
          "text": "Qizdirilgan quruq bug'"
        },
        {
          "id": "B",
          "text": "O'z suyuqligi bilan dinamik muvozanatda bo'lgan bug'"
        },
        {
          "id": "C",
          "text": "Zichligi eng kichik bug'"
        },
        {
          "id": "D",
          "text": "Qaynayotgan bug'"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Vaqt birligida bug'lanayotgan va kondensatsiyalanayotgan molekulalar soni tenglashadi."
    },
    {
      "id": "fizika-175",
      "question": "Qaynash nima?",
      "options": [
        {
          "id": "A",
          "text": "Zichlik ortishi"
        },
        {
          "id": "B",
          "text": "Suyuqlikning nafaqat sirtidan, balki butun hajmi bo'ylab pufakchalar hosil qilib jadallik bilan bug'lanishi"
        },
        {
          "id": "C",
          "text": "Faqat sirtqi bug'lanish"
        },
        {
          "id": "D",
          "text": "Suyuqlik erishi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "To'yingan bug' bosimi tashqi bosimga tenglashganda qaynash boshlanadi."
    },
    {
      "id": "fizika-176",
      "question": "Qattiq jismning suyuqlikka aylanish jarayoni nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Erish"
        },
        {
          "id": "B",
          "text": "Kondensatsiya"
        },
        {
          "id": "C",
          "text": "Sublimatsiya"
        },
        {
          "id": "D",
          "text": "Kristallanish"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Erish jarayonida harorat o'zgarmaydi."
    },
    {
      "id": "fizika-177",
      "question": "Moddaning to'g'ridan-to'g'ri qattiq holatdan gaz holatiga o'tishi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Qaynash"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Sublimatsiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Masalan, yod yoki quruq muzning to'g'ridan-to'g'ri gazga aylanishi."
    },
    {
      "id": "fizika-178",
      "question": "Gazning to'g'ridan-to'g'ri qattiq holatga o'tishi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Bug'lanish"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Ionlanish"
        },
        {
          "id": "D",
          "text": "Desublimatsiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Sovuqda derazada qirov hosil bo'lishi desublimatsiyadir."
    },
    {
      "id": "fizika-179",
      "question": "Elektroskop qanday asbob?",
      "options": [
        {
          "id": "A",
          "text": "Jismning elektrlanganganligini aniqlovchi asbob"
        },
        {
          "id": "B",
          "text": "Kuchlanishni oshiruvchi asbob"
        },
        {
          "id": "C",
          "text": "Tok kuchini o'lchovchi asbob"
        },
        {
          "id": "D",
          "text": "Qarshilikni o'lchovchi asbob"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Zaryad bor-yo'qligini yaproqchalarning ochilishidan aniqlaydi."
    },
    {
      "id": "fizika-180",
      "question": "Metallarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Manfiy ionlar"
        },
        {
          "id": "B",
          "text": "Musbat ionlar"
        },
        {
          "id": "C",
          "text": "Kationlar va anionlar"
        },
        {
          "id": "D",
          "text": "Erkin elektronlar"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Metallarda tok o'tkazuvchilar erkin elektronlardir."
    },
    {
      "id": "fizika-181",
      "question": "Elektrolitlarda (suyuqliklarda) elektr tokini nimalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat erkin elektronlar"
        },
        {
          "id": "B",
          "text": "Faqat musbat protonlar"
        },
        {
          "id": "C",
          "text": "Musbat va manfiy ionlar"
        },
        {
          "id": "D",
          "text": "Faqat neytronlar"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Elektrolitik dissotsiatsiyada hosil bo'lgan ionlar."
    },
    {
      "id": "fizika-182",
      "question": "Gazlarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat neytronlar"
        },
        {
          "id": "B",
          "text": "Elektronlar va musbat hamda manfiy ionlar"
        },
        {
          "id": "C",
          "text": "Faqat elektronlar"
        },
        {
          "id": "D",
          "text": "Faqat pozitronlar"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Gaz razryadida ionlar va elektronlar qatnashadi."
    },
    {
      "id": "fizika-183",
      "question": "Vakuumda elektr toki hosil qilish uchun nima zarur?",
      "options": [
        {
          "id": "A",
          "text": "Elektrolit solish"
        },
        {
          "id": "B",
          "text": "Yuqori bosim"
        },
        {
          "id": "C",
          "text": "Magnit maydon"
        },
        {
          "id": "D",
          "text": "Termoelektron emissiya (qizdirilgan katoddan elektronlar ajralishi)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Vakuumda termoelektron emissiya orqali tok o'tadi."
    },
    {
      "id": "fizika-184",
      "question": "Yarimo'tkazgichlarda o'tkazuvchanlik qanday turlarga bo'linadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat protonli"
        },
        {
          "id": "B",
          "text": "Faqat neytronli"
        },
        {
          "id": "C",
          "text": "Faqat ionli"
        },
        {
          "id": "D",
          "text": "Xususiy (elektron-teshikli) va aralashmali (n-tur va p-tur)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Donor aralashma n-tur, akseptor aralashma p-tur hosil qiladi."
    },
    {
      "id": "fizika-185",
      "question": "O'ta o'tkazuvchanlik hodisasini 1911-yilda simobda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Gens Ersted"
        },
        {
          "id": "B",
          "text": "Nikola Tesla"
        },
        {
          "id": "C",
          "text": "Tomas Edison"
        },
        {
          "id": "D",
          "text": "Kammerling-Onnes (4.2 K haroratda)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Kritik haroratda elektr qarshiligining keskin nolga tushishi."
    },
    {
      "id": "fizika-186",
      "question": "Yorug'lik nuri nima?",
      "options": [
        {
          "id": "A",
          "text": "Fotonlar massasi"
        },
        {
          "id": "B",
          "text": "Optik linza"
        },
        {
          "id": "C",
          "text": "Yorug'lik energiyasi tarqalayotgan yo'nalishni ko'rsatuvchi geometrik chiziq"
        },
        {
          "id": "D",
          "text": "Yorug'lik tezligi"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Geometrik optikada nur tushunchasi."
    },
    {
      "id": "fizika-187",
      "question": "Yassi ko'zguda hosil bo'lgan tasvir qanday xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Mavhum, to'g'ri va jism o'lchamiga teng"
        },
        {
          "id": "B",
          "text": "Kichraytirilgan"
        },
        {
          "id": "C",
          "text": "Haqiqiy va kattalashgan"
        },
        {
          "id": "D",
          "text": "Haqiqiy va to'ntarilgan"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Yassi ko'zgu doim mavhum va teng tasvir beradi."
    },
    {
      "id": "fizika-188",
      "question": "Ko'z gavhari qanday optik xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Sochuvchi linza"
        },
        {
          "id": "B",
          "text": "Ikki tomoni qavariq yig'uvchi linza"
        },
        {
          "id": "C",
          "text": "Yassi plastinka"
        },
        {
          "id": "D",
          "text": "Prizma"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Ko'z gavhari yig'uvchi egiluvchan tirik linzadir."
    },
    {
      "id": "fizika-189",
      "question": "Yaqindan ko'ruvchilik (miopiya) qanday ko'zoynak linzasi bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "B",
          "text": "Rangli filtrlar bilan"
        },
        {
          "id": "C",
          "text": "Silindrik linzalar bilan"
        },
        {
          "id": "D",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Miopiyada tasvir to'r parda oldiga tushadi, uni sochuvchi linza to'g'rilaydi."
    },
    {
      "id": "fizika-190",
      "question": "Uzoqdan ko'ruvchilik (gipermetropiya) qanday linzali ko'zoynak bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yassi shisha bilan"
        },
        {
          "id": "B",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "C",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "D",
          "text": "Qorong'i filtr bilan"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Gipermetropiyada tasvir to'r parda orqasiga o'tib ketadi, yig'uvchi linza kerak."
    },
    {
      "id": "fizika-191",
      "question": "Ko'rinadigan yorug'lik to'lqin uzunliklari oralig'i taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "1 km dan 10 km gacha"
        },
        {
          "id": "B",
          "text": "1 mm dan 1 sm gacha"
        },
        {
          "id": "C",
          "text": "10 nm dan 100 nm gacha"
        },
        {
          "id": "D",
          "text": "380 nm dan 780 nm gacha"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Binafsha rangdan (380 nm) qizil ranggacha (760-780 nm)."
    },
    {
      "id": "fizika-192",
      "question": "Rentgen nurlarining to'lqin uzunligi qanday?",
      "options": [
        {
          "id": "A",
          "text": "Ultrabinafsha va gamma-nurlar oralig'idagi juda qisqa to'lqinlar (0.01 - 10 nm)"
        },
        {
          "id": "B",
          "text": "Ko'rinadigan yorug'likdan uzun"
        },
        {
          "id": "C",
          "text": "Radioto'lqinlar bilan bir xil"
        },
        {
          "id": "D",
          "text": "Infraqizildan uzun"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Rentgen nurlari yuqori o'tuvchanlik qobiliyatiga ega."
    },
    {
      "id": "fizika-193",
      "question": "Radioaktiv nurlanishning qaysi turi eng katta kirib borish qobiliyatiga ega?",
      "options": [
        {
          "id": "A",
          "text": "Alfa (α) nurlanish (geliy yadrolari)"
        },
        {
          "id": "B",
          "text": "Beta (β) nurlanish (elektronlar)"
        },
        {
          "id": "C",
          "text": "Ultrabinafsha"
        },
        {
          "id": "D",
          "text": "Gamma (γ) nurlanish (fotonlar oqimi)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Gamma nurlari hatto qalin qo'rg'oshin qatlamidan ham o'tadi."
    },
    {
      "id": "fizika-194",
      "question": "Alfa (α) zarracha o'zi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tezkor elektron"
        },
        {
          "id": "B",
          "text": "Neytron"
        },
        {
          "id": "C",
          "text": "Geliy atomi yadrosi (ikkita proton va ikkita neytron: ⁴₂He)"
        },
        {
          "id": "D",
          "text": "Foton"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Alfa nurlanish geliy yadrolari oqimidir."
    },
    {
      "id": "fizika-195",
      "question": "Beta (β⁻) nurlanish qanday zarrachalar oqimidan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Pozitronlar"
        },
        {
          "id": "B",
          "text": "Protonlar"
        },
        {
          "id": "C",
          "text": "Tez harakatlanuvchi elektronlar"
        },
        {
          "id": "D",
          "text": "Geliy yadrolari"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Beta-manfiy yemirilishda yadrodan elektron uchib chiqadi."
    },
    {
      "id": "fizika-196",
      "question": "Yadroning zanjirli bo'linish reaksiyasida qaysi og'ir izotop keng qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "Uran-235 (²³⁵U)"
        },
        {
          "id": "B",
          "text": "Vodorod-1"
        },
        {
          "id": "C",
          "text": "Temir-56"
        },
        {
          "id": "D",
          "text": "Uran-238"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Uran-235 sekin neytronlar ta'sirida bo'linadi va energiya ajratadi."
    },
    {
      "id": "fizika-197",
      "question": "Termoyadro sintez reaksiyasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Og'ir yadrolarning bo'linishi"
        },
        {
          "id": "B",
          "text": "Kimyoviy yonish"
        },
        {
          "id": "C",
          "text": "Yengil yadrolarning (vodorod izotoplari) o'ta yuqori haroratda birikib og'irroq yadro hosil qilishi"
        },
        {
          "id": "D",
          "text": "Faqat alfa-yemirilish"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Quyosh va yulduzlar energiyasining manbai termoyadro reaksiyasidir."
    },
    {
      "id": "fizika-198",
      "question": "Quyosh sirtida energiya qaysi jarayon hisobiga ajraladi?",
      "options": [
        {
          "id": "A",
          "text": "Gravitatsion qisilish"
        },
        {
          "id": "B",
          "text": "Uran bo'linishi"
        },
        {
          "id": "C",
          "text": "Termoyadro sintezi (vodorodning geliyga aylanishi)"
        },
        {
          "id": "D",
          "text": "Ko'mir yonishi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Quyosh yadrosidagi termoyadro reaksiyasi."
    },
    {
      "id": "fizika-199",
      "question": "Fizikada Plank gipotezasi nimadan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Energiya doim o'zgaruvchan"
        },
        {
          "id": "B",
          "text": "Atomlar yorug'likni uzluksiz emas, balki diskret porsiyalar (kvantlar) tarzida chiqaradi va yutadi"
        },
        {
          "id": "C",
          "text": "Elektronlar qo'zg'almasdir"
        },
        {
          "id": "D",
          "text": "Yorug'lik faqat to'lqindir"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "1900-yilda Maks Plank kvant nazariyasiga asos soldi."
    },
    {
      "id": "fizika-200",
      "question": "DTM namunaviy fizika tahlili: Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "F = m · a"
        },
        {
          "id": "C",
          "text": "A = F · s"
        },
        {
          "id": "D",
          "text": "P = m · g"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Jismga ta'sir etuvchi kuch uning massasi va tezlanishi ko'paytmasiga teng."
    },
    {
      "id": "fizika-201",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning vakuumdagi tezligi taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "30 000 km/s"
        },
        {
          "id": "B",
          "text": "3 000 km/s"
        },
        {
          "id": "C",
          "text": "300 000 km/s"
        },
        {
          "id": "D",
          "text": "3 000 000 km/s"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: c ≈ 3·10^8 m/s = 300 000 km/s."
    },
    {
      "id": "fizika-202",
      "question": "DTM namunaviy fizika tahlili: Normal sharoitda suv qaysi haroratda qaynaydi?",
      "options": [
        {
          "id": "A",
          "text": "120 °C"
        },
        {
          "id": "B",
          "text": "212 °C"
        },
        {
          "id": "C",
          "text": "100 °C"
        },
        {
          "id": "D",
          "text": "0 °C"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Normal atmosfera bosimida suv 100 °C da qaynaydi."
    },
    {
      "id": "fizika-203",
      "question": "DTM namunaviy fizika tahlili: Elektr tok kuchining o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Amper"
        },
        {
          "id": "B",
          "text": "Vatt"
        },
        {
          "id": "C",
          "text": "Om"
        },
        {
          "id": "D",
          "text": "Volt"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Xalqaro birliklar sistemasida tok kuchi Amperda o'lchanadi."
    },
    {
      "id": "fizika-204",
      "question": "DTM namunaviy fizika tahlili: Tezlanishning SI sistemasidagi asosiy o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "N/kg"
        },
        {
          "id": "B",
          "text": "m/s²"
        },
        {
          "id": "C",
          "text": "m/s"
        },
        {
          "id": "D",
          "text": "km/soat"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Tezlanish birligi metr taqsim soniya kvadratidir."
    },
    {
      "id": "fizika-205",
      "question": "DTM namunaviy fizika tahlili: To'g'ri chiziqli tekis harakatda tezlik qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Nolga teng bo'ladi"
        },
        {
          "id": "B",
          "text": "Kamayadi"
        },
        {
          "id": "C",
          "text": "O'zgarmas qoladi (v = const)"
        },
        {
          "id": "D",
          "text": "Vaqtga to'g'ri mutanosib ortadi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tekis harakatda tezlik yo'nalishi va qiymati bo'yicha o'zgarmaydi."
    },
    {
      "id": "fizika-206",
      "question": "DTM namunaviy fizika tahlili: Erkin tushish tezlanishining Yer sirtidagi o'rtacha qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "6.67 m/s²"
        },
        {
          "id": "B",
          "text": "8.9 m/s²"
        },
        {
          "id": "C",
          "text": "10.5 m/s²"
        },
        {
          "id": "D",
          "text": "9.8 m/s²"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: g ≈ 9.8 m/s² (amaliy hisoblashlarda ko'pincha 10 olinadi)."
    },
    {
      "id": "fizika-207",
      "question": "DTM namunaviy fizika tahlili: Burchak tezlik va aylanish davri o'rtasidagi bog'liqlik formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "ω = T / 2π"
        },
        {
          "id": "B",
          "text": "ω = 2π · T"
        },
        {
          "id": "C",
          "text": "ω = v · R"
        },
        {
          "id": "D",
          "text": "ω = 2π / T"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Burchak tezlik ω = 2π/T = 2πν ga teng."
    },
    {
      "id": "fizika-208",
      "question": "DTM namunaviy fizika tahlili: Inersiya qonuni Nyutonning nechanchi qonuni hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Butunjahon tortishish qonuni"
        },
        {
          "id": "B",
          "text": "Birinchi qonuni"
        },
        {
          "id": "C",
          "text": "Uchinchi qonuni"
        },
        {
          "id": "D",
          "text": "Ikkinchi qonuni"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Nyutonning 1-qonuni inersiya qonunidir."
    },
    {
      "id": "fizika-209",
      "question": "DTM namunaviy fizika tahlili: Nyutonning uchinchi qonuniga ko'ra ikki jismning o'zaro ta'sir kuchlari qanday bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Har xil modulli"
        },
        {
          "id": "B",
          "text": "Biri ikkinchisidan doim katta"
        },
        {
          "id": "C",
          "text": "Bir xil yo'nalgan va teng"
        },
        {
          "id": "D",
          "text": "Moduli bo'yicha teng, yo'nalishi qarama-qarshi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: F1 = -F2 (ta'sir aks ta'sirga teng va qarama-qarshi)."
    },
    {
      "id": "fizika-210",
      "question": "DTM namunaviy fizika tahlili: Guk qonuni bo'yicha elastiklik kuchi qanday ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · a"
        },
        {
          "id": "B",
          "text": "F = -k · x"
        },
        {
          "id": "C",
          "text": "F = G · m1m2 / R²"
        },
        {
          "id": "D",
          "text": "F = μ · N"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Elastiklik kuchi jism deformatsiyasiga to'g'ri mutanosib."
    },
    {
      "id": "fizika-211",
      "question": "DTM namunaviy fizika tahlili: Sirpanish ishqalanish kuchi qaysi formula bilan topiladi?",
      "options": [
        {
          "id": "A",
          "text": "F = k · x"
        },
        {
          "id": "B",
          "text": "F = μ · N"
        },
        {
          "id": "C",
          "text": "F = P · S"
        },
        {
          "id": "D",
          "text": "F = m · g"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ishqalanish kuchi reaksiya kuchiga mutanosib."
    },
    {
      "id": "fizika-212",
      "question": "DTM namunaviy fizika tahlili: Butunjahon tortishish doimiysi G ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "8.31 J/(mol·K)"
        },
        {
          "id": "B",
          "text": "6.67 · 10⁻¹¹ N·m²/kg²"
        },
        {
          "id": "C",
          "text": "9.8 m/s²"
        },
        {
          "id": "D",
          "text": "1.38 · 10⁻²³ J/K"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Gravitatsion doimiy G = 6.67·10^-11 N·m²/kg²."
    },
    {
      "id": "fizika-213",
      "question": "DTM namunaviy fizika tahlili: Jismning Yer sirtidan uzoqlashishi bilan unga ta'sir etuvchi tortishish kuchi qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Masofa kvadratiga teskari kamayadi"
        },
        {
          "id": "B",
          "text": "O'zgarmaydi"
        },
        {
          "id": "C",
          "text": "Ortadi"
        },
        {
          "id": "D",
          "text": "Chiziqli kamayadi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: F ~ 1/R² qonuniyati bo'yicha masofa oshganda kamayadi."
    },
    {
      "id": "fizika-214",
      "question": "DTM namunaviy fizika tahlili: Jism impulsi (harakat miqdori) qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · a"
        },
        {
          "id": "B",
          "text": "p = m · g · h"
        },
        {
          "id": "C",
          "text": "p = m · v"
        },
        {
          "id": "D",
          "text": "p = F · t"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Jism impulsi massa va tezlik ko'paytmasiga teng."
    },
    {
      "id": "fizika-215",
      "question": "DTM namunaviy fizika tahlili: Kinetik energiya formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E_p = m · g · h"
        },
        {
          "id": "B",
          "text": "E_k = (m · v²) / 2"
        },
        {
          "id": "C",
          "text": "A = F · s"
        },
        {
          "id": "D",
          "text": "E = m · c²"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Kinetik energiya tezlikning kvadratiga to'g'ri proporsional."
    },
    {
      "id": "fizika-216",
      "question": "DTM namunaviy fizika tahlili: Mexanik ish qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Joul (J)"
        },
        {
          "id": "B",
          "text": "Vatt (W)"
        },
        {
          "id": "C",
          "text": "Nyuton (N)"
        },
        {
          "id": "D",
          "text": "Paskal (Pa)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Joul = 1 Nyuton · 1 metr."
    },
    {
      "id": "fizika-217",
      "question": "DTM namunaviy fizika tahlili: Quvvatning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Vatt (W)"
        },
        {
          "id": "B",
          "text": "Nyuton (N)"
        },
        {
          "id": "C",
          "text": "Amper (A)"
        },
        {
          "id": "D",
          "text": "Joul (J)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Vatt = 1 Joul / 1 soniya."
    },
    {
      "id": "fizika-218",
      "question": "DTM namunaviy fizika tahlili: Foydali ish koeffitsienti (FIK) qanday kattalik?",
      "options": [
        {
          "id": "A",
          "text": "Bajarilgan ish va quvvat ko'paytmasi"
        },
        {
          "id": "B",
          "text": "Faqat kuchlar nisbati"
        },
        {
          "id": "C",
          "text": "Vaqtga teskari qiymat"
        },
        {
          "id": "D",
          "text": "Foydali ishning to'liq sarflangan ishga nisbati"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: FIK = (A_foydali / A_to'liq) · 100%."
    },
    {
      "id": "fizika-219",
      "question": "DTM namunaviy fizika tahlili: Bosimning SI sistemasidagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Torr"
        },
        {
          "id": "B",
          "text": "Nyuton"
        },
        {
          "id": "C",
          "text": "Paskal (Pa)"
        },
        {
          "id": "D",
          "text": "Bar"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Pa = 1 N / m²."
    },
    {
      "id": "fizika-220",
      "question": "DTM namunaviy fizika tahlili: Suyuqlik ustunining gidrostatik bosimi qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = ρ · g · h"
        },
        {
          "id": "B",
          "text": "p = m · g"
        },
        {
          "id": "C",
          "text": "p = F / S"
        },
        {
          "id": "D",
          "text": "p = V · ρ"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim zichlik, erkin tushish tezlanishi va balandlikka bog'liq."
    },
    {
      "id": "fizika-221",
      "question": "DTM namunaviy fizika tahlili: Arximed kuchi (ko'tarish kuchi) qaysi formula orqali hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = P · S"
        },
        {
          "id": "B",
          "text": "F = k · x"
        },
        {
          "id": "C",
          "text": "F = m · a"
        },
        {
          "id": "D",
          "text": "F_A = ρ_s · g · V_ch"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi siqib chiqarilgan suyuqlik og'irligiga teng."
    },
    {
      "id": "fizika-222",
      "question": "DTM namunaviy fizika tahlili: Paskal qonuniga ko'ra suyuqlik va gazlarga berilgan tashqi bosim qanday uzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat idish devorlariga uzatiladi"
        },
        {
          "id": "B",
          "text": "Barcha yo'nalishlarda o'zgarishsiz teng uzatiladi"
        },
        {
          "id": "C",
          "text": "Masofaga qarab kamayadi"
        },
        {
          "id": "D",
          "text": "Faqat pastga qarab uzatiladi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Paskal qonuni: bosim barcha yo'nalishlarga teng tarqaladi."
    },
    {
      "id": "fizika-223",
      "question": "DTM namunaviy fizika tahlili: Normal atmosfera bosimi simob ustunining necha millimetr balandligiga teng?",
      "options": [
        {
          "id": "A",
          "text": "720 mm Hg"
        },
        {
          "id": "B",
          "text": "780 mm Hg"
        },
        {
          "id": "C",
          "text": "760 mm Hg"
        },
        {
          "id": "D",
          "text": "100 mm Hg"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 atm = 760 mm simob ustuni ≈ 101325 Pa."
    },
    {
      "id": "fizika-224",
      "question": "DTM namunaviy fizika tahlili: Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "p = ρ · g · h"
        },
        {
          "id": "B",
          "text": "p = (1/3) · n · m_0 · v²"
        },
        {
          "id": "C",
          "text": "p · V = const"
        },
        {
          "id": "D",
          "text": "E = k · T"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Bosim zarrachalar konsentratsiyasi va o'rtacha kinetik energiyasiga bog'liq."
    },
    {
      "id": "fizika-225",
      "question": "DTM namunaviy fizika tahlili: Mendeleyev-Klapeyron tenglamasi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "V / T = const"
        },
        {
          "id": "B",
          "text": "p · V = (m / M) · R · T"
        },
        {
          "id": "C",
          "text": "p / T = const"
        },
        {
          "id": "D",
          "text": "p · V = const"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ideal gaz holat tenglamasi: pV = νRT."
    },
    {
      "id": "fizika-226",
      "question": "DTM namunaviy fizika tahlili: Izotermik jarayonda gazning qaysi parametri o'zgarmas saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Massa va hajm"
        },
        {
          "id": "B",
          "text": "Bosim (p = const)"
        },
        {
          "id": "C",
          "text": "Hajm (V = const)"
        },
        {
          "id": "D",
          "text": "Harorat (T = const, Boyl-Mariott qonuni)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: T = const bo'lganda pV = const."
    },
    {
      "id": "fizika-227",
      "question": "DTM namunaviy fizika tahlili: Izobarik jarayonda gazning qaysi parametri doimiy bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const)"
        },
        {
          "id": "B",
          "text": "Harorat (T = const)"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Bosim (p = const, Gey-Lyussak qonuni)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: p = const bo'lganda V/T = const."
    },
    {
      "id": "fizika-228",
      "question": "DTM namunaviy fizika tahlili: Izoxorik jarayonda gazning qaysi kattaligi o'zgarmaydi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const, Sharl qonuni)"
        },
        {
          "id": "B",
          "text": "Ichki energiya"
        },
        {
          "id": "C",
          "text": "Harorat (T = const)"
        },
        {
          "id": "D",
          "text": "Bosim (p = const)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: V = const bo'lganda p/T = const."
    },
    {
      "id": "fizika-229",
      "question": "DTM namunaviy fizika tahlili: Issiqlik almashinuvsiz kechuvchi termodinamik jarayon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Izobarik jarayon"
        },
        {
          "id": "B",
          "text": "Izoxorik jarayon"
        },
        {
          "id": "C",
          "text": "Adiabatik jarayon (Q = 0)"
        },
        {
          "id": "D",
          "text": "Izotermik jarayon"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tashqi muhit bilan issiqlik almashinmaydigan jarayon adiabatik deyiladi."
    },
    {
      "id": "fizika-230",
      "question": "DTM namunaviy fizika tahlili: Termodinamikaning birinchi qonuni qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "B",
          "text": "Q = ΔU + A"
        },
        {
          "id": "C",
          "text": "ΔU = Q + A"
        },
        {
          "id": "D",
          "text": "A = p · ΔV"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimga berilgan issiqlik uning ichki energiyasini oshirishga va ish bajarishga sarflanadi."
    },
    {
      "id": "fizika-231",
      "question": "DTM namunaviy fizika tahlili: Mutloq nol harorat Selsiy shkalasi bo'yicha necha darajaga to'g'ri keladi?",
      "options": [
        {
          "id": "A",
          "text": "-100 °C"
        },
        {
          "id": "B",
          "text": "-373.15 °C"
        },
        {
          "id": "C",
          "text": "0 °C"
        },
        {
          "id": "D",
          "text": "-273.15 °C"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 0 Kelvin = -273.15 °C."
    },
    {
      "id": "fizika-232",
      "question": "DTM namunaviy fizika tahlili: Karno sikli bo'yicha ishlovchi ideal issiqlik mashinasining FIK formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "η = (T_1 - T_2) / T_1"
        },
        {
          "id": "B",
          "text": "η = Q_2 / Q_1"
        },
        {
          "id": "C",
          "text": "η = (T_1 + T_2) / T_1"
        },
        {
          "id": "D",
          "text": "η = T_2 / T_1"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: T1 - isitgich, T2 - sovutgich harorati."
    },
    {
      "id": "fizika-233",
      "question": "DTM namunaviy fizika tahlili: Kulon qonuniga ko'ra nuqtaviy zaryadlarning o'zaro ta'sir kuchi qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = k · |q1 · q2| / r²"
        },
        {
          "id": "B",
          "text": "F = q · E"
        },
        {
          "id": "C",
          "text": "F = q · v · B"
        },
        {
          "id": "D",
          "text": "F = I · B · L"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kulon kuchi zaryadlar ko'paytmasiga to'g'ri va masofa kvadratiga teskari mutanosib."
    },
    {
      "id": "fizika-234",
      "question": "DTM namunaviy fizika tahlili: Elektr maydon kuchlanganligi E ning ta'rif formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "φ = W / q"
        },
        {
          "id": "B",
          "text": "E = k · q / r"
        },
        {
          "id": "C",
          "text": "E = U / d"
        },
        {
          "id": "D",
          "text": "E = F / q"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlanganlik birlik musbat zaryadga ta'sir qiluvchi kuchdir."
    },
    {
      "id": "fizika-235",
      "question": "DTM namunaviy fizika tahlili: Kondensator sig'imining SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Klon (C)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Farad (F)"
        },
        {
          "id": "D",
          "text": "Veber (Wb)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Elektr sig'im Faradlarda o'lchanadi."
    },
    {
      "id": "fizika-236",
      "question": "DTM namunaviy fizika tahlili: Zanjirning bir qismi uchun Om qonuni qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = E / (R + r)"
        },
        {
          "id": "B",
          "text": "P = I · U"
        },
        {
          "id": "C",
          "text": "I = U / R"
        },
        {
          "id": "D",
          "text": "U = I · R²"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosib."
    },
    {
      "id": "fizika-237",
      "question": "DTM namunaviy fizika tahlili: To'liq zanjir uchun Om qonuni formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = ε / (R + r)"
        },
        {
          "id": "B",
          "text": "P = I² · R"
        },
        {
          "id": "C",
          "text": "U = ε - I · r"
        },
        {
          "id": "D",
          "text": "I = U / R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: ε - EYK, R - tashqi qarshilik, r - ichki qarshilik."
    },
    {
      "id": "fizika-238",
      "question": "DTM namunaviy fizika tahlili: O'tkazgichning qarshiligi uning o'lchamlariga qanday bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "R = S / (ρ · l)"
        },
        {
          "id": "B",
          "text": "R = P / I²"
        },
        {
          "id": "C",
          "text": "R = U / I"
        },
        {
          "id": "D",
          "text": "R = ρ · l / S"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Qarshilik uzunlikka to'g'ri, ko'ndalang kesim yuziga teskari proportsional."
    },
    {
      "id": "fizika-239",
      "question": "DTM namunaviy fizika tahlili: Ketma-ket ulangan o'tkazgichlarda qaysi fizik kattalik bir xil bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Qarshilik (R)"
        },
        {
          "id": "B",
          "text": "Tok kuchi (I = const)"
        },
        {
          "id": "C",
          "text": "Quvvat (P)"
        },
        {
          "id": "D",
          "text": "Kuchlanish (U)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ketma-ket ulanishda barcha qismlardan bir xil tok o'tadi."
    },
    {
      "id": "fizika-240",
      "question": "DTM namunaviy fizika tahlili: Parallel ulangan o'tkazgichlarda qaysi parametr barchasida teng bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi (I)"
        },
        {
          "id": "B",
          "text": "Zaryad (q)"
        },
        {
          "id": "C",
          "text": "Kuchlanish (U = const)"
        },
        {
          "id": "D",
          "text": "Qarshilik (R)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Parallel tarmoqlarda kuchlanishlar bir xil bo'ladi."
    },
    {
      "id": "fizika-241",
      "question": "DTM namunaviy fizika tahlili: Joul-Lens qonuni bo'yicha o'tkazgichda ajraladigan issiqlik miqdori qanday hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "B",
          "text": "Q = U · I"
        },
        {
          "id": "C",
          "text": "Q = I² · R · t"
        },
        {
          "id": "D",
          "text": "Q = I · R · t"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ajraladigan issiqlik tok kvadratiga to'g'ri proportsional."
    },
    {
      "id": "fizika-242",
      "question": "DTM namunaviy fizika tahlili: Magnit maydon induksiyasi B ning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tesla (Tl)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Ersted"
        },
        {
          "id": "D",
          "text": "Veber (Wb)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit maydon induksiyasi Teslada o'lchanadi."
    },
    {
      "id": "fizika-243",
      "question": "DTM namunaviy fizika tahlili: Magnit oqimi Φ ning SI dagi o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Genri (H)"
        },
        {
          "id": "B",
          "text": "Veber (Wb)"
        },
        {
          "id": "C",
          "text": "Volt"
        },
        {
          "id": "D",
          "text": "Tesla (Tl)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit oqimi Veberda o'lchanadi (1 Wb = 1 Tl · m²)."
    },
    {
      "id": "fizika-244",
      "question": "DTM namunaviy fizika tahlili: Magnit maydonida harakatlanayotgan zaryadli zarrachaga ta'sir qiluvchi kuch nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Amper kuchi"
        },
        {
          "id": "B",
          "text": "Kulon kuchi"
        },
        {
          "id": "C",
          "text": "Gravitatsiya kuchi"
        },
        {
          "id": "D",
          "text": "Lorens kuchi (F = q·v·B·sinα)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi harakatdagi zaryadga ta'sir qiladi."
    },
    {
      "id": "fizika-245",
      "question": "DTM namunaviy fizika tahlili: Tokli o'tkazgichga magnit maydoni tomonidan ta'sir etuvchi kuch qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Lorens kuchi"
        },
        {
          "id": "B",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "C",
          "text": "Kulon kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi (F = I·B·L·sinα)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Amper kuchi tokli o'tkazgichga ta'sir qiladi."
    },
    {
      "id": "fizika-246",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit induksiya hodisasini 1831-yilda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Jeyms Maksvell"
        },
        {
          "id": "B",
          "text": "Maykl Faradey"
        },
        {
          "id": "C",
          "text": "Genrix Gers"
        },
        {
          "id": "D",
          "text": "Gans Ersted"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Faradey o'zgaruvchan magnit maydoni tok hosil qilishini isbotlagan."
    },
    {
      "id": "fizika-247",
      "question": "DTM namunaviy fizika tahlili: Konturda hosil bo'lgan induksion tok yo'nalishini aniqlovchi qoida qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Lens qoidasi"
        },
        {
          "id": "B",
          "text": "Chap qo'l qoidasi"
        },
        {
          "id": "C",
          "text": "Vint qoidasi"
        },
        {
          "id": "D",
          "text": "O'ng qo'l qoidasi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Lens qoidasi: induksion tok o'zini vujudga keltirgan sababga qarshilik ko'rsatadi."
    },
    {
      "id": "fizika-248",
      "question": "DTM namunaviy fizika tahlili: G'altakning induktivlik birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tesla (Tl)"
        },
        {
          "id": "B",
          "text": "Farad (F)"
        },
        {
          "id": "C",
          "text": "Veber (Wb)"
        },
        {
          "id": "D",
          "text": "Genri (H)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: O'zinduksiya kattaligi Genrida o'lchanadi."
    },
    {
      "id": "fizika-249",
      "question": "DTM namunaviy fizika tahlili: Matematik mayatnikning tebranish davri qaysi formula bilan ifodalanadi (Gyuygens formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "B",
          "text": "T = 2π · √(g / l)"
        },
        {
          "id": "C",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "D",
          "text": "T = 1 / ν"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Mayatnik davri uzunlikka va erkin tushish tezlanishiga bog'liq."
    },
    {
      "id": "fizika-250",
      "question": "DTM namunaviy fizika tahlili: Prujinali mayatnikning tebranish davri formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = m · v / k"
        },
        {
          "id": "B",
          "text": "T = 2π · √(k / m)"
        },
        {
          "id": "C",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(m / k)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Davr massa va bikrlikka bog'liq."
    },
    {
      "id": "fizika-251",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit tebranish konturining tebranish davri formulasi qanday ataladi (Tomson formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(L · C)"
        },
        {
          "id": "B",
          "text": "ν = 1 / (2πLC)"
        },
        {
          "id": "C",
          "text": "T = 2π · √(L / C)"
        },
        {
          "id": "D",
          "text": "T = 2π · L · C"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Tomson formulasi: T = 2π√(LC)."
    },
    {
      "id": "fizika-252",
      "question": "DTM namunaviy fizika tahlili: To'lqin uzunligi λ, tarqalish tezligi v va chastota ν orasidagi bog'liqlik qaysi?",
      "options": [
        {
          "id": "A",
          "text": "λ = v / ν"
        },
        {
          "id": "B",
          "text": "λ = v · ν"
        },
        {
          "id": "C",
          "text": "λ = ν / v"
        },
        {
          "id": "D",
          "text": "v = λ / T²"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: To'lqin uzunligi tezlikning tebranish chastotasiga nisbatiga teng."
    },
    {
      "id": "fizika-253",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning qaytish qonuniga ko'ra tushish burchagi α va qaytish burchagi β qanday munosabatda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "α + β = 90°"
        },
        {
          "id": "B",
          "text": "α > β"
        },
        {
          "id": "C",
          "text": "α = β (tushish burchagi qaytish burchagiga teng)"
        },
        {
          "id": "D",
          "text": "α < β"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Yorug'likning qaytish burchagi tushish burchagiga teng."
    },
    {
      "id": "fizika-254",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning sinish qonuni (Snellius qonuni) qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "tgα = n"
        },
        {
          "id": "B",
          "text": "cosα / cosβ = n"
        },
        {
          "id": "C",
          "text": "sinα · sinβ = n"
        },
        {
          "id": "D",
          "text": "sinα / sinβ = n_2 / n_1"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Sinuslarning nisbati nisbiy sindirish ko'rsatkichiga teng."
    },
    {
      "id": "fizika-255",
      "question": "DTM namunaviy fizika tahlili: Yupqa qavariq linzaning fokus masofasi F, jism masofasi d va tasvir masofasi f orasidagi formula qaysi?",
      "options": [
        {
          "id": "A",
          "text": "1/F = 1/d - 1/f"
        },
        {
          "id": "B",
          "text": "F = d + f"
        },
        {
          "id": "C",
          "text": "1/F = 1/d + 1/f"
        },
        {
          "id": "D",
          "text": "D = d / f"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yupqa linza formulasi: 1/F = 1/d + 1/f."
    },
    {
      "id": "fizika-256",
      "question": "DTM namunaviy fizika tahlili: Linzaning optik kuchi D qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Radian"
        },
        {
          "id": "B",
          "text": "Gradus"
        },
        {
          "id": "C",
          "text": "Metr (m)"
        },
        {
          "id": "D",
          "text": "Dioptriya (dptr)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 dptr = 1 / 1 m."
    },
    {
      "id": "fizika-257",
      "question": "DTM namunaviy fizika tahlili: Oq yorug'likning prizmadan o'tganda spektrga (ranglarga) ajralish hodisasi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "B",
          "text": "Polyarizatsiya"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Nyuton ochgan dispersiya hodisasi."
    },
    {
      "id": "fizika-258",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik to'lqinlarining to'siqlarni aylanib o'tish hodisasi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Refraksiya"
        },
        {
          "id": "B",
          "text": "Interferensiya"
        },
        {
          "id": "C",
          "text": "Diffraksiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqinlarning to'siq ortiga o'tishi diffraksiyadir."
    },
    {
      "id": "fizika-259",
      "question": "DTM namunaviy fizika tahlili: Kogerent to'lqinlarning fazoda qo'shilib, kuchayishi yoki susayishi hodisasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Yutilish"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik interferensiyasi to'lqin xususiyatini isbotlaydi."
    },
    {
      "id": "fizika-260",
      "question": "DTM namunaviy fizika tahlili: Foton energiyasi Plank formulasi bo'yicha qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "E = p · c²"
        },
        {
          "id": "C",
          "text": "E = h / λ²"
        },
        {
          "id": "D",
          "text": "E = h · ν"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: h - Plank doimiysi, ν - chastota."
    },
    {
      "id": "fizika-261",
      "question": "DTM namunaviy fizika tahlili: Plank doimiysi h ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "1.6 · 10⁻¹⁹ C"
        },
        {
          "id": "B",
          "text": "6.63 · 10⁻³⁴ J·s"
        },
        {
          "id": "C",
          "text": "9.11 · 10⁻³¹ kg"
        },
        {
          "id": "D",
          "text": "3 · 10⁸ m/s"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Plank doimiysi h ≈ 6.63·10^-34 J·s."
    },
    {
      "id": "fizika-262",
      "question": "DTM namunaviy fizika tahlili: Fotoeffekt uchun Eynshteyn tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h · ν = A_chiqish + (m · v²) / 2"
        },
        {
          "id": "B",
          "text": "h · ν = A_chiqish"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "A = e · U"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Yutilgan foton energiyasi elektronni chiqarish va unga kinetik energiya berishga sarflanadi."
    },
    {
      "id": "fizika-263",
      "question": "DTM namunaviy fizika tahlili: Atomning sayyorasimon (planetar) modelini kim taklif etgan?",
      "options": [
        {
          "id": "A",
          "text": "J. Tomson"
        },
        {
          "id": "B",
          "text": "D. Mendeleyev"
        },
        {
          "id": "C",
          "text": "Nils Bor"
        },
        {
          "id": "D",
          "text": "Ernest Rezerford (1911-yilda)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Rezerford alfa-zarrachalar sochilishi tajribasidan so'ng yadro modelini yaratdi."
    },
    {
      "id": "fizika-264",
      "question": "DTM namunaviy fizika tahlili: Atom yadrosi qanday zarrachalardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Protonlar va neytronlar (nuklonlar)"
        },
        {
          "id": "B",
          "text": "Faqat neytronlar"
        },
        {
          "id": "C",
          "text": "Protonlar va elektronlar"
        },
        {
          "id": "D",
          "text": "Elektronlar va pozitronlar"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Yadro musbat proton va neytral neytronlardan iborat."
    },
    {
      "id": "fizika-265",
      "question": "DTM namunaviy fizika tahlili: Yadrodagi neytronlar soni N qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = A / Z"
        },
        {
          "id": "B",
          "text": "N = A - Z"
        },
        {
          "id": "C",
          "text": "N = A + Z"
        },
        {
          "id": "D",
          "text": "N = Z - A"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Massaviy son A dan tartib raqam Z ayiriladi."
    },
    {
      "id": "fizika-266",
      "question": "DTM namunaviy fizika tahlili: Yarim yemirilish davri T nima?",
      "options": [
        {
          "id": "A",
          "text": "Dastlabki radioaktiv yadrolar sonining yarmi yemirilishi uchun ketgan vaqt"
        },
        {
          "id": "B",
          "text": "To'liq yemirilish vaqti"
        },
        {
          "id": "C",
          "text": "Yadro massasining 2 barobar ortish vaqti"
        },
        {
          "id": "D",
          "text": "Zarrachalar tezligi 2 barobar kamayishi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: N(t) = N_0 · 2^(-t/T)."
    },
    {
      "id": "fizika-267",
      "question": "DTM namunaviy fizika tahlili: Eynshteynning massa va energiya bog'liqligi formulasini toping:",
      "options": [
        {
          "id": "A",
          "text": "E = k · T"
        },
        {
          "id": "B",
          "text": "E = p² / 2m"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "E = h · ν"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tinchlikdagi massa va energiyaning fundamental bog'liqligi."
    },
    {
      "id": "fizika-268",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlik - Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)."
    },
    {
      "id": "fizika-269",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)'?",
      "options": [
        {
          "id": "A",
          "text": "Tezlanish"
        },
        {
          "id": "B",
          "text": "Impuls"
        },
        {
          "id": "C",
          "text": "Kuch"
        },
        {
          "id": "D",
          "text": "Tezlik"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlikga tegishli."
    },
    {
      "id": "fizika-270",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlanish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlanish - Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)."
    },
    {
      "id": "fizika-271",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)'?",
      "options": [
        {
          "id": "A",
          "text": "Tezlik"
        },
        {
          "id": "B",
          "text": "Kuch"
        },
        {
          "id": "C",
          "text": "Burchak tezlik"
        },
        {
          "id": "D",
          "text": "Tezlanish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlanishga tegishli."
    },
    {
      "id": "fizika-272",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch - Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)."
    },
    {
      "id": "fizika-273",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)'?",
      "options": [
        {
          "id": "A",
          "text": "Bosim"
        },
        {
          "id": "B",
          "text": "Impuls"
        },
        {
          "id": "C",
          "text": "Kuch"
        },
        {
          "id": "D",
          "text": "Massa"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuchga tegishli."
    },
    {
      "id": "fizika-274",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Og'irlik kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Og'irlik kuchi - Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)."
    },
    {
      "id": "fizika-275",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "C",
          "text": "Ishqalanish"
        },
        {
          "id": "D",
          "text": "Og'irlik (vazn)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Og'irlik kuchiga tegishli."
    },
    {
      "id": "fizika-276",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Jismning vazni (P)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Jismning vazni (P) - Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi."
    },
    {
      "id": "fizika-277",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Inersiya"
        },
        {
          "id": "C",
          "text": "Jismning vazni (P)"
        },
        {
          "id": "D",
          "text": "Massa"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Jismning vazni (P)ga tegishli."
    },
    {
      "id": "fizika-278",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Impuls (Harakat miqdori)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Impuls (Harakat miqdori) - Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)."
    },
    {
      "id": "fizika-279",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch impulsi"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Impuls (Harakat miqdori)"
        },
        {
          "id": "D",
          "text": "Quvvat"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Impuls (Harakat miqdori)ga tegishli."
    },
    {
      "id": "fizika-280",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch impulsi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch impulsi - Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)."
    },
    {
      "id": "fizika-281",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch impulsi"
        },
        {
          "id": "B",
          "text": "Mexanik ish"
        },
        {
          "id": "C",
          "text": "Jism impulsi"
        },
        {
          "id": "D",
          "text": "Moment"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch impulsiga tegishli."
    },
    {
      "id": "fizika-282",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kinetik energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kinetik energiya - Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)."
    },
    {
      "id": "fizika-283",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)'?",
      "options": [
        {
          "id": "A",
          "text": "To'liq energiya"
        },
        {
          "id": "B",
          "text": "Potensial energiya"
        },
        {
          "id": "C",
          "text": "Kinetik energiya"
        },
        {
          "id": "D",
          "text": "Ichki energiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kinetik energiyaga tegishli."
    },
    {
      "id": "fizika-284",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Potensial energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Potensial energiya - O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)."
    },
    {
      "id": "fizika-285",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Issiqlik miqdori"
        },
        {
          "id": "B",
          "text": "Potensial energiya"
        },
        {
          "id": "C",
          "text": "Ish"
        },
        {
          "id": "D",
          "text": "Kinetik energiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Potensial energiyaga tegishli."
    },
    {
      "id": "fizika-286",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch momenti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch momenti - Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)."
    },
    {
      "id": "fizika-287",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch impulsi"
        },
        {
          "id": "B",
          "text": "Bosim"
        },
        {
          "id": "C",
          "text": "Kuch momenti"
        },
        {
          "id": "D",
          "text": "Bajarilgan ish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch momentiga tegishli."
    },
    {
      "id": "fizika-288",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Zichlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Zichlik - Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)."
    },
    {
      "id": "fizika-289",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa"
        },
        {
          "id": "B",
          "text": "Bosim"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Hajm"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Zichlikga tegishli."
    },
    {
      "id": "fizika-290",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Gidrostatik bosim' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim - Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)."
    },
    {
      "id": "fizika-291",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Atmosfera bosimi"
        },
        {
          "id": "B",
          "text": "Gidrostatik bosim"
        },
        {
          "id": "C",
          "text": "Dinamik bosim"
        },
        {
          "id": "D",
          "text": "Arximed kuchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Gidrostatik bosimga tegishli."
    },
    {
      "id": "fizika-292",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Arximed kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi - Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)."
    },
    {
      "id": "fizika-293",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Qovushqoqlik kuchi"
        },
        {
          "id": "C",
          "text": "Sirt taranglik"
        },
        {
          "id": "D",
          "text": "Arximed kuchi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Arximed kuchiga tegishli."
    },
    {
      "id": "fizika-294",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Sirt taranglik koeffitsienti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Sirt taranglik koeffitsienti - Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)."
    },
    {
      "id": "fizika-295",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)'?",
      "options": [
        {
          "id": "A",
          "text": "Qovushqoqlik"
        },
        {
          "id": "B",
          "text": "Zichlik"
        },
        {
          "id": "C",
          "text": "Sirt taranglik koeffitsienti"
        },
        {
          "id": "D",
          "text": "Kapillyarlik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Sirt taranglik koeffitsientiga tegishli."
    },
    {
      "id": "fizika-296",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Modda miqdori' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Modda miqdori - Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)."
    },
    {
      "id": "fizika-297",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)'?",
      "options": [
        {
          "id": "A",
          "text": "Modda miqdori"
        },
        {
          "id": "B",
          "text": "Konsentratsiya"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Molyar massa"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Modda miqdoriga tegishli."
    },
    {
      "id": "fizika-298",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Avogadro doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Avogadro doimiysi - 1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)."
    },
    {
      "id": "fizika-299",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)'?",
      "options": [
        {
          "id": "A",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "B",
          "text": "Plank doimiysi"
        },
        {
          "id": "C",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "D",
          "text": "Avogadro doimiysi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Avogadro doimiysiga tegishli."
    },
    {
      "id": "fizika-300",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Bolsman doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Bolsman doimiysi - Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)."
    },
    {
      "id": "fizika-301",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)'?",
      "options": [
        {
          "id": "A",
          "text": "Faradey doimiysi"
        },
        {
          "id": "B",
          "text": "R-doimiy"
        },
        {
          "id": "C",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "D",
          "text": "Avogadro doimiysi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Bolsman doimiysiga tegishli."
    },
    {
      "id": "fizika-302",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Universal gaz doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Universal gaz doimiysi - 1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))."
    },
    {
      "id": "fizika-303",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))'?",
      "options": [
        {
          "id": "A",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "B",
          "text": "Kulon doimiysi"
        },
        {
          "id": "C",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "D",
          "text": "Plank doimiysi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Universal gaz doimiysiga tegishli."
    },
    {
      "id": "fizika-304",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma issiqlik sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma issiqlik sig'imi - 1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))."
    },
    {
      "id": "fizika-305",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma issiqlik sig'imi"
        },
        {
          "id": "B",
          "text": "Solishtirma yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "D",
          "text": "Solishtirma erish issiqligi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma issiqlik sig'imiga tegishli."
    },
    {
      "id": "fizika-306",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma erish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma erish issiqligi - Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)."
    },
    {
      "id": "fizika-307",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "B",
          "text": "Issiqlik sig'imi"
        },
        {
          "id": "C",
          "text": "Solishtirma erish issiqligi"
        },
        {
          "id": "D",
          "text": "Yonish issiqligi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma erish issiqligiga tegishli."
    },
    {
      "id": "fizika-308",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma bug'lanish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma bug'lanish issiqligi - Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)."
    },
    {
      "id": "fizika-309",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma bug'lanish issiqligi"
        },
        {
          "id": "B",
          "text": "Yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Erish issiqligi"
        },
        {
          "id": "D",
          "text": "Kondensatsiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma bug'lanish issiqligiga tegishli."
    },
    {
      "id": "fizika-310",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Ichki energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ichki energiya - Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi."
    },
    {
      "id": "fizika-311",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi'?",
      "options": [
        {
          "id": "A",
          "text": "Entalpiya"
        },
        {
          "id": "B",
          "text": "Mexanik energiya"
        },
        {
          "id": "C",
          "text": "Ichki energiya"
        },
        {
          "id": "D",
          "text": "Kimyoviy energiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Ichki energiyaga tegishli."
    },
    {
      "id": "fizika-312",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr zaryadi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr zaryadi - Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)."
    },
    {
      "id": "fizika-313",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi"
        },
        {
          "id": "B",
          "text": "Elektr zaryadi"
        },
        {
          "id": "C",
          "text": "Sig'im"
        },
        {
          "id": "D",
          "text": "Kuchlanish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr zaryadiga tegishli."
    },
    {
      "id": "fizika-314",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr sig'imi - O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)."
    },
    {
      "id": "fizika-315",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr sig'imi"
        },
        {
          "id": "B",
          "text": "O'tkazuvchanlik"
        },
        {
          "id": "C",
          "text": "Qarshilik"
        },
        {
          "id": "D",
          "text": "Induktivlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr sig'imiga tegishli."
    },
    {
      "id": "fizika-316",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr kuchlanish (potensiallar ayirmasi)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr kuchlanish (potensiallar ayirmasi) - Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)."
    },
    {
      "id": "fizika-317",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuchlanganlik"
        },
        {
          "id": "B",
          "text": "Elektr kuchlanish (potensiallar ayirmasi)"
        },
        {
          "id": "C",
          "text": "Tok kuchi"
        },
        {
          "id": "D",
          "text": "EYK"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr kuchlanish (potensiallar ayirmasi)ga tegishli."
    },
    {
      "id": "fizika-318",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr yurituvchi kuch (EYK)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr yurituvchi kuch (EYK) - Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)."
    },
    {
      "id": "fizika-319",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi"
        },
        {
          "id": "B",
          "text": "Potensial"
        },
        {
          "id": "C",
          "text": "Kuchlanish"
        },
        {
          "id": "D",
          "text": "Elektr yurituvchi kuch (EYK)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr yurituvchi kuch (EYK)ga tegishli."
    },
    {
      "id": "fizika-320",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma qarshilik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma qarshilik - Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)."
    },
    {
      "id": "fizika-321",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma qarshilik"
        },
        {
          "id": "B",
          "text": "Elektr sig'im"
        },
        {
          "id": "C",
          "text": "Induktivlik"
        },
        {
          "id": "D",
          "text": "O'tkazuvchanlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma qarshilikga tegishli."
    },
    {
      "id": "fizika-322",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr tokining quvvati' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr tokining quvvati - Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)."
    },
    {
      "id": "fizika-323",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr ishi"
        },
        {
          "id": "B",
          "text": "EYK"
        },
        {
          "id": "C",
          "text": "Tok zichligi"
        },
        {
          "id": "D",
          "text": "Elektr tokining quvvati"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr tokining quvvatiga tegishli."
    },
    {
      "id": "fizika-324",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Lorens kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi - Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-325",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Lorens kuchi"
        },
        {
          "id": "B",
          "text": "Kulon kuchi"
        },
        {
          "id": "C",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Lorens kuchiga tegishli."
    },
    {
      "id": "fizika-326",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Amper kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Amper kuchi - Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-327",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Lorens kuchi"
        },
        {
          "id": "B",
          "text": "Amper kuchi"
        },
        {
          "id": "C",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "D",
          "text": "Kulon kuchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Amper kuchiga tegishli."
    },
    {
      "id": "fizika-328",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'O'zinduksiya hodisasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: O'zinduksiya hodisasi - Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi."
    },
    {
      "id": "fizika-329",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "O'zinduksiya hodisasi"
        },
        {
          "id": "B",
          "text": "Gistorezisi"
        },
        {
          "id": "C",
          "text": "Fotoeffekt"
        },
        {
          "id": "D",
          "text": "O'zaro induksiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif O'zinduksiya hodisasiga tegishli."
    },
    {
      "id": "fizika-330",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Transformator' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Transformator - O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma."
    },
    {
      "id": "fizika-331",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Transformator"
        },
        {
          "id": "B",
          "text": "Generator"
        },
        {
          "id": "C",
          "text": "Dvigatel"
        },
        {
          "id": "D",
          "text": "Kondensator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Transformatorga tegishli."
    },
    {
      "id": "fizika-332",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish davri' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish davri - Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)."
    },
    {
      "id": "fizika-333",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)'?",
      "options": [
        {
          "id": "A",
          "text": "Amplituda"
        },
        {
          "id": "B",
          "text": "Faza"
        },
        {
          "id": "C",
          "text": "Tebranish davri"
        },
        {
          "id": "D",
          "text": "Chastota"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish davriga tegishli."
    },
    {
      "id": "fizika-334",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish chastotasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish chastotasi - Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)."
    },
    {
      "id": "fizika-335",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)'?",
      "options": [
        {
          "id": "A",
          "text": "To'lqin soni"
        },
        {
          "id": "B",
          "text": "Amplituda"
        },
        {
          "id": "C",
          "text": "Tebranish chastotasi"
        },
        {
          "id": "D",
          "text": "Davr"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish chastotasiga tegishli."
    },
    {
      "id": "fizika-336",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin interferensiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin interferensiyasi - Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi."
    },
    {
      "id": "fizika-337",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "To'lqin interferensiyasi"
        },
        {
          "id": "B",
          "text": "Yutilish"
        },
        {
          "id": "C",
          "text": "Diffraksiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin interferensiyasiga tegishli."
    },
    {
      "id": "fizika-338",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin diffraksiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin diffraksiyasi - To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi."
    },
    {
      "id": "fizika-339",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "To'lqin diffraksiyasi"
        },
        {
          "id": "B",
          "text": "Interferensiya"
        },
        {
          "id": "C",
          "text": "Polyarizatsiya"
        },
        {
          "id": "D",
          "text": "Sinish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin diffraksiyasiga tegishli."
    },
    {
      "id": "fizika-340",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'lik dispersiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik dispersiyasi - Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi."
    },
    {
      "id": "fizika-341",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi'?",
      "options": [
        {
          "id": "A",
          "text": "Interferensiya"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Yutilish"
        },
        {
          "id": "D",
          "text": "Yorug'lik dispersiyasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'lik dispersiyasiga tegishli."
    },
    {
      "id": "fizika-342",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'liq ichki qaytish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: To'liq ichki qaytish - Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi."
    },
    {
      "id": "fizika-343",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi'?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Dispersiya"
        },
        {
          "id": "C",
          "text": "To'liq ichki qaytish"
        },
        {
          "id": "D",
          "text": "Sinish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'liq ichki qaytishga tegishli."
    },
    {
      "id": "fizika-344",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Fotoeffekt' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Fotoeffekt - Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi."
    },
    {
      "id": "fizika-345",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi'?",
      "options": [
        {
          "id": "A",
          "text": "Termoemissiya"
        },
        {
          "id": "B",
          "text": "Fotoeffekt"
        },
        {
          "id": "C",
          "text": "Lyuminessensiya"
        },
        {
          "id": "D",
          "text": "Rentgen nurlanishi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Fotoeffektga tegishli."
    },
    {
      "id": "fizika-346",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'likning qizil chegarasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'likning qizil chegarasi - Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)."
    },
    {
      "id": "fizika-347",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)'?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'likning qizil chegarasi"
        },
        {
          "id": "B",
          "text": "Spektr chegarasi"
        },
        {
          "id": "C",
          "text": "Ko'rinish chegarasi"
        },
        {
          "id": "D",
          "text": "Diffraksiya burchagi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'likning qizil chegarasiga tegishli."
    },
    {
      "id": "fizika-348",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yadro bog'lanish energiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yadro bog'lanish energiyasi - Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)."
    },
    {
      "id": "fizika-349",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)'?",
      "options": [
        {
          "id": "A",
          "text": "Yadro bog'lanish energiyasi"
        },
        {
          "id": "B",
          "text": "Ionlanish energiyasi"
        },
        {
          "id": "C",
          "text": "Aktivlanish energiyasi"
        },
        {
          "id": "D",
          "text": "Chiqish ishi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yadro bog'lanish energiyasiga tegishli."
    },
    {
      "id": "fizika-350",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Massa defekti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Massa defekti - Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)."
    },
    {
      "id": "fizika-351",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa defekti"
        },
        {
          "id": "B",
          "text": "Zichlik defekti"
        },
        {
          "id": "C",
          "text": "Relativistik massa"
        },
        {
          "id": "D",
          "text": "Massa nisbati"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Massa defektiga tegishli."
    },
    {
      "id": "fizika-352",
      "question": "DTM namunaviy fizika tahlili: Moddiy nuqta nima?",
      "options": [
        {
          "id": "A",
          "text": "Harakat sharoitida o'lchamlari hisobga olinmasa ham bo'ladigan jism"
        },
        {
          "id": "B",
          "text": "Qo'zg'almas jism"
        },
        {
          "id": "C",
          "text": "Hajmi nolga teng jism"
        },
        {
          "id": "D",
          "text": "Faqat mikrozarracha"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: O'lchamlari ko'rilayotgan masofalarga nisbatan juda kichik bo'lgan jism."
    },
    {
      "id": "fizika-353",
      "question": "DTM namunaviy fizika tahlili: Sanoq sistemasi qanday elementlardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Sanoq jismi, u bilan bog'langan koordinatalar sistemasi va vaqt o'lchagich (soat)"
        },
        {
          "id": "B",
          "text": "Faqat harakat trayektoriyasi"
        },
        {
          "id": "C",
          "text": "Faqat chizg'ich va soat"
        },
        {
          "id": "D",
          "text": "Faqat Yer sathi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Sanoq sistemasi = Sanoq jismi + Koordinata sistemasi + Soat."
    },
    {
      "id": "fizika-354",
      "question": "DTM namunaviy fizika tahlili: Trayektoriya nima?",
      "options": [
        {
          "id": "A",
          "text": "Boshlang'ich va oxirgi nuqtalarni tutashtiruvchi vektor"
        },
        {
          "id": "B",
          "text": "Vaqt birligi"
        },
        {
          "id": "C",
          "text": "Harakatlanayotgan jism qoldirgan yoki chizgan chiziq"
        },
        {
          "id": "D",
          "text": "Bosib o'tilgan yo'l uzunligi"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Fazoda jism harakatlangan iz/chiziq trayektoriya deyiladi."
    },
    {
      "id": "fizika-355",
      "question": "DTM namunaviy fizika tahlili: Ko'chish nima?",
      "options": [
        {
          "id": "A",
          "text": "Harakatning boshlang'ich va oxirgi nuqtalarini tutashtiruvchi yo'nalishga ega to'g'ri chiziq kesmasi (vektor)"
        },
        {
          "id": "B",
          "text": "Trayektoriyaning uzunligi"
        },
        {
          "id": "C",
          "text": "Bosib o'tilgan yo'l"
        },
        {
          "id": "D",
          "text": "Faqat tezlik vektori"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chish vektor kattalik, yo'l esa skalyar kattalik."
    },
    {
      "id": "fizika-356",
      "question": "DTM namunaviy fizika tahlili: Teng o'zgaruvchan harakatda tezlanish qanday kattalik hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Nolga teng"
        },
        {
          "id": "B",
          "text": "Vaqt o'tishi bilan o'zgarmas (a = const)"
        },
        {
          "id": "C",
          "text": "Doimiy ortib boruvchi"
        },
        {
          "id": "D",
          "text": "Davriy tebranuvchi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Teng o'zgaruvchan harakatda a = const bo'ladi."
    },
    {
      "id": "fizika-357",
      "question": "DTM namunaviy fizika tahlili: Boshlang'ich tezliksiz erkin tushayotgan jismning t vaqtdagi tushish balandligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h = g · t"
        },
        {
          "id": "B",
          "text": "h = (g · t²) / 2"
        },
        {
          "id": "C",
          "text": "h = v · t"
        },
        {
          "id": "D",
          "text": "h = 2g / t²"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlang'ich tezlik v0 = 0 bo'lganda h = gt²/2."
    },
    {
      "id": "fizika-358",
      "question": "DTM namunaviy fizika tahlili: Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Aylana"
        },
        {
          "id": "B",
          "text": "Parabola"
        },
        {
          "id": "C",
          "text": "To'g'ri chiziq"
        },
        {
          "id": "D",
          "text": "Giperbola"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Havoning qarshiligi hisobga olinmaganda trayektoriya paraboladir."
    },
    {
      "id": "fizika-359",
      "question": "DTM namunaviy fizika tahlili: Aylanma harakatda markazga intilma tezlanish formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "a = ω / R"
        },
        {
          "id": "B",
          "text": "a = v · R"
        },
        {
          "id": "C",
          "text": "a = v² / R = ω² · R"
        },
        {
          "id": "D",
          "text": "a = v / t"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Markazga intilma tezlanish a_m = v²/R."
    },
    {
      "id": "fizika-360",
      "question": "DTM namunaviy fizika tahlili: Birinchi kosmik tezlikning Yer uchun taxminiy qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "7.9 km/s"
        },
        {
          "id": "B",
          "text": "300 000 km/s"
        },
        {
          "id": "C",
          "text": "16.7 km/s"
        },
        {
          "id": "D",
          "text": "11.2 km/s"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yer atrofida pastki orbitada aylanish tezligi v1 ≈ 7.9 km/s."
    },
    {
      "id": "fizika-361",
      "question": "DTM namunaviy fizika tahlili: Ikkinchi kosmik tezlik (parabolik tezlik) Yer uchun qanchaga teng?",
      "options": [
        {
          "id": "A",
          "text": "16.7 km/s"
        },
        {
          "id": "B",
          "text": "11.2 km/s"
        },
        {
          "id": "C",
          "text": "9.8 km/s"
        },
        {
          "id": "D",
          "text": "7.9 km/s"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Yer gravitatsiyasini yengib chiqish tezligi v2 ≈ 11.2 km/s."
    },
    {
      "id": "fizika-362",
      "question": "DTM namunaviy fizika tahlili: Uchinchi kosmik tezlik Yer uchun qancha?",
      "options": [
        {
          "id": "A",
          "text": "7.9 km/s"
        },
        {
          "id": "B",
          "text": "11.2 km/s"
        },
        {
          "id": "C",
          "text": "42 km/s"
        },
        {
          "id": "D",
          "text": "16.7 km/s"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh sistemasini tark etish tezligi v3 ≈ 16.7 km/s."
    },
    {
      "id": "fizika-363",
      "question": "DTM namunaviy fizika tahlili: Og'irlik markazi nima?",
      "options": [
        {
          "id": "A",
          "text": "Jismning barcha qismlariga ta'sir qiluvchi og'irlik kuchlarining teng ta'sir etuvchisi qo'yilgan nuqta"
        },
        {
          "id": "B",
          "text": "Massa eng ko'p to'plangan nuqta"
        },
        {
          "id": "C",
          "text": "Jismning geometrik o'rtasi"
        },
        {
          "id": "D",
          "text": "Tayanch nuqtasi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Og'irlik kuchining qo'yilish nuqtasi."
    },
    {
      "id": "fizika-364",
      "question": "DTM namunaviy fizika tahlili: Richagning muvozanat sharti qanday ifodalanadi (Arximed qoidasi)?",
      "options": [
        {
          "id": "A",
          "text": "F1 + F2 = l1 + l2"
        },
        {
          "id": "B",
          "text": "F1 · l1 = F2 · l2"
        },
        {
          "id": "C",
          "text": "F1 · F2 = l1 · l2"
        },
        {
          "id": "D",
          "text": "F1 / l1 = F2 / l2"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlar momentlari o'zaro teng bo'lishi kerak."
    },
    {
      "id": "fizika-365",
      "question": "DTM namunaviy fizika tahlili: Ko'chmas blok qanday mexanik yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "Ishdan 2 marta yutuq beradi"
        },
        {
          "id": "B",
          "text": "Kuchdan 2 marta yutuq beradi"
        },
        {
          "id": "C",
          "text": "Tezlikdan yutuq beradi"
        },
        {
          "id": "D",
          "text": "Kuchdan yutuq bermaydi, faqat kuch yo'nalishini o'zgartiradi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chmas blok kuchdan yutuq bermaydi."
    },
    {
      "id": "fizika-366",
      "question": "DTM namunaviy fizika tahlili: Ko'char blok kuchdan necha marta yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "3 marta"
        },
        {
          "id": "B",
          "text": "2 marta yutuq beradi"
        },
        {
          "id": "C",
          "text": "Kuchdan yutuq bermaydi"
        },
        {
          "id": "D",
          "text": "4 marta"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'char blok kuchdan 2 barobar yutuq beradi (masofada 2 marta yutqazadi)."
    },
    {
      "id": "fizika-367",
      "question": "DTM namunaviy fizika tahlili: Mexanikaning 'oltin qoidasi' qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Har doim energiyada yutuq bo'ladi"
        },
        {
          "id": "B",
          "text": "Faqat tezlikdan yutish mumkin"
        },
        {
          "id": "C",
          "text": "Kuchdan necha marta yutsak, masofada shuncha yutqazamiz (ishdan yutuq olinmaydi)"
        },
        {
          "id": "D",
          "text": "Ishdan 2 marta yutish mumkin"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Oddiy mexanizmlar ishdan yutuq bermaydi."
    },
    {
      "id": "fizika-368",
      "question": "DTM namunaviy fizika tahlili: Ideal gaz nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat vodorod gazi"
        },
        {
          "id": "B",
          "text": "Suyuqlikka aylanmaydigan gaz"
        },
        {
          "id": "C",
          "text": "Molekulalari o'lchamlari hisobga olinmaydigan, to'qnashuvdan boshqa vaqtda o'zaro ta'sirlashmaydigan nazariy model"
        },
        {
          "id": "D",
          "text": "Xona haroratidagi har qanday gaz"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Fizikada qo'llanadigan ideallashtirilgan model."
    },
    {
      "id": "fizika-369",
      "question": "DTM namunaviy fizika tahlili: Termodinamik harorat T va Selsiy harorati t o'rtasidagi bog'lanish qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = t - 273.15"
        },
        {
          "id": "B",
          "text": "T = t · 1.8"
        },
        {
          "id": "C",
          "text": "T = t + 273.15"
        },
        {
          "id": "D",
          "text": "T = 273.15 / t"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Kelvin shkalasi T = t + 273.15 K."
    },
    {
      "id": "fizika-370",
      "question": "DTM namunaviy fizika tahlili: Diffuziya hodisasi nimani isbotlaydi?",
      "options": [
        {
          "id": "A",
          "text": "Molekulalarning bo'linishini"
        },
        {
          "id": "B",
          "text": "Modda molekulalarining uzluksiz va tartibsiz (xaotik) harakatini"
        },
        {
          "id": "C",
          "text": "Gravitatsiya ta'sirini"
        },
        {
          "id": "D",
          "text": "Jismning qattiqligini"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Moddalarning o'z-o'zidan aralashib ketishi ularning harakatdaligini ko'rsatadi."
    },
    {
      "id": "fizika-371",
      "question": "DTM namunaviy fizika tahlili: Broun harakati nima?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlik yoki gazda muallaq turgan mikroskopik zarrachalarning tartibsiz harakati"
        },
        {
          "id": "B",
          "text": "Faqat tirik bakteriyalar harakati"
        },
        {
          "id": "C",
          "text": "Konveksiya oqimi"
        },
        {
          "id": "D",
          "text": "Molekulalarning aylanishi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Suyuqlik molekulalarining zarbalari oqibatida yuz beradi."
    },
    {
      "id": "fizika-372",
      "question": "DTM namunaviy fizika tahlili: Suyuqlikning bug'lanish tezligi nimalarga bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlik turiga, sirt yuzasiga, haroratga va shamolga"
        },
        {
          "id": "B",
          "text": "Faqat havo bosimiga"
        },
        {
          "id": "C",
          "text": "Faqat suyuqlik massasiga"
        },
        {
          "id": "D",
          "text": "Faqat idishning rangiga"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Sirt yuzi, harorat va ochiq havo oqimi bug'lanishni tezlashtiradi."
    },
    {
      "id": "fizika-373",
      "question": "DTM namunaviy fizika tahlili: To'yingan bug' nima?",
      "options": [
        {
          "id": "A",
          "text": "Qaynayotgan bug'"
        },
        {
          "id": "B",
          "text": "Qizdirilgan quruq bug'"
        },
        {
          "id": "C",
          "text": "O'z suyuqligi bilan dinamik muvozanatda bo'lgan bug'"
        },
        {
          "id": "D",
          "text": "Zichligi eng kichik bug'"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Vaqt birligida bug'lanayotgan va kondensatsiyalanayotgan molekulalar soni tenglashadi."
    },
    {
      "id": "fizika-374",
      "question": "DTM namunaviy fizika tahlili: Qaynash nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat sirtqi bug'lanish"
        },
        {
          "id": "B",
          "text": "Suyuqlikning nafaqat sirtidan, balki butun hajmi bo'ylab pufakchalar hosil qilib jadallik bilan bug'lanishi"
        },
        {
          "id": "C",
          "text": "Suyuqlik erishi"
        },
        {
          "id": "D",
          "text": "Zichlik ortishi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: To'yingan bug' bosimi tashqi bosimga tenglashganda qaynash boshlanadi."
    },
    {
      "id": "fizika-375",
      "question": "DTM namunaviy fizika tahlili: Qattiq jismning suyuqlikka aylanish jarayoni nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Sublimatsiya"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Kristallanish"
        },
        {
          "id": "D",
          "text": "Kondensatsiya"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Erish jarayonida harorat o'zgarmaydi."
    },
    {
      "id": "fizika-376",
      "question": "DTM namunaviy fizika tahlili: Moddaning to'g'ridan-to'g'ri qattiq holatdan gaz holatiga o'tishi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Sublimatsiya"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Qaynash"
        },
        {
          "id": "D",
          "text": "Kondensatsiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Masalan, yod yoki quruq muzning to'g'ridan-to'g'ri gazga aylanishi."
    },
    {
      "id": "fizika-377",
      "question": "DTM namunaviy fizika tahlili: Gazning to'g'ridan-to'g'ri qattiq holatga o'tishi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ionlanish"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Desublimatsiya"
        },
        {
          "id": "D",
          "text": "Bug'lanish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Sovuqda derazada qirov hosil bo'lishi desublimatsiyadir."
    },
    {
      "id": "fizika-378",
      "question": "DTM namunaviy fizika tahlili: Elektroskop qanday asbob?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchini o'lchovchi asbob"
        },
        {
          "id": "B",
          "text": "Jismning elektrlanganganligini aniqlovchi asbob"
        },
        {
          "id": "C",
          "text": "Kuchlanishni oshiruvchi asbob"
        },
        {
          "id": "D",
          "text": "Qarshilikni o'lchovchi asbob"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Zaryad bor-yo'qligini yaproqchalarning ochilishidan aniqlaydi."
    },
    {
      "id": "fizika-379",
      "question": "DTM namunaviy fizika tahlili: Metallarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Musbat ionlar"
        },
        {
          "id": "B",
          "text": "Manfiy ionlar"
        },
        {
          "id": "C",
          "text": "Erkin elektronlar"
        },
        {
          "id": "D",
          "text": "Kationlar va anionlar"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Metallarda tok o'tkazuvchilar erkin elektronlardir."
    },
    {
      "id": "fizika-380",
      "question": "DTM namunaviy fizika tahlili: Elektrolitlarda (suyuqliklarda) elektr tokini nimalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat neytronlar"
        },
        {
          "id": "B",
          "text": "Musbat va manfiy ionlar"
        },
        {
          "id": "C",
          "text": "Faqat musbat protonlar"
        },
        {
          "id": "D",
          "text": "Faqat erkin elektronlar"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Elektrolitik dissotsiatsiyada hosil bo'lgan ionlar."
    },
    {
      "id": "fizika-381",
      "question": "DTM namunaviy fizika tahlili: Gazlarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat pozitronlar"
        },
        {
          "id": "B",
          "text": "Faqat elektronlar"
        },
        {
          "id": "C",
          "text": "Elektronlar va musbat hamda manfiy ionlar"
        },
        {
          "id": "D",
          "text": "Faqat neytronlar"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Gaz razryadida ionlar va elektronlar qatnashadi."
    },
    {
      "id": "fizika-382",
      "question": "DTM namunaviy fizika tahlili: Vakuumda elektr toki hosil qilish uchun nima zarur?",
      "options": [
        {
          "id": "A",
          "text": "Elektrolit solish"
        },
        {
          "id": "B",
          "text": "Termoelektron emissiya (qizdirilgan katoddan elektronlar ajralishi)"
        },
        {
          "id": "C",
          "text": "Magnit maydon"
        },
        {
          "id": "D",
          "text": "Yuqori bosim"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Vakuumda termoelektron emissiya orqali tok o'tadi."
    },
    {
      "id": "fizika-383",
      "question": "DTM namunaviy fizika tahlili: Yarimo'tkazgichlarda o'tkazuvchanlik qanday turlarga bo'linadi?",
      "options": [
        {
          "id": "A",
          "text": "Xususiy (elektron-teshikli) va aralashmali (n-tur va p-tur)"
        },
        {
          "id": "B",
          "text": "Faqat ionli"
        },
        {
          "id": "C",
          "text": "Faqat protonli"
        },
        {
          "id": "D",
          "text": "Faqat neytronli"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Donor aralashma n-tur, akseptor aralashma p-tur hosil qiladi."
    },
    {
      "id": "fizika-384",
      "question": "DTM namunaviy fizika tahlili: O'ta o'tkazuvchanlik hodisasini 1911-yilda simobda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Gens Ersted"
        },
        {
          "id": "B",
          "text": "Nikola Tesla"
        },
        {
          "id": "C",
          "text": "Tomas Edison"
        },
        {
          "id": "D",
          "text": "Kammerling-Onnes (4.2 K haroratda)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Kritik haroratda elektr qarshiligining keskin nolga tushishi."
    },
    {
      "id": "fizika-385",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik nuri nima?",
      "options": [
        {
          "id": "A",
          "text": "Optik linza"
        },
        {
          "id": "B",
          "text": "Fotonlar massasi"
        },
        {
          "id": "C",
          "text": "Yorug'lik energiyasi tarqalayotgan yo'nalishni ko'rsatuvchi geometrik chiziq"
        },
        {
          "id": "D",
          "text": "Yorug'lik tezligi"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Geometrik optikada nur tushunchasi."
    },
    {
      "id": "fizika-386",
      "question": "DTM namunaviy fizika tahlili: Yassi ko'zguda hosil bo'lgan tasvir qanday xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Haqiqiy va to'ntarilgan"
        },
        {
          "id": "B",
          "text": "Kichraytirilgan"
        },
        {
          "id": "C",
          "text": "Haqiqiy va kattalashgan"
        },
        {
          "id": "D",
          "text": "Mavhum, to'g'ri va jism o'lchamiga teng"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Yassi ko'zgu doim mavhum va teng tasvir beradi."
    },
    {
      "id": "fizika-387",
      "question": "DTM namunaviy fizika tahlili: Ko'z gavhari qanday optik xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Ikki tomoni qavariq yig'uvchi linza"
        },
        {
          "id": "B",
          "text": "Prizma"
        },
        {
          "id": "C",
          "text": "Yassi plastinka"
        },
        {
          "id": "D",
          "text": "Sochuvchi linza"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'z gavhari yig'uvchi egiluvchan tirik linzadir."
    },
    {
      "id": "fizika-388",
      "question": "DTM namunaviy fizika tahlili: Yaqindan ko'ruvchilik (miopiya) qanday ko'zoynak linzasi bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Rangli filtrlar bilan"
        },
        {
          "id": "B",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "C",
          "text": "Silindrik linzalar bilan"
        },
        {
          "id": "D",
          "text": "Sochuvchi (botiq) linzalar bilan"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Miopiyada tasvir to'r parda oldiga tushadi, uni sochuvchi linza to'g'rilaydi."
    },
    {
      "id": "fizika-389",
      "question": "DTM namunaviy fizika tahlili: Uzoqdan ko'ruvchilik (gipermetropiya) qanday linzali ko'zoynak bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yassi shisha bilan"
        },
        {
          "id": "B",
          "text": "Qorong'i filtr bilan"
        },
        {
          "id": "C",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "D",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Gipermetropiyada tasvir to'r parda orqasiga o'tib ketadi, yig'uvchi linza kerak."
    },
    {
      "id": "fizika-390",
      "question": "DTM namunaviy fizika tahlili: Ko'rinadigan yorug'lik to'lqin uzunliklari oralig'i taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "1 mm dan 1 sm gacha"
        },
        {
          "id": "B",
          "text": "10 nm dan 100 nm gacha"
        },
        {
          "id": "C",
          "text": "1 km dan 10 km gacha"
        },
        {
          "id": "D",
          "text": "380 nm dan 780 nm gacha"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Binafsha rangdan (380 nm) qizil ranggacha (760-780 nm)."
    },
    {
      "id": "fizika-391",
      "question": "DTM namunaviy fizika tahlili: Rentgen nurlarining to'lqin uzunligi qanday?",
      "options": [
        {
          "id": "A",
          "text": "Infraqizildan uzun"
        },
        {
          "id": "B",
          "text": "Radioto'lqinlar bilan bir xil"
        },
        {
          "id": "C",
          "text": "Ko'rinadigan yorug'likdan uzun"
        },
        {
          "id": "D",
          "text": "Ultrabinafsha va gamma-nurlar oralig'idagi juda qisqa to'lqinlar (0.01 - 10 nm)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Rentgen nurlari yuqori o'tuvchanlik qobiliyatiga ega."
    },
    {
      "id": "fizika-392",
      "question": "DTM namunaviy fizika tahlili: Radioaktiv nurlanishning qaysi turi eng katta kirib borish qobiliyatiga ega?",
      "options": [
        {
          "id": "A",
          "text": "Beta (β) nurlanish (elektronlar)"
        },
        {
          "id": "B",
          "text": "Alfa (α) nurlanish (geliy yadrolari)"
        },
        {
          "id": "C",
          "text": "Gamma (γ) nurlanish (fotonlar oqimi)"
        },
        {
          "id": "D",
          "text": "Ultrabinafsha"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Gamma nurlari hatto qalin qo'rg'oshin qatlamidan ham o'tadi."
    },
    {
      "id": "fizika-393",
      "question": "DTM namunaviy fizika tahlili: Alfa (α) zarracha o'zi nima?",
      "options": [
        {
          "id": "A",
          "text": "Foton"
        },
        {
          "id": "B",
          "text": "Geliy atomi yadrosi (ikkita proton va ikkita neytron: ⁴₂He)"
        },
        {
          "id": "C",
          "text": "Neytron"
        },
        {
          "id": "D",
          "text": "Tezkor elektron"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Alfa nurlanish geliy yadrolari oqimidir."
    },
    {
      "id": "fizika-394",
      "question": "DTM namunaviy fizika tahlili: Beta (β⁻) nurlanish qanday zarrachalar oqimidan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Geliy yadrolari"
        },
        {
          "id": "B",
          "text": "Pozitronlar"
        },
        {
          "id": "C",
          "text": "Tez harakatlanuvchi elektronlar"
        },
        {
          "id": "D",
          "text": "Protonlar"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Beta-manfiy yemirilishda yadrodan elektron uchib chiqadi."
    },
    {
      "id": "fizika-395",
      "question": "DTM namunaviy fizika tahlili: Yadroning zanjirli bo'linish reaksiyasida qaysi og'ir izotop keng qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "Temir-56"
        },
        {
          "id": "B",
          "text": "Uran-235 (²³⁵U)"
        },
        {
          "id": "C",
          "text": "Vodorod-1"
        },
        {
          "id": "D",
          "text": "Uran-238"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Uran-235 sekin neytronlar ta'sirida bo'linadi va energiya ajratadi."
    },
    {
      "id": "fizika-396",
      "question": "DTM namunaviy fizika tahlili: Termoyadro sintez reaksiyasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Kimyoviy yonish"
        },
        {
          "id": "B",
          "text": "Og'ir yadrolarning bo'linishi"
        },
        {
          "id": "C",
          "text": "Faqat alfa-yemirilish"
        },
        {
          "id": "D",
          "text": "Yengil yadrolarning (vodorod izotoplari) o'ta yuqori haroratda birikib og'irroq yadro hosil qilishi"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh va yulduzlar energiyasining manbai termoyadro reaksiyasidir."
    },
    {
      "id": "fizika-397",
      "question": "DTM namunaviy fizika tahlili: Quyosh sirtida energiya qaysi jarayon hisobiga ajraladi?",
      "options": [
        {
          "id": "A",
          "text": "Ko'mir yonishi"
        },
        {
          "id": "B",
          "text": "Uran bo'linishi"
        },
        {
          "id": "C",
          "text": "Gravitatsion qisilish"
        },
        {
          "id": "D",
          "text": "Termoyadro sintezi (vodorodning geliyga aylanishi)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Quyosh yadrosidagi termoyadro reaksiyasi."
    },
    {
      "id": "fizika-398",
      "question": "DTM namunaviy fizika tahlili: Fizikada Plank gipotezasi nimadan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Elektronlar qo'zg'almasdir"
        },
        {
          "id": "B",
          "text": "Yorug'lik faqat to'lqindir"
        },
        {
          "id": "C",
          "text": "Atomlar yorug'likni uzluksiz emas, balki diskret porsiyalar (kvantlar) tarzida chiqaradi va yutadi"
        },
        {
          "id": "D",
          "text": "Energiya doim o'zgaruvchan"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: 1900-yilda Maks Plank kvant nazariyasiga asos soldi."
    },
    {
      "id": "fizika-399",
      "question": "DTM namunaviy fizika tahlili: Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · a"
        },
        {
          "id": "B",
          "text": "P = m · g"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "A = F · s"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Jismga ta'sir etuvchi kuch uning massasi va tezlanishi ko'paytmasiga teng."
    },
    {
      "id": "fizika-400",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning vakuumdagi tezligi taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "30 000 km/s"
        },
        {
          "id": "B",
          "text": "3 000 km/s"
        },
        {
          "id": "C",
          "text": "300 000 km/s"
        },
        {
          "id": "D",
          "text": "3 000 000 km/s"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: c ≈ 3·10^8 m/s = 300 000 km/s."
    },
    {
      "id": "fizika-401",
      "question": "DTM namunaviy fizika tahlili: Normal sharoitda suv qaysi haroratda qaynaydi?",
      "options": [
        {
          "id": "A",
          "text": "212 °C"
        },
        {
          "id": "B",
          "text": "100 °C"
        },
        {
          "id": "C",
          "text": "120 °C"
        },
        {
          "id": "D",
          "text": "0 °C"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Normal atmosfera bosimida suv 100 °C da qaynaydi."
    },
    {
      "id": "fizika-402",
      "question": "DTM namunaviy fizika tahlili: Elektr tok kuchining o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Volt"
        },
        {
          "id": "B",
          "text": "Amper"
        },
        {
          "id": "C",
          "text": "Om"
        },
        {
          "id": "D",
          "text": "Vatt"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Xalqaro birliklar sistemasida tok kuchi Amperda o'lchanadi."
    },
    {
      "id": "fizika-403",
      "question": "DTM namunaviy fizika tahlili: Tezlanishning SI sistemasidagi asosiy o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "m/s²"
        },
        {
          "id": "B",
          "text": "km/soat"
        },
        {
          "id": "C",
          "text": "m/s"
        },
        {
          "id": "D",
          "text": "N/kg"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Tezlanish birligi metr taqsim soniya kvadratidir."
    },
    {
      "id": "fizika-404",
      "question": "DTM namunaviy fizika tahlili: To'g'ri chiziqli tekis harakatda tezlik qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Nolga teng bo'ladi"
        },
        {
          "id": "B",
          "text": "Kamayadi"
        },
        {
          "id": "C",
          "text": "O'zgarmas qoladi (v = const)"
        },
        {
          "id": "D",
          "text": "Vaqtga to'g'ri mutanosib ortadi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tekis harakatda tezlik yo'nalishi va qiymati bo'yicha o'zgarmaydi."
    },
    {
      "id": "fizika-405",
      "question": "DTM namunaviy fizika tahlili: Erkin tushish tezlanishining Yer sirtidagi o'rtacha qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "8.9 m/s²"
        },
        {
          "id": "B",
          "text": "6.67 m/s²"
        },
        {
          "id": "C",
          "text": "9.8 m/s²"
        },
        {
          "id": "D",
          "text": "10.5 m/s²"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: g ≈ 9.8 m/s² (amaliy hisoblashlarda ko'pincha 10 olinadi)."
    },
    {
      "id": "fizika-406",
      "question": "DTM namunaviy fizika tahlili: Burchak tezlik va aylanish davri o'rtasidagi bog'liqlik formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "ω = T / 2π"
        },
        {
          "id": "B",
          "text": "ω = 2π / T"
        },
        {
          "id": "C",
          "text": "ω = v · R"
        },
        {
          "id": "D",
          "text": "ω = 2π · T"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Burchak tezlik ω = 2π/T = 2πν ga teng."
    },
    {
      "id": "fizika-407",
      "question": "DTM namunaviy fizika tahlili: Inersiya qonuni Nyutonning nechanchi qonuni hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Ikkinchi qonuni"
        },
        {
          "id": "B",
          "text": "Birinchi qonuni"
        },
        {
          "id": "C",
          "text": "Uchinchi qonuni"
        },
        {
          "id": "D",
          "text": "Butunjahon tortishish qonuni"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Nyutonning 1-qonuni inersiya qonunidir."
    },
    {
      "id": "fizika-408",
      "question": "DTM namunaviy fizika tahlili: Nyutonning uchinchi qonuniga ko'ra ikki jismning o'zaro ta'sir kuchlari qanday bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Bir xil yo'nalgan va teng"
        },
        {
          "id": "B",
          "text": "Biri ikkinchisidan doim katta"
        },
        {
          "id": "C",
          "text": "Moduli bo'yicha teng, yo'nalishi qarama-qarshi"
        },
        {

          "id": "D",
          "text": "Har xil modulli"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: F1 = -F2 (ta'sir aks ta'sirga teng va qarama-qarshi)."
    },
    {
      "id": "fizika-409",
      "question": "DTM namunaviy fizika tahlili: Guk qonuni bo'yicha elastiklik kuchi qanday ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · a"
        },
        {
          "id": "B",
          "text": "F = -k · x"
        },
        {
          "id": "C",
          "text": "F = μ · N"
        },
        {
          "id": "D",
          "text": "F = G · m1m2 / R²"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Elastiklik kuchi jism deformatsiyasiga to'g'ri mutanosib."
    },
    {
      "id": "fizika-410",
      "question": "DTM namunaviy fizika tahlili: Sirpanish ishqalanish kuchi qaysi formula bilan topiladi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · g"
        },
        {
          "id": "B",
          "text": "F = μ · N"
        },
        {
          "id": "C",
          "text": "F = k · x"
        },
        {
          "id": "D",
          "text": "F = P · S"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ishqalanish kuchi reaksiya kuchiga mutanosib."
    },
    {
      "id": "fizika-411",
      "question": "DTM namunaviy fizika tahlili: Butunjahon tortishish doimiysi G ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "6.67 · 10⁻¹¹ N·m²/kg²"
        },
        {
          "id": "B",
          "text": "9.8 m/s²"
        },
        {
          "id": "C",
          "text": "8.31 J/(mol·K)"
        },
        {
          "id": "D",
          "text": "1.38 · 10⁻²³ J/K"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Gravitatsion doimiy G = 6.67·10^-11 N·m²/kg²."
    },
    {
      "id": "fizika-412",
      "question": "DTM namunaviy fizika tahlili: Jismning Yer sirtidan uzoqlashishi bilan unga ta'sir etuvchi tortishish kuchi qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Masofa kvadratiga teskari kamayadi"
        },
        {
          "id": "B",
          "text": "Ortadi"
        },
        {
          "id": "C",
          "text": "Chiziqli kamayadi"
        },
        {
          "id": "D",
          "text": "O'zgarmaydi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: F ~ 1/R² qonuniyati bo'yicha masofa oshganda kamayadi."
    },
    {
      "id": "fizika-413",
      "question": "DTM namunaviy fizika tahlili: Jism impulsi (harakat miqdori) qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · g · h"
        },
        {
          "id": "B",
          "text": "p = m · a"
        },
        {
          "id": "C",
          "text": "p = m · v"
        },
        {
          "id": "D",
          "text": "p = F · t"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Jism impulsi massa va tezlik ko'paytmasiga teng."
    },
    {
      "id": "fizika-414",
      "question": "DTM namunaviy fizika tahlili: Kinetik energiya formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "E_k = (m · v²) / 2"
        },
        {
          "id": "C",
          "text": "E_p = m · g · h"
        },
        {
          "id": "D",
          "text": "A = F · s"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Kinetik energiya tezlikning kvadratiga to'g'ri proporsional."
    },
    {
      "id": "fizika-415",
      "question": "DTM namunaviy fizika tahlili: Mexanik ish qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Joul (J)"
        },
        {
          "id": "B",
          "text": "Vatt (W)"
        },
        {
          "id": "C",
          "text": "Paskal (Pa)"
        },
        {
          "id": "D",
          "text": "Nyuton (N)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Joul = 1 Nyuton · 1 metr."
    },
    {
      "id": "fizika-416",
      "question": "DTM namunaviy fizika tahlili: Quvvatning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton (N)"
        },
        {
          "id": "B",
          "text": "Vatt (W)"
        },
        {
          "id": "C",
          "text": "Amper (A)"
        },
        {
          "id": "D",
          "text": "Joul (J)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Vatt = 1 Joul / 1 soniya."
    },
    {
      "id": "fizika-417",
      "question": "DTM namunaviy fizika tahlili: Foydali ish koeffitsienti (FIK) qanday kattalik?",
      "options": [
        {
          "id": "A",
          "text": "Bajarilgan ish va quvvat ko'paytmasi"
        },
        {
          "id": "B",
          "text": "Foydali ishning to'liq sarflangan ishga nisbati"
        },
        {
          "id": "C",
          "text": "Faqat kuchlar nisbati"
        },
        {
          "id": "D",
          "text": "Vaqtga teskari qiymat"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: FIK = (A_foydali / A_to'liq) · 100%."
    },
    {
      "id": "fizika-418",
      "question": "DTM namunaviy fizika tahlili: Bosimning SI sistemasidagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton"
        },
        {
          "id": "B",
          "text": "Bar"
        },
        {
          "id": "C",
          "text": "Paskal (Pa)"
        },
        {
          "id": "D",
          "text": "Torr"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Pa = 1 N / m²."
    },
    {
      "id": "fizika-419",
      "question": "DTM namunaviy fizika tahlili: Suyuqlik ustunining gidrostatik bosimi qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · g"
        },
        {
          "id": "B",
          "text": "p = ρ · g · h"
        },
        {
          "id": "C",
          "text": "p = F / S"
        },
        {
          "id": "D",
          "text": "p = V · ρ"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim zichlik, erkin tushish tezlanishi va balandlikka bog'liq."
    },
    {
      "id": "fizika-420",
      "question": "DTM namunaviy fizika tahlili: Arximed kuchi (ko'tarish kuchi) qaysi formula orqali hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = P · S"
        },
        {
          "id": "B",
          "text": "F_A = ρ_s · g · V_ch"
        },
        {
          "id": "C",
          "text": "F = m · a"
        },
        {
          "id": "D",
          "text": "F = k · x"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi siqib chiqarilgan suyuqlik og'irligiga teng."
    },
    {
      "id": "fizika-421",
      "question": "DTM namunaviy fizika tahlili: Paskal qonuniga ko'ra suyuqlik va gazlarga berilgan tashqi bosim qanday uzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat pastga qarab uzatiladi"
        },
        {
          "id": "B",
          "text": "Faqat idish devorlariga uzatiladi"
        },
        {
          "id": "C",
          "text": "Masofaga qarab kamayadi"
        },
        {
          "id": "D",
          "text": "Barcha yo'nalishlarda o'zgarishsiz teng uzatiladi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Paskal qonuni: bosim barcha yo'nalishlarga teng tarqaladi."
    },
    {
      "id": "fizika-422",
      "question": "DTM namunaviy fizika tahlili: Normal atmosfera bosimi simob ustunining necha millimetr balandligiga teng?",
      "options": [
        {
          "id": "A",
          "text": "760 mm Hg"
        },
        {
          "id": "B",
          "text": "720 mm Hg"
        },
        {
          "id": "C",
          "text": "100 mm Hg"
        },
        {
          "id": "D",
          "text": "780 mm Hg"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 atm = 760 mm simob ustuni ≈ 101325 Pa."
    },
    {
      "id": "fizika-423",
      "question": "DTM namunaviy fizika tahlili: Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = k · T"
        },
        {
          "id": "B",
          "text": "p = (1/3) · n · m_0 · v²"
        },
        {
          "id": "C",
          "text": "p · V = const"
        },
        {
          "id": "D",
          "text": "p = ρ · g · h"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Bosim zarrachalar konsentratsiyasi va o'rtacha kinetik energiyasiga bog'liq."
    },
    {
      "id": "fizika-424",
      "question": "DTM namunaviy fizika tahlili: Mendeleyev-Klapeyron tenglamasi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "p / T = const"
        },
        {
          "id": "B",
          "text": "p · V = const"
        },
        {
          "id": "C",
          "text": "V / T = const"
        },
        {
          "id": "D",
          "text": "p · V = (m / M) · R · T"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ideal gaz holat tenglamasi: pV = νRT."
    },
    {
      "id": "fizika-425",
      "question": "DTM namunaviy fizika tahlili: Izotermik jarayonda gazning qaysi parametri o'zgarmas saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const)"
        },
        {
          "id": "B",
          "text": "Harorat (T = const, Boyl-Mariott qonuni)"
        },
        {
          "id": "C",
          "text": "Massa va hajm"
        },
        {
          "id": "D",
          "text": "Bosim (p = const)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: T = const bo'lganda pV = const."
    },
    {
      "id": "fizika-426",
      "question": "DTM namunaviy fizika tahlili: Izobarik jarayonda gazning qaysi parametri doimiy bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Bosim (p = const, Gey-Lyussak qonuni)"
        },
        {
          "id": "B",
          "text": "Harorat (T = const)"
        },
        {
          "id": "C",
          "text": "Hajm (V = const)"
        },
        {
          "id": "D",
          "text": "Zichlik"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: p = const bo'lganda V/T = const."
    },
    {
      "id": "fizika-427",
      "question": "DTM namunaviy fizika tahlili: Izoxorik jarayonda gazning qaysi kattaligi o'zgarmaydi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const, Sharl qonuni)"
        },
        {
          "id": "B",
          "text": "Ichki energiya"
        },
        {
          "id": "C",
          "text": "Bosim (p = const)"
        },
        {
          "id": "D",
          "text": "Harorat (T = const)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: V = const bo'lganda p/T = const."
    },
    {
      "id": "fizika-428",
      "question": "DTM namunaviy fizika tahlili: Issiqlik almashinuvsiz kechuvchi termodinamik jarayon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Adiabatik jarayon (Q = 0)"
        },
        {
          "id": "B",
          "text": "Izobarik jarayon"
        },
        {
          "id": "C",
          "text": "Izoxorik jarayon"
        },
        {
          "id": "D",
          "text": "Izotermik jarayon"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tashqi muhit bilan issiqlik almashinmaydigan jarayon adiabatik deyiladi."
    },
    {
      "id": "fizika-429",
      "question": "DTM namunaviy fizika tahlili: Termodinamikaning birinchi qonuni qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "ΔU = Q + A"
        },
        {
          "id": "B",
          "text": "A = p · ΔV"
        },
        {
          "id": "C",
          "text": "Q = ΔU + A"
        },
        {
          "id": "D",
          "text": "Q = c · m · ΔT"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimga berilgan issiqlik uning ichki energiyasini oshirishga va ish bajarishga sarflanadi."
    },
    {
      "id": "fizika-430",
      "question": "DTM namunaviy fizika tahlili: Mutloq nol harorat Selsiy shkalasi bo'yicha necha darajaga to'g'ri keladi?",
      "options": [
        {
          "id": "A",
          "text": "-273.15 °C"
        },
        {
          "id": "B",
          "text": "-373.15 °C"
        },
        {
          "id": "C",
          "text": "0 °C"
        },
        {
          "id": "D",
          "text": "-100 °C"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 0 Kelvin = -273.15 °C."
    },
    {
      "id": "fizika-431",
      "question": "DTM namunaviy fizika tahlili: Karno sikli bo'yicha ishlovchi ideal issiqlik mashinasining FIK formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "η = T_2 / T_1"
        },
        {
          "id": "B",
          "text": "η = Q_2 / Q_1"
        },
        {
          "id": "C",
          "text": "η = (T_1 - T_2) / T_1"
        },
        {
          "id": "D",
          "text": "η = (T_1 + T_2) / T_1"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: T1 - isitgich, T2 - sovutgich harorati."
    },
    {
      "id": "fizika-432",
      "question": "DTM namunaviy fizika tahlili: Kulon qonuniga ko'ra nuqtaviy zaryadlarning o'zaro ta'sir kuchi qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = q · E"
        },
        {
          "id": "B",
          "text": "F = q · v · B"
        },
        {
          "id": "C",
          "text": "F = k · |q1 · q2| / r²"
        },
        {
          "id": "D",
          "text": "F = I · B · L"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Kulon kuchi zaryadlar ko'paytmasiga to'g'ri va masofa kvadratiga teskari mutanosib."
    },
    {
      "id": "fizika-433",
      "question": "DTM namunaviy fizika tahlili: Elektr maydon kuchlanganligi E ning ta'rif formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = k · q / r"
        },
        {
          "id": "B",
          "text": "φ = W / q"
        },
        {
          "id": "C",
          "text": "E = F / q"
        },
        {
          "id": "D",
          "text": "E = U / d"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlanganlik birlik musbat zaryadga ta'sir qiluvchi kuchdir."
    },
    {
      "id": "fizika-434",
      "question": "DTM namunaviy fizika tahlili: Kondensator sig'imining SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Genri (H)"
        },
        {
          "id": "B",
          "text": "Farad (F)"
        },
        {
          "id": "C",
          "text": "Veber (Wb)"
        },
        {
          "id": "D",
          "text": "Klon (C)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Elektr sig'im Faradlarda o'lchanadi."
    },
    {
      "id": "fizika-435",
      "question": "DTM namunaviy fizika tahlili: Zanjirning bir qismi uchun Om qonuni qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = E / (R + r)"
        },
        {
          "id": "B",
          "text": "U = I · R²"
        },
        {
          "id": "C",
          "text": "P = I · U"
        },
        {
          "id": "D",
          "text": "I = U / R"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosib."
    },
    {
      "id": "fizika-436",
      "question": "DTM namunaviy fizika tahlili: To'liq zanjir uchun Om qonuni formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = ε / (R + r)"
        },
        {
          "id": "B",
          "text": "U = ε - I · r"
        },
        {
          "id": "C",
          "text": "I = U / R"
        },
        {
          "id": "D",
          "text": "P = I² · R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: ε - EYK, R - tashqi qarshilik, r - ichki qarshilik."
    },
    {
      "id": "fizika-437",
      "question": "DTM namunaviy fizika tahlili: O'tkazgichning qarshiligi uning o'lchamlariga qanday bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "R = ρ · l / S"
        },
        {
          "id": "B",
          "text": "R = P / I²"
        },
        {
          "id": "C",
          "text": "R = U / I"
        },
        {
          "id": "D",
          "text": "R = S / (ρ · l)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Qarshilik uzunlikka to'g'ri, ko'ndalang kesim yuziga teskari proportsional."
    },
    {
      "id": "fizika-438",
      "question": "DTM namunaviy fizika tahlili: Ketma-ket ulangan o'tkazgichlarda qaysi fizik kattalik bir xil bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Qarshilik (R)"
        },
        {
          "id": "B",
          "text": "Quvvat (P)"
        },
        {
          "id": "C",
          "text": "Tok kuchi (I = const)"
        },
        {
          "id": "D",
          "text": "Kuchlanish (U)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ketma-ket ulanishda barcha qismlardan bir xil tok o'tadi."
    },
    {
      "id": "fizika-439",
      "question": "DTM namunaviy fizika tahlili: Parallel ulangan o'tkazgichlarda qaysi parametr barchasida teng bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Qarshilik (R)"
        },
        {
          "id": "B",
          "text": "Zaryad (q)"
        },
        {
          "id": "C",
          "text": "Kuchlanish (U = const)"
        },
        {
          "id": "D",
          "text": "Tok kuchi (I)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Parallel tarmoqlarda kuchlanishlar bir xil bo'ladi."
    },
    {
      "id": "fizika-440",
      "question": "DTM namunaviy fizika tahlili: Joul-Lens qonuni bo'yicha o'tkazgichda ajraladigan issiqlik miqdori qanday hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Q = I² · R · t"
        },
        {
          "id": "B",
          "text": "Q = I · R · t"
        },
        {
          "id": "C",
          "text": "Q = U · I"
        },
        {
          "id": "D",
          "text": "Q = c · m · ΔT"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ajraladigan issiqlik tok kvadratiga to'g'ri proportsional."
    },
    {
      "id": "fizika-441",
      "question": "DTM namunaviy fizika tahlili: Magnit maydon induksiyasi B ning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Ersted"
        },
        {
          "id": "B",
          "text": "Tesla (Tl)"
        },
        {
          "id": "C",
          "text": "Genri (H)"
        },
        {
          "id": "D",
          "text": "Veber (Wb)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit maydon induksiyasi Teslada o'lchanadi."
    },
    {
      "id": "fizika-442",
      "question": "DTM namunaviy fizika tahlili: Magnit oqimi Φ ning SI dagi o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Veber (Wb)"
        },
        {
          "id": "B",
          "text": "Tesla (Tl)"
        },
        {
          "id": "C",
          "text": "Volt"
        },
        {
          "id": "D",
          "text": "Genri (H)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit oqimi Veberda o'lchanadi (1 Wb = 1 Tl · m²)."
    },
    {
      "id": "fizika-443",
      "question": "DTM namunaviy fizika tahlili: Magnit maydonida harakatlanayotgan zaryadli zarrachaga ta'sir qiluvchi kuch nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Gravitatsiya kuchi"
        },
        {
          "id": "C",
          "text": "Amper kuchi"
        },
        {
          "id": "D",
          "text": "Lorens kuchi (F = q·v·B·sinα)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi harakatdagi zaryadga ta'sir qiladi."
    },
    {
      "id": "fizika-444",
      "question": "DTM namunaviy fizika tahlili: Tokli o'tkazgichga magnit maydoni tomonidan ta'sir etuvchi kuch qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "C",
          "text": "Lorens kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi (F = I·B·L·sinα)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Amper kuchi tokli o'tkazgichga ta'sir qiladi."
    },
    {
      "id": "fizika-445",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit induksiya hodisasini 1831-yilda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Genrix Gers"
        },
        {
          "id": "B",
          "text": "Maykl Faradey"
        },
        {
          "id": "C",
          "text": "Gans Ersted"
        },
        {
          "id": "D",
          "text": "Jeyms Maksvell"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Faradey o'zgaruvchan magnit maydoni tok hosil qilishini isbotlagan."
    },
    {
      "id": "fizika-446",
      "question": "DTM namunaviy fizika tahlili: Konturda hosil bo'lgan induksion tok yo'nalishini aniqlovchi qoida qaysi?",
      "options": [
        {
          "id": "A",
          "text": "O'ng qo'l qoidasi"
        },
        {
          "id": "B",
          "text": "Lens qoidasi"
        },
        {
          "id": "C",
          "text": "Vint qoidasi"
        },
        {
          "id": "D",
          "text": "Chap qo'l qoidasi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Lens qoidasi: induksion tok o'zini vujudga keltirgan sababga qarshilik ko'rsatadi."
    },
    {
      "id": "fizika-447",
      "question": "DTM namunaviy fizika tahlili: G'altakning induktivlik birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tesla (Tl)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Veber (Wb)"
        },
        {
          "id": "D",
          "text": "Farad (F)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: O'zinduksiya kattaligi Genrida o'lchanadi."
    },
    {
      "id": "fizika-448",
      "question": "DTM namunaviy fizika tahlili: Matematik mayatnikning tebranish davri qaysi formula bilan ifodalanadi (Gyuygens formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "B",
          "text": "T = 1 / ν"
        },
        {
          "id": "C",
          "text": "T = 2π · √(g / l)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(m / k)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Mayatnik davri uzunlikka va erkin tushish tezlanishiga bog'liq."
    },
    {
      "id": "fizika-449",
      "question": "DTM namunaviy fizika tahlili: Prujinali mayatnikning tebranish davri formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(k / m)"
        },
        {
          "id": "B",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "C",
          "text": "T = m · v / k"
        },
        {
          "id": "D",
          "text": "T = 2π · √(l / g)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Davr massa va bikrlikka bog'liq."
    },
    {
      "id": "fizika-450",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit tebranish konturining tebranish davri formulasi qanday ataladi (Tomson formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(L / C)"
        },
        {
          "id": "B",
          "text": "ν = 1 / (2πLC)"
        },
        {
          "id": "C",
          "text": "T = 2π · L · C"
        },
        {
          "id": "D",
          "text": "T = 2π · √(L · C)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Tomson formulasi: T = 2π√(LC)."
    },
    {
      "id": "fizika-451",
      "question": "DTM namunaviy fizika tahlili: To'lqin uzunligi λ, tarqalish tezligi v va chastota ν orasidagi bog'liqlik qaysi?",
      "options": [
        {
          "id": "A",
          "text": "λ = v · ν"
        },
        {
          "id": "B",
          "text": "λ = ν / v"
        },
        {
          "id": "C",
          "text": "v = λ / T²"
        },
        {
          "id": "D",
          "text": "λ = v / ν"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: To'lqin uzunligi tezlikning tebranish chastotasiga nisbatiga teng."
    },
    {
      "id": "fizika-452",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning qaytish qonuniga ko'ra tushish burchagi α va qaytish burchagi β qanday munosabatda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "α > β"
        },
        {
          "id": "B",
          "text": "α = β (tushish burchagi qaytish burchagiga teng)"
        },
        {
          "id": "C",
          "text": "α + β = 90°"
        },
        {
          "id": "D",
          "text": "α < β"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Yorug'likning qaytish burchagi tushish burchagiga teng."
    },
    {
      "id": "fizika-453",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning sinish qonuni (Snellius qonuni) qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "sinα / sinβ = n_2 / n_1"
        },
        {
          "id": "B",
          "text": "tgα = n"
        },
        {
          "id": "C",
          "text": "cosα / cosβ = n"
        },
        {
          "id": "D",
          "text": "sinα · sinβ = n"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Sinuslarning nisbati nisbiy sindirish ko'rsatkichiga teng."
    },
    {
      "id": "fizika-454",
      "question": "DTM namunaviy fizika tahlili: Yupqa qavariq linzaning fokus masofasi F, jism masofasi d va tasvir masofasi f orasidagi formula qaysi?",
      "options": [
        {
          "id": "A",
          "text": "1/F = 1/d + 1/f"
        },
        {
          "id": "B",
          "text": "F = d + f"
        },
        {
          "id": "C",
          "text": "1/F = 1/d - 1/f"
        },
        {
          "id": "D",
          "text": "D = d / f"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yupqa linza formulasi: 1/F = 1/d + 1/f."
    },
    {
      "id": "fizika-455",
      "question": "DTM namunaviy fizika tahlili: Linzaning optik kuchi D qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Dioptriya (dptr)"
        },
        {
          "id": "B",
          "text": "Radian"
        },
        {
          "id": "C",
          "text": "Metr (m)"
        },
        {
          "id": "D",
          "text": "Gradus"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 dptr = 1 / 1 m."
    },
    {
      "id": "fizika-456",
      "question": "DTM namunaviy fizika tahlili: Oq yorug'likning prizmadan o'tganda spektrga (ranglarga) ajralish hodisasi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "B",
          "text": "Polyarizatsiya"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Nyuton ochgan dispersiya hodisasi."
    },
    {
      "id": "fizika-457",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik to'lqinlarining to'siqlarni aylanib o'tish hodisasi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Refraksiya"
        },
        {
          "id": "C",
          "text": "Dispersiya"
        },
        {
          "id": "D",
          "text": "Interferensiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqinlarning to'siq ortiga o'tishi diffraksiyadir."
    },
    {
      "id": "fizika-458",
      "question": "DTM namunaviy fizika tahlili: Kogerent to'lqinlarning fazoda qo'shilib, kuchayishi yoki susayishi hodisasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Yutilish"
        },
        {
          "id": "B",
          "text": "Dispersiya"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik interferensiyasi to'lqin xususiyatini isbotlaydi."
    },
    {
      "id": "fizika-459",
      "question": "DTM namunaviy fizika tahlili: Foton energiyasi Plank formulasi bo'yicha qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "E = p · c²"
        },
        {
          "id": "C",
          "text": "E = h · ν"
        },
        {
          "id": "D",
          "text": "E = h / λ²"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: h - Plank doimiysi, ν - chastota."
    },
    {
      "id": "fizika-460",
      "question": "DTM namunaviy fizika tahlili: Plank doimiysi h ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "9.11 · 10⁻³¹ kg"
        },
        {
          "id": "B",
          "text": "6.63 · 10⁻³⁴ J·s"
        },
        {
          "id": "C",
          "text": "1.6 · 10⁻¹⁹ C"
        },
        {
          "id": "D",
          "text": "3 · 10⁸ m/s"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Plank doimiysi h ≈ 6.63·10^-34 J·s."
    },
    {
      "id": "fizika-461",
      "question": "DTM namunaviy fizika tahlili: Fotoeffekt uchun Eynshteyn tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h · ν = A_chiqish + (m · v²) / 2"
        },
        {
          "id": "B",
          "text": "A = e · U"
        },
        {
          "id": "C",
          "text": "h · ν = A_chiqish"
        },
        {
          "id": "D",
          "text": "E = m · c²"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Yutilgan foton energiyasi elektronni chiqarish va unga kinetik energiya berishga sarflanadi."
    },
    {
      "id": "fizika-462",
      "question": "DTM namunaviy fizika tahlili: Atomning sayyorasimon (planetar) modelini kim taklif etgan?",
      "options": [
        {
          "id": "A",
          "text": "Nils Bor"
        },
        {
          "id": "B",
          "text": "J. Tomson"
        },
        {
          "id": "C",
          "text": "Ernest Rezerford (1911-yilda)"
        },
        {
          "id": "D",
          "text": "D. Mendeleyev"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Rezerford alfa-zarrachalar sochilishi tajribasidan so'ng yadro modelini yaratdi."
    },
    {
      "id": "fizika-463",
      "question": "DTM namunaviy fizika tahlili: Atom yadrosi qanday zarrachalardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Protonlar va elektronlar"
        },
        {
          "id": "B",
          "text": "Elektronlar va pozitronlar"
        },
        {
          "id": "C",
          "text": "Protonlar va neytronlar (nuklonlar)"
        },
        {
          "id": "D",
          "text": "Faqat neytronlar"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Yadro musbat proton va neytral neytronlardan iborat."
    },
    {
      "id": "fizika-464",
      "question": "DTM namunaviy fizika tahlili: Yadrodagi neytronlar soni N qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = Z - A"
        },
        {
          "id": "B",
          "text": "N = A + Z"
        },
        {
          "id": "C",
          "text": "N = A / Z"
        },
        {
          "id": "D",
          "text": "N = A - Z"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Massaviy son A dan tartib raqam Z ayiriladi."
    },
    {
      "id": "fizika-465",
      "question": "DTM namunaviy fizika tahlili: Yarim yemirilish davri T nima?",
      "options": [
        {
          "id": "A",
          "text": "Yadro massasining 2 barobar ortish vaqti"
        },
        {
          "id": "B",
          "text": "Zarrachalar tezligi 2 barobar kamayishi"
        },
        {
          "id": "C",
          "text": "To'liq yemirilish vaqti"
        },
        {
          "id": "D",
          "text": "Dastlabki radioaktiv yadrolar sonining yarmi yemirilishi uchun ketgan vaqt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: N(t) = N_0 · 2^(-t/T)."
    },
    {
      "id": "fizika-466",
      "question": "DTM namunaviy fizika tahlili: Eynshteynning massa va energiya bog'liqligi formulasini toping:",
      "options": [
        {
          "id": "A",
          "text": "E = k · T"
        },
        {
          "id": "B",
          "text": "E = p² / 2m"
        },
        {
          "id": "C",
          "text": "E = h · ν"
        },
        {
          "id": "D",
          "text": "E = m · c²"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Tinchlikdagi massa va energiyaning fundamental bog'liqligi."
    },
    {
      "id": "fizika-467",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlik - Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)."
    },
    {
      "id": "fizika-468",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)'?",
      "options": [
        {
          "id": "A",
          "text": "Tezlik"
        },
        {
          "id": "B",
          "text": "Kuch"
        },
        {
          "id": "C",
          "text": "Impuls"
        },
        {
          "id": "D",
          "text": "Tezlanish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlikga tegishli."
    },
    {
      "id": "fizika-469",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlanish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlanish - Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)."
    },
    {
      "id": "fizika-470",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch"
        },
        {
          "id": "B",
          "text": "Burchak tezlik"
        },
        {
          "id": "C",
          "text": "Tezlik"
        },
        {
          "id": "D",
          "text": "Tezlanish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlanishga tegishli."
    },
    {
      "id": "fizika-471",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch - Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)."
    },
    {
      "id": "fizika-472",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch"
        },
        {
          "id": "B",
          "text": "Impuls"
        },
        {
          "id": "C",
          "text": "Massa"
        },
        {
          "id": "D",
          "text": "Bosim"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuchga tegishli."
    },
    {
      "id": "fizika-473",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Og'irlik kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Og'irlik kuchi - Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)."
    },
    {
      "id": "fizika-474",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik (vazn)"
        },
        {
          "id": "B",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "C",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "D",
          "text": "Ishqalanish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Og'irlik kuchiga tegishli."
    },
    {
      "id": "fizika-475",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Jismning vazni (P)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Jismning vazni (P) - Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi."
    },
    {
      "id": "fizika-476",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi'?",
      "options": [
        {
          "id": "A",
          "text": "Inersiya"
        },
        {
          "id": "B",
          "text": "Massa"
        },
        {
          "id": "C",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "D",
          "text": "Jismning vazni (P)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Jismning vazni (P)ga tegishli."
    },
    {
      "id": "fizika-477",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Impuls (Harakat miqdori)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Impuls (Harakat miqdori) - Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)."
    },
    {
      "id": "fizika-478",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch impulsi"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Quvvat"
        },
        {
          "id": "D",
          "text": "Impuls (Harakat miqdori)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Impuls (Harakat miqdori)ga tegishli."
    },
    {
      "id": "fizika-479",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch impulsi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch impulsi - Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)."
    },
    {
      "id": "fizika-480",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)'?",
      "options": [
        {
          "id": "A",
          "text": "Moment"
        },
        {
          "id": "B",
          "text": "Kuch impulsi"
        },
        {
          "id": "C",
          "text": "Mexanik ish"
        },
        {
          "id": "D",
          "text": "Jism impulsi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch impulsiga tegishli."
    },
    {
      "id": "fizika-481",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kinetik energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kinetik energiya - Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)."
    },
    {
      "id": "fizika-482",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)'?",
      "options": [
        {
          "id": "A",
          "text": "Ichki energiya"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "To'liq energiya"
        },
        {
          "id": "D",
          "text": "Potensial energiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kinetik energiyaga tegishli."
    },
    {
      "id": "fizika-483",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Potensial energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Potensial energiya - O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)."
    },
    {
      "id": "fizika-484",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial energiya"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Ish"
        },
        {
          "id": "D",
          "text": "Issiqlik miqdori"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Potensial energiyaga tegishli."
    },
    {
      "id": "fizika-485",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch momenti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch momenti - Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)."
    },
    {
      "id": "fizika-486",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Bosim"
        },
        {
          "id": "B",
          "text": "Kuch momenti"
        },
        {
          "id": "C",
          "text": "Bajarilgan ish"
        },
        {
          "id": "D",
          "text": "Kuch impulsi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch momentiga tegishli."
    },
    {
      "id": "fizika-487",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Zichlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Zichlik - Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)."
    },
    {
      "id": "fizika-488",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)'?",
      "options": [
        {
          "id": "A",
          "text": "Hajm"
        },
        {
          "id": "B",
          "text": "Zichlik"
        },
        {
          "id": "C",
          "text": "Bosim"
        },
        {
          "id": "D",
          "text": "Massa"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Zichlikga tegishli."
    },
    {
      "id": "fizika-489",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Gidrostatik bosim' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim - Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)."
    },
    {
      "id": "fizika-490",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Gidrostatik bosim"
        },
        {
          "id": "B",
          "text": "Dinamik bosim"
        },
        {
          "id": "C",
          "text": "Atmosfera bosimi"
        },
        {
          "id": "D",
          "text": "Arximed kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Gidrostatik bosimga tegishli."
    },
    {
      "id": "fizika-491",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Arximed kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi - Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)."
    },
    {
      "id": "fizika-492",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)'?",
      "options": [
        {
          "id": "A",
          "text": "Qovushqoqlik kuchi"
        },
        {
          "id": "B",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "C",
          "text": "Sirt taranglik"
        },
        {
          "id": "D",
          "text": "Arximed kuchi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Arximed kuchiga tegishli."
    },
    {
      "id": "fizika-493",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Sirt taranglik koeffitsienti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Sirt taranglik koeffitsienti - Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)."
    },
    {
      "id": "fizika-494",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)'?",
      "options": [
        {
          "id": "A",
          "text": "Qovushqoqlik"
        },
        {
          "id": "B",
          "text": "Kapillyarlik"
        },
        {
          "id": "C",
          "text": "Sirt taranglik koeffitsienti"
        },
        {
          "id": "D",
          "text": "Zichlik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Sirt taranglik koeffitsientiga tegishli."
    },
    {
      "id": "fizika-495",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Modda miqdori' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Modda miqdori - Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)."
    },
    {
      "id": "fizika-496",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)'?",
      "options": [
        {
          "id": "A",
          "text": "Molyar massa"
        },
        {
          "id": "B",
          "text": "Modda miqdori"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Konsentratsiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Modda miqdoriga tegishli."
    },
    {
      "id": "fizika-497",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Avogadro doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Avogadro doimiysi - 1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)."
    },
    {
      "id": "fizika-498",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)'?",
      "options": [
        {
          "id": "A",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "B",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "C",
          "text": "Avogadro doimiysi"
        },
        {
          "id": "D",
          "text": "Plank doimiysi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Avogadro doimiysiga tegishli."
    },
    {
      "id": "fizika-499",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Bolsman doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Bolsman doimiysi - Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)."
    },
    {
      "id": "fizika-500",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)'?",
      "options": [
        {
          "id": "A",
          "text": "Faradey doimiysi"
        },
        {
          "id": "B",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "C",
          "text": "R-doimiy"
        },
        {
          "id": "D",
          "text": "Avogadro doimiysi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Bolsman doimiysiga tegishli."
    },
    {
      "id": "fizika-501",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Universal gaz doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Universal gaz doimiysi - 1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))."
    },
    {
      "id": "fizika-502",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))'?",
      "options": [
        {
          "id": "A",
          "text": "Plank doimiysi"
        },
        {
          "id": "B",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "C",
          "text": "Kulon doimiysi"
        },
        {
          "id": "D",
          "text": "Universal gaz doimiysi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Universal gaz doimiysiga tegishli."
    },
    {
      "id": "fizika-503",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma issiqlik sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma issiqlik sig'imi - 1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))."
    },
    {
      "id": "fizika-504",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma erish issiqligi"
        },
        {
          "id": "B",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "C",
          "text": "Solishtirma issiqlik sig'imi"
        },
        {
          "id": "D",
          "text": "Solishtirma yonish issiqligi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma issiqlik sig'imiga tegishli."
    },
    {
      "id": "fizika-505",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma erish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma erish issiqligi - Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)."
    },
    {
      "id": "fizika-506",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma erish issiqligi"
        },
        {
          "id": "B",
          "text": "Yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Issiqlik sig'imi"
        },
        {
          "id": "D",
          "text": "Bug'lanish issiqligi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma erish issiqligiga tegishli."
    },
    {
      "id": "fizika-507",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma bug'lanish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma bug'lanish issiqligi - Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)."
    },
    {
      "id": "fizika-508",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma bug'lanish issiqligi"
        },
        {
          "id": "B",
          "text": "Yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Erish issiqligi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma bug'lanish issiqligiga tegishli."
    },
    {
      "id": "fizika-509",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Ichki energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ichki energiya - Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi."
    },
    {
      "id": "fizika-510",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi'?",
      "options": [
        {
          "id": "A",
          "text": "Ichki energiya"
        },
        {
          "id": "B",
          "text": "Mexanik energiya"
        },
        {
          "id": "C",
          "text": "Entalpiya"
        },
        {
          "id": "D",
          "text": "Kimyoviy energiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Ichki energiyaga tegishli."
    },
    {
      "id": "fizika-511",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr zaryadi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr zaryadi - Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)."
    },
    {
      "id": "fizika-512",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)'?",
      "options": [
        {
          "id": "A",
          "text": "Sig'im"
        },
        {
          "id": "B",
          "text": "Elektr zaryadi"
        },
        {
          "id": "C",
          "text": "Kuchlanish"
        },
        {
          "id": "D",
          "text": "Tok kuchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr zaryadiga tegishli."
    },
    {
      "id": "fizika-513",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr sig'imi - O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)."
    },
    {
      "id": "fizika-514",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)'?",
      "options": [
        {
          "id": "A",
          "text": "Qarshilik"
        },
        {
          "id": "B",
          "text": "Induktivlik"
        },
        {
          "id": "C",
          "text": "O'tkazuvchanlik"
        },
        {
          "id": "D",
          "text": "Elektr sig'imi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr sig'imiga tegishli."
    },
    {
      "id": "fizika-515",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr kuchlanish (potensiallar ayirmasi)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr kuchlanish (potensiallar ayirmasi) - Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)."
    },
    {
      "id": "fizika-516",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuchlanganlik"
        },
        {
          "id": "B",
          "text": "Tok kuchi"
        },
        {
          "id": "C",
          "text": "Elektr kuchlanish (potensiallar ayirmasi)"
        },
        {
          "id": "D",
          "text": "EYK"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr kuchlanish (potensiallar ayirmasi)ga tegishli."
    },
    {
      "id": "fizika-517",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr yurituvchi kuch (EYK)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr yurituvchi kuch (EYK) - Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)."
    },
    {
      "id": "fizika-518",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial"
        },
        {
          "id": "B",
          "text": "Tok kuchi"
        },
        {
          "id": "C",
          "text": "Elektr yurituvchi kuch (EYK)"
        },
        {
          "id": "D",
          "text": "Kuchlanish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr yurituvchi kuch (EYK)ga tegishli."
    },
    {
      "id": "fizika-519",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma qarshilik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma qarshilik - Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)."
    },
    {
      "id": "fizika-520",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma qarshilik"
        },
        {
          "id": "B",
          "text": "O'tkazuvchanlik"
        },
        {
          "id": "C",
          "text": "Elektr sig'im"
        },
        {
          "id": "D",
          "text": "Induktivlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma qarshilikga tegishli."
    },
    {
      "id": "fizika-521",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr tokining quvvati' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr tokining quvvati - Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)."
    },
    {
      "id": "fizika-522",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr tokining quvvati"
        },
        {
          "id": "B",
          "text": "Tok zichligi"
        },
        {
          "id": "C",
          "text": "EYK"
        },
        {
          "id": "D",
          "text": "Elektr ishi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr tokining quvvatiga tegishli."
    },
    {
      "id": "fizika-523",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Lorens kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi - Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-524",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Kulon kuchi"
        },
        {
          "id": "C",
          "text": "Lorens kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Lorens kuchiga tegishli."
    },
    {
      "id": "fizika-525",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Amper kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Amper kuchi - Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-526",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Lorens kuchi"
        },
        {
          "id": "C",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Amper kuchiga tegishli."
    },
    {
      "id": "fizika-527",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'O'zinduksiya hodisasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: O'zinduksiya hodisasi - Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi."
    },
    {
      "id": "fizika-528",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "O'zinduksiya hodisasi"
        },
        {
          "id": "B",
          "text": "Gistorezisi"
        },
        {
          "id": "C",
          "text": "O'zaro induksiya"
        },
        {
          "id": "D",
          "text": "Fotoeffekt"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif O'zinduksiya hodisasiga tegishli."
    },
    {
      "id": "fizika-529",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Transformator' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Transformator - O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma."
    },
    {
      "id": "fizika-530",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Dvigatel"
        },
        {
          "id": "B",
          "text": "Generator"
        },
        {
          "id": "C",
          "text": "Transformator"
        },
        {
          "id": "D",
          "text": "Kondensator"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Transformatorga tegishli."
    },
    {
      "id": "fizika-531",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish davri' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish davri - Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)."
    },
    {
      "id": "fizika-532",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)'?",
      "options": [
        {
          "id": "A",
          "text": "Amplituda"
        },
        {
          "id": "B",
          "text": "Chastota"
        },
        {
          "id": "C",
          "text": "Tebranish davri"
        },
        {
          "id": "D",
          "text": "Faza"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish davriga tegishli."
    },
    {
      "id": "fizika-533",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish chastotasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish chastotasi - Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)."
    },
    {
      "id": "fizika-534",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)'?",
      "options": [
        {
          "id": "A",
          "text": "Davr"
        },
        {
          "id": "B",
          "text": "To'lqin soni"
        },
        {
          "id": "C",
          "text": "Amplituda"
        },
        {
          "id": "D",
          "text": "Tebranish chastotasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish chastotasiga tegishli."
    },
    {
      "id": "fizika-535",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin interferensiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin interferensiyasi - Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi."
    },
    {
      "id": "fizika-536",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "To'lqin interferensiyasi"
        },
        {
          "id": "B",
          "text": "Yutilish"
        },
        {
          "id": "C",
          "text": "Dispersiya"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin interferensiyasiga tegishli."
    },
    {
      "id": "fizika-537",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin diffraksiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin diffraksiyasi - To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi."
    },
    {
      "id": "fizika-538",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Sinish"
        },
        {
          "id": "B",
          "text": "To'lqin diffraksiyasi"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Polyarizatsiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin diffraksiyasiga tegishli."
    },
    {
      "id": "fizika-539",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'lik dispersiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik dispersiyasi - Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi."
    },
    {
      "id": "fizika-540",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi'?",
      "options": [
        {
          "id": "A",
          "text": "Interferensiya"
        },
        {
          "id": "B",
          "text": "Yutilish"
        },
        {
          "id": "C",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'lik dispersiyasiga tegishli."
    },
    {
      "id": "fizika-541",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'liq ichki qaytish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: To'liq ichki qaytish - Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi."
    },
    {
      "id": "fizika-542",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi'?",
      "options": [
        {
          "id": "A",
          "text": "To'liq ichki qaytish"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Dispersiya"
        },
        {
          "id": "D",
          "text": "Sinish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'liq ichki qaytishga tegishli."
    },
    {
      "id": "fizika-543",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Fotoeffekt' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Fotoeffekt - Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi."
    },
    {
      "id": "fizika-544",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi'?",
      "options": [
        {
          "id": "A",
          "text": "Termoemissiya"
        },
        {
          "id": "B",
          "text": "Lyuminessensiya"
        },
        {
          "id": "C",
          "text": "Rentgen nurlanishi"
        },
        {
          "id": "D",
          "text": "Fotoeffekt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Fotoeffektga tegishli."
    },
    {
      "id": "fizika-545",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'likning qizil chegarasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'likning qizil chegarasi - Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)."
    },
    {
      "id": "fizika-546",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)'?",
      "options": [
        {
          "id": "A",
          "text": "Spektr chegarasi"
        },
        {
          "id": "B",
          "text": "Yorug'likning qizil chegarasi"
        },
        {
          "id": "C",
          "text": "Diffraksiya burchagi"
        },
        {
          "id": "D",
          "text": "Ko'rinish chegarasi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'likning qizil chegarasiga tegishli."
    },
    {
      "id": "fizika-547",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yadro bog'lanish energiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yadro bog'lanish energiyasi - Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)."
    },
    {
      "id": "fizika-548",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)'?",
      "options": [
        {
          "id": "A",
          "text": "Yadro bog'lanish energiyasi"
        },
        {
          "id": "B",
          "text": "Chiqish ishi"
        },
        {
          "id": "C",
          "text": "Ionlanish energiyasi"
        },
        {
          "id": "D",
          "text": "Aktivlanish energiyasi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yadro bog'lanish energiyasiga tegishli."
    },
    {
      "id": "fizika-549",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Massa defekti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Massa defekti - Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)."
    },
    {
      "id": "fizika-550",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa defekti"
        },
        {
          "id": "B",
          "text": "Relativistik massa"
        },
        {
          "id": "C",
          "text": "Massa nisbati"
        },
        {
          "id": "D",
          "text": "Zichlik defekti"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Massa defektiga tegishli."
    },
    {
      "id": "fizika-551",
      "question": "DTM namunaviy fizika tahlili: Moddiy nuqta nima?",
      "options": [
        {
          "id": "A",
          "text": "Hajmi nolga teng jism"
        },
        {
          "id": "B",
          "text": "Faqat mikrozarracha"
        },
        {
          "id": "C",
          "text": "Qo'zg'almas jism"
        },
        {
          "id": "D",
          "text": "Harakat sharoitida o'lchamlari hisobga olinmasa ham bo'ladigan jism"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: O'lchamlari ko'rilayotgan masofalarga nisbatan juda kichik bo'lgan jism."
    },
    {
      "id": "fizika-552",
      "question": "DTM namunaviy fizika tahlili: Sanoq sistemasi qanday elementlardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat harakat trayektoriyasi"
        },
        {
          "id": "B",
          "text": "Faqat Yer sathi"
        },
        {
          "id": "C",
          "text": "Faqat chizg'ich va soat"
        },
        {
          "id": "D",
          "text": "Sanoq jismi, u bilan bog'langan koordinatalar sistemasi va vaqt o'lchagich (soat)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Sanoq sistemasi = Sanoq jismi + Koordinata sistemasi + Soat."
    },
    {
      "id": "fizika-553",
      "question": "DTM namunaviy fizika tahlili: Trayektoriya nima?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi"
        },
        {
          "id": "B",
          "text": "Bosib o'tilgan yo'l uzunligi"
        },
        {
          "id": "C",
          "text": "Boshlang'ich va oxirgi nuqtalarni tutashtiruvchi vektor"
        },
        {
          "id": "D",
          "text": "Harakatlanayotgan jism qoldirgan yoki chizgan chiziq"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Fazoda jism harakatlangan iz/chiziq trayektoriya deyiladi."
    },
    {
      "id": "fizika-554",
      "question": "DTM namunaviy fizika tahlili: Ko'chish nima?",
      "options": [
        {
          "id": "A",
          "text": "Trayektoriyaning uzunligi"
        },
        {
          "id": "B",
          "text": "Harakatning boshlang'ich va oxirgi nuqtalarini tutashtiruvchi yo'nalishga ega to'g'ri chiziq kesmasi (vektor)"
        },
        {
          "id": "C",
          "text": "Bosib o'tilgan yo'l"
        },
        {
          "id": "D",
          "text": "Faqat tezlik vektori"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chish vektor kattalik, yo'l esa skalyar kattalik."
    },
    {
      "id": "fizika-555",
      "question": "DTM namunaviy fizika tahlili: Teng o'zgaruvchan harakatda tezlanish qanday kattalik hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Davriy tebranuvchi"
        },
        {
          "id": "B",
          "text": "Vaqt o'tishi bilan o'zgarmas (a = const)"
        },
        {
          "id": "C",
          "text": "Doimiy ortib boruvchi"
        },
        {
          "id": "D",
          "text": "Nolga teng"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Teng o'zgaruvchan harakatda a = const bo'ladi."
    },
    {
      "id": "fizika-556",
      "question": "DTM namunaviy fizika tahlili: Boshlang'ich tezliksiz erkin tushayotgan jismning t vaqtdagi tushish balandligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h = v · t"
        },
        {
          "id": "B",
          "text": "h = (g · t²) / 2"
        },
        {
          "id": "C",
          "text": "h = 2g / t²"
        },
        {
          "id": "D",
          "text": "h = g · t"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlang'ich tezlik v0 = 0 bo'lganda h = gt²/2."
    },
    {
      "id": "fizika-557",
      "question": "DTM namunaviy fizika tahlili: Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Giperbola"
        },
        {
          "id": "B",
          "text": "To'g'ri chiziq"
        },
        {
          "id": "C",
          "text": "Parabola"
        },
        {
          "id": "D",
          "text": "Aylana"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Havoning qarshiligi hisobga olinmaganda trayektoriya paraboladir."
    },
    {
      "id": "fizika-558",
      "question": "DTM namunaviy fizika tahlili: Aylanma harakatda markazga intilma tezlanish formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "a = v² / R = ω² · R"
        },
        {
          "id": "B",
          "text": "a = v · R"
        },
        {
          "id": "C",
          "text": "a = v / t"
        },
        {
          "id": "D",
          "text": "a = ω / R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Markazga intilma tezlanish a_m = v²/R."
    },
    {
      "id": "fizika-559",
      "question": "DTM namunaviy fizika tahlili: Birinchi kosmik tezlikning Yer uchun taxminiy qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "11.2 km/s"
        },
        {
          "id": "B",
          "text": "16.7 km/s"
        },
        {
          "id": "C",
          "text": "7.9 km/s"
        },
        {
          "id": "D",
          "text": "300 000 km/s"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yer atrofida pastki orbitada aylanish tezligi v1 ≈ 7.9 km/s."
    },
    {
      "id": "fizika-560",
      "question": "DTM namunaviy fizika tahlili: Ikkinchi kosmik tezlik (parabolik tezlik) Yer uchun qanchaga teng?",
      "options": [
        {
          "id": "A",
          "text": "7.9 km/s"
        },
        {
          "id": "B",
          "text": "16.7 km/s"
        },
        {
          "id": "C",
          "text": "9.8 km/s"
        },
        {
          "id": "D",
          "text": "11.2 km/s"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Yer gravitatsiyasini yengib chiqish tezligi v2 ≈ 11.2 km/s."
    },
    {
      "id": "fizika-561",
      "question": "DTM namunaviy fizika tahlili: Uchinchi kosmik tezlik Yer uchun qancha?",
      "options": [
        {
          "id": "A",
          "text": "16.7 km/s"
        },
        {
          "id": "B",
          "text": "7.9 km/s"
        },
        {
          "id": "C",
          "text": "42 km/s"
        },
        {
          "id": "D",
          "text": "11.2 km/s"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh sistemasini tark etish tezligi v3 ≈ 16.7 km/s."
    },
    {
      "id": "fizika-562",
      "question": "DTM namunaviy fizika tahlili: Og'irlik markazi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tayanch nuqtasi"
        },
        {
          "id": "B",
          "text": "Jismning geometrik o'rtasi"
        },
        {
          "id": "C",
          "text": "Massa eng ko'p to'plangan nuqta"
        },
        {
          "id": "D",
          "text": "Jismning barcha qismlariga ta'sir qiluvchi og'irlik kuchlarining teng ta'sir etuvchisi qo'yilgan nuqta"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Og'irlik kuchining qo'yilish nuqtasi."
    },
    {
      "id": "fizika-563",
      "question": "DTM namunaviy fizika tahlili: Richagning muvozanat sharti qanday ifodalanadi (Arximed qoidasi)?",
      "options": [
        {
          "id": "A",
          "text": "F1 / l1 = F2 / l2"
        },
        {
          "id": "B",
          "text": "F1 · F2 = l1 · l2"
        },
        {
          "id": "C",
          "text": "F1 · l1 = F2 · l2"
        },
        {
          "id": "D",
          "text": "F1 + F2 = l1 + l2"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlar momentlari o'zaro teng bo'lishi kerak."
    },
    {
      "id": "fizika-564",
      "question": "DTM namunaviy fizika tahlili: Ko'chmas blok qanday mexanik yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "Tezlikdan yutuq beradi"
        },
        {
          "id": "B",
          "text": "Ishdan 2 marta yutuq beradi"
        },
        {
          "id": "C",
          "text": "Kuchdan 2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "Kuchdan yutuq bermaydi, faqat kuch yo'nalishini o'zgartiradi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chmas blok kuchdan yutuq bermaydi."
    },
    {
      "id": "fizika-565",
      "question": "DTM namunaviy fizika tahlili: Ko'char blok kuchdan necha marta yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "Kuchdan yutuq bermaydi"
        },
        {
          "id": "B",
          "text": "3 marta"
        },
        {
          "id": "C",
          "text": "2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "4 marta"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'char blok kuchdan 2 barobar yutuq beradi (masofada 2 marta yutqazadi)."
    },
    {
      "id": "fizika-566",
      "question": "DTM namunaviy fizika tahlili: Mexanikaning 'oltin qoidasi' qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat tezlikdan yutish mumkin"
        },
        {
          "id": "B",
          "text": "Kuchdan necha marta yutsak, masofada shuncha yutqazamiz (ishdan yutuq olinmaydi)"
        },
        {
          "id": "C",
          "text": "Ishdan 2 marta yutish mumkin"
        },
        {
          "id": "D",
          "text": "Har doim energiyada yutuq bo'ladi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Oddiy mexanizmlar ishdan yutuq bermaydi."
    },
    {
      "id": "fizika-567",
      "question": "DTM namunaviy fizika tahlili: Ideal gaz nima?",
      "options": [
        {
          "id": "A",
          "text": "Xona haroratidagi har qanday gaz"
        },
        {
          "id": "B",
          "text": "Faqat vodorod gazi"
        },
        {
          "id": "C",
          "text": "Suyuqlikka aylanmaydigan gaz"
        },
        {
          "id": "D",
          "text": "Molekulalari o'lchamlari hisobga olinmaydigan, to'qnashuvdan boshqa vaqtda o'zaro ta'sirlashmaydigan nazariy model"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Fizikada qo'llanadigan ideallashtirilgan model."
    },
    {
      "id": "fizika-568",
      "question": "DTM namunaviy fizika tahlili: Termodinamik harorat T va Selsiy harorati t o'rtasidagi bog'lanish qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = t + 273.15"
        },
        {
          "id": "B",
          "text": "T = t · 1.8"
        },
        {
          "id": "C",
          "text": "T = 273.15 / t"
        },
        {
          "id": "D",
          "text": "T = t - 273.15"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Kelvin shkalasi T = t + 273.15 K."
    },
    {
      "id": "fizika-569",
      "question": "DTM namunaviy fizika tahlili: Diffuziya hodisasi nimani isbotlaydi?",
      "options": [
        {
          "id": "A",
          "text": "Modda molekulalarining uzluksiz va tartibsiz (xaotik) harakatini"
        },
        {
          "id": "B",
          "text": "Jismning qattiqligini"
        },
        {
          "id": "C",
          "text": "Gravitatsiya ta'sirini"
        },
        {
          "id": "D",
          "text": "Molekulalarning bo'linishini"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Moddalarning o'z-o'zidan aralashib ketishi ularning harakatdaligini ko'rsatadi."
    },
    {
      "id": "fizika-570",
      "question": "DTM namunaviy fizika tahlili: Broun harakati nima?",
      "options": [
        {
          "id": "A",
          "text": "Molekulalarning aylanishi"
        },
        {
          "id": "B",
          "text": "Konveksiya oqimi"
        },
        {
          "id": "C",
          "text": "Faqat tirik bakteriyalar harakati"
        },
        {
          "id": "D",
          "text": "Suyuqlik yoki gazda muallaq turgan mikroskopik zarrachalarning tartibsiz harakati"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Suyuqlik molekulalarining zarbalari oqibatida yuz beradi."
    },
    {
      "id": "fizika-571",
      "question": "DTM namunaviy fizika tahlili: Suyuqlikning bug'lanish tezligi nimalarga bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "Faqat idishning rangiga"
        },
        {
          "id": "B",
          "text": "Faqat suyuqlik massasiga"
        },
        {
          "id": "C",
          "text": "Faqat havo bosimiga"
        },
        {
          "id": "D",
          "text": "Suyuqlik turiga, sirt yuzasiga, haroratga va shamolga"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Sirt yuzi, harorat va ochiq havo oqimi bug'lanishni tezlashtiradi."
    },
    {
      "id": "fizika-572",
      "question": "DTM namunaviy fizika tahlili: To'yingan bug' nima?",
      "options": [
        {
          "id": "A",
          "text": "Zichligi eng kichik bug'"
        },
        {
          "id": "B",
          "text": "Qizdirilgan quruq bug'"
        },
        {
          "id": "C",
          "text": "O'z suyuqligi bilan dinamik muvozanatda bo'lgan bug'"
        },
        {
          "id": "D",
          "text": "Qaynayotgan bug'"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Vaqt birligida bug'lanayotgan va kondensatsiyalanayotgan molekulalar soni tenglashadi."
    },
    {
      "id": "fizika-573",
      "question": "DTM namunaviy fizika tahlili: Qaynash nima?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlikning nafaqat sirtidan, balki butun hajmi bo'ylab pufakchalar hosil qilib jadallik bilan bug'lanishi"
        },
        {
          "id": "B",
          "text": "Zichlik ortishi"
        },
        {
          "id": "C",
          "text": "Faqat sirtqi bug'lanish"
        },
        {
          "id": "D",
          "text": "Suyuqlik erishi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: To'yingan bug' bosimi tashqi bosimga tenglashganda qaynash boshlanadi."
    },
    {
      "id": "fizika-574",
      "question": "DTM namunaviy fizika tahlili: Qattiq jismning suyuqlikka aylanish jarayoni nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Erish"
        },
        {
          "id": "B",
          "text": "Kondensatsiya"
        },
        {
          "id": "C",
          "text": "Kristallanish"
        },
        {
          "id": "D",
          "text": "Sublimatsiya"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Erish jarayonida harorat o'zgarmaydi."
    },
    {
      "id": "fizika-575",
      "question": "DTM namunaviy fizika tahlili: Moddaning to'g'ridan-to'g'ri qattiq holatdan gaz holatiga o'tishi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Erish"
        },
        {
          "id": "B",
          "text": "Qaynash"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Sublimatsiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Masalan, yod yoki quruq muzning to'g'ridan-to'g'ri gazga aylanishi."
    },
    {
      "id": "fizika-576",
      "question": "DTM namunaviy fizika tahlili: Gazning to'g'ridan-to'g'ri qattiq holatga o'tishi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Desublimatsiya"
        },
        {
          "id": "B",
          "text": "Ionlanish"
        },
        {
          "id": "C",
          "text": "Bug'lanish"
        },
        {
          "id": "D",
          "text": "Erish"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Sovuqda derazada qirov hosil bo'lishi desublimatsiyadir."
    },
    {
      "id": "fizika-577",
      "question": "DTM namunaviy fizika tahlili: Elektroskop qanday asbob?",
      "options": [
        {
          "id": "A",
          "text": "Qarshilikni o'lchovchi asbob"
        },
        {
          "id": "B",
          "text": "Tok kuchini o'lchovchi asbob"
        },
        {
          "id": "C",
          "text": "Kuchlanishni oshiruvchi asbob"
        },
        {
          "id": "D",
          "text": "Jismning elektrlanganganligini aniqlovchi asbob"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Zaryad bor-yo'qligini yaproqchalarning ochilishidan aniqlaydi."
    },
    {
      "id": "fizika-578",
      "question": "DTM namunaviy fizika tahlili: Metallarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Erkin elektronlar"
        },
        {
          "id": "B",
          "text": "Musbat ionlar"
        },
        {
          "id": "C",
          "text": "Kationlar va anionlar"
        },
        {
          "id": "D",
          "text": "Manfiy ionlar"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Metallarda tok o'tkazuvchilar erkin elektronlardir."
    },
    {
      "id": "fizika-579",
      "question": "DTM namunaviy fizika tahlili: Elektrolitlarda (suyuqliklarda) elektr tokini nimalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat erkin elektronlar"
        },
        {
          "id": "B",
          "text": "Faqat musbat protonlar"
        },
        {
          "id": "C",
          "text": "Musbat va manfiy ionlar"
        },
        {
          "id": "D",
          "text": "Faqat neytronlar"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Elektrolitik dissotsiatsiyada hosil bo'lgan ionlar."
    },
    {
      "id": "fizika-580",
      "question": "DTM namunaviy fizika tahlili: Gazlarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat elektronlar"
        },
        {
          "id": "B",
          "text": "Faqat neytronlar"
        },
        {
          "id": "C",
          "text": "Faqat pozitronlar"
        },
        {
          "id": "D",
          "text": "Elektronlar va musbat hamda manfiy ionlar"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Gaz razryadida ionlar va elektronlar qatnashadi."
    },
    {
      "id": "fizika-581",
      "question": "DTM namunaviy fizika tahlili: Vakuumda elektr toki hosil qilish uchun nima zarur?",
      "options": [
        {
          "id": "A",
          "text": "Elektrolit solish"
        },
        {
          "id": "B",
          "text": "Magnit maydon"
        },
        {
          "id": "C",
          "text": "Yuqori bosim"
        },
        {
          "id": "D",
          "text": "Termoelektron emissiya (qizdirilgan katoddan elektronlar ajralishi)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Vakuumda termoelektron emissiya orqali tok o'tadi."
    },
    {
      "id": "fizika-582",
      "question": "DTM namunaviy fizika tahlili: Yarimo'tkazgichlarda o'tkazuvchanlik qanday turlarga bo'linadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat protonli"
        },
        {
          "id": "B",
          "text": "Faqat ionli"
        },
        {
          "id": "C",
          "text": "Faqat neytronli"
        },
        {
          "id": "D",
          "text": "Xususiy (elektron-teshikli) va aralashmali (n-tur va p-tur)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Donor aralashma n-tur, akseptor aralashma p-tur hosil qiladi."
    },
    {
      "id": "fizika-583",
      "question": "DTM namunaviy fizika tahlili: O'ta o'tkazuvchanlik hodisasini 1911-yilda simobda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Nikola Tesla"
        },
        {
          "id": "B",
          "text": "Gens Ersted"
        },
        {
          "id": "C",
          "text": "Tomas Edison"
        },
        {
          "id": "D",
          "text": "Kammerling-Onnes (4.2 K haroratda)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Kritik haroratda elektr qarshiligining keskin nolga tushishi."
    },
    {
      "id": "fizika-584",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik nuri nima?",
      "options": [
        {
          "id": "A",
          "text": "Optik linza"
        },
        {
          "id": "B",
          "text": "Fotonlar massasi"
        },
        {
          "id": "C",
          "text": "Yorug'lik energiyasi tarqalayotgan yo'nalishni ko'rsatuvchi geometrik chiziq"
        },
        {
          "id": "D",
          "text": "Yorug'lik tezligi"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Geometrik optikada nur tushunchasi."
    },
    {
      "id": "fizika-585",
      "question": "DTM namunaviy fizika tahlili: Yassi ko'zguda hosil bo'lgan tasvir qanday xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Haqiqiy va kattalashgan"
        },
        {
          "id": "B",
          "text": "Kichraytirilgan"
        },
        {
          "id": "C",
          "text": "Haqiqiy va to'ntarilgan"
        },
        {
          "id": "D",
          "text": "Mavhum, to'g'ri va jism o'lchamiga teng"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Yassi ko'zgu doim mavhum va teng tasvir beradi."
    },
    {
      "id": "fizika-586",
      "question": "DTM namunaviy fizika tahlili: Ko'z gavhari qanday optik xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Yassi plastinka"
        },
        {
          "id": "B",
          "text": "Sochuvchi linza"
        },
        {
          "id": "C",
          "text": "Prizma"
        },
        {
          "id": "D",
          "text": "Ikki tomoni qavariq yig'uvchi linza"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'z gavhari yig'uvchi egiluvchan tirik linzadir."
    },
    {
      "id": "fizika-587",
      "question": "DTM namunaviy fizika tahlili: Yaqindan ko'ruvchilik (miopiya) qanday ko'zoynak linzasi bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Rangli filtrlar bilan"
        },
        {
          "id": "B",
          "text": "Silindrik linzalar bilan"
        },
        {
          "id": "C",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "D",
          "text": "Sochuvchi (botiq) linzalar bilan"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Miopiyada tasvir to'r parda oldiga tushadi, uni sochuvchi linza to'g'rilaydi."
    },
    {
      "id": "fizika-588",
      "question": "DTM namunaviy fizika tahlili: Uzoqdan ko'ruvchilik (gipermetropiya) qanday linzali ko'zoynak bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Qorong'i filtr bilan"
        },
        {
          "id": "B",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "C",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "D",
          "text": "Yassi shisha bilan"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Gipermetropiyada tasvir to'r parda orqasiga o'tib ketadi, yig'uvchi linza kerak."
    },
    {
      "id": "fizika-589",
      "question": "DTM namunaviy fizika tahlili: Ko'rinadigan yorug'lik to'lqin uzunliklari oralig'i taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "380 nm dan 780 nm gacha"
        },
        {
          "id": "B",
          "text": "10 nm dan 100 nm gacha"
        },
        {
          "id": "C",
          "text": "1 mm dan 1 sm gacha"
        },
        {
          "id": "D",
          "text": "1 km dan 10 km gacha"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Binafsha rangdan (380 nm) qizil ranggacha (760-780 nm)."
    },
    {
      "id": "fizika-590",
      "question": "DTM namunaviy fizika tahlili: Rentgen nurlarining to'lqin uzunligi qanday?",
      "options": [
        {
          "id": "A",
          "text": "Ko'rinadigan yorug'likdan uzun"
        },
        {
          "id": "B",
          "text": "Radioto'lqinlar bilan bir xil"
        },
        {
          "id": "C",
          "text": "Ultrabinafsha va gamma-nurlar oralig'idagi juda qisqa to'lqinlar (0.01 - 10 nm)"
        },
        {
          "id": "D",
          "text": "Infraqizildan uzun"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Rentgen nurlari yuqori o'tuvchanlik qobiliyatiga ega."
    },
    {
      "id": "fizika-591",
      "question": "DTM namunaviy fizika tahlili: Radioaktiv nurlanishning qaysi turi eng katta kirib borish qobiliyatiga ega?",
      "options": [
        {
          "id": "A",
          "text": "Ultrabinafsha"
        },
        {
          "id": "B",
          "text": "Alfa (α) nurlanish (geliy yadrolari)"
        },
        {
          "id": "C",
          "text": "Gamma (γ) nurlanish (fotonlar oqimi)"
        },
        {
          "id": "D",
          "text": "Beta (β) nurlanish (elektronlar)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Gamma nurlari hatto qalin qo'rg'oshin qatlamidan ham o'tadi."
    },
    {
      "id": "fizika-592",
      "question": "DTM namunaviy fizika tahlili: Alfa (α) zarracha o'zi nima?",
      "options": [
        {
          "id": "A",
          "text": "Foton"
        },
        {
          "id": "B",
          "text": "Neytron"
        },
        {
          "id": "C",
          "text": "Geliy atomi yadrosi (ikkita proton va ikkita neytron: ⁴₂He)"
        },
        {
          "id": "D",
          "text": "Tezkor elektron"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Alfa nurlanish geliy yadrolari oqimidir."
    },
    {
      "id": "fizika-593",
      "question": "DTM namunaviy fizika tahlili: Beta (β⁻) nurlanish qanday zarrachalar oqimidan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Pozitronlar"
        },
        {
          "id": "B",
          "text": "Geliy yadrolari"
        },
        {
          "id": "C",
          "text": "Protonlar"
        },
        {
          "id": "D",
          "text": "Tez harakatlanuvchi elektronlar"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Beta-manfiy yemirilishda yadrodan elektron uchib chiqadi."
    },
    {
      "id": "fizika-594",
      "question": "DTM namunaviy fizika tahlili: Yadroning zanjirli bo'linish reaksiyasida qaysi og'ir izotop keng qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "Vodorod-1"
        },
        {
          "id": "B",
          "text": "Uran-238"
        },
        {
          "id": "C",
          "text": "Temir-56"
        },
        {
          "id": "D",
          "text": "Uran-235 (²³⁵U)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Uran-235 sekin neytronlar ta'sirida bo'linadi va energiya ajratadi."
    },
    {
      "id": "fizika-595",
      "question": "DTM namunaviy fizika tahlili: Termoyadro sintez reaksiyasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Og'ir yadrolarning bo'linishi"
        },
        {
          "id": "B",
          "text": "Yengil yadrolarning (vodorod izotoplari) o'ta yuqori haroratda birikib og'irroq yadro hosil qilishi"
        },
        {
          "id": "C",
          "text": "Faqat alfa-yemirilish"
        },
        {
          "id": "D",
          "text": "Kimyoviy yonish"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh va yulduzlar energiyasining manbai termoyadro reaksiyasidir."
    },
    {
      "id": "fizika-596",
      "question": "DTM namunaviy fizika tahlili: Quyosh sirtida energiya qaysi jarayon hisobiga ajraladi?",
      "options": [
        {
          "id": "A",
          "text": "Termoyadro sintezi (vodorodning geliyga aylanishi)"
        },
        {
          "id": "B",
          "text": "Uran bo'linishi"
        },
        {
          "id": "C",
          "text": "Gravitatsion qisilish"
        },
        {
          "id": "D",
          "text": "Ko'mir yonishi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Quyosh yadrosidagi termoyadro reaksiyasi."
    },
    {
      "id": "fizika-597",
      "question": "DTM namunaviy fizika tahlili: Fizikada Plank gipotezasi nimadan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'lik faqat to'lqindir"
        },
        {
          "id": "B",
          "text": "Elektronlar qo'zg'almasdir"
        },
        {
          "id": "C",
          "text": "Atomlar yorug'likni uzluksiz emas, balki diskret porsiyalar (kvantlar) tarzida chiqaradi va yutadi"
        },
        {
          "id": "D",
          "text": "Energiya doim o'zgaruvchan"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: 1900-yilda Maks Plank kvant nazariyasiga asos soldi."
    },
    {
      "id": "fizika-598",
      "question": "DTM namunaviy fizika tahlili: Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · a"
        },
        {
          "id": "B",
          "text": "A = F · s"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "P = m · g"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Jismga ta'sir etuvchi kuch uning massasi va tezlanishi ko'paytmasiga teng."
    },
    {
      "id": "fizika-599",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning vakuumdagi tezligi taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "3 000 000 km/s"
        },
        {
          "id": "B",
          "text": "3 000 km/s"
        },
        {
          "id": "C",
          "text": "30 000 km/s"
        },
        {
          "id": "D",
          "text": "300 000 km/s"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: c ≈ 3·10^8 m/s = 300 000 km/s."
    },
    {
      "id": "fizika-600",
      "question": "DTM namunaviy fizika tahlili: Normal sharoitda suv qaysi haroratda qaynaydi?",
      "options": [
        {
          "id": "A",
          "text": "0 °C"
        },
        {
          "id": "B",
          "text": "120 °C"
        },
        {
          "id": "C",
          "text": "100 °C"
        },
        {
          "id": "D",
          "text": "212 °C"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Normal atmosfera bosimida suv 100 °C da qaynaydi."
    },
    {
      "id": "fizika-601",
      "question": "DTM namunaviy fizika tahlili: Elektr tok kuchining o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Volt"
        },
        {
          "id": "B",
          "text": "Om"
        },
        {
          "id": "C",
          "text": "Vatt"
        },
        {
          "id": "D",
          "text": "Amper"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Xalqaro birliklar sistemasida tok kuchi Amperda o'lchanadi."
    },
    {
      "id": "fizika-602",
      "question": "DTM namunaviy fizika tahlili: Tezlanishning SI sistemasidagi asosiy o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "N/kg"
        },
        {
          "id": "B",
          "text": "m/s²"
        },
        {
          "id": "C",
          "text": "km/soat"
        },
        {
          "id": "D",
          "text": "m/s"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Tezlanish birligi metr taqsim soniya kvadratidir."
    },
    {
      "id": "fizika-603",
      "question": "DTM namunaviy fizika tahlili: To'g'ri chiziqli tekis harakatda tezlik qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Vaqtga to'g'ri mutanosib ortadi"
        },
        {
          "id": "B",
          "text": "Nolga teng bo'ladi"
        },
        {
          "id": "C",
          "text": "O'zgarmas qoladi (v = const)"
        },
        {
          "id": "D",
          "text": "Kamayadi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tekis harakatda tezlik yo'nalishi va qiymati bo'yicha o'zgarmaydi."
    },
    {
      "id": "fizika-604",
      "question": "DTM namunaviy fizika tahlili: Erkin tushish tezlanishining Yer sirtidagi o'rtacha qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "10.5 m/s²"
        },
        {
          "id": "B",
          "text": "9.8 m/s²"
        },
        {
          "id": "C",
          "text": "6.67 m/s²"
        },
        {
          "id": "D",
          "text": "8.9 m/s²"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: g ≈ 9.8 m/s² (amaliy hisoblashlarda ko'pincha 10 olinadi)."
    },
    {
      "id": "fizika-605",
      "question": "DTM namunaviy fizika tahlili: Burchak tezlik va aylanish davri o'rtasidagi bog'liqlik formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "ω = v · R"
        },
        {
          "id": "B",
          "text": "ω = T / 2π"
        },
        {
          "id": "C",
          "text": "ω = 2π · T"
        },
        {
          "id": "D",
          "text": "ω = 2π / T"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Burchak tezlik ω = 2π/T = 2πν ga teng."
    },
    {
      "id": "fizika-606",
      "question": "DTM namunaviy fizika tahlili: Inersiya qonuni Nyutonning nechanchi qonuni hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Birinchi qonuni"
        },
        {
          "id": "B",
          "text": "Butunjahon tortishish qonuni"
        },
        {
          "id": "C",
          "text": "Uchinchi qonuni"
        },
        {
          "id": "D",
          "text": "Ikkinchi qonuni"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Nyutonning 1-qonuni inersiya qonunidir."
    },
    {
      "id": "fizika-607",
      "question": "DTM namunaviy fizika tahlili: Nyutonning uchinchi qonuniga ko'ra ikki jismning o'zaro ta'sir kuchlari qanday bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Har xil modulli"
        },
        {
          "id": "B",
          "text": "Moduli bo'yicha teng, yo'nalishi qarama-qarshi"
        },
        {
          "id": "C",
          "text": "Biri ikkinchisidan doim katta"
        },
        {
          "id": "D",
          "text": "Bir xil yo'nalgan va teng"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: F1 = -F2 (ta'sir aks ta'sirga teng va qarama-qarshi)."
    },
    {
      "id": "fizika-608",
      "question": "DTM namunaviy fizika tahlili: Guk qonuni bo'yicha elastiklik kuchi qanday ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = G · m1m2 / R²"
        },
        {
          "id": "B",
          "text": "F = m · a"
        },
        {
          "id": "C",
          "text": "F = μ · N"
        },
        {
          "id": "D",
          "text": "F = -k · x"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Elastiklik kuchi jism deformatsiyasiga to'g'ri mutanosib."
    },
    {
      "id": "fizika-609",
      "question": "DTM namunaviy fizika tahlili: Sirpanish ishqalanish kuchi qaysi formula bilan topiladi?",
      "options": [
        {
          "id": "A",
          "text": "F = P · S"
        },
        {
          "id": "B",
          "text": "F = m · g"
        },
        {
          "id": "C",
          "text": "F = μ · N"
        },
        {
          "id": "D",
          "text": "F = k · x"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ishqalanish kuchi reaksiya kuchiga mutanosib."
    },
    {
      "id": "fizika-610",
      "question": "DTM namunaviy fizika tahlili: Butunjahon tortishish doimiysi G ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "1.38 · 10⁻²³ J/K"
        },
        {
          "id": "B",
          "text": "8.31 J/(mol·K)"
        },
        {
          "id": "C",
          "text": "9.8 m/s²"
        },
        {
          "id": "D",
          "text": "6.67 · 10⁻¹¹ N·m²/kg²"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Gravitatsion doimiy G = 6.67·10^-11 N·m²/kg²."
    },
    {
      "id": "fizika-611",
      "question": "DTM namunaviy fizika tahlili: Jismning Yer sirtidan uzoqlashishi bilan unga ta'sir etuvchi tortishish kuchi qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Ortadi"
        },
        {
          "id": "B",
          "text": "Chiziqli kamayadi"
        },
        {
          "id": "C",
          "text": "O'zgarmaydi"
        },
        {
          "id": "D",
          "text": "Masofa kvadratiga teskari kamayadi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: F ~ 1/R² qonuniyati bo'yicha masofa oshganda kamayadi."
    },
    {
      "id": "fizika-612",
      "question": "DTM namunaviy fizika tahlili: Jism impulsi (harakat miqdori) qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · v"
        },
        {
          "id": "B",
          "text": "p = m · g · h"
        },
        {
          "id": "C",
          "text": "p = F · t"
        },
        {
          "id": "D",
          "text": "p = m · a"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Jism impulsi massa va tezlik ko'paytmasiga teng."
    },
    {
      "id": "fizika-613",
      "question": "DTM namunaviy fizika tahlili: Kinetik energiya formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E_k = (m · v²) / 2"
        },
        {
          "id": "B",
          "text": "A = F · s"
        },
        {
          "id": "C",
          "text": "E_p = m · g · h"
        },
        {
          "id": "D",
          "text": "E = m · c²"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Kinetik energiya tezlikning kvadratiga to'g'ri proporsional."
    },
    {
      "id": "fizika-614",
      "question": "DTM namunaviy fizika tahlili: Mexanik ish qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Joul (J)"
        },
        {
          "id": "B",
          "text": "Vatt (W)"
        },
        {
          "id": "C",
          "text": "Paskal (Pa)"
        },
        {
          "id": "D",
          "text": "Nyuton (N)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Joul = 1 Nyuton · 1 metr."
    },
    {
      "id": "fizika-615",
      "question": "DTM namunaviy fizika tahlili: Quvvatning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton (N)"
        },
        {
          "id": "B",
          "text": "Amper (A)"
        },
        {
          "id": "C",
          "text": "Vatt (W)"
        },
        {
          "id": "D",
          "text": "Joul (J)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Vatt = 1 Joul / 1 soniya."
    },
    {
      "id": "fizika-616",
      "question": "DTM namunaviy fizika tahlili: Foydali ish koeffitsienti (FIK) qanday kattalik?",
      "options": [
        {
          "id": "A",
          "text": "Bajarilgan ish va quvvat ko'paytmasi"
        },
        {
          "id": "B",
          "text": "Vaqtga teskari qiymat"
        },
        {
          "id": "C",
          "text": "Faqat kuchlar nisbati"
        },
        {
          "id": "D",
          "text": "Foydali ishning to'liq sarflangan ishga nisbati"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: FIK = (A_foydali / A_to'liq) · 100%."
    },
    {
      "id": "fizika-617",
      "question": "DTM namunaviy fizika tahlili: Bosimning SI sistemasidagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Paskal (Pa)"
        },
        {
          "id": "B",
          "text": "Bar"
        },
        {
          "id": "C",
          "text": "Torr"
        },
        {
          "id": "D",
          "text": "Nyuton"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Pa = 1 N / m²."
    },
    {
      "id": "fizika-618",
      "question": "DTM namunaviy fizika tahlili: Suyuqlik ustunining gidrostatik bosimi qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · g"
        },
        {
          "id": "B",
          "text": "p = ρ · g · h"
        },
        {
          "id": "C",
          "text": "p = V · ρ"
        },
        {
          "id": "D",
          "text": "p = F / S"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim zichlik, erkin tushish tezlanishi va balandlikka bog'liq."
    },
    {
      "id": "fizika-619",
      "question": "DTM namunaviy fizika tahlili: Arximed kuchi (ko'tarish kuchi) qaysi formula orqali hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · a"
        },
        {
          "id": "B",
          "text": "F = P · S"
        },
        {
          "id": "C",
          "text": "F_A = ρ_s · g · V_ch"
        },
        {
          "id": "D",
          "text": "F = k · x"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi siqib chiqarilgan suyuqlik og'irligiga teng."
    },
    {
      "id": "fizika-620",
      "question": "DTM namunaviy fizika tahlili: Paskal qonuniga ko'ra suyuqlik va gazlarga berilgan tashqi bosim qanday uzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Barcha yo'nalishlarda o'zgarishsiz teng uzatiladi"
        },
        {
          "id": "B",
          "text": "Faqat pastga qarab uzatiladi"
        },
        {
          "id": "C",
          "text": "Masofaga qarab kamayadi"
        },
        {
          "id": "D",
          "text": "Faqat idish devorlariga uzatiladi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Paskal qonuni: bosim barcha yo'nalishlarga teng tarqaladi."
    },
    {
      "id": "fizika-621",
      "question": "DTM namunaviy fizika tahlili: Normal atmosfera bosimi simob ustunining necha millimetr balandligiga teng?",
      "options": [
        {
          "id": "A",
          "text": "720 mm Hg"
        },
        {
          "id": "B",
          "text": "760 mm Hg"
        },
        {
          "id": "C",
          "text": "100 mm Hg"
        },
        {
          "id": "D",
          "text": "780 mm Hg"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 atm = 760 mm simob ustuni ≈ 101325 Pa."
    },
    {
      "id": "fizika-622",
      "question": "DTM namunaviy fizika tahlili: Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "p · V = const"
        },
        {
          "id": "B",
          "text": "E = k · T"
        },
        {
          "id": "C",
          "text": "p = (1/3) · n · m_0 · v²"
        },
        {
          "id": "D",
          "text": "p = ρ · g · h"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Bosim zarrachalar konsentratsiyasi va o'rtacha kinetik energiyasiga bog'liq."
    },
    {
      "id": "fizika-623",
      "question": "DTM namunaviy fizika tahlili: Mendeleyev-Klapeyron tenglamasi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "p · V = (m / M) · R · T"
        },
        {
          "id": "B",
          "text": "p · V = const"
        },
        {
          "id": "C",
          "text": "p / T = const"
        },
        {
          "id": "D",
          "text": "V / T = const"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ideal gaz holat tenglamasi: pV = νRT."
    },
    {
      "id": "fizika-624",
      "question": "DTM namunaviy fizika tahlili: Izotermik jarayonda gazning qaysi parametri o'zgarmas saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Massa va hajm"
        },
        {
          "id": "B",
          "text": "Harorat (T = const, Boyl-Mariott qonuni)"
        },
        {
          "id": "C",
          "text": "Hajm (V = const)"
        },
        {
          "id": "D",
          "text": "Bosim (p = const)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: T = const bo'lganda pV = const."
    },
    {
      "id": "fizika-625",
      "question": "DTM namunaviy fizika tahlili: Izobarik jarayonda gazning qaysi parametri doimiy bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Harorat (T = const)"
        },
        {
          "id": "B",
          "text": "Bosim (p = const, Gey-Lyussak qonuni)"
        },
        {
          "id": "C",
          "text": "Hajm (V = const)"
        },
        {
          "id": "D",
          "text": "Zichlik"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: p = const bo'lganda V/T = const."
    },
    {
      "id": "fizika-626",
      "question": "DTM namunaviy fizika tahlili: Izoxorik jarayonda gazning qaysi kattaligi o'zgarmaydi?",
      "options": [
        {
          "id": "A",
          "text": "Ichki energiya"
        },
        {
          "id": "B",
          "text": "Hajm (V = const, Sharl qonuni)"
        },
        {
          "id": "C",
          "text": "Bosim (p = const)"
        },
        {
          "id": "D",
          "text": "Harorat (T = const)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: V = const bo'lganda p/T = const."
    },
    {
      "id": "fizika-627",
      "question": "DTM namunaviy fizika tahlili: Issiqlik almashinuvsiz kechuvchi termodinamik jarayon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Adiabatik jarayon (Q = 0)"
        },
        {
          "id": "B",
          "text": "Izobarik jarayon"
        },
        {
          "id": "C",
          "text": "Izoxorik jarayon"
        },
        {
          "id": "D",
          "text": "Izotermik jarayon"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tashqi muhit bilan issiqlik almashinmaydigan jarayon adiabatik deyiladi."
    },
    {
      "id": "fizika-628",
      "question": "DTM namunaviy fizika tahlili: Termodinamikaning birinchi qonuni qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "B",
          "text": "A = p · ΔV"
        },
        {
          "id": "C",
          "text": "Q = ΔU + A"
        },
        {
          "id": "D",
          "text": "ΔU = Q + A"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimga berilgan issiqlik uning ichki energiyasini oshirishga va ish bajarishga sarflanadi."
    },
    {
      "id": "fizika-629",
      "question": "DTM namunaviy fizika tahlili: Mutloq nol harorat Selsiy shkalasi bo'yicha necha darajaga to'g'ri keladi?",
      "options": [
        {
          "id": "A",
          "text": "-273.15 °C"
        },
        {
          "id": "B",
          "text": "-373.15 °C"
        },
        {
          "id": "C",
          "text": "-100 °C"
        },
        {
          "id": "D",
          "text": "0 °C"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 0 Kelvin = -273.15 °C."
    },
    {
      "id": "fizika-630",
      "question": "DTM namunaviy fizika tahlili: Karno sikli bo'yicha ishlovchi ideal issiqlik mashinasining FIK formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "η = T_2 / T_1"
        },
        {
          "id": "B",
          "text": "η = Q_2 / Q_1"
        },
        {
          "id": "C",
          "text": "η = (T_1 + T_2) / T_1"
        },
        {
          "id": "D",
          "text": "η = (T_1 - T_2) / T_1"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: T1 - isitgich, T2 - sovutgich harorati."
    },
    {
      "id": "fizika-631",
      "question": "DTM namunaviy fizika tahlili: Kulon qonuniga ko'ra nuqtaviy zaryadlarning o'zaro ta'sir kuchi qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = k · |q1 · q2| / r²"
        },
        {
          "id": "B",
          "text": "F = q · v · B"
        },
        {
          "id": "C",
          "text": "F = q · E"
        },
        {
          "id": "D",
          "text": "F = I · B · L"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kulon kuchi zaryadlar ko'paytmasiga to'g'ri va masofa kvadratiga teskari mutanosib."
    },
    {
      "id": "fizika-632",
      "question": "DTM namunaviy fizika tahlili: Elektr maydon kuchlanganligi E ning ta'rif formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = k · q / r"
        },
        {
          "id": "B",
          "text": "E = U / d"
        },
        {
          "id": "C",
          "text": "E = F / q"
        },
        {
          "id": "D",
          "text": "φ = W / q"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlanganlik birlik musbat zaryadga ta'sir qiluvchi kuchdir."
    },
    {
      "id": "fizika-633",
      "question": "DTM namunaviy fizika tahlili: Kondensator sig'imining SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Veber (Wb)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Farad (F)"
        },
        {
          "id": "D",
          "text": "Klon (C)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Elektr sig'im Faradlarda o'lchanadi."
    },
    {
      "id": "fizika-634",
      "question": "DTM namunaviy fizika tahlili: Zanjirning bir qismi uchun Om qonuni qaysi?",
      "options": [
        {
          "id": "A",
          "text": "U = I · R²"
        },
        {
          "id": "B",
          "text": "I = U / R"
        },
        {
          "id": "C",
          "text": "I = E / (R + r)"
        },
        {
          "id": "D",
          "text": "P = I · U"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosib."
    },
    {
      "id": "fizika-635",
      "question": "DTM namunaviy fizika tahlili: To'liq zanjir uchun Om qonuni formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = ε / (R + r)"
        },
        {
          "id": "B",
          "text": "I = U / R"
        },
        {
          "id": "C",
          "text": "U = ε - I · r"
        },
        {
          "id": "D",
          "text": "P = I² · R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: ε - EYK, R - tashqi qarshilik, r - ichki qarshilik."
    },
    {
      "id": "fizika-636",
      "question": "DTM namunaviy fizika tahlili: O'tkazgichning qarshiligi uning o'lchamlariga qanday bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "R = ρ · l / S"
        },
        {
          "id": "B",
          "text": "R = P / I²"
        },
        {
          "id": "C",
          "text": "R = S / (ρ · l)"
        },
        {
          "id": "D",
          "text": "R = U / I"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Qarshilik uzunlikka to'g'ri, ko'ndalang kesim yuziga teskari proportsional."
    },
    {
      "id": "fizika-637",
      "question": "DTM namunaviy fizika tahlili: Ketma-ket ulangan o'tkazgichlarda qaysi fizik kattalik bir xil bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat (P)"
        },
        {
          "id": "B",
          "text": "Kuchlanish (U)"
        },
        {
          "id": "C",
          "text": "Tok kuchi (I = const)"
        },
        {
          "id": "D",
          "text": "Qarshilik (R)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ketma-ket ulanishda barcha qismlardan bir xil tok o'tadi."
    },
    {
      "id": "fizika-638",
      "question": "DTM namunaviy fizika tahlili: Parallel ulangan o'tkazgichlarda qaysi parametr barchasida teng bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi (I)"
        },
        {
          "id": "B",
          "text": "Qarshilik (R)"
        },
        {
          "id": "C",
          "text": "Kuchlanish (U = const)"
        },
        {
          "id": "D",
          "text": "Zaryad (q)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Parallel tarmoqlarda kuchlanishlar bir xil bo'ladi."
    },
    {
      "id": "fizika-639",
      "question": "DTM namunaviy fizika tahlili: Joul-Lens qonuni bo'yicha o'tkazgichda ajraladigan issiqlik miqdori qanday hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "B",
          "text": "Q = I² · R · t"
        },
        {
          "id": "C",
          "text": "Q = I · R · t"
        },
        {
          "id": "D",
          "text": "Q = U · I"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ajraladigan issiqlik tok kvadratiga to'g'ri proportsional."
    },
    {
      "id": "fizika-640",
      "question": "DTM namunaviy fizika tahlili: Magnit maydon induksiyasi B ning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Veber (Wb)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Tesla (Tl)"
        },
        {
          "id": "D",
          "text": "Ersted"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit maydon induksiyasi Teslada o'lchanadi."
    },
    {
      "id": "fizika-641",
      "question": "DTM namunaviy fizika tahlili: Magnit oqimi Φ ning SI dagi o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Tesla (Tl)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Volt"
        },
        {
          "id": "D",
          "text": "Veber (Wb)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit oqimi Veberda o'lchanadi (1 Wb = 1 Tl · m²)."
    },
    {
      "id": "fizika-642",
      "question": "DTM namunaviy fizika tahlili: Magnit maydonida harakatlanayotgan zaryadli zarrachaga ta'sir qiluvchi kuch nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Gravitatsiya kuchi"
        },
        {
          "id": "B",
          "text": "Amper kuchi"
        },
        {
          "id": "C",
          "text": "Lorens kuchi (F = q·v·B·sinα)"
        },
        {
          "id": "D",
          "text": "Kulon kuchi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi harakatdagi zaryadga ta'sir qiladi."
    },
    {
      "id": "fizika-643",
      "question": "DTM namunaviy fizika tahlili: Tokli o'tkazgichga magnit maydoni tomonidan ta'sir etuvchi kuch qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "B",
          "text": "Amper kuchi (F = I·B·L·sinα)"
        },
        {
          "id": "C",
          "text": "Lorens kuchi"
        },
        {
          "id": "D",
          "text": "Kulon kuchi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Amper kuchi tokli o'tkazgichga ta'sir qiladi."
    },
    {
      "id": "fizika-644",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit induksiya hodisasini 1831-yilda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Gans Ersted"
        },
        {
          "id": "B",
          "text": "Genrix Gers"
        },
        {
          "id": "C",
          "text": "Jeyms Maksvell"
        },
        {
          "id": "D",
          "text": "Maykl Faradey"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Faradey o'zgaruvchan magnit maydoni tok hosil qilishini isbotlagan."
    },
    {
      "id": "fizika-645",
      "question": "DTM namunaviy fizika tahlili: Konturda hosil bo'lgan induksion tok yo'nalishini aniqlovchi qoida qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Chap qo'l qoidasi"
        },
        {
          "id": "B",
          "text": "O'ng qo'l qoidasi"
        },
        {
          "id": "C",
          "text": "Lens qoidasi"
        },
        {
          "id": "D",
          "text": "Vint qoidasi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Lens qoidasi: induksion tok o'zini vujudga keltirgan sababga qarshilik ko'rsatadi."
    },
    {
      "id": "fizika-646",
      "question": "DTM namunaviy fizika tahlili: G'altakning induktivlik birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Veber (Wb)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Farad (F)"
        },
        {
          "id": "D",
          "text": "Tesla (Tl)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: O'zinduksiya kattaligi Genrida o'lchanadi."
    },
    {
      "id": "fizika-647",
      "question": "DTM namunaviy fizika tahlili: Matematik mayatnikning tebranish davri qaysi formula bilan ifodalanadi (Gyuygens formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "B",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "C",
          "text": "T = 1 / ν"
        },
        {
          "id": "D",
          "text": "T = 2π · √(g / l)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Mayatnik davri uzunlikka va erkin tushish tezlanishiga bog'liq."
    },
    {
      "id": "fizika-648",
      "question": "DTM namunaviy fizika tahlili: Prujinali mayatnikning tebranish davri formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(k / m)"
        },
        {
          "id": "B",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "C",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "D",
          "text": "T = m · v / k"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Davr massa va bikrlikka bog'liq."
    },
    {
      "id": "fizika-649",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit tebranish konturining tebranish davri formulasi qanday ataladi (Tomson formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "ν = 1 / (2πLC)"
        },
        {
          "id": "B",
          "text": "T = 2π · √(L / C)"
        },
        {
          "id": "C",
          "text": "T = 2π · √(L · C)"
        },
        {
          "id": "D",
          "text": "T = 2π · L · C"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Tomson formulasi: T = 2π√(LC)."
    },
    {
      "id": "fizika-650",
      "question": "DTM namunaviy fizika tahlili: To'lqin uzunligi λ, tarqalish tezligi v va chastota ν orasidagi bog'liqlik qaysi?",
      "options": [
        {
          "id": "A",
          "text": "λ = v / ν"
        },
        {
          "id": "B",
          "text": "λ = v · ν"
        },
        {
          "id": "C",
          "text": "λ = ν / v"
        },
        {
          "id": "D",
          "text": "v = λ / T²"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: To'lqin uzunligi tezlikning tebranish chastotasiga nisbatiga teng."
    },
    {
      "id": "fizika-651",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning qaytish qonuniga ko'ra tushish burchagi α va qaytish burchagi β qanday munosabatda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "α < β"
        },
        {
          "id": "B",
          "text": "α > β"
        },
        {
          "id": "C",
          "text": "α + β = 90°"
        },
        {
          "id": "D",
          "text": "α = β (tushish burchagi qaytish burchagiga teng)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Yorug'likning qaytish burchagi tushish burchagiga teng."
    },
    {
      "id": "fizika-652",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning sinish qonuni (Snellius qonuni) qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "cosα / cosβ = n"
        },
        {
          "id": "B",
          "text": "sinα · sinβ = n"
        },
        {
          "id": "C",
          "text": "sinα / sinβ = n_2 / n_1"
        },
        {
          "id": "D",
          "text": "tgα = n"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Sinuslarning nisbati nisbiy sindirish ko'rsatkichiga teng."
    },
    {
      "id": "fizika-653",
      "question": "DTM namunaviy fizika tahlili: Yupqa qavariq linzaning fokus masofasi F, jism masofasi d va tasvir masofasi f orasidagi formula qaysi?",
      "options": [
        {
          "id": "A",
          "text": "1/F = 1/d - 1/f"
        },
        {
          "id": "B",
          "text": "1/F = 1/d + 1/f"
        },
        {
          "id": "C",
          "text": "D = d / f"
        },
        {
          "id": "D",
          "text": "F = d + f"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Yupqa linza formulasi: 1/F = 1/d + 1/f."
    },
    {
      "id": "fizika-654",
      "question": "DTM namunaviy fizika tahlili: Linzaning optik kuchi D qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Gradus"
        },
        {
          "id": "B",
          "text": "Dioptriya (dptr)"
        },
        {
          "id": "C",
          "text": "Radian"
        },
        {
          "id": "D",
          "text": "Metr (m)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 dptr = 1 / 1 m."
    },
    {
      "id": "fizika-655",
      "question": "DTM namunaviy fizika tahlili: Oq yorug'likning prizmadan o'tganda spektrga (ranglarga) ajralish hodisasi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Polyarizatsiya"
        },
        {
          "id": "B",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Nyuton ochgan dispersiya hodisasi."
    },
    {
      "id": "fizika-656",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik to'lqinlarining to'siqlarni aylanib o'tish hodisasi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Interferensiya"
        },
        {
          "id": "C",
          "text": "Refraksiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqinlarning to'siq ortiga o'tishi diffraksiyadir."
    },
    {
      "id": "fizika-657",
      "question": "DTM namunaviy fizika tahlili: Kogerent to'lqinlarning fazoda qo'shilib, kuchayishi yoki susayishi hodisasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Dispersiya"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Yutilish"
        },
        {
          "id": "D",
          "text": "Interferensiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik interferensiyasi to'lqin xususiyatini isbotlaydi."
    },
    {
      "id": "fizika-658",
      "question": "DTM namunaviy fizika tahlili: Foton energiyasi Plank formulasi bo'yicha qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "E = p · c²"
        },
        {
          "id": "C",
          "text": "E = h · ν"
        },
        {
          "id": "D",
          "text": "E = h / λ²"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: h - Plank doimiysi, ν - chastota."
    },
    {
      "id": "fizika-659",
      "question": "DTM namunaviy fizika tahlili: Plank doimiysi h ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "9.11 · 10⁻³¹ kg"
        },
        {
          "id": "B",
          "text": "6.63 · 10⁻³⁴ J·s"
        },
        {
          "id": "C",
          "text": "3 · 10⁸ m/s"
        },
        {
          "id": "D",
          "text": "1.6 · 10⁻¹⁹ C"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Plank doimiysi h ≈ 6.63·10^-34 J·s."
    },
    {
      "id": "fizika-660",
      "question": "DTM namunaviy fizika tahlili: Fotoeffekt uchun Eynshteyn tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h · ν = A_chiqish + (m · v²) / 2"
        },
        {
          "id": "B",
          "text": "E = m · c²"
        },
        {
          "id": "C",
          "text": "A = e · U"
        },
        {
          "id": "D",
          "text": "h · ν = A_chiqish"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Yutilgan foton energiyasi elektronni chiqarish va unga kinetik energiya berishga sarflanadi."
    },
    {
      "id": "fizika-661",
      "question": "DTM namunaviy fizika tahlili: Atomning sayyorasimon (planetar) modelini kim taklif etgan?",
      "options": [
        {
          "id": "A",
          "text": "J. Tomson"
        },
        {
          "id": "B",
          "text": "D. Mendeleyev"
        },
        {
          "id": "C",
          "text": "Ernest Rezerford (1911-yilda)"
        },
        {
          "id": "D",
          "text": "Nils Bor"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Rezerford alfa-zarrachalar sochilishi tajribasidan so'ng yadro modelini yaratdi."
    },
    {
      "id": "fizika-662",
      "question": "DTM namunaviy fizika tahlili: Atom yadrosi qanday zarrachalardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Protonlar va neytronlar (nuklonlar)"
        },
        {
          "id": "B",
          "text": "Protonlar va elektronlar"
        },
        {
          "id": "C",
          "text": "Faqat neytronlar"
        },
        {
          "id": "D",
          "text": "Elektronlar va pozitronlar"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Yadro musbat proton va neytral neytronlardan iborat."
    },
    {
      "id": "fizika-663",
      "question": "DTM namunaviy fizika tahlili: Yadrodagi neytronlar soni N qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = A + Z"
        },
        {
          "id": "B",
          "text": "N = A / Z"
        },
        {
          "id": "C",
          "text": "N = A - Z"
        },
        {
          "id": "D",
          "text": "N = Z - A"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Massaviy son A dan tartib raqam Z ayiriladi."
    },
    {
      "id": "fizika-664",
      "question": "DTM namunaviy fizika tahlili: Yarim yemirilish davri T nima?",
      "options": [
        {
          "id": "A",
          "text": "Yadro massasining 2 barobar ortish vaqti"
        },
        {
          "id": "B",
          "text": "Dastlabki radioaktiv yadrolar sonining yarmi yemirilishi uchun ketgan vaqt"
        },
        {
          "id": "C",
          "text": "Zarrachalar tezligi 2 barobar kamayishi"
        },
        {
          "id": "D",
          "text": "To'liq yemirilish vaqti"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: N(t) = N_0 · 2^(-t/T)."
    },
    {
      "id": "fizika-665",
      "question": "DTM namunaviy fizika tahlili: Eynshteynning massa va energiya bog'liqligi formulasini toping:",
      "options": [
        {
          "id": "A",
          "text": "E = p² / 2m"
        },
        {
          "id": "B",
          "text": "E = m · c²"
        },
        {
          "id": "C",
          "text": "E = h · ν"
        },
        {
          "id": "D",
          "text": "E = k · T"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Tinchlikdagi massa va energiyaning fundamental bog'liqligi."
    },
    {
      "id": "fizika-666",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlik - Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)."
    },
    {
      "id": "fizika-667",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)'?",
      "options": [
        {
          "id": "A",
          "text": "Impuls"
        },
        {
          "id": "B",
          "text": "Kuch"
        },
        {
          "id": "C",
          "text": "Tezlik"
        },
        {
          "id": "D",
          "text": "Tezlanish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlikga tegishli."
    },
    {
      "id": "fizika-668",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlanish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlanish - Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)."
    },
    {
      "id": "fizika-669",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)'?",
      "options": [
        {
          "id": "A",
          "text": "Burchak tezlik"
        },
        {
          "id": "B",
          "text": "Tezlanish"
        },
        {
          "id": "C",
          "text": "Tezlik"
        },
        {
          "id": "D",
          "text": "Kuch"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlanishga tegishli."
    },
    {
      "id": "fizika-670",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch - Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)."
    },
    {
      "id": "fizika-671",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)'?",
      "options": [
        {
          "id": "A",
          "text": "Bosim"
        },
        {
          "id": "B",
          "text": "Massa"
        },
        {
          "id": "C",
          "text": "Impuls"
        },
        {
          "id": "D",
          "text": "Kuch"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuchga tegishli."
    },
    {
      "id": "fizika-672",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Og'irlik kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Og'irlik kuchi - Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)."
    },
    {
      "id": "fizika-673",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)'?",
      "options": [
        {
          "id": "A",
          "text": "Ishqalanish"
        },
        {
          "id": "B",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "C",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "D",
          "text": "Og'irlik (vazn)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Og'irlik kuchiga tegishli."
    },
    {
      "id": "fizika-674",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Jismning vazni (P)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Jismning vazni (P) - Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi."
    },
    {
      "id": "fizika-675",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi'?",
      "options": [
        {
          "id": "A",
          "text": "Jismning vazni (P)"
        },
        {
          "id": "B",
          "text": "Massa"
        },
        {
          "id": "C",
          "text": "Inersiya"
        },
        {
          "id": "D",
          "text": "Og'irlik kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Jismning vazni (P)ga tegishli."
    },
    {
      "id": "fizika-676",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Impuls (Harakat miqdori)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Impuls (Harakat miqdori) - Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)."
    },
    {
      "id": "fizika-677",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)'?",
      "options": [
        {
          "id": "A",
          "text": "Impuls (Harakat miqdori)"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Quvvat"
        },
        {
          "id": "D",
          "text": "Kuch impulsi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Impuls (Harakat miqdori)ga tegishli."
    },
    {
      "id": "fizika-678",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch impulsi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch impulsi - Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)."
    },
    {
      "id": "fizika-679",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch impulsi"
        },
        {
          "id": "B",
          "text": "Mexanik ish"
        },
        {
          "id": "C",
          "text": "Jism impulsi"
        },
        {
          "id": "D",
          "text": "Moment"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch impulsiga tegishli."
    },
    {
      "id": "fizika-680",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kinetik energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kinetik energiya - Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)."
    },
    {
      "id": "fizika-681",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial energiya"
        },
        {
          "id": "B",
          "text": "To'liq energiya"
        },
        {
          "id": "C",
          "text": "Ichki energiya"
        },
        {
          "id": "D",
          "text": "Kinetik energiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kinetik energiyaga tegishli."
    },
    {
      "id": "fizika-682",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Potensial energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Potensial energiya - O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)."
    },
    {
      "id": "fizika-683",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Potensial energiya"
        },
        {
          "id": "B",
          "text": "Ish"
        },
        {
          "id": "C",
          "text": "Issiqlik miqdori"
        },
        {
          "id": "D",
          "text": "Kinetik energiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Potensial energiyaga tegishli."
    },
    {
      "id": "fizika-684",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch momenti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch momenti - Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)."
    },
    {
      "id": "fizika-685",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch momenti"
        },
        {
          "id": "B",
          "text": "Kuch impulsi"
        },
        {
          "id": "C",
          "text": "Bajarilgan ish"
        },
        {
          "id": "D",
          "text": "Bosim"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch momentiga tegishli."
    },
    {
      "id": "fizika-686",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Zichlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Zichlik - Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)."
    },
    {
      "id": "fizika-687",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa"
        },
        {
          "id": "B",
          "text": "Hajm"
        },
        {
          "id": "C",
          "text": "Bosim"
        },
        {
          "id": "D",
          "text": "Zichlik"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Zichlikga tegishli."
    },
    {
      "id": "fizika-688",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Gidrostatik bosim' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim - Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)."
    },
    {
      "id": "fizika-689",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Arximed kuchi"
        },
        {
          "id": "B",
          "text": "Atmosfera bosimi"
        },
        {
          "id": "C",
          "text": "Gidrostatik bosim"
        },
        {
          "id": "D",
          "text": "Dinamik bosim"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Gidrostatik bosimga tegishli."
    },
    {
      "id": "fizika-690",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Arximed kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi - Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)."
    },
    {
      "id": "fizika-691",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)'?",
      "options": [
        {
          "id": "A",
          "text": "Arximed kuchi"
        },
        {
          "id": "B",
          "text": "Qovushqoqlik kuchi"
        },
        {
          "id": "C",
          "text": "Sirt taranglik"
        },
        {
          "id": "D",
          "text": "Og'irlik kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Arximed kuchiga tegishli."
    },
    {
      "id": "fizika-692",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Sirt taranglik koeffitsienti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Sirt taranglik koeffitsienti - Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)."
    },
    {
      "id": "fizika-693",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)'?",
      "options": [
        {
          "id": "A",
          "text": "Qovushqoqlik"
        },
        {
          "id": "B",
          "text": "Sirt taranglik koeffitsienti"
        },
        {
          "id": "C",
          "text": "Kapillyarlik"
        },
        {
          "id": "D",
          "text": "Zichlik"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Sirt taranglik koeffitsientiga tegishli."
    },
    {
      "id": "fizika-694",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Modda miqdori' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Modda miqdori - Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)."
    },
    {
      "id": "fizika-695",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)'?",
      "options": [
        {
          "id": "A",
          "text": "Modda miqdori"
        },
        {
          "id": "B",
          "text": "Zichlik"
        },
        {
          "id": "C",
          "text": "Konsentratsiya"
        },
        {
          "id": "D",
          "text": "Molyar massa"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Modda miqdoriga tegishli."
    },
    {
      "id": "fizika-696",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Avogadro doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Avogadro doimiysi - 1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)."
    },
    {
      "id": "fizika-697",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)'?",
      "options": [
        {
          "id": "A",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "B",
          "text": "Plank doimiysi"
        },
        {
          "id": "C",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "D",
          "text": "Avogadro doimiysi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Avogadro doimiysiga tegishli."
    },
    {
      "id": "fizika-698",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Bolsman doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Bolsman doimiysi - Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)."
    },
    {
      "id": "fizika-699",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)'?",
      "options": [
        {
          "id": "A",
          "text": "Faradey doimiysi"
        },
        {
          "id": "B",
          "text": "Avogadro doimiysi"
        },
        {
          "id": "C",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "D",
          "text": "R-doimiy"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Bolsman doimiysiga tegishli."
    },
    {
      "id": "fizika-700",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Universal gaz doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Universal gaz doimiysi - 1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))."
    },
    {
      "id": "fizika-701",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))'?",
      "options": [
        {
          "id": "A",
          "text": "Plank doimiysi"
        },
        {
          "id": "B",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "C",
          "text": "Kulon doimiysi"
        },
        {
          "id": "D",
          "text": "Bolsman doimiysi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Universal gaz doimiysiga tegishli."
    },
    {
      "id": "fizika-702",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma issiqlik sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma issiqlik sig'imi - 1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))."
    },
    {
      "id": "fizika-703",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))'?",
      "options": [
        {
          "id": "A",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "B",
          "text": "Solishtirma issiqlik sig'imi"
        },
        {
          "id": "C",
          "text": "Solishtirma yonish issiqligi"
        },
        {
          "id": "D",
          "text": "Solishtirma erish issiqligi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma issiqlik sig'imiga tegishli."
    },
    {
      "id": "fizika-704",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma erish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma erish issiqligi - Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)."
    },
    {
      "id": "fizika-705",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma erish issiqligi"
        },
        {
          "id": "B",
          "text": "Yonish issiqligi"
        },
        {
          "id": "C",
          "text": "Issiqlik sig'imi"
        },
        {
          "id": "D",
          "text": "Bug'lanish issiqligi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma erish issiqligiga tegishli."
    },
    {
      "id": "fizika-706",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma bug'lanish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma bug'lanish issiqligi - Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)."
    },
    {
      "id": "fizika-707",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Yonish issiqligi"
        },
        {
          "id": "B",
          "text": "Solishtirma bug'lanish issiqligi"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Erish issiqligi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma bug'lanish issiqligiga tegishli."
    },
    {
      "id": "fizika-708",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Ichki energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ichki energiya - Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi."
    },
    {
      "id": "fizika-709",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi'?",
      "options": [
        {
          "id": "A",
          "text": "Kimyoviy energiya"
        },
        {
          "id": "B",
          "text": "Ichki energiya"
        },
        {
          "id": "C",
          "text": "Mexanik energiya"
        },
        {
          "id": "D",
          "text": "Entalpiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Ichki energiyaga tegishli."
    },
    {
      "id": "fizika-710",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr zaryadi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr zaryadi - Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)."
    },
    {
      "id": "fizika-711",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuchlanish"
        },
        {
          "id": "B",
          "text": "Tok kuchi"
        },
        {
          "id": "C",
          "text": "Sig'im"
        },
        {
          "id": "D",
          "text": "Elektr zaryadi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr zaryadiga tegishli."
    },
    {
      "id": "fizika-712",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr sig'imi - O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)."
    },
    {
      "id": "fizika-713",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)'?",
      "options": [
        {
          "id": "A",
          "text": "O'tkazuvchanlik"
        },
        {
          "id": "B",
          "text": "Induktivlik"
        },
        {
          "id": "C",
          "text": "Qarshilik"
        },
        {
          "id": "D",
          "text": "Elektr sig'imi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr sig'imiga tegishli."
    },
    {
      "id": "fizika-714",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr kuchlanish (potensiallar ayirmasi)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr kuchlanish (potensiallar ayirmasi) - Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)."
    },
    {
      "id": "fizika-715",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi"
        },
        {
          "id": "B",
          "text": "Elektr kuchlanish (potensiallar ayirmasi)"
        },
        {
          "id": "C",
          "text": "Kuchlanganlik"
        },
        {
          "id": "D",
          "text": "EYK"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr kuchlanish (potensiallar ayirmasi)ga tegishli."
    },
    {
      "id": "fizika-716",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr yurituvchi kuch (EYK)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr yurituvchi kuch (EYK) - Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)."
    },
    {
      "id": "fizika-717",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi"
        },
        {
          "id": "B",
          "text": "Kuchlanish"
        },
        {
          "id": "C",
          "text": "Potensial"
        },
        {
          "id": "D",
          "text": "Elektr yurituvchi kuch (EYK)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr yurituvchi kuch (EYK)ga tegishli."
    },
    {
      "id": "fizika-718",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma qarshilik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma qarshilik - Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)."
    },
    {
      "id": "fizika-719",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Induktivlik"
        },
        {
          "id": "B",
          "text": "Solishtirma qarshilik"
        },
        {
          "id": "C",
          "text": "Elektr sig'im"
        },
        {
          "id": "D",
          "text": "O'tkazuvchanlik"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma qarshilikga tegishli."
    },
    {
      "id": "fizika-720",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr tokining quvvati' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr tokining quvvati - Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)."
    },
    {
      "id": "fizika-721",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)'?",
      "options": [
        {
          "id": "A",
          "text": "EYK"
        },
        {
          "id": "B",
          "text": "Elektr ishi"
        },
        {
          "id": "C",
          "text": "Elektr tokining quvvati"
        },
        {
          "id": "D",
          "text": "Tok zichligi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr tokining quvvatiga tegishli."
    },
    {
      "id": "fizika-722",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Lorens kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi - Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-723",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Lorens kuchi"
        },
        {
          "id": "C",
          "text": "Amper kuchi"
        },
        {
          "id": "D",
          "text": "Og'irlik kuchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Lorens kuchiga tegishli."
    },
    {
      "id": "fizika-724",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Amper kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Amper kuchi - Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-725",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Amper kuchi"
        },
        {
          "id": "B",
          "text": "Kulon kuchi"
        },
        {
          "id": "C",
          "text": "Lorens kuchi"
        },
        {
          "id": "D",
          "text": "Elastiklik kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Amper kuchiga tegishli."
    },
    {
      "id": "fizika-726",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'O'zinduksiya hodisasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: O'zinduksiya hodisasi - Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi."
    },
    {
      "id": "fizika-727",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "Gistorezisi"
        },
        {
          "id": "B",
          "text": "O'zinduksiya hodisasi"
        },
        {
          "id": "C",
          "text": "O'zaro induksiya"
        },
        {
          "id": "D",
          "text": "Fotoeffekt"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif O'zinduksiya hodisasiga tegishli."
    },
    {
      "id": "fizika-728",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Transformator' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Transformator - O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma."
    },
    {
      "id": "fizika-729",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Transformator"
        },
        {
          "id": "B",
          "text": "Dvigatel"
        },
        {
          "id": "C",
          "text": "Kondensator"
        },
        {
          "id": "D",
          "text": "Generator"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Transformatorga tegishli."
    },
    {
      "id": "fizika-730",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish davri' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish davri - Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)."
    },
    {
      "id": "fizika-731",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)'?",
      "options": [
        {
          "id": "A",
          "text": "Chastota"
        },
        {
          "id": "B",
          "text": "Amplituda"
        },
        {
          "id": "C",
          "text": "Tebranish davri"
        },
        {
          "id": "D",
          "text": "Faza"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish davriga tegishli."
    },
    {
      "id": "fizika-732",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish chastotasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish chastotasi - Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)."
    },
    {
      "id": "fizika-733",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)'?",
      "options": [
        {
          "id": "A",
          "text": "Davr"
        },
        {
          "id": "B",
          "text": "Amplituda"
        },
        {
          "id": "C",
          "text": "Tebranish chastotasi"
        },
        {
          "id": "D",
          "text": "To'lqin soni"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish chastotasiga tegishli."
    },
    {
      "id": "fizika-734",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin interferensiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin interferensiyasi - Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi."
    },
    {
      "id": "fizika-735",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "To'lqin interferensiyasi"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Yutilish"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin interferensiyasiga tegishli."
    },
    {
      "id": "fizika-736",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin diffraksiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin diffraksiyasi - To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi."
    },
    {
      "id": "fizika-737",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Interferensiya"
        },
        {
          "id": "B",
          "text": "Sinish"
        },
        {
          "id": "C",
          "text": "To'lqin diffraksiyasi"
        },
        {
          "id": "D",
          "text": "Polyarizatsiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin diffraksiyasiga tegishli."
    },
    {
      "id": "fizika-738",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'lik dispersiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik dispersiyasi - Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi."
    },
    {
      "id": "fizika-739",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi'?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Yutilish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'lik dispersiyasiga tegishli."
    },
    {
      "id": "fizika-740",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'liq ichki qaytish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: To'liq ichki qaytish - Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi."
    },
    {
      "id": "fizika-741",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi'?",
      "options": [
        {
          "id": "A",
          "text": "Dispersiya"
        },
        {
          "id": "B",
          "text": "To'liq ichki qaytish"
        },
        {
          "id": "C",
          "text": "Sinish"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'liq ichki qaytishga tegishli."
    },
    {
      "id": "fizika-742",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Fotoeffekt' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Fotoeffekt - Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi."
    },
    {
      "id": "fizika-743",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi'?",
      "options": [
        {
          "id": "A",
          "text": "Lyuminessensiya"
        },
        {
          "id": "B",
          "text": "Fotoeffekt"
        },
        {
          "id": "C",
          "text": "Termoemissiya"
        },
        {
          "id": "D",
          "text": "Rentgen nurlanishi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Fotoeffektga tegishli."
    },
    {
      "id": "fizika-744",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'likning qizil chegarasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'likning qizil chegarasi - Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)."
    },
    {
      "id": "fizika-745",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)'?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'likning qizil chegarasi"
        },
        {
          "id": "B",
          "text": "Diffraksiya burchagi"
        },
        {
          "id": "C",
          "text": "Spektr chegarasi"
        },
        {
          "id": "D",
          "text": "Ko'rinish chegarasi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'likning qizil chegarasiga tegishli."
    },
    {
      "id": "fizika-746",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yadro bog'lanish energiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Yadro bog'lanish energiyasi - Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)."
    },
    {
      "id": "fizika-747",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)'?",
      "options": [
        {
          "id": "A",
          "text": "Ionlanish energiyasi"
        },
        {
          "id": "B",
          "text": "Yadro bog'lanish energiyasi"
        },
        {
          "id": "C",
          "text": "Aktivlanish energiyasi"
        },
        {
          "id": "D",
          "text": "Chiqish ishi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yadro bog'lanish energiyasiga tegishli."
    },
    {
      "id": "fizika-748",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Massa defekti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Massa defekti - Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)."
    },
    {
      "id": "fizika-749",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa nisbati"
        },
        {
          "id": "B",
          "text": "Zichlik defekti"
        },
        {
          "id": "C",
          "text": "Relativistik massa"
        },
        {
          "id": "D",
          "text": "Massa defekti"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Massa defektiga tegishli."
    },
    {
      "id": "fizika-750",
      "question": "DTM namunaviy fizika tahlili: Moddiy nuqta nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat mikrozarracha"
        },
        {
          "id": "B",
          "text": "Hajmi nolga teng jism"
        },
        {
          "id": "C",
          "text": "Harakat sharoitida o'lchamlari hisobga olinmasa ham bo'ladigan jism"
        },
        {
          "id": "D",
          "text": "Qo'zg'almas jism"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: O'lchamlari ko'rilayotgan masofalarga nisbatan juda kichik bo'lgan jism."
    },
    {
      "id": "fizika-751",
      "question": "DTM namunaviy fizika tahlili: Sanoq sistemasi qanday elementlardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat chizg'ich va soat"
        },
        {
          "id": "B",
          "text": "Faqat Yer sathi"
        },
        {
          "id": "C",
          "text": "Sanoq jismi, u bilan bog'langan koordinatalar sistemasi va vaqt o'lchagich (soat)"
        },
        {
          "id": "D",
          "text": "Faqat harakat trayektoriyasi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Sanoq sistemasi = Sanoq jismi + Koordinata sistemasi + Soat."
    },
    {
      "id": "fizika-752",
      "question": "DTM namunaviy fizika tahlili: Trayektoriya nima?",
      "options": [
        {
          "id": "A",
          "text": "Harakatlanayotgan jism qoldirgan yoki chizgan chiziq"
        },
        {
          "id": "B",
          "text": "Vaqt birligi"
        },
        {
          "id": "C",
          "text": "Boshlang'ich va oxirgi nuqtalarni tutashtiruvchi vektor"
        },
        {
          "id": "D",
          "text": "Bosib o'tilgan yo'l uzunligi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Fazoda jism harakatlangan iz/chiziq trayektoriya deyiladi."
    },
    {
      "id": "fizika-753",
      "question": "DTM namunaviy fizika tahlili: Ko'chish nima?",
      "options": [
        {
          "id": "A",
          "text": "Harakatning boshlang'ich va oxirgi nuqtalarini tutashtiruvchi yo'nalishga ega to'g'ri chiziq kesmasi (vektor)"
        },
        {
          "id": "B",
          "text": "Faqat tezlik vektori"
        },
        {
          "id": "C",
          "text": "Bosib o'tilgan yo'l"
        },
        {
          "id": "D",
          "text": "Trayektoriyaning uzunligi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chish vektor kattalik, yo'l esa skalyar kattalik."
    },
    {
      "id": "fizika-754",
      "question": "DTM namunaviy fizika tahlili: Teng o'zgaruvchan harakatda tezlanish qanday kattalik hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt o'tishi bilan o'zgarmas (a = const)"
        },
        {
          "id": "B",
          "text": "Doimiy ortib boruvchi"
        },
        {
          "id": "C",
          "text": "Nolga teng"
        },
        {
          "id": "D",
          "text": "Davriy tebranuvchi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Teng o'zgaruvchan harakatda a = const bo'ladi."
    },
    {
      "id": "fizika-755",
      "question": "DTM namunaviy fizika tahlili: Boshlang'ich tezliksiz erkin tushayotgan jismning t vaqtdagi tushish balandligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h = (g · t²) / 2"
        },
        {
          "id": "B",
          "text": "h = 2g / t²"
        },
        {
          "id": "C",
          "text": "h = v · t"
        },
        {
          "id": "D",
          "text": "h = g · t"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlang'ich tezlik v0 = 0 bo'lganda h = gt²/2."
    },
    {
      "id": "fizika-756",
      "question": "DTM namunaviy fizika tahlili: Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Aylana"
        },
        {
          "id": "B",
          "text": "To'g'ri chiziq"
        },
        {
          "id": "C",
          "text": "Giperbola"
        },
        {
          "id": "D",
          "text": "Parabola"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Havoning qarshiligi hisobga olinmaganda trayektoriya paraboladir."
    },
    {
      "id": "fizika-757",
      "question": "DTM namunaviy fizika tahlili: Aylanma harakatda markazga intilma tezlanish formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "a = v / t"
        },
        {
          "id": "B",
          "text": "a = v · R"
        },
        {
          "id": "C",
          "text": "a = v² / R = ω² · R"
        },
        {
          "id": "D",
          "text": "a = ω / R"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Markazga intilma tezlanish a_m = v²/R."
    },
    {
      "id": "fizika-758",
      "question": "DTM namunaviy fizika tahlili: Birinchi kosmik tezlikning Yer uchun taxminiy qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "7.9 km/s"
        },
        {
          "id": "B",
          "text": "11.2 km/s"
        },
        {
          "id": "C",
          "text": "16.7 km/s"
        },
        {
          "id": "D",
          "text": "300 000 km/s"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yer atrofida pastki orbitada aylanish tezligi v1 ≈ 7.9 km/s."
    },
    {
      "id": "fizika-759",
      "question": "DTM namunaviy fizika tahlili: Ikkinchi kosmik tezlik (parabolik tezlik) Yer uchun qanchaga teng?",
      "options": [
        {
          "id": "A",
          "text": "16.7 km/s"
        },
        {
          "id": "B",
          "text": "9.8 km/s"
        },
        {
          "id": "C",
          "text": "7.9 km/s"
        },
        {
          "id": "D",
          "text": "11.2 km/s"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Yer gravitatsiyasini yengib chiqish tezligi v2 ≈ 11.2 km/s."
    },
    {
      "id": "fizika-760",
      "question": "DTM namunaviy fizika tahlili: Uchinchi kosmik tezlik Yer uchun qancha?",
      "options": [
        {
          "id": "A",
          "text": "42 km/s"
        },
        {
          "id": "B",
          "text": "11.2 km/s"
        },
        {
          "id": "C",
          "text": "7.9 km/s"
        },
        {
          "id": "D",
          "text": "16.7 km/s"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh sistemasini tark etish tezligi v3 ≈ 16.7 km/s."
    },
    {
      "id": "fizika-761",
      "question": "DTM namunaviy fizika tahlili: Og'irlik markazi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tayanch nuqtasi"
        },
        {
          "id": "B",
          "text": "Jismning barcha qismlariga ta'sir qiluvchi og'irlik kuchlarining teng ta'sir etuvchisi qo'yilgan nuqta"
        },
        {
          "id": "C",
          "text": "Jismning geometrik o'rtasi"
        },
        {
          "id": "D",
          "text": "Massa eng ko'p to'plangan nuqta"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Og'irlik kuchining qo'yilish nuqtasi."
    },
    {
      "id": "fizika-762",
      "question": "DTM namunaviy fizika tahlili: Richagning muvozanat sharti qanday ifodalanadi (Arximed qoidasi)?",
      "options": [
        {
          "id": "A",
          "text": "F1 · F2 = l1 · l2"
        },
        {
          "id": "B",
          "text": "F1 · l1 = F2 · l2"
        },
        {
          "id": "C",
          "text": "F1 + F2 = l1 + l2"
        },
        {
          "id": "D",
          "text": "F1 / l1 = F2 / l2"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlar momentlari o'zaro teng bo'lishi kerak."
    },
    {
      "id": "fizika-763",
      "question": "DTM namunaviy fizika tahlili: Ko'chmas blok qanday mexanik yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "Kuchdan yutuq bermaydi, faqat kuch yo'nalishini o'zgartiradi"
        },
        {
          "id": "B",
          "text": "Tezlikdan yutuq beradi"
        },
        {
          "id": "C",
          "text": "Kuchdan 2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "Ishdan 2 marta yutuq beradi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chmas blok kuchdan yutuq bermaydi."
    },
    {
      "id": "fizika-764",
      "question": "DTM namunaviy fizika tahlili: Ko'char blok kuchdan necha marta yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "3 marta"
        },
        {
          "id": "B",
          "text": "4 marta"
        },
        {
          "id": "C",
          "text": "2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "Kuchdan yutuq bermaydi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'char blok kuchdan 2 barobar yutuq beradi (masofada 2 marta yutqazadi)."
    },
    {
      "id": "fizika-765",
      "question": "DTM namunaviy fizika tahlili: Mexanikaning 'oltin qoidasi' qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Kuchdan necha marta yutsak, masofada shuncha yutqazamiz (ishdan yutuq olinmaydi)"
        },
        {
          "id": "B",
          "text": "Faqat tezlikdan yutish mumkin"
        },
        {
          "id": "C",
          "text": "Har doim energiyada yutuq bo'ladi"
        },
        {
          "id": "D",
          "text": "Ishdan 2 marta yutish mumkin"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Oddiy mexanizmlar ishdan yutuq bermaydi."
    },
    {
      "id": "fizika-766",
      "question": "DTM namunaviy fizika tahlili: Ideal gaz nima?",
      "options": [
        {
          "id": "A",
          "text": "Xona haroratidagi har qanday gaz"
        },
        {
          "id": "B",
          "text": "Suyuqlikka aylanmaydigan gaz"
        },
        {
          "id": "C",
          "text": "Molekulalari o'lchamlari hisobga olinmaydigan, to'qnashuvdan boshqa vaqtda o'zaro ta'sirlashmaydigan nazariy model"
        },
        {
          "id": "D",
          "text": "Faqat vodorod gazi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Fizikada qo'llanadigan ideallashtirilgan model."
    },
    {
      "id": "fizika-767",
      "question": "DTM namunaviy fizika tahlili: Termodinamik harorat T va Selsiy harorati t o'rtasidagi bog'lanish qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = t · 1.8"
        },
        {
          "id": "B",
          "text": "T = t + 273.15"
        },
        {
          "id": "C",
          "text": "T = 273.15 / t"
        },
        {
          "id": "D",
          "text": "T = t - 273.15"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Kelvin shkalasi T = t + 273.15 K."
    },
    {
      "id": "fizika-768",
      "question": "DTM namunaviy fizika tahlili: Diffuziya hodisasi nimani isbotlaydi?",
      "options": [
        {
          "id": "A",
          "text": "Gravitatsiya ta'sirini"
        },
        {
          "id": "B",
          "text": "Jismning qattiqligini"
        },
        {
          "id": "C",
          "text": "Modda molekulalarining uzluksiz va tartibsiz (xaotik) harakatini"
        },
        {
          "id": "D",
          "text": "Molekulalarning bo'linishini"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Moddalarning o'z-o'zidan aralashib ketishi ularning harakatdaligini ko'rsatadi."
    },
    {
      "id": "fizika-769",
      "question": "DTM namunaviy fizika tahlili: Broun harakati nima?",
      "options": [
        {
          "id": "A",
          "text": "Konveksiya oqimi"
        },
        {
          "id": "B",
          "text": "Faqat tirik bakteriyalar harakati"
        },
        {
          "id": "C",
          "text": "Suyuqlik yoki gazda muallaq turgan mikroskopik zarrachalarning tartibsiz harakati"
        },
        {
          "id": "D",
          "text": "Molekulalarning aylanishi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Suyuqlik molekulalarining zarbalari oqibatida yuz beradi."
    },
    {
      "id": "fizika-770",
      "question": "DTM namunaviy fizika tahlili: Suyuqlikning bug'lanish tezligi nimalarga bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "Faqat idishning rangiga"
        },
        {
          "id": "B",
          "text": "Faqat havo bosimiga"
        },
        {
          "id": "C",
          "text": "Faqat suyuqlik massasiga"
        },
        {
          "id": "D",
          "text": "Suyuqlik turiga, sirt yuzasiga, haroratga va shamolga"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Sirt yuzi, harorat va ochiq havo oqimi bug'lanishni tezlashtiradi."
    },
    {
      "id": "fizika-771",
      "question": "DTM namunaviy fizika tahlili: To'yingan bug' nima?",
      "options": [
        {
          "id": "A",
          "text": "Qaynayotgan bug'"
        },
        {
          "id": "B",
          "text": "Zichligi eng kichik bug'"
        },
        {
          "id": "C",
          "text": "O'z suyuqligi bilan dinamik muvozanatda bo'lgan bug'"
        },
        {
          "id": "D",
          "text": "Qizdirilgan quruq bug'"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Vaqt birligida bug'lanayotgan va kondensatsiyalanayotgan molekulalar soni tenglashadi."
    },
    {
      "id": "fizika-772",
      "question": "DTM namunaviy fizika tahlili: Qaynash nima?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlik erishi"
        },
        {
          "id": "B",
          "text": "Zichlik ortishi"
        },
        {
          "id": "C",
          "text": "Suyuqlikning nafaqat sirtidan, balki butun hajmi bo'ylab pufakchalar hosil qilib jadallik bilan bug'lanishi"
        },
        {
          "id": "D",
          "text": "Faqat sirtqi bug'lanish"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: To'yingan bug' bosimi tashqi bosimga tenglashganda qaynash boshlanadi."
    },
    {
      "id": "fizika-773",
      "question": "DTM namunaviy fizika tahlili: Qattiq jismning suyuqlikka aylanish jarayoni nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Sublimatsiya"
        },
        {
          "id": "B",
          "text": "Kristallanish"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Erish"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Erish jarayonida harorat o'zgarmaydi."
    },
    {
      "id": "fizika-774",
      "question": "DTM namunaviy fizika tahlili: Moddaning to'g'ridan-to'g'ri qattiq holatdan gaz holatiga o'tishi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Erish"
        },
        {
          "id": "B",
          "text": "Sublimatsiya"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Qaynash"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Masalan, yod yoki quruq muzning to'g'ridan-to'g'ri gazga aylanishi."
    },
    {
      "id": "fizika-775",
      "question": "DTM namunaviy fizika tahlili: Gazning to'g'ridan-to'g'ri qattiq holatga o'tishi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Bug'lanish"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Ionlanish"
        },
        {
          "id": "D",
          "text": "Desublimatsiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Sovuqda derazada qirov hosil bo'lishi desublimatsiyadir."
    },
    {
      "id": "fizika-776",
      "question": "DTM namunaviy fizika tahlili: Elektroskop qanday asbob?",
      "options": [
        {
          "id": "A",
          "text": "Jismning elektrlanganganligini aniqlovchi asbob"
        },
        {
          "id": "B",
          "text": "Tok kuchini o'lchovchi asbob"
        },
        {
          "id": "C",
          "text": "Qarshilikni o'lchovchi asbob"
        },
        {
          "id": "D",
          "text": "Kuchlanishni oshiruvchi asbob"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Zaryad bor-yo'qligini yaproqchalarning ochilishidan aniqlaydi."
    },
    {
      "id": "fizika-777",
      "question": "DTM namunaviy fizika tahlili: Metallarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Erkin elektronlar"
        },
        {
          "id": "B",
          "text": "Manfiy ionlar"
        },
        {
          "id": "C",
          "text": "Musbat ionlar"
        },
        {
          "id": "D",
          "text": "Kationlar va anionlar"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Metallarda tok o'tkazuvchilar erkin elektronlardir."
    },
    {
      "id": "fizika-778",
      "question": "DTM namunaviy fizika tahlili: Elektrolitlarda (suyuqliklarda) elektr tokini nimalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat musbat protonlar"
        },
        {
          "id": "B",
          "text": "Musbat va manfiy ionlar"
        },
        {
          "id": "C",
          "text": "Faqat neytronlar"
        },
        {
          "id": "D",
          "text": "Faqat erkin elektronlar"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Elektrolitik dissotsiatsiyada hosil bo'lgan ionlar."
    },
    {
      "id": "fizika-779",
      "question": "DTM namunaviy fizika tahlili: Gazlarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat neytronlar"
        },
        {
          "id": "B",
          "text": "Faqat elektronlar"
        },
        {
          "id": "C",
          "text": "Faqat pozitronlar"
        },
        {
          "id": "D",
          "text": "Elektronlar va musbat hamda manfiy ionlar"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Gaz razryadida ionlar va elektronlar qatnashadi."
    },
    {
      "id": "fizika-780",
      "question": "DTM namunaviy fizika tahlili: Vakuumda elektr toki hosil qilish uchun nima zarur?",
      "options": [
        {
          "id": "A",
          "text": "Termoelektron emissiya (qizdirilgan katoddan elektronlar ajralishi)"
        },
        {
          "id": "B",
          "text": "Elektrolit solish"
        },
        {
          "id": "C",
          "text": "Yuqori bosim"
        },
        {
          "id": "D",
          "text": "Magnit maydon"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Vakuumda termoelektron emissiya orqali tok o'tadi."
    },
    {
      "id": "fizika-781",
      "question": "DTM namunaviy fizika tahlili: Yarimo'tkazgichlarda o'tkazuvchanlik qanday turlarga bo'linadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat ionli"
        },
        {
          "id": "B",
          "text": "Xususiy (elektron-teshikli) va aralashmali (n-tur va p-tur)"
        },
        {
          "id": "C",
          "text": "Faqat neytronli"
        },
        {
          "id": "D",
          "text": "Faqat protonli"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Donor aralashma n-tur, akseptor aralashma p-tur hosil qiladi."
    },
    {
      "id": "fizika-782",
      "question": "DTM namunaviy fizika tahlili: O'ta o'tkazuvchanlik hodisasini 1911-yilda simobda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Gens Ersted"
        },
        {
          "id": "B",
          "text": "Nikola Tesla"
        },
        {
          "id": "C",
          "text": "Tomas Edison"
        },
        {
          "id": "D",
          "text": "Kammerling-Onnes (4.2 K haroratda)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Kritik haroratda elektr qarshiligining keskin nolga tushishi."
    },
    {
      "id": "fizika-783",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik nuri nima?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'lik tezligi"
        },
        {
          "id": "B",
          "text": "Yorug'lik energiyasi tarqalayotgan yo'nalishni ko'rsatuvchi geometrik chiziq"
        },
        {
          "id": "C",
          "text": "Fotonlar massasi"
        },
        {
          "id": "D",
          "text": "Optik linza"
        }
      ],
      "correct": "B",
      "xp": 100,
      "explanation": "Nazariy asos: Geometrik optikada nur tushunchasi."
    },
    {
      "id": "fizika-784",
      "question": "DTM namunaviy fizika tahlili: Yassi ko'zguda hosil bo'lgan tasvir qanday xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Kichraytirilgan"
        },
        {
          "id": "B",
          "text": "Haqiqiy va to'ntarilgan"
        },
        {
          "id": "C",
          "text": "Haqiqiy va kattalashgan"
        },
        {
          "id": "D",
          "text": "Mavhum, to'g'ri va jism o'lchamiga teng"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Yassi ko'zgu doim mavhum va teng tasvir beradi."
    },
    {
      "id": "fizika-785",
      "question": "DTM namunaviy fizika tahlili: Ko'z gavhari qanday optik xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Sochuvchi linza"
        },
        {
          "id": "B",
          "text": "Prizma"
        },
        {
          "id": "C",
          "text": "Yassi plastinka"
        },
        {
          "id": "D",
          "text": "Ikki tomoni qavariq yig'uvchi linza"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'z gavhari yig'uvchi egiluvchan tirik linzadir."
    },
    {
      "id": "fizika-786",
      "question": "DTM namunaviy fizika tahlili: Yaqindan ko'ruvchilik (miopiya) qanday ko'zoynak linzasi bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "B",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "C",
          "text": "Rangli filtrlar bilan"
        },
        {
          "id": "D",
          "text": "Silindrik linzalar bilan"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Miopiyada tasvir to'r parda oldiga tushadi, uni sochuvchi linza to'g'rilaydi."
    },
    {
      "id": "fizika-787",
      "question": "DTM namunaviy fizika tahlili: Uzoqdan ko'ruvchilik (gipermetropiya) qanday linzali ko'zoynak bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "B",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "C",
          "text": "Qorong'i filtr bilan"
        },
        {
          "id": "D",
          "text": "Yassi shisha bilan"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Gipermetropiyada tasvir to'r parda orqasiga o'tib ketadi, yig'uvchi linza kerak."
    },
    {
      "id": "fizika-788",
      "question": "DTM namunaviy fizika tahlili: Ko'rinadigan yorug'lik to'lqin uzunliklari oralig'i taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "380 nm dan 780 nm gacha"
        },
        {
          "id": "B",
          "text": "10 nm dan 100 nm gacha"
        },
        {
          "id": "C",
          "text": "1 km dan 10 km gacha"
        },
        {
          "id": "D",
          "text": "1 mm dan 1 sm gacha"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Binafsha rangdan (380 nm) qizil ranggacha (760-780 nm)."
    },
    {
      "id": "fizika-789",
      "question": "DTM namunaviy fizika tahlili: Rentgen nurlarining to'lqin uzunligi qanday?",
      "options": [
        {
          "id": "A",
          "text": "Ko'rinadigan yorug'likdan uzun"
        },
        {
          "id": "B",
          "text": "Infraqizildan uzun"
        },
        {
          "id": "C",
          "text": "Radioto'lqinlar bilan bir xil"
        },
        {
          "id": "D",
          "text": "Ultrabinafsha va gamma-nurlar oralig'idagi juda qisqa to'lqinlar (0.01 - 10 nm)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Rentgen nurlari yuqori o'tuvchanlik qobiliyatiga ega."
    },
    {
      "id": "fizika-790",
      "question": "DTM namunaviy fizika tahlili: Radioaktiv nurlanishning qaysi turi eng katta kirib borish qobiliyatiga ega?",
      "options": [
        {
          "id": "A",
          "text": "Alfa (α) nurlanish (geliy yadrolari)"
        },
        {
          "id": "B",
          "text": "Beta (β) nurlanish (elektronlar)"
        },
        {
          "id": "C",
          "text": "Gamma (γ) nurlanish (fotonlar oqimi)"
        },
        {
          "id": "D",
          "text": "Ultrabinafsha"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Gamma nurlari hatto qalin qo'rg'oshin qatlamidan ham o'tadi."
    },
    {
      "id": "fizika-791",
      "question": "DTM namunaviy fizika tahlili: Alfa (α) zarracha o'zi nima?",
      "options": [
        {
          "id": "A",
          "text": "Geliy atomi yadrosi (ikkita proton va ikkita neytron: ⁴₂He)"
        },
        {
          "id": "B",
          "text": "Tezkor elektron"
        },
        {
          "id": "C",
          "text": "Neytron"
        },
        {
          "id": "D",
          "text": "Foton"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Alfa nurlanish geliy yadrolari oqimidir."
    },
    {
      "id": "fizika-792",
      "question": "DTM namunaviy fizika tahlili: Beta (β⁻) nurlanish qanday zarrachalar oqimidan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Tez harakatlanuvchi elektronlar"
        },
        {
          "id": "B",
          "text": "Geliy yadrolari"
        },
        {
          "id": "C",
          "text": "Protonlar"
        },
        {
          "id": "D",
          "text": "Pozitronlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Beta-manfiy yemirilishda yadrodan elektron uchib chiqadi."
    },
    {
      "id": "fizika-793",
      "question": "DTM namunaviy fizika tahlili: Yadroning zanjirli bo'linish reaksiyasida qaysi og'ir izotop keng qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "Uran-238"
        },
        {
          "id": "B",
          "text": "Uran-235 (²³⁵U)"
        },
        {
          "id": "C",
          "text": "Vodorod-1"
        },
        {
          "id": "D",
          "text": "Temir-56"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Uran-235 sekin neytronlar ta'sirida bo'linadi va energiya ajratadi."
    },
    {
      "id": "fizika-794",
      "question": "DTM namunaviy fizika tahlili: Termoyadro sintez reaksiyasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat alfa-yemirilish"
        },
        {
          "id": "B",
          "text": "Kimyoviy yonish"
        },
        {
          "id": "C",
          "text": "Yengil yadrolarning (vodorod izotoplari) o'ta yuqori haroratda birikib og'irroq yadro hosil qilishi"
        },
        {
          "id": "D",
          "text": "Og'ir yadrolarning bo'linishi"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh va yulduzlar energiyasining manbai termoyadro reaksiyasidir."
    },
    {
      "id": "fizika-795",
      "question": "DTM namunaviy fizika tahlili: Quyosh sirtida energiya qaysi jarayon hisobiga ajraladi?",
      "options": [
        {
          "id": "A",
          "text": "Ko'mir yonishi"
        },
        {
          "id": "B",
          "text": "Termoyadro sintezi (vodorodning geliyga aylanishi)"
        },
        {
          "id": "C",
          "text": "Gravitatsion qisilish"
        },
        {
          "id": "D",
          "text": "Uran bo'linishi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Quyosh yadrosidagi termoyadro reaksiyasi."
    },
    {
      "id": "fizika-796",
      "question": "DTM namunaviy fizika tahlili: Fizikada Plank gipotezasi nimadan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Atomlar yorug'likni uzluksiz emas, balki diskret porsiyalar (kvantlar) tarzida chiqaradi va yutadi"
        },
        {
          "id": "B",
          "text": "Elektronlar qo'zg'almasdir"
        },
        {
          "id": "C",
          "text": "Energiya doim o'zgaruvchan"
        },
        {
          "id": "D",
          "text": "Yorug'lik faqat to'lqindir"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: 1900-yilda Maks Plank kvant nazariyasiga asos soldi."
    },
    {
      "id": "fizika-797",
      "question": "DTM namunaviy fizika tahlili: Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = m · c²"
        },
        {
          "id": "B",
          "text": "F = m · a"
        },
        {
          "id": "C",
          "text": "A = F · s"
        },
        {
          "id": "D",
          "text": "P = m · g"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Jismga ta'sir etuvchi kuch uning massasi va tezlanishi ko'paytmasiga teng."
    },
    {
      "id": "fizika-798",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning vakuumdagi tezligi taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "30 000 km/s"
        },
        {
          "id": "B",
          "text": "3 000 km/s"
        },
        {
          "id": "C",
          "text": "3 000 000 km/s"
        },
        {
          "id": "D",
          "text": "300 000 km/s"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: c ≈ 3·10^8 m/s = 300 000 km/s."
    },
    {
      "id": "fizika-799",
      "question": "DTM namunaviy fizika tahlili: Normal sharoitda suv qaysi haroratda qaynaydi?",
      "options": [
        {
          "id": "A",
          "text": "0 °C"
        },
        {
          "id": "B",
          "text": "120 °C"
        },
        {
          "id": "C",
          "text": "212 °C"
        },
        {
          "id": "D",
          "text": "100 °C"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Normal atmosfera bosimida suv 100 °C da qaynaydi."
    },
    {
      "id": "fizika-800",
      "question": "DTM namunaviy fizika tahlili: Elektr tok kuchining o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Amper"
        },
        {
          "id": "B",
          "text": "Volt"
        },
        {
          "id": "C",
          "text": "Om"
        },
        {
          "id": "D",
          "text": "Vatt"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Xalqaro birliklar sistemasida tok kuchi Amperda o'lchanadi."
    },
    {
      "id": "fizika-801",
      "question": "DTM namunaviy fizika tahlili: Tezlanishning SI sistemasidagi asosiy o'lchov birligi qaysi?",

      "options": [
        {
          "id": "A",
          "text": "N/kg"
        },
        {
          "id": "B",
          "text": "m/s²"
        },
        {
          "id": "C",
          "text": "km/soat"
        },
        {
          "id": "D",
          "text": "m/s"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Tezlanish birligi metr taqsim soniya kvadratidir."
    },
    {
      "id": "fizika-802",
      "question": "DTM namunaviy fizika tahlili: To'g'ri chiziqli tekis harakatda tezlik qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "O'zgarmas qoladi (v = const)"
        },
        {
          "id": "B",
          "text": "Nolga teng bo'ladi"
        },
        {
          "id": "C",
          "text": "Vaqtga to'g'ri mutanosib ortadi"
        },
        {
          "id": "D",
          "text": "Kamayadi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Tekis harakatda tezlik yo'nalishi va qiymati bo'yicha o'zgarmaydi."
    },
    {
      "id": "fizika-803",
      "question": "DTM namunaviy fizika tahlili: Erkin tushish tezlanishining Yer sirtidagi o'rtacha qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "9.8 m/s²"
        },
        {
          "id": "B",
          "text": "6.67 m/s²"
        },
        {
          "id": "C",
          "text": "10.5 m/s²"
        },
        {
          "id": "D",
          "text": "8.9 m/s²"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: g ≈ 9.8 m/s² (amaliy hisoblashlarda ko'pincha 10 olinadi)."
    },
    {
      "id": "fizika-804",
      "question": "DTM namunaviy fizika tahlili: Burchak tezlik va aylanish davri o'rtasidagi bog'liqlik formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "ω = 2π / T"
        },
        {
          "id": "B",
          "text": "ω = 2π · T"
        },
        {
          "id": "C",
          "text": "ω = T / 2π"
        },
        {
          "id": "D",
          "text": "ω = v · R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Burchak tezlik ω = 2π/T = 2πν ga teng."
    },
    {
      "id": "fizika-805",
      "question": "DTM namunaviy fizika tahlili: Inersiya qonuni Nyutonning nechanchi qonuni hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Uchinchi qonuni"
        },
        {
          "id": "B",
          "text": "Birinchi qonuni"
        },
        {
          "id": "C",
          "text": "Butunjahon tortishish qonuni"
        },
        {
          "id": "D",
          "text": "Ikkinchi qonuni"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Nyutonning 1-qonuni inersiya qonunidir."
    },
    {
      "id": "fizika-806",
      "question": "DTM namunaviy fizika tahlili: Nyutonning uchinchi qonuniga ko'ra ikki jismning o'zaro ta'sir kuchlari qanday bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Har xil modulli"
        },
        {
          "id": "B",
          "text": "Moduli bo'yicha teng, yo'nalishi qarama-qarshi"
        },
        {
          "id": "C",
          "text": "Biri ikkinchisidan doim katta"
        },
        {
          "id": "D",
          "text": "Bir xil yo'nalgan va teng"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: F1 = -F2 (ta'sir aks ta'sirga teng va qarama-qarshi)."
    },
    {
      "id": "fizika-807",
      "question": "DTM namunaviy fizika tahlili: Guk qonuni bo'yicha elastiklik kuchi qanday ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = μ · N"
        },
        {
          "id": "B",
          "text": "F = m · a"
        },
        {
          "id": "C",
          "text": "F = -k · x"
        },
        {
          "id": "D",
          "text": "F = G · m1m2 / R²"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elastiklik kuchi jism deformatsiyasiga to'g'ri mutanosib."
    },
    {
      "id": "fizika-808",
      "question": "DTM namunaviy fizika tahlili: Sirpanish ishqalanish kuchi qaysi formula bilan topiladi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · g"
        },
        {
          "id": "B",
          "text": "F = μ · N"
        },
        {
          "id": "C",
          "text": "F = P · S"
        },
        {
          "id": "D",
          "text": "F = k · x"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ishqalanish kuchi reaksiya kuchiga mutanosib."
    },
    {
      "id": "fizika-809",
      "question": "DTM namunaviy fizika tahlili: Butunjahon tortishish doimiysi G ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "6.67 · 10⁻¹¹ N·m²/kg²"
        },
        {
          "id": "B",
          "text": "1.38 · 10⁻²³ J/K"
        },
        {
          "id": "C",
          "text": "9.8 m/s²"
        },
        {
          "id": "D",
          "text": "8.31 J/(mol·K)"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Gravitatsion doimiy G = 6.67·10^-11 N·m²/kg²."
    },
    {
      "id": "fizika-810",
      "question": "DTM namunaviy fizika tahlili: Jismning Yer sirtidan uzoqlashishi bilan unga ta'sir etuvchi tortishish kuchi qanday o'zgaradi?",
      "options": [
        {
          "id": "A",
          "text": "Masofa kvadratiga teskari kamayadi"
        },
        {
          "id": "B",
          "text": "Ortadi"
        },
        {
          "id": "C",
          "text": "O'zgarmaydi"
        },
        {
          "id": "D",
          "text": "Chiziqli kamayadi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: F ~ 1/R² qonuniyati bo'yicha masofa oshganda kamayadi."
    },
    {
      "id": "fizika-811",
      "question": "DTM namunaviy fizika tahlili: Jism impulsi (harakat miqdori) qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = m · g · h"
        },
        {
          "id": "B",
          "text": "p = m · v"
        },
        {
          "id": "C",
          "text": "p = F · t"
        },
        {
          "id": "D",
          "text": "p = m · a"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Jism impulsi massa va tezlik ko'paytmasiga teng."
    },
    {
      "id": "fizika-812",
      "question": "DTM namunaviy fizika tahlili: Kinetik energiya formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E_p = m · g · h"
        },
        {
          "id": "B",
          "text": "A = F · s"
        },
        {
          "id": "C",
          "text": "E_k = (m · v²) / 2"
        },
        {
          "id": "D",
          "text": "E = m · c²"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Kinetik energiya tezlikning kvadratiga to'g'ri proporsional."
    },
    {
      "id": "fizika-813",
      "question": "DTM namunaviy fizika tahlili: Mexanik ish qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton (N)"
        },
        {
          "id": "B",
          "text": "Joul (J)"
        },
        {
          "id": "C",
          "text": "Paskal (Pa)"
        },
        {
          "id": "D",
          "text": "Vatt (W)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Joul = 1 Nyuton · 1 metr."
    },
    {
      "id": "fizika-814",
      "question": "DTM namunaviy fizika tahlili: Quvvatning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Vatt (W)"
        },
        {
          "id": "B",
          "text": "Joul (J)"
        },
        {
          "id": "C",
          "text": "Nyuton (N)"
        },
        {
          "id": "D",
          "text": "Amper (A)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Vatt = 1 Joul / 1 soniya."
    },
    {
      "id": "fizika-815",
      "question": "DTM namunaviy fizika tahlili: Foydali ish koeffitsienti (FIK) qanday kattalik?",
      "options": [
        {
          "id": "A",
          "text": "Bajarilgan ish va quvvat ko'paytmasi"
        },
        {
          "id": "B",
          "text": "Faqat kuchlar nisbati"
        },
        {
          "id": "C",
          "text": "Foydali ishning to'liq sarflangan ishga nisbati"
        },
        {
          "id": "D",
          "text": "Vaqtga teskari qiymat"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: FIK = (A_foydali / A_to'liq) · 100%."
    },
    {
      "id": "fizika-816",
      "question": "DTM namunaviy fizika tahlili: Bosimning SI sistemasidagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Nyuton"
        },
        {
          "id": "B",
          "text": "Torr"
        },
        {
          "id": "C",
          "text": "Bar"
        },
        {
          "id": "D",
          "text": "Paskal (Pa)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 Pa = 1 N / m²."
    },
    {
      "id": "fizika-817",
      "question": "DTM namunaviy fizika tahlili: Suyuqlik ustunining gidrostatik bosimi qaysi formula bilan aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "p = ρ · g · h"
        },
        {
          "id": "B",
          "text": "p = F / S"
        },
        {
          "id": "C",
          "text": "p = m · g"
        },
        {
          "id": "D",
          "text": "p = V · ρ"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim zichlik, erkin tushish tezlanishi va balandlikka bog'liq."
    },
    {
      "id": "fizika-818",
      "question": "DTM namunaviy fizika tahlili: Arximed kuchi (ko'tarish kuchi) qaysi formula orqali hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "F_A = ρ_s · g · V_ch"
        },
        {
          "id": "B",
          "text": "F = k · x"
        },
        {
          "id": "C",
          "text": "F = m · a"
        },
        {
          "id": "D",
          "text": "F = P · S"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi siqib chiqarilgan suyuqlik og'irligiga teng."
    },
    {
      "id": "fizika-819",
      "question": "DTM namunaviy fizika tahlili: Paskal qonuniga ko'ra suyuqlik va gazlarga berilgan tashqi bosim qanday uzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Barcha yo'nalishlarda o'zgarishsiz teng uzatiladi"
        },
        {
          "id": "B",
          "text": "Faqat idish devorlariga uzatiladi"
        },
        {
          "id": "C",
          "text": "Faqat pastga qarab uzatiladi"
        },
        {
          "id": "D",
          "text": "Masofaga qarab kamayadi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Paskal qonuni: bosim barcha yo'nalishlarga teng tarqaladi."
    },
    {
      "id": "fizika-820",
      "question": "DTM namunaviy fizika tahlili: Normal atmosfera bosimi simob ustunining necha millimetr balandligiga teng?",
      "options": [
        {
          "id": "A",
          "text": "720 mm Hg"
        },
        {
          "id": "B",
          "text": "100 mm Hg"
        },
        {
          "id": "C",
          "text": "780 mm Hg"
        },
        {
          "id": "D",
          "text": "760 mm Hg"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: 1 atm = 760 mm simob ustuni ≈ 101325 Pa."
    },
    {
      "id": "fizika-821",
      "question": "DTM namunaviy fizika tahlili: Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "p · V = const"
        },
        {
          "id": "B",
          "text": "p = (1/3) · n · m_0 · v²"
        },
        {
          "id": "C",
          "text": "E = k · T"
        },
        {
          "id": "D",
          "text": "p = ρ · g · h"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Bosim zarrachalar konsentratsiyasi va o'rtacha kinetik energiyasiga bog'liq."
    },
    {
      "id": "fizika-822",
      "question": "DTM namunaviy fizika tahlili: Mendeleyev-Klapeyron tenglamasi qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "p / T = const"
        },
        {
          "id": "B",
          "text": "p · V = (m / M) · R · T"
        },
        {
          "id": "C",
          "text": "V / T = const"
        },
        {
          "id": "D",
          "text": "p · V = const"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ideal gaz holat tenglamasi: pV = νRT."
    },
    {
      "id": "fizika-823",
      "question": "DTM namunaviy fizika tahlili: Izotermik jarayonda gazning qaysi parametri o'zgarmas saqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "Bosim (p = const)"
        },
        {
          "id": "B",
          "text": "Massa va hajm"
        },
        {
          "id": "C",
          "text": "Harorat (T = const, Boyl-Mariott qonuni)"
        },
        {
          "id": "D",
          "text": "Hajm (V = const)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: T = const bo'lganda pV = const."
    },
    {
      "id": "fizika-824",
      "question": "DTM namunaviy fizika tahlili: Izobarik jarayonda gazning qaysi parametri doimiy bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const)"
        },
        {
          "id": "B",
          "text": "Harorat (T = const)"
        },
        {
          "id": "C",
          "text": "Bosim (p = const, Gey-Lyussak qonuni)"
        },
        {
          "id": "D",
          "text": "Zichlik"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: p = const bo'lganda V/T = const."
    },
    {
      "id": "fizika-825",
      "question": "DTM namunaviy fizika tahlili: Izoxorik jarayonda gazning qaysi kattaligi o'zgarmaydi?",
      "options": [
        {
          "id": "A",
          "text": "Hajm (V = const, Sharl qonuni)"
        },
        {
          "id": "B",
          "text": "Harorat (T = const)"
        },
        {
          "id": "C",
          "text": "Bosim (p = const)"
        },
        {
          "id": "D",
          "text": "Ichki energiya"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: V = const bo'lganda p/T = const."
    },
    {
      "id": "fizika-826",
      "question": "DTM namunaviy fizika tahlili: Issiqlik almashinuvsiz kechuvchi termodinamik jarayon nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Izoxorik jarayon"
        },
        {
          "id": "B",
          "text": "Adiabatik jarayon (Q = 0)"
        },
        {
          "id": "C",
          "text": "Izobarik jarayon"
        },
        {
          "id": "D",
          "text": "Izotermik jarayon"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Tashqi muhit bilan issiqlik almashinmaydigan jarayon adiabatik deyiladi."
    },
    {
      "id": "fizika-827",
      "question": "DTM namunaviy fizika tahlili: Termodinamikaning birinchi qonuni qanday yoziladi?",
      "options": [
        {
          "id": "A",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "B",
          "text": "A = p · ΔV"
        },
        {
          "id": "C",
          "text": "ΔU = Q + A"
        },
        {
          "id": "D",
          "text": "Q = ΔU + A"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Tizimga berilgan issiqlik uning ichki energiyasini oshirishga va ish bajarishga sarflanadi."
    },
    {
      "id": "fizika-828",
      "question": "DTM namunaviy fizika tahlili: Mutloq nol harorat Selsiy shkalasi bo'yicha necha darajaga to'g'ri keladi?",
      "options": [
        {
          "id": "A",
          "text": "-273.15 °C"
        },
        {
          "id": "B",
          "text": "0 °C"
        },
        {
          "id": "C",
          "text": "-100 °C"
        },
        {
          "id": "D",
          "text": "-373.15 °C"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: 0 Kelvin = -273.15 °C."
    },
    {
      "id": "fizika-829",
      "question": "DTM namunaviy fizika tahlili: Karno sikli bo'yicha ishlovchi ideal issiqlik mashinasining FIK formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "η = (T_1 - T_2) / T_1"
        },
        {
          "id": "B",
          "text": "η = (T_1 + T_2) / T_1"
        },
        {
          "id": "C",
          "text": "η = T_2 / T_1"
        },
        {
          "id": "D",
          "text": "η = Q_2 / Q_1"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: T1 - isitgich, T2 - sovutgich harorati."
    },
    {
      "id": "fizika-830",
      "question": "DTM namunaviy fizika tahlili: Kulon qonuniga ko'ra nuqtaviy zaryadlarning o'zaro ta'sir kuchi qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = k · |q1 · q2| / r²"
        },
        {
          "id": "B",
          "text": "F = q · v · B"
        },
        {
          "id": "C",
          "text": "F = q · E"
        },
        {
          "id": "D",
          "text": "F = I · B · L"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kulon kuchi zaryadlar ko'paytmasiga to'g'ri va masofa kvadratiga teskari mutanosib."
    },
    {
      "id": "fizika-831",
      "question": "DTM namunaviy fizika tahlili: Elektr maydon kuchlanganligi E ning ta'rif formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "E = U / d"
        },
        {
          "id": "B",
          "text": "φ = W / q"
        },
        {
          "id": "C",
          "text": "E = k · q / r"
        },
        {
          "id": "D",
          "text": "E = F / q"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlanganlik birlik musbat zaryadga ta'sir qiluvchi kuchdir."
    },
    {
      "id": "fizika-832",
      "question": "DTM namunaviy fizika tahlili: Kondensator sig'imining SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Klon (C)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Farad (F)"
        },
        {
          "id": "D",
          "text": "Veber (Wb)"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Elektr sig'im Faradlarda o'lchanadi."
    },
    {
      "id": "fizika-833",
      "question": "DTM namunaviy fizika tahlili: Zanjirning bir qismi uchun Om qonuni qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = E / (R + r)"
        },
        {
          "id": "B",
          "text": "I = U / R"
        },
        {
          "id": "C",
          "text": "U = I · R²"
        },
        {
          "id": "D",
          "text": "P = I · U"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosib."
    },
    {
      "id": "fizika-834",
      "question": "DTM namunaviy fizika tahlili: To'liq zanjir uchun Om qonuni formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "I = ε / (R + r)"
        },
        {
          "id": "B",
          "text": "I = U / R"
        },
        {
          "id": "C",
          "text": "U = ε - I · r"
        },
        {
          "id": "D",
          "text": "P = I² · R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: ε - EYK, R - tashqi qarshilik, r - ichki qarshilik."
    },
    {
      "id": "fizika-835",
      "question": "DTM namunaviy fizika tahlili: O'tkazgichning qarshiligi uning o'lchamlariga qanday bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "R = S / (ρ · l)"
        },
        {
          "id": "B",
          "text": "R = U / I"
        },
        {
          "id": "C",
          "text": "R = ρ · l / S"
        },
        {
          "id": "D",
          "text": "R = P / I²"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Qarshilik uzunlikka to'g'ri, ko'ndalang kesim yuziga teskari proportsional."
    },
    {
      "id": "fizika-836",
      "question": "DTM namunaviy fizika tahlili: Ketma-ket ulangan o'tkazgichlarda qaysi fizik kattalik bir xil bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi (I = const)"
        },
        {
          "id": "B",
          "text": "Quvvat (P)"
        },
        {
          "id": "C",
          "text": "Qarshilik (R)"
        },
        {
          "id": "D",
          "text": "Kuchlanish (U)"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ketma-ket ulanishda barcha qismlardan bir xil tok o'tadi."
    },
    {
      "id": "fizika-837",
      "question": "DTM namunaviy fizika tahlili: Parallel ulangan o'tkazgichlarda qaysi parametr barchasida teng bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi (I)"
        },
        {
          "id": "B",
          "text": "Qarshilik (R)"
        },
        {
          "id": "C",
          "text": "Zaryad (q)"
        },
        {
          "id": "D",
          "text": "Kuchlanish (U = const)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Parallel tarmoqlarda kuchlanishlar bir xil bo'ladi."
    },
    {
      "id": "fizika-838",
      "question": "DTM namunaviy fizika tahlili: Joul-Lens qonuni bo'yicha o'tkazgichda ajraladigan issiqlik miqdori qanday hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Q = c · m · ΔT"
        },
        {
          "id": "B",
          "text": "Q = I · R · t"
        },
        {
          "id": "C",
          "text": "Q = U · I"
        },
        {
          "id": "D",
          "text": "Q = I² · R · t"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ajraladigan issiqlik tok kvadratiga to'g'ri proportsional."
    },
    {
      "id": "fizika-839",
      "question": "DTM namunaviy fizika tahlili: Magnit maydon induksiyasi B ning SI dagi o'lchov birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Genri (H)"
        },
        {
          "id": "B",
          "text": "Tesla (Tl)"
        },
        {
          "id": "C",
          "text": "Ersted"
        },
        {
          "id": "D",
          "text": "Veber (Wb)"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit maydon induksiyasi Teslada o'lchanadi."
    },
    {
      "id": "fizika-840",
      "question": "DTM namunaviy fizika tahlili: Magnit oqimi Φ ning SI dagi o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Veber (Wb)"
        },
        {
          "id": "B",
          "text": "Genri (H)"
        },
        {
          "id": "C",
          "text": "Tesla (Tl)"
        },
        {
          "id": "D",
          "text": "Volt"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Magnit oqimi Veberda o'lchanadi (1 Wb = 1 Tl · m²)."
    },
    {
      "id": "fizika-841",
      "question": "DTM namunaviy fizika tahlili: Magnit maydonida harakatlanayotgan zaryadli zarrachaga ta'sir qiluvchi kuch nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Gravitatsiya kuchi"
        },
        {
          "id": "B",
          "text": "Lorens kuchi (F = q·v·B·sinα)"
        },
        {
          "id": "C",
          "text": "Kulon kuchi"
        },
        {
          "id": "D",
          "text": "Amper kuchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi harakatdagi zaryadga ta'sir qiladi."
    },
    {
      "id": "fizika-842",
      "question": "DTM namunaviy fizika tahlili: Tokli o'tkazgichga magnit maydoni tomonidan ta'sir etuvchi kuch qanday ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Kulon kuchi"
        },
        {
          "id": "B",
          "text": "Amper kuchi (F = I·B·L·sinα)"
        },
        {
          "id": "C",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "D",
          "text": "Lorens kuchi"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Amper kuchi tokli o'tkazgichga ta'sir qiladi."
    },
    {
      "id": "fizika-843",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit induksiya hodisasini 1831-yilda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Genrix Gers"
        },
        {
          "id": "B",
          "text": "Gans Ersted"
        },
        {
          "id": "C",
          "text": "Maykl Faradey"
        },
        {
          "id": "D",
          "text": "Jeyms Maksvell"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Faradey o'zgaruvchan magnit maydoni tok hosil qilishini isbotlagan."
    },
    {
      "id": "fizika-844",
      "question": "DTM namunaviy fizika tahlili: Konturda hosil bo'lgan induksion tok yo'nalishini aniqlovchi qoida qaysi?",
      "options": [
        {
          "id": "A",
          "text": "O'ng qo'l qoidasi"
        },
        {
          "id": "B",
          "text": "Vint qoidasi"
        },
        {
          "id": "C",
          "text": "Chap qo'l qoidasi"
        },
        {
          "id": "D",
          "text": "Lens qoidasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Lens qoidasi: induksion tok o'zini vujudga keltirgan sababga qarshilik ko'rsatadi."
    },
    {
      "id": "fizika-845",
      "question": "DTM namunaviy fizika tahlili: G'altakning induktivlik birligi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tesla (Tl)"
        },
        {
          "id": "B",
          "text": "Veber (Wb)"
        },
        {
          "id": "C",
          "text": "Farad (F)"
        },
        {
          "id": "D",
          "text": "Genri (H)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: O'zinduksiya kattaligi Genrida o'lchanadi."
    },
    {
      "id": "fizika-846",
      "question": "DTM namunaviy fizika tahlili: Matematik mayatnikning tebranish davri qaysi formula bilan ifodalanadi (Gyuygens formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "B",
          "text": "T = 1 / ν"
        },
        {
          "id": "C",
          "text": "T = 2π · √(g / l)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(l / g)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Mayatnik davri uzunlikka va erkin tushish tezlanishiga bog'liq."
    },
    {
      "id": "fizika-847",
      "question": "DTM namunaviy fizika tahlili: Prujinali mayatnikning tebranish davri formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = m · v / k"
        },
        {
          "id": "B",
          "text": "T = 2π · √(m / k)"
        },
        {
          "id": "C",
          "text": "T = 2π · √(l / g)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(k / m)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Davr massa va bikrlikka bog'liq."
    },
    {
      "id": "fizika-848",
      "question": "DTM namunaviy fizika tahlili: Elektromagnit tebranish konturining tebranish davri formulasi qanday ataladi (Tomson formulasi)?",
      "options": [
        {
          "id": "A",
          "text": "ν = 1 / (2πLC)"
        },
        {
          "id": "B",
          "text": "T = 2π · L · C"
        },
        {
          "id": "C",
          "text": "T = 2π · √(L · C)"
        },
        {
          "id": "D",
          "text": "T = 2π · √(L / C)"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Tomson formulasi: T = 2π√(LC)."
    },
    {
      "id": "fizika-849",
      "question": "DTM namunaviy fizika tahlili: To'lqin uzunligi λ, tarqalish tezligi v va chastota ν orasidagi bog'liqlik qaysi?",
      "options": [
        {
          "id": "A",
          "text": "λ = v · ν"
        },
        {
          "id": "B",
          "text": "v = λ / T²"
        },
        {
          "id": "C",
          "text": "λ = v / ν"
        },
        {
          "id": "D",
          "text": "λ = ν / v"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: To'lqin uzunligi tezlikning tebranish chastotasiga nisbatiga teng."
    },
    {
      "id": "fizika-850",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning qaytish qonuniga ko'ra tushish burchagi α va qaytish burchagi β qanday munosabatda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "α > β"
        },
        {
          "id": "B",
          "text": "α < β"
        },
        {
          "id": "C",
          "text": "α + β = 90°"
        },
        {
          "id": "D",
          "text": "α = β (tushish burchagi qaytish burchagiga teng)"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: Yorug'likning qaytish burchagi tushish burchagiga teng."
    },
    {
      "id": "fizika-851",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning sinish qonuni (Snellius qonuni) qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "sinα / sinβ = n_2 / n_1"
        },
        {
          "id": "B",
          "text": "tgα = n"
        },
        {
          "id": "C",
          "text": "cosα / cosβ = n"
        },
        {
          "id": "D",
          "text": "sinα · sinβ = n"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Sinuslarning nisbati nisbiy sindirish ko'rsatkichiga teng."
    },
    {
      "id": "fizika-852",
      "question": "DTM namunaviy fizika tahlili: Yupqa qavariq linzaning fokus masofasi F, jism masofasi d va tasvir masofasi f orasidagi formula qaysi?",
      "options": [
        {
          "id": "A",
          "text": "1/F = 1/d + 1/f"
        },
        {
          "id": "B",
          "text": "D = d / f"
        },
        {
          "id": "C",
          "text": "1/F = 1/d - 1/f"
        },
        {
          "id": "D",
          "text": "F = d + f"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yupqa linza formulasi: 1/F = 1/d + 1/f."
    },
    {
      "id": "fizika-853",
      "question": "DTM namunaviy fizika tahlili: Linzaning optik kuchi D qaysi birlikda o'lchanadi?",
      "options": [
        {
          "id": "A",
          "text": "Gradus"
        },
        {
          "id": "B",
          "text": "Metr (m)"
        },
        {
          "id": "C",
          "text": "Dioptriya (dptr)"
        },
        {
          "id": "D",
          "text": "Radian"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: 1 dptr = 1 / 1 m."
    },
    {
      "id": "fizika-854",
      "question": "DTM namunaviy fizika tahlili: Oq yorug'likning prizmadan o'tganda spektrga (ranglarga) ajralish hodisasi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Polyarizatsiya"
        },
        {
          "id": "B",
          "text": "Interferensiya"
        },
        {
          "id": "C",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "D",
          "text": "Diffraksiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Nyuton ochgan dispersiya hodisasi."
    },
    {
      "id": "fizika-855",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik to'lqinlarining to'siqlarni aylanib o'tish hodisasi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Refraksiya"
        },
        {
          "id": "C",
          "text": "Interferensiya"
        },
        {
          "id": "D",
          "text": "Dispersiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqinlarning to'siq ortiga o'tishi diffraksiyadir."
    },
    {
      "id": "fizika-856",
      "question": "DTM namunaviy fizika tahlili: Kogerent to'lqinlarning fazoda qo'shilib, kuchayishi yoki susayishi hodisasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Diffraksiya"
        },
        {
          "id": "B",
          "text": "Dispersiya"
        },
        {
          "id": "C",
          "text": "Yutilish"
        },
        {
          "id": "D",
          "text": "Interferensiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik interferensiyasi to'lqin xususiyatini isbotlaydi."
    },
    {
      "id": "fizika-857",
      "question": "DTM namunaviy fizika tahlili: Foton energiyasi Plank formulasi bo'yicha qanday aniqlanadi?",
      "options": [
        {
          "id": "A",
          "text": "E = h · ν"
        },
        {
          "id": "B",
          "text": "E = h / λ²"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "E = p · c²"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: h - Plank doimiysi, ν - chastota."
    },
    {
      "id": "fizika-858",
      "question": "DTM namunaviy fizika tahlili: Plank doimiysi h ning son qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "3 · 10⁸ m/s"
        },
        {
          "id": "B",
          "text": "1.6 · 10⁻¹⁹ C"
        },
        {
          "id": "C",
          "text": "6.63 · 10⁻³⁴ J·s"
        },
        {
          "id": "D",
          "text": "9.11 · 10⁻³¹ kg"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Plank doimiysi h ≈ 6.63·10^-34 J·s."
    },
    {
      "id": "fizika-859",
      "question": "DTM namunaviy fizika tahlili: Fotoeffekt uchun Eynshteyn tenglamasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "A = e · U"
        },
        {
          "id": "B",
          "text": "h · ν = A_chiqish + (m · v²) / 2"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "h · ν = A_chiqish"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Yutilgan foton energiyasi elektronni chiqarish va unga kinetik energiya berishga sarflanadi."
    },
    {
      "id": "fizika-860",
      "question": "DTM namunaviy fizika tahlili: Atomning sayyorasimon (planetar) modelini kim taklif etgan?",
      "options": [
        {
          "id": "A",
          "text": "D. Mendeleyev"
        },
        {
          "id": "B",
          "text": "J. Tomson"
        },
        {
          "id": "C",
          "text": "Nils Bor"
        },
        {
          "id": "D",
          "text": "Ernest Rezerford (1911-yilda)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Rezerford alfa-zarrachalar sochilishi tajribasidan so'ng yadro modelini yaratdi."
    },
    {
      "id": "fizika-861",
      "question": "DTM namunaviy fizika tahlili: Atom yadrosi qanday zarrachalardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Protonlar va elektronlar"
        },
        {
          "id": "B",
          "text": "Faqat neytronlar"
        },
        {
          "id": "C",
          "text": "Protonlar va neytronlar (nuklonlar)"
        },
        {
          "id": "D",
          "text": "Elektronlar va pozitronlar"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Yadro musbat proton va neytral neytronlardan iborat."
    },
    {
      "id": "fizika-862",
      "question": "DTM namunaviy fizika tahlili: Yadrodagi neytronlar soni N qanday topiladi?",
      "options": [
        {
          "id": "A",
          "text": "N = A / Z"
        },
        {
          "id": "B",
          "text": "N = A - Z"
        },
        {
          "id": "C",
          "text": "N = Z - A"
        },
        {
          "id": "D",
          "text": "N = A + Z"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Massaviy son A dan tartib raqam Z ayiriladi."
    },
    {
      "id": "fizika-863",
      "question": "DTM namunaviy fizika tahlili: Yarim yemirilish davri T nima?",
      "options": [
        {
          "id": "A",
          "text": "Zarrachalar tezligi 2 barobar kamayishi"
        },
        {
          "id": "B",
          "text": "Dastlabki radioaktiv yadrolar sonining yarmi yemirilishi uchun ketgan vaqt"
        },
        {
          "id": "C",
          "text": "Yadro massasining 2 barobar ortish vaqti"
        },
        {
          "id": "D",
          "text": "To'liq yemirilish vaqti"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: N(t) = N_0 · 2^(-t/T)."
    },
    {
      "id": "fizika-864",
      "question": "DTM namunaviy fizika tahlili: Eynshteynning massa va energiya bog'liqligi formulasini toping:",
      "options": [
        {
          "id": "A",
          "text": "E = k · T"
        },
        {
          "id": "B",
          "text": "E = p² / 2m"
        },
        {
          "id": "C",
          "text": "E = m · c²"
        },
        {
          "id": "D",
          "text": "E = h · ν"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tinchlikdagi massa va energiyaning fundamental bog'liqligi."
    },
    {
      "id": "fizika-865",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlik - Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)."
    },
    {
      "id": "fizika-866",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)'?",
      "options": [
        {
          "id": "A",
          "text": "Impuls"
        },
        {
          "id": "B",
          "text": "Tezlanish"
        },
        {
          "id": "C",
          "text": "Tezlik"
        },
        {
          "id": "D",
          "text": "Kuch"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlikga tegishli."
    },
    {
      "id": "fizika-867",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tezlanish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tezlanish - Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)."
    },
    {
      "id": "fizika-868",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)'?",
      "options": [
        {
          "id": "A",
          "text": "Burchak tezlik"
        },
        {
          "id": "B",
          "text": "Kuch"
        },
        {
          "id": "C",
          "text": "Tezlanish"
        },
        {
          "id": "D",
          "text": "Tezlik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tezlanishga tegishli."
    },
    {
      "id": "fizika-869",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch - Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)."
    },
    {
      "id": "fizika-870",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)'?",
      "options": [
        {
          "id": "A",
          "text": "Impuls"
        },
        {
          "id": "B",
          "text": "Kuch"
        },
        {
          "id": "C",
          "text": "Massa"
        },
        {
          "id": "D",
          "text": "Bosim"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuchga tegishli."
    },
    {
      "id": "fizika-871",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Og'irlik kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Og'irlik kuchi - Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)."
    },
    {
      "id": "fizika-872",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismga Yer tomonidan ko'rsatiladigan tortishish kuchi (F = m · g)'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Ishqalanish"
        },
        {
          "id": "C",
          "text": "Og'irlik (vazn)"
        },
        {
          "id": "D",
          "text": "Elastiklik kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Og'irlik kuchiga tegishli."
    },
    {
      "id": "fizika-873",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Jismning vazni (P)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Jismning vazni (P) - Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi."
    },
    {
      "id": "fizika-874",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning Yerga tortilishi oqibatida tayanch yoki osmaga ko'rsatadigan ta'sir kuchi'?",
      "options": [
        {
          "id": "A",
          "text": "Inersiya"
        },
        {
          "id": "B",
          "text": "Jismning vazni (P)"
        },
        {
          "id": "C",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "D",
          "text": "Massa"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Jismning vazni (P)ga tegishli."
    },
    {
      "id": "fizika-875",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Impuls (Harakat miqdori)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Impuls (Harakat miqdori) - Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)."
    },
    {
      "id": "fizika-876",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jism massasi va uning tezligi ko'paytmasi (p = m · v, birligi kg·m/s)'?",
      "options": [
        {
          "id": "A",
          "text": "Quvvat"
        },
        {
          "id": "B",
          "text": "Kinetik energiya"
        },
        {
          "id": "C",
          "text": "Kuch impulsi"
        },
        {
          "id": "D",
          "text": "Impuls (Harakat miqdori)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Impuls (Harakat miqdori)ga tegishli."
    },
    {
      "id": "fizika-877",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch impulsi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch impulsi - Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)."
    },
    {
      "id": "fizika-878",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch va uning ta'sir qilish vaqti ko'paytmasi (F · Δt = Δp)'?",
      "options": [
        {
          "id": "A",
          "text": "Mexanik ish"
        },
        {
          "id": "B",
          "text": "Moment"
        },
        {
          "id": "C",
          "text": "Kuch impulsi"
        },
        {
          "id": "D",
          "text": "Jism impulsi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch impulsiga tegishli."
    },
    {
      "id": "fizika-879",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kinetik energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Kinetik energiya - Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)."
    },
    {
      "id": "fizika-880",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismning harakati tufayli ega bo'lgan energiyasi (E_k = mv² / 2)'?",
      "options": [
        {
          "id": "A",
          "text": "Ichki energiya"
        },
        {
          "id": "B",
          "text": "Potensial energiya"
        },
        {
          "id": "C",
          "text": "To'liq energiya"
        },
        {
          "id": "D",
          "text": "Kinetik energiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kinetik energiyaga tegishli."
    },
    {
      "id": "fizika-881",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Potensial energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Potensial energiya - O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)."
    },
    {
      "id": "fizika-882",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zaro ta'sirlashuvchi jismlar yoki ularning qismlari o'zaro joylashuviga bog'liq energiya (E_p = mgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Issiqlik miqdori"
        },
        {
          "id": "B",
          "text": "Ish"
        },
        {
          "id": "C",
          "text": "Potensial energiya"
        },
        {
          "id": "D",
          "text": "Kinetik energiya"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Potensial energiyaga tegishli."
    },
    {
      "id": "fizika-883",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Kuch momenti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Kuch momenti - Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)."
    },
    {
      "id": "fizika-884",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kuch moduli va uning yelkasi ko'paytmasi (M = F · d, birligi N·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Kuch impulsi"
        },
        {
          "id": "B",
          "text": "Kuch momenti"
        },
        {
          "id": "C",
          "text": "Bajarilgan ish"
        },
        {
          "id": "D",
          "text": "Bosim"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Kuch momentiga tegishli."
    },
    {
      "id": "fizika-885",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Zichlik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Zichlik - Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)."
    },
    {
      "id": "fizika-886",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning birlik hajmdagi massasi (ρ = m / V, birligi kg/m³)'?",
      "options": [
        {
          "id": "A",
          "text": "Zichlik"
        },
        {
          "id": "B",
          "text": "Hajm"
        },
        {
          "id": "C",
          "text": "Massa"
        },
        {
          "id": "D",
          "text": "Bosim"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Zichlikga tegishli."
    },
    {
      "id": "fizika-887",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Gidrostatik bosim' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Gidrostatik bosim - Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)."
    },
    {
      "id": "fizika-888",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Tinch turgan suyuqlik ustunining og'irligi hisobiga vujudga keladigan bosim (p = ρgh)'?",
      "options": [
        {
          "id": "A",
          "text": "Dinamik bosim"
        },
        {
          "id": "B",
          "text": "Atmosfera bosimi"
        },
        {
          "id": "C",
          "text": "Gidrostatik bosim"
        },
        {
          "id": "D",
          "text": "Arximed kuchi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Gidrostatik bosimga tegishli."
    },
    {
      "id": "fizika-889",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Arximed kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Arximed kuchi - Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)."
    },
    {
      "id": "fizika-890",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik yoki gazga botirilgan jismga ta'sir etuvchi yuqoriga yo'nalgan itaruvchi kuch (F_A = ρ_s g V_ch)'?",
      "options": [
        {
          "id": "A",
          "text": "Og'irlik kuchi"
        },
        {
          "id": "B",
          "text": "Arximed kuchi"
        },
        {
          "id": "C",
          "text": "Qovushqoqlik kuchi"
        },
        {
          "id": "D",
          "text": "Sirt taranglik"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Arximed kuchiga tegishli."
    },
    {
      "id": "fizika-891",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Sirt taranglik koeffitsienti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Sirt taranglik koeffitsienti - Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)."
    },
    {
      "id": "fizika-892",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Suyuqlik sirtini chegaralovchi kontur uzunligi birligiga to'g'ri keluvchi kuch (σ = F / l, N/m)'?",
      "options": [
        {
          "id": "A",
          "text": "Sirt taranglik koeffitsienti"
        },
        {
          "id": "B",
          "text": "Qovushqoqlik"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Kapillyarlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Sirt taranglik koeffitsientiga tegishli."
    },
    {
      "id": "fizika-893",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Modda miqdori' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Modda miqdori - Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)."
    },
    {
      "id": "fizika-894",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismdagi strukturaviy zarrachalar sonining Avogadro doimiysiga nisbati (ν = N / N_A, birligi mol)'?",
      "options": [
        {
          "id": "A",
          "text": "Molyar massa"
        },
        {
          "id": "B",
          "text": "Modda miqdori"
        },
        {
          "id": "C",
          "text": "Zichlik"
        },
        {
          "id": "D",
          "text": "Konsentratsiya"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Modda miqdoriga tegishli."
    },
    {
      "id": "fizika-895",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Avogadro doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Avogadro doimiysi - 1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)."
    },
    {
      "id": "fizika-896",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol moddadagi atom yoki molekulalar soni (N_A ≈ 6.02 · 10²³ mol⁻¹)'?",
      "options": [
        {
          "id": "A",
          "text": "Avogadro doimiysi"
        },
        {
          "id": "B",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "C",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "D",
          "text": "Plank doimiysi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Avogadro doimiysiga tegishli."
    },
    {
      "id": "fizika-897",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Bolsman doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Bolsman doimiysi - Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)."
    },
    {
      "id": "fizika-898",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Ideal gaz harorati va molekulalarining o'rtacha kinetik energiyasini bog'lovchi kattalik (k ≈ 1.38 · 10⁻²³ J/K)'?",
      "options": [
        {
          "id": "A",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "B",
          "text": "R-doimiy"
        },
        {
          "id": "C",
          "text": "Avogadro doimiysi"
        },
        {
          "id": "D",
          "text": "Faradey doimiysi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Bolsman doimiysiga tegishli."
    },
    {
      "id": "fizika-899",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Universal gaz doimiysi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Universal gaz doimiysi - 1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))."
    },
    {
      "id": "fizika-900",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 mol ideal gazning 1 Kelvinga qizdirilganda bajargan ishi (R ≈ 8.31 J/(mol·K))'?",
      "options": [
        {
          "id": "A",
          "text": "Bolsman doimiysi"
        },
        {
          "id": "B",
          "text": "Plank doimiysi"
        },
        {
          "id": "C",
          "text": "Universal gaz doimiysi"
        },
        {
          "id": "D",
          "text": "Kulon doimiysi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Universal gaz doimiysiga tegishli."
    },
    {
      "id": "fizika-901",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma issiqlik sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma issiqlik sig'imi - 1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))."
    },
    {
      "id": "fizika-902",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: '1 kg moddani 1 gradusga isitish uchun zarur bo'lgan issiqlik miqdori (c = Q / (m·ΔT))'?",
      "options": [
        {
          "id": "A",
          "text": "Solishtirma yonish issiqligi"
        },
        {
          "id": "B",
          "text": "Solishtirma erish issiqligi"
        },
        {
          "id": "C",
          "text": "Solishtirma issiqlik sig'imi"
        },
        {
          "id": "D",
          "text": "Bug'lanish issiqligi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma issiqlik sig'imiga tegishli."
    },
    {
      "id": "fizika-903",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma erish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma erish issiqligi - Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)."
    },
    {
      "id": "fizika-904",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Erish haroratidagi 1 kg qattiq jismni suyuqlikka aylantirish uchun kerak bo'lgan issiqlik (λ = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Bug'lanish issiqligi"
        },
        {
          "id": "B",
          "text": "Issiqlik sig'imi"
        },
        {
          "id": "C",
          "text": "Yonish issiqligi"
        },
        {
          "id": "D",
          "text": "Solishtirma erish issiqligi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma erish issiqligiga tegishli."
    },
    {
      "id": "fizika-905",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma bug'lanish issiqligi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma bug'lanish issiqligi - Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)."
    },
    {
      "id": "fizika-906",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Qaynash haroratidagi 1 kg suyuqlikni bug'ga aylantirish uchun zarur bo'lgan issiqlik (r = Q / m)'?",
      "options": [
        {
          "id": "A",
          "text": "Yonish issiqligi"
        },
        {
          "id": "B",
          "text": "Solishtirma bug'lanish issiqligi"
        },
        {
          "id": "C",
          "text": "Kondensatsiya"
        },
        {
          "id": "D",
          "text": "Erish issiqligi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma bug'lanish issiqligiga tegishli."
    },
    {
      "id": "fizika-907",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Ichki energiya' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ichki energiya - Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi."
    },
    {
      "id": "fizika-908",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Jismni tashkil etuvchi barcha mikrozarrachalar harakat kinetik va o'zaro ta'sir potensial energiyalari yig'indisi'?",
      "options": [
        {
          "id": "A",
          "text": "Entalpiya"
        },
        {
          "id": "B",
          "text": "Kimyoviy energiya"
        },
        {
          "id": "C",
          "text": "Mexanik energiya"
        },
        {
          "id": "D",
          "text": "Ichki energiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Ichki energiyaga tegishli."
    },
    {
      "id": "fizika-909",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr zaryadi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr zaryadi - Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)."
    },
    {
      "id": "fizika-910",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Zarrachalar yoki jismlarning elektromagnit o'zaro ta'sirlashuv xususiyatini ifodalovchi kattalik (birligi Kulon)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok kuchi"
        },
        {
          "id": "B",
          "text": "Elektr zaryadi"
        },
        {
          "id": "C",
          "text": "Sig'im"
        },
        {
          "id": "D",
          "text": "Kuchlanish"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr zaryadiga tegishli."
    },
    {
      "id": "fizika-911",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr sig'imi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr sig'imi - O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)."
    },
    {
      "id": "fizika-912",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'tkazgich zaryadining uning potensialiga nisbatiga teng bo'lgan kattalik (C = q / U, birligi Farad)'?",
      "options": [
        {
          "id": "A",
          "text": "Qarshilik"
        },
        {
          "id": "B",
          "text": "Induktivlik"
        },
        {
          "id": "C",
          "text": "Elektr sig'imi"
        },
        {
          "id": "D",
          "text": "O'tkazuvchanlik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr sig'imiga tegishli."
    },
    {
      "id": "fizika-913",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr kuchlanish (potensiallar ayirmasi)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr kuchlanish (potensiallar ayirmasi) - Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)."
    },
    {
      "id": "fizika-914",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Birlik musbat zaryadni maydonning bir nuqtasidan ikkinchisiga ko'chirishda bajarilgan ish (U = A / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr kuchlanish (potensiallar ayirmasi)"
        },
        {
          "id": "B",
          "text": "Tok kuchi"
        },
        {
          "id": "C",
          "text": "EYK"
        },
        {
          "id": "D",
          "text": "Kuchlanganlik"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr kuchlanish (potensiallar ayirmasi)ga tegishli."
    },
    {
      "id": "fizika-915",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr yurituvchi kuch (EYK)' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr yurituvchi kuch (EYK) - Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)."
    },
    {
      "id": "fizika-916",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Begona kuchlarning birlik zaryadni butun yopiq kontur bo'ylab ko'chirishdagi ishi (ε = A_b / q, Volt)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr yurituvchi kuch (EYK)"
        },
        {
          "id": "B",
          "text": "Tok kuchi"
        },
        {
          "id": "C",
          "text": "Kuchlanish"
        },
        {
          "id": "D",
          "text": "Potensial"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr yurituvchi kuch (EYK)ga tegishli."
    },
    {
      "id": "fizika-917",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Solishtirma qarshilik' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Solishtirma qarshilik - Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)."
    },
    {
      "id": "fizika-918",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Uzunligi 1 m, ko'ndalang kesim yuzi 1 m² bo'lgan o'tkazgich qarshiligi (ρ, birligi Om·m)'?",
      "options": [
        {
          "id": "A",
          "text": "Elektr sig'im"
        },
        {
          "id": "B",
          "text": "Induktivlik"
        },
        {
          "id": "C",
          "text": "Solishtirma qarshilik"
        },
        {
          "id": "D",
          "text": "O'tkazuvchanlik"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Solishtirma qarshilikga tegishli."
    },
    {
      "id": "fizika-919",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Elektr tokining quvvati' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Elektr tokining quvvati - Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)."
    },
    {
      "id": "fizika-920",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi ichida elektr toki bajargan ish (P = U · I = I²R, birligi Vatt)'?",
      "options": [
        {
          "id": "A",
          "text": "Tok zichligi"
        },
        {
          "id": "B",
          "text": "Elektr tokining quvvati"
        },
        {
          "id": "C",
          "text": "Elektr ishi"
        },
        {
          "id": "D",
          "text": "EYK"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Elektr tokining quvvatiga tegishli."
    },
    {
      "id": "fizika-921",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Lorens kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Lorens kuchi - Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-922",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydonida harakatlanayotgan zaryadli zarrachaga maydon tomonidan ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Lorens kuchi"
        },
        {
          "id": "B",
          "text": "Kulon kuchi"
        },
        {
          "id": "C",
          "text": "Amper kuchi"
        },
        {
          "id": "D",
          "text": "Og'irlik kuchi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Lorens kuchiga tegishli."
    },
    {
      "id": "fizika-923",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Amper kuchi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Amper kuchi - Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch."
    },
    {
      "id": "fizika-924",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Magnit maydoniga joylashtirilgan tokli o'tkazgichga ta'sir qiluvchi kuch'?",
      "options": [
        {
          "id": "A",
          "text": "Elastiklik kuchi"
        },
        {
          "id": "B",
          "text": "Amper kuchi"
        },
        {
          "id": "C",
          "text": "Kulon kuchi"
        },
        {
          "id": "D",
          "text": "Lorens kuchi"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Amper kuchiga tegishli."
    },
    {
      "id": "fizika-925",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'O'zinduksiya hodisasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "D",
          "text": "Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: O'zinduksiya hodisasi - Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi."
    },
    {
      "id": "fizika-926",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Konturdagi tok kuchining o'zgarishi natijasida o'sha konturning o'zida induksion EYK hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "O'zaro induksiya"
        },
        {
          "id": "B",
          "text": "Gistorezisi"
        },
        {
          "id": "C",
          "text": "Fotoeffekt"
        },
        {
          "id": "D",
          "text": "O'zinduksiya hodisasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif O'zinduksiya hodisasiga tegishli."
    },
    {
      "id": "fizika-927",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Transformator' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Transformator - O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma."
    },
    {
      "id": "fizika-928",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'O'zgaruvchan tok kuchlanishini chastotasini o'zgartirmasdan oshiruvchi yoki kamaytiruvchi qurilma'?",
      "options": [
        {
          "id": "A",
          "text": "Generator"
        },
        {
          "id": "B",
          "text": "Dvigatel"
        },
        {
          "id": "C",
          "text": "Kondensator"
        },
        {
          "id": "D",
          "text": "Transformator"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Transformatorga tegishli."
    },
    {
      "id": "fizika-929",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish davri' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "C",
          "text": "Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish davri - Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)."
    },
    {
      "id": "fizika-930",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Bitta to'liq tebranish uchun ketgan vaqt (T = t / N, birligi soniya)'?",
      "options": [
        {
          "id": "A",
          "text": "Tebranish davri"
        },
        {
          "id": "B",
          "text": "Faza"
        },
        {
          "id": "C",
          "text": "Amplituda"
        },
        {
          "id": "D",
          "text": "Chastota"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish davriga tegishli."
    },
    {
      "id": "fizika-931",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Tebranish chastotasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Tebranish chastotasi - Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)."
    },
    {
      "id": "fizika-932",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Vaqt birligi (1 sekund) ichidagi to'liq tebranishlar soni (ν = 1 / T, birligi Gers)'?",
      "options": [
        {
          "id": "A",
          "text": "Davr"
        },
        {
          "id": "B",
          "text": "Tebranish chastotasi"
        },
        {
          "id": "C",
          "text": "Amplituda"
        },
        {
          "id": "D",
          "text": "To'lqin soni"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Tebranish chastotasiga tegishli."
    },
    {
      "id": "fizika-933",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin interferensiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin interferensiyasi - Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi."
    },
    {
      "id": "fizika-934",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Kogerent to'lqinlar qo'shilganda fazoda turg'un kuchayish va susayish manzaralarining hosil bo'lishi'?",
      "options": [
        {
          "id": "A",
          "text": "Yutilish"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Dispersiya"
        },
        {
          "id": "D",
          "text": "To'lqin interferensiyasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin interferensiyasiga tegishli."
    },
    {
      "id": "fizika-935",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'lqin diffraksiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: To'lqin diffraksiyasi - To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi."
    },
    {
      "id": "fizika-936",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'To'lqinlarning o'z yo'lidagi to'siqlarni aylanib o'tish hodisasi'?",
      "options": [
        {
          "id": "A",
          "text": "Interferensiya"
        },
        {
          "id": "B",
          "text": "Sinish"
        },
        {
          "id": "C",
          "text": "Polyarizatsiya"
        },
        {
          "id": "D",
          "text": "To'lqin diffraksiyasi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'lqin diffraksiyasiga tegishli."
    },
    {
      "id": "fizika-937",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'lik dispersiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'lik dispersiyasi - Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi."
    },
    {
      "id": "fizika-938",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Moddaning sindirish ko'rsatkichining yorug'lik chastotasiga (to'lqin uzunligiga) bog'liqligi'?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'lik dispersiyasi"
        },
        {
          "id": "B",
          "text": "Diffraksiya"
        },
        {
          "id": "C",
          "text": "Yutilish"
        },
        {
          "id": "D",
          "text": "Interferensiya"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'lik dispersiyasiga tegishli."
    },
    {
      "id": "fizika-939",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'To'liq ichki qaytish' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: To'liq ichki qaytish - Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi."
    },
    {
      "id": "fizika-940",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik optik zichroq muhitdan optik kamroq muhitga o'tganda ma'lum chegaraviy burchakdan boshlab to'liq orqaga qaytishi'?",
      "options": [
        {
          "id": "A",
          "text": "Dispersiya"
        },
        {
          "id": "B",
          "text": "Sinish"
        },
        {
          "id": "C",
          "text": "Diffraksiya"
        },
        {
          "id": "D",
          "text": "To'liq ichki qaytish"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif To'liq ichki qaytishga tegishli."
    },
    {
      "id": "fizika-941",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Fotoeffekt' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Fotoeffekt - Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi."
    },
    {
      "id": "fizika-942",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yorug'lik ta'sirida moddadan (asosan metallardan) elektronlarning urib chiqarilishi'?",
      "options": [
        {
          "id": "A",
          "text": "Rentgen nurlanishi"
        },
        {
          "id": "B",
          "text": "Lyuminessensiya"
        },
        {
          "id": "C",
          "text": "Termoemissiya"
        },
        {
          "id": "D",
          "text": "Fotoeffekt"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Fotoeffektga tegishli."
    },
    {
      "id": "fizika-943",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yorug'likning qizil chegarasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)"
        },
        {
          "id": "B",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yorug'likning qizil chegarasi - Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)."
    },
    {
      "id": "fizika-944",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Fotoeffekt yuz berishi mumkin bo'lgan eng kichik chastota (yoki eng katta to'lqin uzunligi)'?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'likning qizil chegarasi"
        },
        {
          "id": "B",
          "text": "Ko'rinish chegarasi"
        },
        {
          "id": "C",
          "text": "Spektr chegarasi"
        },
        {
          "id": "D",
          "text": "Diffraksiya burchagi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yorug'likning qizil chegarasiga tegishli."
    },
    {
      "id": "fizika-945",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Yadro bog'lanish energiyasi' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        },
        {
          "id": "B",
          "text": "Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)"
        },
        {
          "id": "C",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "D",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Yadro bog'lanish energiyasi - Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)."
    },
    {
      "id": "fizika-946",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni alohida nuklonlarga ajratish uchun sarflanishi kerak bo'lgan minimal energiya (ΔE = Δm · c²)'?",
      "options": [
        {
          "id": "A",
          "text": "Ionlanish energiyasi"
        },
        {
          "id": "B",
          "text": "Aktivlanish energiyasi"
        },
        {
          "id": "C",
          "text": "Yadro bog'lanish energiyasi"
        },
        {
          "id": "D",
          "text": "Chiqish ishi"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Yadro bog'lanish energiyasiga tegishli."
    },
    {
      "id": "fizika-947",
      "question": "DTM namunaviy fizika tahlili: Fizikada 'Massa defekti' tushunchasining ta'rifi yoki xarakterli xususiyati qaysi javobda to'g'ri ko'rsatilgan?",
      "options": [
        {
          "id": "A",
          "text": "Vaqt birligi ichida bosib o'tilgan yo'l (v = s / t)"
        },
        {
          "id": "B",
          "text": "Jismlarning bir-biriga mexanik ta'siri o'lchovi (F = m · a, birligi Nyuton)"
        },
        {
          "id": "C",
          "text": "Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)"
        },
        {
          "id": "D",
          "text": "Vaqt birligi ichida tezlikning o'zgarish tezligi (a = Δv / Δt)"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Massa defekti - Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)."
    },
    {
      "id": "fizika-948",
      "question": "DTM namunaviy fizika tahlili: Quyidagi ta'rif qaysi fizik kattalik, asbob yoki qonuniyatga tegishli: 'Yadroni tashkil qiluvchi alohida nuklonlar massalari yig'indisining yadro tinchlik massasidan kattaligi (Δm)'?",
      "options": [
        {
          "id": "A",
          "text": "Massa defekti"
        },
        {
          "id": "B",
          "text": "Zichlik defekti"
        },
        {
          "id": "C",
          "text": "Relativistik massa"
        },
        {
          "id": "D",
          "text": "Massa nisbati"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Ushbu ta'rif Massa defektiga tegishli."
    },
    {
      "id": "fizika-949",
      "question": "DTM namunaviy fizika tahlili: Moddiy nuqta nima?",
      "options": [
        {
          "id": "A",
          "text": "Qo'zg'almas jism"
        },
        {
          "id": "B",
          "text": "Hajmi nolga teng jism"
        },
        {
          "id": "C",
          "text": "Faqat mikrozarracha"
        },
        {
          "id": "D",
          "text": "Harakat sharoitida o'lchamlari hisobga olinmasa ham bo'ladigan jism"
        }
      ],
      "correct": "D",
      "xp": 100,
      "explanation": "Nazariy asos: O'lchamlari ko'rilayotgan masofalarga nisbatan juda kichik bo'lgan jism."
    },
    {
      "id": "fizika-950",
      "question": "DTM namunaviy fizika tahlili: Sanoq sistemasi qanday elementlardan tashkil topgan?",
      "options": [
        {
          "id": "A",
          "text": "Faqat Yer sathi"
        },
        {
          "id": "B",
          "text": "Faqat chizg'ich va soat"
        },
        {
          "id": "C",
          "text": "Faqat harakat trayektoriyasi"
        },
        {
          "id": "D",
          "text": "Sanoq jismi, u bilan bog'langan koordinatalar sistemasi va vaqt o'lchagich (soat)"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Sanoq sistemasi = Sanoq jismi + Koordinata sistemasi + Soat."
    },
    {
      "id": "fizika-951",
      "question": "DTM namunaviy fizika tahlili: Trayektoriya nima?",
      "options": [
        {
          "id": "A",
          "text": "Boshlang'ich va oxirgi nuqtalarni tutashtiruvchi vektor"
        },
        {
          "id": "B",
          "text": "Vaqt birligi"
        },
        {
          "id": "C",
          "text": "Harakatlanayotgan jism qoldirgan yoki chizgan chiziq"
        },
        {
          "id": "D",
          "text": "Bosib o'tilgan yo'l uzunligi"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Fazoda jism harakatlangan iz/chiziq trayektoriya deyiladi."
    },
    {
      "id": "fizika-952",
      "question": "DTM namunaviy fizika tahlili: Ko'chish nima?",
      "options": [
        {
          "id": "A",
          "text": "Trayektoriyaning uzunligi"
        },
        {
          "id": "B",
          "text": "Harakatning boshlang'ich va oxirgi nuqtalarini tutashtiruvchi yo'nalishga ega to'g'ri chiziq kesmasi (vektor)"
        },
        {
          "id": "C",
          "text": "Faqat tezlik vektori"
        },
        {
          "id": "D",
          "text": "Bosib o'tilgan yo'l"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chish vektor kattalik, yo'l esa skalyar kattalik."
    },
    {
      "id": "fizika-953",
      "question": "DTM namunaviy fizika tahlili: Teng o'zgaruvchan harakatda tezlanish qanday kattalik hisoblanadi?",
      "options": [
        {
          "id": "A",
          "text": "Nolga teng"
        },
        {
          "id": "B",
          "text": "Davriy tebranuvchi"
        },
        {
          "id": "C",
          "text": "Vaqt o'tishi bilan o'zgarmas (a = const)"
        },
        {
          "id": "D",
          "text": "Doimiy ortib boruvchi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Teng o'zgaruvchan harakatda a = const bo'ladi."
    },
    {
      "id": "fizika-954",
      "question": "DTM namunaviy fizika tahlili: Boshlang'ich tezliksiz erkin tushayotgan jismning t vaqtdagi tushish balandligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "h = g · t"
        },
        {
          "id": "B",
          "text": "h = v · t"
        },
        {
          "id": "C",
          "text": "h = (g · t²) / 2"
        },
        {
          "id": "D",
          "text": "h = 2g / t²"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Boshlang'ich tezlik v0 = 0 bo'lganda h = gt²/2."
    },
    {
      "id": "fizika-955",
      "question": "DTM namunaviy fizika tahlili: Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklda bo'ladi?",
      "options": [
        {
          "id": "A",
          "text": "Parabola"
        },
        {
          "id": "B",
          "text": "Aylana"
        },
        {
          "id": "C",
          "text": "To'g'ri chiziq"
        },
        {
          "id": "D",
          "text": "Giperbola"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Havoning qarshiligi hisobga olinmaganda trayektoriya paraboladir."
    },
    {
      "id": "fizika-956",
      "question": "DTM namunaviy fizika tahlili: Aylanma harakatda markazga intilma tezlanish formulasi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "a = v² / R = ω² · R"
        },
        {
          "id": "B",
          "text": "a = v / t"
        },
        {
          "id": "C",
          "text": "a = v · R"
        },
        {
          "id": "D",
          "text": "a = ω / R"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Markazga intilma tezlanish a_m = v²/R."
    },
    {
      "id": "fizika-957",
      "question": "DTM namunaviy fizika tahlili: Birinchi kosmik tezlikning Yer uchun taxminiy qiymati qancha?",
      "options": [
        {
          "id": "A",
          "text": "7.9 km/s"
        },
        {
          "id": "B",
          "text": "16.7 km/s"
        },
        {
          "id": "C",
          "text": "11.2 km/s"
        },
        {
          "id": "D",
          "text": "300 000 km/s"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yer atrofida pastki orbitada aylanish tezligi v1 ≈ 7.9 km/s."
    },
    {
      "id": "fizika-958",
      "question": "DTM namunaviy fizika tahlili: Ikkinchi kosmik tezlik (parabolik tezlik) Yer uchun qanchaga teng?",
      "options": [
        {
          "id": "A",
          "text": "11.2 km/s"
        },
        {
          "id": "B",
          "text": "9.8 km/s"
        },
        {
          "id": "C",
          "text": "7.9 km/s"
        },
        {
          "id": "D",
          "text": "16.7 km/s"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Yer gravitatsiyasini yengib chiqish tezligi v2 ≈ 11.2 km/s."
    },
    {
      "id": "fizika-959",
      "question": "DTM namunaviy fizika tahlili: Uchinchi kosmik tezlik Yer uchun qancha?",
      "options": [
        {
          "id": "A",
          "text": "42 km/s"
        },
        {
          "id": "B",
          "text": "16.7 km/s"
        },
        {
          "id": "C",
          "text": "7.9 km/s"
        },
        {
          "id": "D",
          "text": "11.2 km/s"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh sistemasini tark etish tezligi v3 ≈ 16.7 km/s."
    },
    {
      "id": "fizika-960",
      "question": "DTM namunaviy fizika tahlili: Og'irlik markazi nima?",
      "options": [
        {
          "id": "A",
          "text": "Massa eng ko'p to'plangan nuqta"
        },
        {
          "id": "B",
          "text": "Jismning geometrik o'rtasi"
        },
        {
          "id": "C",
          "text": "Tayanch nuqtasi"
        },
        {
          "id": "D",
          "text": "Jismning barcha qismlariga ta'sir qiluvchi og'irlik kuchlarining teng ta'sir etuvchisi qo'yilgan nuqta"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Og'irlik kuchining qo'yilish nuqtasi."
    },
    {
      "id": "fizika-961",
      "question": "DTM namunaviy fizika tahlili: Richagning muvozanat sharti qanday ifodalanadi (Arximed qoidasi)?",
      "options": [
        {
          "id": "A",
          "text": "F1 · F2 = l1 · l2"
        },
        {
          "id": "B",
          "text": "F1 · l1 = F2 · l2"
        },
        {
          "id": "C",
          "text": "F1 + F2 = l1 + l2"
        },
        {
          "id": "D",
          "text": "F1 / l1 = F2 / l2"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Kuchlar momentlari o'zaro teng bo'lishi kerak."
    },
    {
      "id": "fizika-962",
      "question": "DTM namunaviy fizika tahlili: Ko'chmas blok qanday mexanik yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "Kuchdan yutuq bermaydi, faqat kuch yo'nalishini o'zgartiradi"
        },
        {
          "id": "B",
          "text": "Kuchdan 2 marta yutuq beradi"
        },
        {
          "id": "C",
          "text": "Ishdan 2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "Tezlikdan yutuq beradi"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'chmas blok kuchdan yutuq bermaydi."
    },
    {
      "id": "fizika-963",
      "question": "DTM namunaviy fizika tahlili: Ko'char blok kuchdan necha marta yutuq beradi?",
      "options": [
        {
          "id": "A",
          "text": "4 marta"
        },
        {
          "id": "B",
          "text": "3 marta"
        },
        {
          "id": "C",
          "text": "2 marta yutuq beradi"
        },
        {
          "id": "D",
          "text": "Kuchdan yutuq bermaydi"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'char blok kuchdan 2 barobar yutuq beradi (masofada 2 marta yutqazadi)."
    },
    {
      "id": "fizika-964",
      "question": "DTM namunaviy fizika tahlili: Mexanikaning 'oltin qoidasi' qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Har doim energiyada yutuq bo'ladi"
        },
        {
          "id": "B",
          "text": "Kuchdan necha marta yutsak, masofada shuncha yutqazamiz (ishdan yutuq olinmaydi)"
        },
        {
          "id": "C",
          "text": "Ishdan 2 marta yutish mumkin"
        },
        {
          "id": "D",
          "text": "Faqat tezlikdan yutish mumkin"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Oddiy mexanizmlar ishdan yutuq bermaydi."
    },
    {
      "id": "fizika-965",
      "question": "DTM namunaviy fizika tahlili: Ideal gaz nima?",
      "options": [
        {
          "id": "A",
          "text": "Suyuqlikka aylanmaydigan gaz"
        },
        {
          "id": "B",
          "text": "Faqat vodorod gazi"
        },
        {
          "id": "C",
          "text": "Xona haroratidagi har qanday gaz"
        },
        {
          "id": "D",
          "text": "Molekulalari o'lchamlari hisobga olinmaydigan, to'qnashuvdan boshqa vaqtda o'zaro ta'sirlashmaydigan nazariy model"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Fizikada qo'llanadigan ideallashtirilgan model."
    },
    {
      "id": "fizika-966",
      "question": "DTM namunaviy fizika tahlili: Termodinamik harorat T va Selsiy harorati t o'rtasidagi bog'lanish qaysi?",
      "options": [
        {
          "id": "A",
          "text": "T = t + 273.15"
        },
        {
          "id": "B",
          "text": "T = 273.15 / t"
        },
        {
          "id": "C",
          "text": "T = t - 273.15"
        },
        {
          "id": "D",
          "text": "T = t · 1.8"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Kelvin shkalasi T = t + 273.15 K."
    },
    {
      "id": "fizika-967",
      "question": "DTM namunaviy fizika tahlili: Diffuziya hodisasi nimani isbotlaydi?",
      "options": [
        {
          "id": "A",
          "text": "Jismning qattiqligini"
        },
        {
          "id": "B",
          "text": "Molekulalarning bo'linishini"
        },
        {
          "id": "C",
          "text": "Gravitatsiya ta'sirini"
        },
        {
          "id": "D",
          "text": "Modda molekulalarining uzluksiz va tartibsiz (xaotik) harakatini"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Moddalarning o'z-o'zidan aralashib ketishi ularning harakatdaligini ko'rsatadi."
    },
    {
      "id": "fizika-968",
      "question": "DTM namunaviy fizika tahlili: Broun harakati nima?",
      "options": [
        {
          "id": "A",
          "text": "Konveksiya oqimi"
        },
        {
          "id": "B",
          "text": "Faqat tirik bakteriyalar harakati"
        },
        {
          "id": "C",
          "text": "Molekulalarning aylanishi"
        },
        {
          "id": "D",
          "text": "Suyuqlik yoki gazda muallaq turgan mikroskopik zarrachalarning tartibsiz harakati"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: Suyuqlik molekulalarining zarbalari oqibatida yuz beradi."
    },
    {
      "id": "fizika-969",
      "question": "DTM namunaviy fizika tahlili: Suyuqlikning bug'lanish tezligi nimalarga bog'liq?",
      "options": [
        {
          "id": "A",
          "text": "Faqat idishning rangiga"
        },
        {
          "id": "B",
          "text": "Faqat havo bosimiga"
        },
        {
          "id": "C",
          "text": "Suyuqlik turiga, sirt yuzasiga, haroratga va shamolga"
        },
        {
          "id": "D",
          "text": "Faqat suyuqlik massasiga"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Sirt yuzi, harorat va ochiq havo oqimi bug'lanishni tezlashtiradi."
    },
    {
      "id": "fizika-970",
      "question": "DTM namunaviy fizika tahlili: To'yingan bug' nima?",
      "options": [
        {
          "id": "A",
          "text": "O'z suyuqligi bilan dinamik muvozanatda bo'lgan bug'"
        },
        {
          "id": "B",
          "text": "Qaynayotgan bug'"
        },
        {
          "id": "C",
          "text": "Zichligi eng kichik bug'"
        },
        {
          "id": "D",
          "text": "Qizdirilgan quruq bug'"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Vaqt birligida bug'lanayotgan va kondensatsiyalanayotgan molekulalar soni tenglashadi."
    },
    {
      "id": "fizika-971",
      "question": "DTM namunaviy fizika tahlili: Qaynash nima?",
      "options": [
        {
          "id": "A",
          "text": "Faqat sirtqi bug'lanish"
        },
        {
          "id": "B",
          "text": "Suyuqlik erishi"
        },
        {
          "id": "C",
          "text": "Zichlik ortishi"
        },
        {
          "id": "D",
          "text": "Suyuqlikning nafaqat sirtidan, balki butun hajmi bo'ylab pufakchalar hosil qilib jadallik bilan bug'lanishi"
        }
      ],
      "correct": "D",
      "xp": 150,
      "explanation": "Nazariy asos: To'yingan bug' bosimi tashqi bosimga tenglashganda qaynash boshlanadi."
    },
    {
      "id": "fizika-972",
      "question": "DTM namunaviy fizika tahlili: Qattiq jismning suyuqlikka aylanish jarayoni nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Kristallanish"
        },
        {
          "id": "B",
          "text": "Kondensatsiya"
        },
        {
          "id": "C",
          "text": "Erish"
        },
        {
          "id": "D",
          "text": "Sublimatsiya"
        }
      ],
      "correct": "C",
      "xp": 100,
      "explanation": "Nazariy asos: Erish jarayonida harorat o'zgarmaydi."
    },
    {
      "id": "fizika-973",
      "question": "DTM namunaviy fizika tahlili: Moddaning to'g'ridan-to'g'ri qattiq holatdan gaz holatiga o'tishi nima deb ataladi?",
      "options": [
        {
          "id": "A",
          "text": "Erish"
        },
        {
          "id": "B",
          "text": "Kondensatsiya"
        },
        {
          "id": "C",
          "text": "Qaynash"
        },
        {
          "id": "D",
          "text": "Sublimatsiya"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Masalan, yod yoki quruq muzning to'g'ridan-to'g'ri gazga aylanishi."
    },
    {
      "id": "fizika-974",
      "question": "DTM namunaviy fizika tahlili: Gazning to'g'ridan-to'g'ri qattiq holatga o'tishi nima deyiladi?",
      "options": [
        {
          "id": "A",
          "text": "Ionlanish"
        },
        {
          "id": "B",
          "text": "Erish"
        },
        {
          "id": "C",
          "text": "Desublimatsiya"
        },
        {
          "id": "D",
          "text": "Bug'lanish"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Sovuqda derazada qirov hosil bo'lishi desublimatsiyadir."
    },
    {
      "id": "fizika-975",
      "question": "DTM namunaviy fizika tahlili: Elektroskop qanday asbob?",
      "options": [
        {
          "id": "A",
          "text": "Jismning elektrlanganganligini aniqlovchi asbob"
        },
        {
          "id": "B",
          "text": "Kuchlanishni oshiruvchi asbob"
        },
        {
          "id": "C",
          "text": "Qarshilikni o'lchovchi asbob"
        },
        {
          "id": "D",
          "text": "Tok kuchini o'lchovchi asbob"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Zaryad bor-yo'qligini yaproqchalarning ochilishidan aniqlaydi."
    },
    {
      "id": "fizika-976",
      "question": "DTM namunaviy fizika tahlili: Metallarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Musbat ionlar"
        },
        {
          "id": "B",
          "text": "Erkin elektronlar"
        },
        {
          "id": "C",
          "text": "Manfiy ionlar"
        },
        {
          "id": "D",
          "text": "Kationlar va anionlar"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Metallarda tok o'tkazuvchilar erkin elektronlardir."
    },
    {
      "id": "fizika-977",
      "question": "DTM namunaviy fizika tahlili: Elektrolitlarda (suyuqliklarda) elektr tokini nimalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat musbat protonlar"
        },
        {
          "id": "B",
          "text": "Musbat va manfiy ionlar"
        },
        {
          "id": "C",
          "text": "Faqat erkin elektronlar"
        },
        {
          "id": "D",
          "text": "Faqat neytronlar"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Elektrolitik dissotsiatsiyada hosil bo'lgan ionlar."
    },
    {
      "id": "fizika-978",
      "question": "DTM namunaviy fizika tahlili: Gazlarda elektr tokini qanday zarrachalar tashiydi?",
      "options": [
        {
          "id": "A",
          "text": "Elektronlar va musbat hamda manfiy ionlar"
        },
        {
          "id": "B",
          "text": "Faqat neytronlar"
        },
        {
          "id": "C",
          "text": "Faqat elektronlar"
        },
        {
          "id": "D",
          "text": "Faqat pozitronlar"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Gaz razryadida ionlar va elektronlar qatnashadi."
    },
    {
      "id": "fizika-979",
      "question": "DTM namunaviy fizika tahlili: Vakuumda elektr toki hosil qilish uchun nima zarur?",
      "options": [
        {
          "id": "A",
          "text": "Elektrolit solish"
        },
        {
          "id": "B",
          "text": "Termoelektron emissiya (qizdirilgan katoddan elektronlar ajralishi)"
        },
        {
          "id": "C",
          "text": "Magnit maydon"
        },
        {
          "id": "D",
          "text": "Yuqori bosim"
        }
      ],
      "correct": "B",
      "xp": 200,
      "explanation": "Nazariy asos: Vakuumda termoelektron emissiya orqali tok o'tadi."
    },
    {
      "id": "fizika-980",
      "question": "DTM namunaviy fizika tahlili: Yarimo'tkazgichlarda o'tkazuvchanlik qanday turlarga bo'linadi?",
      "options": [
        {
          "id": "A",
          "text": "Faqat neytronli"
        },
        {
          "id": "B",
          "text": "Faqat ionli"
        },
        {
          "id": "C",
          "text": "Xususiy (elektron-teshikli) va aralashmali (n-tur va p-tur)"
        },
        {
          "id": "D",
          "text": "Faqat protonli"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Donor aralashma n-tur, akseptor aralashma p-tur hosil qiladi."
    },
    {
      "id": "fizika-981",
      "question": "DTM namunaviy fizika tahlili: O'ta o'tkazuvchanlik hodisasini 1911-yilda simobda kim kashf etgan?",
      "options": [
        {
          "id": "A",
          "text": "Tomas Edison"
        },
        {
          "id": "B",
          "text": "Nikola Tesla"
        },
        {
          "id": "C",
          "text": "Kammerling-Onnes (4.2 K haroratda)"
        },
        {
          "id": "D",
          "text": "Gens Ersted"
        }
      ],
      "correct": "C",
      "xp": 250,
      "explanation": "Nazariy asos: Kritik haroratda elektr qarshiligining keskin nolga tushishi."
    },
    {
      "id": "fizika-982",
      "question": "DTM namunaviy fizika tahlili: Yorug'lik nuri nima?",
      "options": [
        {
          "id": "A",
          "text": "Yorug'lik energiyasi tarqalayotgan yo'nalishni ko'rsatuvchi geometrik chiziq"
        },
        {
          "id": "B",
          "text": "Yorug'lik tezligi"
        },
        {
          "id": "C",
          "text": "Optik linza"
        },
        {
          "id": "D",
          "text": "Fotonlar massasi"
        }
      ],
      "correct": "A",
      "xp": 100,
      "explanation": "Nazariy asos: Geometrik optikada nur tushunchasi."
    },
    {
      "id": "fizika-983",
      "question": "DTM namunaviy fizika tahlili: Yassi ko'zguda hosil bo'lgan tasvir qanday xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Haqiqiy va kattalashgan"
        },
        {
          "id": "B",
          "text": "Mavhum, to'g'ri va jism o'lchamiga teng"
        },
        {
          "id": "C",
          "text": "Kichraytirilgan"
        },
        {
          "id": "D",
          "text": "Haqiqiy va to'ntarilgan"
        }
      ],
      "correct": "B",
      "xp": 150,
      "explanation": "Nazariy asos: Yassi ko'zgu doim mavhum va teng tasvir beradi."
    },
    {
      "id": "fizika-984",
      "question": "DTM namunaviy fizika tahlili: Ko'z gavhari qanday optik xususiyatga ega?",
      "options": [
        {
          "id": "A",
          "text": "Ikki tomoni qavariq yig'uvchi linza"
        },
        {
          "id": "B",
          "text": "Prizma"
        },
        {
          "id": "C",
          "text": "Sochuvchi linza"
        },
        {
          "id": "D",
          "text": "Yassi plastinka"
        }
      ],
      "correct": "A",
      "xp": 150,
      "explanation": "Nazariy asos: Ko'z gavhari yig'uvchi egiluvchan tirik linzadir."
    },
    {
      "id": "fizika-985",
      "question": "DTM namunaviy fizika tahlili: Yaqindan ko'ruvchilik (miopiya) qanday ko'zoynak linzasi bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "B",
          "text": "Silindrik linzalar bilan"
        },
        {
          "id": "C",
          "text": "Rangli filtrlar bilan"
        },
        {
          "id": "D",
          "text": "Sochuvchi (botiq) linzalar bilan"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Miopiyada tasvir to'r parda oldiga tushadi, uni sochuvchi linza to'g'rilaydi."
    },
    {
      "id": "fizika-986",
      "question": "DTM namunaviy fizika tahlili: Uzoqdan ko'ruvchilik (gipermetropiya) qanday linzali ko'zoynak bilan tuzatiladi?",
      "options": [
        {
          "id": "A",
          "text": "Qorong'i filtr bilan"
        },
        {
          "id": "B",
          "text": "Sochuvchi (botiq) linzalar bilan"
        },
        {
          "id": "C",
          "text": "Yig'uvchi (qavariq) linzalar bilan"
        },
        {
          "id": "D",
          "text": "Yassi shisha bilan"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Gipermetropiyada tasvir to'r parda orqasiga o'tib ketadi, yig'uvchi linza kerak."
    },
    {
      "id": "fizika-987",
      "question": "DTM namunaviy fizika tahlili: Ko'rinadigan yorug'lik to'lqin uzunliklari oralig'i taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "10 nm dan 100 nm gacha"
        },
        {
          "id": "B",
          "text": "1 km dan 10 km gacha"
        },
        {
          "id": "C",
          "text": "1 mm dan 1 sm gacha"
        },
        {
          "id": "D",
          "text": "380 nm dan 780 nm gacha"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Binafsha rangdan (380 nm) qizil ranggacha (760-780 nm)."
    },
    {
      "id": "fizika-988",
      "question": "DTM namunaviy fizika tahlili: Rentgen nurlarining to'lqin uzunligi qanday?",
      "options": [
        {
          "id": "A",
          "text": "Infraqizildan uzun"
        },
        {
          "id": "B",
          "text": "Ko'rinadigan yorug'likdan uzun"
        },
        {
          "id": "C",
          "text": "Radioto'lqinlar bilan bir xil"
        },
        {
          "id": "D",
          "text": "Ultrabinafsha va gamma-nurlar oralig'idagi juda qisqa to'lqinlar (0.01 - 10 nm)"
        }
      ],
      "correct": "D",
      "xp": 250,
      "explanation": "Nazariy asos: Rentgen nurlari yuqori o'tuvchanlik qobiliyatiga ega."
    },
    {
      "id": "fizika-989",
      "question": "DTM namunaviy fizika tahlili: Radioaktiv nurlanishning qaysi turi eng katta kirib borish qobiliyatiga ega?",
      "options": [
        {
          "id": "A",
          "text": "Gamma (γ) nurlanish (fotonlar oqimi)"
        },
        {
          "id": "B",
          "text": "Alfa (α) nurlanish (geliy yadrolari)"
        },
        {
          "id": "C",
          "text": "Ultrabinafsha"
        },
        {
          "id": "D",
          "text": "Beta (β) nurlanish (elektronlar)"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Gamma nurlari hatto qalin qo'rg'oshin qatlamidan ham o'tadi."
    },
    {
      "id": "fizika-990",
      "question": "DTM namunaviy fizika tahlili: Alfa (α) zarracha o'zi nima?",
      "options": [
        {
          "id": "A",
          "text": "Tezkor elektron"
        },
        {
          "id": "B",
          "text": "Neytron"
        },
        {
          "id": "C",
          "text": "Geliy atomi yadrosi (ikkita proton va ikkita neytron: ⁴₂He)"
        },
        {
          "id": "D",
          "text": "Foton"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Alfa nurlanish geliy yadrolari oqimidir."
    },
    {
      "id": "fizika-991",
      "question": "DTM namunaviy fizika tahlili: Beta (β⁻) nurlanish qanday zarrachalar oqimidan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Protonlar"
        },
        {
          "id": "B",
          "text": "Geliy yadrolari"
        },
        {
          "id": "C",
          "text": "Pozitronlar"
        },
        {
          "id": "D",
          "text": "Tez harakatlanuvchi elektronlar"
        }
      ],
      "correct": "D",
      "xp": 200,
      "explanation": "Nazariy asos: Beta-manfiy yemirilishda yadrodan elektron uchib chiqadi."
    },
    {
      "id": "fizika-992",
      "question": "DTM namunaviy fizika tahlili: Yadroning zanjirli bo'linish reaksiyasida qaysi og'ir izotop keng qo'llaniladi?",
      "options": [
        {
          "id": "A",
          "text": "Vodorod-1"
        },
        {
          "id": "B",
          "text": "Temir-56"
        },
        {
          "id": "C",
          "text": "Uran-235 (²³⁵U)"
        },
        {
          "id": "D",
          "text": "Uran-238"
        }
      ],
      "correct": "C",
      "xp": 200,
      "explanation": "Nazariy asos: Uran-235 sekin neytronlar ta'sirida bo'linadi va energiya ajratadi."
    },
    {
      "id": "fizika-993",
      "question": "DTM namunaviy fizika tahlili: Termoyadro sintez reaksiyasi nima?",
      "options": [
        {
          "id": "A",
          "text": "Yengil yadrolarning (vodorod izotoplari) o'ta yuqori haroratda birikib og'irroq yadro hosil qilishi"
        },
        {
          "id": "B",
          "text": "Kimyoviy yonish"
        },
        {
          "id": "C",
          "text": "Faqat alfa-yemirilish"
        },
        {
          "id": "D",
          "text": "Og'ir yadrolarning bo'linishi"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Quyosh va yulduzlar energiyasining manbai termoyadro reaksiyasidir."
    },
    {
      "id": "fizika-994",
      "question": "DTM namunaviy fizika tahlili: Quyosh sirtida energiya qaysi jarayon hisobiga ajraladi?",
      "options": [
        {
          "id": "A",
          "text": "Termoyadro sintezi (vodorodning geliyga aylanishi)"
        },
        {
          "id": "B",
          "text": "Uran bo'linishi"
        },
        {
          "id": "C",
          "text": "Gravitatsion qisilish"
        },
        {
          "id": "D",
          "text": "Ko'mir yonishi"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Quyosh yadrosidagi termoyadro reaksiyasi."
    },
    {
      "id": "fizika-995",
      "question": "DTM namunaviy fizika tahlili: Fizikada Plank gipotezasi nimadan iborat?",
      "options": [
        {
          "id": "A",
          "text": "Atomlar yorug'likni uzluksiz emas, balki diskret porsiyalar (kvantlar) tarzida chiqaradi va yutadi"
        },
        {
          "id": "B",
          "text": "Elektronlar qo'zg'almasdir"
        },
        {
          "id": "C",
          "text": "Yorug'lik faqat to'lqindir"
        },
        {
          "id": "D",
          "text": "Energiya doim o'zgaruvchan"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: 1900-yilda Maks Plank kvant nazariyasiga asos soldi."
    },
    {
      "id": "fizika-996",
      "question": "DTM namunaviy fizika tahlili: Nyutonning ikkinchi qonuni qaysi formula bilan ifodalanadi?",
      "options": [
        {
          "id": "A",
          "text": "F = m · a"
        },
        {
          "id": "B",
          "text": "E = m · c²"
        },
        {
          "id": "C",
          "text": "A = F · s"
        },
        {
          "id": "D",
          "text": "P = m · g"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Jismga ta'sir etuvchi kuch uning massasi va tezlanishi ko'paytmasiga teng."
    },
    {
      "id": "fizika-997",
      "question": "DTM namunaviy fizika tahlili: Yorug'likning vakuumdagi tezligi taxminan qancha?",
      "options": [
        {
          "id": "A",
          "text": "30 000 km/s"
        },
        {
          "id": "B",
          "text": "300 000 km/s"
        },
        {
          "id": "C",
          "text": "3 000 km/s"
        },
        {
          "id": "D",
          "text": "3 000 000 km/s"
        }
      ],
      "correct": "B",
      "xp": 250,
      "explanation": "Nazariy asos: c ≈ 3·10^8 m/s = 300 000 km/s."
    },
    {
      "id": "fizika-998",
      "question": "DTM namunaviy fizika tahlili: Normal sharoitda suv qaysi haroratda qaynaydi?",
      "options": [
        {
          "id": "A",
          "text": "100 °C"
        },
        {
          "id": "B",
          "text": "212 °C"
        },
        {
          "id": "C",
          "text": "0 °C"
        },
        {
          "id": "D",
          "text": "120 °C"
        }
      ],
      "correct": "A",
      "xp": 200,
      "explanation": "Nazariy asos: Normal atmosfera bosimida suv 100 °C da qaynaydi."
    },
    {
      "id": "fizika-999",
      "question": "DTM namunaviy fizika tahlili: Elektr tok kuchining o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "Amper"
        },
        {
          "id": "B",
          "text": "Volt"
        },
        {
          "id": "C",
          "text": "Om"
        },
        {
          "id": "D",
          "text": "Vatt"
        }
      ],
      "correct": "A",
      "xp": 250,
      "explanation": "Nazariy asos: Xalqaro birliklar sistemasida tok kuchi Amperda o'lchanadi."
    },
    {
      "id": "fizika-1000",
      "question": "DTM namunaviy fizika tahlili: Tezlanishning SI sistemasidagi asosiy o'lchov birligi qaysi?",
      "options": [
        {
          "id": "A",
          "text": "m/s"
        },
        {
          "id": "B",
          "text": "km/soat"
        },
        {
          "id": "C",
          "text": "m/s²"
        },
        {
          "id": "D",
          "text": "N/kg"
        }
      ],
      "correct": "C",
      "xp": 150,
      "explanation": "Nazariy asos: Tezlanish birligi metr taqsim soniya kvadratidir."
    }
  ]
};

export default fizika;
