import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SpacetimeFabric from './Components/SpacetimeFabric.jsx';
import SplashScreen from './Components/SplashScreen.jsx';
import routes from './routes.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col transition-colors duration-300">
      <SpacetimeFabric />
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const SPLASH_KEY = 'zehnly-splash-seen';

function hasSeenSplash() {
  try {
    return sessionStorage.getItem(SPLASH_KEY) === '1';
  } catch {
    return false;
  }
}

function markSplashSeen() {
  try {
    sessionStorage.setItem(SPLASH_KEY, '1');
  } catch {
    // sessionStorage mavjud bo'lmasa ham kirishni bloklamaymiz
  }
}

export default function App() {
  const [isLoading, setIsLoading] = useState(() => !hasSeenSplash());

  return (
    <ThemeProvider>
      {isLoading && (
        <SplashScreen
          onFinish={() => {
            markSplashSeen();
            setIsLoading(false);
          }}
        />
      )}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
