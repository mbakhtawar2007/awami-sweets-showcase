import aboutImage from "@/assets/about-bakery.jpg";
import { business } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={aboutImage}
                width={1200}
                height={900}
                loading="lazy"
                alt="Demo photograph of a warm bakery interior with display cases"
                className="h-full w-full object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-6 -right-2 hidden font-urdu text-6xl text-caramel/45 sm:block"
            >
              {business.urduName}
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="section-label">About Us</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            A Local Favourite in Saeedabad
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Awami Foods brings together cakes, sweets and bakery favourites for the people of
            Saeedabad and surrounding areas. Whether you're picking up something for your family or
            celebrating a special moment, we're here to make it sweeter.
          </p>
          <span className="mt-6 inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
            Serving the Saeedabad community
          </span>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {business.services.map((service) => (
              <li
                key={service}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
