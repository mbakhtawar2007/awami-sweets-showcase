import { Star, Quote, ArrowUpRight } from "lucide-react";
import { business, reviewSummaries } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Customer Feedback</p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Loved by the Neighbourhood
            </h2>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-6xl text-foreground">
                {business.rating.toFixed(1)}
              </span>
              <span className="text-muted-foreground">/ 5</span>
            </div>
            <div className="mt-2 flex items-center gap-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={
                    i < Math.round(business.rating)
                      ? "h-4 w-4 fill-caramel text-caramel"
                      : "h-4 w-4 text-border"
                  }
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on {business.reviewCount} publicly visible reviews.
            </p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-caramel hover:text-caramel"
            >
              See More Reviews
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {reviewSummaries.map((review, i) => (
              <Reveal as="li" key={review.id} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Quote className="h-6 w-6 text-caramel/60" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    {review.summary}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{review.theme}</span> —{" "}
                    {review.source}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal as="li" delay={300}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
                Summaries are paraphrased from public feedback rather than quoted, and can be
                replaced with verified reviews later.
              </div>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
