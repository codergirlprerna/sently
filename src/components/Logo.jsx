export default function Logo({ variant = "dark", className = "" }) {
  const isLight = variant === "light";
  const fill = isLight ? "#f7f5f2" : "#0f0d0b";
  const strokeAccent = isLight ? "#0f0d0b" : "#f7f5f2";
  const textColor = isLight ? "text-bg" : "text-ink";

  return (
    <div className={`flex items-center gap-[9px] ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" className="shrink-0">
        <path
          d="M3 5.5L29 13.5L16 18.5L11.5 28.5L3 5.5Z"
          fill={fill}
          stroke={fill}
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <path d="M16 18.5L29 13.5" stroke={strokeAccent} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22.5" cy="7.5" r="2" fill="#c4440c" />
      </svg>
      <span className={`font-sans font-semibold text-[1.05rem] tracking-tight ${textColor}`}>
        sently
      </span>
    </div>
  );
}
