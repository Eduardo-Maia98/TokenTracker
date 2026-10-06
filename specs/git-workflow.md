# Git workflow — TokenTracker

Padrão visual de **branch → commit → PR**.

## Nomes curtos (contributors)

| Pessoa | Short name |
| --- | --- |
| Eduardo Maia | `emaia` |

> Ao entrar alguém no time, acrescente uma linha nesta tabela.

## Branch

```text
{short}/{TT}-{NNN}-{slug-da-feature}

exemplo:
emaia/TT-001-initial-router-config
│     │  │   └─ slug em kebab-case (inglês, curto)
│     │  └───── número da feature (3 dígitos, alinhado a specs/features/001-…)
│     └──────── prefixo fixo do projeto
└────────────── short name do autor
```

Regras:

- Sempre partir de `main` atualizado.
- Um branch = uma feature / uma mudança revisável.
- O `NNN` deve bater com a pasta em `specs/features/NNN-…` quando existir.

## Commit

Conventional Commits + ticket TT:

```text
{type}(TT-NNN): {resumo em inglês ou pt-BR, curto}

exemplos:
feat(TT-001): add cursor token usage port
fix(TT-001): clamp consumed percent at 100
chore(TT-001): add jest and domain scaffold
docs(TT-001): clarify architecture map
test(TT-001): cover zero limit edge case
refactor(TT-001): extract token usage types
```

Tipos comuns: `feat` · `fix` · `chore` · `docs` · `test` · `refactor` · `ci` · `perf`.

## Pull Request

**Título** = mesmo formato do commit principal / intent da mudança:

```text
fix(TT-001): Initial router config
feat(TT-001): Cursor token progress domain
chore(TT-002): Configure CI lint
```

**Corpo** sugerido:

```markdown
## Summary
- …

## Test plan
- [ ] …
```

Base: `main`. Push da branch antes do `gh pr create`.

## Fluxo completo

```text
main
  │
  ├─ git checkout -b emaia/TT-001-initial-router-config
  │
  ├─ … código + TDD …
  │
  ├─ git commit  →  feat(TT-001): …
  ├─ git push -u origin HEAD
  │
  └─ gh pr create --title "feat(TT-001): …"
```

## Como pedir no chat

```text
Crie a branch emaia/TT-001-…, commit as mudanças e abra o PR no padrão do specs/git-workflow.md
```

O agente deve usar a skill `.cursor/skills/git-branch-pr`.
