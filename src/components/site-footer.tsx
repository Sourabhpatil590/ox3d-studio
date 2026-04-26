import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919999999999";
const EMAIL = "contact@0x3d.in";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-hairline bg-ink text-ink-foreground">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight">
              OX<span className="text-primary">3D</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">
              A precision 3D prototyping studio. We turn floor plans, sketches and ideas
              into tangible scale models and end-use prints.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-foreground/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-foreground/50">
              Reach us
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail size={14} /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-foreground/50">
              Studio
            </p>
            <p className="mt-4 text-sm text-ink-foreground/70">
              Made in India.<br />
              Shipping prototypes worldwide.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} OX3D. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.18em]">
            Precision · Speed · Detail
          </span>
        </div>
      </div>
    </footer>
  );
}