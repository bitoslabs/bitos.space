# bitos.space

The landing site for **BitOS**, a decentralized enterprise network built on the
Nostr protocol. It presents the platform, publishes the open data standard, and
hosts the BitOS personal portfolio app.

- Website: <https://bitos.space>
- Data standard: <https://bitos.space/data-standard.html>
- Portfolio app: <https://bitos.space/p/>

## What's in this repository

This is a static, dependency-free site — plain HTML, CSS, and JavaScript, with no
build step.

| Path | Purpose |
| --- | --- |
| `index.html` | Landing page (hero, features, ecosystem links) |
| `script.js` | Landing page behavior (navigation, theme, animations) |
| `styles.css` | Landing page styles |
| `data-standard.html` | Open event conventions used across the BitOS ecosystem |
| `p/` | Personal portfolio app addressed by a Nostr key |
| `assets/` | Logos, icons, and fonts |
| `_redirects`, `404.html`, `robots.txt`, `sitemap.xml` | Hosting and SEO configuration |
| `llms.txt` | Machine-readable project summary for AI agents |

## Personal portfolio (`/p/`)

Open `https://bitos.space/p/{npub or NIP-05}` to view a portfolio. The owner
signs in and edits it; visitors get a read-only public page.

- Identity is a Nostr key — no account, email, or server-side user database.
- Sign-in via **NIP-07** browser extension or **NIP-46** remote signer.
- Content is stored as a **NIP-78** replaceable event (kind `30078`,
  `d` tag `bitos.space:portfolio:v1`) and published to Nostr relays.
- Profile metadata is read from **kind 0** and **NIP-05** identifiers.
- Drafts and preferences live in `localStorage`; publishing is always explicit.
- Gallery supports compressed inline image uploads and direct video URLs, with
  a public lightbox for visitors.
- Three portfolio styles — Spotlight/Obsidian, Editorial/Parchment and
  Dossier/Signal — are published in the same event and change both layout and
  palette, including `theme-color`. Visitors can switch dark/light without
  losing the owner's layout.
- Supports pretty URLs (`/p/{ref}`) through `_redirects`.

Source layout under `p/`:

```
p/
├── index.html
├── css/          # tokens, header, landing, profile, editor, gallery, themes
├── data/         # demo profile and alias fixtures
├── js/
│   ├── app.js
│   ├── config.js         # relays, event kinds, storage keys
│   ├── data/             # profile model, local storage, aliases
│   ├── nostr/            # identity, NIP-05/07/46, relay, crypto
│   ├── services/         # auth, profile, publish
│   ├── shared/           # bech32, clipboard, DOM, fetch, URL helpers
│   └── ui/               # landing, profile, editor, auth dialog, NIP-05 wizard
└── vendor/       # bundled nostr-tools (Unlicense) and qrcode-generator (MIT)
```

## Run locally

Because `/p/` uses ES modules and pretty URLs, serve the directory over HTTP
rather than opening the files directly:

```sh
node serve.mjs 8080
```

The included server serves existing files first and falls back to
`/p/index.html` for `/p/{ref}`, so profile URLs work locally without extra
configuration. Then visit:

- <http://localhost:8080/>
- <http://localhost:8080/p/>
- <http://localhost:8080/p/{npub or NIP-05}>

A plain `python3 -m http.server` does not support the fallback and will return
404 for `/p/{ref}`; use `?ref=` in that case. There are no install, build, or
test steps.

## Deployment

The site is static and can be published to any static host. It is currently set
up for Netlify/Cloudflare Pages-style hosting, where `_redirects` rewrites
`/p/*` to `/p/index.html` so portfolio URLs resolve without a trailing file
name. Existing files under `/p/` are served before the rewrite.

## Related projects

- Core protocol and relay: <https://github.com/bitoslabs/bitos-nostr>
- Client app (ERP, CRM, chat, AI agents): <https://github.com/bitoslabs/bitos-native-app>
- Password vault: <https://github.com/bitoslabs/bitos-vault>

## License

[MIT](LICENSE)
