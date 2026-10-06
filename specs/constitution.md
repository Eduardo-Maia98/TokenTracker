# Constitution — TokenTracker

Princípios permanentes. Toda feature, plan e implementação deve respeitar isto.

## Produto

1. **Propósito**: trackear tokens disponíveis de contas de serviços de IA / ferramentas de desenvolvimento.
2. **MVP atual**: apenas **Cursor**. Outros provedores só depois de spec própria.
3. **Sinal principal do MVP**: percentual de tokens **já consumidos**, mostrado em uma progress bar (quando a UI for autorizada).

## Stack e estrutura

4. **Expo managed workflow** (SDK do projeto). Sem pastas `ios/` / `android/` editadas à mão — CNG via `app.json` / plugins.
5. **Expo Router** para navegação. Rotas em `src/app/`. Código de domínio, hooks, utils e componentes **fora** de `src/app/`.
6. **TypeScript** com `strict: true`. Preferir tipagem explícita nas fronteiras (API, storage, env).
7. Alias `@/*` aponta para `src/*`. Preferir imports `@/...`.

## Qualidade e processo

8. **SDD primeiro**: não implementar feature sem `spec.md` clara; não codificar sem `plan.md` + `tasks.md` quando a feature for além de scaffolding.
9. **Mobile-first** e cross-platform (iOS / Android; web só se a feature pedir).
10. Preferir módulos Expo oficiais a libs third-party quando houver equivalente.
11. Segredos nunca no git: usar env / SecureStore; documentar variáveis em `.env.example`.

## Restrições da fase atual

12. **Não alterar layout / UI** até a feature explicitamente liberar (próximo passo após SDD: configurar ambiente apenas).
13. Mudanças devem ser mínimas e alinhadas à spec — sem refactors oportunistas.
