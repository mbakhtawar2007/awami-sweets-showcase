import { Star, Cake, MapPin, ShoppingBag } from "lucide-react";
import { business } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: Star,
    title: `${business.rating.toFixed(1)} ★`,
    subtitle: `${business.reviewCount} Reviews`,
  },
  { icon: Cake, title: "Fresh Bakery", subtitle: "Cakes & Sweets" },
  { icon: MapPin, title: "Saeedabad", subtitle: "Karachi" },
  { icon: ShoppingBag, title: "Takeout", subtitle: "Available" },
];

export function TrustBar() {
  return (
    <Reveal as="section" className="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/70 sm:grid-cols-4">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-3 bg-card px-4 py-5 sm:px-6">
            <Icon className="h-5 w-5 shrink-0 text-caramel" aria-hidden="true" />
            <div className="min-w-0">
              <p className="truncate font-display text-lg font-semibold text-foreground">{title}</p>
              <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
