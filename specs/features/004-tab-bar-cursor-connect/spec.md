# Spec — 004-tab-bar-cursor-connect

## Status

`done`

## Resumo

Configurar navegação por tab bar (Connect + Tokens) e permitir conectar a conta Cursor colando o session token, validando conta e plano, e exibindo estado **Conectado** quando a validação passar. A aba Tokens fica placeholder nesta feature.

## Contexto

Sem backend próprio, o app precisa autenticar contra a API do dashboard Cursor no dispositivo. O fluxo mais simples é o usuário colar o cookie `WorkosCursorSessionToken` obtido no dashboard, persistir de forma segura e validar com `auth/me` + `usage-summary`.

## Escopo

### Inclui

- Tab bar Expo Router com abas **Connect** e **Tokens**.
- Aba Connect: campo para colar session token, conectar, desconectar.
- Persistência do token em SecureStore.
- Chamadas diretas a `cursor.com` (`/api/auth/me`, `/api/usage-summary`) sem backend.
- Mensagem **Conectado** (com email e plano) quando ambos os GETs forem bem-sucedidos.
- Aba Tokens: placeholder apenas.
- Domain tipado + TDD para regras/use cases de conexão.

### Não inclui

- Progress bar / consumo de tokens na aba Tokens (feature 001).
- OAuth / login social / backend proxy.
- Multi-conta.
- UI polida / branding final.

## Requisitos

1. Navegação principal do app é uma tab bar com Connect e Tokens.
2. O usuário pode colar um `WorkosCursorSessionToken` e disparar a conexão.
3. Credencial sensível fica em SecureStore — nunca no git nem em AsyncStorage.
4. Conexão só é considerada válida após obter dados de conta **e** plano.
5. Em falha de autenticação/rede, o app mostra erro e **não** marca como conectado.
6. O usuário pode desconectar (remover credencial e limpar estado).
7. Aba Tokens mostra placeholder, sem lógica de uso nesta feature.
8. Código nas camadas Clean Architecture + MVVM (`domain` / `data` / `presentation` / `app`).

## Critérios de aceite

- [x] Tabs Connect e Tokens visíveis e navegáveis.
- [x] Fluxo Connect: colar token → validar → mensagem Conectado com email/plano.
- [x] Token persistido em SecureStore; reconnect ao reabrir o app se token válido.
- [x] Erro claro quando token inválido ou API falhar.
- [x] Desconectar remove credencial e volta ao estado desconectado.
- [x] Tokens = placeholder.
- [x] Testes de domain passando; `tsc` e lint ok.
- [x] Nenhum secret commitado.

## Notas / abertos

- Endpoints do dashboard Cursor são **não oficiais** e podem mudar — risco aceito no MVP.
- Formato do cookie: valor colado pode ser o cookie completo ou só o valor; o adapter normaliza para o header `Cookie: WorkosCursorSessionToken=…`.
