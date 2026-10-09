import type { TokenUsageRepository } from '@/domain/tokens/ports/token-usage-repository';
import { toTokenUsageArcs } from '@/domain/tokens/to-token-usage-arcs';
import type { TokenUsageArcs } from '@/domain/tokens/types';

/**
 * Load auto/paid usage percents for the Tokens tab arcs.
 * Returns null when there is no connected session.
 */
export async function loadTokenUsageArcs(
  repository: TokenUsageRepository,
): Promise<TokenUsageArcs | null> {
  const raw = await repository.getUsageArcs();
  if (raw == null) {
    return null;
  }
  return toTokenUsageArcs(raw);
}
