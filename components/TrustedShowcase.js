"use client";

import { useState, useEffect, useRef } from "react";
import { Chevron } from "./icons";

const slides = [
  "from-[#3a2230] via-[#5a3a4a] to-[#1a1018]",
  "from-[#13303a] via-[#1f5a5a] to-[#0a1f22]",
  "from-[#2b2f3a] via-[#3a4a63] to-[#0b1422]",
];

export default function TrustedShowcase() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const ref = useRef(null);
  const go = (d) => setI((i + d + slides.length) % slides.length);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.25 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="bg-white py-16 sm:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div
          className={`relative transition-all duration-700 ${
            shown ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          <div
            className={`relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br ${slides[i]} shadow-lift transition-all duration-500 sm:h-96`}
          >
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_72%_28%,#fff,transparent_45%)]" />
            <div className="absolute bottom-8 left-8 h-40 w-52 rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm" />
            <div className="absolute bottom-12 left-12 h-24 w-40 rounded-xl bg-white/10" />
          </div>
          <div className="absolute right-4 top-4 flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy shadow-card transition hover:text-gold"
            >
              <Chevron className="h-5 w-5 rotate-90" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy shadow-card transition hover:text-gold"
            >
              <Chevron className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${
            shown ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
        >
          <p className="eyebrow mb-3">Why AeroLux</p>
          <h2 className="section-title">Trusted by Over 188K+ Travelers</h2>
          <p className="mt-5 font-semibold text-navy/90">
            Our promise is simple: outstanding personal service, around the clock and every day of
            the year. We have refined the craft of making premium travel feel effortless — from the
            first quote to the moment you land.
          </p>
          <p className="mt-4 leading-relaxed text-ink/65">
            Looking to lower the cost of travel for yourself or your business? Give us a try and be
            confident you are getting genuine value for your money. Your dedicated travel manager is
            reachable any time by phone or email — we are always glad to help.
          </p>
        </div>
      </div>
    </section>
  );
}
