# Awami Foods — Visual Refinement & Authenticity Pass

A targeted refinement of the existing site. No rebuild: same routing, components, data file, animations and section order. The work is rebranding the visual system to the real storefront's plum-and-gold identity, reworking the hero, and adding two new sections.

Note: no real Awami Foods photos are available in this conversation, so all imagery stays generated and clearly labelled. New images will be regenerated to feel like a Karachi neighbourhood bakery (glass display counters, cream cakes, mithai trays, bottled drinks) rather than a European patisserie, and every image path stays in `src/data/bakery.ts` so real photos drop in later without touching components.

## Brand system

Replace the beige/caramel palette with the storefront identity:

- Background: warm ivory / cream (kept)
- Primary dark: deep plum
- Brand accent: rich golden yellow
- Secondary accent: muted burgundy
- Text: deep charcoal-plum
- Cards: warm white, subtle warm-neutral borders

Gold used for accents, rules, badges and hover states — not large fills. No heavy gradients. Typography stays Cormorant Garamond / Karla / Noto Nastaliq Urdu, with less serif on body-level text so the page reads as modern, not fine-dining.

## Section changes

1. **Navbar** — plum/gold lockup: عوامی with "Awami Foods" and a small "Sweets & Bakers" line. CTA renamed to "Contact Us". Tighter spacing, gold underline hover, "Website Concept • 2026" as a small subtle marker (moved out of the hero body). Mobile sheet reworked for larger tap targets.
2. **Hero** — drops the oversized circular cake. New layout: brand/location badge, "A Taste You'll Remember", short supporting line, Explore Menu + Contact Us CTAs, and on the right a squared-off editorial image composition (a main bakery-counter image plus two smaller cake/sweets tiles) with a thin gold frame detail and the Urdu mark as a brand element. Less empty space, tighter vertical rhythm.
3. **Trust bar** — reworked into one premium strip with small icons and gold hairline separators: 4.0 ★ · 73 Reviews (attributed to the public listing), Fresh Bakery, Cakes & Sweets, Saeedabad Karachi, Takeout Available. No new stats.
4. **Categories** — Cakes / Sweets / Bakery / Beverages, restyled cards with plum overlay, gold label rule and a subtle lift-on-hover.
5. **Featured products** — renamed to non-claiming labels: "Celebration Cake — Showcase", "Chocolate Cake — Showcase", "Cream Cake — Showcase", "Custom Cake Inspiration". "Contact for Price" retained, "Showcase Image" badge on every card since all imagery is generated.
6. **New: "Awami Foods, Saeedabad"** story section — "A glimpse of the bakery behind the name", copy explaining the concept is designed around the real Saeedabad location, with a clear note that the storefront photo is a placeholder awaiting the real one. No invented history.
7. **New: "A Look Inside" gallery** — a 5-tile asymmetric grid (storefront, display counter, cakes, sweets shelf, drinks) with a single honest caption that images are placeholders for the bakery's own photography.
8. **About** — copy tightened to what's known: a bakery in Saeedabad offering cakes, sweets, bakery items and beverages, takeout available. No founder, year, branches, awards.
9. **Reviews** — heading label changed to "Customer feedback themes"; 4.0 / 73 attributed to the public Google listing; "See More Reviews" links to the listing search.
10. **Opening hours** — cleaner card, "Hours may vary on holidays." plus a small "Public listing reference" note.
11. **Location** — "Come Visit Us" with the full verified address, phone, Call Now (`tel:+923232810084`) and Get Directions (Maps destination link). Custom illustrated location card in brand colors; no map screenshot.
12. **Contact** — fields Name, Phone, Cake/Event Inquiry, Message with client-side validation; success state states plainly that the concept does not send messages and gives the phone number.
13. **Footer** — plum background, gold rules, Urdu mark, "Unofficial website concept created as a showcase."
14. **Mobile** — floating Call and Directions actions kept (no WhatsApp); hero, gallery crops, cards, form and footer tuned specifically at 360/390/430.

## Honesty and SEO

No prices, testimonials, awards, history, branches or delivery claims. Title "Awami Foods | Bakery in Saeedabad, Karachi" with the specified description, og/twitter tags and canonical. Bakery JSON-LD kept conservative — `aggregateRating` removed; the 4.0 ★ · 73 Reviews figure stays visible and attributed on-page only.

## Technical notes

- Tokens rewritten in `src/styles.css` (`:root` + `@theme inline`) — plum/gold/burgundy replace the caramel set; components keep using semantic classes, so most files change only where structure changes.
- Structural edits: `Navbar.tsx`, `Hero.tsx`, `TrustBar.tsx`, `FeaturedProducts.tsx`, `Footer.tsx`, plus two new components `Storefront.tsx` and `Gallery.tsx` wired into `src/routes/index.tsx`.
- Data-only edits: product labels, review section wording, gallery entries in `src/data/bakery.ts`.
- Imagery regenerated into `src/assets/`, imported as ES modules, below-fold lazy-loaded with fixed dimensions.
- No new dependencies, no backend, auth, database or payments.

## QA

Headless-browser passes at 360 / 390 / 430 / 768 / 1024 / 1440 checking horizontal scroll, broken images, console errors, anchor scrolling, tel/directions links, focus states, contrast, alt text and reduced motion.
