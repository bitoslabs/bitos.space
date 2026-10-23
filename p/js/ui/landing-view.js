/**
 * Landing view: the signed-in session line and links to the user's portfolio.
 */
import { esc, setHidden } from "../shared/dom.js";
import { hexToNpub } from "../shared/bech32.js";
import { profileName, shortKey } from "../shared/format.js";
import { profilePageUrl } from "../shared/urls.js";
import { t } from "../shared/i18n.js";

export function renderLandingSession(element, authState, myPortfolio) {
  if (!element) return;
  if (!authState || !authState.pubkey) {
    setHidden(element, true);
    return;
  }

  const npub = hexToNpub(authState.pubkey);
  const viewUrl = profilePageUrl(npub);
  const editUrl = profilePageUrl(npub, { edit: true });
  const mine =
    myPortfolio && myPortfolio.pubkey === authState.pubkey
      ? myPortfolio
      : null;
  const status = mine ? mine.status : "idle";

  let detail;
  if (status === "published" && mine.profile) {
    const name = profileName(mine.profile);
    const label = name === t("Unnamed profile") ? t("My portfolio") : name;
    detail = `<a class="head-link" href="${viewUrl}">${esc(
      label
    )}</a> · <a class="head-link" href="${editUrl}">${t("Edit")}</a>`;
  } else if (status === "empty") {
    detail = `${t("No portfolio yet")} · <a class="head-link" href="${editUrl}">${t("Create")}</a> · <a class="head-link" href="${viewUrl}">${t("Open")}</a>`;
  } else if (status === "error") {
    detail = `<a class="head-link" href="${viewUrl}">${t("Open my portfolio")}</a> · <a class="head-link" href="${editUrl}">${t("Edit")}</a>`;
  } else {
    detail = `<a class="head-link" href="${viewUrl}">${t("Open my portfolio")}</a> · <a class="head-link" href="${editUrl}">${t("Edit")}</a>`;
  }

  element.innerHTML = `${t("Signed in as")} <span class="mono">${esc(
    shortKey(npub)
  )}</span> · ${detail}`;
  setHidden(element, false);
}
