import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const methods = [
  {
    icon: "📲",
    label: "WhatsApp us",
    sub: "Message → share photos & details → pay via UPI → live in 24hrs",
    chip: "Easiest",
  },
  {
    icon: "📸",
    label: "Instagram DM",
    sub: "DM us @sently.in — we respond within the hour",
  },
  {
    icon: "💸",
    label: "Pay via UPI",
    sub: "GPay / PhonePe / any UPI — instant & secure",
  },
];

export default function Payment() {
  return (
    <section id="order" className="py-20 md:py-28 px-5 md:px-10 bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-start">
        <Reveal>
          <SectionHeading
            eyebrow="How to order"
            titleLines={[{ plain: "No forms." }, { plain: "", em: "Just a message." }]}
          />
          <p className="text-[0.9rem] leading-[1.8] text-muted mt-4">
            No account needed. No complicated checkout. Just message us on WhatsApp or Instagram with your template choice — we'll take it from there.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col gap-[0.6rem]">
            {methods.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-bg hover:bg-bg-soft hover:border-ink hover:translate-x-1 transition-all duration-250 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center text-[1rem] shrink-0">
                  {m.icon}
                </div>
                <div>
                  <div className="text-[0.83rem] font-medium">{m.label}</div>
                  <div className="text-[0.71rem] text-muted">{m.sub}</div>
                </div>
                {m.chip && (
                  <span className="ml-auto text-[0.6rem] font-semibold tracking-wide px-[0.6rem] py-1 rounded-full bg-accent/[0.08] text-accent border border-accent/15 whitespace-nowrap shrink-0">
                    {m.chip}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 p-5 rounded-xl bg-bg border border-border text-[0.78rem] text-muted leading-[1.7]">
            <strong className="text-ink font-medium">Want your own domain?</strong> Options like rohit.love or aanya.site are available as an add-on. Just mention it when you order and we'll help you set it up.
          </div>
        </Reveal>
      </div>
    </section>
  );
}