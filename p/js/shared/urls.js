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

/**
 * Pretty profile URL. Requires the /p/* SPA fallback (see serve.mjs and the
 * nginx vhost). The app also accepts /p/?ref={ref} as a no-rewrite fallback.
 */
export function portfolioUrl(ref, { edit = false } = {}) {
  const path = `/p/${encodeURIComponent(String(ref || ""))}`;
  return edit ? `${path}?edit=1` : path;
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

/**
 * Static-host-safe internal profile URL. Canonical/share links still use the
 * pretty /p/<ref> form, but in-app navigation uses ?ref= so it works even when
 * the host has no rewrite/404 fallback.
 */
export function profilePageUrl(ref, { edit = false } = {}) {
  const url = `/p/?ref=${encodeURIComponent(String(ref || ""))}`;
  return edit ? `${url}&edit=1` : url;
}
