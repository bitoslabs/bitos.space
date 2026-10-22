/**
 * Gallery media helpers. Images are compressed in the browser and embedded as
 * data URLs so a static portfolio can publish without a media server. Video
 * stays a URL because encoded video does not fit inside a relay event.
 */
import { httpUrl } from "./urls.js";

export const GALLERY_LIMIT = 12;
export const INLINE_IMAGE_BUDGET = 600 * 1024;
export const INLINE_IMAGE_TARGET = 120 * 1024;
export const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;
export const MAX_IMAGE_EDGE = 1400;

const DATA_IMAGE = /^data:image\/(?:png|jpe?g|webp|gif|avif);base64,/i;
const DATA_VIDEO = /^data:video\/(?:mp4|webm|ogg);base64,/i;
const VIDEO_FILE = /\.(?:mp4|webm|ogv|ogg|mov|m4v)(?:$|[?#])/i;

export function isDataImage(value) {
  return DATA_IMAGE.test(String(value || "").trim());
}

export function isDataVideo(value) {
  return DATA_VIDEO.test(String(value || "").trim());
}

export function isInlineMedia(value) {
  return String(value || "").trim().toLowerCase().startsWith("data:");
}

export function inferMediaType(value) {
  const raw = String(value || "").trim();
  if (isDataVideo(raw) || VIDEO_FILE.test(raw)) return "video";
  return "image";
}

export function isGalleryMediaUrl(value, type = "image") {
  const raw = String(value || "").trim();
  if (!raw) return false;
  if (type === "video") {
    return Boolean(httpUrl(raw));
  }
  return Boolean(httpUrl(raw)) || isDataImage(raw);
}

export function inlineImageBytes(gallery) {
  return (gallery || []).reduce((total, item) => {
    if (!item || item.public === false || item.type === "video") return total;
    return isDataImage(item.url) ? total + String(item.url).length : total;
  }, 0);
}

export function formatBytes(bytes) {
  const value = Number(bytes) || 0;
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${Math.ceil(value / 1024)} KB`;
  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
}

function decodeImage(file) {
  if (typeof createImageBitmap === "function") {
    return createImageBitmap(file, { imageOrientation: "from-image" }).catch(
      () => decodeWithElement(file)
    );
  }
  return decodeWithElement(file);
}

function decodeWithElement(file) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("That image could not be decoded."));
    };
    image.src = objectUrl;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read the image."));
    reader.readAsDataURL(blob);
  });
}

let webpSupport = null;

function supportsWebp() {
  if (webpSupport !== null) return webpSupport;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    webpSupport = canvas.toDataURL("image/webp").startsWith("data:image/webp");
  } catch {
    webpSupport = false;
  }
  return webpSupport;
}

export async function compressImageFile(
  file,
  { maxEdge = MAX_IMAGE_EDGE, targetBytes = INLINE_IMAGE_TARGET } = {}
) {
  if (!file || !String(file.type || "").startsWith("image/")) {
    throw new Error("Choose an image file (JPEG, PNG, WebP, GIF or AVIF).");
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error(
      `Images must be smaller than ${formatBytes(MAX_UPLOAD_BYTES)}.`
    );
  }

  const source = await decodeImage(file);
  const sourceWidth = source.width;
  const sourceHeight = source.height;
  if (!sourceWidth || !sourceHeight) {
    throw new Error("That image has no readable dimensions.");
  }

  const type = supportsWebp() ? "image/webp" : "image/jpeg";
  const qualitySteps = [0.82, 0.7, 0.58, 0.46, 0.36];
  let scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
  let chosen = null;

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(sourceWidth * scale));
    canvas.height = Math.max(1, Math.round(sourceHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) break;
    if (type === "image/jpeg") {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(source, 0, 0, canvas.width, canvas.height);

    for (const quality of qualitySteps) {
      const blob = await canvasToBlob(canvas, type, quality);
      if (!blob) continue;
      chosen = { blob, width: canvas.width, height: canvas.height };
      if (blob.size <= targetBytes) break;
    }

    if (chosen && chosen.blob.size <= targetBytes) break;
    if (Math.max(canvas.width, canvas.height) <= 640) break;
    scale *= 0.78;
  }

  if (source.close) source.close();
  if (!chosen) throw new Error("The browser could not process that image.");

  const dataUrl = await blobToDataUrl(chosen.blob);
  return {
    dataUrl,
    bytes: dataUrl.length,
    width: chosen.width,
    height: chosen.height,
    mime: chosen.blob.type,
    originalBytes: file.size,
  };
}
