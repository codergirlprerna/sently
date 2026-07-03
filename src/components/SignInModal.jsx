import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { handleAnchorClick } from "../lib/scroll";

export default function SignInModal({ open, onClose }) {
  const { user, signInWithGoogle, error } = useAuth();

  // If already signed in when modal opens, show a welcome state instead.
  if (open && user) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-2xl border border-border shadow-[0_24px_60px_rgba(15,13,11,0.18)] w-full max-w-[380px] p-8 text-center"
          >
            <button type="button" onClick={onClose} aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-bg-soft transition-colors">
              <X className="w-4 h-4" />
            </button>

            <CheckCircle className="w-10 h-10 text-accent mx-auto mb-4" strokeWidth={1.5} />

            <h2 className="font-display text-[1.5rem] leading-[1.2] mb-2">
              You're in,{" "}
              <em className="italic text-accent">
                {user.displayName ? user.displayName.split(" ")[0] : "friend"}
              </em>
            </h2>
            <p className="text-[0.82rem] text-muted leading-[1.6] mb-7">
              Your account is set. Now pick a template and send something beautiful.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="#templates"
                onClick={(e) => { onClose(); handleAnchorClick(e, "templates"); }}
                className="w-full inline-flex items-center justify-center bg-ink text-white px-6 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:bg-ink-soft transition-colors"
              >
                Browse templates →
              </a>
              <a
                href="#order"
                onClick={(e) => { onClose(); handleAnchorClick(e, "order"); }}
                className="w-full inline-flex items-center justify-center border border-border-strong text-ink px-6 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:border-ink transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-2xl border border-border shadow-[0_24px_60px_rgba(15,13,11,0.18)] w-full max-w-[380px] p-8"
          >
            <button type="button" onClick={onClose} aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-bg-soft transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="text-[0.65rem] tracking-[0.12em] uppercase text-faint mb-2">Welcome</div>
            <h2 className="font-display text-[1.7rem] leading-[1.2] mb-2">
              Sign in to <em className="italic text-accent">Sently</em>
            </h2>
            <p className="text-[0.82rem] text-muted leading-[1.6] mb-7">
              New here or returning — just continue with Google. We'll create your account automatically if you don't have one yet.
            </p>

            {error && (
              <div className="mb-4 text-[0.78rem] text-accent bg-accent/[0.08] border border-accent/15 rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full inline-flex items-center justify-center gap-3 bg-ink text-white px-6 py-[0.85rem] rounded-[10px] text-[0.83rem] font-medium hover:bg-ink-soft transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path fill="#fff" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9C16.66 14.2 17.64 11.9 17.64 9.2z" />
                <path fill="#fff" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.55-1.84.87-3.06.87-2.36 0-4.36-1.6-5.07-3.74H.9v2.33A9 9 0 0 0 9 18z" />
                <path fill="#fff" d="M3.93 10.69A5.4 5.4 0 0 1 3.64 9c0-.59.1-1.16.29-1.69V4.98H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.02l3.03-2.33z" />
                <path fill="#fff" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.57-2.57A9 9 0 0 0 .9 4.98L3.93 7.3C4.64 5.17 6.64 3.58 9 3.58z" />
              </svg>
              Continue with Google
            </button>

            <p className="text-[0.7rem] text-faint text-center mt-5">
              By continuing you agree to be contacted about your orders.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}