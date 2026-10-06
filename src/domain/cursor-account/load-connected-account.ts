import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';
import type { CursorAccount } from '@/domain/cursor-account/types';

/**
 * Restore connection on app start when a session token is already stored.
 * Clears a stale token if Cursor rejects it so the UI returns to disconnected.
 */
export async function loadConnectedAccount(
  repository: CursorAccountRepository,
): Promise<CursorAccount | null> {
  const token = await repository.getSessionToken();
  if (token == null) {
    return null;
  }

  try {
    return await repository.fetchAccount(token);
  } catch (error) {
    await repository.clearSessionToken();
    throw error;
  }
}
