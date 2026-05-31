"use client";

import { reviews } from "../lib/data";
import { Star } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function Reviews() {
  const { t } = useLanguage();
  return (
    <section id="reviews" className="bg-navy py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center text-white">
          <div className="mb-3 flex items-center justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("Rated Excellent by 114,000+ Travelers")}
          </h2>
          <p className="mt-4 text-white/65">
            {t("Real journeys, planned by real people. Here is what our clients say about flying premium for less.")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.07]"
            >
              <div className="mb-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-white/80">
                “{t(r.text)}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/20 font-serif font-bold text-gold">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{r.name}</span>
                  <span className="block text-xs text-white/50">{r.route}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
