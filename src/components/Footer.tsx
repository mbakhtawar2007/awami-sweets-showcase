import { MapPin, Phone } from "lucide-react";
import { business, demoNotice, navLinks } from "@/data/bakery";

export function Footer() {
  return (
    <footer className="bg-primary pb-28 pt-16 text-primary-foreground lg:pb-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-urdu text-4xl text-gold" lang="ur" dir="rtl">
              {business.urduName}
            </p>
            <p className="mt-1 font-display text-2xl">{business.name}</p>
            <p className="mt-3 text-sm text-primary-foreground/70">{business.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg">Explore</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={business.phoneHref} className="hover:text-gold">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                Saeedabad, Karachi
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">{demoNotice}</p>
          <p className="mt-3 text-xs text-primary-foreground/60">
            © 2026 Awami Foods. Demo website concept.
          </p>
        </div>
      </div>
    </footer>
  );
}
