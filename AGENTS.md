# Repository Guidelines

## Project Structure & Module Organization
- `src/app`: Next.js App Router entry points (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components`: Reusable UI and presentational components (`ui/*`, `icons/*`, `project-card.tsx`, `command-menu.tsx`).
- `src/data`: Single source of truth for content (`resume-data.tsx`).
- `src/lib`: Small utilities (e.g., `utils.ts` exports `cn`).
- `public/`: Additional static assets. Root contains config: `next.config.js`, `tailwind.config.js`, `postcss.config.js`.

## Build, Test, and Development Commands
- `nvm use` (Node `22.x`): Aligns local version with `.nvmrc`/`.node-version`.
- `npm i`: Install dependencies (prefer npm to avoid lockfile churn).
- `npm run dev`: Start dev server at `http://localhost:3000` with HMR.
- `npm run build`: Production build (`.next` output).
- `npm start`: Run the built app locally.
- `npm run lint`: Lint with ESLint (Next core‑web‑vitals rules).

## Coding Style & Naming Conventions
- **TypeScript**: Strict mode enabled; prefer explicit types at public boundaries.
- **Prettier**: Use project config; Tailwind plugin sorts class names. Let your editor format, or run Prettier before commits.
- **Components**: Export in PascalCase. File names: kebab‑case for components (e.g., `project-card.tsx`), PascalCase for icons (e.g., `GitHubIcon.tsx`).
- **Imports**: Use alias `@/*` (e.g., `@/components/ui/button`).
- **Styling**: Tailwind CSS; compose classes with `cn` from `src/lib/utils`.

## Testing Guidelines
- No tests currently. If adding, prefer Vitest + React Testing Library, co‑locate as `*.test.tsx` next to source. Keep tests focused, deterministic, and avoid brittle snapshots.

## Commit & Pull Request Guidelines
- **Commits**: Short, imperative summaries (e.g., `update resume-data.tsx: fix links`). Group related changes; keep diffs small. Optionally use `type(scope): message`.
- **PRs**: Provide context (what/why), link issues, include before/after screenshots for UI changes, and note local verification steps. Ensure `npm run lint` passes and the app builds.

## Security & Configuration Tips
- Do not commit secrets. If configuration is needed, use `.env.local` (public keys should be prefixed `NEXT_PUBLIC_`).
- Stick to one package manager; this repo assumes `npm`.
