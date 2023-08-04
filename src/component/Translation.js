// utils/translations.js
import enTranslation from '../translations/en.json'; // Path to your English translations
import frTranslation from '../translations/fr.json'; // Path to your French translations

const translations = {
  en: enTranslation,
  fr: frTranslation,
  // Add more language translations here as needed
};

// Default language is English
let currentLanguage = 'en';

export function setLanguage(lang) {
  currentLanguage = lang;
}

export function t(key) {
  const translation = translations[currentLanguage];
  if (!translation) return key; // Return the key itself if translation is not available
  return translation[key] || key;
}
