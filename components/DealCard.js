import Link from "next/link";
import { Plane } from "./icons";

export default function DealCard({ city, region, from, old, save, gradient, slug }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
      <Link href={`/destinations/${slug}`} className={`relative block h-44 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)]" />
        {save ? (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-navy">
            Save {save}%
          </span>
        ) : null}
        <Plane className="absolute right-3 top-3 h-5 w-5 text-white/70" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-serif text-2xl font-bold text-white">{city}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">{region}</p>
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs font-medium text-ink/45">From, round-trip</p>
        <div className="flex items-end gap-2">
          <span className="font-serif text-2xl font-bold text-navy">${from.toLocaleString()}</span>
          {old ? <span className="mb-1 text-sm text-ink/40 line-through">${old.toLocaleString()}</span> : null}
        </div>
        <a
          href="#quote"
          className="mt-3 block rounded-md border border-navy/15 py-2.5 text-center text-sm font-semibold text-navy transition group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
        >
          Get a Quote
        </a>
      </div>
    </article>
  );
}
