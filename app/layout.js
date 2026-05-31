import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallbackButton from "../components/CallbackButton";
import QuoteModal from "../components/QuoteModal";
import CallbackModal from "../components/CallbackModal";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "AeroLux Travel | Business & First Class Flights for Less",
  description:
    "AeroLux Travel offers privately negotiated business and first class airfares to Europe, Asia, the Middle East and beyond — with a dedicated travel manager and 24/7 support.",
  keywords: [
    "business class flights",
    "first class flights",
    "cheap business class tickets",
    "premium airfare deals",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CallbackButton />
        <QuoteModal />
        <CallbackModal />
        <ScrollReveal />
      </body>
    </html>
  );
}
