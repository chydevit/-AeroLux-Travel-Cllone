"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Close } from "../../components/icons";

export default function MyTripsPage() {
  const [tab, setTab] = useState("email");
  const [value, setValue] = useState("");
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (agree && value) setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-auto">
      {/* Sunset sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7c7c66] via-[#c08f4e] to-[#2e1f14]" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_72%_80%,rgba(255,210,130,.7),transparent_42%)]" />
      <div className="absolute bottom-12 right-[10%] h-16 w-56 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute bottom-28 left-[8%] h-10 w-40 rounded-full bg-white/10 blur-2xl" />
      <Plane className="absolute left-1/2 top-16 h-12 w-12 -translate-x-1/2 -rotate-[18deg] text-black/80" />

      {/* Close */}
      <Link
        href="/"
        aria-label="Close"
        className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-ink shadow-card transition hover:bg-white"
      >
        <Close className="h-5 w-5" />
      </Link>

      {/* Card */}
      <div className="relative flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-lift">
          <h1 className="text-center font-sans text-2xl font-bold text-navy">My Bookings</h1>

          <div className="mt-5 grid grid-cols-2 rounded-lg bg-mist p-1 text-sm font-semibold">
            {[["email", "By Email"], ["ticket", "By Ticket Number"]].map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => { setTab(k); setDone(false); }}
                className={`rounded-md py-2 transition ${tab === k ? "bg-white text-navy shadow" : "text-ink/55"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {done ? (
            <div className="mt-6 text-center">
              <p className="text-sm text-ink/70">
                We could not find a trip for <span className="font-semibold text-navy">{value}</span>.
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Please check your details or call{" "}
                <a href="tel:+18555550199" className="font-semibold text-navy">855-555-0199</a> for help.
              </p>
              <button onClick={() => setDone(false)} className="mt-4 text-sm font-semibold text-gold">
                Try again
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p className="mt-5 text-center text-sm text-ink/70">
                {tab === "email"
                  ? "Enter the email you used to book your trip"
                  : "Enter the ticket number from your confirmation"}
              </p>
              <input
                type={tab === "email" ? "email" : "text"}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={tab === "email" ? "Email" : "Ticket number"}
                className="mt-3 w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
              <label className="mt-4 flex items-start gap-2 text-xs text-ink/60">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-navy"
                />
                <span>
                  I have read and agree with AeroLux{" "}
                  <Link href="/terms" className="underline hover:text-navy">Terms &amp; Conditions</Link> and{" "}
                  <Link href="/privacy" className="underline hover:text-navy">Privacy Policy</Link>
                </span>
              </label>
              <button
                type="submit"
                disabled={!agree || !value}
                className="mt-5 w-full rounded-md bg-navy py-3 text-sm font-bold text-white transition hover:bg-navy-700 disabled:opacity-40"
              >
                Continue
              </button>
            </form>
          )}
        </div>
      </div>

      <p className="absolute inset-x-0 bottom-4 text-center text-xs text-white/80">
        © {new Date().getFullYear()} AeroLux Travel LLC. All rights reserved
      </p>
    </div>
  );
}
