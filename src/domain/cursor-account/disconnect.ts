import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';

/**
 * Remove the stored Cursor session credential.
 */
export async function disconnect(repository: CursorAccountRepository): Promise<void> {
  await repository.clearSessionToken();
}
