"use client";

import Link from "next/link";
import Deals from "./Deals";
import Benefits from "./Benefits";
import Reviews from "./Reviews";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import { Phone } from "./icons";
import { deals, airlines, airlineFares, stats, footerColumns, posts, slugify } from "../lib/data";
import { useLanguage } from "./LanguageProvider";

const fareCards = deals.map((d, i) => ({ ...d, airline: airlines[i % airlines.length] }));

export default function BusinessClassContent() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy to-navy-800" />
        <div className="absolute -left-32 top-[-20%] h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative z-10 grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div className="text-white">
            <p className="eyebrow mb-3">{t("50–77% Off Discounted Business Class")}</p>
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              {t("Cheap Business & First Class Flights")}
            </h1>
            <p className="mt-4 max-w-lg text-white/70">
              {t("Discounted premium fares from the USA to Europe, Asia, the Middle East and beyond — the lowest business class prices with top airlines' offers and deals.")}
            </p>
            <div className="mt-7 flex flex-wrap items-end gap-5">
              <span className="rounded-md bg-gold px-3 py-1.5 text-sm font-bold text-navy">
                {t("This Month's Best Deal")}
              </span>
              <span className="flex items-end gap-2">
                <span className="text-sm text-white/50 line-through">$4,963</span>
                <span className="font-serif text-4xl font-bold">
                  $1,985<span className="text-gold">*</span>
                </span>
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-gold">{s.value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/55">{t(s.label)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote CTA card */}
          <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink/45">
              {t("Want to save more?")}
            </p>
            <h2 className="mt-1 text-center font-serif text-2xl font-bold text-navy">
              {t("Get the Best Unpublished Fares")}
            </h2>
            <p className="mt-2 text-center text-sm text-ink/60">
              {t("Call us toll-free or request an offer and save up to $100 extra.")}
            </p>
            <a href="tel:+18555550199" className="mt-5 flex items-center justify-center gap-2 font-serif text-2xl font-bold text-navy">
              <Phone className="h-5 w-5 text-gold" /> 855-555-0199
            </a>
            <a href="#quote" className="btn-gold mt-4 w-full py-3.5 text-base">{t("Get Free Quotes")}</a>
            <p className="mt-3 text-center text-[11px] text-ink/45">
              {t("No spam — only exclusive deals. No purchase necessary.")}
            </p>
          </div>
        </div>
      </section>

      {/* Airline fare cards */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <h2 className="section-title mx-auto max-w-3xl text-center">
            {t("Request a quote and get up to 60% discount on flights")}
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fareCards.map((d) => (
              <div key={d.city} className="rounded-xl border border-navy/10 bg-white p-5 transition hover:shadow-card">
                <p className="text-xs font-bold uppercase tracking-wider text-gold">{d.airline}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <h3 className="font-serif text-lg font-bold text-navy">{d.city}</h3>
                  <span className="flex items-end gap-1.5">
                    <span className="text-xs text-ink/40 line-through">${d.old.toLocaleString()}</span>
                    <span className="font-bold text-navy">${d.from.toLocaleString()}*</span>
                  </span>
                </div>
                <a href="#quote" className="mt-4 block rounded-md bg-navy py-2.5 text-center text-sm font-semibold text-white transition hover:bg-gold hover:text-navy">
                  {t("Request Discount Fare")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secure cheapest + airline features table */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x max-w-5xl">
          <div className="text-center">
            <h2 className="section-title">{t("Secure the Cheapest Business Class Flight")}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-ink/65">
              {t("Compare fares from top airlines like Emirates, Qatar, Singapore and Cathay Pacific across major global routes such as JFK to London or LAX to Tokyo — with privately negotiated discounts of up to 77%.")}
            </p>
          </div>
          <h3 className="mt-12 font-serif text-xl font-bold text-navy">
            {t("Popular airlines' approximate business class ticket price")}
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-navy/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">{t("Airline")}</th>
                  <th className="px-5 py-3 font-semibold">{t("Unique Features")}</th>
                  <th className="px-5 py-3 font-semibold">{t("1-way*")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {airlineFares.map((a) => (
                  <tr key={a.airline} className="hover:bg-mist">
                    <td className="px-5 py-3 font-medium text-navy">{a.airline}</td>
                    <td className="px-5 py-3 text-ink/70">{t(a.feature)}</td>
                    <td className="px-5 py-3 font-semibold text-navy">${a.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Deals />

      {/* Directory: business class to cities & airlines */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t("Where We Fly")}</p>
            <h2 className="section-title">{t("Business Class Flights by City & Airline")}</h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {Object.entries(footerColumns).map(([title, items]) => {
              const isAirline = title === "Top Airlines";
              return (
                <div key={title}>
                  <h3 className="font-serif text-lg font-bold text-navy">{t(title)}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {items.map((item) => (
                      <li key={item}>
                        <Link
                          href={isAirline ? "#quote" : `/destinations/${slugify(item)}`}
                          className="text-sm text-ink/65 transition hover:text-gold"
                        >
                          {isAirline ? item : `${item} ${t("Business Class Flights")}`}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Benefits />
      <Reviews />
      <Faq />

      {/* Travel trends / blog */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t("Travel Trends")}</p>
            <h2 className="section-title">{t("From the AeroLux Blog")}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className={`h-36 bg-gradient-to-br ${p.gradient}`} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">{t(p.category)}</p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-navy">{t(p.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(p.excerpt)}</p>
                  <p className="mt-3 text-xs text-ink/45">{p.author} · {p.readMins} {t("min read")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
