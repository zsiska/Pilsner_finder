# AGENTS.md

## Cursor Cloud specific instructions

### What this is
A fully self-contained static PWA (no package manager, build step, tests, or lint tooling). Content is a catalog of AI "modes" plus prompt phrases/templates, all inlined in `index.html`. `prompt-modes.html` is a byte-for-byte copy of `index.html`. There is a single service worker (`sw.js`) and a `manifest.json`. No external network calls or CDN assets — everything works offline/locally.

### Running (dev)
There are no dependencies to install. Serve the folder over HTTP from the repo root:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/
```

The README also suggests `npx serve`, but that requires a network download; `python3 -m http.server` uses only the stdlib and is the most reliable option here.

Do not open `index.html` via the `file://` protocol for full testing: the service worker and `navigator.clipboard` require a secure/HTTP context. The copy button has a `document.execCommand('copy')` fallback, so copying still works over plain HTTP on localhost.

### Lint / test / build
None exist in this repo. There is nothing to lint, no test suite, and no build step — the served files are the source files.

### Gotchas
- `sw.js` caches `/`, `/index.html`, `/prompt-modes.html`, the PDF, and `manifest.json` under cache key `prompt-modes-v1`. If you change assets and don't see updates, bump the `CACHE` constant or clear the service worker in the browser.
- Because `prompt-modes.html` duplicates `index.html`, any content change must be applied to both files to keep them in sync.
