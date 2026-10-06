# Plan — 003-remove-expo-template

> Spec `ready`. Implementar após `tasks.md`.

## Status

`done`

## Abordagem técnica

1. Trocar o root layout de Native Tabs + overlay animado para `Stack` do Expo Router, envolvendo só `QueryProvider`.
2. Substituir `index.tsx` por tela placeholder mínima (sem imports do template).
3. Apagar rota `explore` e pastas `src/components`, `src/hooks`, `src/constants`.
4. Apagar imagens usadas só pelo starter; manter as referenciadas em `app.json`.
5. Remover `scripts/reset-project.js` + script npm; uninstall deps só do template via `npx expo install` / `npm uninstall`.
6. Ajustar README / specs/README para não mencionar o starter.

## Arquivos / pastas tocados

- `src/app/_layout.tsx` — Stack + QueryProvider
- `src/app/index.tsx` — placeholder
- `src/app/explore.tsx` — delete
- `src/components/**` — delete
- `src/hooks/**` — delete
- `src/constants/**` — delete
- `assets/images/` — remover demos (tabIcons, react-logo*, expo-logo, badges, tutorial, logo-glow)
- `scripts/reset-project.js` — delete
- `package.json` / lock — deps e script
- `README.md`, `specs/README.md`
- `specs/features/003-remove-expo-template/*`

## Dependências

Remover se sem uso no `src/` após a limpeza:

- `expo-device`, `expo-image`, `expo-symbols`, `expo-web-browser`
- `@expo/ui`, `expo-glass-effect` (não usados; peers opcionais)

Manter peers necessários do Router / RN: `expo-linking`, `react-native-reanimated`, `react-native-gesture-handler`, `expo-splash-screen`, etc.

## Dados e storage

Sem mudança em storage/env.

## Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Splash fica presa se `preventAutoHideAsync` ficar sem hide | Não chamar `preventAutoHideAsync` no shell mínimo |
| Remover peer quebra Expo Router | Remover só pacotes sem import no projeto; rodar typecheck/lint |
| Apagar asset ainda referenciado em `app.json` | Checklist contra `app.json` antes de delete |

## Fora deste plan

- Branding/ícones finais do produto
- Telas e componentes de progresso de tokens
- Remoção agressiva de libs que o Router ainda lista como peer mas não importamos diretamente (reanimated, etc.)
