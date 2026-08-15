import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { business } from "@/data/bakery";
import { Reveal } from "@/components/Reveal";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length < 7) next.phone = "Please enter a valid phone number.";
    if (message.length < 5) next.message = "Please tell us a little about your request.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-caramel focus:outline-none";

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-secondary/50 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Contact</p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Let's Make Your Celebration Sweeter
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share your idea and we'll help you plan the cake or order you have in mind.
            </p>
            <a
              href={business.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-burgundy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phone}
            </a>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted-foreground">
              This form is part of a website concept and does not send messages yet. Calling the
              bakery directly is the fastest way to reach them today.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {submitted ? (
              <div
                role="status"
                className="flex h-full flex-col items-start justify-center rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <CheckCircle2 className="h-9 w-9 text-caramel" aria-hidden="true" />
                <h3 className="mt-4 font-display text-3xl text-foreground">
                  Your details look good
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thanks! This is a website concept, so this form does not currently send
                  messages. Please call 0323 2810084 to contact Awami Foods.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {business.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-caramel hover:text-caramel"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="03xx xxxxxxx"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="occasion" className="text-sm font-medium text-foreground">
                    Cake / event enquiry <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <select id="occasion" name="occasion" className={fieldClass}>
                    <option value="">Select an option</option>
                    <option value="birthday">Birthday cake</option>
                    <option value="custom">Custom cake design</option>
                    <option value="sweets">Sweets order</option>
                    <option value="bakery">Bakery items</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your celebration…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-burgundy"
                >
                  Send Inquiry
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Demo form — messages are not delivered.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
