"use client";

import { useState } from "react";
import Link from "next/link";
import DealCard from "../../components/DealCard";
import HowItWorks from "../../components/HowItWorks";
import Reviews from "../../components/Reviews";
import Newsletter from "../../components/Newsletter";
import { Check } from "../../components/icons";
import { destinationList, regions, airlines, slugify } from "../../lib/data";
import { useLanguage } from "../../components/LanguageProvider";

const TABS = ["All", ...regions.map((r) => r.name)];
const perks = [
  "Free eSIM with unlimited data",
  "$100 yearly credit for add-ons",
  "Up to 10% cashback",
  "Up to $100k medical protection",
];

export default function OffersPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState("All");
  const list = active === "All" ? destinationList : destinationList.filter((d) => d.region === active);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
          <source src="/offers-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy/70 to-navy-800/85" />
        <div className="absolute -left-32 top-[-20%] h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative z-10 flex justify-center py-20 sm:py-28">
          <div className="max-w-xl border-2 border-gold/60 bg-navy-900/30 px-8 py-12 text-center backdrop-blur-sm sm:px-14">
            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              {t("AeroLux Travel — Comfort You Can Afford")}
            </h1>
            <div className="mx-auto my-6 h-px w-16 bg-gold" />
            <p className="text-white/75">
              {t("Fly business & first class for less together with our experts: book with us & save 50–70%* off!")}
            </p>
            <a href="#deals" className="btn-gold mt-8">{t("View Offers")}</a>
          </div>
        </div>
      </section>

      {/* Exclusive Membership Program */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <h2 className="section-title text-center">{t("Exclusive Membership Program")}</h2>
          <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#6D3BF5] to-[#4F1FD6] p-8 text-white shadow-lift sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-white/80">AeroLux × Dreampass</p>
              <h3 className="mt-4 font-serif text-3xl font-bold">
                {t("Enjoy Exclusive")} <span className="text-[#D6F84F]">{t("Travel Benefits")}</span>
              </h3>
              <ul className="mt-6 space-y-3">
                {perks.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold">
                    <Check className="h-5 w-5 shrink-0 text-[#D6F84F]" /> {t(f)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">{t("Exclusive Member-Only Deals")}</p>
              <p className="mt-3 text-lg font-bold leading-relaxed text-navy">
                {t("Up to 10% cashback on every purchase + $100 future credit for popular add-ons + up to $500,000 emergency medical protection and other perks.")}
              </p>
              <div className="mt-5 h-1 w-16 rounded-full bg-gold" />
              <a href="#quote" className="btn-gold mt-7">{t("Become a Member")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Top International Destinations */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x text-center">
          <h2 className="section-title">{t("Our Top International Destinations")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/65">
            {t("Choose among our exclusive deals and pick the most appealing one — Europe, India, Asia, the Middle East and many more. Premium service for a fraction of the price.")}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {regions.map((r) => (
              <Link
                key={r.slug}
                href={`/destinations/${slugify(r.cities[0])}`}
                className={`grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br ${r.gradient} text-center text-white shadow-card transition hover:-translate-y-1 hover:shadow-lift`}
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wide">{r.name}</span>
                  <span className="block text-xs text-white/70">{t("from")}</span>
                  <span className="block font-serif text-lg font-bold">${r.from.toLocaleString()}*</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deals */}
      <section id="deals" className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="eyebrow mb-3">{t("Weekly Fare Sale")}</p>
            <h2 className="section-title">{t("Pick Your Exclusive Deal")}</h2>
          </div>
          <div className="no-scrollbar mb-10 flex justify-center gap-2 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === tab ? "bg-navy text-white shadow" : "bg-white text-ink/65 hover:text-navy"
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((d) => <DealCard key={d.slug} {...d} />)}
          </div>
          <p className="mt-10 text-center text-sm text-ink/55">
            {t("*Fares are per person, round-trip, from the US and subject to availability. Call for current pricing.")}
          </p>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x text-center">
          <h2 className="section-title">{t("Our Main Partner Airlines")}</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-serif text-lg font-bold text-ink/50">
            {airlines.map((a) => <span key={a}>{a}</span>)}
            <span className="font-sans text-sm font-medium text-ink/40">{t("and others…")}</span>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Reviews />
      <Newsletter />
    </>
  );
}
