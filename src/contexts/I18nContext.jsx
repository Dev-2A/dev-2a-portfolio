import { createContext, useContext, useState, useCallback } from "react";
import translations from "../data/translations";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("locale") || "ko";
  });

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let result = translations[locale];
      for (const k of keys) {
        result = result?.[k];
      }
      return result || key;
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
