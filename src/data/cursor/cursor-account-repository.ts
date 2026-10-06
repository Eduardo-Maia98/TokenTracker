import { CursorApi } from '@/data/services/cursor';
import { SecureStorage } from '@/data/storage/secure-storage';
import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';
import type { CursorAccount } from '@/domain/cursor-account/types';

const SESSION_TOKEN_KEY = 'cursor_workos_session_token';

function resolvePlan(summary: {
  membershipType?: string;
  individualMembershipType?: string;
  plan?: string;
}): string {
  const plan =
    summary.membershipType ??
    summary.individualMembershipType ??
    summary.plan ??
    'unknown';
  return plan;
}

/**
 * Data-layer implementation of CursorAccountRepository.
 */
export const cursorAccountRepository: CursorAccountRepository = {
  async saveSessionToken(token: string): Promise<void> {
    await SecureStorage.setString(SESSION_TOKEN_KEY, token);
  },

  async getSessionToken(): Promise<string | null> {
    return SecureStorage.getString(SESSION_TOKEN_KEY);
  },

  async clearSessionToken(): Promise<void> {
    await SecureStorage.remove(SESSION_TOKEN_KEY);
  },

  async fetchAccount(sessionToken: string): Promise<CursorAccount> {
    try {
      const [me, summary] = await Promise.all([
        CursorApi.getAuthMe(sessionToken),
        CursorApi.getUsageSummary(sessionToken),
      ]);

      const email = me.email?.trim();
      if (!email) {
        throw new Error('Cursor account response did not include an email');
      }

      return {
        email,
        plan: resolvePlan(summary),
      };
    } catch (cause) {
      throw new Error('Failed to validate Cursor session token', { cause });
    }
  },
};
