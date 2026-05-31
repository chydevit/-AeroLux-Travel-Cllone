"use client";

import SearchForm from "./SearchForm";
import { airlines } from "../lib/data";
import { useLanguage } from "./LanguageProvider";

const badges = ["Accredited Agency", "A+ Accredited Business", "Trustpilot Excellent", "Live Concierge 24/7"];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster=""
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Decorative gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy/75 to-navy-800/90" />
        <div className="absolute -left-40 top-[-10%] h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-[-15%] top-[10%] h-[520px] w-[520px] rounded-full bg-navy-600/40 blur-3xl" />
        {/* subtle flight-path arcs */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E2C275" stopOpacity="0" />
              <stop offset="50%" stopColor="#E2C275" stopOpacity="1" />
              <stop offset="100%" stopColor="#E2C275" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-50 380 Q 400 120 1500 300" fill="none" stroke="url(#arc)" strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M-50 460 Q 600 220 1500 420" fill="none" stroke="url(#arc)" strokeWidth="1.5" strokeDasharray="6 8" />
        </svg>
      </div>

      <div className="container-x relative z-10 pb-14 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center text-white animate-fadeInUp">
          <p className="eyebrow mb-3">{t("Official Premium Airline Retailer")}</p>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            {t("Fly Business & First Class")} <span className="text-gold">{t("for Less")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {t("Privately negotiated fares with 70+ world-class airlines, planned by a dedicated travel expert — not a booking engine.")}
          </p>
        </div>

        {/* Airline strip */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-80">
          {airlines.map((a) => (
            <span
              key={a}
              className="text-sm font-semibold uppercase tracking-wide text-white/55"
            >
              {a}
            </span>
          ))}
        </div>

        {/* Search form */}
        <div className="mx-auto mt-8 max-w-5xl animate-fadeInUp">
          <SearchForm />
        </div>

        {/* Savings line */}
        <p className="mt-6 text-center text-sm italic text-white/70">
          “Last month, AeroLux Travel saved its clients over{" "}
          <span className="font-semibold not-italic text-gold">$1,700,000</span>.”
        </p>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {badges.map((b) => (
            <span key={b} className="flex items-center gap-2 text-xs font-medium text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
