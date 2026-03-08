# AGENTS.md

## Project Overview
This repository is a personal portfolio site built with:
- Next.js 15 App Router
- React 19
- TypeScript
- styled-components

The site is a statically exported single-page portfolio. Most content is hardcoded in React components under `app/components`.

## Repository Structure
- `app/page.tsx`: main page composition
- `app/layout.tsx`: root layout, metadata, external styles/scripts
- `app/components/`: portfolio sections and shared styling
- `app/components/styled.ts`: primary component styling with `styled-components`
- `app/globalStyles.ts`: theme-aware global styles
- `app/globals.css`: baseline global CSS
- `app/context/ThemeContext.tsx`: dark/light theme state
- `app/lib/registry.tsx`: styled-components registry for Next.js
- `public/`: images, favicon, resume PDF, project screenshots

## How Content Is Managed
This project is not CMS-backed and not data-driven.

Profile content is stored directly in component files:
- `app/components/Title.tsx`
- `app/components/About.tsx`
- `app/components/TechStack.tsx`
- `app/components/Experience.tsx`
- `app/components/Projects.tsx`
- `app/components/Education.tsx`

When updating portfolio content, edit those files directly unless asked to refactor into a separate data model.

## Styling Conventions
- Prefer `styled-components` for component-level styling.
- Use `app/globalStyles.ts` for theme tokens and global layout behavior.
- Avoid adding new CSS modules unless there is a clear reason.
- Reuse existing theme variables such as `--bg-color`, `--text-color`, `--card-bg`, `--card-border`.
- Preserve the current dark/light theme behavior via the `data-theme` attribute.

## Commands
Install dependencies:

```bash
npm install
```

Run development server:

```bash
npx next dev
```

Lint:

```bash
npm run lint
```

Build static export:

```bash
npx next build
```

## Important Notes
- `next.config.ts` already uses `output: 'export'`.
- Do not use `next export`; it is obsolete for this setup.
- `package.json` already includes working `dev`, `build`, `lint`, and `deploy` scripts.
- `README.md` documents the actual project and its static export workflow.
- `app/globals.css` is intentionally minimal; global theme/layout styling should live in `app/globalStyles.ts`.

## Change Guidelines
- Keep the app compatible with static export.
- Prefer simple, maintainable changes over adding abstractions.
- Do not introduce server-only features that break static export unless explicitly requested.
- When editing content, preserve tone and resume consistency across sections.
- When editing UI, preserve the existing visual style unless the user asks for a redesign.

## Testing Expectations
At minimum, after changes:
1. Run `npm run lint`
2. Run `npx next build` if the change affects rendering, config, or static export behavior

## Safe Assumptions For Agents
- This is a portfolio, not a product app.
- Most requested changes will be content updates, styling improvements, responsiveness fixes, or cleanup.
- Avoid unnecessary architectural refactors unless the user explicitly asks for them.
