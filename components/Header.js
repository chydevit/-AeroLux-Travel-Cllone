"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, contact } from "../lib/data";
import { Phone, Chevron, Menu, Close } from "./icons";

export default function Header() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("ENG");
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50">
      {/* Promo banner */}
      {bannerOpen && (
        <div className="bg-navy text-gold-soft">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-3 px-4 py-2 text-center text-sm sm:px-6">
            <span className="hidden h-2 w-2 animate-pulse rounded-full bg-gold sm:inline-block" />
            <p className="font-medium">
              Unlock exclusive savings on your next premium journey —{" "}
              <span className="font-semibold text-white">limited weekly fares</span>
            </p>
            <a href="#quote" className="rounded bg-gold px-3 py-1 text-xs font-bold text-navy hover:brightness-105">
              SAVE NOW
            </a>
            <button
              aria-label="Dismiss"
              onClick={() => setBannerOpen(false)}
              className="absolute right-4 text-gold-soft/70 hover:text-white sm:static"
            >
              <Close className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main nav */}
      <div className="border-b border-navy/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="AeroLux Travel home">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-navy">
              <span className="font-serif text-lg font-bold text-gold">A</span>
            </span>
            <span className="leading-none">
              <span className="block font-serif text-xl font-bold text-navy">
                Aero<span className="text-gold">Lux</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/50">
                Travel
              </span>
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 rounded px-2 py-1 text-sm font-medium text-ink/70 hover:text-navy"
              >
                {lang} <Chevron className="h-3.5 w-3.5" />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-1 w-24 overflow-hidden rounded-md border border-navy/10 bg-white shadow-card">
                  {["ENG", "ESP", "FRA", "KHM"].map((o) => (
                    <li key={o}>
                      <button
                        onClick={() => { setLang(o); setLangOpen(false); }}
                        className="block w-full px-3 py-2 text-left text-sm text-ink/80 hover:bg-mist"
                      >
                        {o}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Phone */}
            <a href="tel:+18555550199" className="hidden items-center gap-2 md:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink/45">
                  US / CA · 24/7
                </span>
                <span className="block whitespace-nowrap text-sm font-bold text-navy">855-555-0199</span>
              </span>
            </a>

            <a href="#quote" className="btn-gold hidden h-10 px-4 py-0 sm:inline-flex">
              Get a Free Quote
            </a>

            {/* Mobile toggle */}
            <button
              className="text-navy lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Secondary dark nav bar */}
        <nav className="hidden bg-navy-800 lg:block">
          <div className="mx-auto flex h-12 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6">
            <ul className="flex items-center">
              {navLinks.map((l) => {
                if (l.label === "My Trips")
                  return (
                    <li key={l.label} className="ml-2">
                      <Link
                        href={l.href}
                        className="whitespace-nowrap rounded border border-gold px-3 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition hover:bg-gold hover:text-navy"
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                const active = isActive(l.href);
                return (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`flex h-12 items-center whitespace-nowrap px-3 text-[13px] font-semibold uppercase tracking-wide transition ${
                        active
                          ? "bg-white/10 text-gold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href={contact.phoneLink}
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-gold-soft hover:text-white xl:flex"
            >
              <Phone className="h-4 w-4" /> ¡Ahora hablamos Español!
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-navy/10 bg-white lg:hidden">
            <nav className="container-x flex flex-col py-3">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-navy/5 py-3 text-sm font-medium ${pathname === l.href ? "text-gold" : "text-ink/80"}`}
                >
                  {l.label}
                </Link>
              ))}
              <a href="#quote" className="btn-gold mt-3" onClick={() => setMenuOpen(false)}>
                Get a Free Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
