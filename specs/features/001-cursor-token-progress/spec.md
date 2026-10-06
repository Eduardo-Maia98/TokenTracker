# Spec — 001-cursor-token-progress

## Status

`ready` (para o próximo passo: **configurar ambiente**; UI ainda bloqueada)

## Resumo

Permitir que o TokenTracker obtenha e modele o consumo de tokens da conta **Cursor**, para no futuro exibir o **percentual já consumido** em uma progress bar. Nesta fase, o foco é a base (ambiente + domínio), **sem alterar layout**.

## Contexto

O MVP do app é mostrar quanto da cota de tokens do Cursor já foi usada. Antes da UI, precisamos de configuração de ambiente, contrato de dados e lugar no código (`src/`, fora de rotas) para buscar/armazenar esses números.

## Escopo

### Inclui

- Fonte de verdade de produto: tokens **Cursor** apenas.
- Modelo de dados mínimo: limite (ou total), usados, restantes, **percentual consumido**.
- Preparação de ambiente (env, pastas de domínio, tipos) — **próximo prompt**.
- Depois do ambiente: plan → tasks → implementação da lógica e, só então, progress bar na UI.

### Não inclui

- Alteração de layout / telas do template Expo nesta fase.
- Outros provedores (OpenAI, Anthropic, etc.).
- Contas múltiplas avançadas, billing completo, histórico longo.

## Requisitos

1. O app deve conseguir representar o estado de cota Cursor: consumo vs disponibilidade.
2. Deve ser possível calcular `% consumido` de forma determinística a partir dos números obtidos (ex.: `used / limit * 100`, com limites claros se `limit` for 0/ausente).
3. Credenciais / chaves de API (se necessárias) **não** vão para o git; documentar em `.env.example`.
4. Código de domínio em `src/` **fora** de `src/app/` (ex.: `src/features/cursor-tokens/` ou similar — definir no plan).
5. **UI/layout**: não modificar até tasks explícitas de UI após ambiente + plan.

## Critérios de aceite

- [ ] Ambiente configurado (env example, pastas/tipos base) sem mudanças de layout.
- [ ] `plan.md` e `tasks.md` preenchidos após o ambiente.
- [ ] Lógica/domínio capaz de expor `% consumido` a partir dos dados Cursor.
- [ ] Progress bar na UI só após tasks de UI liberadas (fora deste momento).
- [ ] Nenhum secret commitado; constitution respeitada.

## Notas / abertos

- Qual API / método oficial (ou aproximação) usar para ler cota Cursor — decidir no **plan** após pesquisar no ambiente.
- Se a API não estiver disponível no MVP, o plan pode incluir um adapter com dados mock + interface estável.
