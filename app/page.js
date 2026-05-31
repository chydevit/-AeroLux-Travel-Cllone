import Hero from "../components/Hero";
import Deals from "../components/Deals";
import TrustedShowcase from "../components/TrustedShowcase";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Deals />
      <TrustedShowcase />
      <HowItWorks />
      <Reviews />
      <Faq />
      <Newsletter />
    </>
  );
}
