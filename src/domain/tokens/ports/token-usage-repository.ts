import type { TokenUsage } from '@/domain/tokens/types';

/**
 * Port (interface) owned by domain — data layer implements this.
 */
export interface TokenUsageRepository {
  getUsage(): Promise<TokenUsage>;
}
