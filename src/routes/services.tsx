import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import customImg from "@/assets/service-custom.jpg";
import floorImg from "@/assets/service-floorplan.jpg";
import infraImg from "@/assets/service-infra.jpg";
import { PageHero } from "@/components/page-hero";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — OX3D" },
      {
        name: "description",
        content:
          "Custom 3D printing, home models from floor plans, and residential & industrial prototyping by OX3D.",
      },
      { property: "og:title", content: "Services — OX3D" },
      {
        property: "og:description",
        content: "Three core 3D prototyping services for architects, engineers and creators.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "custom",
    num: "01",
    title: "Custom 3D printing",
    image: customImg,
    intro:
      "Bring your own design. Send us a 3D file and we'll print it with the right material, layer height and finish for your use case — from one-off concept models to functional end-use parts.",
    bullets: [
      "Accepted file formats: STL, STEP, OBJ, 3MF",
      "Materials: PLA, PETG, ABS, TPU, Nylon, resin (SLA)",
      "Layer resolution from 0.05mm for fine detail",
      "Post-processing: sanding, priming, painting, assembly",
    ],
    pricing:
      "Pricing is based on volume, material and finish. Share your file and we'll send a transparent quote with size options.",
  },
  {
    id: "floorplan",
    num: "02",
    title: "Floor plan → home model",
    image: floorImg,
    intro:
      "Send us a floor plan — PDF, hand-drawn, or CAD — and we'll model and 3D print a precise scale model of the home. Ideal for architects pitching to clients, builders showcasing layouts, or homeowners visualising their build before construction begins.",
    bullets: [
      "Accurate to architectural drawings (DWG / PDF / sketch)",
      "Standard scales: 1:50, 1:75, 1:100 (custom on request)",
      "Optional removable roof to reveal interior layout",
      "Site, landscaping and context tiles available",
    ],
    pricing:
      "Quote depends on built-up area, level of detail and scale. Most homes are delivered in 7–14 days.",
  },
  {
    id: "infra",
    num: "03",
    title: "Residential & industrial prototyping",
    image: infraImg,
    intro:
      "Larger-scale prototyping for real-estate developers, architects, urban planners and industrial firms. We build presentation-grade scale models of housing societies, factories, plants and infrastructure for proposals, reviews and exhibitions.",
    bullets: [
      "Multi-building township and site master plans",
      "Factory, warehouse and pipeline layouts",
      "Modular tile-based assembly for large footprints",
      "Branding inserts, labels and lighting on request",
    ],
    pricing:
      "Industrial projects are scoped individually. Share your brief and we'll respond with phased pricing and timelines.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / 03"
        title={
          <>
            Three ways<br />we bring ideas <span className="text-primary">into form</span>.
          </>
        }
        description="From a single custom print to a full city block, every project starts with a brief and ends with something you can hold."
      />

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={i % 2 === 0 ? "border-b border-hairline" : "bg-secondary border-b border-hairline"}
        >
          <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-card shadow-soft">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1000}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                Service {s.num}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{s.title}</h2>
              <p className="mt-5 text-muted-foreground">{s.intro}</p>
              <ul className="mt-7 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-lg border-l-2 border-primary bg-card p-4 text-sm text-muted-foreground">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink">Pricing · </span>
                {s.pricing}
              </div>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-ink-foreground transition hover:bg-primary"
              >
                Discuss this project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </>
  );
}