/**
 * URL and identifier validation. These functions never touch the DOM.
 */
export function httpUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const url = new URL(raw);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : "";
  } catch {
    return "";
  }
}

export function contactUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const url = new URL(raw);
    return ["http:", "https:", "mailto:"].includes(url.protocol)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

export function isNip05(value) {
  return /^[^@\s/#?]+@[^@\s/#?]+\.[^@\s/#?]+$/.test(
    String(value || "").trim()
  );
}

export function parseRelayUrls(text) {
  return String(text || "")
    .split(/[\s,]+/)
    .map((item) => item.trim())
    .filter((item) => /^wss?:\/\/[^\s]+$/i.test(item))
    .slice(0, 10);
}
