/**
 * Theme preference. The inline boot script applies the class before paint;
 * this module owns the toggle and persistence.
 */
import { getTheme, setTheme } from "../data/storage.js";

export function initTheme(button) {
  const apply = (theme) => {
    document.documentElement.classList.toggle("light-mode", theme === "light");
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
}
