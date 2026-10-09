# Spec — 005-tokens-usage-arcs

## Status

`done`

## Resumo

Na aba **Tokens**, buscar o usage da conta Cursor conectada e exibir **dois gráficos em arco** (somente a borda): metade superior para usages **auto** e metade inferior para usages **pagas**, com as porcentagens no centro do círculo.

## Contexto

A feature 004 deixou a aba Tokens como placeholder e a conexão Cursor já valida conta + plano via session token. O próximo sinal de produto é visualizar o consumo como um **círculo partido em dois arcos** (topo = auto, base = paga), no estilo progress bar (track + fill).

## Escopo

### Inclui

- Tela na aba Tokens (substituir placeholder) que carrega usage da conta já conectada.
- Dois indicadores em **linha curva** (stroke / borda), sem “fatia” preenchida de pizza:
  - **Arco superior** (meia-borda de círculo, 180° de cima): consumo **auto**.
  - **Arco inferior** (meia-borda de círculo, 180° de baixo): consumo **pago**.
- Estilo progress bar: track (parte vazia) desenhada mas não preenchida; fill proporcional ao `%`.
- Labels no **centro do círculo**, em coluna: auto em cima, paga embaixo (porcentagens).
- Domain tipado + TDD para modelar cotas auto/pago e normalizar percentuais.
- Data: ampliar DTO/`usage-summary` e mapear campos Cursor → domínio.
- Estados de UI mínimos: loading, erro, desconectado (sem conta), sucesso com os dois arcos + labels.

### Não inclui

- Redesign / branding final da tab bar ou da Connect.
- Histórico temporal (série por dia/hora).
- Multi-conta, OAuth, backend próprio.
- Outros provedores além de Cursor.
- Qualquer outro escopo além dos dois arcos (auto + pago) e labels centrais.
- Progress bar linear da feature 001 (substituída visualmente por estes arcos).

## Requisitos

1. A aba Tokens só mostra usage se houver conta Cursor conectada; caso contrário, estado claro de “conecte na aba Connect”.
2. Ao abrir/atualizar Tokens, o app busca usage atualizado via `GET /api/usage-summary` com o session token.
3. Mapeamento de percentuais (fonte Cursor):
   - **Auto** → `individualUsage.plan.apiPercentUsed`
   - **Pago** → `apiPercentUsed` (raiz do summary)
4. O domínio expõe percentuais auto/pago normalizados (clamp 0–100; ausência → 0 ou estado tratado).
5. Visual: composição de um círculo; cada metade é **apenas borda** (track + fill), não disco preenchido.
6. Centro: coluna com `%` auto (cima) e `%` pago (baixo).
7. Código nas camadas Clean Architecture + MVVM (`domain` / `data` / `presentation` / `app`).
8. Credenciais continuam só em SecureStore; nenhum secret no git.

## Critérios de aceite

- [x] Spec `ready` + `plan.md` + `tasks.md` antes da implementação completa.
- [x] Tokens deixa de ser placeholder: busca usage com a sessão conectada.
- [x] Dois arcos visíveis: superior = auto, inferior = pago; track + fill (stroke).
- [x] Preenchimento de cada arco reflete o `%` da respectiva cota.
- [x] Centro mostra `%` auto (cima) e `%` pago (baixo).
- [x] Desconectado / loading / erro tratados na tela.
- [x] Testes de domain passando; `tsc` e lint ok.
- [x] Nenhum secret commitado.

## Notas / decisões

- Escopo desta feature = **somente** os dois arcos + labels centrais (nada além).
- `001-cursor-token-progress` fica supersedida na UI pela composição em arcos; domain de `%` pode reutilizar/estender `src/domain/tokens/`.
- Campos usados/limit não são obrigatórios na UI desta feature se a API já entregar `apiPercentUsed`.
