import { normalizeUsagePercent } from './normalize-usage-percent';

describe('normalizeUsagePercent', () => {
  test('returns the value when it is between 0 and 100', () => {
    expect(normalizeUsagePercent(42.5)).toBe(42.5);
  });

  test('returns 0 when value is undefined', () => {
    expect(normalizeUsagePercent(undefined)).toBe(0);
  });

  test('returns 0 when value is NaN', () => {
    expect(normalizeUsagePercent(Number.NaN)).toBe(0);
  });

  test('returns 0 when value is negative', () => {
    expect(normalizeUsagePercent(-10)).toBe(0);
  });

  test('caps at 100 when value exceeds 100', () => {
    expect(normalizeUsagePercent(150)).toBe(100);
  });
});
