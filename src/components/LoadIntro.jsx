import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] bg-bg flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* the whole lockup (plane + wordmark) flies in together as one group,
              so spacing between them is always correct, no overlap possible */}
          <motion.div
            className="flex items-center gap-[9px]"
            initial={{
              x: "-40vw",
              y: "14vh",
              rotate: -10,
              scale: 0.85,
              opacity: 0,
            }}
            animate={{
              x: ["-40vw", "-20vw", "-5vw", "0vw"],
              y: ["14vh", "7vh", "1vh", "0vh"],
              rotate: [-10, 5, -3, 0],
              scale: [0.85, 1.05, 0.98, 1],
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 0.75, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <svg width="56" height="56" viewBox="0 0 32 32" fill="none" className="shrink-0">
              <path
                d="M3 5.5L29 13.5L16 18.5L11.5 28.5L3 5.5Z"
                fill="#0f0d0b"
                stroke="#0f0d0b"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />
              <path d="M16 18.5L29 13.5" stroke="#f7f5f2" strokeWidth="1.5" strokeLinecap="round" />
              <motion.circle
                cx="22.5"
                cy="7.5"
                r="2"
                fill="#c4440c"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.15, ease: "backOut" }}
              />
            </svg>

            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 1.05 }}
              className="font-sans font-semibold text-[1.4rem] tracking-tight text-ink"
            >
              sently
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}