/**
 * Sign-in dialog: NIP-07 extension, NIP-46 bunker URL, or NIP-46
 * client-initiated connection. Owns only dialog state and delegated auth calls.
 */
import { $, $$, esc, setHidden } from "../shared/dom.js";
import { hexToNpub } from "../shared/bech32.js";
import { profileName, shortKey, timeAgo } from "../shared/format.js";
import { copyToClipboard } from "../shared/clipboard.js";
import { parseRelayUrls, profilePageUrl } from "../shared/urls.js";
import { loadRelays, saveRelays } from "../data/storage.js";
import { hasSigner } from "../nostr/nip07.js";
import * as auth from "../services/auth.js";
import { clearQr, renderQr } from "./qr.js";

export function createAuthDialog({
  dialog,
  toast,
  onAuthChanged,
  onRelaysChanged,
  getMyPortfolio,
}) {
  const els = {
    title: $("#signin-title", dialog),
    signerDot: $("#signer-dot", dialog),
    signerLabel: $("#signer-label", dialog),
    signerId: $("#signer-id", dialog),
    myPortfolioCard: $("#my-portfolio-card", dialog),
    myPortfolioName: $("#my-portfolio-name", dialog),
    myPortfolioStatus: $("#my-portfolio-status", dialog),
    myPortfolioUrl: $("#my-portfolio-url", dialog),
    myPortfolioView: $("#my-portfolio-view", dialog),
    myPortfolioEdit: $("#my-portfolio-edit", dialog),
    connectNip07: $("#connect-signer", dialog),
    connectNip07Label: $("#connect-signer-label", dialog),
    signout: $("#signout-btn", dialog),
    authStatus: $("#auth-status", dialog),
    nip07Note: $("#nip07-note", dialog),
    bunkerUrl: $("#bunker-url", dialog),
    connectBunker: $("#connect-bunker", dialog),
    startNostrConnect: $("#start-nostrconnect", dialog),
    nostrConnectBox: $("#nostrconnect-box", dialog),
    nostrConnectUri: $("#nostrconnect-uri", dialog),
    nostrConnectQr: $("#nostrconnect-qr", dialog),
    copyNostrConnect: $("#copy-nostrconnect", dialog),
    openNostrConnect: $("#open-nostrconnect", dialog),
    cancelNostrConnect: $("#cancel-nostrconnect", dialog),
    nip46Status: $("#nip46-status", dialog),
    relays: $("#signin-relays", dialog),
    saveRelays: $("#save-signin-relays", dialog),
  };

  let nostrConnectController = null;
  let activeTab = "nip07";

  function setStatus(element, message, { error = false, url = "" } = {}) {
    if (!element) return;
    element.textContent = message || "";
    element.classList.toggle("is-error", Boolean(error));
    if (url && /^https?:\/\//i.test(url)) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = " Open approval link";
      element.appendChild(link);
    }
  }

  function setTab(tab) {
    activeTab = tab;
    $$("[data-auth-tab]", dialog).forEach((button) => {
      const active = button.getAttribute("data-auth-tab") === tab;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
    $$("[data-auth-panel]", dialog).forEach((panel) => {
      setHidden(panel, panel.getAttribute("data-auth-panel") !== tab);
    });
  }

  function renderMyPortfolio(state) {
    if (!els.myPortfolioCard) return;
    if (!state || !state.pubkey) {
      setHidden(els.myPortfolioCard, true);
      return;
    }

    const portfolioState = getMyPortfolio ? getMyPortfolio() : null;
    const mine =
      portfolioState && portfolioState.pubkey === state.pubkey
        ? portfolioState
        : null;
    const npub = hexToNpub(state.pubkey);
    const profile = mine && mine.profile;
    const published = Boolean(mine && mine.status === "published");
    const empty = Boolean(mine && mine.status === "empty");
    const checking = !mine || mine.status === "loading" || mine.status === "idle";
    const errored = Boolean(mine && mine.status === "error");
    const viewUrl = profilePageUrl(npub);
    const editUrl = profilePageUrl(npub, { edit: true });

    const name =
      profile && profileName(profile) !== "Unnamed profile"
        ? profileName(profile)
        : "Your portfolio";

    els.myPortfolioName.textContent = name;
    els.myPortfolioUrl.textContent = `bitos.space/p/${shortKey(npub)}`;
    els.myPortfolioView.href = viewUrl;
    els.myPortfolioEdit.href = editUrl;
    els.myPortfolioEdit.textContent = published
      ? "Edit portfolio"
      : empty
      ? "Create portfolio"
      : "Open portfolio";

    let status = "Checking relays…";
    let tone = "";
    if (published) {
      status = mine.updatedAt
        ? `Published · ${timeAgo(mine.updatedAt)}`
        : "Published";
      tone = "is-ok";
    } else if (empty) {
      status = "Not published yet";
    } else if (errored) {
      status = "Could not check relays";
      tone = "is-error";
    } else if (!checking) {
      status = "Portfolio status";
    }

    els.myPortfolioStatus.textContent = status;
    els.myPortfolioStatus.className = "my-portfolio-status" + (tone ? ` ${tone}` : "");
    setHidden(els.myPortfolioCard, false);
  }

  function render() {
    const state = auth.getState();
    const detected = hasSigner();

    if (els.title) {
      els.title.textContent = state.connected
        ? "Nostr account"
        : "Sign in with a Nostr signer";
    }

    els.signerDot.className = "signer-dot " + (state.connected ? "ok" : "");
    els.signerLabel.textContent = state.connected
      ? state.type === "nip46"
        ? "Connected with a remote signer"
        : "Connected with NIP-07"
      : "Not signed in";

    if (state.connected) {
      const npub = hexToNpub(state.pubkey);
      els.signerId.innerHTML = `<span class="ok">Signed in</span><br><code>${esc(
        npub
      )}</code><br><span>${esc(state.pubkey)}</span>`;
      setHidden(els.signerId, false);
      setHidden(els.signout, false);
      setHidden(els.connectNip07, true);
    } else {
      els.signerId.innerHTML = "";
      setHidden(els.signerId, true);
      setHidden(els.signout, true);
      setHidden(els.connectNip07, false);
    }

    renderMyPortfolio(state);

    if (els.nip07Note) {
      els.nip07Note.textContent = detected
        ? "A NIP-07 extension is available in this browser. Your key stays inside the extension."
        : "No NIP-07 extension detected. Install Alby, nos2x, or another NIP-07 signer, then reload. Or use a NIP-46 remote signer below.";
    }
    if (els.connectNip07Label) {
      els.connectNip07Label.textContent = detected
        ? "Connect NIP-07 signer"
        : "Retry NIP-07 detection";
    }
    setTab(activeTab);
  }

  function open() {
    const state = auth.getState();
    activeTab = state.connected
      ? state.type === "nip46"
        ? "nip46"
        : "nip07"
      : hasSigner()
      ? "nip07"
      : "nip46";
    setStatus(els.authStatus, "");
    setStatus(els.nip46Status, "");
    setHidden(els.nostrConnectBox, true);
    els.openNostrConnect.hidden = true;
    clearQr(els.nostrConnectQr);
    els.relays.value = loadRelays().join("\n");
    render();
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function close() {
    if (dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  async function connectNip07() {
    setStatus(els.authStatus, "Waiting for the browser extension…");
    try {
      await auth.connectNip07();
      setStatus(els.authStatus, "Connected.");
      if (onAuthChanged) onAuthChanged();
      close();
      toast("Signed in with NIP-07.");
    } catch (error) {
      setStatus(
        els.authStatus,
        (error && error.message) || "Sign-in failed.",
        { error: true }
      );
    }
  }

  async function connectBunker() {
    const input = els.bunkerUrl.value.trim();
    if (!input) {
      setStatus(els.nip46Status, "Paste a bunker:// URL first.", {
        error: true,
      });
      return;
    }
    els.connectBunker.disabled = true;
    setStatus(
      els.nip46Status,
      "Waiting for your remote signer to approve the connection…"
    );
    try {
      await auth.connectBunker(input, {
        onAuthChallenge(url) {
          setStatus(
            els.nip46Status,
            "The signer needs approval in another window.",
            { url }
          );
        },
      });
      setStatus(els.nip46Status, "Connected.");
      if (onAuthChanged) onAuthChanged();
      close();
      toast("Signed in with a remote signer.");
    } catch (error) {
      setStatus(
        els.nip46Status,
        (error && error.message) || "Could not connect the remote signer.",
        { error: true }
      );
    } finally {
      els.connectBunker.disabled = false;
    }
  }

  async function startNostrConnect() {
    if (nostrConnectController) nostrConnectController.abort();
    const controller = new AbortController();
    nostrConnectController = controller;
    els.startNostrConnect.disabled = true;
    setHidden(els.nostrConnectBox, false);
    clearQr(els.nostrConnectQr);
    setStatus(els.nip46Status, "Waiting for a signer app to approve…");

    try {
      await auth.connectNostrConnect({
        signal: controller.signal,
        onUri(uri) {
          els.nostrConnectUri.value = uri;
          els.openNostrConnect.href = uri;
          els.openNostrConnect.hidden = false;
          renderQr(els.nostrConnectQr, uri);
          setStatus(
            els.nip46Status,
            "Waiting for approval in your signer app…"
          );
        },
        onAuthChallenge(url) {
          setStatus(
            els.nip46Status,
            "The signer needs approval in another window.",
            { url }
          );
        },
      });
      setStatus(els.nip46Status, "Connected.");
      nostrConnectController = null;
      if (onAuthChanged) onAuthChanged();
      close();
      toast("Signed in with a remote signer.");
    } catch (error) {
      if (!controller.signal.aborted) {
        setStatus(
          els.nip46Status,
          (error && error.message) || "Could not connect the signer app.",
          { error: true }
        );
      }
    } finally {
      els.startNostrConnect.disabled = false;
      if (nostrConnectController === controller) nostrConnectController = null;
    }
  }

  function cancelNostrConnect() {
    if (nostrConnectController) {
      nostrConnectController.abort();
      nostrConnectController = null;
    }
    setHidden(els.nostrConnectBox, true);
    els.openNostrConnect.hidden = true;
    clearQr(els.nostrConnectQr);
    setStatus(els.nip46Status, "Connection cancelled.");
  }

  async function signOut() {
    setStatus(els.authStatus, "Signing out…");
    try {
      await auth.disconnect();
    } catch {
      /* local state is cleared regardless */
    }
    render();
    if (onAuthChanged) onAuthChanged();
    toast("Signed out.");
  }

  function saveRelaySettings() {
    const list = parseRelayUrls(els.relays.value);
    if (!list.length) {
      toast("Add at least one wss:// relay URL.", true);
      return;
    }
    const saved = saveRelays(list);
    els.relays.value = saved.join("\n");
    if (onRelaysChanged) onRelaysChanged(saved);
    toast(`Relay list saved (${saved.length}).`);
  }

  $$("[data-auth-tab]", dialog).forEach((button) => {
    button.addEventListener("click", () => {
      setTab(button.getAttribute("data-auth-tab"));
    });
  });
  els.connectNip07.addEventListener("click", connectNip07);
  els.connectBunker.addEventListener("click", connectBunker);
  els.startNostrConnect.addEventListener("click", startNostrConnect);
  els.cancelNostrConnect.addEventListener("click", cancelNostrConnect);
  els.signout.addEventListener("click", signOut);
  els.saveRelays.addEventListener("click", saveRelaySettings);
  els.copyNostrConnect.addEventListener("click", async () => {
    const uri = els.nostrConnectUri.value;
    const ok = await copyToClipboard(uri);
    toast(ok ? "Connection link copied." : "Could not copy the link.", !ok);
  });
  dialog.addEventListener("close", () => {
    if (nostrConnectController) {
      nostrConnectController.abort();
      nostrConnectController = null;
    }
  });

  return { open, close, render };
}
