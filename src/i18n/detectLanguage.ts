import { changeLanguage } from "./set-up";

export function detectAndChangeLanguage() {
  const url = new URL(window.location.href);
  const hostname = url.hostname;
  const match = hostname.match(/^(resume|cv|lebenslauf)(\..*)?$/);
  if (match) {
    const languageMap = { resume: "en", cv: "es", lebenslauf: "de" } as const;
    const key = match[1] as keyof typeof languageMap;
    const langCode = languageMap[key] || "en";
    changeLanguage(langCode);
  }
}
