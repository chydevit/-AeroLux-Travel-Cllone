"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email || phone) setDone(true);
  };

  return (
    <section className="bg-navy-900 py-16">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 shadow-lift ring-1 ring-white/10 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-white">
              <p className="eyebrow mb-3">{t("Never Miss a Fare")}</p>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                {t("Get Price-Drop Alerts & Save up to 77%")}
              </h2>
              <p className="mt-4 max-w-md text-white/65">
                {t("Join our private list and be first to receive exclusive business and first class offers — many available offline only.")}
              </p>
            </div>

            {done ? (
              <div className="rounded-2xl bg-white/10 p-8 text-center text-white ring-1 ring-white/15">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold text-navy">
                  ✓
                </div>
                <h3 className="font-serif text-xl font-bold">{t("You're on the list!")}</h3>
                <p className="mt-2 text-sm text-white/65">
                  {t("Watch your inbox — exclusive fares are on the way.")}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-2xl bg-white p-5 shadow-card">
                <div className="flex flex-col gap-3">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("Phone number")}
                    className="w-full rounded-md border border-navy/15 px-4 py-3 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("E-mail address")}
                    className="w-full rounded-md border border-navy/15 px-4 py-3 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                  <button type="submit" className="btn-gold py-3.5 text-base">
                    {t("Subscribe")}
                  </button>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-ink/45">
                  {t("By subscribing you agree to receive promotional messages. Your data is stored securely and you can unsubscribe at any time. 100% privacy guaranteed.")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
