/**
 * QR rendering through the vendored qrcode-generator (classic script).
 * If the library is unavailable, the caller still has copy/share paths.
 */
import { setHidden } from "../shared/dom.js";

const LOGO_URL = new URL("../../../assets/bee.svg", import.meta.url).href;

export function renderQr(container, text, { logo = false } = {}) {
  if (!container) return false;
  if (!window.qrcode || !text) {
    clearQr(container);
    return false;
  }
  try {
    const qr = window.qrcode(0, logo ? "H" : "M");
    qr.addData(text);
    qr.make();
    const cellSize = 4;
    let markup = qr.createSvgTag(cellSize, 0);
    if (logo) markup = addCenterLogo(markup, qr.getModuleCount() * cellSize);
    container.innerHTML = markup;
    setHidden(container, false);
    return true;
  } catch {
    clearQr(container);
    return false;
  }
}

function addCenterLogo(markup, size) {
  const plateSize = Math.round(size * 0.26);
  const logoSize = Math.round(size * 0.2);
  const plate = (size - plateSize) / 2;
  const inset = (size - logoSize) / 2;
  const overlay =
    `<rect x="${plate}" y="${plate}" width="${plateSize}" height="${plateSize}" rx="${plateSize * 0.24}" fill="#ffffff"/>` +
    `<image href="${LOGO_URL}" x="${inset}" y="${inset}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet"/>`;
  return markup.replace("</svg>", `${overlay}</svg>`);
}

export function clearQr(container) {
  if (!container) return;
  container.innerHTML = "";
  setHidden(container, true);
}
