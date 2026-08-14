import { Clock } from "lucide-react";
import { business } from "@/data/bakery";

export function OpeningHours() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex items-center gap-3">
        <Clock className="h-5 w-5 text-caramel" aria-hidden="true" />
        <h3 className="font-display text-2xl text-foreground">Opening Hours</h3>
      </div>
      <dl className="mt-5">
        {business.hours.map((entry) => (
          <div
            key={entry.day}
            className="flex items-center justify-between gap-4 border-b border-border/70 py-2.5 text-sm last:border-0"
          >
            <dt className="text-muted-foreground">{entry.day}</dt>
            <dd className="font-medium text-foreground">
              {entry.open} – {entry.close}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-muted-foreground">
        Hours may vary on holidays. Shown as demo/reference timings for this concept — please
        confirm before visiting.
      </p>
    </div>
  );
}
