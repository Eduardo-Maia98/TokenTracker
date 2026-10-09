import { CURSOR_SESSION_TOKEN_KEY } from '@/data/cursor/session-token-key';
import { CursorApi } from '@/data/services/cursor';
import { SecureStorage } from '@/data/storage/secure-storage';
import type { TokenUsageRepository } from '@/domain/tokens/ports/token-usage-repository';
import type { TokenUsageArcsInput } from '@/domain/tokens/types';

/**
 * Cursor-backed TokenUsageRepository: reads session token and maps usage-summary.
 */
export const cursorTokenUsageRepository: TokenUsageRepository = {
  async getUsageArcs(): Promise<TokenUsageArcsInput | null> {
    const sessionToken = await SecureStorage.getString(CURSOR_SESSION_TOKEN_KEY);
    if (sessionToken == null) {
      return null;
    }

    try {
      const summary = await CursorApi.getUsageSummary(sessionToken);
      
      return {
        autoPercent: summary.individualUsage?.plan?.autoPercentUsed,
        paidPercent: summary.individualUsage?.plan?.apiPercentUsed,
      };
    } catch (cause) {
      throw new Error('Failed to load Cursor token usage', { cause });
    }
  },
};
