/**
 * BitOS media API upload. Uses multipart/form-data so no custom headers are
 * required. Chrome still preflights XHR for this request, and the API may not
 * answer OPTIONS yet, so a failed XHR falls back to fetch (which sends the
 * same multipart POST without a preflight). The server route also accepts a
 * raw body with X-Upload-Filename/X-SHA-256 for native clients.
 */
import { BITOS_MEDIA_UPLOAD_URL } from "../config.js";

let preferFetch = false;

function endpoint(pubkey) {
  const url = new URL(BITOS_MEDIA_UPLOAD_URL);
  const clean = String(pubkey || "").toLowerCase();
  if (/^[0-9a-f]{64}$/.test(clean)) url.searchParams.set("pubkey", clean);
  url.searchParams.set("purpose", "profile");
  return url.toString();
}

function buildForm(file, pubkey) {
  const form = new FormData();
  form.append("file", file, file.name || "upload");
  form.append("purpose", "profile");
  const clean = String(pubkey || "").toLowerCase();
  if (/^[0-9a-f]{64}$/.test(clean)) form.append("pubkey", clean);
  return form;
}

function errorMessage(xhr) {
  try {
    const data = JSON.parse(xhr.responseText || "");
    return data.error || data.message || "";
  } catch {
    return "";
  }
}

function descriptorUrl(data) {
  const url = data && typeof data.url === "string" ? data.url : "";
  return /^https:\/\//i.test(url) ? url : "";
}

function uploadWithXHR(file, pubkey, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint(pubkey), true);
    xhr.timeout = 300000;

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        onProgress(event.loaded / event.total);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let data = null;
        try {
          data = JSON.parse(xhr.responseText || "");
        } catch {
          /* ignore */
        }
        const url = descriptorUrl(data);
        if (!url) {
          reject(new Error("The media server did not return an https URL."));
          return;
        }
        resolve({ url, provider: "bitos" });
        return;
      }
      const message = errorMessage(xhr);
      reject(new Error(message || `Media server upload failed (${xhr.status}).`));
    };
    xhr.onerror = () => {
      const error = new Error("Could not reach the BitOS media server.");
      error.retryable = true;
      reject(error);
    };
    xhr.ontimeout = () =>
      reject(new Error("The BitOS media upload timed out."));
    xhr.onabort = () => reject(new Error("Upload cancelled."));

    xhr.send(buildForm(file, pubkey));
  });
}

async function uploadWithFetch(file, pubkey) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 300000);
  try {
    const response = await fetch(endpoint(pubkey), {
      method: "POST",
      body: buildForm(file, pubkey),
      signal: controller.signal,
    });
    let data = null;
    try {
      data = await response.json();
    } catch {
      /* ignore */
    }
    if (!response.ok) {
      throw new Error(
        (data && (data.error || data.message)) ||
          `Media server upload failed (${response.status}).`
      );
    }
    const url = descriptorUrl(data);
    if (!url) throw new Error("The media server did not return an https URL.");
    return { url, provider: "bitos" };
  } catch (error) {
    if (error && error.name === "AbortError") {
      throw new Error("The BitOS media upload timed out.");
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function uploadToMediaServer(file, pubkey, { onProgress } = {}) {
  if (preferFetch) {
    if (onProgress) onProgress(0.01);
    const result = await uploadWithFetch(file, pubkey);
    if (onProgress) onProgress(1);
    return result;
  }

  try {
    return await uploadWithXHR(file, pubkey, onProgress);
  } catch (error) {
    if (!error || !error.retryable) throw error;
    // XHR's preflight failed (for example OPTIONS 405). fetch sends the same
    // multipart body without that preflight.
    preferFetch = true;
    if (onProgress) onProgress(0.01);
    const result = await uploadWithFetch(file, pubkey);
    if (onProgress) onProgress(1);
    return result;
  }
}

export async function uploadEntriesToMediaServer(
  entries,
  pubkey,
  { onProgress } = {}
) {
  const results = [];
  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    const file = entry && entry.file ? entry.file : entry;
    const result = await uploadToMediaServer(file, pubkey, {
      onProgress: (ratio) => {
        if (!onProgress) return;
        try {
          onProgress({
            index,
            ratio,
            total: entries.length,
            label: (entry && entry.label) || "",
          });
        } catch {
          /* ignore */
        }
      },
    });
    results.push(result);
  }
  return results;
}
