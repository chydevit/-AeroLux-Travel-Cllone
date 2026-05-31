import PageHero from "../../components/PageHero";
import SearchForm from "../../components/SearchForm";
import HowItWorks from "../../components/HowItWorks";
import Benefits from "../../components/Benefits";
import Faq from "../../components/Faq";
import { contact } from "../../lib/data";

export const metadata = {
  title: "How to Book | AeroLux Travel",
  description: "Booking premium flights with AeroLux is simple: get in touch, receive tailored options, then choose and travel.",
};

export default function HowToBookPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple & Transparent"
        title="How It Works"
        subtitle="No booking engines, no guesswork — just a clear path from idea to e-ticket, guided by a dedicated travel expert."
      />

      <section className="bg-navy-800 py-14">
        <div className="container-x">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-white">
            Find Your Perfect Flight
          </h2>
          <div className="mx-auto max-w-5xl">
            <SearchForm />
          </div>
        </div>
      </section>

      <HowItWorks />
      <Benefits />

      <section className="bg-white py-16">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-800 p-8 text-center text-white sm:p-12">
            <h2 className="font-serif text-3xl font-bold">Ready When You Are</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Speak with a travel manager 24/7 or request a free quote and we&apos;ll get back to you within minutes.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href="#quote" className="btn-gold">Request a Free Quote</a>
              <a href={contact.phoneLink} className="btn-outline-gold">Call {contact.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
