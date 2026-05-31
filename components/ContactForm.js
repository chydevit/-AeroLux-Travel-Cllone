"use client";

import { useState } from "react";
import { Check } from "./icons";

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const input =
    "w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold text-navy">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-navy">Message sent</h3>
        <p className="mt-2 text-sm text-ink/65">Thanks for reaching out — a travel manager will reply shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <h2 className="font-serif text-2xl font-bold text-navy">Send Us a Message</h2>
      <div className="mt-5 space-y-3">
        <input className={input} placeholder="Full name*" required />
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="email" className={input} placeholder="Email*" required />
          <input type="tel" className={input} placeholder="Phone" />
        </div>
        <textarea className={input + " min-h-[120px] resize-y"} placeholder="How can we help?*" required />
        <button type="submit" className="btn-gold w-full py-3 text-base">Send Message</button>
      </div>
    </form>
  );
}
