# TokenTracker

Expo (React Native) app that tracks AI account token usage — MVP focused on **Cursor**.

This repository is a **hands-on study of Spec-Driven Development (SDD)**. The product is built **purely with SDD**: every real feature starts as written intent in `specs/`, then moves through plan and tasks before code. Implementation follows that sequence; we do not invent requirements outside the spec.

## Why SDD here

TokenTracker exists to practice a lightweight, manual SDD loop end to end:

```text
constitution → product-brief → spec → plan → tasks → implement (TDD in domain)
```

Specs live outside `src/` so process and product stay separate from application code. Agents and contributors are expected to treat `specs/` as the source of truth.

Start with [`specs/README.md`](./specs/README.md), then [`specs/constitution.md`](./specs/constitution.md) and [`specs/architecture.md`](./specs/architecture.md).

## Architecture sketch

Routes live in `src/app/`. Domain, data, and presentation follow Clean Architecture + MVVM as mapped in `specs/architecture.md`.

## Setup

```bash
npm install
npx expo start
```

## Scripts

| Command | Use |
| --- | --- |
| `npm start` | Expo dev server |
| `npm test` | Jest |
| `npx expo lint` | ESLint |
| `npx tsc --noEmit` | Typecheck |

## Specs & workflow

| Path | Role |
| --- | --- |
| [`specs/`](./specs/README.md) | SDD docs: constitution, architecture, product brief, features |
| [`specs/git-workflow.md`](./specs/git-workflow.md) | Branch / commit / PR conventions (`emaia/TT-NNN-…`) |
| `.cursor/rules/` | Always-on coding and git standards |
| `.cursor/skills/` | SDD feature flow, TDD ritual, git branch → PR |
| [`AGENTS.md`](./AGENTS.md) | Expo / Router / EAS guidance |
