import { Suspense, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext.jsx';
import ToastProvider from './context/ToastProvider.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import routes from './routes.jsx';
import { categoryMeta, totalQuestions } from './Pages/Zakovat/Categories/meta.js';

const layoutRoutes = routes.filter((route) => !route.standalone);
const standaloneRoutes = routes.filter((route) => route.standalone);

const SITE_URL = 'https://kredorium.uz';
const formattedTotalQuestions = totalQuestions.toLocaleString('ru-RU');

const PAGE_META = {
  '/': {
    title: "Kredorium — Bilim, Zakovat va O'quv Maskanlari Platformasi",
    description: `Kredorium — O'zbekistondagi bilim, zakovat va o'quv maskanlari platformasi. ${formattedTotalQuestions} ta test savoli, 30 soniyalik interaktiv arena, o'quv maskanlari katalogi va shaxsiy o'sish analitikasi.`,
  },
  '/oquv-maskanlari': {
    title: "O'quv maskanlari — Kredorium",
    description:
      "O'quv maskanlari ma'lumotlari e'lon qilishdan oldin tekshirilmoqda. O'z markazingizni ko'rib chiqishga topshirish uchun biz bilan bog'laning.",
  },
  '/zakovat': {
    title: 'Zakovat arenasi — Kredorium',
    description: `${formattedTotalQuestions} ta savol, ${categoryMeta.length} ta fan va 30 soniyalik taymer. Kredorium zakovat arenasida bilimingizni sinab ko'ring va XP to'plang.`,
  },
  '/reyting': {
    title: 'Reyting — Kredorium',
    description:
      "Kredorium live reytingi: eng faol bilimdonlar, XP va aniqlik ko'rsatkichlari. Top 50 o'rin va shaxsiy reytingingizni ko'ring.",
  },
  '/ai-yordamchi': {
    title: "Kredorium AI — O'quv yordamchi",
    description:
      "Kredorium AI — o'quv yordamchi. Matematika, tillar, mantiq va boshqa fanlar bo'yicha qadam-baqadam tushuntirish oling.",
  },
  '/auth/recover': {
    title: 'Parolni tiklash — Kredorium',
    description: "Kredorium hisobingiz uchun yangi parol o'rnating.",
  },
};

const NOT_FOUND_META = {
  title: 'Sahifa topilmadi — Kredorium',
  description:
    "Siz izlagan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan. Kredorium bosh sahifasiga qaytib davom eting.",
};

function setMeta(selector, attribute, value) {
  const node = document.head.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}

function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const isNotFound = !PAGE_META[location.pathname];
    const meta = isNotFound ? NOT_FOUND_META : PAGE_META[location.pathname];
    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta(
      'meta[name="robots"]',
      'content',
      isNotFound
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
  }, [location.pathname]);

  return null;
}

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key, location.pathname, location.search, location.hash]);

  return null;
}

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border border-hairline border-t-ember" />
        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
        Yuklanmoqda
      </span>
    </div>
  );
}

function StandaloneFallback() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-paper">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border border-hairline border-t-ember" />
        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      </span>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only z-[80] rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-ember-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Asosiy kontentga o&apos;tish
      </a>
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-[1240px] flex-1 px-5 py-8 sm:px-8 sm:py-10">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ToastProvider>
            <ScrollToTop />
            <RouteMeta />
            <Routes>
                {standaloneRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Suspense fallback={<StandaloneFallback />}>{route.element}</Suspense>}
                  />
                ))}
                <Route element={<Layout />}>
                  {layoutRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                  ))}
                  <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
          </ToastProvider>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
