import Link from "next/link";
import { notFound } from "next/navigation";
import DealQuoteForm from "../../../components/DealQuoteForm";
import HowItWorks from "../../../components/HowItWorks";
import Benefits from "../../../components/Benefits";
import Reviews from "../../../components/Reviews";
import Newsletter from "../../../components/Newsletter";
import { destinationList } from "../../../lib/data";
import { Chevron } from "../../../components/icons";

export function generateStaticParams() {
  return destinationList.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = destinationList.find((x) => x.slug === params.slug);
  return d
    ? { title: `${d.city} Business Class Flights | AeroLux Travel`, description: `Business and first class fares to ${d.city} from $${d.from.toLocaleString()}.` }
    : {};
}

export default function DestinationPage({ params }) {
  const dest = destinationList.find((d) => d.slug === params.slug);
  if (!dest) notFound();

  const seats = destinationList.filter((d) => d.region === dest.region).slice(0, 6);

  return (
    <>
      {/* Deal hero with inline quote form */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy to-navy-800" />
          <div className={`absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br ${dest.gradient} opacity-30`} />
        </div>
        <div className="container-x relative z-10 grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2">
          <div className="text-white">
            <p className="eyebrow mb-3">{dest.region} · Seat Sale</p>
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Business Class to {dest.city}
            </h1>
            <p className="mt-4 max-w-md text-white/70">
              Privately negotiated premium fares with the world&apos;s leading carriers. Limited seats — request your free quote today.
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-3">
              {dest.old ? <span className="text-lg text-white/40 line-through">${dest.old.toLocaleString()}</span> : null}
              <span className="font-serif text-5xl font-bold text-gold">${dest.from.toLocaleString()}</span>
              <span className="mb-1 text-sm text-white/60">round-trip, total*</span>
              {dest.save ? <span className="mb-1 rounded-full bg-gold/20 px-2.5 py-1 text-xs font-bold text-gold">Save {dest.save}%</span> : null}
            </div>
          </div>
          <DealQuoteForm city={dest.city} />
        </div>
      </section>

      <HowItWorks />

      {/* Grab your seats */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="section-title text-center">Grab Your Seats Now!</h2>
          <p className="mt-3 text-center text-ink/60">Popular {dest.region} routes departing from the US.</p>
          <div className="mt-8 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10">
            {seats.map((s) => (
              <Link key={s.slug} href={`/destinations/${s.slug}`} className="flex items-center gap-3 px-5 py-4 transition hover:bg-mist">
                <span className="flex-1 font-semibold uppercase tracking-wide text-navy">{s.city}</span>
                <span className="font-serif text-lg font-bold text-navy">${s.from.toLocaleString()}<sup className="text-gold">*</sup></span>
                <span className="hidden text-xs text-ink/45 sm:inline">round-trip, total</span>
                <Chevron className="h-5 w-5 -rotate-90 text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Benefits />
      <Reviews />
      <Newsletter />
    </>
  );
}
