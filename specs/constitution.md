# Constitution — TokenTracker

Princípios permanentes. Toda feature, plan e implementação deve respeitar isto.

## Produto

1. **Propósito**: trackear tokens disponíveis de contas de serviços de IA / ferramentas de desenvolvimento.
2. **MVP atual**: apenas **Cursor**. Outros provedores só depois de spec própria.
3. **Sinal principal do MVP**: percentual de tokens **já consumidos**, mostrado em uma progress bar (quando a UI for autorizada).

## Stack e estrutura

4. **Expo managed workflow** (SDK do projeto). Sem pastas `ios/` / `android/` editadas à mão — CNG via `app.json` / plugins.
5. **Expo Router** para navegação. Rotas em `src/app/`. Código de domínio, data, presentation e shared **fora** de `src/app/`.
6. **TypeScript** com `strict: true`. Preferir tipagem explícita nas fronteiras (API, storage, env).
7. Alias `@/*` aponta para `src/*`. Preferir imports `@/...`.

## Arquitetura (Clean Architecture + MVVM)

8. Camadas e dependências conforme [`architecture.md`](./architecture.md):
   - `domain/` — regras puras (sem React, sem I/O).
   - `data/` — APIs, storage, adapters.
   - `presentation/` — ViewModels (hooks) + componentes.
   - `app/` — só rotas / composição de telas.
9. **MVVM**: View observa ViewModel; ViewModel chama use cases do domain; data implementa ports do domain.
10. Dependência: presentation → domain ← data. Domain **nunca** importa data/presentation/React Native.

## Qualidade e processo

11. **SDD primeiro**: não implementar feature sem `spec.md` clara; não codificar sem `plan.md` + `tasks.md` quando a feature for além de scaffolding.
12. **TDD no domain** (e na lógica de ViewModel quando fizer sentido): red → green → refactor. Ver skill `.cursor/skills/tdd`.
13. **Git**: branches `{short}/TT-{NNN}-{slug}`, commits/PRs `{type}(TT-NNN): …` — ver [`git-workflow.md`](./git-workflow.md) e skill `.cursor/skills/git-branch-pr`.
14. Antes de declarar tarefa pronta: `npx tsc --noEmit` e `npm test` (quando houver testes tocados).
15. **Mobile-first** e cross-platform (iOS / Android; web só se a feature pedir).
16. Preferir módulos Expo oficiais a libs third-party quando houver equivalente.
17. Segredos nunca no git: usar env / SecureStore; documentar variáveis em `.env.example`.

## Restrições da fase atual

18. **Não alterar layout / UI** até a feature explicitamente liberar.
19. Mudanças devem ser mínimas e alinhadas à spec — sem refactors oportunistas.
