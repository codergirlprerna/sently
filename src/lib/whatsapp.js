// Centralized WhatsApp config — swap in your real business number once ready.
// Format: country code + number, no +, no spaces, no dashes. e.g. "919876543210"
export const WHATSAPP_NUMBER = "910000000000"; // TODO: replace with real number
export const INSTAGRAM_HANDLE = "sently.in"; // TODO: replace with real handle

export function buildWhatsAppLink({ name, occasion, template, message }) {
  const lines = [
    `Hi Sently! I'd like to order a personalized gift.`,
    name && `Name: ${name}`,
    occasion && `Occasion: ${occasion}`,
    template && `Template: ${template}`,
    message && `Message: ${message}`,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildInstagramLink() {
  return `https://instagram.com/${INSTAGRAM_HANDLE}`;
}