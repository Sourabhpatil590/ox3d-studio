import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Target, Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OX3D" },
      {
        name: "description",
        content:
          "OX3D is a young 3D prototyping studio building precision models, prototypes and home objects for clients across India and beyond.",
      },
      { property: "og:title", content: "About — OX3D" },
      {
        property: "og:description",
        content: "A new studio with a clear obsession: turning ideas into precise, tangible objects.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About / 2024"
        title={
          <>
            A young studio<br />
            with a <span className="text-primary">large</span> obsession.
          </>
        }
      />

      <section className="container-x grid gap-12 py-16 md:grid-cols-[1fr_1.4fr] md:gap-20 md:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Our story</p>
          <div aria-hidden className="mt-4 h-px w-12 bg-ink" />
        </div>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            OX3D started as a small studio with a single 3D printer, a few sketches and a
            simple belief: <span className="text-ink">every great idea deserves to be held in the hand</span>.
          </p>
          <p>
            We are a new and growing startup focused on precision 3D printing and
            prototyping. From custom one-off prints to architectural scale models built
            from floor plans, we work closely with each client — there is no automated
            pipeline here, only people who care about the detail.
          </p>
          <p>
            Today we serve architects, interior designers, real-estate developers,
            engineers, students and homeowners. Tomorrow, we want to be the studio every
            creator messages first when an idea needs to leave the screen.
          </p>
        </div>
      </section>

      <section className="border-y border-hairline bg-secondary py-20 md:py-24">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">What we value</p>
          <h2 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">Three principles.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Precision over speed",
                desc: "We will take an extra day to dial in tolerances rather than ship a print we wouldn't keep ourselves.",
              },
              {
                icon: Heart,
                title: "Honest pricing",
                desc: "Transparent quotes based on volume, material and finish — no inflated minimums, no surprises.",
              },
              {
                icon: Sparkles,
                title: "Care in the craft",
                desc: "Every print is hand-finished, inspected and packaged. The unboxing matters as much as the part.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-hairline bg-card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-ink text-ink-foreground">
                  <v.icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-4">
          {[
            ["2024", "Founded"],
            ["50+", "Models printed"],
            ["12+", "Materials in stock"],
            ["100%", "Hand-finished"],
          ].map(([num, label]) => (
            <div key={label} className="border-t border-hairline pt-6">
              <div className="text-5xl font-semibold text-ink">{num}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}