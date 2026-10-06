---
name: tdd
description: >-
  Runs red-green-refactor TDD for TokenTracker domain and ViewModel logic.
  Use when implementing features, writing tests, fixing domain bugs, or when
  the user mentions TDD, testes, jest, or cobertura de regras de negócio.
---

# TDD — TokenTracker

Siga este ritual em lógica de **domain** (obrigatório) e **ViewModels** (quando houver estado não trivial).

## Antes de codar produção

1. Ler `specs/features/.../spec.md` (ou a task atual).
2. Identificar comportamento testável (ex.: `% consumido`).
3. Escolher o arquivo em `src/domain/**` (preferência) ou `src/presentation/viewmodels/**`.

## Ritual

### 1. Red

- Escreva **um** teste que falha e descreve o comportamento.
- Rode: `npm test` (ou `npm test -- path/do/arquivo.test.ts`).
- Confirme que falhou pela razão certa (não por syntax error).

### 2. Green

- Implemente o **mínimo** para o teste passar.
- Não refatore ainda; não adicione features extras.

### 3. Refactor

- Limpe nomes/estrutura mantendo testes verdes.
- Rode os testes de novo.

Repita para o próximo comportamento.

## Onde testar

| Camada | Prioridade | Como |
| --- | --- | --- |
| `src/domain/` | Alta | Unit puro, sem mocks de RN |
| `src/data/` | Média | Mock de fetch/storage |
| ViewModels | Média | Estado / casos de erro |
| Telas / layout | Baixa | Evitar no MVP; E2E depois |

## Convenções de arquivo

- Preferir `*.test.ts` ao lado do módulo **ou** espelhar em `__tests__/`.
- Nome do teste = comportamento: `returns 0 when limit is 0`.
- Um assert principal por teste (pode haver setup).

## Pronto

- [ ] Testes novos/alterados passando
- [ ] `npx tsc --noEmit` ok
- [ ] Sem lógica de domínio só na View
- [ ] Alinhado à spec / tasks
