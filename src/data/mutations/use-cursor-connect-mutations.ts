import { useMutation, useQueryClient } from '@tanstack/react-query';

import { cursorAccountRepository } from '@/data/cursor/cursor-account-repository';
import { cursorAccountQueryKey } from '@/data/queries/use-cursor-account-query';
import { connectWithSessionToken } from '@/domain/cursor-account/connect-with-session-token';
import { disconnect } from '@/domain/cursor-account/disconnect';

/**
 * Connects with a pasted Cursor session token and refreshes account query cache.
 */
export function useConnectCursorMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (rawToken: string) =>
      connectWithSessionToken(cursorAccountRepository, rawToken),
    onSuccess: (account) => {
      queryClient.setQueryData(cursorAccountQueryKey, account);
    },
  });
}

/**
 * Clears the stored Cursor session and resets account query cache.
 */
export function useDisconnectCursorMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => disconnect(cursorAccountRepository),
    onSuccess: () => {
      queryClient.setQueryData(cursorAccountQueryKey, null);
    },
  });
}
