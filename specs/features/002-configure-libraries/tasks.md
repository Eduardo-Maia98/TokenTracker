# Tasks — 002-configure-libraries

> Gerado a partir do `plan.md`.

## Status

`done`

## Tasks

- [x] T1 — Criar branch `emaia/TT-002-configure-libraries` (se ainda não existir).
- [x] T2 — Instalar deps: axios, async-storage (`expo install`), `@tanstack/react-query`, `nativewind@4.2.7` + `tailwindcss@^3.4.17`.
- [x] T3 — Config NativeWind: babel, metro, tailwind, `src/global.css`, `nativewind-env.d.ts`, `app.json` web bundler; import CSS no root sem redesign de telas.
- [x] T4 — `src/shared/env.ts` + `.env.example` com `EXPO_PUBLIC_API_BASE_URL`.
- [x] T5 — Axios client em `src/data/http/client.ts`.
- [x] T6 — `src/data/services/conect.ts` (namespace `Conect` + métodos HTTP) e barrel `index.ts`.
- [x] T7 — Pastas `src/data/queries/` e `src/data/mutations/` com README + index (padrão pronto).
- [x] T8 — Wrapper Async Storage em `src/data/storage/`.
- [x] T9 — `QueryProvider` + wire no `src/app/_layout.tsx`.
- [x] T10 — Atualizar `specs/architecture.md` com o mapa http/services/queries/mutations/storage.
- [x] T11 — `npx tsc --noEmit` e `npx expo lint` (ou lint do projeto).

## Ordem sugerida

1. T1 → T2 → T3
2. T4 → T5 → T6 → T7 → T8
3. T9 → T10 → T11

## Definição de pronto

- [x] Critérios de aceite da spec atendidos
- [x] Typecheck ok (`tsc --noEmit`); lint configurado (`eslint-config-expo`) — erro pré-existente em `use-color-scheme.web.ts` do template Expo
- [x] Sem secrets commitados
- [x] Layout visual das telas inalterado
