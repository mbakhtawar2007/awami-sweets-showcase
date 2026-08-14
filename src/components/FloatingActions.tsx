import { Phone, Navigation } from "lucide-react";
import { business } from "@/data/bakery";

/** Mobile-only quick actions. No WhatsApp — the number is not confirmed for it. */
export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex gap-3">
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/25 px-4 py-3 text-sm font-semibold text-foreground"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
