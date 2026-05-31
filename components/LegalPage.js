"use client";

import PageHero from "./PageHero";
import { useLanguage } from "./LanguageProvider";

export default function LegalPage({ title, updated, intro, sections }) {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={updated ? `${t("Last updated:")} ${updated}` : undefined} />
      <section className="bg-white py-16">
        <div className="container-x max-w-3xl">
          {intro && <p className="text-ink/70">{t(intro)}</p>}
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-serif text-xl font-bold text-navy">{t(s.h)}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-2 text-sm leading-relaxed text-ink/70">{t(para)}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
