/**
 * Application constants shared by the profile app.
 */
export const KIND = 30078;
export const D_TAG = "bitos.space:portfolio:v1";

export const NIP46_KIND = 24133;
export const NIP46_PERMS = "sign_event:30078";
export const NIP46_APPROVAL_TIMEOUT = 120_000;
export const NIP46_CONNECT_TIMEOUT = 180_000;
export const NIP46_SHORT_TIMEOUT = 10_000;

export const RELAY_QUERY_TIMEOUT = 5_000;
export const RELAY_PUBLISH_TIMEOUT = 6_000;
export const RELAY_SUBSCRIBE_TIMEOUT = 8_000;

export const DEFAULT_RELAYS = [
  "wss://nostr-01.yakihonne.com",
  "wss://relay.bitos.space",
  "wss://relay.damus.io",
  "wss://nos.lol",
  "wss://relay.primal.net",
];

export const SITE_ORIGIN = "https://bitos.space";
export const BNOS_BUSINESS_URL = "https://bnos.space/b";

export const PROFILE_TYPE_TAGS = {
  personal: "bitos-personal",
  organization: "bitos-organization",
};

export const CLIENT_METADATA = {
  name: "BitOS Portfolio",
  url: `${SITE_ORIGIN}/p/`,
};

export const AVAILABILITY = {
  available: { label: "Available", dot: "" },
  open: { label: "Open to work", dot: "" },
  select: { label: "Select projects only", dot: "amber" },
  unavailable: { label: "Not available", dot: "muted" },
};

export const STORAGE = {
  theme: "theme",
  signer: "bitos.signer",
  pubkey: "bitos.pubkey",
  relays: "bitos.relays",
  auth: "bitos.auth.v2",
  draft: (pubkey) => `bitos.profile.draft.${pubkey}`,
  cache: (pubkey) => `bitos.profile.cache.${pubkey}`,
};
