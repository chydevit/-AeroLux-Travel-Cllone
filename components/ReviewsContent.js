"use client";

import Link from "next/link";
import ReviewForm from "./ReviewForm";
import Newsletter from "./Newsletter";
import { reviews } from "../lib/data";
import { Star, Chevron, Plane } from "./icons";
import { useLanguage } from "./LanguageProvider";

const dist = [
  { stars: 5, pct: 85.1 },
  { stars: 4, pct: 10.5 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 0.5 },
  { stars: 1, pct: 0.9 },
];

const sources = [
  { name: "Verified Reviews", score: "4.8", count: "27,410" },
  { name: "Accredited Business", score: "4.7", count: "943" },
  { name: "Search Reviews", score: "4.6", count: "867" },
  { name: "Community Reviews", score: "4.8", count: "439" },
  { name: "Consumer Reviews", score: "4.8", count: "3,015" },
];

const videos = [
  { title: "Cheaper Business Class?!", gradient: "from-[#1E417E] to-[#0A1A33]" },
  { title: "Tried AeroLux… Here's the Difference", gradient: "from-[#6D4D8B] to-[#241433]" },
  { title: "My First Long-Haul in a Suite", gradient: "from-[#0E5C63] to-[#06222A]" },
];

function Stars({ n = 5 }) {
  return (
    <span className="flex gap-0.5 text-gold">
      {Array.from({ length: n }).map((_, i) => <Star key={i} className="h-4 w-4" />)}
    </span>
  );
}

export default function ReviewsContent() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero with rating summary */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy to-navy-800" />
        <div className="container-x relative z-10 py-10 sm:py-14">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-gold">{t("Home")}</Link> <span className="px-1">›</span>
            <span className="text-white/90">{t("Reviews")}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              <h1 className="font-serif text-4xl font-bold sm:text-5xl">{t("AeroLux Travel Reviews")}</h1>
              <p className="mt-5 max-w-md text-white/70">
                {t("Discover genuine AeroLux Travel reviews and customer testimonials. Read real experiences from travelers who trust us for premium flights, and see why we're a legitimate choice for luxury travel planning.")}
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8">
              <div className="flex justify-center"><Stars /></div>
              <h2 className="mt-3 text-center font-serif text-2xl font-bold text-white">{t("AeroLux Travel Rating 4.8/5")}</h2>
              <p className="mt-1 text-center text-sm text-white/60">{t("Based on 146,452 reviews. 95% of customers recommend AeroLux Travel")}</p>
              <div className="mt-6 space-y-2.5">
                {dist.map((d) => (
                  <div key={d.stars} className="flex items-center gap-3">
                    <span className="w-12 text-right text-xs text-white/70">{d.pct}%</span>
                    <span className="flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={i < d.stars ? "h-3.5 w-3.5 text-gold" : "h-3.5 w-3.5 text-white/25"} />
                      ))}
                    </span>
                    <span className="relative h-px flex-1 bg-white/20">
                      <span className="absolute left-0 top-0 h-full bg-gold" style={{ width: `${d.pct}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating sources */}
      <section className="bg-white py-12">
        <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {sources.map((s) => (
            <div key={s.name} className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Star className="h-5 w-5 text-gold" />
                <span className="font-serif text-xl font-bold text-navy">{s.score}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-navy">{t(s.name)}</p>
              <p className="text-xs text-ink/50">{t("Based on more than")} {s.count} {t("reviews")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video reviews */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <h2 className="section-title">{t("Travel Video Reviews")}</h2>
          <p className="mt-4 max-w-2xl text-ink/65">
            {t("Explore the world through the eyes of fellow travelers. Immerse yourself in authentic firsthand accounts — helpful tips and memorable moments that go beyond traditional reviews.")}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {videos.map((v) => (
              <button key={v.title} className={`group relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br ${v.gradient} text-left`}>
                <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)]" />
                <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy transition group-hover:scale-110">
                  <Plane className="h-6 w-6" />
                </span>
                <span className="absolute bottom-4 left-4 right-4 font-serif text-lg font-bold text-white">{t(v.title)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service reviews grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <h2 className="section-title">{t("Service Reviews")}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-xl bg-mist p-5">
                <div className="flex items-center justify-between">
                  <figcaption className="font-bold uppercase tracking-wide text-navy">{r.name}</figcaption>
                  <Stars />
                </div>
                <p className="mt-1 text-xs text-ink/45">{r.route}</p>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">{t(r.text)}</blockquote>
                <p className="mt-4 text-xs text-ink/40">05/27/2026</p>
              </figure>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button className="grid h-9 w-9 place-items-center rounded border border-navy/15 text-ink/40" aria-label="Previous" disabled>
              <Chevron className="h-4 w-4 rotate-90" />
            </button>
            {["1", "2", "3", "4", "…", "12"].map((p, i) => (
              <button
                key={i}
                className={`grid h-9 min-w-9 place-items-center rounded px-2 text-sm font-semibold ${i === 0 ? "bg-navy text-white" : "text-ink/60 hover:text-navy"}`}
              >
                {p}
              </button>
            ))}
            <button className="grid h-9 w-9 place-items-center rounded border border-navy/15 text-navy hover:border-gold hover:text-gold" aria-label="Next">
              <Chevron className="h-4 w-4 -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      <ReviewForm />
      <Newsletter />
    </>
  );
}
