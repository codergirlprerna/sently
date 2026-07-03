import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    tag: "Essential",
    name: "Scratch Card",
    desc: "Perfect for a sweet surprise. Great for birthdays, small celebrations, and fun gifts.",
    features: [
      "Interactive scratch reveal",
      "Your photos & message",
      "Hosted on sently.in link",
      "Ready in 24 hours",
    ],
    popular: false,
  },
  {
    tag: "Immersive",
    name: "Universe / Babe Site",
    desc: "A full world built for someone. Animations, sound, your story woven throughout.",
    features: [
      "Full animated experience",
      "Unlimited photos & moments",
      "Background music",
      "Hosted on sently.in link",
      "Ready in 24 hours",
    ],
    popular: true,
  },
  {
    tag: "Cinematic",
    name: "Lumina",
    desc: "Our most premium experience. Nine scenes, parallax, ambient sound — a film about them.",
    features: [
      "9-scene cinematic build",
      "Parallax animations",
      "Spatial ambient sound",
      "Custom domain available",
      "Priority delivery",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="mb-14">
          <SectionHeading
            eyebrow="Pricing"
            titleLines={[{ plain: "Simple pricing." }, { plain: "", em: "No surprises." }]}
            dark
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.06]">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`bg-ink-soft p-9 relative hover:bg-[#1f1c18] transition-colors duration-300 ${
                  t.popular ? "border border-accent-soft/25" : ""
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-soft text-ink text-[0.62rem] font-bold tracking-wider px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-[0.63rem] tracking-[0.1em] uppercase text-white/35 font-medium mb-4">
                  {t.tag}
                </div>
                <div className="font-display text-[1.5rem] text-bg mb-2">{t.name}</div>
                <div className="text-[0.78rem] leading-[1.7] text-white/45 mb-6">{t.desc}</div>
                <div className="flex flex-col gap-2 mb-8">
                  {t.features.map((f) => (
                    <div key={f} className="text-[0.78rem] text-white/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-soft shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="font-display text-[2rem] text-bg mb-1">Coming soon</div>
                <div className="text-[0.72rem] text-white/30">Pricing will be announced shortly</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center mt-6 text-[0.78rem] text-white/25">
            Want your own domain (like rohit.love)? Add-on available at cost. Ask us when ordering.
          </p>
        </Reveal>
      </div>
    </section>
  );
}