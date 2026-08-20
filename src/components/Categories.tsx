import { categories } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

export function Categories() {
  return (
    <section
      id="menu"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal className="max-w-2xl">
        <p className="section-label">Our Counter</p>
        <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
          Something for Every Craving
        </h2>
        <p className="mt-4 text-muted-foreground">
          Discover bakery favourites for everyday moments and special celebrations.
        </p>
      </Reveal>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, i) => (
          <Reveal as="li" key={category.id} delay={i * 90}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={category.image}
                  width={800}
                  height={1000}
                  loading="lazy"
                  alt={`Demo photograph representing ${category.title.toLowerCase()}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-foreground">{category.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
