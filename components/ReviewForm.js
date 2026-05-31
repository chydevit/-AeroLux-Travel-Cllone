"use client";

import { useState } from "react";
import { Star, Plane, Check } from "./icons";

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [len, setLen] = useState(0);
  const [done, setDone] = useState(false);
  const input =
    "w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x grid items-stretch gap-0 lg:grid-cols-2">
        {/* Image panel */}
        <div className="relative hidden rounded-l-2xl bg-gradient-to-br from-navy-700 to-navy-900 lg:block">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)]" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <Star className="h-10 w-10 text-gold" />
            <p className="mt-3 font-serif text-2xl font-bold">Loved your trip? Tell the world.</p>
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8 lg:rounded-l-none">
          {done ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-gold text-navy">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy">Thanks for your review!</h3>
              <p className="mt-2 text-sm text-ink/65">Your feedback has been submitted for moderation.</p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl font-bold text-navy">Review AeroLux Travel</h2>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-ink/70">Your rating:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      aria-label={`${n} star`}
                      className={(hover || rating) >= n ? "text-gold" : "text-ink/20"}
                    >
                      <Star className="h-6 w-6" />
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input className={input} placeholder="Name*" required />
                  <input type="email" className={input} placeholder="Email*" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input className={input} placeholder="Departure City" />
                  <input className={input} placeholder="Destination City" />
                </div>
                <div>
                  <textarea
                    className={input + " min-h-[120px] resize-y"}
                    placeholder="Your review*"
                    maxLength={1000}
                    required
                    onChange={(e) => setLen(e.target.value.length)}
                  />
                  <div className="mt-1 text-right text-xs text-ink/40">{len}/1000</div>
                </div>
                <button type="submit" className="btn-gold w-full py-3 text-base">
                  <Plane className="h-5 w-5" /> Submit Review
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
