import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Privacy Policy | AeroLux Travel",
  description: "How AeroLux Travel collects, uses and protects your personal information.",
};

const sections = [
  { h: "Overview", p: ["AeroLux Travel respects your privacy and is committed to protecting your personal information. This policy explains what we collect, how we use it, and the choices you have. By using our site you agree to the practices described here."] },
  { h: "Information We Collect", p: ["We collect details you provide when requesting a quote, subscribing, or contacting us — such as your name, email, phone number and travel preferences.", "We also collect limited technical data automatically, including IP address, device and browser type, and pages visited, to operate and improve the site."] },
  { h: "How We Use Your Information", p: ["To prepare travel quotes and assist with bookings, to respond to enquiries, to send service updates and (with your consent) marketing, and to maintain the security and performance of our services."] },
  { h: "How We Share Information", p: ["We share information with travel partners only as needed to fulfil your request, with service providers acting on our behalf under confidentiality terms, and where required by law. We do not sell your personal information."] },
  { h: "Cookies & Tracking", p: ["We use cookies for essential functionality, preferences and analytics. You can control cookies through your browser settings; disabling some may affect site features."] },
  { h: "Data Security & Retention", p: ["We use industry-standard safeguards, including encryption in transit, to protect your data. We retain information only as long as needed for the purposes described or as required by law."] },
  { h: "Your Choices & Rights", p: ["You may request access to, correction of, or deletion of your personal information, and you can unsubscribe from marketing at any time. Contact us to exercise these rights."] },
  { h: "Children's Privacy", p: ["Our services are intended for adults. We do not knowingly collect information from children except where a child is named as a traveler by a responsible adult."] },
  { h: "Changes to This Policy", p: ["We may update this policy from time to time. Material changes will be posted on this page with a revised date."] },
  { h: "Contact", p: ["Questions about this policy? Email privacy@aeroluxtravel.example and we'll be glad to help."] },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="1 January 2026" sections={sections} />;
}
