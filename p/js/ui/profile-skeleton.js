/**
 * Loading skeleton that mirrors the public profile layout while the
 * signed portfolio event is resolved from relays.
 */
import { esc } from "../shared/dom.js";

function line(width) {
  return `<div class="sk-line sk-shimmer sk-w-${width}"></div>`;
}

function stat() {
  return `<div class="sk-stat">
    <div class="sk-line sk-shimmer sk-w-40 sk-h-18"></div>
    <div class="sk-line sk-shimmer sk-w-70 sk-h-10"></div>
  </div>`;
}

function card(wide) {
  return `<div class="sk-card${wide ? " is-wide" : ""}">
    <div class="sk-media sk-shimmer"></div>
    <div class="sk-card-body">
      ${line("70")}
      ${line("95")}
      ${line("60")}
    </div>
  </div>`;
}

export function renderProfileSkeleton(root, { label = "" } = {}) {
  if (!root) return;
  root.innerHTML = `<span class="sr-only">${esc(label)}</span>
    <div class="wrap" aria-hidden="true">
      <div class="sk-top">
        <div class="sk-identity">
          <div class="sk-id-top">
            <div class="sk-hex sk-shimmer"></div>
            <div class="sk-id-lines">
              <div class="sk-line sk-shimmer sk-w-50 sk-h-26"></div>
              ${line("35")}
              ${line("75")}
            </div>
          </div>
          <div class="sk-bio">
            ${line("95")}
            ${line("88")}
            ${line("65")}
          </div>
          <div class="sk-stats">${stat()}${stat()}${stat()}</div>
          <div class="sk-actions">
            <div class="sk-pill sk-shimmer"></div>
            <div class="sk-pill sk-shimmer"></div>
          </div>
        </div>
        <div class="sk-side">
          <div class="sk-reel sk-shimmer"></div>
          <div class="sk-meta">
            <div class="sk-line sk-shimmer sk-w-40 sk-h-14"></div>
            ${line("90")}
            ${line("75")}
            ${line("85")}
            ${line("60")}
          </div>
        </div>
      </div>
      <div class="sk-section">
        <div class="sk-line sk-shimmer sk-w-20 sk-h-11"></div>
        <div class="sk-line sk-shimmer sk-w-50 sk-h-26"></div>
        <div class="sk-bento">
          ${card(true)}
          ${card(false)}
          ${card(false)}
        </div>
      </div>
    </div>`;
}
