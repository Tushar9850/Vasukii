# Vasukii — Website

A plant, gardening-service, and garden-design aggregator, launching city-first in Lucknow.
Built with React + Vite + Tailwind CSS.

## Pages

- `/` — Home
- `/story` — Our Story (brand origin + roadmap)
- `/what-we-do` — What We Do (the three pillars + how it works)
- `/shop` — Shop (plants & pots catalog)
- `/plant-walls` — Plant Walls & custom garden design
- `/blog` — Blog (journal, currently placeholder posts)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The production build is output to `dist/`.

## Before going live

- Replace the placeholder WhatsApp number (`910000000000`) in `src/components/Nav.jsx` with your
  real business number.
- Confirm the Instagram handle in the same file (`@vasukii_officials`) is correct.
- Swap the placeholder blog posts and shop products in `src/data.js` for real content.
- Replace the "Project preview" gallery blocks on `/plant-walls` with real project photos once
  available (`src/pages/PlantWalls.jsx`).

## Deploying

This is a static Vite app, so it deploys easily to:

- **Vercel** — import the GitHub repo, framework preset "Vite", no config needed.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — run `npm run build` and publish the `dist/` folder (or use a GitHub Action).
