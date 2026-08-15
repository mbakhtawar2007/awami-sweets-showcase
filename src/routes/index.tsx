import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CustomCake } from "@/components/CustomCake";
import { Storefront } from "@/components/Storefront";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { business } from "@/data/bakery";

const title = "Awami Foods | Bakery in Saeedabad, Karachi";
const description =
  "Awami Foods in Saeedabad, Karachi — cakes, sweets, bakery favorites and beverages for everyday moments and celebrations.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  alternateName: business.urduName,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}, ${business.address.line3}`,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressCountry: "PK",
  },
  openingHoursSpecification: business.hours.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: entry.day,
    opens: entry.open,
    closes: entry.close,
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>

        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedProducts />
        <Storefront />
        <CustomCake />
        <Gallery />
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
