/**
 * Theme preference. The inline boot script applies the site mode before paint;
 * this module owns the site toggle, the published portfolio style, the
 * visitor's dark/light override and the browser theme-color metadata.
 */
import { getTheme, setTheme } from "../data/storage.js";
import { normalizeTheme, themeMeta } from "../data/themes.js";

const MEDIA = "(prefers-color-scheme: light)";
const SITE_COLORS = { dark: "#0b0b0b", light: "#f8f9fa" };
const PORTFOLIO_MODE_KEY = "portfolio-mode";

let siteTheme = "dark";
let portfolioTheme = "";
let portfolioMode = "";
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

function storedPortfolioMode() {
  try {
    const saved = localStorage.getItem(PORTFOLIO_MODE_KEY);
    return saved === "light" || saved === "dark" ? saved : "";
  } catch {
    return "";
  }
}

function savePortfolioMode(value) {
  try {
    if (value) localStorage.setItem(PORTFOLIO_MODE_KEY, value);
    else localStorage.removeItem(PORTFOLIO_MODE_KEY);
  } catch {
    /* storage may be unavailable */
  }
}

function paint() {
  const theme = portfolioTheme ? themeMeta(portfolioTheme) : null;
  const mode = theme ? portfolioMode || theme.mode : siteTheme;
  const isLight = mode === "light";
  const root = document.documentElement;

  root.classList.toggle("light-mode", isLight);
  if (theme) {
    root.setAttribute("data-portfolio-theme", theme.id);
    root.setAttribute("data-portfolio-mode", mode);
  } else {
    root.removeAttribute("data-portfolio-theme");
    root.removeAttribute("data-portfolio-mode");
  }

  if (toggleButton) {
    const label = isLight ? "Switch to dark theme" : "Switch to light theme";
    toggleButton.setAttribute("aria-label", label);
    toggleButton.setAttribute("title", label);
  }

  const meta = document.getElementById("theme-color");
  if (meta) {
    meta.setAttribute(
      "content",
      theme
        ? (theme.colors && theme.colors[mode]) || theme.color
        : SITE_COLORS[siteTheme]
    );
  }

  const scheme = document.querySelector('meta[name="color-scheme"]');
  if (scheme) scheme.setAttribute("content", isLight ? "light" : "dark");
}

function toggleMode() {
  if (portfolioTheme) {
    const theme = themeMeta(portfolioTheme);
    const current = portfolioMode || theme.mode;
    const next = current === "light" ? "dark" : "light";
    portfolioMode = next === theme.mode ? "" : next;
    savePortfolioMode(portfolioMode);
  } else {
    siteTheme = document.documentElement.classList.contains("light-mode")
      ? "dark"
      : "light";
    setTheme(siteTheme);
  }
  paint();
}

export function initTheme(button) {
  toggleButton = button || null;
  siteTheme = getTheme();
  portfolioMode = storedPortfolioMode();
  paint();

  if (toggleButton) {
    toggleButton.addEventListener("click", toggleMode);
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
    if (event.key === "portfolio-mode") {
      portfolioMode = storedPortfolioMode();
      paint();
      return;
    }
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
