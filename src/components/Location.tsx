import { MapPin, Phone, Navigation } from "lucide-react";
import { addressLines, business } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";
import { OpeningHours } from "@/components/OpeningHours";

export function Location() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <p className="section-label">Visit Us</p>
        <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Come Visit Us</h2>
        <p className="mt-4 text-muted-foreground">
          Find us in Saeedabad, Baldia Town — takeout available from the counter.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <p className="font-urdu text-3xl text-burgundy" lang="ur" dir="rtl">
              {business.urduName}
            </p>
            <h3 className="mt-1 font-display text-2xl text-foreground">{business.name}</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Phone: </span>
              <a href={business.phoneHref} className="hover:text-caramel">
                {business.phone}
              </a>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Plus code: {business.plusCode}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-burgundy"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-caramel hover:text-caramel"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex min-h-52 flex-1 items-end overflow-hidden rounded-2xl border border-border bg-secondary p-6 shadow-soft"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-caramel/20 blur-xl"
            />
            <MapPin
              className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-full text-burgundy transition-transform duration-500 group-hover:-translate-y-[120%]"
              aria-hidden="true"
            />
            <span className="relative rounded-full bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-soft">
              Open in Google Maps
            </span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <OpeningHours />
        </Reveal>
      </div>
    </section>
  );
}
