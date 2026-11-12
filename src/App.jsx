import { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AuroraField from './Components/AuroraField.jsx';
import routes from './routes.jsx';

const layoutRoutes = routes.filter((route) => !route.standalone);
const standaloneRoutes = routes.filter((route) => route.standalone);

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
    <div className="flex min-h-dvh items-center justify-center bg-[#0b0f19]">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border border-white/10 border-t-[#7d95ff]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#7d95ff]" />
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
      <AuroraField />
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
        <ScrollToTop />
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
      </BrowserRouter>
    </ThemeProvider>
  );
}
