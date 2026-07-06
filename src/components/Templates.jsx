import { Sparkles, Film, BookOpen, Gift, Heart, Cake } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const templates = [
  {
    num: "01",
    tag: "Universe · Stars · Bioluminescent",
    name: "Universe",
    desc: "A galaxy built from your memories. Each star is a moment — a song, a place, a night. They discover new ones every time they visit. Perfect for anniversaries and long distance love.",
    icon: Sparkles,
    grad: "from-[#241a45] via-[#3b2566] to-[#1a1238]",
  },
  {
    num: "02",
    tag: "Cinematic · Scroll · Sound",
    name: "Lumina",
    desc: "Nine scenes. Parallax depth. Ambient sound. Your story told like a film.",
    icon: Film,
    grad: "from-[#3a1510] via-[#5c2418] to-[#200c08]",
  },
  {
    num: "03",
    tag: "Book · Page flip · Warm",
    name: "The Book",
    desc: "A love letter that turns pages. Candlelit, personal, forever.",
    icon: BookOpen,
    grad: "from-[#3a2c10] via-[#54401a] to-[#1a1508]",
  },
  {
    num: "04",
    tag: "Surprise · Interactive",
    name: "Scratch Card",
    desc: "They scratch. They reveal. Pure joy in one gesture — great for birthdays and proposals.",
    icon: Gift,
    grad: "from-[#0a3020] via-[#0f4a30] to-[#061a14]",
  },
  {
    num: "05",
    tag: "Couples · Friends · Intimate",
    name: "Our Journey",
    desc: "Your photos, your chaos, your inside jokes — in one place built just for the two of you. Works for couples, best friends, and anyone who deserves their own corner of the internet.",
    icon: Heart,
    grad: "from-[#3a1018] via-[#5c1c28] to-[#200810]",
  },
  {
    num: "06",
    tag: "Birthday · Scenes · Playful",
    name: "Birthday Site",
    desc: "18 scenes built like a story only they'd get — flip-card quizzes, spin-the-wheel memories, locked photo riddles, and candles to blow out. Built for chaos and inside jokes, not sentimentality.",
    icon: Cake,
    grad: "from-[#4a2410] via-[#7a4018] to-[#241206]",
  },
];

function TemplateCard({ t }) {
  const Icon = t.icon;
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative h-[180px] rounded-2xl bg-gradient-to-br ${t.grad} overflow-hidden mb-5 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1.5`}
      >
        <Icon className="w-9 h-9 text-white/70 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} />
        <span className="absolute top-4 right-4 font-display text-[2.5rem] leading-none text-white/10">
          {t.num}
        </span>
        <span className="absolute bottom-4 left-4 text-[0.65rem] font-medium bg-white/10 backdrop-blur-sm text-white/70 px-3 py-1 rounded-full">
          Preview coming soon
        </span>
      </div>

      <div className="text-[0.63rem] tracking-[0.1em] uppercase text-accent font-medium mb-[0.5rem]">
        {t.tag}
      </div>
      <div className="font-display text-[1.5rem] leading-[1.2] mb-2 flex items-center gap-2">
        {t.name}
        <span className="text-[0.9rem] text-accent opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          ↗
        </span>
      </div>
      <div className="text-[0.8rem] leading-[1.7] text-muted">{t.desc}</div>
    </div>
  );
}

export default function Templates() {
  const row1 = templates.slice(0, 3);
  const row2 = templates.slice(3);

  return (
    <section id="templates" className="py-28 px-6 md:px-10 max-w-[1200px] mx-auto">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <SectionHeading
          eyebrow="Our templates"
          titleLines={[{ plain: "Six experiences." }, { plain: "", em: "Infinite occasions." }]}
        />
        <p className="text-[0.82rem] text-muted leading-[1.7] max-w-[260px] md:text-right">
          Each template is a real, animated website — not a PDF or a Canva card. We add your content, your photos, your story.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="grid md:grid-cols-3 gap-10 mb-14">
        {row1.map((t) => (
          <TemplateCard key={t.num} t={t} />
        ))}
      </Reveal>

      <Reveal delay={0.15} className="grid md:grid-cols-3 gap-10">
        {row2.map((t) => (
          <TemplateCard key={t.num} t={t} />
        ))}
      </Reveal>
    </section>
  );
}