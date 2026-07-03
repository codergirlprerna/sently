export default function SectionHeading({ eyebrow, titleLines, dark = false }) {
  return (
    <div>
      <div
        className={`text-[0.68rem] tracking-[0.18em] uppercase mb-3 font-medium ${
          dark ? "text-white/40" : "text-accent"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`font-display text-[1.85rem] sm:text-[2rem] md:text-[3rem] leading-[1.12] tracking-tight ${
          dark ? "text-bg" : "text-ink"
        }`}
      >
        {titleLines.map((line, i) => (
          <span key={i}>
            {line.plain}
            {line.em && <em className={`italic ${dark ? "text-accent-soft" : "text-accent"}`}>{line.em}</em>}
            {i < titleLines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </div>
  );
}