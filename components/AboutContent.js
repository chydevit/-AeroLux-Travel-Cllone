"use client";

import PageHero from "./PageHero";
import { stats, milestones, awards, accreditations, team } from "../lib/data";
import { Award, Shield } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function AboutContent() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow="About AeroLux Travel"
        title="Expert Premium Travel, Made Personal"
        subtitle="For over a decade we've helped travelers fly business and first class for less — with privately negotiated fares and a dedicated expert on every trip."
      />

      {/* Intro + stats */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">{t("Who We Are")}</p>
            <h2 className="section-title">{t("Comfort You Can Afford")}</h2>
            <p className="mt-5 text-ink/70">
              {t("AeroLux Travel is an official airline retailer offering personalised, one-on-one service and exclusive deals on business and first class flights. With privately negotiated rates from 70+ major carriers, our dedicated travel managers craft itineraries around your preferences.")}
            </p>
            <p className="mt-4 text-ink/65">
              {t("Unlike online platforms, we put you in direct contact with a live expert who does the legwork — unlocking fares reserved for offline sale and standing by 24/7 from the first quote until you're safely home.")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-navy/10 bg-mist p-6 text-center shadow-card">
                <div className="font-serif text-3xl font-bold text-navy sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-ink/60">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story timeline */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="eyebrow mb-3">{t("Our Story")}</p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">{t("A Decade of Growth")}</h2>
          </div>
          <ol className="mx-auto mt-12 max-w-3xl space-y-6">
            {milestones.map((m) => (
              <li key={m.year} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 pl-8">
                <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-1 rounded-full bg-gradient-to-b from-gold to-gold-soft" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold">{m.year}</span>
                <h3 className="mt-1 font-serif text-xl font-bold text-white">{t(m.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{t(m.text)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t("Recognition")}</p>
            <h2 className="section-title">{t("Awards & Honors")}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-navy/10 bg-mist p-6">
                <Award className="h-9 w-9 shrink-0 text-gold" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy">{t(a.title)}</h3>
                  <p className="mt-1 text-sm text-ink/60">{a.org} · {a.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t("Trust & Credibility")}</p>
            <h2 className="section-title">{t("Accreditations")}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {accreditations.map((a) => (
              <div key={a.name} className="rounded-2xl bg-white p-7 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                  <Shield className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-navy">{t(a.name)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(a.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t("Meet the Experts")}</p>
            <h2 className="section-title">{t("Your Travel Managers")}</h2>
            <p className="mt-4 text-ink/65">
              {t("A team of 500+ specialists, each with a passion for crafting the perfect journey.")}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((mem) => (
              <div key={mem.name} className="text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-navy font-serif text-3xl font-bold text-gold">
                  {mem.name.charAt(0)}
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold text-navy">{mem.name}</h3>
                <p className="text-xs uppercase tracking-wider text-ink/55">{t(mem.role)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#quote" className="btn-gold">{t("Work With Our Team")}</a>
          </div>
        </div>
      </section>
    </>
  );
}
