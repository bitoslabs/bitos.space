/**
 * Portfolio themes. The id is published inside the NIP-78 event, so the
 * public page can apply the owner's chosen look without a stylesheet per user.
 */
export const DEFAULT_THEME = "obsidian";

export const THEMES = [
  {
    id: "obsidian",
    name: "Obsidian",
    description: "Dark violet glass with amber highlights. The signature look.",
    mode: "dark",
    color: "#0b0b0b",
  },
  {
    id: "parchment",
    name: "Parchment",
    description: "Warm editorial paper, serif headings and rust accents.",
    mode: "light",
    color: "#f4efe6",
  },
  {
    id: "signal",
    name: "Signal",
    description: "High-contrast terminal dark with cyan and lime signals.",
    mode: "dark",
    color: "#05070a",
  },
];

const THEME_IDS = new Set(THEMES.map((theme) => theme.id));

export function isTheme(value) {
  return THEME_IDS.has(String(value || ""));
}

export function normalizeTheme(value) {
  const id = String(value || "");
  return THEME_IDS.has(id) ? id : DEFAULT_THEME;
}

export function themeMeta(value) {
  const id = normalizeTheme(value);
  return THEMES.find((theme) => theme.id === id) || THEMES[0];
}
