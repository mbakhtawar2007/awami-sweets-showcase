import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business, navLinks } from "@/data/bakery";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/30 bg-background/92 py-2 shadow-soft backdrop-blur-md"
          : "border-b border-transparent py-3.5",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#home" className="flex items-center gap-3 rounded-md">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-plum sm:h-12 sm:w-12"
          >
            <span className="font-urdu text-lg text-gold sm:text-xl" style={{ lineHeight: 1.6 }}>
              {business.urduName}
            </span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {business.name}
            </span>
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-caramel">
              {business.subName}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-caramel after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground xl:inline">
            Website Concept • 2026
          </span>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy lg:inline-flex"
          >
            Contact Us
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:bg-secondary lg:hidden"
            aria-label={`Call ${business.name}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:bg-secondary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <div className="mx-4 mt-3 rounded-2xl border border-gold/30 bg-card p-5 shadow-lift">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-display text-xl text-foreground last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Contact Us
          </a>
          <p className="mt-4 text-center text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            Website Concept • 2026
          </p>
        </div>
      </div>
    </header>
  );
}
