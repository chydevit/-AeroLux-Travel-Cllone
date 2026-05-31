import { stats, trustCards } from "../lib/data";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">About AeroLux Travel</p>
            <h2 className="section-title">
              Trusted by Over 190,000 Premium Travelers
            </h2>
            <p className="mt-5 text-lg font-medium text-ink/80">
              Our promise is simple: outstanding personal service, around the clock.
              We have refined the art of making premium travel feel effortless —
              from the first quote to the moment you land.
            </p>
            <p className="mt-4 text-ink/65">
              Want to lower the cost of travel for yourself or your business? Give us a
              try and be sure you are getting the best value for your money. Reach your
              travel manager any time by phone or email — we are always glad to help.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-navy/10 bg-mist p-6 text-center shadow-card"
              >
                <div className="font-serif text-3xl font-bold text-navy sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-medium text-ink/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trustCards.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-navy/10 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-soft transition-all group-hover:w-20" />
              <h3 className="font-serif text-xl font-bold text-navy">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
