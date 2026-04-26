import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-hairline bg-background">
      <div className="container-x grid gap-6 py-16 md:grid-cols-[1fr_1.6fr] md:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
          <div aria-hidden className="mt-6 h-px w-12 bg-ink" />
        </div>
        <div className="anim-fade-up">
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}