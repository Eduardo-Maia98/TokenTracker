import { useQuery } from '@tanstack/react-query';

import { cursorAccountRepository } from '@/data/cursor/cursor-account-repository';
import { loadConnectedAccount } from '@/domain/cursor-account/load-connected-account';

export const cursorAccountQueryKey = ['cursor', 'account'] as const;

/**
 * Loads the connected Cursor account when a session token is already stored.
 */
export function useCursorAccountQuery() {
  return useQuery({
    queryKey: cursorAccountQueryKey,
    queryFn: () => loadConnectedAccount(cursorAccountRepository),
  });
}
