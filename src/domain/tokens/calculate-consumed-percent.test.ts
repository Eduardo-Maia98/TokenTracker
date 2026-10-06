import { calculateConsumedPercent } from './calculate-consumed-percent';

describe('calculateConsumedPercent', () => {
  test('returns 50 when half the limit was used', () => {
    expect(calculateConsumedPercent(50, 100)).toBe(50);
  });

  test('returns 0 when limit is 0', () => {
    expect(calculateConsumedPercent(10, 0)).toBe(0);
  });

  test('caps at 100 when used exceeds limit', () => {
    expect(calculateConsumedPercent(150, 100)).toBe(100);
  });
});
