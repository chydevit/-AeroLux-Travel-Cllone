"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../lib/i18n";

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ENG");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const change = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  const t = (key) => translations[lang]?.[key] ?? key;

  return <LangContext.Provider value={{ lang, setLang: change, t }}>{children}</LangContext.Provider>;
}

export const useLanguage = () =>
  useContext(LangContext) ?? { lang: "ENG", setLang: () => {}, t: (k) => k };
