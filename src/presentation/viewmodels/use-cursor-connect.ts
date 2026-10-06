import {
  useConnectCursorMutation,
  useDisconnectCursorMutation,
} from '@/data/mutations/use-cursor-connect-mutations';
import { useCursorAccountQuery } from '@/data/queries/use-cursor-account-query';
import type { CursorAccount } from '@/domain/cursor-account/types';

export type CursorConnectUiState = {
  status: 'disconnected' | 'connected';
  account: CursorAccount | null;
  isLoading: boolean;
  isConnecting: boolean;
  isDisconnecting: boolean;
  error: string | null;
  connect: (rawToken: string) => Promise<void>;
  disconnect: () => Promise<void>;
};

function toErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return 'Something went wrong while connecting to Cursor';
}

/**
 * ViewModel for the Connect tab: connection status, account, and actions.
 */
export function useCursorConnect(): CursorConnectUiState {
  const accountQuery = useCursorAccountQuery();
  const connectMutation = useConnectCursorMutation();
  const disconnectMutation = useDisconnectCursorMutation();

  const account = accountQuery.data ?? null;
  const status = account != null ? 'connected' : 'disconnected';
  
  const error =
    connectMutation.error != null
      ? toErrorMessage(connectMutation.error)
      : accountQuery.error != null && account == null
        ? toErrorMessage(accountQuery.error)
        : null;

  return {
    status,
    account,
    isLoading: accountQuery.isLoading,
    isConnecting: connectMutation.isPending,
    isDisconnecting: disconnectMutation.isPending,
    error,
    connect: async (rawToken: string) => {
      connectMutation.reset();
      await connectMutation.mutateAsync(rawToken);
    },
    disconnect: async () => {
      connectMutation.reset();
      await disconnectMutation.mutateAsync();
    },
  };
}
