/**
 * TanStack Query — mutations (PUT / PATCH / DELETE / POST).
 *
 * Pattern:
 * 1. Call a service write method inside `mutationFn`.
 * 2. Invalidate related query keys on success.
 *
 * @example
 * import { useMutation, useQueryClient } from '@tanstack/react-query';
 * import { Conect } from '@/data/services';
 *
 * export function useUpdateConectUsageMutation() {
 *   const queryClient = useQueryClient();
 *   return useMutation({
 *     mutationFn: (body: UpdateUsageDto) => Conect.patch('/v1/usage', body),
 *     onSuccess: () => {
 *       void queryClient.invalidateQueries({ queryKey: ['conect', 'usage'] });
 *     },
 *   });
 * }
 */

export {};
