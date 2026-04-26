import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Box, Building2, Layers, Ruler } from "lucide-react";
import heroImg from "@/assets/hero-model.jpg";
import printerImg from "@/assets/printer.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productMobile from "@/assets/product-mobile.jpg";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OX3D — Precision 3D Prototyping Studio" },
      {
        name: "description",
        content:
          "OX3D is a precision 3D prototyping studio: custom prints, scale models from floor plans, and infrastructure prototypes.",
      },
      { property: "og:title", content: "OX3D — Precision 3D Prototyping Studio" },
      {
        property: "og:description",
        content:
          "Custom 3D prints, architectural scale models and industrial prototypes — crafted with precision.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-24">
          <div className="anim-fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Precision 3D Prototyping
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.02] text-ink md:text-7xl lg:text-[5.5rem]">
              From idea<br />
              to <span className="text-primary">tangible</span> object.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We transform sketches, files and floor plans into precise 3D-printed models —
              for architects, engineers and anyone who needs an idea in their hands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition hover:bg-primary"
              >
                Explore services <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-ink px-6 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-ink-foreground"
              >
                Request a quote
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-hairline pt-8">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Layer res.</dt>
                <dd className="mt-1 text-2xl font-semibold text-ink">0.05<span className="text-base text-muted-foreground">mm</span></dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Lead time</dt>
                <dd className="mt-1 text-2xl font-semibold text-ink">48<span className="text-base text-muted-foreground">hr</span></dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Materials</dt>
                <dd className="mt-1 text-2xl font-semibold text-ink">12+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-elevated">
              <img
                src={heroImg}
                alt="3D printed white architectural model of a modern house"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-hairline bg-card p-4 shadow-soft md:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Project · 023
              </p>
              <p className="mt-1 text-sm font-medium text-ink">Residential scale model</p>
              <p className="text-xs text-muted-foreground">1:50 · PLA · 36 hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-b border-hairline bg-secondary py-5">
        <div className="flex whitespace-nowrap font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              <span>Architectural Models</span><span className="text-primary">◆</span>
              <span>Custom 3D Prints</span><span className="text-primary">◆</span>
              <span>Floor Plan to Model</span><span className="text-primary">◆</span>
              <span>Industrial Prototyping</span><span className="text-primary">◆</span>
              <span>Functional Parts</span><span className="text-primary">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Services</p>
            <h2 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
              What we make.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Three core capabilities, one studio. Whether you bring a STL file or a
              napkin sketch, we'll handle the rest.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 hover:text-primary hover:underline"
            >
              See all services <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: Box,
                title: "Custom 3D printing",
                desc: "Send us your STL/STEP/OBJ file. We quote based on size, material and finish.",
              },
              {
                icon: Ruler,
                title: "Floor plan to home model",
                desc: "Hand us a floor plan and we'll deliver a precise scale model of the home.",
              },
              {
                icon: Building2,
                title: "Infrastructure prototyping",
                desc: "Residential and industrial scale models for proposals, reviews and demos.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group flex items-start gap-5 rounded-xl border border-hairline bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-soft"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-secondary text-ink transition group-hover:bg-ink group-hover:text-ink-foreground">
                  <s.icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / IMAGE */}
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">The process</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Engineered in pixels.<br />Crafted in plastic.
            </h2>
            <ol className="mt-10 space-y-6">
              {[
                ["01", "Brief", "Share your file, sketch or floor plan."],
                ["02", "Quote", "We propose size, material, finish and price."],
                ["03", "Print", "Sliced, calibrated and printed in our studio."],
                ["04", "Deliver", "Quality-checked and shipped to your door."],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex gap-6 border-t border-white/10 pt-6">
                  <span className="font-mono text-sm text-primary">{num}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-ink-foreground/70">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={printerImg}
              alt="High-precision 3D printer producing an architectural model"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Featured products</p>
            <h2 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">Print, on a shelf.</h2>
          </div>
          <Link
            to="/products"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-ink hover:text-primary md:inline-flex"
          >
            All products <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: productSofa, tag: "Architectural", title: "Living room scale set" },
            { img: productLamp, tag: "Home object", title: "Geodesic nightlamp" },
            { img: productMobile, tag: "Desk", title: "Minimal phone stand" },
          ].map((p) => (
            <article key={p.title} className="group">
              <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.tag}</p>
                <Layers size={14} className="text-muted-foreground" />
              </div>
              <h3 className="mt-1 text-lg font-medium text-ink">{p.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
