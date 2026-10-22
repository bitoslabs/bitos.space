/**
 * Browser persistence. All keys and TTLs live in config.js.
 */
import { DEFAULT_RELAYS, STORAGE } from "../config.js";
import { normalizeProfile } from "./profile-model.js";
import { parseRelayUrls } from "../shared/urls.js";

function readRaw(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeRaw(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function removeRaw(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

function readJson(key) {
  const raw = readRaw(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function readSessionJson(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getTheme() {
  const stored = readRaw(STORAGE.theme);
  if (stored === "light" || stored === "dark") return stored;
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

export function setTheme(theme) {
  writeRaw(STORAGE.theme, theme === "light" ? "light" : "dark");
}

export function loadRelays() {
  const stored = readRaw(STORAGE.relays);
  if (stored) {
    const list = parseRelayUrls(stored);
    if (list.length) return list;
  }
  return [...DEFAULT_RELAYS];
}

export function saveRelays(relays) {
  const list = Array.from(new Set(relays)).slice(0, 10);
  writeRaw(STORAGE.relays, list.join("\n"));
  return list;
}

export function readCache(pubkey) {
  const data = readJson(STORAGE.cache(pubkey));
  if (!data || !data.profile) return null;
  return data;
}

export function writeCache(pubkey, profile, createdAt) {
  writeRaw(
    STORAGE.cache(pubkey),
    JSON.stringify({ profile, created_at: createdAt || 0 })
  );
}

export function readDraft(pubkey) {
  const raw = readJson(STORAGE.draft(pubkey));
  return raw ? normalizeProfile(raw) : null;
}

export function writeDraft(pubkey, profile) {
  return writeRaw(STORAGE.draft(pubkey), JSON.stringify(profile));
}

export function clearDraft(pubkey) {
  removeRaw(STORAGE.draft(pubkey));
}

/**
 * Auth records:
 *  - NIP-07: { type: "nip07", pubkey }
 *  - NIP-46: { type: "nip46", pubkey, session: {...} }
 *  - local key: { type: "nsec", pubkey, secret, remember }
 *
 * A session-only local key lives in sessionStorage, so it is readable only by
 * this tab. A remembered key is written to localStorage by explicit choice.
 */
export function readAuth() {
  const session = readSessionJson(STORAGE.auth);
  if (session && session.type) return session;

  const stored = readJson(STORAGE.auth);
  if (stored && stored.type) return stored;

  // Migrate the v1 NIP-07 record used by the first profile release.
  if (readRaw(STORAGE.signer) === "nip07") {
    const pubkey = readRaw(STORAGE.pubkey);
    if (pubkey && /^[0-9a-f]{64}$/i.test(pubkey)) {
      return { type: "nip07", pubkey: pubkey.toLowerCase() };
    }
  }
  return null;
}

export function writeAuth(record) {
  return writeRaw(STORAGE.auth, JSON.stringify(record));
}

export function writeSessionAuth(record) {
  try {
    sessionStorage.setItem(STORAGE.auth, JSON.stringify(record));
    return true;
  } catch {
    return false;
  }
}

export function clearLocalAuth() {
  removeRaw(STORAGE.auth);
  // Clean up the v1 NIP-07 keys after migration.
  removeRaw(STORAGE.signer);
  removeRaw(STORAGE.pubkey);
}

export function clearSessionAuth() {
  try {
    sessionStorage.removeItem(STORAGE.auth);
  } catch {
    /* ignore */
  }
}

export function clearAuth() {
  clearLocalAuth();
  clearSessionAuth();
}

