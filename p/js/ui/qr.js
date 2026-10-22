/**
 * QR rendering through the vendored qrcode-generator (classic script).
 * If the library is unavailable, the caller still has copy/share paths.
 */
import { setHidden } from "../shared/dom.js";

export function renderQr(container, text) {
  if (!container) return false;
  if (!window.qrcode || !text) {
    clearQr(container);
    return false;
  }
  try {
    const qr = window.qrcode(0, "M");
    qr.addData(text);
    qr.make();
    container.innerHTML = qr.createSvgTag(4, 0);
    setHidden(container, false);
    return true;
  } catch {
    clearQr(container);
    return false;
  }
}

export function clearQr(container) {
  if (!container) return;
  container.innerHTML = "";
  setHidden(container, true);
}
