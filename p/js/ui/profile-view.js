/**
 * Public portfolio rendering. Pure presentation: no network, no auth calls,
 * and no global state. Actions are delegated by the app via data-action.
 */
import { AVAILABILITY, BNOS_BUSINESS_URL } from "../config.js";
import { esc } from "../shared/dom.js";
import {
  initials,
  paragraphs,
  timeAgo,
} from "../shared/format.js";
import { contactUrl, httpUrl } from "../shared/urls.js";
import { isDataImage, isDataVideo } from "../shared/media.js";
import { layoutForTheme } from "../data/themes.js";

function iconSvg(name) {
  const icons = {
    shield:
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 2 4.5 5v6c0 5 3.2 8.6 7.5 10 4.3-1.4 7.5-5 7.5-10V5L12 2Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></svg>',
    copy:
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    key: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="8" cy="15" r="4.5"/><path d="m11.2 11.8 8-8M17 4l2.5 2.5M14 7l2 2"/></svg>',
    pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    focus:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/></svg>',
    layers:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 14 9 5 9-5"/></svg>',
    globe:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg>',
    clock:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    link: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></svg>',
    external:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    edit: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>',
    share:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
    arrow:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    check:
      '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>',
    play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l10-6.5-10-6.5Z"/></svg>',
    image:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="m4 17 5-5 4 4 3-3 4 4"/></svg>',
  };
  return icons[name] || "";
}

function safeGallerySource(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw.startsWith("/") && !raw.startsWith("//")) return raw;
  if (raw.startsWith("./") || raw.startsWith("../")) return raw;
  return httpUrl(raw) || (isDataImage(raw) || isDataVideo(raw) ? raw : "");
}

export function publicGallery(profile) {
  return ((profile && profile.gallery) || [])
    .filter((item) => item && item.public !== false)
    .map((item) => ({
      ...item,
      url: safeGallerySource(item.url),
      poster: httpUrl(item.poster),
    }))
    .filter((item) => item.url);
}

function availabilityInfo(profile) {
  const status = profile.availability && profile.availability.status;
  const base = AVAILABILITY[status];
  if (!base) return null;
  return {
    label: (profile.availability.note || "").trim() || base.label,
    dot: base.dot,
  };
}

function nip05Markup(profile) {
  if (!profile.nip05) return "";
  return `<span class="verified-line js-nip05 is-pending" data-nip05="${esc(
    profile.nip05
  )}">${iconSvg("shield")} NIP-05 checking…</span>`;
}

function renderProjectCard(project, index, span2, isDemo) {
  const media = httpUrl(project.media);
  const art = media
    ? `<img class="art" src="${esc(media)}" alt="" loading="lazy">`
    : `<div class="art art-${"abc"[index % 3]}" aria-hidden="true"></div>
       <svg class="hexfield" viewBox="0 0 640 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
         <defs><pattern id="hx-${index}" width="56" height="48" patternUnits="userSpaceOnUse"><path d="M28 2 52 15v26L28 46 4 41V15L28 2Z" fill="none" stroke-width="1"/></pattern></defs>
         <rect width="640" height="340" fill="url(#hx-${index})"/>
       </svg>`;
  const link = httpUrl(project.link);
  const summary = project.summary || project.description;
  const contributionValue = project.contribution || project.role;
  const contributionLabel = project.contribution ? "Contribution" : "Role";
  const tags = (project.tags || [])
    .map((tag) => `<span class="tag">${esc(tag)}</span>`)
    .join("");

  return `<article class="tile${span2 ? " span2" : ""}">
    <div class="case-media">
      ${art}
      <span class="case-badge">${iconSvg("shield")} ${
        isDemo ? "Sample record" : "Signed record"
      }</span>
      ${project.year ? `<span class="case-year">${esc(project.year)}</span>` : ""}
    </div>
    <div class="case-body">
      <h3>${esc(project.title || "Untitled project")}</h3>
      ${summary ? `<p class="desc">${esc(summary)}</p>` : ""}
      ${
        project.description && project.description !== project.summary
          ? `<details class="case-more"><summary>Read the case</summary><div class="desc">${paragraphs(
              project.description
            )}</div></details>`
          : ""
      }
      ${
        contributionValue
          ? `<div class="contrib"><span class="k">${contributionLabel}</span><span class="v">${esc(
              contributionValue
            )}</span></div>`
          : ""
      }
      ${tags ? `<div class="tagrow">${tags}</div>` : ""}
      ${
        link
          ? `<a class="case-link" href="${esc(
              link
            )}" target="_blank" rel="noopener noreferrer">Open project ${iconSvg(
              "external"
            )}</a>`
          : ""
      }
    </div>
  </article>`;
}

function renderGalleryItem(item, index) {
  const video = item.type === "video";
  const labeled = item.caption || item.alt || (video ? "Video" : "Image");
  const poster = httpUrl(item.poster);
  const media = video
    ? poster
      ? `<img src="${esc(poster)}" alt="" loading="lazy" decoding="async">`
      : `<div class="gallery-art" aria-hidden="true"></div>`
    : `<img src="${esc(item.url)}" alt="${esc(
        item.alt || item.caption || ""
      )}" loading="lazy" decoding="async">`;

  return `<button class="gallery-tile${video ? " is-video" : ""}" type="button"
    data-action="gallery-open" data-index="${index}"
    aria-label="${video ? "Play video" : "Open image"}: ${esc(labeled)}">
    <span class="gallery-media">${media}
      ${
        video
          ? `<span class="gallery-play" aria-hidden="true">${iconSvg(
              "play"
            )}</span><span class="gallery-kind">Video</span>`
          : ""
      }
    </span>
    ${
      item.caption
        ? `<span class="gallery-cap">${esc(item.caption)}</span>`
        : ""
    }
  </button>`;
}

function metaRow(icon, label, value) {
  return `<div class="meta-row">
    <span class="meta-ic${icon === "layers" ? " amber" : ""}" aria-hidden="true">${iconSvg(
    icon
  )}</span>
    <div class="meta-body"><div class="meta-k">${esc(
      label
    )}</div><div class="meta-v">${value}</div></div>
  </div>`;
}

/**
 * @param {HTMLElement} container
 * @param {{
 *   profile: object,
 *   pubkey: string,
 *   npub: string,
 *   updatedAt: number,
 *   isOwner: boolean,
 *   isDemo: boolean
 * }} model
 */
export function renderProfile(container, model) {
  const { profile, pubkey, npub, updatedAt, isOwner, isDemo } = model;
  container.setAttribute("data-layout", layoutForTheme(profile.theme));
  const name = profile.name || profile.displayName || npub;
  const avatar = httpUrl(profile.avatar);
  const banner = httpUrl(profile.banner);
  const contact = contactUrl(profile.contact && profile.contact.url);
  const projects = (profile.projects || []).filter(
    (item) => item.public !== false
  );
  const skills = profile.skills || [];
  const credentials = (profile.credentials || []).filter(
    (item) => item.public !== false
  );
  const links = (profile.links || [])
    .map((item) => ({ label: item.label, url: httpUrl(item.url) }))
    .filter((item) => item.url);
  const availability = availabilityInfo(profile);
  const gallery = publicGallery(profile);

  const statusBits = [];
  if (availability) {
    statusBits.push(
      `<span class="status-pill"><span class="dot ${
        availability.dot
      }" aria-hidden="true"></span>${esc(availability.label)}</span>`
    );
  }
  if (profile.location) statusBits.push(`<span>${esc(profile.location)}</span>`);
  if (profile.timezone) statusBits.push(`<span>${esc(profile.timezone)}</span>`);
  if (profile.languages.length) {
    statusBits.push(`<span>${esc(profile.languages.join(" · "))}</span>`);
  }
  if (updatedAt) {
    statusBits.push(`<span>Updated ${esc(timeAgo(updatedAt))}</span>`);
  }
  const statusRow = statusBits.length
    ? `<div class="status-row">${statusBits.join(
        '<span class="status-sep" aria-hidden="true"></span>'
      )}</div>`
    : "";

  const badges = [];
  if (profile.type === "organization") {
    badges.push(
      `<a class="type-chip is-org" href="${esc(
        BNOS_BUSINESS_URL
      )}" target="_blank" rel="noopener noreferrer">${iconSvg(
        "layers"
      )} Organization on BNOS ${iconSvg("external")}</a>`
    );
  } else {
    badges.push(
      `<span class="type-chip">${iconSvg("focus")} Personal portfolio</span>`
    );
  }
  if (profile.nip05) badges.push(nip05Markup(profile));
  if (isOwner) {
    badges.push(
      `<span class="owner-chip">${iconSvg(
        "edit"
      )} You can edit this page</span>`
    );
  }

  const actions = [];
  if (contact) {
    actions.push(
      `<button class="btn btn-primary" type="button" data-action="contact" data-url="${esc(
        contact
      )}">${esc(profile.contact.label || "Contact")} ${iconSvg(
        "arrow"
      )}</button>`
    );
  }
  if (isOwner) {
    actions.push(
      `<button class="btn ${
        contact ? "btn-ghost" : "btn-primary"
      }" type="button" data-action="edit">${iconSvg(
        "edit"
      )} Edit profile</button>`
    );
  }
  actions.push(
    `<button class="btn btn-ghost" type="button" data-action="share">${iconSvg(
      "share"
    )} Share</button>`
  );
  actions.push(
    `<button class="btn btn-ghost" type="button" data-action="share-qr">${iconSvg(
      "qr"
    )} QR</button>`
  );

  const focus = skills
    .slice(0, 3)
    .map((skill) => skill.name)
    .filter(Boolean)
    .join(" · ");
  const issuerSkills = skills.filter(
    (skill) => skill.evidence === "issuer"
  ).length;
  const evidenceText =
    issuerSkills || credentials.length
      ? `${issuerSkills} issuer-listed skill${
          issuerSkills === 1 ? "" : "s"
        } · ${credentials.length} credential${credentials.length === 1 ? "" : "s"}`
      : "Self-described only";

  const metaRows = [];
  if (focus) metaRows.push(metaRow("focus", "Focus", esc(focus)));
  metaRows.push(metaRow("layers", "Evidence", esc(evidenceText)));
  if (profile.location || profile.timezone) {
    metaRows.push(
      metaRow(
        "pin",
        "Location",
        `${esc(profile.location || "Not stated")}${
          profile.timezone
            ? ` <span class="dim">· ${esc(profile.timezone)}</span>`
            : ""
        }`
      )
    );
  }
  if (profile.languages.length) {
    metaRows.push(
      metaRow("globe", "Languages", esc(profile.languages.join(" · ")))
    );
  }
  if (updatedAt) {
    metaRows.push(metaRow("clock", "Updated", esc(timeAgo(updatedAt))));
  }
  if (profile.nip05) {
    metaRows.push(
      metaRow(
        "shield",
        "NIP-05",
        `<span class="mono">${esc(profile.nip05)}</span>`
      )
    );
  }

  const metaLinks = [
    `<button class="meta-link" type="button" data-action="copy-link">${iconSvg(
      "copy"
    )} Copy public link</button>`,
  ];
  if (contact) {
    metaLinks.push(
      `<button class="meta-link" type="button" data-action="contact" data-url="${esc(
        contact
      )}">${iconSvg("link")} ${esc(
        profile.contact.label || "Contact"
      )}</button>`
    );
  }

  const projectCards = projects
    .map((project, index) =>
      renderProjectCard(
        project,
        index,
        projects.length > 1 && index === 0,
        isDemo
      )
    )
    .join("");

  const portfolioSection = `<div class="section section--portfolio" id="portfolio">
    <div class="wrap">
      <div class="section-head">
        <div class="head-flex">
          <div>
            <div class="kicker">01 — Selected portfolio</div>
            <h2>Work that can be checked, not just claimed</h2>
          </div>
        </div>
      </div>
      ${
        projects.length
          ? `<div class="bento${
              projects.length === 1 ? " single" : ""
            }">${projectCards}</div>`
          : `<div class="section-empty">No projects are published yet.${
              isOwner
                ? `<br><button class="btn btn-ghost btn-sm" type="button" data-action="edit">Add your first project</button>`
                : ""
            }</div>`
      }
    </div>
  </div>`;

  const skillRows = skills
    .map((skill) => {
      const chip =
        skill.evidence === "issuer"
          ? `<span class="ev-chip ev-verified" title="${esc(
              skill.issuer
                ? `Listed by ${skill.issuer}`
                : "Listed by an issuer"
            )}">${iconSvg("check")} Issuer-listed</span>`
          : `<span class="ev-chip ev-self">Self-described</span>`;
      return `<div class="skill-li"><span class="nm">${esc(
        skill.name
      )}</span>${chip}</div>`;
    })
    .join("");

  const credentialCards = credentials
    .map(
      (credential) => `<article class="tile tile-pad">
        <div class="tile-title">Credential · Owner-provided</div>
        <div class="evid-issuer">
          <span class="mini-hex" aria-hidden="true">${esc(
            initials(credential.issuer || credential.title)
          )}</span>
          <span>
            <span class="nm">${esc(credential.title)}</span><br>
            <span class="by">Owner-provided${
              credential.issuer ? ` by ${esc(credential.issuer)}` : ""
            }${credential.year ? ` · ${esc(credential.year)}` : ""}</span>
          </span>
        </div>
        ${
          credential.status
            ? `<span class="evid-status">Owner-reported: ${esc(
                credential.status
              )}</span>`
            : ""
        }
        <div class="evid-meta">${
          credential.id ? `<span>ID: ${esc(credential.id)}</span>` : ""
        }<span>Not independently verified</span></div>
        ${
          credential.note
            ? `<p class="legend-note">${esc(credential.note)}</p>`
            : ""
        }
      </article>`
    )
    .join("");

  const gallerySection = gallery.length || isOwner
    ? `<div class="section section--gallery" id="gallery">
        <div class="wrap">
          <div class="section-head">
            <div class="head-flex">
              <div>
                <div class="kicker">02 — Gallery</div>
                <h2>Images and motion, chosen by the owner</h2>
              </div>
              ${
                gallery.length
                  ? `<button class="btn btn-ghost btn-sm" type="button" data-action="gallery-open" data-index="0">${iconSvg(
                      "image"
                    )} View all ${gallery.length}</button>`
                  : ""
              }
            </div>
          </div>
          ${
            gallery.length
              ? `<div class="gallery-grid count-${
                  gallery.length === 1
                    ? "1"
                    : gallery.length === 2
                    ? "2"
                    : "many"
                }">${gallery
                  .map((item, index) => renderGalleryItem(item, index))
                  .join("")}</div>`
              : `<div class="section-empty">No gallery media yet.${
                  isOwner
                    ? `<br><button class="btn btn-ghost btn-sm" type="button" data-action="edit">Add images or video</button>`
                    : ""
                }</div>`
          }
        </div>
      </div>`
    : "";

  const hasSkills = Boolean(skills.length || credentials.length);
  const skillsSection = `<div class="section section--skills" id="skills">
    <div class="wrap">
      <div class="section-head">
        <div class="kicker">03 — Skills &amp; evidence</div>
        <h2>Two grades, no global score</h2>
      </div>
      ${
        hasSkills
          ? `<div class="split-grid${
              skills.length && credentials.length ? "" : " single"
            }">
              ${
                skills.length
                  ? `<article class="tile tile-pad">
                      <div class="tile-title">Skills <span class="mono">${skills.length}</span></div>
                      ${skillRows}
                      <p class="legend-note"><b>Violet</b> means listed by an issuer. <b>Outline</b> means my own claim. bitos.space does not independently verify either grade, and there is no global reputation score.</p>
                    </article>`
                  : ""
              }
              ${credentialCards}
            </div>`
          : `<div class="section-empty">No skills or credentials are listed yet.${
              isOwner
                ? `<br><button class="btn btn-ghost btn-sm" type="button" data-action="edit">Add skills</button>`
                : ""
            }</div>`
      }
    </div>
  </div>`;

  const linkItems = links
    .map(
      (link) =>
        `<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${iconSvg(
          "link"
        )} ${esc(
          link.label ||
            link.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
        )} ${iconSvg("external")}</a>`
    )
    .join("");

  const aboutSection = `<div class="section section--about" id="about">
    <div class="wrap">
      <div class="section-head">
        <div class="kicker">04 — About</div>
        <h2>The person behind the key</h2>
      </div>
      <div class="about-grid${linkItems ? "" : " single"}">
        <article class="tile about-card">
          <h3>About</h3>
          ${
            profile.bio
              ? `<div class="about-bio">${paragraphs(profile.bio)}</div>`
              : `<p class="fine">No introduction published yet.${
                  isOwner
                    ? ' <button class="head-link" type="button" data-action="edit">Add one →</button>'
                    : ""
                }</p>`
          }
        </article>
        ${
          linkItems
            ? `<article class="tile about-card"><h3>Links</h3><div class="link-list">${linkItems}</div></article>`
            : ""
        }
      </div>
    </div>
  </div>`;

  const strengthChecks = [
    {
      label: "Photo and name",
      done: Boolean((profile.name || profile.displayName) && avatar),
    },
    { label: "Headline", done: Boolean(profile.headline) },
    { label: "Introduction", done: Boolean(profile.bio) },
    { label: "First project", done: projects.length > 0 },
    { label: "Gallery media", done: gallery.length > 0 },
    {
      label: "Skills or credentials",
      done: skills.length > 0 || credentials.length > 0,
    },
  ];
  const strengthDone = strengthChecks.filter((check) => check.done).length;
  const strengthCard =
    isOwner && strengthDone < strengthChecks.length
      ? `<div class="strength">
          <div class="strength-head">
            <span>Profile strength</span>
            <span class="mono">${strengthDone}/${strengthChecks.length}</span>
          </div>
          <div class="strength-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${
            strengthChecks.length
          }" aria-valuenow="${strengthDone}" aria-label="Profile completeness">
            <i style="width:${Math.round(
              (strengthDone / strengthChecks.length) * 100
            )}%"></i>
          </div>
          <ul class="strength-list">
            ${strengthChecks
              .map(
                (check) =>
                  `<li class="${check.done ? "done" : ""}"><span class="strength-dot" aria-hidden="true"></span>${esc(
                    check.label
                  )}</li>`
              )
              .join("")}
          </ul>
          <button class="btn btn-primary btn-sm btn-block" type="button" data-action="edit">Finish your profile</button>
        </div>`
      : "";

  const statItems = [
    { value: projects.length, label: "Projects" },
    { value: gallery.length, label: "Media" },
    { value: skills.length, label: "Skills" },
    { value: credentials.length, label: "Credentials" },
  ].filter((item) => item.value > 0);

  const heroStats = statItems.length
    ? `<div class="hero-stats" role="group" aria-label="Portfolio at a glance">
        ${statItems
          .map(
            (item) =>
              `<div class="hero-stat"><span class="hero-stat-value">${
                item.value
              }</span><span class="hero-stat-label">${esc(
                item.label
              )}</span></div>`
          )
          .join("")}
      </div>`
    : "";

  const videoIndex = gallery.findIndex((item) => item.type === "video");
  const reelIndex = videoIndex >= 0 ? videoIndex : 0;
  const reelItem = gallery[reelIndex];
  const reelIsVideo = Boolean(reelItem && reelItem.type === "video");
  const reelPoster = reelItem
    ? reelIsVideo
      ? reelItem.poster
      : reelItem.url
    : "";
  const reelCaption =
    reelItem && (reelItem.caption || reelItem.alt || "View gallery");

  const reelCard = reelItem
    ? `<button class="hero-reel" type="button" data-action="gallery-open" data-index="${reelIndex}" aria-label="${
        reelIsVideo ? "Play show reel" : "Open featured media"
      }: ${esc(reelCaption)}">
        ${
          reelPoster
            ? `<img src="${esc(
                reelPoster
              )}" alt="" loading="eager" decoding="async">`
            : `<span class="hero-reel-art" aria-hidden="true"></span>`
        }
        <span class="hero-reel-shade" aria-hidden="true"></span>
        ${
          reelIsVideo
            ? `<span class="hero-reel-play" aria-hidden="true">${iconSvg(
                "play"
              )}</span>`
            : ""
        }
        <span class="hero-reel-caption">
          <span class="hero-reel-kicker">${
            reelIsVideo ? "Show reel" : "Featured media"
          }</span>
          <span class="hero-reel-title">${esc(reelCaption)}</span>
        </span>
      </button>`
    : isOwner
    ? `<div class="hero-reel is-empty">
        <span class="hero-reel-empty">
          <span class="hero-reel-kicker">Show reel</span>
          <span class="hero-reel-empty-title">Add a show reel</span>
          <span class="hero-reel-empty-text">Upload a video or lead with your best image.</span>
          <button class="btn btn-ghost btn-sm" type="button" data-action="edit">Add media</button>
        </span>
      </div>`
    : "";

  container.innerHTML = `<header class="hero profile-hero" id="overview">
    ${
      banner
        ? `<div class="profile-banner" aria-hidden="true"><img src="${esc(
            banner
          )}" alt=""></div>`
        : ""
    }
    <div class="wrap hero-grid">
      <div class="identity">
        <div class="id-top">
          <div class="hexwrap">
            <div class="hex-glow" aria-hidden="true"></div>
            <div class="hex-ring" aria-hidden="true"></div>
            <div class="hex-inner" aria-hidden="true">${
              avatar ? `<img src="${esc(avatar)}" alt="">` : esc(initials(name))
            }</div>
          </div>
          <div class="id-name">
            <h1>${esc(name)}</h1>
            ${
              profile.displayName &&
              profile.name &&
              profile.displayName !== profile.name
                ? `<div class="lao-sub">${esc(profile.displayName)}</div>`
                : ""
            }
            ${
              profile.headline
                ? `<p class="headline">${esc(profile.headline)}</p>`
                : ""
            }
            ${
              badges.length
                ? `<div class="badge-row">${badges.join("")}</div>`
                : ""
            }
          </div>
        </div>

        <div class="trust-strip" role="group" aria-label="Identity and key">
          <span class="trust-label">${iconSvg("key")} Identity key</span>
          <span class="npub-chip">
            <code title="${esc(npub)}">${esc(
              npub.length > 24 ? `${npub.slice(0, 12)}…${npub.slice(-6)}` : npub
            )}</code>
            <button class="copy-btn" type="button" data-action="copy" data-copy="${esc(
              npub
            )}" title="Copy full npub" aria-label="Copy full npub">${iconSvg(
              "copy"
            )}</button>
          </span>
          <span class="npub-chip" title="Public key in hex">
            <code>${esc(pubkey.slice(0, 8))}…${esc(pubkey.slice(-6))}</code>
          </span>
          <span class="trust-note">Self-owned key — this page follows the key holder. bitos.space cannot edit it.${
            isOwner ? " You are signed in as the owner." : ""
          }</span>
        </div>

        ${statusRow}
        ${heroStats}
        <div class="hero-actions">${actions.join("")}</div>
      </div>

      <div class="hero-side">
        ${reelCard}
        <aside class="meta-card" aria-label="Profile details">
          <h3>Details <span class="mono" style="letter-spacing:0">v1</span></h3>
          ${metaRows.join("")}
          <div class="meta-links">${metaLinks.join("")}</div>
          ${strengthCard}
        </aside>
      </div>
    </div>
  </header>
  ${portfolioSection}
  ${gallerySection}
  ${skillsSection}
  ${aboutSection}`;
}

export function updateNip05Badges(container, status) {
  const nodes = container.querySelectorAll(".js-nip05");
  nodes.forEach((node) => {
    const id = node.getAttribute("data-nip05") || "";
    node.classList.remove("is-pending", "is-unverified");
    if (!id) return;
    if (status === "verified") {
      node.innerHTML = `${iconSvg(
        "shield"
      )} NIP-05 verified · <span class="mono">${esc(id)}</span>`;
    } else if (status === "unverified" || status === "mismatch") {
      node.classList.add("is-unverified");
      node.innerHTML = `${iconSvg("shield")} NIP-05 ${
        status === "mismatch" ? "does not match this key" : "unverified"
      } · <span class="mono">${esc(id)}</span>`;
    } else {
      node.classList.add("is-pending");
      node.innerHTML = `${iconSvg("shield")} NIP-05 checking…`;
    }
  });
}
