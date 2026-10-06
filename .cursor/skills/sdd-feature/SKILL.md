---
name: sdd-feature
description: >-
  Creates or advances a Spec-Driven Development feature under specs/features.
  Use when starting a new feature, writing spec/plan/tasks, or when the user
  mentions SDD, spec, plan, ou nova feature.
---

# SDD Feature — TokenTracker

## Ordem

1. Confirmar `specs/constitution.md` + `specs/architecture.md`.
2. Criar ou editar `specs/features/NNN-slug/spec.md` (o quê / aceite).
3. Só então `plan.md` (como / pastas / riscos).
4. Só então `tasks.md` (checklist pequena).
5. Implementar com skill **tdd** no domain.
6. Entregar com skill **git-branch-pr**: branch `{short}/TT-{NNN}-{slug}`, commits/PR `{type}(TT-NNN): …`.

## Nova feature

- Pasta: `specs/features/NNN-nome-curto/` (NNN incremental).
- Branch git alinhada: `{short}/TT-NNN-nome-curto` (ver `specs/git-workflow.md`).
- Copiar de `specs/templates/`.
- Atualizar status: `draft` → `ready` → `done`.

## Não fazer

- Implementar sem spec `ready`.
- Misturar vários provedores numa spec só (MVP = Cursor).
- Alterar layout se a fase/spec bloquear UI.
