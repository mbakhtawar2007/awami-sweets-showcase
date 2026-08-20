# Awami Foods Showcase

A premium, production-quality showcase website for **Awami Foods (عوامی)** — a neighbourhood bakery in Saeedabad, Karachi, Pakistan.

This is a concept/demo site built to show what Awami Foods' professional online presence could look like. Business details, categories, products and hours are centralized in `src/data/bakery.ts` so they can be swapped for official information later without touching the UI.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) — SSR-ready app framework
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — custom warm bakery design system in `src/styles.css`
- [Lucide](https://lucide.dev) icons
- [Bun](https://bun.sh) — package manager and runtime

## Project Structure

```
src/
├── components/     # Page sections (Navbar, Hero, Categories, Contact, ...)
├── data/           # Centralized business, categories, products & hours data
├── hooks/          # Lightweight scroll-reveal hook
├── lib/            # Utilities, SSR error handling, error reporting
├── assets/         # Placeholder photography
├── routes/         # TanStack file-based routing (__root + index)
├── router.tsx      # Router + QueryClient setup
├── server.ts       # SSR entry with error handling
└── start.ts        # TanStack Start instance (middleware + CSRF)
```

## Getting Started

Requires [Bun](https://bun.sh) (or Node.js 18+).

```sh
bun install
bun run dev      # start the dev server at http://localhost:8080
```

### Scripts

| Command            | Description                             |
| ------------------ | --------------------------------------- |
| `bun run dev`      | Start the Vite dev server               |
| `bun run build`    | Production build (client + server)      |
| `bun run preview`  | Preview the production build            |
| `bun run lint`     | ESLint + Prettier checks                |
| `bun run format`   | Format all files with Prettier          |

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/56e0ead1-3584-4779-a0ef-f56507ef2ef5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.