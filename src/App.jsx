import { Suspense, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ToastProvider from './context/ToastProvider.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import routes from './routes.jsx';

const layoutRoutes = routes.filter((route) => !route.standalone);
const standaloneRoutes = routes.filter((route) => route.standalone);

const SITE_URL = 'https://mushohada.uz';

const PAGE_META = {
  '/': {
    title: "Mushohada — Bilim, Zakovat va O'quv Maskanlari Platformasi",
    description:
      "Mushohada — O'zbekistondagi bilim, zakovat va o'quv maskanlari platformasi. 20 000 ta test savoli, 30 soniyalik interaktiv arena, o'quv maskanlari bo'limi va shaxsiy o'sish analitikasi.",
  },
  '/oquv-maskanlari': {
    title: "O'quv maskanlari — Mushohada",
    description:
      "O'quv maskanlari bazasi hozircha to'ldirilmoqda. O'z markazingizni platformaga qo'shish uchun biz bilan bog'laning.",
  },
  '/zakovat': {
    title: 'Zakovat arenasi — Mushohada',
    description:
      "20 000 ta savol, 20 ta fan va 30 soniyalik taymer. Mushohada zakovat arenasida bilimingizni sinab ko'ring va XP to'plang.",
  },
  '/ai-yordamchi': {
    title: "Mushohada AI — O'quv yordamchi",
    description:
      "Mushohada AI — o'zbek tilida ishlaydigan o'quv yordamchi. Matematika, tillar, mantiq va boshqa fanlar bo'yicha qadam-baqadam tushuntirish oling.",
  },
  '/auth/recover': {
    title: 'Parolni tiklash — Mushohada',
    description: "Mushohada hisobingiz uchun yangi parol o'rnating.",
  },
};

function setMeta(selector, attribute, value) {
  const node = document.head.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}

function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? PAGE_META['/'];
    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
