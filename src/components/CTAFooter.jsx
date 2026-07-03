import Reveal from "./Reveal";
import Logo from "./Logo";
import { handleAnchorClick } from "../lib/scroll";

export function CTA() {
  return (
    <section className="py-24 md:py-36 px-5 md:px-10 text-center border-t border-border bg-bg-soft">
      <Reveal className="max-w-[700px] mx-auto">
        <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] md:text-[5rem] leading-[1.1] tracking-tight mb-5">
          Someone deserves
          <br />
          a <em className="italic text-accent">website</em> today.
        </h2>
        <p className="text-[0.92rem] text-muted leading-[1.75] mb-12">
          Birthdays. Anniversaries. Father's Day. Long distance. Proposals. Just because.
          <br />
          Whatever the occasion — we'll build them something they'll never forget.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#templates"
            onClick={(e) => handleAnchorClick(e, "templates")}
            className="bg-ink text-white px-8 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:bg-ink-soft hover:-translate-y-0.5 transition-all"
          >
            Browse templates →
          </a>
          <a
            href="#order"
            onClick={(e) => handleAnchorClick(e, "order")}
            className="bg-white text-ink border border-border-strong px-7 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:border-ink hover:-translate-y-0.5 transition-all"
          >
            Order on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 md:px-10 py-8 md:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 flex-wrap">
      <Logo variant="light" />
      <div className="flex gap-5 md:gap-8 flex-wrap">
        {["Templates", "How it works", "Pricing", "Instagram", "WhatsApp"].map((l) => (
          <a key={l} href="#" className="text-[0.75rem] text-white/40 hover:text-white/80 transition-colors">
            {l}
          </a>
        ))}
      </div>
      <p className="text-[0.7rem] text-white/60">© {new Date().getFullYear()} Sently · Made with love in India</p>
    </footer>
  );
}