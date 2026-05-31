"use client";

import { benefits } from "../lib/data";
import { Headset, Tag, Shield, Users, Award, Globe } from "./icons";
import { useLanguage } from "./LanguageProvider";

const ICONS = { Headset, Tag, Shield, Users, Award, Globe };

export default function Benefits() {
  const { t } = useLanguage();
  return (
    <section className="bg-mist py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">{t("Why Book With Us")}</p>
          <h2 className="section-title">{t("The AeroLux Advantage")}</h2>
          <p className="mt-4 text-ink/65">
            {t("Every booking comes backed by expertise, exclusive pricing and genuine human support — start to finish.")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = ICONS[b.icon];
            return (
              <div
                key={b.title}
                className="group rounded-2xl bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">{t(b.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(b.body)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
