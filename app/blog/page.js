import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Blog | AeroLux Travel",
  description: "Tips, guides and insights on flying business and first class for less.",
};

const posts = [
  { tag: "Guides", title: "How to Find the Best Business Class Fares", excerpt: "The insider approach to unlocking privately negotiated premium fares that never appear online.", gradient: "from-[#1E417E] to-[#0A1A33]" },
  { tag: "Airlines", title: "The World's Best Business Class Cabins in 2026", excerpt: "From lie-flat suites to onboard bars — the carriers redefining comfort at 40,000 feet.", gradient: "from-[#0E5C63] to-[#06222A]" },
  { tag: "Destinations", title: "48 Hours in Style: Tokyo for First Timers", excerpt: "Arrive rested and make the most of a short premium trip to Japan's dazzling capital.", gradient: "from-[#8B2F46] to-[#2A0F18]" },
  { tag: "Tips", title: "Lounge Access Explained: What You Really Get", excerpt: "A clear breakdown of business and first class lounge perks before you fly.", gradient: "from-[#9A6B3F] to-[#2A1A10]" },
  { tag: "Deals", title: "When to Book for the Lowest Premium Fares", excerpt: "Timing, routing and flexibility tricks that quietly cut thousands off the price.", gradient: "from-[#1F6E5A] to-[#0A2A22]" },
  { tag: "Stories", title: "Why Travelers Are Skipping Booking Engines", excerpt: "The case for a dedicated travel manager over an anonymous online checkout.", gradient: "from-[#6D4D8B] to-[#241433]" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The AeroLux Journal"
        title="Travel Smarter, Fly Better"
        subtitle="Tips, guides and inspiration for flying business and first class for less."
      />
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
              <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)]" />
                <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-navy">{p.tag}</span>
              </div>
              <div className="p-5">
                <h2 className="font-serif text-lg font-bold text-navy">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.excerpt}</p>
                <a href="#quote" className="mt-3 inline-block text-sm font-semibold text-gold hover:underline">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
