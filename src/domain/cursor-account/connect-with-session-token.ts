import { normalizeSessionToken } from '@/domain/cursor-account/normalize-session-token';
import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';
import type { CursorAccount } from '@/domain/cursor-account/types';

/**
 * Persist a pasted session token and validate it against Cursor.
 * Clears the stored token if validation fails so the app never stays "half connected".
 */
export async function connectWithSessionToken(
  repository: CursorAccountRepository,
  rawToken: string,
): Promise<CursorAccount> {
  const token = normalizeSessionToken(rawToken);
  await repository.saveSessionToken(token);

  try {
    return await repository.fetchAccount(token);
  } catch (error) {
    await repository.clearSessionToken();
    throw error;
  }
}
