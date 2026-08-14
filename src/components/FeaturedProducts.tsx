import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

export function FeaturedProducts() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="section-label">Featured</p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Made for Sweet Moments
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sample cake concepts shown for this website demo. The bakery's actual menu and pricing
              can replace these at any time.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-caramel underline-offset-4 hover:underline"
          >
            Ask about availability
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal as="li" key={product.id} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    width={900}
                    height={900}
                    loading="lazy"
                    alt={`Demo photograph of a ${product.name.toLowerCase()}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.isDemo && (
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
                      Demo item
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-caramel">
                    {product.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                    <span className="text-sm font-semibold text-foreground">{product.status}</span>
                    <a
                      href="#contact"
                      className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-caramel hover:text-caramel"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
