import { loadTokenUsageArcs } from './load-token-usage-arcs';
import type { TokenUsageRepository } from './ports/token-usage-repository';

describe('loadTokenUsageArcs', () => {
  it('returns null when no session is available', async () => {
    const repository: TokenUsageRepository = {
      getUsageArcs: jest.fn().mockResolvedValue(null),
    };

    await expect(loadTokenUsageArcs(repository)).resolves.toBeNull();
  });

  it('returns normalized arcs from the repository', async () => {
    const repository: TokenUsageRepository = {
      getUsageArcs: jest.fn().mockResolvedValue({
        autoPercent: 25,
        paidPercent: 150,
      }),
    };

    await expect(loadTokenUsageArcs(repository)).resolves.toEqual({
      autoPercent: 25,
      paidPercent: 100,
    });
  });
});
