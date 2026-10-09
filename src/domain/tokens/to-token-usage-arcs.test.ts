import { toTokenUsageArcs } from './to-token-usage-arcs';

describe('toTokenUsageArcs', () => {
  test('maps auto and paid percents', () => {
    expect(
      toTokenUsageArcs({
        autoPercent: 30,
        paidPercent: 70,
      }),
    ).toEqual({
      autoPercent: 30,
      paidPercent: 70,
    });
  });

  test('normalizes missing and out-of-range values', () => {
    expect(
      toTokenUsageArcs({
        autoPercent: undefined,
        paidPercent: 120,
      }),
    ).toEqual({
      autoPercent: 0,
      paidPercent: 100,
    });
  });
});
