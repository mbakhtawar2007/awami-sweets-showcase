# Awami Foods — Premium Bakery Showcase Site

A single-page, production-quality concept website for Awami Foods (عوامی), Saeedabad, Karachi. Clearly marked as a demo concept, built so real photos, menu, prices and contact details can be swapped in from one data file.

## Look and feel

- Warm premium bakery palette: ivory/cream background, deep chocolate brown, warm caramel, muted gold, burgundy accent. Restrained — no heavy gradients.
- Typography: elegant serif for headings (Cormorant Garamond), clean sans for body (Karla/Inter), and a dedicated Urdu display face (Noto Nastaliq Urdu) for عوامی, treated as a hero brand mark.
- Subtle motion only: fade/rise on scroll, gentle image reveal, card and button hover, sticky navbar transition, smooth anchor scroll. Full `prefers-reduced-motion` support.
- Custom bakery photography generated as demo imagery (cakes, sweets, bakery display, warm interior), always labelled as demo — never described as Awami Foods' own products.

## Sections (in order)

1. **Navbar** — عوامی + Awami Foods lockup, links (Home, Menu, About, Reviews, Contact), "Order / Contact" CTA, polished mobile hamburger sheet, sticky-on-scroll state.
2. **Hero** — badge "AWAMI FOODS • SAEEDABAD", heading "A Taste You'll Remember", supporting copy, "Explore Menu" + "Contact Us" CTAs; right side large cake photograph with organic shapes and Urdu brand accent.
3. **Trust bar** — 4.0 ★ / 73 Reviews · Fresh Bakery, Cakes & Sweets · Saeedabad, Karachi · Takeout Available.
4. **Categories** — "Something for Every Craving": Cakes, Sweets, Bakery, Beverages cards.
5. **Featured products** — "Made for Sweet Moments": 4 demo cake concepts with image, name, description, category, "Made to Order / Contact for Price" status and a demo badge. No invented prices.
6. **Custom cakes** — "Your Celebration. Your Cake." with the 3-step process and "Request a Custom Cake" CTA that scrolls to the contact form.
7. **About** — "A Local Favorite in Saeedabad" with the supplied copy and a "Serving the Saeedabad community" label. No invented history.
8. **Reviews** — 4.0 / 5, 73 reviews, paraphrased sentiment themes (bakery items, cakes, sweets, custom birthday cakes) clearly framed as summaries, plus "See More Reviews" pointing at the public Google Maps listing search for the business.
9. **Opening hours** — clean card driven by data, with "Hours may vary on holidays." and a demo/reference note.
10. **Location** — "Come Visit Us" with full address, phone, "Call Now" (tel:) and "Get Directions" (maps link using the address/plus code), plus a styled map/location visual.
11. **Contact** — "Let's Make Your Celebration Sweeter": name, phone, message, optional cake/event inquiry. Client-side validation, then a success state that explicitly says the demo does not send messages and offers the phone number instead.
12. **Footer** — Urdu mark, tagline, nav links, phone, location, "© 2026 Awami Foods. Demo website concept." plus a clear line that this is an unofficial concept.
13. **Floating actions (mobile)** — Call and Directions only. No WhatsApp (unconfirmed).

## Honesty guardrails

- No invented prices, reviews, history, owner, branches, delivery, social accounts, WhatsApp, awards, or superlative claims.
- Subtle "Website Concept • 2026" marker in the nav/footer area; demo badges on product cards; demo notes on hours and the contact form.

## Technical notes

- TanStack Start (project stack). Homepage rewritten at `src/routes/index.tsx`, one component per section under `src/components/`, all copy and business facts centralized in `src/data/bakery.ts` (business, categories, products, reviews, hours) so the owner's real data drops in without touching UI.
- Design tokens (colors, radii, fonts, shadows) defined in `src/styles.css` under `@theme inline` — no hardcoded color utilities in components.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`.
- Scroll animations via a small IntersectionObserver hook (no animation library) to keep JS light; reduced-motion respected.
- Images generated into `src/assets/`, imported as ES modules, below-the-fold images lazy-loaded with explicit dimensions to avoid layout shift.
- SEO: route `head()` with the specified title/description, og/twitter tags, canonical, and Bakery JSON-LD (name, address, phone, hours, aggregateRating 4.0 ★ · 73 Reviews).
- No backend, no database, no auth, no payments.

## Verification

Responsive checks at 360/390/430/768/1024/1440 via headless browser screenshots, console-error check, and a pass over headings, focus states, alt text and contrast.
