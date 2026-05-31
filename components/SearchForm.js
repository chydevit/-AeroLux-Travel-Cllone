"use client";

import { useState } from "react";
import { Plane, Swap, Calendar, Chevron, Users } from "./icons";
import { useLanguage } from "./LanguageProvider";

const TRIP_TYPES = ["Round-Trip", "One-Way", "Multi-City"];
const CABINS = ["Business Class", "First Class", "Premium Economy"];

function Field({ label, children }) {
  return (
    <div className="flex-1">
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink/45">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function SearchForm() {
  const { t } = useLanguage();
  const [trip, setTrip] = useState("Round-Trip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [paxOpen, setPaxOpen] = useState(false);
  const [pax, setPax] = useState(1);
  const [cabin, setCabin] = useState("Business Class");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const inputCls =
    "w-full rounded-md border border-navy/15 bg-white px-3 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form
      id="search"
      onSubmit={(e) => { e.preventDefault(); window.location.hash = "quote"; }}
      className="w-full rounded-2xl bg-white/95 p-4 shadow-lift backdrop-blur sm:p-6"
    >
      {/* Trip type tabs */}
      <div className="mb-4 inline-flex rounded-full bg-mist p-1">
        {TRIP_TYPES.map((tt) => (
          <button
            key={tt}
            type="button"
            onClick={() => setTrip(tt)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              trip === tt ? "bg-navy text-white shadow" : "text-ink/60 hover:text-navy"
            }`}
          >
            {t(tt)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        {/* From / To */}
        <div className="flex flex-1 items-end gap-2">
          <Field label={t("From")}>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder={t("City or airport")}
              className={inputCls}
            />
          </Field>
          <button
            type="button"
            onClick={swap}
            aria-label="Swap"
            className="mb-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-white"
          >
            <Swap className="h-4 w-4" />
          </button>
          <Field label={t("To")}>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder={t("City or airport")}
              className={inputCls}
            />
          </Field>
        </div>

        {/* Dates */}
        <Field label={t("Depart")}>
          <div className="relative">
            <input type="date" className={inputCls + " pr-9"} />
            <Calendar className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-ink/40" />
          </div>
        </Field>
        {trip === "Round-Trip" && (
          <Field label={t("Return")}>
            <div className="relative">
              <input type="date" className={inputCls + " pr-9"} />
              <Calendar className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-ink/40" />
            </div>
          </Field>
        )}

        {/* Passengers / Cabin */}
        <div className="relative flex-1">
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink/45">
            {t("Passengers / Cabin")}
          </label>
          <button
            type="button"
            onClick={() => setPaxOpen((v) => !v)}
            className={inputCls + " flex items-center justify-between text-left"}
          >
            <span className="flex items-center gap-2 truncate">
              <Users className="h-4 w-4 text-ink/40" />
              {pax} {t(pax > 1 ? "Passengers" : "Passenger")} · {t(cabin)}
            </span>
            <Chevron className="h-4 w-4 text-ink/40" />
          </button>
          {paxOpen && (
            <div className="absolute z-20 mt-2 w-full rounded-md border border-navy/10 bg-white p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-navy">{t("Passengers")}</span>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setPax((p) => Math.max(1, p - 1))} className="grid h-7 w-7 place-items-center rounded-full border border-navy/20 text-navy">−</button>
                  <span className="w-5 text-center text-sm font-semibold">{pax}</span>
                  <button type="button" onClick={() => setPax((p) => Math.min(9, p + 1))} className="grid h-7 w-7 place-items-center rounded-full border border-navy/20 text-navy">+</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {CABINS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCabin(c)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      cabin === c ? "bg-navy text-white" : "bg-mist text-ink/70 hover:text-navy"
                    }`}
                  >
                    {t(c)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-gold flex-1 py-3.5 text-base">
          <Plane className="h-5 w-5" /> {t("Search Flights")}
        </button>
        <a href="/how-to-book" className="btn-outline-gold flex-1 border-navy/15 py-3.5 text-navy hover:bg-navy hover:text-white">
          {t("How It Works")}
        </a>
      </div>
    </form>
  );
}
