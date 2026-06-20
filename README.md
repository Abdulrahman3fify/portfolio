# Abdulrahman Afify — Portfolio

Personal portfolio of **Abdulrahman Afify**, Senior Mobile Engineer (React Native, 9+ years).

🔗 **Live:** https://abdulrahman-afify-portfolio.vercel.app

## Tech stack

- **React 18** + **TypeScript**
- **Vite 6** (build tooling)
- **Tailwind CSS v4** (styling, semantic theme tokens)
- Light / dark mode with system-preference detection and persistence
- Deployed on **Vercel** with GitHub auto-deploy

## Development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.tsx      # all sections (nav, hero, skills, experience, projects, contact)
  data.ts      # content: profile, stats, skills, experience, projects
  index.css    # Tailwind + theme tokens (light/dark palettes)
  main.tsx     # entry point
```

To update content, edit [`src/data.ts`](src/data.ts) — no component changes needed.

## Deployment

Pushes to `main` deploy automatically to production via Vercel.
Manual deploy: `vercel --prod`.
