import type { TokenUsageArcsInput } from '@/domain/tokens/types';

/**
 * Port (interface) owned by domain — data layer implements this.
 */
export interface TokenUsageRepository {
  /**
   * Returns null when no session token is stored.
   * Percents may be missing/out of range — domain normalizes them.
   */
  getUsageArcs(): Promise<TokenUsageArcsInput | null>;
}
