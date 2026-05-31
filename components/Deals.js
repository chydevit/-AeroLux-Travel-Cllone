"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { deals, slugify } from "../lib/data";
import { Chevron } from "./icons";
import CityArt from "./CityArt";
import { useLanguage } from "./LanguageProvider";

const badges = ["Biz Class", "2-for-1", "30% Off", "1st Class"];

export default function Deals() {
  const { t } = useLanguage();
  const [pv, setPv] = useState(4);
  const [i, setI] = useState(0);

  useEffect(() => {
    const f = () => setPv(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  const maxI = Math.max(0, deals.length - pv);
  const idx = Math.min(i, maxI);

  return (
    <section id="deals" className="bg-mist py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">{t("Best-Selling Deals")}</p>
          <h2 className="section-title">{t("Business Class Fares Our Clients Love")}</h2>
          <p className="mt-4 text-ink/65">
            {t("Save 30–70% off published fares on hand-picked premium routes. Prices are per person, round-trip, and updated weekly.")}
          </p>
        </div>

        <div className="relative mt-12">
          <button
            onClick={() => setI(Math.max(0, idx - 1))}
            disabled={idx === 0}
            aria-label="Previous"
            className="absolute -left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-card transition hover:text-gold disabled:opacity-30 lg:-left-5"
          >
            <Chevron className="h-5 w-5 rotate-90" />
          </button>
          <button
            onClick={() => setI(Math.min(maxI, idx + 1))}
            disabled={idx === maxI}
            aria-label="Next"
            className="absolute -right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-card transition hover:text-gold disabled:opacity-30 lg:-right-5"
          >
            <Chevron className="h-5 w-5 -rotate-90" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * (100 / pv)}%)` }}
            >
              {deals.map((d, k) => (
                <div key={d.city} className="shrink-0 px-3" style={{ width: `${100 / pv}%` }}>
                  <article className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
                    <Link href={`/destinations/${slugify(d.city)}`} className={`relative block h-44 bg-gradient-to-br ${d.gradient}`}>
                      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)]" />
                      <CityArt city={d.city} className="pointer-events-none absolute bottom-0 right-1 h-28 w-44 text-white/20" />
                      <span className="absolute left-3 top-3 grid h-14 w-14 place-items-center rounded-full bg-navy text-center text-[10px] font-bold uppercase leading-tight text-gold ring-2 ring-white/30">
                        {t(badges[k % badges.length])}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-serif text-2xl font-bold text-white">{d.city}</h3>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/70">{d.region}</p>
                      </div>
                    </Link>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-navy">{t("Business Class to")} {d.city}</h4>
                      <div className="my-2 h-0.5 w-10 bg-red-500" />
                      <span className="font-serif text-2xl font-bold text-navy">
                        ${d.from.toLocaleString()}
                        <span className="align-top text-sm">*</span>
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxI + 1 }).map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to slide ${k + 1}`}
                className={`h-2.5 rounded-full transition-all ${k === idx ? "w-6 bg-navy" : "w-2.5 bg-navy/25"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/offers" className="btn-outline-gold border-navy/20 text-navy hover:bg-navy hover:text-white">
            {t("View All Deals")}
          </a>
        </div>
      </div>
    </section>
  );
}
