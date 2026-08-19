# David Momoh — Portfolio

A single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS v4,
generated from David Momoh's resume. The design is themed around a trading
terminal / market ticker — a nod to his fintech work at NASD — with a live
scrolling stats tape, a "trade log" timeline for experience, and a "watchlist"
grid for skills.

## Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/postcss`)

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data.ts              # all resume content (edit this to update the site)
  index.css            # Tailwind import + design tokens (@theme) + fonts
  App.tsx              # page composition
  components/
    Nav.tsx
    Ticker.tsx         # scrolling stats tape (signature element)
    Hero.tsx
    Experience.tsx      # "trade log" timeline
    Skills.tsx          # "watchlist" skill groups
    Projects.tsx        # "positions" grid
    Profile.tsx         # certifications, publications, education
    Footer.tsx
```

## Editing content

Everything text-based — roles, bullets, projects, skills, certifications —
lives in `src/data.ts`. Update that file and the whole site updates; no need
to touch components for content changes.

## Deploying

The `dist/` folder from `npm run build` is static and can be deployed to
Vercel, Netlify, GitHub Pages, or any static host. For Vercel/Netlify, the
build command is `npm run build` and the output directory is `dist`.
