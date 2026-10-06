# Plan — 004-tab-bar-cursor-connect

> Preencher **depois** da `spec.md` estar `ready`. Não implementar antes das `tasks.md`.

## Status

`done`

## Abordagem técnica

1. **Tabs**: grupo `(tabs)` no Expo Router — `connect` (inicial) + `tokens` (placeholder). Root `_layout` mantém `QueryProvider` + Stack envolvendo as tabs.
2. **Auth sem backend**: usuário cola `WorkosCursorSessionToken` → SecureStore → Axios dedicado a `https://cursor.com` com header Cookie.
3. **Validação**: em paralelo (ou sequência) `GET /api/auth/me` + `GET /api/usage-summary`. Sucesso → `CursorAccount { email, plan }`.
4. **Domain**: tipos, port `CursorAccountRepository`, use cases `connectWithSessionToken` / `loadConnectedAccount` / `disconnect`, helper puro para normalizar o valor colado do cookie.
5. **Presentation**: ViewModel `useCursorConnect` orquestra loading/erro/status; tela só renderiza.

## Arquivos / pastas tocados

- `specs/features/004-tab-bar-cursor-connect/*`
- `specs/README.md`
- `src/app/_layout.tsx`
- `src/app/(tabs)/_layout.tsx`
- `src/app/(tabs)/connect.tsx`
- `src/app/(tabs)/tokens.tsx`
- `src/app/index.tsx` (remover)
- `src/domain/cursor-account/`
- `src/data/storage/secure-storage.ts`
- `src/data/http/cursor-client.ts`
- `src/data/services/cursor.ts`
- `src/data/cursor/`
- `src/data/queries/` + `src/data/mutations/`
- `src/presentation/viewmodels/use-cursor-connect.ts`
- `app.json` (plugin SecureStore)
- `package.json` / lock (`expo-secure-store`)

## Dependências

- `expo-secure-store` via `npx expo install expo-secure-store`.
- Sem variáveis de env secretas; base URL Cursor hardcoded em data (`https://cursor.com`).

## Dados e storage

| Dado | Onde |
| --- | --- |
| Session token | SecureStore |
| Conta/plano em cache de sessão | estado React Query / ViewModel (não secret) |

## Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| API Cursor não oficial muda | Isolar URLs/DTOs no data layer; falhas viram erro de UI |
| Cookie mal colado | Normalizar + mensagem de erro amigável |
| SecureStore indisponível (web) | Documentar mobile-first; falhar com erro claro se API indisponível |

## Fora deste plan

- Progress bar / token usage UI (001).
- OAuth, backend, multi-conta.
