"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import { contact } from "../../lib/data";
import { Phone, Check, Chevron, Headset } from "../../components/icons";

const palettes = {
  silver: "from-[#dfe3e8] to-[#aab1bd] text-navy/80",
  onyx: "from-[#2c2c31] to-[#0b0b0f] text-white",
  gold: "from-[#eccf84] to-[#b88f38] text-navy/85",
};

function GiftCard({ tier, className = "" }) {
  return (
    <div
      className={`relative h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ${palettes[tier]} shadow-lift ring-1 ring-black/10 sm:h-28 sm:w-44 ${className}`}
    >
      <div className="absolute -inset-y-2 left-1/3 w-1/3 rotate-12 bg-white/20 blur-md" />
      <div className="relative flex h-full flex-col justify-between p-4">
        <span className="font-serif text-lg font-extrabold tracking-tight">
          Aero<span className={tier === "onyx" ? "text-gold" : ""}>Lux</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-70">Gift Card</span>
      </div>
    </div>
  );
}

function GiftCardFan() {
  return (
    <div className="flex items-center justify-center overflow-hidden py-4">
      <GiftCard tier="silver" className="translate-x-7 translate-y-3 rotate-[-8deg]" />
      <GiftCard tier="onyx" className="relative z-10 scale-110" />
      <GiftCard tier="gold" className="-translate-x-7 translate-y-3 rotate-[8deg]" />
    </div>
  );
}

function CallToPurchase() {
  return (
    <a
      href={contact.phoneLink}
      className="inline-flex items-center gap-2 rounded-md bg-[#15795f] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-card transition hover:bg-[#11654f]"
    >
      <Phone className="h-4 w-4" /> Call to Purchase {contact.phone}
    </a>
  );
}

const tiers = [
  { name: "Basic", price: 100, features: ["Redeemable on any fare", "12-month validity"] },
  { name: "Advanced", price: 250, featured: true, features: ["Everything in Basic", "Priority expert support", "Personalised message"] },
  { name: "Premium", price: 500, features: ["Everything in Advanced", "Dedicated travel manager"] },
];

const mockInput = "mt-1 w-full rounded-md border border-navy/15 bg-mist px-3 py-2 text-xs text-ink/50";

const steps = [
  {
    title: "Call our travel professionals",
    text: "Our experts walk you through every step and answer any question, so buying a gift is transparent and completely hassle-free.",
    visual: (
      <div className="relative mx-auto grid h-56 w-56 place-items-center">
        <div className="absolute inset-0 rounded-[42%_58%_55%_45%] bg-gold/30" />
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-navy text-gold shadow-lift">
          <Headset className="h-12 w-12" />
        </div>
      </div>
    ),
  },
  {
    title: "Choose the voucher value",
    text: "Pick one of our preset tiers or ask for a custom amount. The expert sends a form with everything laid out clearly.",
    visual: (
      <div className="grid grid-cols-3 gap-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-xl bg-white p-3 text-center ${
              t.featured ? "-mt-3 border-2 border-gold shadow-lift" : "border border-navy/10 shadow-card"
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/55">{t.name}</p>
            <p className="font-serif text-xl font-bold text-navy">${t.price}</p>
            <ul className="mt-2 space-y-1 text-left">
              {t.features.map((f) => (
                <li key={f} className="flex gap-1 text-[10px] text-ink/60">
                  <Check className="h-3 w-3 shrink-0 text-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Add your recipient's details",
    text: "Family, friends or colleagues — anyone would love the gift of travel. Enter their name and email, and add a personal note if you like.",
    visual: (
      <div className="relative mx-auto max-w-xs">
        <div className="absolute -inset-6 rounded-[42%_58%_50%_50%] bg-gold/25" />
        <div className="relative rounded-2xl bg-white p-5 shadow-lift ring-1 ring-navy/10">
          <h4 className="font-serif text-base font-bold text-navy">Recipient&apos;s info</h4>
          <label className="mt-3 block text-[10px] font-semibold uppercase tracking-wide text-ink/45">Recipient&apos;s email *</label>
          <div className={mockInput}>recipient@email.com</div>
          <label className="mt-3 block text-[10px] font-semibold uppercase tracking-wide text-ink/45">Recipient&apos;s name *</label>
          <div className={mockInput}>e.g. Anthony</div>
          <label className="mt-3 block text-[10px] font-semibold uppercase tracking-wide text-ink/45">Additional message</label>
          <div className={mockInput + " h-12"}>A little something for your next adventure…</div>
        </div>
      </div>
    ),
  },
  {
    title: "Review and confirm",
    text: "Accept the terms and complete the purchase. The recipient receives two emails with full instructions, their voucher code and a private PIN — so only they can redeem it.",
    visual: (
      <div className="relative mx-auto max-w-xs overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-navy/10">
        <div className="bg-navy px-5 py-3 font-serif text-lg font-bold text-white">
          Aero<span className="text-gold">Lux</span>
        </div>
        <div className="p-5">
          <p className="text-sm font-bold text-navy">Dear traveler,</p>
          <p className="mt-1 text-xs leading-relaxed text-ink/60">
            Someone special has gifted you an AeroLux travel voucher. Here are the details to redeem it.
          </p>
          <div className="mt-4 rounded-xl bg-gradient-to-br from-[#2c2c31] to-[#0b0b0f] p-4 text-white">
            <p className="text-[10px] uppercase tracking-wide text-white/50">Voucher code</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold tracking-widest text-gold">ALX-5OVA2AP</span>
              <span className="font-serif text-lg font-bold">$250</span>
            </div>
          </div>
          <button className="mt-4 w-full rounded-md bg-[#15795f] py-2 text-xs font-bold uppercase text-white">
            Call to Redeem
          </button>
        </div>
      </div>
    ),
  },
];

const faqs = [
  { q: "What is an AeroLux Gift Voucher?", a: "It is a prepaid travel credit redeemable toward any premium-cabin fare we offer. Think of it as a ticket to a journey the recipient gets to choose themselves." },
  { q: "How long is the voucher valid?", a: "Every voucher stays valid for twelve months from the date it is issued, so there is no pressure to plan a trip right away." },
  { q: "How does the recipient redeem it?", a: "They contact one of our travel experts with the code from their email, and the expert applies the credit at the payment step of their booking." },
  { q: "When and how is the gift delivered?", a: "Once purchased, we email the recipient detailed instructions along with their voucher code and a private PIN, so only they can use it." },
  { q: "Can I choose any amount?", a: "Yes. Pick one of our preset tiers or ask an expert for a custom value that suits the trip you have in mind." },
];

function ShowcaseBand({ heading }) {
  return (
    <section className="bg-mist py-14">
      <div className="container-x text-center">
        <h2 className="section-title">{heading}</h2>
        <GiftCardFan />
        <div className="mt-4">
          <CallToPurchase />
        </div>
      </div>
    </section>
  );
}

export default function GiftVouchersPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="The Gift of Travel"
        title="AeroLux Gift Vouchers"
        subtitle="Give someone the comfort of business class. Redeemable on any premium fare, with no expiry pressure."
      />

      <ShowcaseBand heading="Ease the search for the perfect gift" />

      {/* Steps intro */}
      <section className="bg-white pt-14 text-center">
        <div className="container-x">
          <h2 className="section-title">The AeroLux Gift Voucher &amp; Vacation Planner</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/65">Follow these simple steps to purchase the perfect gift.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-12">
        <div className="container-x flex flex-col gap-14">
          {steps.map((s, i) => (
            <div key={s.title} className="grid items-center gap-8 md:grid-cols-2">
              <div className={i % 2 ? "md:order-2" : ""}>
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-mist font-serif text-xl font-bold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/65">{s.text}</p>
              </div>
              <div className={i % 2 ? "md:order-1" : ""}>{s.visual}</div>
            </div>
          ))}
        </div>
      </section>

      <ShowcaseBand heading="Enjoy the happiness of your loved ones" />

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container-x max-w-3xl">
          <h2 className="section-title mb-8">Frequently Asked Questions</h2>
          <div className="divide-y divide-navy/10 rounded-2xl border border-navy/10">
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
                    <Chevron className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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
    </>
  );
}
