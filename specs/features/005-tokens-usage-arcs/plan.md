# Plan — 005-tokens-usage-arcs

> Preencher **depois** da `spec.md` estar `ready`. Não implementar antes das `tasks.md`.

## Status

`done`

## Abordagem técnica

1. **Domain** (`src/domain/tokens/`):
   - Estender tipos para `TokenUsageArcs` (ou equivalente) com `autoPercent` e `paidPercent`.
   - Função pura para normalizar `%` da API (clamp 0–100; `undefined`/`NaN` → 0).
   - Use case `loadTokenUsageArcs(repository)` que retorna os dois percentuais.
   - Port `TokenUsageRepository` passa a expor algo como `getUsageArcs()` (ou adaptar o port atual).
   - TDD obrigatório nas funções puras / use case.

2. **Data**:
   - Ampliar `CursorUsageSummaryDto` com:
     - `apiPercentUsed?: number`
     - `individualUsage?: { plan?: { apiPercentUsed?: number } }`
   - Repository concreto lê session token do SecureStore (mesmo padrão da conta), chama `CursorApi.getUsageSummary`, mapeia:
     - auto ← `individualUsage.plan.apiPercentUsed`
     - pago ← `apiPercentUsed`
   - Query TanStack `useCursorUsageQuery` (GET), habilitada só com conta conectada (ou falha clara se sem token).

3. **Presentation**:
   - ViewModel `useTokenUsageArcs`: `status` (disconnected | loading | error | ready), `autoPercent`, `paidPercent`, `error`, `refresh`.
   - Componente `TokenUsageArcs` (SVG): círculo partido — arco superior + inferior; cada um com track (stroke fraco) + fill (stroke forte proporcional ao %).
   - Labels centrais em coluna: auto em cima, pago embaixo.

4. **App**:
   - `src/app/(tabs)/tokens.tsx` só compõe ViewModel + componente (sem regra de negócio).

5. **SVG**:
   - Usar `react-native-svg` via `npx expo install react-native-svg` (já referenciado no Jest ignore).

## Arquivos / pastas tocados

- `specs/features/005-tokens-usage-arcs/*`
- `specs/README.md` (já listado)
- `src/domain/tokens/` (types, normalize/clamp, use case, port, testes)
- `src/data/services/cursor.ts` (DTO)
- `src/data/tokens/` ou `src/data/cursor/` (repository de usage)
- `src/data/queries/use-cursor-usage-query.ts`
- `src/presentation/viewmodels/use-token-usage-arcs.ts`
- `src/presentation/components/token-usage-arcs.tsx` (SVG)
- `src/app/(tabs)/tokens.tsx`
- `package.json` / lock (`react-native-svg`)

## Dependências

- `react-native-svg` — desenhar arcos (track + fill).
- Sem novas variáveis de env; reutiliza session token SecureStore + `https://cursor.com`.

## Dados e storage

- Session token: SecureStore (já existente).
- Usage: fetch sob demanda / cache TanStack Query (não persistir percentuais sensíveis além do cache em memória).

## Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Shape do `usage-summary` mudar / campos ausentes | DTO opcional + normalize → 0; erro só em falha HTTP/auth |
| Conta desconectada na aba Tokens | ViewModel detecta via query de conta / ausência de token |
| Arcos SVG desalinhados (gap no equador) | Paths fixos 180° superior/inferior com mesmo centro/raio |
| Confundir `apiPercentUsed` raiz vs plan | Mapear explicitamente no adapter; testes de mapeamento no domain/use case com fixtures |

## Fora deste plan

- Branding final, animações elaboradas, histórico temporal.
- Progress bar linear (001).
- Alterações na aba Connect além do necessário para reutilizar o token.
