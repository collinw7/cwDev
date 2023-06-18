const isBrowser = () => typeof window !== "undefined";

function scrollTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export { scrollTop };