/**
 * Publish orchestration: validate, build the NIP-78 event, sign through the
 * active signer, and write it to the selected relays.
 */
import { D_TAG, KIND } from "../config.js";
import { publishToRelays } from "../nostr/relay.js";
import { verifyEvent } from "../nostr/crypto.js";
import {
  toPublicProfile,
  validateProfile,
} from "../data/profile-model.js";
import * as auth from "./auth.js";

export function buildPortfolioEvent(publicProfile, createdAt) {
  const name =
    publicProfile.name || publicProfile.displayName || "portfolio";
  const tags = [
    ["d", D_TAG],
    ["t", "bitos-portfolio"],
    ["client", "bitos.space"],
    ["alt", `Portfolio for ${name}`],
  ];
  if (publicProfile.nip05) tags.push(["nip05", publicProfile.nip05]);

  return {
    kind: KIND,
    created_at: createdAt || Math.floor(Date.now() / 1000),
    tags,
    content: JSON.stringify(publicProfile),
  };
}

export async function publishProfile(profile, relays) {
  const validationError = validateProfile(profile);
  if (validationError) throw new Error(validationError);

  const pubkey = auth.getState().pubkey;
  if (!pubkey) throw new Error("Connect a signer before publishing.");

  const publicProfile = toPublicProfile(profile);
  const unsigned = buildPortfolioEvent(publicProfile);
  const signed = await auth.signEvent(unsigned);

  if (!signed || !signed.id || !signed.sig) {
    throw new Error("The signer did not return a signed event.");
  }
  if (String(signed.pubkey || "").toLowerCase() !== pubkey) {
    throw new Error("The signer returned a different public key.");
  }
  if (!verifyEvent(signed)) {
    throw new Error("The signer returned an invalid signature.");
  }
  if (
    signed.kind !== KIND ||
    !Array.isArray(signed.tags) ||
    !signed.tags.some((tag) => Array.isArray(tag) && tag[0] === "d" && tag[1] === D_TAG)
  ) {
    throw new Error("The signer returned an unexpected event.");
  }

  const results = await publishToRelays(relays, signed);
  const accepted = results.filter((result) => result.ok).length;
  return { signed, results, accepted, publicProfile };
}
