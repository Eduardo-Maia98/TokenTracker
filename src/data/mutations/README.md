# Mutations (PUT / PATCH / DELETE)

Coloque aqui hooks do TanStack Query que **escrevem** dados via services.

- Preferir `Conect.put` / `Conect.patch` / `Conect.del` (e `Conect.post` quando criar recurso).
- Invalidar queries relacionadas em `onSuccess`.
- ViewModels chamam essas mutations; telas não falam com Axios.
