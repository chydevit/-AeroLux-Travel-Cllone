"use client";

import { useEffect, useState } from "react";
import { contact } from "../lib/data";
import { Close, Phone, ConciergeBell } from "./icons";
import { useLanguage } from "./LanguageProvider";

export default function CallbackModal() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#callback");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => {
    if (window.location.hash === "#callback") history.back();
    else setOpen(false);
    setTimeout(() => setDone(false), 300);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && open && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy-900/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative my-auto grid w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lift sm:grid-cols-2">
        <button onClick={close} aria-label={t("Close")} className="absolute right-4 top-4 z-10 text-ink/40 hover:text-navy">
          <Close className="h-6 w-6" />
        </button>

        {/* Left visual panel */}
        <div className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900 p-8 text-white sm:flex">
          <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-gold">
            <ConciergeBell className="h-8 w-8" />
          </span>
          <p className="mt-6 font-serif text-3xl font-bold leading-tight">{t("We're here to help, 24/7")}</p>
          <p className="mt-3 text-sm text-white/65">
            {t("Speak with a dedicated travel expert and get free advice in minutes — no obligation.")}
          </p>
        </div>

        {/* Right panel */}
        <div className="p-6 text-center sm:p-8">
          {done ? (
            <div className="py-10">
              <h3 className="font-serif text-2xl font-bold text-navy">{t("Thank you!")}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-ink/65">
                {t("A travel expert will call you back within the next few minutes.")}
              </p>
              <button onClick={close} className="btn-gold mt-6">{t("Close")}</button>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-bold text-navy">{t("Call to speak 24/7")}</h3>
              <a
                href={contact.phoneLink}
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#1a9e6a] py-3 text-lg font-bold text-white transition hover:brightness-105"
              >
                <Phone className="h-5 w-5" /> {contact.phone}
              </a>

              <div className="mt-5 flex items-center justify-center gap-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(contact.phoneLink)}`}
                  alt="Scan to call"
                  className="h-28 w-28"
                />
                <p className="text-left font-serif text-2xl font-bold leading-tight text-navy">
                  {t("SCAN")}<br />{t("TO CALL")}
                </p>
              </div>

              <div className="my-5 flex items-center gap-3 text-xs font-semibold text-ink/40">
                <span className="h-px flex-1 bg-navy/10" /> {t("OR")} <span className="h-px flex-1 bg-navy/10" />
              </div>

              <h4 className="font-serif text-xl font-bold text-navy">{t("Request a Free Callback")}</h4>
              <p className="mt-1 text-sm text-ink/60">
                {t("Get a call from a travel expert and free advice within minutes.")}
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-4 flex items-stretch gap-2">
                <div className="flex flex-1 items-center rounded-md border border-navy/15 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
                  <span className="flex items-center gap-1 border-r border-navy/10 px-2.5 text-sm text-ink/70">🇺🇸 +1</span>
                  <input
                    type="tel"
                    required
                    placeholder={t("Enter Phone")}
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-navy outline-none"
                  />
                </div>
                <button
                  type="submit"
                  aria-label={t("Request callback")}
                  className="grid w-12 shrink-0 place-items-center rounded-md bg-[#1a9e6a] text-white transition hover:brightness-105"
                >
                  <Phone className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-4 text-left text-[11px] leading-relaxed text-ink/45">
                {t("*One of our Travel Agents will call you back within the next few minutes. By submitting your phone number you agree to be contacted for travel information via automated phone and text messages. Your consent to receive such messages is not a condition of purchase.")}{" "}
                <span className="font-semibold text-ink/70">{t("No Spam & 100% Data Safety.")}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
