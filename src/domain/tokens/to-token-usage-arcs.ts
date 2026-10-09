import { normalizeUsagePercent } from '@/domain/tokens/normalize-usage-percent';
import type { TokenUsageArcs, TokenUsageArcsInput } from '@/domain/tokens/types';

/**
 * Build domain arc percents from raw repository values.
 */
export function toTokenUsageArcs(input: TokenUsageArcsInput): TokenUsageArcs {
  return {
    autoPercent: normalizeUsagePercent(input.autoPercent),
    paidPercent: normalizeUsagePercent(input.paidPercent),
  };
}
