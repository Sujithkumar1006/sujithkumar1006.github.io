# Portfolio Next

Personal portfolio site built with Next.js App Router, React, TypeScript, and `styled-components`.

## Stack

- Next.js 15
- React 19
- TypeScript
- styled-components

## Project Structure

- `app/page.tsx`: assembles the single-page portfolio
- `app/layout.tsx`: root layout, metadata, external assets, theme wrapper
- `app/components/`: section components such as About, Experience, Projects, and Education
- `app/components/styled.ts`: primary UI styling
- `app/globalStyles.ts`: theme-aware global styles
- `app/context/ThemeContext.tsx`: dark/light theme state
- `public/`: images, screenshots, favicon, and resume PDF

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

Run linting:

```bash
npm run lint
```

Create the production static export build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

Publish the exported site from `out/` with GitHub Pages:

```bash
npm run deploy
```

## Notes

- The app uses `output: 'export'` in `next.config.ts`, so `next build` generates the static export.
- Portfolio content is currently hardcoded in the section components under `app/components`.
- Theme state is stored in `localStorage` and applied through a `data-theme` attribute on the root document.
