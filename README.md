# DevOps Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS -- themed as a
"deploy console," with a dark/light toggle, an animated CI/CD pipeline visualization, and
sections for skills, projects, blog notes, and contact links.

Exported as fully static HTML, so it can be hosted free on GitHub Pages, Vercel, Netlify, or
Cloudflare Pages with zero-downtime deploys.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
```

This generates a static site in the `out/` folder -- that folder is your entire deployable site.

## Where to edit things

| What you want to change | File to edit |
|---|---|
| Your name, role, tagline, links, email | `data/content.ts` -> `profile` |
| Skills list | `data/content.ts` -> `skills` |
| Projects | `data/content.ts` -> `projects` |
| Pipeline stage labels | `data/content.ts` -> `pipelineStages` |
| Blog posts | `data/content.ts` -> `blogPosts` |
| Colors / theme | `app/globals.css` -> `:root` and `.dark` blocks |
| Resume file | replace `public/RESUME_GOES_HERE.txt` with your `public/resume.pdf` |

See the accompanying PDF guide for full step-by-step deployment instructions (GitHub, GitHub
Pages, custom domain, Docker Hub linking, uptime monitoring, and more).

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- next-themes (dark/light mode)
- lucide-react (icons)

## License

Use this freely for your own portfolio.
