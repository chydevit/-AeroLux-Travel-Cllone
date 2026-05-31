"use client";

import Link from "next/link";
import { footerColumns, slugify } from "../lib/data";
import { Phone } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="footer" className="bg-navy-900 text-white/70">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="AeroLux Travel home">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gold">
                <span className="font-serif text-lg font-bold text-navy">A</span>
              </span>
              <span className="font-serif text-xl font-bold text-white">
                Aero<span className="text-gold">Lux</span> Travel
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {t("Privately negotiated business and first class airfares, planned by a dedicated expert — not a booking engine.")}
            </p>
            <a
              href="tel:+18555550199"
              className="mt-5 inline-flex items-center gap-2 text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                <Phone className="h-4 w-4" />
              </span>
              <span className="text-lg font-bold">855-555-0199</span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([title, links]) => {
            const isAirline = title === "Top Airlines";
            return (
              <div key={title}>
                <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold">
                  {t(title)}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <Link
                        href={isAirline ? "#quote" : `/destinations/${slugify(l)}`}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Secondary links + payments */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {[
              ["About Us", "/about"],
              ["How to Book", "/how-to-book"],
              ["Reviews", "/reviews"],
              ["Business Class", "/business-class"],
              ["Gift Vouchers", "/gift-vouchers"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="text-white/60 hover:text-gold">{t(label)}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-white/45">{t("We accept")}</span>
            {["VISA", "Mastercard", "AMEX", "Discover"].map((p) => (
              <span key={p} className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-navy">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} AeroLux Travel. {t("Original demo project — not affiliated with any real travel brand; all fares and reviews are fictional.")}</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">{t("Privacy Policy")}</Link>
            <Link href="/terms" className="hover:text-white">{t("Terms of Use")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
