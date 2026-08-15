import { ArrowRight, Phone, Star } from "lucide-react";
import { business, heroImages } from "@/data/bakery";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-26 pb-12 sm:pt-30 lg:pt-36 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-plum/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div className="reveal" data-visible="true">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-caramel">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Awami Foods • Saeedabad
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
            A Taste You'll
            <span className="block italic text-burgundy">Remember</span>
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <p className="font-urdu text-3xl leading-[2] text-plum sm:text-4xl" lang="ur" dir="rtl">
              {business.urduName}
            </p>
            <span className="h-10 w-px bg-gold/60" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-caramel">
              {business.subName}
            </p>
          </div>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cakes, sweets, bakery favourites and cold drinks from a neighbourhood bakery in
            Saeedabad, Karachi — for everyday moments and celebrations.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy"
            >
              Explore Menu
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-caramel"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
              <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
              {business.rating.toFixed(1)} · {business.reviewCount} reviews
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
            <span>Takeout available</span>
            <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
            <span>Custom cakes to order</span>
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4">
          <figure className="relative col-span-3 row-span-2 overflow-hidden rounded-2xl border border-gold/40 shadow-lift">
            <img
              src={heroImages.counter}
              width={1100}
              height={1300}
              alt="Placeholder photograph of a bakery display counter filled with cream cakes"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
              Placeholder image
            </figcaption>
          </figure>
          <div className="col-span-2 overflow-hidden rounded-2xl border border-border shadow-soft">
            <img
              src={heroImages.cake}
              width={900}
              height={900}
              alt="Placeholder photograph of a chocolate celebration cake"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl border border-border shadow-soft">
            <img
              src={heroImages.sweets}
              width={1000}
              height={1000}
              alt="Placeholder photograph of trays of traditional sweets"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
