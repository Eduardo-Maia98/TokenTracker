# Tasks — 005-tokens-usage-arcs

> Gerar a partir do `plan.md`. Cada item deve ser verificável e pequeno.

## Status

`done`

## Tasks

- [x] T1 — Domain: tipos `auto`/`paid`, normalize `%` (clamp), port + use case `loadTokenUsageArcs` com TDD
- [x] T2 — Data: ampliar `CursorUsageSummaryDto`; repository mapeia `individualUsage.plan.apiPercentUsed` → auto e `apiPercentUsed` → pago
- [x] T3 — Query TanStack `useCursorUsageQuery` + ViewModel `useTokenUsageArcs` (disconnected / loading / error / ready)
- [x] T4 — `npx expo install react-native-svg`; componente SVG dos arcos (track + fill) + labels centrais em coluna
- [x] T5 — Tela `tokens.tsx`: trocar placeholder pela composição ViewModel + arcos
- [x] T6 — `npx tsc --noEmit`, `npx expo lint`, `npm test`

## Ordem sugerida

1. T1
2. T2 → T3
3. T4 → T5
4. T6

## Definição de pronto

- [x] Critérios de aceite da spec atendidos
- [x] Typecheck / lint ok (quando aplicável)
- [x] Sem secrets commitados
