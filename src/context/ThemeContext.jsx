import { useCallback, useEffect, useState } from 'react';
import { ThemeContext } from './useTheme';

const STORAGE_KEY = 'kredorium-theme';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    return 'dark';
  }

  return 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // xususiy rejimda yoki storage to'lgan holatda jim o'tamiz
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#060b14' : '#f8fafc');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
