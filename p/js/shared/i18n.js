/**
 * Minimal EN / Lao i18n for the portfolio app.
 *
 * English source strings are used as keys so untranslated strings fall back to
 * English automatically. Use `data-i18n` for text, `data-i18n-html` for trusted
 * markup, and the placeholder/title/aria variants for attributes.
 */
const STORAGE_KEY = "lang";
const SUPPORTED = ["en", "lo"];
const LO = {
  "Skip to content": "ຂ້າມໄປເນື້ອຫາ",
  "BitOS home": "ໜ້າຫຼັກ BitOS",
  "How it works": "ວິທີການເຮັດວຽກ",
  "Sample": "ຕົວຢ່າງ",
  "Data standard": "ມາດຕະຖານຂໍ້ມູນ",
  "Data Standard": "ມາດຕະຖານຂໍ້ມູນ",
  "Portfolio": "ຜົນງານ",
  "Portfolio app sections": "ພາກສ່ວນຂອງແອັບຜົນງານ",
  "Profile sections": "ພາກສ່ວນໂປຣໄຟລ໌",
  "Open profile sections": "ເປີດພາກສ່ວນໂປຣໄຟລ໌",
  "Gallery": "ຄັງຮູບ",
  "Skills": "ທັກສະ",
  "About": "ກ່ຽວກັບ",
  "Share": "ແບ່ງປັນ",
  "My portfolio": "ຜົນງານຂອງຂ້ອຍ",
  "Sign in": "ເຂົ້າສູ່ລະບົບ",
  "Preview with sample data — not a published profile. Nothing here is signed or stored on a relay.":
    "ເບິ່ງດ້ວຍຂໍ້ມູນຕົວຢ່າງ — ບໍ່ແມ່ນໂປຣໄຟລ໌ທີ່ເຜີຍແຜ່. ບໍ່ມີສິ່ງໃດຖືກລົງລາຍເຊັນ ຫຼື ເກັບໄວ້ໃນ relay.",
  "Personal portfolio · Nostr native": "ຜົນງານສ່ວນຕົວ · ເປັນມາດຕະຖານ Nostr",
  "Your work, signed by your key.": "ຜົນງານຂອງທ່ານ ທີ່ລົງລາຍເຊັນດ້ວຍກະແຈຂອງທ່ານ.",
  "Publish a portfolio at <span class=\"mono\">bitos.space/p/{profileRef}</span> using an <span class=\"mono\">npub</span> or a <span class=\"mono\">NIP-05</span> address. No platform account: the page follows your key, and only that key can edit it.":
    "ເຜີຍແຜ່ຜົນງານທີ່ <span class=\"mono\">bitos.space/p/{profileRef}</span> ໂດຍໃຊ້ທີ່ຢູ່ <span class=\"mono\">npub</span> ຫຼື <span class=\"mono\">NIP-05</span>. ບໍ່ຕ້ອງມີບັນຊີແພລດຟອມ: ໜ້ານີ້ຕິດຕາມກະແຈຂອງທ່ານ ແລະ ມີພຽງກະແຈນັ້ນທີ່ແກ້ໄຂໄດ້.",
  "Profile reference": "ການອ້າງອີງໂປຣໄຟລ໌",
  "npub1…, NIP-05, or alias": "npub1…, NIP-05, ຫຼື ຊື່ຫຼິ້ນ",
  "Open profile": "ເປີດໂປຣໄຟລ໌",
  "Sign in to manage": "ເຂົ້າສູ່ລະບົບເພື່ອຈັດການ",
  "View a sample portfolio": "ເບິ່ງຕົວຢ່າງຜົນງານ",
  "01 — Address": "01 — ທີ່ຢູ່",
  "npub or NIP-05": "npub ຫຼື NIP-05",
  "<span class=\"mono\">npub</span> is the portable public key. <span class=\"mono\">NIP-05</span> is a human-readable alias like <span class=\"mono\">you@yourdomain.com</span> that resolves to the same key.":
    "<span class=\"mono\">npub</span> ແມ່ນກະແຈສາທາລະນະທີ່ເຄື່ອນຍ້າຍໄດ້. <span class=\"mono\">NIP-05</span> ແມ່ນຊື່ຫຼິ້ນທີ່ອ່ານງ່າຍ ເຊັ່ນ <span class=\"mono\">you@yourdomain.com</span> ທີ່ຊີ້ໄປຫາກະແຈດຽວກັນ.",
  "02 — Ownership": "02 — ຄວາມເປັນເຈົ້າຂອງ",
  "Only the key can edit": "ມີພຽງກະແຈທີ່ແກ້ໄຂໄດ້",
  "Edits are signed with a Nostr signer (NIP-07 or NIP-46). A visitor can read every field but cannot change one; relays reject a write signed by another key.":
    "ການແກ້ໄຂຈະຖືກລົງລາຍເຊັນດ້ວຍຕົວລົງລາຍເຊັນ Nostr (NIP-07 ຫຼື NIP-46). ຜູ້ເຂົ້າຊົມສາມາດອ່ານທຸກຊ່ອງໄດ້ ແຕ່ບໍ່ສາມາດປ່ຽນໄດ້; relay ຈະປະຕິເສດການຂຽນທີ່ລົງລາຍເຊັນດ້ວຍກະແຈອື່ນ.",
  "03 — Portability": "03 — ການເຄື່ອນຍ້າຍໄດ້",
  "Your data leaves with you": "ຂໍ້ມູນຂອງທ່ານໄປນຳທ່ານ",
  "The portfolio is a NIP-78 app-data event (kind 30078) on relays you choose. Export the JSON at any time; no private drafts are published.":
    "ຜົນງານແມ່ນ event ຂໍ້ມູນແອັບ NIP-78 (kind 30078) ເທິງ relay ທີ່ທ່ານເລືອກ. ສົ່ງອອກ JSON ໄດ້ທຸກເວລາ; ສະບັບຮ່າງສ່ວນຕົວຈະບໍ່ຖືກເຜີຍແຜ່.",
  "Recently published": "ເຜີຍແຜ່ລ່າສຸດ",
  "Portfolios from your relays": "ຜົນງານຈາກ relay ຂອງທ່ານ",
  "Public portfolio events from the relays configured in this browser — not a global directory.":
    "event ຜົນງານສາທາລະນະຈາກ relay ທີ່ຕັ້ງໄວ້ໃນເບຣົາເຊີນີ້ — ບໍ່ແມ່ນສານບັນຊີລວມທົ່ວໂລກ.",
  "Refresh": "ໂຫຼດໃໝ່",
  "Load more": "ໂຫຼດເພີ່ມ",
  "Public pages only. Private drafts stay in this browser.":
    "ສະເພາະໜ້າສາທາລະນະ. ສະບັບຮ່າງສ່ວນຕົວຈະຢູ່ໃນເບຣົາເຊີນີ້ເທົ່ານັ້ນ.",
  "Resolving profile…": "ກຳລັງຄົ້ນຫາໂປຣໄຟລ໌…",
  "Owner mode": "ໂໝດເຈົ້າຂອງ",
  "Edit portfolio": "ແກ້ໄຂຜົນງານ",
  "Not published yet.": "ຍັງບໍ່ໄດ້ເຜີຍແຜ່.",
  "View public page": "ເບິ່ງໜ້າສາທາລະນະ",
  "Publish": "ເຜີຍແຜ່",
  "Publish to Nostr": "ເຜີຍແຜ່ໄປ Nostr",
  "Editor sections": "ພາກສ່ວນແອັບແກ້ໄຂ",
  "Projects": "ໂຄງການ",
  "Identity": "ຕົວຕົນ",
  "Public fields. No address or phone is required.":
    "ຊ່ອງສາທາລະນະ. ບໍ່ຕ້ອງການທີ່ຢູ່ ຫຼື ເບີໂທ.",
  "Name": "ຊື່",
  "Short name": "ຊື່ສັ້ນ",
  "Portfolio type": "ປະເພດຜົນງານ",
  "Personal portfolio": "ຜົນງານສ່ວນຕົວ",
  "One person's work, skills and evidence.": "ຜົນງານ ທັກສະ ແລະ ຫຼັກຖານຂອງບຸກຄົນໜຶ່ງ.",
  "Organization / business": "ອົງກອນ / ທຸລະກິດ",
  "Team page with a business presence link on BNOS.":
    "ໜ້າທີມພ້ອມລິ້ງທຸລະກິດເທິງ BNOS.",
  "Open BNOS business presence ↗": "ເປີດໜ້າທຸລະກິດ BNOS ↗",
  "Headline": "ຫົວຂໍ້",
  "Introduction": "ແນະນຳຕົວ",
  "Location": "ສະຖານທີ່",
  "Time zone": "ເຂດເວລາ",
  "Languages": "ພາສາ",
  "Availability": "ຄວາມພ້ອມ",
  "Not stated": "ບໍ່ໄດ້ລະບຸ",
  "Available": "ພ້ອມ",
  "Open to work": "ເປີດຮັບວຽກ",
  "Select projects only": "ສະເພາະໂຄງການທີ່ເລືອກ",
  "Unavailable": "ບໍ່ພ້ອມ",
  "Availability note": "ໝາຍເຫດຄວາມພ້ອມ",
  "Available for select projects": "ພ້ອມສຳລັບໂຄງການທີ່ເລືອກ",
  "Avatar URL": "URL ຮູບໂປຣໄຟລ໌",
  "Banner URL": "URL ຮູບປົກ",
  "Portfolio style": "ຮູບແບບຜົນງານ",
  "Each style changes the layout and palette of your public page. The choice is published with your portfolio and also drives the browser theme-color.":
    "ແຕ່ລະຮູບແບບຈະປ່ຽນການຈັດວາງ ແລະ ສີຂອງໜ້າສາທາລະນະ. ຕົວເລືອກຈະຖືກເຜີຍແຜ່ພ້ອມຜົນງານ ແລະ ກຳນົດສີ theme-color ຂອງເບຣົາເຊີ.",
  "Portfolio theme": "ທີມຜົນງານ",
  "Spotlight <b>Obsidian</b>": "ໄຮໄລທ໌ <b>Obsidian</b>",
  "Featured bento, sticky details, dark violet glass.":
    "ບັນໂຕເດັ່ນ, ລາຍລະອຽດຕິດໜ້າ, ແກ້ວສີມ່ວງເຂັ້ມ.",
  "Editorial <b>Parchment</b>": "ບັນນາທິການ <b>Parchment</b>",
  "Single-column paper, alternating work rows.": "ກະດາດຖັນດຽວ, ສະຫຼັບແຖວຜົນງານ.",
  "Dossier <b>Signal</b>": "ເອກະສານ <b>Signal</b>",
  "Compact terminal grid, dense media wall.": "ຕາຕະລາງ terminal ກະທັດລັດ, ຝາເຮັດສື່ໜາແໜ້ນ.",
  "The style changes layout and palette only — your content, media and signed data stay the same. It sets the default mode; visitors can switch dark or light on your public page.":
    "ຮູບແບບປ່ຽນພຽງການຈັດວາງ ແລະ ສີ — ເນື້ອຫາ, ສື່ ແລະ ຂໍ້ມູນທີ່ລົງລາຍເຊັນຍັງຄືເກົ່າ. ມັນກຳນົດໂໝດເລີ່ມຕົ້ນ; ຜູ້ເຂົ້າຊົມສາມາດປ່ຽນມືດ ຫຼື ແຈ້ງໄດ້.",
  "Identity links": "ລິ້ງຕົວຕົນ",
  "Optional. NIP-05 is verified against DNS when present.":
    "ບໍ່ບັງຄັບ. NIP-05 ຈະຖືກກວດສອບກັບ DNS ເມື່ອມີ.",
  "Contact label": "ປ້າຍຕິດຕໍ່",
  "Request contact": "ຂໍຕິດຕໍ່",
  "Contact link": "ລິ້ງຕິດຕໍ່",
  "mailto:you@example.com or https://…": "mailto:you@example.com ຫຼື https://…",
  "The contact button opens your chosen link. bitos.space does not store messages or inquiries.":
    "ປຸ່ມຕິດຕໍ່ຈະເປີດລິ້ງທີ່ທ່ານເລືອກ. bitos.space ບໍ່ເກັບຂໍ້ຄວາມ ຫຼື ຄຳຖາມ.",
  "Set up NIP-05": "ຕັ້ງຄ່າ NIP-05",
  "You need a domain you control. The wizard generates the file that maps your name to your key, then verifies it live.":
    "ທ່ານຕ້ອງມີໂດເມນທີ່ຄວບຄຸມເອງ. ຕົວຊ່ວຍຈະສ້າງໄຟລ໌ທີ່ແຜນຊື່ຂອງທ່ານໄປຫາກະແຈ ແລ້ວກວດສອບທັນທີ.",
  "Host this file at": "ໂຮສໄຟລ໌ນີ້ທີ່",
  "with": "ດ້ວຍ",
  "and a JSON content type.": "ແລະ ປະເພດເນື້ອຫາ JSON.",
  "Copy JSON": "ຄັດລອກ JSON",
  "Verify now": "ກວດສອບດຽວນີ້",
  "Links": "ລິ້ງ",
  "Add link": "ເພີ່ມລິ້ງ",
  "Portfolio projects": "ໂຄງການໃນຜົນງານ",
  "Only checked projects are included in the signed public event. Unchecked projects stay in this browser as drafts.":
    "ສະເພາະໂຄງການທີ່ຕິກເລືອກຈະຖືກລວມໃນ event ສາທາລະນະທີ່ລົງລາຍເຊັນ. ໂຄງການທີ່ບໍ່ຕິກຈະຢູ່ໃນເບຣົາເຊີນີ້ເປັນສະບັບຮ່າງ.",
  "Add project": "ເພີ່ມໂຄງການ",
  "Uploads go to BitOS media storage first; if that service is unavailable, the Blossom server below is used as a fallback. Your event stores only the returned links, so media stays out of the signed data.":
    "ການອັບໂຫຼດຈະໄປ BitOS media storage ກ່ອນ; ຖ້າບໍ່ພ້ອມ ຈະໃຊ້ເຊີບເວີ Blossom ຂ້າງລຸ່ມເປັນທາງເລືອກ. event ຂອງທ່ານເກັບພຽງລິ້ງທີ່ໄດ້ກັບມາ, ສື່ຈຶ່ງບໍ່ຢູ່ໃນຂໍ້ມູນທີ່ລົງລາຍເຊັນ.",
  "Drop images or video here": "ວາງຮູບ ຫຼື ວິດີໂອທີ່ນີ້",
  "Files upload to BitOS with your Blossom server as fallback; only the returned links are stored in your event. Images up to 20 MB, MP4/WebM up to 100 MB.":
    "ໄຟລ໌ຈະອັບໄປ BitOS ໂດຍມີເຊີບເວີ Blossom ເປັນທາງເລືອກ; event ເກັບພຽງລິ້ງທີ່ໄດ້ກັບມາ. ຮູບສູງສຸດ 20 MB, MP4/WebM ສູງສຸດ 100 MB.",
  "Upload media": "ອັບໂຫຼດສື່",
  "Add image URL": "ເພີ່ມ URL ຮູບ",
  "Add video link": "ເພີ່ມລິ້ງວິດີໂອ",
  "Upload images or video to your Blossom server": "ອັບໂຫຼດຮູບ ຫຼື ວິດີໂອໄປເຊີບເວີ Blossom",
  "Blossom fallback server": "ເຊີບເວີສຳຮອງ Blossom",
  "Used only if the BitOS media service is unavailable. Files stay on that server and are linked into your event — the event never contains the media bytes. Saved in this browser.":
    "ໃຊ້ພຽງເມື່ອບໍລິການສື່ BitOS ບໍ່ພ້ອມ. ໄຟລ໌ຈະຢູ່ເທິງເຊີບເວີນັ້ນ ແລະ ຖືກເຊື່ອມໃນ event — event ຈະບໍ່ມີຂໍ້ມູນສື່. ບັນທຶກໃນເບຣົາເຊີນີ້.",
  "Blossom spec": "ຂໍ້ກຳນົດ Blossom",
  "How media is stored": "ວິທີເກັບສື່",
  "<strong>Upload media</strong> sends images or video to the BitOS media service first. If it is unavailable, the Blossom server above is used with a signed upload request. Only the returned https:// links are stored in your event, so keep the files available at those hosts.":
    "<strong>ອັບໂຫຼດສື່</strong> ຈະສົ່ງຮູບ ຫຼື ວິດີໂອໄປບໍລິການສື່ BitOS ກ່ອນ. ຖ້າບໍ່ພ້ອມ ຈະໃຊ້ເຊີບເວີ Blossom ຂ້າງເທິງດ້ວຍຄຳຂໍອັບໂຫຼດທີ່ລົງລາຍເຊັນ. ມີພຽງລິ້ງ https:// ທີ່ໄດ້ກັບມາເກັບໃນ event, ດັ່ງນັ້ນຈົ່ງຮັກສາໄຟລ໌ໃຫ້ຢູ່ເທິງໂຮສເຫຼົ່ານັ້ນ.",
  "<strong>Images and video</strong> can also be added as hosted URLs. Images are never embedded into the event anymore; older profiles with embedded images remain readable and are shown with the legacy budget above.":
    "<strong>ຮູບ ແລະ ວິດີໂອ</strong> ສາມາດເພີ່ມເປັນ URL ທີ່ໂຮສໄດ້. ຮູບຈະບໍ່ຖືກຝັງໃນ event ອີກ; ໂປຣໄຟລ໌ເກົ່າທີ່ມີຮູບຝັງຍັງອ່ານໄດ້ ແລະ ສະແດງດ້ວຍງົບ legacy ຂ້າງເທິງ.",
  "<strong>Video previews</strong> use a generated poster frame, uploaded alongside the video and stored as a link.":
    "<strong>ຕົວຢ່າງວິດີໂອ</strong> ໃຊ້ຮູບ poster ທີ່ສ້າງຂຶ້ນ, ອັບໂຫຼດພ້ອມວິດີໂອ ແລະ ເກັບເປັນລິ້ງ.",
  "<strong>Alt text and captions</strong> make the gallery usable for screen readers and give visitors context before they open an item.":
    "<strong>Alt text ແລະ ຄຳອະທິບາຍ</strong> ຊ່ວຍໃຫ້ຄັງຮູບໃຊ້ໄດ້ກັບ screen reader ແລະ ໃຫ້ບໍລິບົດແກ່ຜູ້ເຂົ້າຊົມກ່ອນເປີດ.",
  "Relays enforce different event size limits. Media links keep the signed event small; publishing only sends the links.":
    "relay ມີຂີດຈຳກັດຂະໜາດ event ຕ່າງກັນ. ລິ້ງສື່ຊ່ວຍໃຫ້ event ທີ່ລົງລາຍເຊັນມີຂະໜາດນ້ອຍ; ການເຜີຍແຜ່ສົ່ງພຽງລິ້ງ.",
  "Unchecked items stay in this browser as drafts and are never included in the signed public event.":
    "ລາຍການທີ່ບໍ່ຕິກຈະຢູ່ໃນເບຣົາເຊີນີ້ເປັນສະບັບຮ່າງ ແລະ ບໍ່ຖືກລວມໃນ event ສາທາລະນະທີ່ລົງລາຍເຊັນ.",
  "Two grades only: your own claim, or evidence listed by an issuer. No global rating.":
    "ມີພຽງສອງລະດັບ: ຄຳກ່າວອ້າງຂອງທ່ານເອງ ຫຼື ຫຼັກຖານທີ່ຜູ້ອອກຮັບຮອງລະບຸ. ບໍ່ມີຄະແນນລວມ.",
  "Add skill": "ເພີ່ມທັກສະ",
  "Credentials": "ໃບຮັບຮອງ",
  "Optional. The issuer is shown with each record; bitos.space does not independently verify it.":
    "ບໍ່ບັງຄັບ. ຜູ້ອອກຈະສະແດງກັບແຕ່ລະບັນທຶກ; bitos.space ບໍ່ໄດ້ກວດສອບຢ່າງເປັນເອກະລາດ.",
  "Add credential": "ເພີ່ມໃບຮັບຮອງ",
  "Event": "event",
  "Replaceable key": "ກະແຈທີ່ປ່ຽນແທນໄດ້",
  "Public URL": "URL ສາທາລະນະ",
  "Drafts": "ສະບັບຮ່າງ",
  "Kept in this browser only": "ເກັບໃນເບຣົາເຊີນີ້ເທົ່ານັ້ນ",
  "Publishing replaces the previous portfolio event for the same key. Readers always see the newest signed version. Your signer will ask for approval before anything is sent.":
    "ການເຜີຍແຜ່ຈະປ່ຽນ event ຜົນງານກ່ອນໜ້າຂອງກະແຈດຽວກັນ. ຜູ້ອ່ານຈະເຫັນສະບັບທີ່ລົງລາຍເຊັນໃໝ່ສຸດ. ຕົວລົງລາຍເຊັນຈະຂໍອະນຸມັດກ່ອນສົ່ງ.",
  "<strong>Kind 0 is separate.</strong> This editor does not overwrite your Nostr profile metadata (name, about, avatar and NIP-05 used by other clients). Those fields are only used as a fallback when the portfolio leaves them empty.":
    "<strong>Kind 0 ແຍກຕ່າງຫາກ.</strong> ຕົວແກ້ໄຂນີ້ບໍ່ຂຽນທັບ metadata ໂປຣໄຟລ໌ Nostr ຂອງທ່ານ (ຊື່, ກ່ຽວກັບ, ຮູບ ແລະ NIP-05 ທີ່ແອັບອື່ນໃຊ້). ຊ່ອງເຫຼົ່ານັ້ນຈະຖືກໃຊ້ເປັນທາງເລືອກເມື່ອຜົນງານປ່ອຍວ່າງ.",
  "Relays": "relay",
  "Save relays": "ບັນທຶກ relay",
  "One WebSocket URL per line. Choose relays you trust to keep your public portfolio available. Defaults are public relays.":
    "ໜຶ່ງ URL WebSocket ຕໍ່ແຖວ. ເລືອກ relay ທີ່ທ່ານໄວ້ໃຈໃຫ້ຜົນງານສາທາລະນະຂອງທ່ານພ້ອມໃຊ້. ຄ່າເລີ່ມຕົ້ນແມ່ນ relay ສາທາລະນະ.",
  "Portability": "ການເຄື່ອນຍ້າຍ",
  "Export JSON": "ສົ່ງອອກ JSON",
  "Import JSON": "ນຳເຂົ້າ JSON",
  "Export includes local drafts. Import accepts a previously exported file and keeps it as a local draft until you publish.":
    "ການສົ່ງອອກລວມສະບັບຮ່າງໃນເຄື່ອງ. ການນຳເຂົ້າຮັບໄຟລ໌ທີ່ສົ່ງອອກກ່ອນໜ້າ ແລະ ເກັບເປັນສະບັບຮ່າງຈົນກວ່າຈະເຜີຍແຜ່.",
  "Relay results": "ຜົນ relay",
  "No changes yet": "ຍັງບໍ່ມີການປ່ຽນແປງ",
  "Discard draft": "ຖິ້ມສະບັບຮ່າງ",
  "Save draft": "ບັນທຶກສະບັບຮ່າງ",
  "Canonical address": "ທີ່ຢູ່ຫຼັກ",
  "One key, one canonical page. The public key is the stable reference; NIP-05 is a human-readable alias that points to it.":
    "ໜຶ່ງກະແຈ, ໜຶ່ງໜ້າຫຼັກ. ກະແຈສາທາລະນະແມ່ນການອ້າງອີງທີ່ໝັ້ນຄົງ; NIP-05 ແມ່ນຊື່ຫຼິ້ນທີ່ອ່ານງ່າຍທີ່ຊີ້ໄປຫາມັນ.",
  "Protocol": "ໂປຣໂຕຄໍ",
  "Home": "ໜ້າຫຼັກ",
  "Sample portfolio": "ຕົວຢ່າງຜົນງານ",
  "Credential verification · Demo": "ການກວດສອບໃບຮັບຮອງ · ຕົວຢ່າງ",
  "Confirm": "ຢືນຢັນ",
  "Are you sure?": "ແນ່ໃຈບໍ?",
  "Cancel": "ຍົກເລີກ",
  "Sign in with a Nostr signer": "ເຂົ້າສູ່ລະບົບດ້ວຍຕົວລົງລາຍເຊັນ Nostr",
  "Not signed in": "ຍັງບໍ່ໄດ້ເຂົ້າສູ່ລະບົບ",
  "Your portfolio": "ຜົນງານຂອງທ່ານ",
  "Checking…": "ກຳລັງກວດ…",
  "View public page": "ເບິ່ງໜ້າສາທາລະນະ",
  "Signer type": "ປະເພດຕົວລົງລາຍເຊັນ",
  "Extension": "ສ່ວນຂະຫຍາຍ",
  "Remote": "ທາງໄກ",
  "Local key": "ກະແຈໃນເຄື່ອງ",
  "Create account": "ສ້າງບັນຊີ",
  "A NIP-07 extension keeps your key inside the extension. This page only asks it to sign.":
    "ສ່ວນຂະຫຍາຍ NIP-07 ເກັບກະແຈຂອງທ່ານໄວ້ໃນສ່ວນຂະຫຍາຍ. ໜ້ານີ້ພຽງແຕ່ຂໍໃຫ້ລົງລາຍເຊັນ.",
  "Connect NIP-07 signer": "ເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນ NIP-07",
  "Private key": "ກະແຈສ່ວນຕົວ",
  "nsec1… or 64-character secret key": "nsec1… ຫຼື ກະແຈລັບ 64 ຕົວອັກສອນ",
  "Show private key": "ສະແດງກະແຈສ່ວນຕົວ",
  "Remember this device (stores the key in localStorage)":
    "ຈື່ອຸປະກອນນີ້ (ເກັບກະແຈໃນ localStorage)",
  "Without this, the key is kept in sessionStorage and is cleared when this tab closes. Only use a local key on a device you trust.":
    "ຖ້າບໍ່ເລືອກ, ກະແຈຈະຢູ່ໃນ sessionStorage ແລະ ຖືກລຶບເມື່ອປິດແທັບນີ້. ໃຊ້ກະແຈໃນເຄື່ອງສະເພາະອຸປະກອນທີ່ທ່ານໄວ້ໃຈ.",
  "Sign in with private key": "ເຂົ້າສູ່ລະບົບດ້ວຍກະແຈສ່ວນຕົວ",
  "Bunker URL": "URL bunker",
  "Connect with bunker URL": "ເຊື່ອມຕໍ່ດ້ວຍ URL bunker",
  "or": "ຫຼື",
  "Connect with a signer app": "ເຊື່ອມຕໍ່ດ້ວຍແອັບຕົວລົງລາຍເຊັນ",
  "Open or copy this link in Amber, nsec.app, or another NIP-46 signer. Keep this dialog open while you approve.":
    "ເປີດ ຫຼື ຄັດລອກລິ້ງນີ້ໃນ Amber, nsec.app ຫຼື ຕົວລົງລາຍເຊັນ NIP-46 ອື່ນ. ເປີດໜ້ານີ້ໄວ້ຈົນກວ່າຈະອະນຸມັດ.",
  "Copy link": "ຄັດລອກລິ້ງ",
  "Open signer app": "ເປີດແອັບຕົວລົງລາຍເຊັນ",
  "Create a new Nostr account for this portfolio. Your nsec is the only way to edit it, so back it up before continuing.":
    "ສ້າງບັນຊີ Nostr ໃໝ່ສຳລັບຜົນງານນີ້. nsec ຂອງທ່ານເປັນທາງດຽວທີ່ຈະແກ້ໄຂໄດ້, ດັ່ງນັ້ນຈົ່ງສຳຮອງກ່ອນ.",
  "Create a new account": "ສ້າງບັນຊີໃໝ່",
  "Public key": "ກະແຈສາທາລະນະ",
  "Copy": "ຄັດລອກ",
  "Private key (nsec)": "ກະແຈສ່ວນຕົວ (nsec)",
  "Anyone with this nsec can sign as you. Store it in a password manager or offline backup. It cannot be recovered.":
    "ໃຜກໍ່ຕາມທີ່ມີ nsec ນີ້ສາມາດລົງລາຍເຊັນແທນທ່ານໄດ້. ເກັບໄວ້ໃນຕົວຈັດການລະຫັດ ຫຼື ສຳຮອງແບບອອບລາຍ. ມັນກູ້ຄືນບໍ່ໄດ້.",
  "I saved my nsec somewhere safe": "ຂ້ອຍໄດ້ເກັບ nsec ໄວ້ໃນບ່ອນທີ່ປອດໄພແລ້ວ",
  "Continue with this account": "ສືບຕໍ່ດ້ວຍບັນຊີນີ້",
  "Generate a different key": "ສ້າງກະແຈອື່ນ",
  "Sign out": "ອອກຈາກລະບົບ",
  "Relay settings": "ການຕັ້ງຄ່າ relay",
  "Used to read and publish your portfolio. One URL per line.":
    "ໃຊ້ອ່ານ ແລະ ເຜີຍແຜ່ຜົນງານຂອງທ່ານ. ໜຶ່ງ URL ຕໍ່ແຖວ.",
  "Scan to open": "ສະແກນເພື່ອເປີດ",
  "Close": "ປິດ",
  "Close gallery": "ປິດຄັງຮູບ",
  "Previous item": "ລາຍການກ່ອນໜ້າ",
  "Next item": "ລາຍການຕໍ່ໄປ",
  "This portfolio page needs JavaScript to resolve a Nostr key and render the profile.":
    "ໜ້າຜົນງານນີ້ຕ້ອງການ JavaScript ເພື່ອຄົ້ນຫາກະແຈ Nostr ແລະ ສະແດງໂປຣໄຟລ໌.",
  "Switch to light theme": "ປ່ຽນເປັນທີມແຈ້ງ",
  "Toggle theme": "ສະຫຼັບທີມ",
  "Manage your Nostr signer": "ຈັດການຕົວລົງລາຍເຊັນ Nostr",
  "Sign in to manage your portfolio": "ເຂົ້າສູ່ລະບົບເພື່ອຈັດການຜົນງານຂອງທ່ານ",
  "Account": "ບັນຊີ",
  "Manage signer": "ຈັດການຕົວລົງລາຍເຊັນ",
  "Relays are unavailable": "relay ບໍ່ພ້ອມໃຊ້",
  "The relays configured in this browser did not answer. Check your connection or change the relay list, then retry.":
    "relay ທີ່ຕັ້ງໄວ້ໃນເບຣົາເຊີນີ້ບໍ່ຕອບສະໜອງ. ກວດການເຊື່ອມຕໍ່ ຫຼື ປ່ຽນລາຍການ relay ແລ້ວລອງໃໝ່.",
  "Profile not found": "ບໍ່ພົບໂປຣໄຟລ໌",
  "That reference could not be resolved.": "ບໍ່ສາມາດແກ້ການອ້າງອີງນັ້ນໄດ້.",
  "No portfolio published for this key": "ຍັງບໍ່ມີຜົນງານທີ່ເຜີຍແຜ່ສຳລັບກະແຈນີ້",
  "The key resolves, but no signed portfolio event was found on the configured relays. Only the key holder can publish one.":
    "ກະແຈແກ້ໄດ້ ແຕ່ບໍ່ພົບ event ຜົນງານທີ່ລົງລາຍເຊັນເທິງ relay ທີ່ຕັ້ງໄວ້. ມີພຽງເຈົ້າຂອງກະແຈທີ່ເຜີຍແຜ່ໄດ້.",
  "This Nostr key has not published a portfolio yet.": "ກະແຈ Nostr ນີ້ຍັງບໍ່ໄດ້ເຜີຍແຜ່ຜົນງານ.",
  "Looking up": "ກຳລັງຄົ້ນຫາ",
  "Loading from relays…": "ກຳລັງໂຫຼດຈາກ relay…",
  "Loading sample portfolio…": "ກຳລັງໂຫຼດຕົວຢ່າງຜົນງານ…",
  "Illustrative data only.": "ຂໍ້ມູນສະແດງຜົນເທົ່ານັ້ນ.",
  "Sample data is malformed.": "ຂໍ້ມູນຕົວຢ່າງຜິດຮູບແບບ.",
  "Sample unavailable": "ຕົວຢ່າງບໍ່ພ້ອມໃຊ້",
  "Could not load the sample portfolio.": "ບໍ່ສາມາດໂຫຼດຕົວຢ່າງຜົນງານໄດ້.",
  "Sample data is read-only. Sign in to create your own portfolio.":
    "ຂໍ້ມູນຕົວຢ່າງອ່ານໄດ້ຢ່າງດຽວ. ເຂົ້າສູ່ລະບົບເພື່ອສ້າງຜົນງານຂອງທ່ານເອງ.",
  "This page belongs to a different key. Sign in with the owner key to edit it.":
    "ໜ້ານີ້ເປັນຂອງກະແຈອື່ນ. ເຂົ້າສູ່ລະບົບດ້ວຍກະແຈເຈົ້າຂອງເພື່ອແກ້ໄຂ.",
  "This portfolio belongs to a different key. Sign in with the owner key to edit it.":
    "ຜົນງານນີ້ເປັນຂອງກະແຈອື່ນ. ເຂົ້າສູ່ລະບົບດ້ວຍກະແຈເຈົ້າຂອງເພື່ອແກ້ໄຂ.",
  "Nostr portfolio": "ຜົນງານ Nostr",
  "Link copied.": "ຄັດລອກລິ້ງແລ້ວ.",
  "Could not copy the link.": "ບໍ່ສາມາດຄັດລອກລິ້ງໄດ້.",
  "Copied.": "ຄັດລອກແລ້ວ.",
  "Could not copy.": "ບໍ່ສາມາດຄັດລອກໄດ້.",
  "QR rendering is unavailable. Copy the link instead.":
    "ບໍ່ສາມາດສ້າງ QR ໄດ້. ກະລຸນາຄັດລອກລິ້ງແທນ.",
  "No contact link is configured.": "ຍັງບໍ່ໄດ້ຕັ້ງລິ້ງຕິດຕໍ່.",
  "Enter an npub, NIP-05 address, or alias.": "ໃສ່ npub, ທີ່ຢູ່ NIP-05 ຫຼື ຊື່ຫຼິ້ນ.",
  "Self-described only": "ອະທິບາຍຕົນເອງເທົ່ານັ້ນ",
  "Self-described": "ອະທິບາຍຕົນເອງ",
  "Issuer-listed": "ຜູ້ອອກລະບຸ",
  "Listed by an issuer": "ລະບຸໂດຍຜູ້ອອກ",
  "Owner-provided": "ເຈົ້າຂອງໃຫ້ມາ",
  "Owner-reported": "ເຈົ້າຂອງລາຍງານ",
  "Not independently verified": "ບໍ່ໄດ້ກວດສອບຢ່າງເປັນເອກະລາດ",
  "Contribution": "ການປະກອບສ່ວນ",
  "Role": "ບົດບາດ",
  "Sample record": "ບັນທຶກຕົວຢ່າງ",
  "Signed record": "ບັນທຶກທີ່ລົງລາຍເຊັນ",
  "Untitled project": "ໂຄງການບໍ່ມີຊື່",
  "Read the case": "ອ່ານລາຍລະອຽດ",
  "Open project": "ເປີດໂຄງການ",
  "Video": "ວິດີໂອ",
  "Image": "ຮູບ",
  "Play video": "ຫຼິ້ນວິດີໂອ",
  "Open image": "ເປີດຮູບ",
  "Contact": "ຕິດຕໍ່",
  "Focus": "ຈຸດເນັ້ນ",
  "Evidence": "ຫຼັກຖານ",
  "Updated": "ອັບເດດ",
  "NIP-05 checking…": "ກຳລັງກວດ NIP-05…",
  "NIP-05 verified": "NIP-05 ກວດສອບແລ້ວ",
  "NIP-05 unverified": "NIP-05 ຍັງບໍ່ໄດ້ກວດສອບ",
  "does not match this key": "ບໍ່ກົງກັບກະແຈນີ້",
  "unverified": "ຍັງບໍ່ໄດ້ກວດສອບ",
  "Copy public link": "ຄັດລອກລິ້ງສາທາລະນະ",
  "01 — Selected portfolio": "01 — ຜົນງານທີ່ເລືອກ",
  "Work that can be checked, not just claimed": "ຜົນງານທີ່ກວດສອບໄດ້ ບໍ່ແມ່ນພຽງຄຳກ່າວອ້າງ",
  "No projects are published yet.": "ຍັງບໍ່ມີໂຄງການທີ່ເຜີຍແຜ່.",
  "Add your first project": "ເພີ່ມໂຄງການທຳອິດຂອງທ່ານ",
  "02 — Gallery": "02 — ຄັງຮູບ",
  "Images and motion, chosen by the owner": "ຮູບ ແລະ ການເຄື່ອນໄຫວ ທີ່ເຈົ້າຂອງເລືອກ",
  "View all": "ເບິ່ງທັງໝົດ",
  "No gallery media yet.": "ຍັງບໍ່ມີສື່ໃນຄັງຮູບ.",
  "Add images or video": "ເພີ່ມຮູບ ຫຼື ວິດີໂອ",
  "03 — Skills &amp; evidence": "03 — ທັກສະ ແລະ ຫຼັກຖານ",
  "Two grades, no global score": "ສອງລະດັບ ບໍ່ມີຄະແນນລວມ",
  "Violet means listed by an issuer. Outline means my own claim. bitos.space does not independently verify either grade, and there is no global reputation score.":
    "ສີມ່ວງໝາຍເຖິງຜູ້ອອກລະບຸ. ເສັ້ນຂອບໝາຍເຖິງຄຳກ່າວອ້າງຂອງຂ້ອຍເອງ. bitos.space ບໍ່ໄດ້ກວດສອບທັງສອງລະດັບຢ່າງເປັນເອກະລາດ ແລະ ບໍ່ມີຄະແນນຊື່ສຽງລວມ.",
  "No skills or credentials are listed yet.": "ຍັງບໍ່ມີທັກສະ ຫຼື ໃບຮັບຮອງ.",
  "Add skills": "ເພີ່ມທັກສະ",
  "04 — About": "04 — ກ່ຽວກັບ",
  "The person behind the key": "ບຸກຄົນທີ່ຢູ່ເບື້ອງຫຼັງກະແຈ",
  "No introduction published yet.": "ຍັງບໍ່ມີການແນະນຳຕົວ.",
  "Add one →": "ເພີ່ມໜຶ່ງອັນ →",
  "Photo and name": "ຮູບ ແລະ ຊື່",
  "First project": "ໂຄງການທຳອິດ",
  "Gallery media": "ສື່ໃນຄັງຮູບ",
  "Skills or credentials": "ທັກສະ ຫຼື ໃບຮັບຮອງ",
  "Profile strength": "ຄວາມແຂງແກ່ນຂອງໂປຣໄຟລ໌",
  "Profile completeness": "ຄວາມຄົບຖ້ວນຂອງໂປຣໄຟລ໌",
  "Finish your profile": "ເຮັດໂປຣໄຟລ໌ໃຫ້ສຳເລັດ",
  "Projects": "ໂຄງການ",
  "Media": "ສື່",
  "Credentials": "ໃບຮັບຮອງ",
  "Portfolio at a glance": "ຜົນງານໂດຍຫຍໍ້",
  "View gallery": "ເບິ່ງຄັງຮູບ",
  "Play show reel": "ຫຼິ້ນໂຊຣີລ",
  "Open featured media": "ເປີດສື່ເດັ່ນ",
  "Show reel": "ໂຊຣີລ",
  "Featured media": "ສື່ເດັ່ນ",
  "Add a show reel": "ເພີ່ມໂຊຣີລ",
  "Upload a video or lead with your best image.": "ອັບໂຫຼດວິດີໂອ ຫຼື ນຳດ້ວຍຮູບທີ່ດີທີ່ສຸດຂອງທ່ານ.",
  "Add media": "ເພີ່ມສື່",
  "Identity and key": "ຕົວຕົນ ແລະ ກະແຈ",
  "Identity key": "ກະແຈຕົວຕົນ",
  "Self-owned key — this page follows the key holder. bitos.space cannot edit it.":
    "ກະແຈຂອງເຈົ້າຕົນເອງ — ໜ້ານີ້ຕິດຕາມເຈົ້າຂອງກະແຈ. bitos.space ແກ້ໄຂບໍ່ໄດ້.",
  "You are signed in as the owner.": "ທ່ານເຂົ້າສູ່ລະບົບເປັນເຈົ້າຂອງ.",
  "You can edit this page": "ທ່ານສາມາດແກ້ໄຂໜ້ານີ້ໄດ້",
  "Edit profile": "ແກ້ໄຂໂປຣໄຟລ໌",
  "Organization on BNOS": "ອົງກອນເທິງ BNOS",
  "Details": "ລາຍລະອຽດ",
  "Copy full npub": "ຄັດລອກ npub ເຕັມ",
  "Public key in hex": "ກະແຈສາທາລະນະໃນ hex",
  "Profile details": "ລາຍລະອຽດໂປຣໄຟລ໌",
  "just now": "ດຽວນີ້",
  "m ago": " ນາທີກ່ອນ",
  "h ago": " ຊົ່ວໂມງກ່ອນ",
  "d ago": " ມື້ກ່ອນ",
  "mo ago": " ເດືອນກ່ອນ",
  "y ago": " ປີກ່ອນ",
  "Unnamed profile": "ໂປຣໄຟລ໌ບໍ່ມີຊື່",
  "No portfolio yet": "ຍັງບໍ່ມີຜົນງານ",
  "Create": "ສ້າງ",
  "Open": "ເປີດ",
  "Edit": "ແກ້ໄຂ",
  "Open my portfolio": "ເປີດຜົນງານຂອງຂ້ອຍ",
  "Signed in as": "ເຂົ້າສູ່ລະບົບເປັນ",
  "Checking relays…": "ກຳລັງກວດ relay…",
  "Published": "ເຜີຍແຜ່ແລ້ວ",
  "Portfolio status": "ສະຖານະຜົນງານ",
  "Could not check relays": "ບໍ່ສາມາດກວດ relay ໄດ້",
  "Create portfolio": "ສ້າງຜົນງານ",
  "Open portfolio": "ເປີດຜົນງານ",
  "Connected with a remote signer": "ເຊື່ອມຕໍ່ກັບຕົວລົງລາຍເຊັນທາງໄກ",
  "Connected with a local key": "ເຊື່ອມຕໍ່ກັບກະແຈໃນເຄື່ອງ",
  "Connected with NIP-07": "ເຊື່ອມຕໍ່ກັບ NIP-07",
  "A NIP-07 extension is available in this browser. Your key stays inside the extension.":
    "ມີສ່ວນຂະຫຍາຍ NIP-07 ໃນເບຣົາເຊີນີ້. ກະແຈຂອງທ່ານຈະຢູ່ໃນສ່ວນຂະຫຍາຍ.",
  "No NIP-07 extension detected. Install Alby, nos2x, or another NIP-07 signer, then reload. Or use a NIP-46 remote signer below.":
    "ບໍ່ພົບສ່ວນຂະຫຍາຍ NIP-07. ຕິດຕັ້ງ Alby, nos2x ຫຼື ຕົວລົງລາຍເຊັນ NIP-07 ອື່ນ ແລ້ວໂຫຼດໃໝ່. ຫຼື ໃຊ້ຕົວລົງລາຍເຊັນທາງໄກ NIP-46 ຂ້າງລຸ່ມ.",
  "Retry NIP-07 detection": "ລອງກວດ NIP-07 ອີກຄັ້ງ",
  "Waiting for the browser extension…": "ກຳລັງລໍຖ້າສ່ວນຂະຫຍາຍເບຣົາເຊີ…",
  "Connected.": "ເຊື່ອມຕໍ່ແລ້ວ.",
  "Signed in with NIP-07.": "ເຂົ້າສູ່ລະບົບດ້ວຍ NIP-07 ແລ້ວ.",
  "Sign-in failed.": "ເຂົ້າສູ່ລະບົບບໍ່ສຳເລັດ.",
  "Save the nsec shown above. It will not be shown again.":
    "ບັນທຶກ nsec ທີ່ສະແດງຂ້າງເທິງ. ມັນຈະບໍ່ສະແດງອີກ.",
  "Could not create an account.": "ບໍ່ສາມາດສ້າງບັນຊີໄດ້.",
  "Signing in with the new key…": "ກຳລັງເຂົ້າສູ່ລະບົບດ້ວຍກະແຈໃໝ່…",
  "Could not sign in with the new key.": "ບໍ່ສາມາດເຂົ້າສູ່ລະບົບດ້ວຍກະແຈໃໝ່ໄດ້.",
  "copied.": "ຄັດລອກແລ້ວ.",
  "Could not copy the": "ບໍ່ສາມາດຄັດລອກ",
  "Paste your nsec or secret key first.": "ວາງ nsec ຫຼື ກະແຈລັບກ່ອນ.",
  "Checking the key…": "ກຳລັງກວດກະແຈ…",
  "Signed in with a local key.": "ເຂົ້າສູ່ລະບົບດ້ວຍກະແຈໃນເຄື່ອງແລ້ວ.",
  "Could not sign in with that key.": "ບໍ່ສາມາດເຂົ້າສູ່ລະບົບດ້ວຍກະແຈນັ້ນໄດ້.",
  "Paste a bunker:// URL first.": "ວາງ URL bunker:// ກ່ອນ.",
  "Waiting for your remote signer to approve the connection…":
    "ກຳລັງລໍຖ້າໃຫ້ຕົວລົງລາຍເຊັນທາງໄກອະນຸມັດການເຊື່ອມຕໍ່…",
  "The signer needs approval in another window.": "ຕົວລົງລາຍເຊັນຕ້ອງໄດ້ຮັບການອະນຸມັດໃນອີກໜ້າຕ່າງ.",
  "Signed in with a remote signer.": "ເຂົ້າສູ່ລະບົບດ້ວຍຕົວລົງລາຍເຊັນທາງໄກແລ້ວ.",
  "Could not connect the remote signer.": "ບໍ່ສາມາດເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນທາງໄກໄດ້.",
  "Waiting for a signer app to approve…": "ກຳລັງລໍຖ້າແອັບຕົວລົງລາຍເຊັນອະນຸມັດ…",
  "Waiting for approval in your signer app…": "ກຳລັງລໍຖ້າການອະນຸມັດໃນແອັບຕົວລົງລາຍເຊັນ…",
  "Could not connect the signer app.": "ບໍ່ສາມາດເຊື່ອມຕໍ່ແອັບຕົວລົງລາຍເຊັນໄດ້.",
  "Connection cancelled.": "ຍົກເລີກການເຊື່ອມຕໍ່ແລ້ວ.",
  "Signing out…": "ກຳລັງອອກຈາກລະບົບ…",
  "Signed out.": "ອອກຈາກລະບົບແລ້ວ.",
  "Add at least one wss:// relay URL.": "ເພີ່ມ URL relay wss:// ຢ່າງໜ້ອຍໜຶ່ງ.",
  "Hide private key": "ເຊື່ອງກະແຈສ່ວນຕົວ",
  "Connection link copied.": "ຄັດລອກລິ້ງເຊື່ອມຕໍ່ແລ້ວ.",
  "Sign in before generating a NIP-05 file.": "ເຂົ້າສູ່ລະບົບກ່ອນສ້າງໄຟລ໌ NIP-05.",
  "Not checked yet. Host the file, then verify.": "ຍັງບໍ່ໄດ້ກວດ. ໂຮສໄຟລ໌ແລ້ວກວດສອບ.",
  "Generate the setup file first.": "ສ້າງໄຟລ໌ຕັ້ງຄ່າກ່ອນ.",
  "Sign in before verifying.": "ເຂົ້າສູ່ລະບົບກ່ອນກວດສອບ.",
  "Checking the domain…": "ກຳລັງກວດໂດເມນ…",
  "Verified. This address resolves to your key.": "ກວດສອບແລ້ວ. ທີ່ຢູ່ນີ້ຊີ້ໄປຫາກະແຈຂອງທ່ານ.",
  "The domain responds, but it points to a different key.": "ໂດເມນຕອບສະໜອງ ແຕ່ຊີ້ໄປຫາກະແຈອື່ນ.",
  "Could not verify this address.": "ບໍ່ສາມາດກວດສອບທີ່ຢູ່ນີ້ໄດ້.",
  "NIP-05 JSON copied.": "ຄັດລອກ NIP-05 JSON ແລ້ວ.",
  "Could not copy the JSON.": "ບໍ່ສາມາດຄັດລອກ JSON ໄດ້.",
  "Gallery": "ຄັງຮູບ",
  "Preferences": "ການຕັ້ງຄ່າ",
  "Language": "ພາສາ",
  "English": "ອັງກິດ",
  "Lao": "ລາວ",
  "Switch language": "ປ່ຽນພາສາ",
  "Recent portfolios": "ຜົນງານຫຼ້າສຸດ",
  "Discovery is unavailable on these relays.": "ການຄົ້ນຫາບໍ່ພ້ອມໃຊ້ເທິງ relay ເຫຼົ່ານີ້.",
  "No public portfolios found. Some relays did not answer.":
    "ບໍ່ພົບຜົນງານສາທາລະນະ. ບາງ relay ບໍ່ຕອບສະໜອງ.",
  "No public portfolios found on these relays yet.":
    "ຍັງບໍ່ພົບຜົນງານສາທາລະນະເທິງ relay ເຫຼົ່ານີ້.",
  "Loading recent portfolios…": "ກຳລັງໂຫຼດຜົນງານຫຼ້າສຸດ…",
  "Some relays did not answer. Try again.": "ບາງ relay ບໍ່ຕອບສະໜອງ. ລອງໃໝ່.",
  "Discovery failed": "ການຄົ້ນຫາລົ້ມເຫຼວ",
  "Open profile": "ເປີດໂປຣໄຟລ໌",
  "Local draft restored. Publish when ready.": "ກู้ຄືນສະບັບຮ່າງໃນເຄື່ອງແລ້ວ. ເຜີຍແຜ່ເມື່ອພ້ອມ.",
  "Older local draft ignored. Showing the published version.":
    "ບໍ່ສົນໃຈສະບັບຮ່າງເກົ່າ. ກຳລັງສະແດງສະບັບທີ່ເຜີຍແຜ່ແລ້ວ.",
  "Signed in as {name} — only this key can sign the update.":
    "ເຂົ້າສູ່ລະບົບເປັນ {name} — ມີພຽງກະແຈນີ້ທີ່ລົງລາຍເຊັນການອັບເດດໄດ້.",
  "Last published {time}.": "ເຜີຍແຜ່ລ່າສຸດ {time}.",
  "Local draft restored": "ກู้ຄືນສະບັບຮ່າງໃນເຄື່ອງແລ້ວ",
  "Untitled project": "ໂຄງການບໍ່ມີຊື່",
  "Draft": "ສະບັບຮ່າງ",
  "Public": "ສາທາລະນະ",
  "No year": "ບໍ່ມີປີ",
  "Move project up": "ຍ້າຍໂຄງການຂຶ້ນ",
  "Move project down": "ຍ້າຍໂຄງການລົງ",
  "Move up": "ຍ້າຍຂຶ້ນ",
  "Move down": "ຍ້າຍລົງ",
  "Remove": "ລຶບ",
  "Label": "ປ້າຍ",
  "Type a tag and press Enter": "ພິມແທັກແລ້ວກົດ Enter",
  "Add project tag": "ເພີ່ມແທັກໂຄງການ",
  "Up to 8 tags. Press Enter or comma to add.": "ສູງສຸດ 8 ແທັກ. ກົດ Enter ຫຼື ເຄື່ອງໝາຍຈຸດເພື່ອເພີ່ມ.",
  "Include this project in the published portfolio": "ລວມໂຄງການນີ້ໃນຜົນງານທີ່ເຜີຍແຜ່",
  "Title": "ຫົວຂໍ້",
  "Year": "ປີ",
  "Summary": "ສະຫຼຸບ",
  "Description": "ລາຍລະອຽດ",
  "Project link": "ລິ້ງໂຄງການ",
  "Cover image URL": "URL ຮູບປົກ",
  "Tags": "ແທັກ",
  "Skill": "ທັກສະ",
  "Issuer (optional)": "ຜູ້ອອກ (ບໍ່ບັງຄັບ)",
  "Issuer": "ຜູ້ອອກ",
  "Status": "ສະຖານະ",
  "Note": "ໝາຍເຫດ",
  "Include this credential in the published portfolio": "ລວມໃບຮັບຮອງນີ້ໃນຜົນງານທີ່ເຜີຍແຜ່",
  "Video URL": "URL ວິດີໂອ",
  "Poster image URL (optional)": "URL ຮູບ poster (ບໍ່ບັງຄັບ)",
  "Image URL": "URL ຮູບ",
  "Caption": "ຄຳອະທິບາຍ",
  "Alt text": "ຂໍ້ຄວາມທົດແທນຮູບ",
  "Include this item in the published gallery": "ລວມລາຍການນີ້ໃນຄັງຮູບທີ່ເຜີຍແຜ່",
  "Current show reel": "ໂຊຣີລປັດຈຸບັນ",
  "Use as show reel": "ໃຊ້ເປັນໂຊຣີລ",
  "Move gallery item up": "ຍ້າຍລາຍການຄັງຮູບຂຶ້ນ",
  "Move gallery item down": "ຍ້າຍລາຍການຄັງຮູບລົງ",
  "Embedded image (legacy)": "ຮູບຝັງ (ແບບເກົ່າ)",
  "Poster generated from video": "poster ສ້າງຈາກວິດີໂອ",
  "Unsaved changes": "ການປ່ຽນແປງທີ່ຍັງບໍ່ໄດ້ບັນທຶກ",
  "Could not save the draft in this browser (storage full?).":
    "ບໍ່ສາມາດບັນທຶກສະບັບຮ່າງໃນເບຣົາເຊີນີ້ (ພື້ນທີ່ເຕັມ?).",
  "Draft saved locally": "ບັນທຶກສະບັບຮ່າງໃນເຄື່ອງແລ້ວ",
  "Saved locally just now": "ບັນທຶກໃນເຄື່ອງດຽວນີ້",
  "Draft saved in this browser. Publish to make it public.":
    "ບັນທຶກສະບັບຮ່າງໃນເບຣົາເຊີນີ້ແລ້ວ. ເຜີຍແຜ່ເພື່ອໃຫ້ເປັນສາທາລະນະ.",
  "Wait for the upload to finish before publishing.": "ລໍຖ້າໃຫ້ການອັບໂຫຼດສຳເລັດກ່ອນເຜີຍແຜ່.",
  "Connect a signer before publishing.": "ເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນກ່ອນເຜີຍແຜ່.",
  "Waiting for signer…": "ກຳລັງລໍຖ້າຕົວລົງລາຍເຊັນ…",
  "No relay accepted the event. Check the relay list and retry.":
    "ບໍ່ມີ relay ຮັບ event. ກວດລາຍການ relay ແລ້ວລອງໃໝ່.",
  "Publishing failed.": "ການເຜີຍແຜ່ລົ້ມເຫຼວ.",
  "Exported JSON. Private drafts are included in the file.":
    "ສົ່ງອອກ JSON ແລ້ວ. ສະບັບຮ່າງສ່ວນຕົວຖືກລວມໃນໄຟລ໌.",
  "No profile object found.": "ບໍ່ພົບອອບເຈັກໂປຣໄຟລ໌.",
  "Imported as a local draft. Publish when ready.":
    "ນຳເຂົ້າເປັນສະບັບຮ່າງໃນເຄື່ອງແລ້ວ. ເຜີຍແຜ່ເມື່ອພ້ອມ.",
  "Could not import:": "ບໍ່ສາມາດນຳເຂົ້າ:",
  "invalid JSON": "JSON ບໍ່ຖືກຕ້ອງ",
  "Local draft": "ສະບັບຮ່າງໃນເຄື່ອງ",
  "Discard this draft?": "ຖິ້ມສະບັບຮ່າງນີ້ບໍ?",
  "This removes the local draft for this key and restores the last published version, or a blank portfolio if nothing was published. This cannot be undone.":
    "ການນີ້ຈະລຶບສະບັບຮ່າງໃນເຄື່ອງສຳລັບກະແຈນີ້ ແລະ ກู้ຄືນສະບັບທີ່ເຜີຍແຜ່ລ່າສຸດ ຫຼື ຜົນງານຫວ່າງຖ້າຍັງບໍ່ເຄີຍເຜີຍແຜ່. ກູ້ຄືນບໍ່ໄດ້.",
  "Keep editing": "ແກ້ໄຂຕໍ່",
  "Local draft discarded.": "ຖິ້ມສະບັບຮ່າງໃນເຄື່ອງແລ້ວ.",
  "Relay list saved": "ບັນທຶກລາຍການ relay ແລ້ວ",
  "Preparing upload…": "ກຳລັງກຽມອັບໂຫຼດ…",
  "Choose an image, MP4, or WebM file.": "ເລືອກໄຟລ໌ຮູບ, MP4 ຫຼື WebM.",
  "Video must be MP4 or WebM.": "ວິດີໂອຕ້ອງເປັນ MP4 ຫຼື WebM.",
  "Enter a valid Blossom fallback server URL.": "ໃສ່ URL ເຊີບເວີສຳຮອງ Blossom ທີ່ຖືກຕ້ອງ.",
  "Processing…": "ກຳລັງປະມວນຜົນ…",
  "Uploading…": "ກຳລັງອັບໂຫຼດ…",
  "BitOS unavailable — switching to Blossom…": "BitOS ບໍ່ພ້ອມ — ກຳລັງປ່ຽນໄປ Blossom…",
  "Media upload failed.": "ການອັບໂຫຼດສື່ລົ້ມເຫຼວ.",
  "Wait for the upload to finish before leaving the editor.":
    "ລໍຖ້າໃຫ້ການອັບໂຫຼດສຳເລັດກ່ອນອອກຈາກຕົວແກ້ໄຂ.",
  "Add a name before publishing.": "ເພີ່ມຊື່ກ່ອນເຜີຍແຜ່.",
  "NIP-05 must look like name@domain.com.": "NIP-05 ຕ້ອງເປັນແບບ name@domain.com.",
  "Every published project needs a title.": "ທຸກໂຄງການທີ່ເຜີຍແຜ່ຕ້ອງມີຫົວຂໍ້.",
  "Every published credential needs a title.": "ທຸກໃບຮັບຮອງທີ່ເຜີຍແຜ່ຕ້ອງມີຫົວຂໍ້.",
  "Gallery item": "ລາຍການຄັງຮູບ",
  "Project \"{title}\" has an invalid link.": "ໂຄງການ \"{title}\" ມີລິ້ງທີ່ບໍ່ຖືກຕ້ອງ.",
  "Project \"{title}\" has an invalid cover image URL.":
    "ໂຄງການ \"{title}\" ມີ URL ຮູບປົກທີ່ບໍ່ຖືກຕ້ອງ.",
  "Choose a file to upload.": "ເລືອກໄຟລ໌ເພື່ອອັບໂຫຼດ.",
  "Upload cancelled.": "ຍົກເລີກການອັບໂຫຼດແລ້ວ.",
  "The upload timed out.": "ການອັບໂຫຼດໝົດເວລາ.",
  "The server did not return a file URL.": "ເຊີບເວີບໍ່ໄດ້ສົ່ງ URL ໄຟລ໌ກັບມາ.",
  "Could not reach the BitOS media server.": "ບໍ່ສາມາດເຂົ້າເຖິງເຊີບເວີສື່ BitOS ໄດ້.",
  "The BitOS media upload timed out.": "ການອັບໂຫຼດສື່ BitOS ໝົດເວລາ.",
  "The signer did not approve the upload.": "ຕົວລົງລາຍເຊັນບໍ່ໄດ້ອະນຸມັດການອັບໂຫຼດ.",
  "Upload failed. Check the Blossom server URL and CORS.":
    "ການອັບໂຫຼດລົ້ມເຫຼວ. ກວດ URL ເຊີບເວີ Blossom ແລະ CORS.",
  "The server rejected the upload because the SHA-256 did not match.":
    "ເຊີບເວີປະຕິເສດການອັບໂຫຼດ ເພາະ SHA-256 ບໍ່ກົງກັນ.",
  "Enter a valid Blossom server URL.": "ໃສ່ URL ເຊີບເວີ Blossom ທີ່ຖືກຕ້ອງ.",
  "That is not a valid bunker:// URL.": "ນັ້ນບໍ່ແມ່ນ URL bunker:// ທີ່ຖືກຕ້ອງ.",
  "The connection token must start with bunker://.": "ໂທເຄັນເຊື່ອມຕໍ່ຕ້ອງເລີ່ມດ້ວຍ bunker://.",
  "The bunker URL does not contain a valid signer pubkey.":
    "URL bunker ບໍ່ມີ pubkey ຕົວລົງລາຍເຊັນທີ່ຖືກຕ້ອງ.",
  "The bunker URL does not contain a relay.": "URL bunker ບໍ່ມີ relay.",
  "This session has no remote signer.": "ເຊສຊັນນີ້ບໍ່ມີຕົວລົງລາຍເຊັນທາງໄກ.",
  "The signer did not return the expected secret.": "ຕົວລົງລາຍເຊັນບໍ່ໄດ້ສົ່ງຄວາມລັບທີ່ຄາດໄວ້ກັບມາ.",
  "The signer returned an invalid user pubkey.": "ຕົວລົງລາຍເຊັນສົ່ງ pubkey ຜູ້ໃຊ້ທີ່ບໍ່ຖືກຕ້ອງກັບມາ.",
  "The signer session was closed.": "ເຊສຊັນຕົວລົງລາຍເຊັນຖືກປິດແລ້ວ.",
  "Could not reach the signer relays. Check your connection.":
    "ບໍ່ສາມາດເຂົ້າເຖິງ relay ຂອງຕົວລົງລາຍເຊັນໄດ້. ກວດການເຊື່ອມຕໍ່.",
  "Connect the remote signer before publishing.": "ເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນທາງໄກກ່ອນເຜີຍແຜ່.",
  "The signer returned an invalid signature.": "ຕົວລົງລາຍເຊັນສົ່ງລາຍເຊັນທີ່ບໍ່ຖືກຕ້ອງກັບມາ.",
  "The signer signed with a different key.": "ຕົວລົງລາຍເຊັນລົງລາຍເຊັນດ້ວຍກະແຈອື່ນ.",
  "The remote signer is not connected.": "ຕົວລົງລາຍເຊັນທາງໄກຍັງບໍ່ໄດ້ເຊື່ອມຕໍ່.",
  "The signer did not respond in time.": "ຕົວລົງລາຍເຊັນບໍ່ຕອບສະໜອງທັນເວລາ.",
  "No signer relay accepted the request. Check the relay list.":
    "ບໍ່ມີ relay ຂອງຕົວລົງລາຍເຊັນຮັບຄຳຂໍ. ກວດລາຍການ relay.",
  "The signer app did not approve the connection.": "ແອັບຕົວລົງລາຍເຊັນບໍ່ໄດ້ອະນຸມັດການເຊື່ອມຕໍ່.",
  "The signer connection closed.": "ການເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນປິດແລ້ວ.",
  "Could not store the key on this device.": "ບໍ່ສາມາດເກັບກະແຈໃນອຸປະກອນນີ້ໄດ້.",
  "Could not keep the key in this tab.": "ບໍ່ສາມາດເກັບກະແຈໃນແທັບນີ້ໄດ້.",
  "Stored key does not match its public key.": "ກະແຈທີ່ເກັບໄວ້ບໍ່ກົງກັບກະແຈສາທາລະນະ.",
  "Connect a signer before publishing.": "ເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນກ່ອນເຜີຍແຜ່.",
  "Media server upload failed": "ການອັບໂຫຼດໄປເຊີບເວີສື່ລົ້ມເຫຼວ",
  "Upload media to Blossom": "ອັບໂຫຼດສື່ໄປ Blossom",
  "Upload failed": "ການອັບໂຫຼດລົ້ມເຫຼວ",
  "Website": "ເວັບໄຊ",
  "Copy full npub": "ຄັດລອກ npub ເຕັມ",
  "No portfolio yet · ": "ຍັງບໍ່ມີຜົນງານ · ",
  "Language": "ພາສາ",
  "Switch language": "ປ່ຽນພາສາ",
  "EN": "EN",
  "ລາວ": "ລາວ",
  "Account created. Back up your nsec to keep {key}… safe.":
    "ສ້າງບັນຊີແລ້ວ. ສຳຮອງ nsec ເພື່ອຮັກສາ {key}… ໃຫ້ປອດໄພ.",
  "Canonical public URL": "URL ສາທາລະນະຫຼັກ",
  "Change relays": "ປ່ຽນ relay",
  "Copy npub": "ຄັດລອກ npub",
  "Could not copy the {label}.": "ບໍ່ສາມາດຄັດລອກ {label} ໄດ້.",
  "Could not import: {error}": "ບໍ່ສາມາດນຳເຂົ້າ: {error}",
  "Create a Nostr account": "ສ້າງບັນຊີ Nostr",
  "Create your portfolio": "ສ້າງຜົນງານຂອງທ່ານ",
  "Credential {n}": "ໃບຮັບຮອງ {n}",
  "Credential · Owner-provided": "ໃບຮັບຮອງ · ເຈົ້າຂອງໃຫ້ມາ",
  "Edit portfolio — bitos.space": "ແກ້ໄຂຜົນງານ — bitos.space",
  "Images must be smaller than {size}.": "ຮູບຕ້ອງນ້ອຍກວ່າ {size}.",
  "Link {n}": "ລິ້ງ {n}",
  "Listed by {issuer}": "ລະບຸໂດຍ {issuer}",
  "Media server upload failed ({status}).": "ການອັບໂຫຼດໄປເຊີບເວີສື່ລົ້ມເຫຼວ ({status}).",
  "No public portfolios found. No answer from {hosts}.":
    "ບໍ່ພົບຜົນງານສາທາລະນະ. ບໍ່ມີຄຳຕອບຈາກ {hosts}.",
  "Nostr account": "ບັນຊີ Nostr",
  "Not published yet": "ຍັງບໍ່ໄດ້ເຜີຍແຜ່",
  "Open approval link": "ເປີດລິ້ງອະນຸມັດ",
  "Open {name}'s portfolio": "ເປີດຜົນງານຂອງ {name}",
  "Organization": "ອົງກອນ",
  "Portfolio on Nostr — bitos.space": "ຜົນງານເທິງ Nostr — bitos.space",
  "Portfolio — bitos.space": "ຜົນງານ — bitos.space",
  "Processing {which} on {target}…": "ກຳລັງປະມວນຜົນ {which} ເທິງ {target}…",
  "Profile not found — bitos.space": "ບໍ່ພົບໂປຣໄຟລ໌ — bitos.space",
  "Published to {accepted} of {total} relays.": "ເຜີຍແຜ່ໄປ {accepted} ຈາກ {total} relay.",
  "Published · {time}": "ເຜີຍແຜ່ແລ້ວ · {time}",
  "Publishing {done}/{total}…": "ກຳລັງເຜີຍແຜ່ {done}/{total}…",
  "QR": "QR",
  "Relay list saved ({n}).": "ບັນທຶກລາຍການ relay ແລ້ວ ({n}).",
  "Relays unavailable — bitos.space": "relay ບໍ່ພ້ອມ — bitos.space",
  "Remove tag {tag}": "ລຶບແທັກ {tag}",
  "Retry": "ລອງໃໝ່",
  "Sample unavailable — bitos.space": "ຕົວຢ່າງບໍ່ພ້ອມ — bitos.space",
  "Sign in as the owner": "ເຂົ້າສູ່ລະບົບເປັນເຈົ້າຂອງ",
  "Signed in": "ເຂົ້າສູ່ລະບົບແລ້ວ",
  "Skill {n}": "ທັກສະ {n}",
  "Switch signer": "ປ່ຽນຕົວລົງລາຍເຊັນ",
  "The gallery holds up to {max} items.": "ຄັງຮູບເກັບໄດ້ສູງສຸດ {max} ລາຍການ.",
  "Try another profile": "ລອງໂປຣໄຟລ໌ອື່ນ",
  "Upload failed ({status}).": "ການອັບໂຫຼດລົ້ມເຫຼວ ({status}).",
  "Uploading {kind} to BitOS…": "ກຳລັງອັບໂຫຼດ {kind} ໄປ BitOS…",
  "Uploading {kind} to Blossom…": "ກຳລັງອັບໂຫຼດ {kind} ໄປ Blossom…",
  "Uploading {kind}…": "ກຳລັງອັບໂຫຼດ {kind}…",
  "Uploading {which} to {target} {percent}%": "ກຳລັງອັບໂຫຼດ {which} ໄປ {target} {percent}%",
  "Uploading… {percent}%": "ກຳລັງອັບໂຫຼດ… {percent}%",
  "Waiting for signer… {seconds}s": "ກຳລັງລໍຖ້າຕົວລົງລາຍເຊັນ… {seconds} ວິນາທີ",
  "You": "ທ່ານ",
  "remembered on this device": "ຈື່ໃນອຸປະກອນນີ້",
  "session only": "ສະເພາະເຊສຊັນ",
  "{label} copied.": "ຄັດລອກ {label} ແລ້ວ.",
  "{name} hasn't published a portfolio yet": "{name} ຍັງບໍ່ໄດ້ເຜີຍແຜ່ຜົນງານ.",
  "{n} media": "{n} ສື່",
  "{n} projects": "{n} ໂຄງການ",
  "{n} public portfolios from your relays.": "{n} ຜົນງານສາທາລະນະຈາກ relay ຂອງທ່ານ.",
  "{n}/{max} media items · links only": "{n}/{max} ລາຍການສື່ · ສະເພາະລິ້ງ",
  "{n}m ago": "{n} ນາທີກ່ອນ",
  "{n}h ago": "{n} ຊົ່ວໂມງກ່ອນ",
  "{n}d ago": "{n} ມື້ກ່ອນ",
  "{n}mo ago": "{n} ເດືອນກ່ອນ",
  "{n}y ago": "{n} ປີກ່ອນ",
  "{skills} issuer-listed skills · {credentials} credentials":
    "{skills} ທັກສະທີ່ຜູ້ອອກລະບຸ · {credentials} ໃບຮັບຮອງ",
  "{used} of {budget} legacy inline budget · {n}/{max} items":
    "{used} ຈາກ {budget} ງົບ inline ແບບເກົ່າ · {n}/{max} ລາຍການ",
  "Profile": "ໂປຣໄຟລ໌",
  "Sign in with a private key stored in this browser. Prefer a NIP-07 extension or remote signer when you can keep the key out of this page.":
    "ເຂົ້າສູ່ລະບົບດ້ວຍກະແຈສ່ວນຕົວທີ່ເກັບໃນເບຣົາເຊີນີ້. ໃຊ້ສ່ວນຂະຫຍາຍ NIP-07 ຫຼື ຕົວລົງລາຍເຊັນທາງໄກ ເມື່ອສາມາດເກັບກະແຈອອກຈາກໜ້ານີ້ໄດ້.",
  "<strong>npub is read-only on its own.</strong> It is a public key, not a password. Editing requires a signer that holds the private key — a NIP-07 extension, a NIP-46 remote signer, or a local nsec you keep on this device. A NIP-05 address (<span class=\"mono\">you@domain.com</span>) is only a human-readable pointer to a key, not a login method. Never share your nsec with anyone.":
    "<strong>npub ຢ່າງດຽວອ່ານໄດ້ເທົ່ານັ້ນ.</strong> ມັນແມ່ນກະແຈສາທາລະນະ ບໍ່ແມ່ນລະຫັດຜ່ານ. ການແກ້ໄຂຕ້ອງການຕົວລົງລາຍເຊັນທີ່ຖືກະແຈສ່ວນຕົວ — ສ່ວນຂະຫຍາຍ NIP-07, ຕົວລົງລາຍເຊັນທາງໄກ NIP-46 ຫຼື nsec ໃນເຄື່ອງທີ່ທ່ານເກັບໄວ້. ທີ່ຢູ່ NIP-05 (<span class=\"mono\">you@domain.com</span>) ເປັນພຽງຕົວຊີ້ທີ່ອ່ານງ່າຍໄປຫາກະແຈ ບໍ່ແມ່ນວິທີເຂົ້າສູ່ລະບົບ. ຢ່າແບ່ງປັນ nsec ກັບໃຜ.",
  "Switch to dark theme": "ປ່ຽນເປັນທີມມືດ",
  "UX architecture": "ສະຖາປັດຕະຍະກຳ UX",
  "Design system & front-end — 60%": "ລະບົບການອອກແບບ & front-end — 60%",
  "Design systems": "ລະບົບການອອກແບບ",
  "Advanced UX Systems": "ລະບົບ UX ຂັ້ນສູງ",
  "Valid · expires 2027": "ໃຊ້ໄດ້ · ໝົດອາຍຸ 2027",
  "Shared selectively": "ແບ່ງປັນແບບເລືອກ",
  "A short title for visitors": "ຫົວຂໍ້ສັ້ນສຳລັບຜູ້ເຂົ້າຊົມ",
  "Describe the image for screen readers": "ອະທິບາຍຮູບສຳລັບ screen reader",
  "Browser extension": "ສ່ວນຂະຫຍາຍເບຣົາເຊີ",
  "Remote signer": "ຕົວລົງລາຍເຊັນທາງໄກ",
  "profile sections": "ພາກສ່ວນໂປຣໄຟລ໌",
  "navigation": "ການນຳທາງ",
  "Open a profile": "ເປີດໂປຣໄຟລ໌",
  "Asking {n} relays for the newest signed portfolio event for {key}.":
    "ກຳລັງຖາມ {n} relay ສຳລັບ event ຜົນງານທີ່ລົງລາຍເຊັນໃໝ່ສຸດຂອງ {key}.",
  "GitHub": "GitHub",
  "Choose an image file (JPEG, PNG, WebP, GIF or AVIF).":
    "ເລືອກໄຟລ໌ຮູບ (JPEG, PNG, WebP, GIF ຫຼື AVIF).",
  "Connect a NIP-07 signer to publish.": "ເຊື່ອມຕໍ່ຕົວລົງລາຍເຊັນ NIP-07 ເພື່ອເຜີຍແຜ່.",
  "Connection closed": "ການເຊື່ອມຕໍ່ປິດແລ້ວ",
  "Connection timed out": "ການເຊື່ອມຕໍ່ໝົດເວລາ",
  "Could not connect": "ບໍ່ສາມາດເຊື່ອມຕໍ່ໄດ້",
  "Could not derive the public key.": "ບໍ່ສາມາດຄຳນວນກະແຈສາທາລະນະໄດ້.",
  "Could not read the image.": "ບໍ່ສາມາດອ່ານຮູບໄດ້.",
  "Could not send event": "ບໍ່ສາມາດສົ່ງ event ໄດ້",
  "Could not subscribe": "ບໍ່ສາມາດສະໝັກຮັບຂໍ້ມູນໄດ້",
  "Enter a valid nsec or 64-character secret key.":
    "ໃສ່ nsec ທີ່ຖືກຕ້ອງ ຫຼື ກະແຈລັບ 64 ຕົວອັກສອນ.",
  "Enter an address like name@yourdomain.com.":
    "ໃສ່ທີ່ຢູ່ແບບ name@yourdomain.com.",
  "Enter your nsec or a 64-character secret key.":
    "ໃສ່ nsec ຂອງທ່ານ ຫຼື ກະແຈລັບ 64 ຕົວອັກສອນ.",
  "Invalid data URL.": "URL ຂໍ້ມູນບໍ່ຖືກຕ້ອງ.",
  "Invalid relay URL": "URL relay ບໍ່ຖືກຕ້ອງ",
  "Invalid secret key.": "ກະແຈລັບບໍ່ຖືກຕ້ອງ.",
  "NIP-05 must look like name@domain.com": "NIP-05 ຕ້ອງເປັນແບບ name@domain.com",
  "No NIP-07 signer detected. Install a browser extension such as Alby or nos2x, then reload this page.":
    "ບໍ່ພົບຕົວລົງລາຍເຊັນ NIP-07. ຕິດຕັ້ງສ່ວນຂະຫຍາຍເບຣົາເຊີ ເຊັ່ນ Alby ຫຼື nos2x ແລ້ວໂຫຼດໜ້ານີ້ໃໝ່.",
  "No relays configured": "ຍັງບໍ່ໄດ້ຕັ້ງ relay",
  "Rejected by relay": "relay ປະຕິເສດ",
  "That alias points back to itself.": "ຊື່ຫຼິ້ນນັ້ນຊີ້ກັບຫາຕົວມັນເອງ.",
  "That image could not be decoded.": "ບໍ່ສາມາດຖອດລະຫັດຮູບນັ້ນໄດ້.",
  "That image has no readable dimensions.": "ຮູບນັ້ນບໍ່ມີຂະໜາດທີ່ອ່ານໄດ້.",
  "The browser could not process that image.": "ເບຣົາເຊີບໍ່ສາມາດປະມວນຜົນຮູບນັ້ນໄດ້.",
  "The signer did not return a signed event.": "ຕົວລົງລາຍເຊັນບໍ່ໄດ້ສົ່ງ event ທີ່ລົງລາຍເຊັນກັບມາ.",
  "The signer returned a different public key.": "ຕົວລົງລາຍເຊັນສົ່ງກະແຈສາທາລະນະອື່ນກັບມາ.",
  "The signer returned an invalid key.": "ຕົວລົງລາຍເຊັນສົ່ງກະແຈທີ່ບໍ່ຖືກຕ້ອງກັບມາ.",
  "The signer returned an unexpected event.": "ຕົວລົງລາຍເຊັນສົ່ງ event ທີ່ບໍ່ຄາດໄວ້ກັບມາ.",
  "This browser cannot hash files for upload.": "ເບຣົາເຊີນີ້ບໍ່ສາມາດ hash ໄຟລ໌ສຳລັບອັບໂຫຼດໄດ້.",
  "Timed out waiting for OK": "ໝົດເວລາລໍຖ້າ OK",
  "Not available": "ບໍ່ພ້ອມ",
  "embedded": "ຝັງໃນ event",
  "link": "ລິ້ງ",
  "Showreel": "ໂຊຣີລ",
};

let current = "en";

export function getLang() {
  return current;
}

export function isLao() {
  return current === "lo";
}

export function t(key, vars) {
  let value = current === "lo" ? LO[key] : key;
  if (value === undefined) value = key;
  if (!vars) return value;
  return String(value).replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
  );
}

export function applyTranslations(root = document) {
  if (!root || !root.querySelectorAll) return;
  root.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.getAttribute("data-i18n"));
  });
  root.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.getAttribute("data-i18n-html"));
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.getAttribute("data-i18n-placeholder")));
  });
  root.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.getAttribute("data-i18n-title")));
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.getAttribute("data-i18n-aria-label")));
  });
}

export function setLang(next) {
  if (!SUPPORTED.includes(next)) return current;
  current = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable */
  }
  document.documentElement.lang = next;
  if (document.body) document.body.classList.toggle("lo", next === "lo");
  applyTranslations(document);
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: next } }));
  return current;
}

export function initI18n() {
  let saved = "en";
  try {
    saved = localStorage.getItem(STORAGE_KEY) || "en";
  } catch {
    saved = "en";
  }
  if (!SUPPORTED.includes(saved)) saved = "en";
  current = saved;
  document.documentElement.lang = current;
  if (document.body) document.body.classList.toggle("lo", current === "lo");
  applyTranslations(document);
  return current;
}

export function toggleLang() {
  return setLang(current === "en" ? "lo" : "en");
}
