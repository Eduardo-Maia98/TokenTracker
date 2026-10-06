import { connectWithSessionToken } from '@/domain/cursor-account/connect-with-session-token';
import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';
import type { CursorAccount } from '@/domain/cursor-account/types';

describe('connectWithSessionToken', () => {
  const account: CursorAccount = {
    email: 'dev@example.com',
    plan: 'pro',
  };

  it('normalizes token, persists it, and returns the fetched account', async () => {
    const saveSessionToken = jest.fn().mockResolvedValue(undefined);
    const fetchAccount = jest.fn().mockResolvedValue(account);
    const repository: CursorAccountRepository = {
      saveSessionToken,
      clearSessionToken: jest.fn(),
      getSessionToken: jest.fn(),
      fetchAccount,
    };

    const result = await connectWithSessionToken(
      repository,
      'WorkosCursorSessionToken=user_01%3A%3Atoken',
    );

    expect(saveSessionToken).toHaveBeenCalledWith('user_01%3A%3Atoken');
    expect(fetchAccount).toHaveBeenCalledWith('user_01%3A%3Atoken');
    expect(result).toEqual(account);
  });

  it('clears stored token when fetch fails after save', async () => {
    const clearSessionToken = jest.fn().mockResolvedValue(undefined);
    const repository: CursorAccountRepository = {
      saveSessionToken: jest.fn().mockResolvedValue(undefined),
      clearSessionToken,
      getSessionToken: jest.fn(),
      fetchAccount: jest.fn().mockRejectedValue(new Error('unauthorized')),
    };

    await expect(connectWithSessionToken(repository, 'raw-token')).rejects.toThrow(
      'unauthorized',
    );
    expect(clearSessionToken).toHaveBeenCalled();
  });
});
