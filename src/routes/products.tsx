import { createFileRoute } from "@tanstack/react-router";
import sofa from "@/assets/product-sofa.jpg";
import bedroom from "@/assets/product-bedroom.jpg";
import washroom from "@/assets/product-washroom.jpg";
import lamp from "@/assets/product-lamp.jpg";
import keyholder from "@/assets/product-keyholder.jpg";
import mobile from "@/assets/product-mobile.jpg";
import { PageHero } from "@/components/page-hero";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — OX3D" },
      {
        name: "description",
        content:
          "Browse OX3D's catalogue of 3D-printed architectural scale models and home objects: nightlamps, key holders, phone stands and more.",
      },
      { property: "og:title", content: "Products — OX3D" },
      {
        property: "og:description",
        content: "Architectural scale-model sets and 3D-printed home objects.",
      },
    ],
  }),
  component: ProductsPage,
});

const ARCHITECTURAL = [
  {
    img: sofa,
    title: "Living room set",
    desc: "Scale-model sofa, armchairs, coffee table and entertainment unit.",
    tag: "Set of 7 pieces",
  },
  {
    img: bedroom,
    title: "Bedroom set",
    desc: "Bed, wardrobe, nightstand and lamp — perfect for interior layouts.",
    tag: "Set of 4 pieces",
  },
  {
    img: washroom,
    title: "Washroom set",
    desc: "Toilet, sink, bathtub and accessories at architectural scale.",
    tag: "Set of 5 pieces",
  },
];

const HOME_OBJECTS = [
  {
    img: lamp,
    title: "Geodesic nightlamp",
    desc: "Faceted, warm-glow nightlamp printed in translucent PLA.",
    tag: "Home · Lighting",
  },
  {
    img: keyholder,
    title: "Wall key holder",
    desc: "Minimal wall-mounted holder with four neat hooks.",
    tag: "Home · Organisation",
  },
  {
    img: mobile,
    title: "Phone & desk stand",
    desc: "Sturdy angled stand for phones and small tablets.",
    tag: "Desk · Accessory",
  },
];

function ProductGrid({ items }: { items: typeof ARCHITECTURAL }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article
          key={p.title}
          className="group overflow-hidden rounded-xl border border-hairline bg-card transition hover:-translate-y-0.5 hover:border-primary hover:shadow-soft"
        >
          <div className="aspect-square overflow-hidden bg-secondary">
            <img
              src={p.img}
              alt={p.title}
              width={900}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{p.tag}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            A growing catalogue<br />
            of <span className="text-primary">printed</span> objects.
          </>
        }
        description="Two collections — architectural scale models for designers, and small home objects for everyday use. All printed in our studio."
      />

      <section className="container-x py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Collection 01</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink md:text-4xl">Architectural model sets</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Modular furniture sets at architectural scale (1:24 / 1:48). Drop them into
            your model homes and rooms.
          </p>
        </div>
        <ProductGrid items={ARCHITECTURAL} />
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Collection 02</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink md:text-4xl">Home & desk objects</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Functional, well-finished prints for your home and workspace. Built to last,
            packaged with care.
          </p>
        </div>
        <ProductGrid items={HOME_OBJECTS} />
      </section>

      <ContactCTA />
    </>
  );
}