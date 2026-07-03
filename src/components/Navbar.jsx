import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { handleAnchorClick } from "../lib/scroll";
import { useAuth } from "../context/AuthContext";
import SignInModal from "./SignInModal";

const links = [
  { label: "Home", id: "top" },
  { label: "Templates", id: "templates" },
  { label: "How it works", id: "how" },
  { label: "Pricing", id: "pricing" },
  { label: "Order", id: "order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [signInOpen, setSignInOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    setMenuOpen(false);
    handleAnchorClick(e, id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] px-6 md:px-10 flex items-center justify-between transition-colors duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-xl border-b border-border" : "bg-transparent border-b border-transparent"
        }`}
      >
        <a href="#top" onClick={(e) => handleNavClick(e, "top")}>
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleAnchorClick(e, l.id)}
                className="relative px-4 py-2 text-[0.8rem] group"
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-ink font-medium" : "text-muted group-hover:text-ink"
                  }`}
                >
                  {l.label}
                </span>
                <span
                  className={`absolute left-4 right-4 -bottom-[1px] h-[1.5px] bg-accent origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-border-strong"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <button
              type="button"
              onClick={signOut}
              className="hidden sm:inline-flex text-[0.78rem] font-medium px-5 py-2 rounded-lg border border-border-strong text-muted hover:text-ink hover:border-ink hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,13,11,0.08)] active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              {user.displayName ? `Sign out (${user.displayName.split(" ")[0]})` : "Sign out"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setSignInOpen(true)}
              className="hidden sm:inline-flex text-[0.78rem] font-medium px-5 py-2 rounded-lg border border-border-strong text-muted hover:text-ink hover:border-ink hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,13,11,0.08)] active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              Sign in
            </button>
          )}
          <a
            href="#order"
            onClick={(e) => handleAnchorClick(e, "order")}
            className="hidden sm:inline-flex text-[0.78rem] font-medium px-5 py-2 rounded-lg bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(15,13,11,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Send a gift →
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted hover:text-ink hover:border-ink transition-colors"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-[60px] left-0 right-0 bg-bg border-b border-border shadow-[0_16px_40px_rgba(15,13,11,0.12)] px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
                className={`py-3 px-2 text-[0.95rem] font-medium border-b border-border last:border-0 transition-colors ${
                  active === l.id ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              {user ? (
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); signOut(); }}
                  className="w-full text-[0.83rem] font-medium px-5 py-3 rounded-lg border border-border-strong text-muted hover:text-ink transition-colors"
                >
                  {user.displayName ? `Sign out (${user.displayName.split(" ")[0]})` : "Sign out"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); setSignInOpen(true); }}
                  className="w-full text-[0.83rem] font-medium px-5 py-3 rounded-lg border border-border-strong text-muted hover:text-ink transition-colors"
                >
                  Sign in
                </button>
              )}
              <a
                href="#order"
                onClick={(e) => handleNavClick(e, "order")}
                className="w-full text-center text-[0.83rem] font-medium px-5 py-3 rounded-lg bg-ink text-white hover:bg-ink-soft transition-colors"
              >
                Send a gift →
              </a>
            </div>
          </div>
        </div>
      )}

      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}