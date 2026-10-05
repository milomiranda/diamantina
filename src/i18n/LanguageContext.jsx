import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const STORAGE_KEY = "diamantina-lang";
const LanguageContext = createContext(null);

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

// Reads the device/browser's own language setting (e.g. "nl-NL", "es-MX",
// "en-US") and maps it to one of our three supported codes. Anything we
// don't specifically recognize falls back to EN.
function detectDeviceLanguage() {
  if (typeof navigator === "undefined") return "EN";
  const raw = (navigator.language || navigator.languages?.[0] || "en").toLowerCase();
  if (raw.startsWith("nl")) return "NL";
  if (raw.startsWith("es")) return "ES";
  return "EN";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "EN";
    // A language the person picked themselves (via the NL/EN/ES switcher)
    // always wins on return visits. Only first-time visitors get the
    // device's own language, automatically, with no click required.
    return localStorage.getItem(STORAGE_KEY) || detectDeviceLanguage();
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
