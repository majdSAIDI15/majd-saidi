# Majd Saidi — Portfolio

Personal portfolio of **Majd Saidi**, AI Engineer & Data Scientist. Rebuilt with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript. Same visual design as before — futuristic white & blue theme — but as a maintainable, component-based, statically-generated site.

## Stack

- **Astro 5** — static site generation, ships ~0 JS by default (only the `src/scripts` bundle is hydrated).
- **Tailwind CSS 3** — utility styling, compiled and purged at build time (theme tokens in `tailwind.config.cjs`).
- **TypeScript** — typed content data and client scripts.

## Commands

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start the dev server at `http://localhost:4321`   |
| `npm run build`   | Build the production site to `dist/`              |
| `npm run preview` | Serve the built `dist/` locally to check it       |

> **Node:** use an LTS version (18, 20, or 22). Node 21 works but prints engine warnings.

## Project structure

```
src/
  data/            # All site content lives here — edit these to update the site
    site.ts          profile, contact, nav, hero roles
    skills.ts        AI/DS, Cybersecurity, IoT/Embedded, Dev/Cloud + soft skills
    experience.ts    experience, education, achievements, languages, activities
    projects.ts      projects (image / video / icon, tags, optional code/demo links)
    certifications.ts
  components/       # One .astro component per section
  layouts/Layout.astro   # <head>, fonts, fixed chrome, script entry
  pages/index.astro      # assembles the sections
  scripts/         # client-side TS (nav, scroll, particles, matrix, cursor, form…)
  styles/global.css      # Tailwind layers + custom component classes
public/
  images/          # profile.jpg, zhbot.png, jarvis.png, glove-voice.mp4
  resume.pdf
```

## Updating content

Everything is data-driven — you rarely touch markup:

- **Add a project:** append an entry to `src/data/projects.ts`. Use `media: { type: 'icon', icon: 'fas fa-…' }` when you have no photo (it renders an on-brand tile). `code`/`demo` buttons only appear when you provide a URL.
- **Update your CV:** replace `public/resume.pdf` with the latest PDF (the "Download CV" button links to it).
- **Add a certification:** append to `src/data/certifications.ts`. Add `credentialUrl` to enable the "View Credential" link; provide a `badge` image URL or an `icon` fallback.
- **Edit skills / experience / contact:** the matching file in `src/data/`.

Search the `src/data` files for `TODO` — those mark links (project repos, demos, credentials, Instagram) left empty during the rebuild for you to fill in.

## Deployment

`npm run build` outputs a fully static site to `dist/`. Deploy that folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

For a GitHub Pages **project** site (`username.github.io/<repo>`), set `site` and `base` in `astro.config.mjs` before building.

## Notes

- The previous single-file version and the older French portfolio were removed during the rebuild; they remain in git history if ever needed.
