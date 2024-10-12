import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: false, // Set to true during development for debugging
    fallbackLng: "en", // Fallback language if translation is missing
    supportedLng: ["en", "ar"], // Supported languages
    interpolation: {
      escapeValue: false, // Disable escaping HTML entities
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    // ns: ["en", "ar"], // List of namespaces
    // defaultNS: "translation", // Default namespace

    detection: {
      order: ["path", "localStorage", "sessionStorage", "cookie", "htmlTag"],
      // Customize the order of language detection methods
    },
  });

export default i18n;
