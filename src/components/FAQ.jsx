import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { handleAnchorClick } from "../lib/scroll";

const faqs = [
  {
    q: "What exactly am I getting?",
    a: "A real, live website — built with animations, your photos, and your story. You get a unique link (like sently.in/their-name) that you can send to anyone. It's not a PDF, a video, or a Canva design — it's an actual functioning website.",
  },
  {
    q: "How long does it take to get my gift?",
    a: "Once you've shared your story and details with us, your site goes live within 24 hours. Most orders are actually completed in under 6 hours.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. Just message us on WhatsApp or Instagram with your photos and the moments that matter — we handle the entire build, start to finish.",
  },
  {
    q: "Can I use this for anyone, not just couples?",
    a: "Yes. While templates like Babe Site and Universe are popular for couples, we build for friends, family, and any relationship that matters — including Father's Day, friendships, and celebrations of any kind.",
  },
  {
    q: "Will the link work forever?",
    a: "Yes, your gift is hosted permanently on a sently.in link with no expiry. If you'd like your own custom domain instead (like rohit.love), that's available as an add-on — just mention it when ordering.",
  },
  {
    q: "How do I pay?",
    a: "We don't use a complicated checkout. You can pay directly via UPI, GPay, or PhonePe once we confirm your order details over WhatsApp or Instagram DM.",
  },
  {
    q: "Can I see a preview before paying?",
    a: "Template previews (screenshots and short clips) will be available soon directly on this site. In the meantime, feel free to ask us for examples when you message us.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span
          className={`text-[0.95rem] font-medium transition-colors duration-200 ${
            isOpen ? "text-accent" : "text-ink group-hover:text-accent"
          }`}
        >
          {faq.q}
        </span>
        <Plus
          className={`w-5 h-5 shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-45 text-accent" : ""
          }`}
          strokeWidth={1.8}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="text-[0.85rem] leading-[1.8] text-muted pb-6 pr-10">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 px-6 md:px-10 border-t border-border bg-white">
      <div className="max-w-[800px] mx-auto">
        <Reveal className="mb-14 text-center">
          <SectionHeading
            eyebrow="Questions"
            titleLines={[{ plain: "Everything you" }, { plain: "", em: "need to know." }]}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="text-center mt-10">
          <p className="text-[0.85rem] text-muted">
            Still have questions?{" "}
            <a
              href="#order"
              onClick={(e) => handleAnchorClick(e, "order")}
              className="text-accent font-medium hover:underline"
            >
              Message us directly
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}