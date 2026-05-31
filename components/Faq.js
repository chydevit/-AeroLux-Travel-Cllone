"use client";

import { useState } from "react";
import { faqs } from "../lib/data";
import { Chevron } from "./icons";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <p className="eyebrow mb-3">Good to Know</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="mt-4 text-ink/65">
            Premium cabins mean priority boarding, lie-flat seats and elevated service —
            and they no longer have to mean an unreachable price.
          </p>
        </div>

        <div className="mt-10 divide-y divide-navy/10 rounded-2xl border border-navy/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-navy">{f.q}</span>
                  <Chevron
                    className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink/65">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
