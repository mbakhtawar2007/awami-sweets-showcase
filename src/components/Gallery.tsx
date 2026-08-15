import { gallery } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label">Gallery</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">A Look Inside</h2>
          <p className="mt-4 text-muted-foreground">
            How the shop, counters and displays could be presented online. Every image below is a
            placeholder, ready to be replaced with Awami Foods' own photography.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={i * 70}
              className={
                i === 0
                  ? "col-span-2 lg:col-span-2 lg:row-span-2"
                  : i === 4
                    ? "col-span-2 lg:col-span-2"
                    : ""
              }
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "h-56 sm:h-72 lg:h-full lg:min-h-[26rem]" : "h-40 sm:h-52"
                  }`}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-plum/85 to-transparent px-4 pb-3 pt-10 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
