import { ArrowRight, Phone } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import { business } from "@/data/bakery";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-caramel/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="reveal" data-visible="true">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-caramel">
            Awami Foods • Saeedabad
          </span>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            A Taste You'll
            <span className="block italic text-burgundy">Remember</span>
          </h1>

          <p className="mt-3 w-fit font-urdu text-3xl text-caramel sm:text-4xl" lang="ur">
            <span dir="rtl">{business.urduName}</span>
          </p>




          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Freshly baked cakes, sweets &amp; bakery favourites — made for everyday moments and
            special celebrations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-caramel hover:text-caramel"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Website Concept • 2026
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[46%_54%_38%_62%/54%_38%_62%_46%] bg-gold/25 float-soft"
          />
          <div className="relative overflow-hidden rounded-[46%_54%_40%_60%/48%_42%_58%_52%] border border-border/70 shadow-lift">
            <img
              src={heroCake}
              width={1200}
              height={1504}
              alt="Demo photograph of a chocolate celebration cake on a marble stand"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-2 rounded-full border border-border bg-card/95 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground shadow-soft backdrop-blur sm:left-6">
            Demo photography
          </div>
        </div>
      </div>
    </section>
  );
}
