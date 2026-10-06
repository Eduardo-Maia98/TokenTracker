import { loadConnectedAccount } from '@/domain/cursor-account/load-connected-account';
import type { CursorAccountRepository } from '@/domain/cursor-account/ports/cursor-account-repository';
import type { CursorAccount } from '@/domain/cursor-account/types';

describe('loadConnectedAccount', () => {
  const account: CursorAccount = {
    email: 'dev@example.com',
    plan: 'pro',
  };

  it('returns null when no session token is stored', async () => {
    const repository: CursorAccountRepository = {
      saveSessionToken: jest.fn(),
      clearSessionToken: jest.fn(),
      getSessionToken: jest.fn().mockResolvedValue(null),
      fetchAccount: jest.fn(),
    };

    await expect(loadConnectedAccount(repository)).resolves.toBeNull();
    expect(repository.fetchAccount).not.toHaveBeenCalled();
  });

  it('fetches account when a session token exists', async () => {
    const repository: CursorAccountRepository = {
      saveSessionToken: jest.fn(),
      clearSessionToken: jest.fn(),
      getSessionToken: jest.fn().mockResolvedValue('stored-token'),
      fetchAccount: jest.fn().mockResolvedValue(account),
    };

    await expect(loadConnectedAccount(repository)).resolves.toEqual(account);
    expect(repository.fetchAccount).toHaveBeenCalledWith('stored-token');
  });

  it('clears stored token when fetch fails', async () => {
    const clearSessionToken = jest.fn().mockResolvedValue(undefined);
    const repository: CursorAccountRepository = {
      saveSessionToken: jest.fn(),
      clearSessionToken,
      getSessionToken: jest.fn().mockResolvedValue('stale-token'),
      fetchAccount: jest.fn().mockRejectedValue(new Error('unauthorized')),
    };

    await expect(loadConnectedAccount(repository)).rejects.toThrow('unauthorized');
    expect(clearSessionToken).toHaveBeenCalled();
  });
});
