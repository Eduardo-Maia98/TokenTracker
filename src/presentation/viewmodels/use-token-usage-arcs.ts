import { useCursorAccountQuery } from '@/data/queries/use-cursor-account-query';
import { useCursorUsageQuery } from '@/data/queries/use-cursor-usage-query';

export type TokenUsageArcsUiState = {
  status: 'disconnected' | 'loading' | 'error' | 'ready';
  autoPercent: number;
  paidPercent: number;
  error: string | null;
  isRefreshing: boolean;
  refresh: () => Promise<void>;
};

function toErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return 'Something went wrong while loading Cursor usage';
}

/**
 * ViewModel for the Tokens tab dual-arc usage display.
 */
export function useTokenUsageArcs(): TokenUsageArcsUiState {
  const accountQuery = useCursorAccountQuery();
  const isConnected = accountQuery.data != null;
  const usageQuery = useCursorUsageQuery(isConnected && !accountQuery.isLoading);

  const isRefreshing =
    accountQuery.isRefetching || usageQuery.isRefetching;

  const refresh = async () => {
    const accountResult = await accountQuery.refetch();
    if (accountResult.data != null) {
      await usageQuery.refetch();
    }
  };

  if (accountQuery.isLoading) {
    return {
      status: 'loading',
      autoPercent: 0,
      paidPercent: 0,
      error: null,
      isRefreshing,
      refresh,
    };
  }

  if (!isConnected) {
    return {
      status: 'disconnected',
      autoPercent: 0,
      paidPercent: 0,
      error: null,
      isRefreshing,
      refresh,
    };
  }

  if (usageQuery.isPending) {
    return {
      status: 'loading',
      autoPercent: 0,
      paidPercent: 0,
      error: null,
      isRefreshing,
      refresh,
    };
  }

  if (usageQuery.isError && usageQuery.data === undefined) {
    return {
      status: 'error',
      autoPercent: 0,
      paidPercent: 0,
      error: toErrorMessage(usageQuery.error),
      isRefreshing,
      refresh,
    };
  }

  const arcs = usageQuery.data;
  if (arcs == null) {
    return {
      status: 'disconnected',
      autoPercent: 0,
      paidPercent: 0,
      error: null,
      isRefreshing,
      refresh,
    };
  }

  return {
    status: 'ready',
    autoPercent: arcs.autoPercent,
    paidPercent: arcs.paidPercent,
    error: null,
    isRefreshing,
    refresh,
  };
}
