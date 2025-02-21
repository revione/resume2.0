import { changeLanguage } from "./set-up";

export function detectAndChangeLanguage() {
  const url = new URL(window.location.href);
  const hostname = url.hostname;

  // Expresión regular para detectar "resume.was.was", "cv.was.was" o "lebenslauf.was.was"
  const match = hostname.match(/^(resume|cv|lebenslauf)\.was\.was$/);

  if (match) {
    const languageMap = {
      resume: "en",
      cv: "es",
      lebenslauf: "de",
    } as const;

    const key = match[1] as keyof typeof languageMap;
    const langCode = languageMap[key] || "en";
    console.log(`🌍 Detectado: ${match[1]}, cambiando idioma a: ${langCode}`);

    changeLanguage(langCode);
  }
}
