import { Reveal } from "@/components/Reveal";

const steps = [
  { number: "01", title: "Share Your Idea", copy: "Tell us what you have in mind." },
  {
    number: "02",
    title: "Choose Your Style",
    copy: "Pick your preferred design, flavour or theme.",
  },
  { number: "03", title: "Make It Special", copy: "Create a cake for your memorable moment." },
];

export function CustomCake() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-caramel/25 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
            Custom Cakes
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Your Celebration. Your Cake.</h2>
          <p className="mt-4 text-primary-foreground/75">
            From birthdays to special celebrations, create a cake that feels uniquely yours.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 120}>
              <div className="border-t border-primary-foreground/20 pt-6">
                <span className="font-display text-4xl text-gold">{step.number}</span>
                <h3 className="mt-3 font-display text-2xl text-primary-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={160} className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request a Custom Cake
          </a>
          <p className="mt-3 text-xs text-primary-foreground/60">
            Opens the enquiry form below — online ordering is not part of this concept yet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
