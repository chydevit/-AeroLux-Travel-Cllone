import { notFound } from "next/navigation";
import DestinationContent from "../../../components/DestinationContent";
import { destinationList } from "../../../lib/data";

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

  return <DestinationContent dest={dest} seats={seats} />;
}
