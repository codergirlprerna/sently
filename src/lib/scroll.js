// Shared scroll utility — keeps the URL clean (no #hash) while still
// smooth-scrolling to the right section. Used by every nav/CTA link.
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function handleAnchorClick(e, id) {
  e.preventDefault();
  scrollToId(id);
}