# Spec — 003-remove-expo-template

## Status

`done`

## Resumo

Remover telas, componentes, hooks, constants e artefatos do template inicial do Expo que não serão usados pelo TokenTracker, deixando um shell mínimo de rotas alinhado à Clean Architecture.

## Contexto

O app ainda carrega a UI de boas-vindas do `create-expo-app` (tabs Home/Explore, ícones animados, hints, badge web, etc.). Isso polui `src/`, atrapalha a leitura da arquitetura e não faz parte do produto. A infra (002) e o domínio (001) já existem; falta limpar o starter.

## Escopo

### Inclui

- Remover componentes do template em `src/components/` (e subpastas).
- Remover hooks/constants do template (`src/hooks/`, `src/constants/`).
- Remover a rota `explore` e a navegação por tabs do starter.
- Substituir `_layout` + `index` por um shell mínimo (Stack + tela placeholder), mantendo `QueryProvider` e `global.css`.
- Remover assets usados **somente** pelo template (logos demos, tab icons, tutorial, badges).
- Remover script `reset-project` e pacotes npm usados só pelo template.
- Atualizar docs mínimas que apontam para o template (`README`, `specs/README` se necessário).

### Não inclui

- Design/UI do produto (progress bar, branding final).
- Trocar ícone/splash oficiais do app em `app.json` (mantém assets de config).
- Features de negócio Cursor / API real.
- Refactors fora do que o template tocava.

## Requisitos

1. Nenhum arquivo em `src/` deve existir só para demonstrar o starter Expo.
2. Rotas: apenas o necessário para o app subir (`_layout` + `index`); sem tabs Explore.
3. Componentes de UI do produto ficam em `src/presentation/` quando forem criados — não recriar `src/components/` do template.
4. Manter camadas `domain/`, `data/`, `presentation/providers/`, `shared/` intactas em comportamento.
5. Typecheck e lint devem passar após a limpeza.
6. Constitution: mudança de UI limitada a **remover** o template e deixar placeholder neutro — sem redesenhar o produto.

## Critérios de aceite

- [x] `src/components/`, `src/hooks/` e `src/constants/` removidos (sem leftovers do template).
- [x] `src/app/explore.tsx` removido; app sobe com Stack e tela `index` mínima.
- [x] `_layout` mantém QueryProvider + NativeWind (`global.css`); sem splash overlay / tabs do template.
- [x] Assets órfãos do template removidos; ícone/splash/favicon referenciados em `app.json` permanecem.
- [x] Script `reset-project` e deps só do template removidos.
- [x] `npx tsc --noEmit` e `npx expo lint` ok.
- [x] Domain tests existentes continuam passando.

## Notas / abertos

- Placeholder da home pode ser só o nome do app; UI real virá em feature futura.
- Pacotes peer opcionais do Expo Router (`@expo/ui`, `expo-glass-effect`) saem se não houver uso no projeto.
