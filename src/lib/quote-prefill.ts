const STORAGE_KEY = "poplukic-quote-prefill";

export function setQuotePrefill(message: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, message);
  window.dispatchEvent(new CustomEvent("quote-prefill", { detail: message }));
}

export function consumeQuotePrefill(): string | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(STORAGE_KEY);
  if (value) sessionStorage.removeItem(STORAGE_KEY);
  return value;
}

export function scrollToQuoteForm() {
  document.getElementById("upit")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
