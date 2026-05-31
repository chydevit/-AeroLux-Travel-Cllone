import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Terms of Use | AeroLux Travel",
  description: "The terms and conditions that govern your use of the AeroLux Travel website.",
};

const intro =
  "Welcome to AeroLux Travel. By accessing or using this website you agree to these Terms of Use. Please read them carefully; if you do not agree, please discontinue use of the site.";

const sections = [
  { h: "Acceptance of Terms", p: ["These terms govern your access to and use of our website and services. We may update them from time to time, and continued use means you accept the current version."] },
  { h: "Who We Are & What We Do", p: ["AeroLux Travel helps travelers find and book premium air travel. We present fare information and connect you with travel providers; the underlying travel services are supplied by those providers under their own terms."] },
  { h: "Using the Site", p: ["You agree to use the site lawfully, to provide accurate information, and to be responsible for activity under your account. You must be of legal age to form a binding contract."] },
  { h: "Bookings & Quotes", p: ["Quotes are estimates based on information available at the time and are not guaranteed until ticketed. Fares, taxes and fees may change, and bookings are subject to provider availability and rules."] },
  { h: "Pricing & Availability", p: ["Displayed prices are 'from' amounts, typically per person and round-trip, and depend on route, dates, cabin and carrier. Seats are limited and may not be available on all flights."] },
  { h: "Intellectual Property", p: ["All content on this site — text, graphics, logos and design — is owned by us or our licensors and may not be copied or reused without permission, except for personal, non-commercial use."] },
  { h: "Prohibited Conduct", p: ["You may not scrape, disrupt, or misuse the site, make fraudulent or speculative bookings, or attempt to gain unauthorised access to our systems."] },
  { h: "Disclaimers & Limitation of Liability", p: ["The site and its content are provided 'as is' without warranties. To the extent permitted by law, we are not liable for indirect or consequential losses, or for the acts or omissions of travel providers."] },
  { h: "Governing Law", p: ["These terms are governed by the applicable laws of our place of business. Disputes will be handled on an individual basis."] },
  { h: "Contact", p: ["For questions about these terms, email legal@aeroluxtravel.example."] },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Use" updated="1 January 2026" intro={intro} sections={sections} />;
}
