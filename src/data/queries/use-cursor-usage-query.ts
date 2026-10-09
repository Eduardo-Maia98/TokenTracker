import { useQuery } from '@tanstack/react-query';

import { cursorTokenUsageRepository } from '@/data/tokens/cursor-token-usage-repository';
import { loadTokenUsageArcs } from '@/domain/tokens/load-token-usage-arcs';

export const cursorUsageQueryKey = ['cursor', 'usage'] as const;

/**
 * Loads auto/paid usage percents for the Tokens tab.
 */
export function useCursorUsageQuery(enabled: boolean) {
  return useQuery({
    queryKey: cursorUsageQueryKey,
    queryFn: () => loadTokenUsageArcs(cursorTokenUsageRepository),
    enabled,
  });
}
