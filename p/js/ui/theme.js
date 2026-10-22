/**
 * Theme preference. The inline boot script applies the site mode before paint;
 * this module owns the toggle, the per-portfolio theme override and the
 * browser theme-color metadata.
 */
import { getTheme, setTheme } from "../data/storage.js";
import { normalizeTheme, themeMeta } from "../data/themes.js";

const MEDIA = "(prefers-color-scheme: light)";
const SITE_COLORS = { dark: "#0b0b0b", light: "#f8f9fa" };

let siteTheme = "dark";
let portfolioTheme = "";
let toggleButton = null;

function storedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function prefersLight() {
  try {
    return window.matchMedia(MEDIA).matches;
  } catch {
    return false;
  }
}

function paint() {
  const theme = portfolioTheme ? themeMeta(portfolioTheme) : null;
  const isLight = theme ? theme.mode === "light" : siteTheme === "light";
  const root = document.documentElement;

  root.classList.toggle("light-mode", isLight);
  if (theme) root.setAttribute("data-portfolio-theme", theme.id);
  else root.removeAttribute("data-portfolio-theme");

  if (toggleButton) {
    toggleButton.hidden = Boolean(theme);
    toggleButton.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  }

  const meta = document.getElementById("theme-color");
  if (meta) meta.setAttribute("content", theme ? theme.color : SITE_COLORS[siteTheme]);

  const scheme = document.querySelector('meta[name="color-scheme"]');
  if (scheme) scheme.setAttribute("content", isLight ? "light" : "dark");
}

export function initTheme(button) {
  toggleButton = button || null;
  siteTheme = getTheme();
  paint();

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (portfolioTheme) return;
      siteTheme = document.documentElement.classList.contains("light-mode")
        ? "dark"
        : "light";
      paint();
      setTheme(siteTheme);
    });
  }

  try {
    const media = window.matchMedia(MEDIA);
    media.addEventListener("change", (event) => {
      if (storedTheme()) return;
      siteTheme = event.matches ? "light" : "dark";
      paint();
    });
  } catch {
    /* matchMedia unavailable */
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== "theme") return;
    siteTheme =
      storedTheme() || (prefersLight() ? "light" : "dark");
    paint();
  });
}

export function applyPortfolioTheme(theme) {
  portfolioTheme = theme ? normalizeTheme(theme) : "";
  paint();
}

export function resetPortfolioTheme() {
  portfolioTheme = "";
  paint();
}
