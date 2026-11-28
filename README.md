# Kredorium

Bilim, zakovat va o'quv maskanlari platformasi — o'quv maskanlari bo'limi, 20 000 ta test savoli, AI yordamchi va shaxsiy statistika uchun zamonaviy veb-ilova.

## Texnologiyalar

- React 19 + Vite
- React Router 7
- Tailwind CSS v4
- Supabase (auth, test tarixi, sevimlilar, o'sish jarayoni)
- Gemini API (Vercel serverless funksiyasi orqali)

## Skriptlar

- `npm run dev` — dev serverni ishga tushirish
- `npm run build` — production build
- `npm run preview` — build natijasini lokal ko'rish
- `npm run lint` — ESLint tekshiruvi
- `npm run audit` — savollar bazasini tekshirish (20 fan × 1000 savol)
- `npm run sync:counts` — savollar sonini `src/data/questionCounts.json`ga sinxronlash

## Supabase sozlash

1. [Supabase](https://supabase.com)da loyiha yarating.
2. `supabase/schema.sql` faylini Dashboard → SQL Editor bo'limida ishga tushiring. Bu jadvallar, RLS policy'lar va profil triggerini yaratadi.
3. Authentication → Sign In / Providers → Email bo'limida **Confirm email**ni o'chiring (MVP uchun).
4. Google orqali kirish uchun xuddi shu bo'limda **Google** provider'ini yoqing va Google Cloud'dan olingan Client ID/Secret'ni kiriting.
5. Authentication → URL Configuration bo'limida:
   - Site URL: `http://localhost:5173`
   - Redirect URLs: `http://localhost:5173/`, `http://localhost:5173/auth/recover` va production domeningiz + `/` hamda `/auth/recover`
6. `.env.example` asosida `.env.local` yarating:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_your_key
```

7. Xuddi shu qiymatlarni Vercel loyihasining Environment Variables bo'limiga qo'shing.

> Publishable/anon key client uchun mo'ljallangan. Xavfsizlikni RLS policy'lar ta'minlaydi. `service_role` kalitni hech qachon clientga qo'ymang.

Supabase env qiymatlari bo'lmasa, ilova avtomatik lokal rejimda (localStorage) ishlaydi — bu faqat dev fallback uchun.

## AI yordamchi

`/api/chat` Vercel serverless funksiyasi `GEMINI_API_KEY` environment variable'ini talab qiladi.

## SEO va deploy

- `public/robots.txt`, `public/sitemap.xml` va `public/og-image.png` production uchun tayyor.
- `vercel.json` SPA route'larni `index.html`ga yo'naltiradi; `/api/*` funksiyalari avtomatik ustuvor ishlaydi.
- Sahifa sarlavhalari va meta tavsiflari `src/App.jsx` ichidagi `RouteMeta` orqali boshqariladi.

## Tuzilma

- `src/Components` — umumiy komponentlar (Navbar, Footer, AuthModal, ProductPreview va h.k.)
- `src/Pages` — sahifalar (BoshSahifa, Zakovat, OquvMaskanlari, AiYordamchi, Profil, Auth)
- `src/hooks` — React hooklar
- `src/lib` — Supabase client
- `src/utils` — auth store, ma'lumot repository'lari, validatsiya
- `src/context` — tun/yorug' rejim va toast konteksti
- `src/data` — o'quv maskanlari ma'lumotlari
- `src/Pages/Zakovat/Categories` — fan savollari va kategoriya meta ma'lumotlari
- `src/styles` — umumiy stil tokenlari
- `supabase` — SQL sxema
