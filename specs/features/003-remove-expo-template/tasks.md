# Tasks — 003-remove-expo-template

> Gerado a partir do `plan.md`.

## Status

`done`

## Tasks

- [x] T1 — Escrever/alinhar `spec.md` + `plan.md` (`ready`)
- [x] T2 — Simplificar `src/app/_layout.tsx` (Stack + QueryProvider; sem tabs/splash overlay)
- [x] T3 — Substituir `src/app/index.tsx` por placeholder; remover `explore.tsx`
- [x] T4 — Remover `src/components/`, `src/hooks/`, `src/constants/`
- [x] T5 — Remover assets órfãos do template; manter ícone/splash/favicon do `app.json`
- [x] T6 — Remover `reset-project` e deps só do template; atualizar README/specs
- [x] T7 — Rodar `npx tsc --noEmit`, `npx expo lint`, `npm test`; marcar aceite da spec

## Ordem sugerida

1. T1
2. T2 → T3 → T4
3. T5 → T6
4. T7

## Definição de pronto

- [x] Critérios de aceite da spec atendidos
- [x] Typecheck / lint / testes ok
- [x] Sem secrets commitados
