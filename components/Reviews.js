"use client";

import { useState, useEffect } from "react";
import { reviews } from "../lib/data";
import { Star, Shield, Users, Chevron } from "./icons";

const trust = [
  { icon: Shield, label: "A+ Accredited Business" },
  { icon: Users, label: "Verified Client Reviews" },
  { icon: Star, label: "114K+ Positive Reviews" },
];

export default function Reviews() {
  const [pv, setPv] = useState(3);
  const [i, setI] = useState(0);

  useEffect(() => {
    const f = () => setPv(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  const maxI = Math.max(0, reviews.length - pv);
  const idx = Math.min(i, maxI);

  return (
    <section id="reviews" className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="grid gap-6 border-b border-navy/10 pb-10 sm:grid-cols-3">
          {trust.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.label} className="flex items-center justify-center gap-3 text-ink/70">
                <Icon className="h-7 w-7 text-gold" />
                <span className="text-sm font-semibold uppercase tracking-wide">{t.label}</span>
              </div>
            );
          })}
        </div>

        <div className="relative mt-10">
          <button
            onClick={() => setI(Math.max(0, idx - 1))}
            disabled={idx === 0}
            aria-label="Previous"
            className="absolute -left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-mist text-navy shadow-card transition hover:text-gold disabled:opacity-30 lg:-left-5"
          >
            <Chevron className="h-5 w-5 rotate-90" />
          </button>
          <button
            onClick={() => setI(Math.min(maxI, idx + 1))}
            disabled={idx === maxI}
            aria-label="Next"
            className="absolute -right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-mist text-navy shadow-card transition hover:text-gold disabled:opacity-30 lg:-right-5"
          >
            <Chevron className="h-5 w-5 -rotate-90" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * (100 / pv)}%)` }}
            >
              {reviews.map((r) => (
                <div key={r.name} className="shrink-0 px-4" style={{ width: `${100 / pv}%` }}>
                  <figure className="h-full">
                    <div className="mb-2 flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4" />
                      ))}
                    </div>
                    <figcaption>
                      <span className="block text-sm font-bold uppercase tracking-wide text-navy">{r.name}</span>
                      <span className="block text-xs text-ink/50">{r.route} · Business Class</span>
                    </figcaption>
                    <blockquote className="mt-3 text-sm leading-relaxed text-ink/70">{r.text}</blockquote>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <a
            href="/reviews"
            className="rounded-md border-2 border-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-gold"
          >
            Show All
          </a>
          <div className="flex items-center gap-2">
            <span className="font-bold text-navy">Excellent</span>
            <span className="flex gap-0.5 text-[#1a9e6a]">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-5 w-5" />
              ))}
            </span>
            <span className="text-sm text-ink/60">27,410 verified reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
