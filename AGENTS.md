# Big O Gym

Time/space complexity practice tool. Stack: Vite + React + TypeScript + Tailwind. No backend, no SSR, no auth — localStorage only. Dark theme, monospace, terminal-ish aesthetic.

## Commands

- `pnpm dev` — start Vite dev server at `http://localhost:5173`
- `pnpm test` — run unit tests (vitest)
- `pnpm build` — typecheck + build static output to `dist/`
- `pnpm lint` — lint with ESLint
- `pnpm format` — format with Prettier

## Code conventions

- TypeScript strict mode. No `any` without explicit justification.
- React components in `components/`, one component per file, named exports.
- Tailwind for all styling. No CSS modules, no styled-components.
- File naming: `kebab-case` for files, `PascalCase` for components.
- Tests required for `lib/normalizer/` — pure logic, no excuses.

## Problem authoring conventions

Two `kind`s of problem in the same `problems.ts` array, uniform random rotation:

- **`kind: 'code'`** — code snippet + variables + time/space complexity.
  Has `code` (python/javascript), `variables`, `time_complexity`
  (or `method_times[]` for multi-method classes), `space_complexity`.
- **`kind: 'datastructure'`** — short prompt naming a data structure operation.
  Has `prompt`, `time_complexity`, optional `space_complexity`.
  No `variables`, no `code`.

### Variable conventions (code problems only)

- Every problem declares `variables` (non-empty). Each entry has a short `name`
  (single lowercase letter) and a brief English `meaning`.
- English descriptions only: `'length of the input array'`, not `'len(arr)'`.
- Grid convention: `m = rows`, `n = columns`.
- Common conventions: `n` = array/string length, `v`/`e` = graph vertices/edges,
  `n`/`m` = two strings (n first, m second).
- Every variable used in `time_complexity`, `space_complexity`, or
  `accepted_equivalent_forms` MUST be declared in `variables` — enforced
  at build time.

## Reference documents

- `SPEC.md` — full product spec
- `DECISIONS.md` — architecture decision log
- `TICKETS.md` — implementation plan
