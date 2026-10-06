# SDD no TokenTracker

Spec-Driven Development (leve, manual): **definir o que e por quê antes de implementar**.

Este diretório fica fora de `src/` de propósito — processo e produto separados do código do app.

## Fluxo

1. **Constitution** (`constitution.md`) — regras permanentes do projeto (uma vez).
2. **Product brief** (`product-brief.md`) — visão do produto.
3. Por feature, nesta ordem:
   - **spec.md** — o quê / por quê / critérios de aceite
   - **plan.md** — como (técnico)
   - **tasks.md** — lista acionável
4. Só então implementar no código.

```text
constitution → product-brief → spec → plan → tasks → implement
```

## Estrutura

```text
sdd/
  README.md
  constitution.md
  product-brief.md
  templates/          # modelos para novas features
  features/
    001-.../          # uma pasta por feature
      spec.md
      plan.md
      tasks.md
```

## Como pedir no chat

Use a constitution e a spec como fonte da verdade. Exemplos:

- Ambiente (sem UI): *“Configure o ambiente para `001-cursor-token-progress` sem alterar layout. Siga `sdd/constitution.md` e a spec.”*
- Planejar: *“Preencha o `plan.md` da feature `001-…` com base na spec.”*
- Quebrar em tasks: *“Gere o `tasks.md` a partir do plan.”*
- Implementar: *“Implemente as tasks da feature `001-…`.”*

## Regras rápidas

- Não pule spec → plan → tasks.
- Não invente requisitos que não estejam na spec (peça clarificação).
- Nesta fase inicial: **não mexer em layout** até a spec/plan liberarem UI.

## Próximo passo (agora)

A base SDD está pronta. **Não** preencha plan/tasks nem implemente a progress bar ainda.

Cole no chat:

```text
Com a base SDD pronta, configure o ambiente do projeto para a feature 001-cursor-token-progress (sem alterar layout). Siga sdd/constitution.md e a spec em sdd/features/001-cursor-token-progress/spec.md.
```

Isso deve cobrir deps, `.env.example`, pastas de domínio em `src/` (fora de rotas) — sem UI.
