import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";
import { contact } from "../../lib/data";
import { Phone, Headset, Globe } from "../../components/icons";

export const metadata = {
  title: "Contact Us | AeroLux Travel",
  description: "Reach a dedicated travel manager 24/7 by phone, email or message.",
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, title: "Call Us 24/7", lines: [contact.phone, contact.hours], href: contact.phoneLink },
    { icon: Headset, title: "Email Support", lines: [contact.email, "Replies within minutes"], href: `mailto:${contact.email}` },
    { icon: Globe, title: "Head Office", lines: [contact.address] },
  ];

  return (
    <>
      <PageHero
        eyebrow="We're Here to Help"
        title="Get in Touch"
        subtitle="Speak with a live travel expert any time of day. We're ready to plan, advise and book your next premium trip."
      >
        <a href={contact.phoneLink} className="btn-gold">Call {contact.phone}</a>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-4">
            {cards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex gap-4 rounded-2xl border border-navy/10 bg-mist p-6 transition hover:border-gold/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy">{c.title}</h3>
                    {c.lines.map((l) => <p key={l} className="text-sm text-ink/65">{l}</p>)}
                  </div>
                </div>
              );
              return c.href ? <a key={c.title} href={c.href} className="block">{inner}</a> : <div key={c.title}>{inner}</div>;
            })}
            <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-800 p-6 text-white">
              <h3 className="font-serif text-lg font-bold">Prefer a quick quote?</h3>
              <p className="mt-1 text-sm text-white/70">Tell us your route and dates and we'll do the rest.</p>
              <a href="#quote" className="btn-gold mt-4">Request a Free Quote</a>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
