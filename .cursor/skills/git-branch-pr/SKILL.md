---
name: git-branch-pr
description: >-
  Creates TokenTracker branches, commits, and pull requests using
  short/TT-NNN-slug branches and type(TT-NNN) titles. Use when the user asks
  to create a branch, commit changes, open a PR, or mentions git workflow,
  TT-001, conventional commits, or pull request.
---

# Git branch → commit → PR

Siga `specs/git-workflow.md`. Short name padrão do autor local: **`emaia`** (veja a tabela no doc se houver outro contributor).

## 1. Branch

Se ainda não estiver na branch certa:

```bash
git fetch origin
git checkout main
git pull origin main
git checkout -b {short}/TT-{NNN}-{kebab-slug}
```

Ex.: `emaia/TT-001-initial-router-config`

- `NNN` com 3 dígitos, alinhado a `specs/features/NNN-…` quando existir.
- Slug em kebab-case, curto, descritivo.

## 2. Commit (só se o usuário pedir commit)

1. `git status` / `git diff` / `git log` (estilo das mensagens).
2. Stage **só** arquivos relacionados.
3. Mensagem:

```text
{type}(TT-NNN): {resumo curto}
```

Ex.: `feat(TT-001): add cursor token usage port`

Use HEREDOC no `git commit -m`. Não usar `--no-verify` / amend perigoso / push force em main.

## 3. Push + PR (quando o usuário pedir PR)

```bash
git push -u origin HEAD
gh pr create --base main --title "{type}(TT-NNN): {Title Case ou frase curta}" --body "$(cat <<'EOF'
## Summary
- …

## Test plan
- [ ] …

EOF
)"
```

Título do PR **igual ao padrão** (ex.: `fix(TT-001): Initial router config`).

## Checklist

- [ ] Nome da branch bate `{short}/TT-NNN-slug`
- [ ] Commit(s) com `type(TT-NNN):`
- [ ] Título do PR com `type(TT-NNN):`
- [ ] Sem secrets / arquivos não relacionados
- [ ] Retornar a URL do PR ao usuário
