# SDD no TokenTracker

Spec-Driven Development (leve, manual): **definir o que e por quê antes de implementar**.

Este diretório fica fora de `src/` — processo e produto separados do código.

## Mapa rápido (comece aqui)

| Arquivo | Para que serve |
| --- | --- |
| [`constitution.md`](./constitution.md) | Regras permanentes do projeto |
| [`architecture.md`](./architecture.md) | **Mapa visual** Clean Arch + MVVM + pastas |
| [`git-workflow.md`](./git-workflow.md) | **Branch / commit / PR** (`emaia/TT-001-…`) |
| [`product-brief.md`](./product-brief.md) | Visão do produto / MVP |
| `features/001-.../` | Spec → plan → tasks da feature atual |
| `templates/` | Modelos para novas features |

Fora de `specs/`, o agente também segue:

| Caminho | Papel |
| --- | --- |
| `.cursor/rules/` | Padrões de código e git (sempre / por arquivo) |
| `.cursor/skills/tdd/` | Ritual red → green → refactor |
| `.cursor/skills/sdd-feature/` | Como abrir/avançar uma feature SDD |
| `.cursor/skills/git-branch-pr/` | Branch + commit + PR no padrão TT |
| `AGENTS.md` | Regras Expo (SDK, Router, EAS) |

## Fluxo

```text
constitution → product-brief → spec → plan → tasks → implement (TDD no domain)
```

## Como pedir no chat

- Ambiente (sem UI): *“Configure o ambiente para `001-cursor-token-progress` sem alterar layout…”*
- Planejar / tasks / implementar: cite a pasta em `specs/features/…`
- TDD: *“Implemente com TDD”* (usa a skill `tdd`)
- Git: *“Crie a branch, commit e PR no padrão TT”* (usa `git-branch-pr`)

## Próximo passo

```text
Com a base SDD pronta, configure o ambiente do projeto para a feature 001-cursor-token-progress (sem alterar layout). Siga specs/constitution.md, specs/architecture.md e a spec em specs/features/001-cursor-token-progress/spec.md.
```
