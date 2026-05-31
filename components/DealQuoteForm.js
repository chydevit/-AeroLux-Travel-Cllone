"use client";

import { useState } from "react";
import { cabins } from "../lib/data";
import { Plane, Check } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function DealQuoteForm({ city }) {
  const { t } = useLanguage();
  const [rt, setRt] = useState(true);
  const [done, setDone] = useState(false);
  const input =
    "w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lift">
        <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-gold text-navy">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy">{t("Thank you!")}</h3>
        <p className="mx-auto mt-2 max-w-xs text-sm text-ink/65">
          {t("A travel manager will call you shortly with the best fares to")} {city}.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-lift sm:p-6">
      <div className="mb-4 rounded-xl bg-mist p-4 text-center">
        <p className="text-sm font-semibold text-navy">{t("Call to Learn More or Book")}</p>
        <a href="tel:+18555550199" className="font-serif text-2xl font-bold text-navy">855-555-0199</a>
        <p className="mt-1 text-xs text-ink/55">{t("or submit a request below")}</p>
      </div>

      <div className="mb-3 flex gap-1 rounded-full bg-mist p-1 text-xs font-semibold">
        <button type="button" onClick={() => setRt(true)} className={`flex-1 rounded-full py-1.5 ${rt ? "bg-navy text-white" : "text-ink/60"}`}>{t("Round-Trip")}</button>
        <button type="button" onClick={() => setRt(false)} className={`flex-1 rounded-full py-1.5 ${!rt ? "bg-navy text-white" : "text-ink/60"}`}>{t("One-Way")}</button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input className={input} placeholder={t("From*")} required />
          <input className={input} placeholder={t("To*")} defaultValue={city} required />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input type="date" className={input} aria-label={t("Depart date")} />
          <input type="date" className={input} aria-label={t("Return date")} disabled={!rt} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input className={input} placeholder={t("Name*")} required />
          <select className={input} aria-label={t("Cabin")} defaultValue={cabins[0]}>
            {cabins.map((c) => <option key={c} value={c}>{t(c)}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input type="tel" className={input} placeholder={t("Phone*")} required />
          <input type="email" className={input} placeholder={t("Email*")} required />
        </div>
        <button type="submit" className="btn-gold w-full py-3 text-base">
          <Plane className="h-5 w-5" /> {t("Get Free Quotes")}
        </button>
        <p className="text-[11px] leading-relaxed text-ink/45">
          {t("No purchase necessary. By submitting you agree to be contacted about travel options. We respect your privacy.")}
        </p>
      </form>
    </div>
  );
}
