import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { onTemplateSelect } from "../lib/scroll";

const templateOptions = ["Universe", "Lumina", "The Book", "Scratch Card", "Babe Site", "Not sure yet"];

const occasionOptions = [
  "Anniversary",
  "Birthday",
  "Long distance",
  "Proposal",
  "Father's Day",
  "Friendship",
  "Just because",
  "Other",
];

export default function OrderForm() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [template, setTemplate] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [justSelected, setJustSelected] = useState(false);

  useEffect(() => {
    const unsubscribe = onTemplateSelect((templateName) => {
      setTemplate(templateName);
      setJustSelected(true);
      const t = setTimeout(() => setJustSelected(false), 1200);
      return () => clearTimeout(t);
    });
    return unsubscribe;
  }, []);

  const isValid = name.trim().length > 0 && occasion && template;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    const link = buildWhatsAppLink({ name, occasion, template, message });
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="block text-[0.78rem] font-medium text-ink mb-2">
          Your name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Rohan"
          className={`w-full px-4 py-3 rounded-xl border bg-bg text-[0.88rem] outline-none transition-colors duration-200 placeholder:text-faint focus:border-ink ${
            touched && !name.trim() ? "border-accent" : "border-border"
          }`}
        />
        {touched && !name.trim() && (
          <p className="text-[0.72rem] text-accent mt-1.5">Please enter your name</p>
        )}
      </div>

      <div>
        <label className="block text-[0.78rem] font-medium text-ink mb-2">
          What's the occasion?
        </label>
        <div className="flex flex-wrap gap-2">
          {occasionOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setOccasion(opt)}
              className={`px-4 py-2 rounded-full text-[0.78rem] font-medium border transition-all duration-200 ${
                occasion === opt
                  ? "bg-ink text-white border-ink"
                  : "bg-bg text-muted border-border hover:border-ink hover:text-ink"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {touched && !occasion && (
          <p className="text-[0.72rem] text-accent mt-1.5">Please select an occasion</p>
        )}
      </div>

      <div>
        <label className="flex items-center gap-2 text-[0.78rem] font-medium text-ink mb-2">
          Which template?
          {justSelected && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[0.65rem] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
            >
              Selected from card ✓
            </motion.span>
          )}
        </label>
        <div className="flex flex-wrap gap-2">
          {templateOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setTemplate(opt)}
              className={`px-4 py-2 rounded-full text-[0.78rem] font-medium border transition-all duration-200 ${
                template === opt
                  ? "bg-ink text-white border-ink"
                  : "bg-bg text-muted border-border hover:border-ink hover:text-ink"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {touched && !template && (
          <p className="text-[0.72rem] text-accent mt-1.5">Please select a template</p>
        )}
      </div>

      <div>
        <label className="block text-[0.78rem] font-medium text-ink mb-2">
          Anything else we should know? <span className="text-faint">(optional)</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A few words about them, the story, or anything special..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-[0.88rem] outline-none transition-colors duration-200 placeholder:text-faint focus:border-ink resize-none"
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        className="mt-2 flex items-center justify-center gap-2 bg-ink text-white py-[0.9rem] rounded-xl text-[0.85rem] font-medium hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,13,11,0.18)] active:translate-y-0 active:shadow-none transition-all duration-200"
      >
        Continue on WhatsApp →
      </motion.button>

      <p className="text-[0.7rem] text-faint text-center -mt-1">
        This opens WhatsApp with your details pre-filled. Nothing is charged yet.
      </p>
    </form>
  );
}