import { MapPin } from "lucide-react";
import { business, storefrontImage } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

export function Storefront() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl border border-gold/40 shadow-lift">
            <img
              src={storefrontImage}
              width={1408}
              height={1008}
              loading="lazy"
              alt="Placeholder photograph of a neighbourhood bakery shopfront lit at dusk"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
            Placeholder image
          </span>
        </Reveal>

        <Reveal delay={100}>
          <p className="section-label">The bakery</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            Awami Foods, Saeedabad
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse of the bakery behind the name.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            This website concept is designed around the real bakery on Shahara-e-Ali, Chandni Chowk
            in Saeedabad — a local shop known for cakes, sweets, bakery items and cold drinks, with
            takeout available.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The photograph shown here is a placeholder standing in for the shop's own photography.
            Once Awami Foods provides its storefront and product photos, they replace these images
            directly.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
            <MapPin className="h-4 w-4 text-caramel" aria-hidden="true" />
            {business.address.line1}, {business.address.city}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
