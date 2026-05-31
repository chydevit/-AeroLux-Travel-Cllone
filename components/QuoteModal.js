"use client";

import { useEffect, useState } from "react";
import { cabins } from "../lib/data";
import { Close, Plane, Check } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function QuoteModal() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#quote");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => {
    if (window.location.hash === "#quote") history.back();
    else setOpen(false);
    setTimeout(() => setDone(false), 300);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && open && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const input =
    "w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy-900/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-lift sm:p-8">
        <button onClick={close} aria-label={t("Close")} className="absolute right-4 top-4 text-ink/40 hover:text-navy">
          <Close className="h-6 w-6" />
        </button>

        {done ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gold text-navy">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy">{t("Thank you!")}</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink/65">
              {t("A dedicated travel manager will reach out shortly with itinerary options that match your request. Expect to hear from us within minutes.")}
            </p>
            <button onClick={close} className="btn-gold mt-6">{t("Close")}</button>
          </div>
        ) : (
          <>
            <p className="eyebrow mb-1">{t("Free & No Obligation")}</p>
            <h3 className="font-serif text-2xl font-bold text-navy">{t("Request a Free Quote")}</h3>
            <p className="mt-1 text-sm text-ink/60">
              {t("Tell us where you want to go — we'll find the best premium fare.")}
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input className={input} placeholder={t("From*")} required />
                <input className={input} placeholder={t("To*")} required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="date" className={input} aria-label={t("Departure date")} />
                <select className={input} aria-label={t("Cabin")} defaultValue={cabins[0]}>
                  {cabins.map((c) => <option key={c} value={c}>{t(c)}</option>)}
                </select>
              </div>
              <input className={input} placeholder={t("Full name*")} required />
              <div className="grid grid-cols-2 gap-3">
                <input type="tel" className={input} placeholder={t("Phone*")} required />
                <input type="email" className={input} placeholder={t("Email*")} required />
              </div>
              <button type="submit" className="btn-gold w-full py-3 text-base">
                <Plane className="h-5 w-5" /> {t("Get Free Quotes")}
              </button>
              <p className="text-[11px] leading-relaxed text-ink/45">
                {t("By submitting this form you agree to be contacted about travel options by phone, text and email. No purchase necessary. Your privacy is respected.")}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
