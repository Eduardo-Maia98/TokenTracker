import { disconnect } from '@/domain/cursor-account/disconnect';
import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';

describe('disconnect', () => {
  it('clears the stored session token', async () => {
    const clearSessionToken = jest.fn().mockResolvedValue(undefined);
    const repository: CursorAccountRepository = {
      saveSessionToken: jest.fn(),
      clearSessionToken,
      getSessionToken: jest.fn(),
      fetchAccount: jest.fn(),
    };

    await disconnect(repository);

    expect(clearSessionToken).toHaveBeenCalled();
  });
});
