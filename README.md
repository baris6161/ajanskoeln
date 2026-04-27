# Ajans Köln — Monorepo (Website + CRM)

Ein npm-Workspace: **`apps/marketing`** (Vite, Coming-Soon / Website) und **`apps/crm`** (Next.js CRM). Produktions-Build kopiert den Marketing-`dist`-Ordner nach `apps/crm/public`, danach `next build` — alles aus dem Repo-Root mit `npm run build`.

Detaillierte CRM-Dokumentation: [`apps/crm/README.md`](apps/crm/README.md).

## Verhalten auf der Domain (z. B. Vercel-URL)

| URL | Ergebnis |
|-----|----------|
| **`/`** | Coming-Soon / Vorschau-Tor (`preview-gate.html`) ohne gültiges Cookie |
| **`/`** nach Admin-Login in der Vorschau | Vollständige Marketing-Website (SPA) |
| **`/crm`** | CRM; ohne Session → Weiterleitung zu **`/crm/login`** |

Die Routen **`/api/preview-session`** (POST) und **`/api/preview-logout`** (GET) liegen für das Formular an der Root-URL; die Middleware leitet intern an die Next-App unter `/crm/api/...` weiter.

## Vercel (mit diesem Repo verbunden)

Im Projekt **Root Directory** auf **`apps/crm`** stellen (Next-Erkennung), damit die App-Config dort liegt:

- **Install Command:** `cd ../.. && npm install` (oder `npm ci`)
- **Build Command:** `cd ../.. && npm run build`

Umgebungsvariablen im Vercel-Projekt u. a.:

- **`PREVIEW_SESSION_SECRET`** — mindestens 16 Zeichen (Pflicht für Vorschau-Login)
- optional **`PREVIEW_ACCESS_USER`** / **`PREVIEW_ACCESS_PASSWORD`** (Standard aus Code nur für Entwicklung)
- wie bisher **`NEXT_PUBLIC_SUPABASE_*`**, Gmail/SMTP, **`SETTINGS_ENCRYPTION_KEY`**, …

**„Routes Manifest Could Not Be Found“:** Im Dashboard unter *Build & Development Settings* das Feld **Output Directory** leer lassen (nicht `apps/crm/.next` setzen). Entweder **Root Directory = `apps/crm`** (empfohlen) mit den `cd ../.. && …`-Befehlen oben — oder Projekt am **Repo-Root** mit Standard-`npm run build`: Dann kopiert der Build auf Vercel (`VERCEL=1`) automatisch `apps/crm/.next` nach `./.next`.

Repository: [github.com/baris6161/ajanskoeln](https://github.com/baris6161/ajanskoeln).
