import { Star, Cake, MapPin, ShoppingBag } from "lucide-react";
import { business } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: Star,
    title: `${business.rating.toFixed(1)} ★`,
    subtitle: `${business.reviewCount} Reviews · Public listing`,
  },
  { icon: Cake, title: "Fresh Bakery", subtitle: "Cakes & Sweets" },
  { icon: MapPin, title: "Saeedabad", subtitle: "Karachi" },
  { icon: ShoppingBag, title: "Takeout", subtitle: "Available" },
];

export function TrustBar() {
  return (
    <Reveal as="section" className="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <div className="rounded-2xl border border-border bg-card px-2 py-2 shadow-soft">
        <ul className="grid grid-cols-2 sm:grid-cols-4">
          {items.map(({ icon: Icon, title, subtitle }, i) => (
            <li
              key={title}
              className={[
                "flex items-center gap-3 px-3 py-4 sm:px-5",
                i > 0 ? "sm:border-l sm:border-gold/30" : "",
                i % 2 === 1 ? "border-l border-gold/30 sm:border-l" : "",
                i > 1 ? "border-t border-gold/30 sm:border-t-0" : "",
              ].join(" ")}
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum/8 text-caramel">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-semibold leading-tight text-foreground">
                  {title}
                </p>
                <p className="truncate text-[0.7rem] text-muted-foreground">{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
