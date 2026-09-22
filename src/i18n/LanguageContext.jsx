import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const STORAGE_KEY = "diamantina-lang";
const LanguageContext = createContext(null);

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "EN";
    return localStorage.getItem(STORAGE_KEY) || "EN";
  });

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const setLang = (code) => {
    setLangState(code);
    localStorage.setItem(STORAGE_KEY, code);
  };

  // t("home.upcomingEvents") -> looks up translations[lang].home.upcomingEvents,
  // falling back to English if a key is ever missing in NL/ES.
  const t = (key) => {
    const value = getNested(translations[lang], key);
    if (value !== undefined) return value;
    return getNested(translations.EN, key) ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
