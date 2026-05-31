"use client";

import { useLanguage } from "./LanguageProvider";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy to-navy-800" />
        <div className="absolute -left-32 top-[-20%] h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-30%] h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
      </div>
      <div className="container-x relative z-10 py-14 text-center text-white sm:py-20">
        {eyebrow && <p className="eyebrow mb-3">{t(eyebrow)}</p>}
        <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          {t(title)}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">{t(subtitle)}</p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
