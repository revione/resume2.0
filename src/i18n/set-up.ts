import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import english from "./english";
import spanish from "./spanish";
import deutsch from "./deutsch";

export type LanguagesEsperados = "es" | "de" | "en";

// Guarda el idioma actual en localStorage
const saveLanguageToLocalStorage = (language: LanguagesEsperados) => {
  localStorage.setItem("language", language);
};

// Obtiene el idioma guardado en localStorage
const getLanguageFromLocalStorage = () => localStorage.getItem("language");

void i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: ["es", "de", "en"],
    resources: {
      en: { translation: english },
      es: { translation: spanish },
      de: { translation: deutsch },
    },
  });

// Detecta el idioma guardado en localStorage y lo usa si está disponible
i18next.on("languageDetection", () => {
  const savedLanguage = getLanguageFromLocalStorage();
  if (savedLanguage) {
    void i18next.changeLanguage(savedLanguage);
  }
});

// Si no hay idioma guardado, usa el predeterminado de i18next
if (!getLanguageFromLocalStorage()) {
  saveLanguageToLocalStorage(i18next.language as LanguagesEsperados);
}

// Función para cambiar de idioma
export const changeLanguage = (language: LanguagesEsperados) => {
  void i18next.changeLanguage(language);
  saveLanguageToLocalStorage(language);
};

export default i18next;
