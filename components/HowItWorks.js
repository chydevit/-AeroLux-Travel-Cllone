import { steps } from "../lib/data";

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-navy-800 py-16 sm:py-24">
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center text-white">
          <p className="eyebrow mb-3">Simple &amp; Transparent</p>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Three Easy Steps to Book
          </h2>
          <p className="mt-4 text-white/65">
            No booking engines, no guesswork — just a clear path from idea to e-ticket.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute left-[60%] top-8 hidden h-px w-[80%] bg-gradient-to-r from-gold/50 to-transparent md:block" />
              )}
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-gold/40 bg-navy font-serif text-2xl font-bold text-gold">
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-white">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/65">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#quote" className="btn-gold">Request a Free Quote</a>
        </div>
      </div>
    </section>
  );
}
