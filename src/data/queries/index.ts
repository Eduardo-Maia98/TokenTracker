/**
 * TanStack Query — GET queries live here.
 *
 * Pattern:
 * 1. Call a service (`Conect.get`, etc.) inside `queryFn`.
 * 2. Export `queryOptions` / a `use*` hook for ViewModels.
 *
 * @example
 * import { useQuery } from '@tanstack/react-query';
 * import { Conect } from '@/data/services';
 *
 * export const usageQueryKey = ['conect', 'usage'] as const;
 *
 * export function useConectUsageQuery() {
 *   return useQuery({
 *     queryKey: usageQueryKey,
 *     queryFn: () => Conect.get<UsageDto>('/v1/usage'),
 *   });
 * }
 */

export {};
