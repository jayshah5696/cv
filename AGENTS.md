# CV — Agent Instructions

## Role
You are maintaining a personal resume/CV site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Commands
- `npm i` — Install deps
- `npm run dev` — Dev server at localhost:3000
- `npm run build` — Production build
- `npm run lint` — ESLint check

## Hard Constraints
- All resume content lives in `src/data/resume-data.tsx` — NEVER inline content in components.
- Use `@/*` import alias for all project imports.
- Compose Tailwind classes with `cn()` from `src/lib/utils`.
- Components: PascalCase exports, kebab-case filenames. Icons: PascalCase filenames.
- Stick to npm (not yarn/pnpm) — lockfile is `package-lock.json`.
- No secrets in code. Use `.env.local` with `NEXT_PUBLIC_` prefix for public keys.

## Key Learnings

| Date | What Went Wrong | What To Do Instead |
|------|----------------|-------------------|
