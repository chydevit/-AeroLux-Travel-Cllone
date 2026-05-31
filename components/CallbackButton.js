"use client";

import { useState, useEffect } from "react";
import { ConciergeBell } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function CallbackButton() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#callback"
      className={`group fixed bottom-5 right-5 z-50 grid h-[104px] w-[104px] place-items-center rounded-full bg-[#1a9e6a] text-center text-white shadow-lift ring-[6px] ring-[#1a9e6a]/25 transition-all duration-300 hover:brightness-105 sm:h-28 sm:w-28 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-label={t("Request a free call back")}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#1a9e6a]/30" />
      <span className="relative flex flex-col items-center leading-none">
        <ConciergeBell className="mb-1.5 h-6 w-6 text-gold-soft" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-gold-soft">{t("Online 24/7")}</span>
        <span className="mt-1 text-[13px] font-extrabold uppercase">{t("Free Call Back")}</span>
      </span>
    </a>
  );
}
