import { createContext, useContext } from 'react';
import uz from '../locales/uz.js';
import en from '../locales/en.js';
import ru from '../locales/ru.js';
import de from '../locales/de.js';

export const dictionaries = { uz, en, ru, de };

export const SUPPORTED_LANGUAGES = [
  { code: 'uz', label: 'UZ', name: 'O‘zbek' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage faqat LanguageProvider ichida ishlaydi');
  return context;
}
