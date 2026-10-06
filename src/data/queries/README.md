# Queries (GET)

Coloque aqui hooks / `queryOptions` do TanStack Query que **leem** dados via services.

- Um arquivo por recurso (ex.: `use-conect-usage-query.ts`).
- `queryFn` deve chamar `src/data/services/*`, nunca Axios direto na View.
- ViewModels em `presentation/viewmodels/` consomem esses hooks.
