/**
 * Theme preference. The inline boot script applies the class before paint;
 * this module owns the toggle and persistence.
 */
import { getTheme, setTheme } from "../data/storage.js";

const MEDIA = "(prefers-color-scheme: light)";

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

export function initTheme(button) {
  const media = window.matchMedia(MEDIA);
  const apply = (theme) => {
    const isLight = theme === "light";
    document.documentElement.classList.toggle("light-mode", isLight);
    if (!button) return;
    button.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
    const meta = document.getElementById("theme-color");
    if (meta) meta.setAttribute("content", isLight ? "#f8f9fa" : "#0b0b0b");
  };

  apply(getTheme());

  if (button) {
    button.addEventListener("click", () => {
      const next = document.documentElement.classList.contains("light-mode")
        ? "dark"
        : "light";
      apply(next);
      setTheme(next);
    });
  }

  media.addEventListener("change", (event) => {
    if (!storedTheme()) apply(event.matches ? "light" : "dark");
  });

  window.addEventListener("storage", (event) => {
    if (event.key === "theme") apply(storedTheme() || (prefersLight() ? "light" : "dark"));
  });
}
