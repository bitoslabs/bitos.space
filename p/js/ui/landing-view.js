/**
 * Landing view: only the signed-in session line is dynamic.
 */
import { esc, setHidden } from "../shared/dom.js";
import { shortKey } from "../shared/format.js";
import { hexToNpub } from "../shared/bech32.js";

export function renderLandingSession(element, authState) {
  if (!element) return;
  if (!authState || !authState.pubkey) {
    setHidden(element, true);
    return;
  }
  const npub = hexToNpub(authState.pubkey);
  element.innerHTML = `Signed in as <span class="mono">${esc(
    shortKey(npub)
  )}</span> · <button class="head-link" type="button" data-action="create">Create or manage your portfolio →</button>`;
  setHidden(element, false);
}
