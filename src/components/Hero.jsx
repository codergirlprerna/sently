import { motion } from "framer-motion";
import { Sparkles, Film, BookOpen, Gift } from "lucide-react";
import { handleAnchorClick } from "../lib/scroll";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const thumbs = [
  { key: "universe", Icon: Sparkles, grad: "from-[#241a45] via-[#3b2566] to-[#1a1238]" },
  { key: "lumina", Icon: Film, grad: "from-[#3a1510] via-[#5c2418] to-[#200c08]" },
  { key: "book", Icon: BookOpen, grad: "from-[#3a2c10] via-[#54401a] to-[#1a1508]" },
  { key: "scratch", Icon: Gift, grad: "from-[#0a3020] via-[#0f4a30] to-[#061a14]" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-[100px] sm:pt-[120px] md:pt-[140px] pb-16 md:pb-24 px-5 md:px-10 max-w-[1200px] mx-auto min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT */}
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-[7px] bg-accent/[0.08] border border-accent/[0.15] rounded-full px-4 py-[6px] mb-8"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-accent" />
            <span className="text-[0.7rem] text-accent font-medium tracking-wide">
              Personalized websites as gifts
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[2.2rem] sm:text-[2.8rem] md:text-[4.2rem] leading-[1.12] tracking-tight mb-6"
          >
            We build a <em className="italic text-accent">website</em>
            <br />
            for the person you love.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-[1rem] leading-[1.75] text-muted max-w-[420px] mb-10"
          >
            Not a card. Not a reel. A real, live website — personalized with your photos, your story, your moments. They get one link. It lasts forever.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
            <a
              href="#templates"
              onClick={(e) => handleAnchorClick(e, "templates")}
              className="inline-flex items-center gap-2 bg-ink text-white px-8 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:bg-ink-soft hover:-translate-y-0.5 transition-all"
            >
              Browse templates <span className="opacity-60">→</span>
            </a>
            <a
              href="#how"
              onClick={(e) => handleAnchorClick(e, "how")}
              className="inline-flex items-center bg-white text-ink border border-border-strong px-7 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:border-ink hover:-translate-y-0.5 transition-all"
            >
              How it works
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-4 mt-10 pt-10 border-t border-border"
          >
            <div className="flex">
              {["A", "R", "S", "P"].map((l, i) => (
                <div
                  key={l}
                  className="w-[30px] h-[30px] rounded-full bg-bg-soft border-2 border-bg flex items-center justify-center text-[0.7rem] text-muted font-medium"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-[0.78rem] text-muted">
              Loved by couples, friends & families —{" "}
              <strong className="text-ink font-semibold">perfect for any occasion</strong>
            </p>
          </motion.div>
        </div>

        {/* RIGHT — preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-5 bg-accent text-white px-4 py-[0.4rem] rounded-full text-[0.7rem] font-semibold tracking-wide shadow-[0_4px_16px_rgba(196,68,12,0.35)] z-10"
          >
            ✨ Live in 24hrs
          </motion.div>

          <div className="bg-white rounded-[20px] border border-border overflow-hidden shadow-[0_24px_60px_rgba(15,13,11,0.1),0_4px_16px_rgba(15,13,11,0.06)]">
            <div className="bg-ink-soft px-[1.4rem] py-4 flex items-center gap-[0.6rem]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
              <div className="flex-1 bg-white/[0.08] rounded-md px-3 py-[0.3rem] text-center text-[0.72rem] text-white/45">
                sently.in/<span className="text-white/75">rohit-and-aanya</span>
              </div>
            </div>
            <div className="p-8">
              <div className="text-[0.65rem] tracking-[0.12em] uppercase text-faint mb-[0.6rem]">
                Your personalized gift
              </div>
              <div className="font-display text-[1.6rem] leading-[1.3] mb-5">
                A world built
                <br />
                just for <em className="italic text-accent">you two.</em>
              </div>
              <div className="grid grid-cols-2 gap-[0.6rem] mb-6">
                {thumbs.map((t) => (
                  <div
                    key={t.key}
                    className={`h-20 rounded-[10px] bg-gradient-to-br ${t.grad} flex items-center justify-center`}
                  >
                    <t.Icon className="w-6 h-6 text-white/75" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              <a
                href="#templates"
                onClick={(e) => handleAnchorClick(e, "templates")}
                className="block w-full text-center bg-ink text-white py-[0.85rem] rounded-[10px] text-[0.82rem] font-medium hover:bg-ink-soft transition-colors"
              >
                Choose your template →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}