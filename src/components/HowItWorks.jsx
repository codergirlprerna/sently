import { MousePointerClick, MessageCircleHeart, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    icon: MousePointerClick,
    title: "Pick a template",
    desc: "Browse our handcrafted experiences. Each one is built for a different feeling — not just a different occasion. Birthdays, anniversaries, proposals, friendships, Father's Day — we cover it all.",
  },
  {
    n: "02",
    icon: MessageCircleHeart,
    title: "Share your story",
    desc: "WhatsApp or DM us your photos, names, dates, and the moments that matter. No forms, no signups — just a conversation. We turn it into something they'll never forget.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "We build. You send.",
    desc: "Your gift goes live in 24 hours. You get a beautiful link — sently.in/their-name — that works on any device, forever. Want your own domain? We offer that too.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white border-y border-border py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <SectionHeading
            eyebrow="How it works"
            titleLines={[{ plain: "Order in minutes." }, { plain: "", em: "Live in 24 hours." }]}
          />
          <p className="text-[0.85rem] text-muted leading-[1.75] max-w-[280px] md:text-right">
            No tech knowledge needed. Just tell us your story — we handle everything else.
          </p>
        </Reveal>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* connecting line behind the icons, desktop only */}
          <div className="hidden md:block absolute top-[28px] left-[16.5%] right-[16.5%] h-px bg-border" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-border-strong flex items-center justify-center mb-7 shadow-[0_2px_8px_rgba(15,13,11,0.04)]">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.6} />
                  </div>
                  <div className="text-[0.7rem] font-semibold text-accent tracking-wide mb-2">
                    STEP {s.n}
                  </div>
                  <div className="text-[1.15rem] font-semibold mb-3">{s.title}</div>
                  <div className="text-[0.85rem] leading-[1.8] text-muted">{s.desc}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}