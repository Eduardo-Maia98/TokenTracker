/**
 * TanStack Query — GET queries live here.
 *
 * Pattern:
 * 1. Call a service (`Conect.get`, etc.) inside `queryFn`.
 * 2. Export `queryOptions` / a `use*` hook for ViewModels.
 */

export { cursorAccountQueryKey, useCursorAccountQuery } from '@/data/queries/use-cursor-account-query';
export { cursorUsageQueryKey, useCursorUsageQuery } from '@/data/queries/use-cursor-usage-query';
