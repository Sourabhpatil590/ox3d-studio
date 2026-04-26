import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OX3D" },
      {
        name: "description",
        content:
          "Get in touch with OX3D for custom 3D prints, architectural models or industrial prototypes. Email contact@0x3d.in or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact — OX3D" },
      {
        property: "og:description",
        content: "Email contact@0x3d.in or message us on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "contact@0x3d.in";
const WHATSAPP_URL = "https://wa.me/919999999999";

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's start<br />
            something <span className="text-primary">tangible</span>.
          </>
        }
        description="Tell us about your project — a file, a sketch, or just an idea. We typically respond within 24 hours."
      />

      <section className="container-x grid gap-6 py-16 md:grid-cols-2 md:py-24">
        <a
          href={`mailto:${EMAIL}`}
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition hover:-translate-y-1 hover:border-ink hover:shadow-elevated md:p-12"
        >
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-ink text-ink-foreground transition group-hover:bg-primary">
              <Mail size={20} />
            </span>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Email us
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink md:text-4xl">{EMAIL}</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Best for project briefs, file attachments and detailed quotes. Include
              dimensions, material preferences and your timeline.
            </p>
          </div>
          <span className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-ink">
            Open mail client <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-gradient-ink p-8 text-ink-foreground transition hover:-translate-y-1 hover:shadow-elevated md:p-12"
        >
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
              <MessageCircle size={20} />
            </span>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Chat on WhatsApp
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Message us directly</h2>
            <p className="mt-4 max-w-md text-ink-foreground/70">
              Best for quick questions, status updates and small jobs. Drop us a message
              and we'll reply during business hours.
            </p>
          </div>
          <span className="mt-10 inline-flex items-center gap-1 text-sm font-medium">
            Open WhatsApp <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
        </a>
      </section>

      <section className="border-t border-hairline bg-secondary">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-card text-ink">
              <Clock size={18} />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Hours</p>
              <p className="mt-1 text-ink">Mon – Sat · 10am to 7pm IST</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-card text-ink">
              <Mail size={18} />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 block text-ink hover:text-primary">{EMAIL}</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-card text-ink">
              <MapPin size={18} />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Location</p>
              <p className="mt-1 text-ink">India · shipping worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}