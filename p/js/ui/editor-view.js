/**
 * Owner editor. Owns only editor-local state (fields, draft, publish status).
 * Authentication, storage and publishing are delegated to services.
 */
import { $, $$, esc, setHidden } from "../shared/dom.js";
import { clone } from "../shared/clone.js";
import {
  makeId,
  splitList,
  timeAgo,
} from "../shared/format.js";
import { parseRelayUrls } from "../shared/urls.js";
import {
  emptyProfile,
  normalizeProfile,
  validateProfile,
} from "../data/profile-model.js";
import {
  clearDraft,
  loadRelays,
  readDraft,
  saveRelays,
  writeDraft,
} from "../data/storage.js";
import { hexToNpub } from "../shared/bech32.js";
import * as auth from "../services/auth.js";
import { publishProfile } from "../services/publish.js";
import { createNip05Wizard } from "./nip05-wizard.js";

export function createEditorView({
  root,
  toast,
  onPublished,
  onClosed,
  onRelaysChanged,
}) {
  const body = $("#editor-body", root);
  const publishButtons = $$("[data-editor-publish]", root);
  const els = {
    owner: $("#editor-owner", root),
    status: $("#editor-status", root),
    url: $("#editor-url", root),
    saveState: $("#save-state", root),
    publishBtn: $("#publish-btn", root),
    saveDraft: $("#save-draft", root),
    discardDraft: $("#discard-draft", root),
    exportBtn: $("#export-btn", root),
    importBtn: $("#import-btn", root),
    importFile: $("#import-file", root),
    fRelays: $("#f-relays", root),
    saveRelays: $("#save-relays", root),
    resultsWrap: $("#publish-results-wrap", root),
    results: $("#publish-results", root),
    fName: $("#f-name", root),
    fDisplayName: $("#f-displayName", root),
    fHeadline: $("#f-headline", root),
    fBio: $("#f-bio", root),
    fLocation: $("#f-location", root),
    fTimezone: $("#f-timezone", root),
    fLanguages: $("#f-languages", root),
    fAvailability: $("#f-availability", root),
    fAvailabilityNote: $("#f-availabilityNote", root),
    fAvatar: $("#f-avatar", root),
    fBanner: $("#f-banner", root),
    fNip05: $("#f-nip05", root),
    fContactLabel: $("#f-contactLabel", root),
    fContactUrl: $("#f-contactUrl", root),
    links: $("#links-editor", root),
    projects: $("#projects-editor", root),
    skills: $("#skills-editor", root),
    credentials: $("#credentials-editor", root),
  };

  let current = null;
  let saveTimer = 0;

  const nip05 = createNip05Wizard({
    root,
    getIdentifier: () => els.fNip05.value,
    getPubkey: () => (current ? current.pubkey : ""),
    getRelays: () => currentRelays(),
    toast,
  });

  function currentRelays() {
    return parseRelayUrls(els.fRelays.value).length
      ? parseRelayUrls(els.fRelays.value)
      : loadRelays();
  }

  function open(profile, pubkey, { updatedAt = 0 } = {}) {
    const draft = readDraft(pubkey);
    const publishedProfile = profile ? clone(profile) : null;
    current = {
      profile: clone(draft || publishedProfile || emptyProfile()),
      publishedProfile,
      pubkey,
      updatedAt,
      dirty: false,
      restoredDraft: Boolean(draft),
      tab: "profile",
    };
    fill();
    nip05.reset();
    if (draft) toast("Local draft restored. Publish when ready.");
  }

  function isOpen() {
    return Boolean(current);
  }

  function fill() {
    if (!current) return;
    const profile = current.profile;
    els.fName.value = profile.name || "";
    els.fDisplayName.value = profile.displayName || "";
    els.fHeadline.value = profile.headline || "";
    els.fBio.value = profile.bio || "";
    els.fLocation.value = profile.location || "";
    els.fTimezone.value = profile.timezone || "";
    els.fLanguages.value = (profile.languages || []).join(", ");
    els.fAvailability.value =
      (profile.availability && profile.availability.status) || "";
    els.fAvailabilityNote.value =
      (profile.availability && profile.availability.note) || "";
    els.fAvatar.value = profile.avatar || "";
    els.fBanner.value = profile.banner || "";
    els.fNip05.value = profile.nip05 || "";
    els.fContactLabel.value = (profile.contact && profile.contact.label) || "";
    els.fContactUrl.value = (profile.contact && profile.contact.url) || "";
    els.fRelays.value = loadRelays().join("\n");

    els.owner.textContent = `Signed in as ${hexToNpub(current.pubkey)} — only this key can sign the update.`;
    els.status.textContent = current.updatedAt
      ? `Last published ${timeAgo(current.updatedAt)}.`
      : "Not published yet.";
    els.url.textContent = `bitos.space/p/${hexToNpub(current.pubkey)}`;
    els.saveState.textContent = current.restoredDraft
      ? "Local draft restored"
      : "No changes yet";
    els.saveState.className =
      "save-state" + (current.restoredDraft ? " dirty" : "");
    setHidden(els.resultsWrap, true);
    els.results.innerHTML = "";

    renderLinks();
    renderProjects();
    renderSkills();
    renderCredentials();
    setTab("profile", false);
    nip05.reset();
    current.dirty = false;
  }

  function setTab(tab, sync = true) {
    if (!current) return;
    if (sync) syncFromForm();
    current.tab = tab;
    $$(".editor-tab", root).forEach((button) => {
      const active = button.getAttribute("data-tab") === tab;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
    $$(".editor-panel", root).forEach((panel) => {
      setHidden(panel, panel.getAttribute("data-panel") !== tab);
    });
  }

  function rowValue(row, name) {
    const field = row.querySelector(`[data-f="${name}"]`);
    return field ? field.value.trim() : "";
  }

  function rowChecked(row, name) {
    const field = row.querySelector(`[data-f="${name}"]`);
    return field ? field.checked : true;
  }

  function readRows(container) {
    return container
      ? Array.from(container.querySelectorAll(".repeat-row"))
      : [];
  }

  function syncFromForm() {
    if (!current) return null;
    const profile = current.profile;
    profile.name = els.fName.value.trim();
    profile.displayName = els.fDisplayName.value.trim();
    profile.headline = els.fHeadline.value.trim();
    profile.bio = els.fBio.value.trim();
    profile.location = els.fLocation.value.trim();
    profile.timezone = els.fTimezone.value.trim();
    profile.languages = splitList(els.fLanguages.value);
    profile.availability = {
      status: els.fAvailability.value,
      note: els.fAvailabilityNote.value.trim(),
    };
    profile.avatar = els.fAvatar.value.trim();
    profile.banner = els.fBanner.value.trim();
    profile.nip05 = els.fNip05.value.trim();
    profile.contact = {
      label: els.fContactLabel.value.trim(),
      url: els.fContactUrl.value.trim(),
    };

    profile.links = readRows(els.links).map((row) => ({
      label: rowValue(row, "label"),
      url: rowValue(row, "url"),
    }));

    const previousProjects = profile.projects || [];
    profile.projects = readRows(els.projects).map((row, index) => ({
      id: (previousProjects[index] && previousProjects[index].id) || makeId(),
      title: rowValue(row, "title"),
      summary: rowValue(row, "summary"),
      description: rowValue(row, "description"),
      role: rowValue(row, "role"),
      contribution: rowValue(row, "contribution"),
      year: rowValue(row, "year"),
      tags: splitList(rowValue(row, "tags")),
      link: rowValue(row, "link"),
      media: rowValue(row, "media"),
      public: rowChecked(row, "public"),
    }));

    profile.skills = readRows(els.skills).map((row) => ({
      name: rowValue(row, "name"),
      evidence: rowValue(row, "evidence") === "issuer" ? "issuer" : "self",
      issuer: rowValue(row, "issuer"),
    }));

    const previousCredentials = profile.credentials || [];
    profile.credentials = readRows(els.credentials).map((row, index) => ({
      id:
        (previousCredentials[index] && previousCredentials[index].id) ||
        makeId("cr"),
      title: rowValue(row, "title"),
      issuer: rowValue(row, "issuer"),
      year: rowValue(row, "year"),
      status: rowValue(row, "status"),
      note: rowValue(row, "note"),
      public: rowChecked(row, "public"),
    }));

    return profile;
  }

  function renderLinks() {
    if (!current) return;
    const links = current.profile.links || [];
    els.links.innerHTML = links
      .map(
        (link, index) => `<div class="repeat-row" data-index="${index}">
          <div class="row-head">
            <span class="row-title">Link ${index + 1}</span>
            <button class="row-remove" type="button" data-remove="link" data-index="${index}">Remove</button>
          </div>
          <div class="field-grid">
            <label class="field"><span>Label</span><input data-f="label" type="text" maxlength="60" value="${esc(
              link.label
            )}" placeholder="GitHub"></label>
            <label class="field"><span>URL</span><input data-f="url" type="url" maxlength="500" value="${esc(
              link.url
            )}" placeholder="https://…"></label>
          </div>
        </div>`
      )
      .join("");
  }

  function renderProjects() {
    if (!current) return;
    const projects = current.profile.projects || [];
    els.projects.innerHTML = projects
      .map(
        (project, index) => `<div class="repeat-row" data-index="${index}">
          <div class="row-head">
            <span class="row-title">Project ${index + 1} · ${
              project.public === false ? "draft" : "public"
            }</span>
            <button class="row-remove" type="button" data-remove="project" data-index="${index}">Remove</button>
          </div>
          <div class="field-grid">
            <label class="field span2"><span>Title <b class="req">*</b></span><input data-f="title" type="text" maxlength="120" value="${esc(
              project.title
            )}"></label>
            <label class="field"><span>Year</span><input data-f="year" type="text" maxlength="40" value="${esc(
              project.year
            )}" placeholder="2025 — 2026"></label>
            <label class="field"><span>Role</span><input data-f="role" type="text" maxlength="120" value="${esc(
              project.role
            )}" placeholder="UX architecture"></label>
            <label class="field span2"><span>Summary</span><textarea data-f="summary" rows="2" maxlength="400">${esc(
              project.summary
            )}</textarea></label>
            <label class="field span2"><span>Description</span><textarea data-f="description" rows="3" maxlength="4000">${esc(
              project.description
            )}</textarea></label>
            <label class="field"><span>Contribution</span><input data-f="contribution" type="text" maxlength="200" value="${esc(
              project.contribution
            )}" placeholder="Design system &amp; front-end — 60%"></label>
            <label class="field"><span>Tags (comma separated)</span><input data-f="tags" type="text" maxlength="200" value="${esc(
              (project.tags || []).join(", ")
            )}" placeholder="Healthcare, Nostr"></label>
            <label class="field"><span>Project link</span><input data-f="link" type="url" maxlength="500" value="${esc(
              project.link
            )}" placeholder="https://…"></label>
            <label class="field"><span>Cover image URL</span><input data-f="media" type="url" maxlength="500" value="${esc(
              project.media
            )}" placeholder="https://…"></label>
          </div>
          <label class="check-field"><input data-f="public" type="checkbox" ${
            project.public !== false ? "checked" : ""
          }> Include this project in the published portfolio</label>
        </div>`
      )
      .join("");
  }

  function renderSkills() {
    if (!current) return;
    const skills = current.profile.skills || [];
    els.skills.innerHTML = skills
      .map(
        (skill, index) => `<div class="repeat-row" data-index="${index}">
          <div class="row-head">
            <span class="row-title">Skill ${index + 1}</span>
            <button class="row-remove" type="button" data-remove="skill" data-index="${index}">Remove</button>
          </div>
          <div class="field-grid">
            <label class="field"><span>Skill</span><input data-f="name" type="text" maxlength="60" value="${esc(
              skill.name
            )}" placeholder="Design systems"></label>
            <label class="field"><span>Evidence</span><select data-f="evidence">
              <option value="self" ${
                skill.evidence !== "issuer" ? "selected" : ""
              }>Self-described</option>
              <option value="issuer" ${
                skill.evidence === "issuer" ? "selected" : ""
              }>Listed by an issuer</option>
            </select></label>
            <label class="field span2"><span>Issuer (optional)</span><input data-f="issuer" type="text" maxlength="120" value="${esc(
              skill.issuer
            )}" placeholder="Interaction Guild"></label>
          </div>
        </div>`
      )
      .join("");
  }

  function renderCredentials() {
    if (!current) return;
    const credentials = current.profile.credentials || [];
    els.credentials.innerHTML = credentials
      .map(
        (credential, index) => `<div class="repeat-row" data-index="${index}">
          <div class="row-head">
            <span class="row-title">Credential ${index + 1}</span>
            <button class="row-remove" type="button" data-remove="credential" data-index="${index}">Remove</button>
          </div>
          <div class="field-grid">
            <label class="field"><span>Title</span><input data-f="title" type="text" maxlength="120" value="${esc(
              credential.title
            )}" placeholder="Advanced UX Systems"></label>
            <label class="field"><span>Issuer</span><input data-f="issuer" type="text" maxlength="120" value="${esc(
              credential.issuer
            )}" placeholder="Interaction Guild"></label>
            <label class="field"><span>Year</span><input data-f="year" type="text" maxlength="40" value="${esc(
              credential.year
            )}" placeholder="2025"></label>
            <label class="field"><span>Status</span><input data-f="status" type="text" maxlength="60" value="${esc(
              credential.status
            )}" placeholder="Valid · expires 2027"></label>
            <label class="field span2"><span>Note</span><input data-f="note" type="text" maxlength="200" value="${esc(
              credential.note
            )}" placeholder="Shared selectively"></label>
          </div>
          <label class="check-field"><input data-f="public" type="checkbox" ${
            credential.public !== false ? "checked" : ""
          }> Include this credential in the published portfolio</label>
        </div>`
      )
      .join("");
  }

  function listFor(type) {
    if (type === "link") return current.profile.links;
    if (type === "project") return current.profile.projects;
    if (type === "skill") return current.profile.skills;
    if (type === "credential") return current.profile.credentials;
    return null;
  }

  function renderList(type) {
    if (type === "link") renderLinks();
    else if (type === "project") renderProjects();
    else if (type === "skill") renderSkills();
    else if (type === "credential") renderCredentials();
  }

  function addItem(type) {
    if (!current) return;
    syncFromForm();
    const list = listFor(type);
    if (!list) return;
    if (type === "link") list.push({ label: "", url: "" });
    else if (type === "project") {
      list.push({
        id: makeId(),
        title: "",
        summary: "",
        description: "",
        role: "",
        contribution: "",
        year: "",
        tags: [],
        link: "",
        media: "",
        public: true,
      });
    } else if (type === "skill") {
      list.push({ name: "", evidence: "self", issuer: "" });
    } else if (type === "credential") {
      list.push({
        id: makeId("cr"),
        title: "",
        issuer: "",
        year: "",
        status: "",
        note: "",
        public: true,
      });
    }
    markDirty();
    renderList(type);
    const container =
      els[type === "link" ? "links" : type === "project" ? "projects" : type === "skill" ? "skills" : "credentials"];
    const last = container && container.lastElementChild;
    if (last) {
      last.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const input = last.querySelector("input, textarea, select");
      if (input) input.focus();
    }
  }

  function removeItem(type, index) {
    if (!current) return;
    syncFromForm();
    const list = listFor(type);
    if (!list || !Number.isInteger(index) || index < 0 || index >= list.length) {
      return;
    }
    list.splice(index, 1);
    markDirty();
    renderList(type);
  }

  function markDirty() {
    if (!current) return;
    current.dirty = true;
    els.saveState.textContent = "Unsaved changes";
    els.saveState.className = "save-state dirty";
    clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => saveDraft(false), 1000);
  }

  function saveDraft(manual) {
    if (!current) return;
    syncFromForm();
    current.profile.draftUpdatedAt = Date.now();
    if (!writeDraft(current.pubkey, current.profile)) {
      toast("Could not save the draft in this browser (storage full?).", true);
      return;
    }
    current.dirty = false;
    els.saveState.textContent = manual
      ? "Draft saved locally"
      : "Saved locally just now";
    els.saveState.className = "save-state saved";
    clearTimeout(saveTimer);
    if (manual) {
      toast("Draft saved in this browser. Publish to make it public.");
    }
  }

  async function publish() {
    if (!current) return;
    syncFromForm();
    const validation = validateProfile(current.profile);
    if (validation) {
      toast(validation, true);
      setTab("profile", false);
      return;
    }
    if (!auth.getState().pubkey) {
      toast("Connect a signer before publishing.", true);
      return;
    }

    setBusy(true);
    try {
      saveDraft(false);
      const result = await publishProfile(current.profile, currentRelays());
      renderResults(result.results);
      if (!result.accepted) {
        toast("No relay accepted the event. Check the relay list and retry.", true);
        return;
      }
      onPublished(result);
      if (!current) {
        toast(
          `Published to ${result.accepted} of ${result.results.length} relays.`
        );
        return;
      }
      current.updatedAt = result.signed.created_at;
      current.publishedProfile = normalizeProfile(result.publicProfile);
      els.status.textContent = `Last published ${timeAgo(current.updatedAt)}.`;
      toast(
        `Published to ${result.accepted} of ${result.results.length} relays.`
      );
    } catch (error) {
      toast((error && error.message) || "Publishing failed.", true);
    } finally {
      setBusy(false);
    }
  }

  function setBusy(busy) {
    els.publishBtn.disabled = busy;
    els.publishBtn.setAttribute("aria-busy", busy ? "true" : "false");
    publishButtons.forEach((button) => {
      button.disabled = busy;
      button.setAttribute("aria-busy", busy ? "true" : "false");
    });
    els.saveDraft.disabled = busy;
    els.discardDraft.disabled = busy;
  }

  function renderResults(results) {
    setHidden(els.resultsWrap, false);
    els.results.innerHTML = results
      .map(
        (result) => `<li class="${result.ok ? "ok" : "err"}">
          <span class="status">${result.ok ? "ok" : "failed"}</span>
          <span><code>${esc(result.relay)}</code><br>${esc(
            result.message
          )}</span>
        </li>`
      )
      .join("");
  }

  function exportJson() {
    if (!current) return;
    syncFromForm();
    const payload = {
      version: 1,
      kind: 30078,
      pubkey: current.pubkey,
      exportedAt: new Date().toISOString(),
      profile: current.profile,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `bitos-portfolio-${current.pubkey.slice(0, 8)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Exported JSON. Private drafts are included in the file.");
  }

  async function importJson(file) {
    if (!file || !current) return;
    try {
      const data = JSON.parse(await file.text());
      const source = data && data.profile ? data.profile : data;
      if (!source || typeof source !== "object") {
        throw new Error("No profile object found.");
      }
      current.profile = normalizeProfile(source);
      fill();
      markDirty();
      toast("Imported as a local draft. Publish when ready.");
    } catch (error) {
      toast(
        `Could not import: ${(error && error.message) || "invalid JSON"}`,
        true
      );
    }
  }

  function discard() {
    if (!current) return;
    if (
      !window.confirm(
        "Discard the local draft and restore the last published portfolio?"
      )
    ) {
      return;
    }
    clearDraft(current.pubkey);
    current.profile = clone(
      current.publishedProfile || emptyProfile()
    );
    current.restoredDraft = false;
    fill();
    toast("Local draft discarded.");
  }

  function saveRelayList() {
    const list = parseRelayUrls(els.fRelays.value);
    if (!list.length) {
      toast("Add at least one wss:// relay URL.", true);
      return;
    }
    const saved = saveRelays(list);
    els.fRelays.value = saved.join("\n");
    if (onRelaysChanged) onRelaysChanged(saved);
    toast(`Relay list saved (${saved.length}).`);
  }

  /* ---------------- events ---------------- */

  $$(".editor-tab", root).forEach((button) => {
    button.addEventListener("click", () => {
      setTab(button.getAttribute("data-tab"));
    });
  });

  $$("[data-add]", root).forEach((button) => {
    button.addEventListener("click", () => {
      addItem(button.getAttribute("data-add"));
    });
  });

  root.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove]");
    if (!remove || !current) return;
    removeItem(
      remove.getAttribute("data-remove"),
      Number(remove.getAttribute("data-index"))
    );
  });

  $$("[data-editor-close]", root).forEach((button) => {
    button.addEventListener("click", close);
  });

  body.addEventListener("input", (event) => {
    if (event.target && event.target.id === "f-relays") return;
    if (event.target && event.target.id === "f-nip05") nip05.reset();
    markDirty();
  });
  body.addEventListener("change", (event) => {
    if (event.target && event.target.id === "f-relays") return;
    markDirty();
  });
  els.saveDraft.addEventListener("click", () => saveDraft(true));
  els.publishBtn.addEventListener("click", publish);
  publishButtons.forEach((button) => {
    button.addEventListener("click", publish);
  });
  els.discardDraft.addEventListener("click", discard);
  els.exportBtn.addEventListener("click", exportJson);
  els.importBtn.addEventListener("click", () => els.importFile.click());
  els.importFile.addEventListener("change", () => {
    const file = els.importFile.files && els.importFile.files[0];
    importJson(file).finally(() => {
      els.importFile.value = "";
    });
  });
  els.saveRelays.addEventListener("click", saveRelayList);

  window.addEventListener("beforeunload", (event) => {
    if (current && current.dirty) {
      event.preventDefault();
      event.returnValue = "";
    }
  });

  function close() {
    if (!current) return;
    if (current.dirty) saveDraft(false);
    current = null;
    if (onClosed) onClosed();
  }

  return { open, isOpen, close };
}
