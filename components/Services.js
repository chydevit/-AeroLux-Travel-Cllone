"use client";

import { services } from "../lib/data";
import { Check } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function Services() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">{t("What We Do")}</p>
          <h2 className="section-title">{t("AeroLux Travel Services")}</h2>
          <p className="mt-4 text-ink/65">
            {t("One dedicated expert, end to end — handling everything that turns a flight into a genuinely premium experience.")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-2xl border border-navy/10 bg-mist p-7 transition hover:border-gold/40 hover:shadow-card"
            >
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                  <Check className="h-6 w-6" />
                </span>
                <span className="mt-2 font-serif text-sm font-bold text-gold/70">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(s.body)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
