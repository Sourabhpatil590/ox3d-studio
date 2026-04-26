import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ContactCTA() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-ink p-8 md:p-14">
        <div className="relative z-10 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Have a project?
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-ink-foreground md:text-5xl">
              Let's print your idea.
            </h2>
            <p className="mt-4 max-w-xl text-ink-foreground/70">
              Send us your file, sketch or floor plan. We'll review the brief and reply
              with a timeline and quote — usually within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contact@0x3d.in"
              className="group inline-flex items-center justify-between rounded-lg bg-primary px-5 py-4 text-primary-foreground transition hover:brightness-110"
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <Mail size={16} /> contact@0x3d.in
              </span>
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between rounded-lg border border-white/15 px-5 py-4 text-ink-foreground transition hover:border-primary"
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <MessageCircle size={16} /> WhatsApp us
              </span>
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              to="/contact"
              className="text-center text-sm text-ink-foreground/60 hover:text-primary"
            >
              Or visit the contact page →
            </Link>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        />
      </div>
    </section>
  );
}