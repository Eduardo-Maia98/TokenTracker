/**
 * TanStack Query — mutations (PUT / PATCH / DELETE / POST).
 *
 * Pattern:
 * 1. Call a service write method inside `mutationFn`.
 * 2. Invalidate related query keys on success.
 */

export {
  useConnectCursorMutation,
  useDisconnectCursorMutation,
} from '@/data/mutations/use-cursor-connect-mutations';
