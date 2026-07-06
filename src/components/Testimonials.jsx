import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    quote: "I sent him the Universe template for our anniversary. He texted 'I can't believe you did this' at 1am. Best money I ever spent.",
    name: "Aanya M.",
    occ: "Universe · Anniversary",
    initials: "AM",
    color: "bg-[#3b2566] text-white",
  },
  {
    quote: "Long distance is hard but Lumina made it feel like I was right there. She's watched it more than twelve times.",
    name: "Rohan K.",
    occ: "Lumina · Long distance",
    initials: "RK",
    color: "bg-[#5c2418] text-white",
  },
  {
    quote: "My best friend cried, her mom cried, I cried. Our Journey had all our stupid inside jokes. Nothing else could've done this.",
    name: "Simran T.",
    occ: "Our Journey · Birthday",
    initials: "ST",
    color: "bg-[#5c1c28] text-white",
  },
  {
    quote: "He proposed using the Scratch Card. I still have the link saved. I open it sometimes just to feel it again.",
    name: "Priya S.",
    occ: "Scratch Card · Proposal",
    initials: "PS",
    color: "bg-[#0f4a30] text-white",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="What people say"
            titleLines={[{ plain: "They cried." }, { plain: "", em: "The good kind." }]}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-4 md:gap-5 mt-14 overflow-x-auto no-scrollbar pb-4 [touch-action:pan-x] [-webkit-overflow-scrolling:touch]">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="min-w-[300px] sm:min-w-[320px] rounded-2xl border border-border bg-white p-7 md:p-8 shrink-0 hover:border-border-strong hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,13,11,0.08)] transition-all duration-300"
              >
                <div className="text-[#d4920c] text-[0.65rem] tracking-[3px] mb-4">★★★★★</div>
                <div className="font-display italic text-[1rem] leading-[1.72] text-ink-soft mb-6">
                  "{r.quote}"
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${r.color} flex items-center justify-center text-[0.65rem] font-semibold shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-[0.75rem] font-semibold">{r.name}</div>
                    <div className="text-[0.7rem] text-muted mt-[1px]">{r.occ}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}