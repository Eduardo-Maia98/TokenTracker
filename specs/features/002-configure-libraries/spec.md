# Spec — 002-configure-libraries

## Status

`done`

## Resumo

Adicionar e configurar as bibliotecas de infraestrutura do app (Axios, Async Storage, NativeWind, TanStack Query) e estabelecer o padrão de pastas em `data/` para **services**, **queries** (GET) e **mutations** (PUT / PATCH / DELETE), sem alterar o layout visual das telas.

## Contexto

O domínio de tokens (001) já existe. Antes de integrar APIs reais e UI com estilos utilitários, o app precisa de HTTP tipado, cache/async storage, client-state de servidor (TanStack Query) e NativeWind configurado no Expo SDK 57.

## Escopo

### Inclui

- Instalar e configurar: `axios`, `@react-native-async-storage/async-storage`, `nativewind` (+ Tailwind 3), `@tanstack/react-query`.
- Cliente Axios centralizado (`src/data/http/`).
- Pasta `src/data/services/` com arquivos por domínio de API; exemplo `conect.ts` exportando um **namespace** com métodos HTTP para preencher depois.
- Pasta `src/data/queries/` para hooks/factories de **GET** (TanStack Query).
- Pasta `src/data/mutations/` para hooks/factories de **PUT / PATCH / DELETE** (e POST quando existir write).
- Wrapper de Async Storage em `src/data/storage/`.
- `QueryClientProvider` na raiz do app (composição mínima, sem redesign de UI).
- Config NativeWind (Babel, Metro, Tailwind, `global.css`, types) sem mudar estilos das telas existentes.
- Atualizar `specs/architecture.md` com o mapa dessas pastas.
- Documentar `EXPO_PUBLIC_API_BASE_URL` em `.env.example`.

### Não inclui

- Endpoints reais de Cursor / negócio.
- Progress bar ou mudanças de layout/visual das telas.
- SecureStore / autenticação completa.
- Outros provedores além do padrão de infra.

## Requisitos

1. Dependências instaladas com versões compatíveis ao Expo SDK do projeto (`npx expo install` onde aplicável).
2. Axios: instância única configurável via `EXPO_PUBLIC_API_BASE_URL`.
3. `Conect` (arquivo `conect.ts`) exporta um **namespace** com métodos que encapsulam chamadas Axios (get/put/patch/delete; post opcional para writes).
4. Queries (GET) e mutations (writes) ficam em pastas separadas sob `src/data/`.
5. Async Storage acessível via módulo em `src/data/storage/` (não raw espalhado no app).
6. TanStack Query: `QueryClient` + provider na árvore de rotas.
7. NativeWind v4.x compatível com SDK 57, pronto para `className` — **sem** reestilizar telas nesta feature.
8. Camadas Clean Arch respeitadas: HTTP/storage em `data/`; domain não importa essas libs.
9. Sem secrets no git.

## Critérios de aceite

- [x] Pacotes instalados e typecheck (`npx tsc --noEmit`) ok.
- [x] Estrutura `http/`, `services/`, `queries/`, `mutations/`, `storage/` criada sob `src/data/`.
- [x] `conect.ts` exporta namespace com métodos Axios prontos para configuração posterior.
- [x] `QueryClientProvider` ativo no root layout sem mudança visual das telas.
- [x] NativeWind configurado (metro/babel/tailwind/css/types); telas existentes sem redesign.
- [x] `.env.example` documenta base URL da API.
- [x] `architecture.md` reflete o padrão.
- [x] Constitution respeitada (sem secrets; UI não redesenhada).

## Notas / abertos

- Nome do arquivo `conect.ts` (grafia pedida) — domain/API real será preenchido em feature futura.
- POST: permitido no service e em `mutations/` quando houver write; pasta mutations enfatiza PUT/PATCH/DELETE conforme pedido.
