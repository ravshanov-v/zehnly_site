import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  LanguageContext,
  SUPPORTED_LANGUAGES,
  dictionaries,
} from './useLanguage.js';

const STORAGE_KEY = 'kredorium-language';

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && dictionaries[saved]) return saved;
  } catch {
    return 'uz';
  }

  return 'uz';
}

function lookup(dictionary, key) {
  return key
    .split('.')
    .reduce((value, part) => (value == null ? undefined : value[part]), dictionary);
}

function interpolate(template, vars) {
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    vars[name] === undefined ? match : String(vars[name])
  );
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      return;
    }
  }, [language]);

  const t = useCallback(
    (key, vars) => {
      const value =
        lookup(dictionaries[language], key) ?? lookup(dictionaries.uz, key) ?? key;

      if (typeof value !== 'string' || !vars) return value;
      return interpolate(value, vars);
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      languages: SUPPORTED_LANGUAGES,
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
