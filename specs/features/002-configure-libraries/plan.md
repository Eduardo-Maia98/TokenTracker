# Plan — 002-configure-libraries

> Spec `ready`. Implementar após `tasks.md`.

## Status

`done`

## Abordagem técnica

1. **Axios** — instância em `src/data/http/client.ts` com `baseURL` de `EXPO_PUBLIC_API_BASE_URL` (via `expo-constants` / `process.env`).
2. **Services** — um arquivo por domínio de API em `src/data/services/`. `conect.ts` exporta `namespace Conect` com `get` / `post` / `put` / `patch` / `delete` delegando ao client (stubs tipados para endpoints futuros).
3. **TanStack Query** — `QueryClient` + provider em `src/presentation/providers/query-provider.tsx`; montado no `_layout` raiz. Pastas:
   - `src/data/queries/` — factories/`queryOptions` e hooks GET.
   - `src/data/mutations/` — hooks PUT / PATCH / DELETE (e POST quando houver write).
4. **Async Storage** — wrapper tipado em `src/data/storage/async-storage.ts` (get/set/remove/clear JSON-safe).
5. **NativeWind v4.2.7** (SDK 57) — `tailwind.config.js`, `babel.config.js`, `metro.config.js` com `withNativeWind`, `src/global.css` com `@tailwind`, `nativewind-env.d.ts`, `app.json` web bundler metro. Import CSS no root layout. **Não** alterar `className`/estilos das telas existentes.

Fluxo alvo:

```text
ViewModel  →  useQuery / useMutation (data/queries|mutations)
                    ↓
              Conect.* / outros services (axios)
                    ↓
              http client
```

## Arquivos / pastas tocados

- `specs/features/002-configure-libraries/*`
- `specs/architecture.md`
- `package.json` / lockfile
- `.env.example`
- `babel.config.js`, `metro.config.js`, `tailwind.config.js`, `nativewind-env.d.ts`
- `app.json` (web.bundler)
- `src/global.css`
- `src/app/_layout.tsx` (provider + import CSS; sem redesign)
- `src/data/http/client.ts`
- `src/data/services/conect.ts` (+ index)
- `src/data/queries/` (+ README / index)
- `src/data/mutations/` (+ README / index)
- `src/data/storage/async-storage.ts`
- `src/presentation/providers/query-provider.tsx`
- `src/shared/env.ts` (base URL tipada)

## Dependências

| Pacote | Motivo |
| --- | --- |
| `axios` | HTTP client |
| `@react-native-async-storage/async-storage` | storage não sensível / cache local |
| `@tanstack/react-query` | queries / mutations / cache servidor |
| `nativewind@4.2.7` | Tailwind no RN (SDK 57) |
| `tailwindcss@^3.4.17` (dev) | config NativeWind v4 |
| `prettier-plugin-tailwindcss` (dev, opcional) | ordenação de classes |

Env:

- `EXPO_PUBLIC_API_BASE_URL` — base do Axios (vazio ok no MVP).

## Dados e storage

- Async Storage: preferências / cache não sensível.
- Secrets / tokens de auth → SecureStore em feature futura (não nesta).
- Nada sensível no git; `.env` já ignorado.

## Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| NativeWind quebra Metro / web | Seguir guia v4.2.7; `bundler: metro`; path CSS `./src/global.css` |
| Provider muda árvore e quebra splash | Só envolver children; não tocar componentes visuais |
| Domain importar axios | Manter client só em `data/`; rules Clean Arch |

## Fora deste plan

- Chamadas reais Cursor / adapters de tokens.
- UI progress bar / redesign NativeWind nas telas.
- Persistência do QueryClient em Async Storage (opcional depois).
