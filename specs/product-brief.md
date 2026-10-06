# Product brief — TokenTracker

## Problema

Quem usa ferramentas com cota de tokens (ex.: Cursor) não tem, no dia a dia mobile, um lugar simples para ver **quanto já foi consumido** e quanto ainda resta.

## Solução

App mobile (Expo) que **trackeia tokens disponíveis** de contas conectadas e mostra o consumo de forma clara.

## Escopo do MVP

| Inclui | Não inclui (ainda) |
| --- | --- |
| Provedor **Cursor** | Outros provedores (OpenAI, Claude, etc.) |
| Percentual consumido + progress bar (quando UI liberada) | Redesign de layout / branding |
| Base SDD + configuração de ambiente | Autenticação social completa, multi-conta avançada |

## Princípio de evolução

Uma feature por vez, sempre via pasta em `specs/features/NNN-nome/` com spec → plan → tasks → implement.

## Feature inicial

`001-cursor-token-progress` — dados e ambiente para consumo de tokens do Cursor; UI da progress bar só depois do ambiente e do plan/tasks.
