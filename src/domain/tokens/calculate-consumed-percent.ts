/**
 * Pure domain rule: percent of the limit already consumed.
 * Returns 0 when limit is 0 or negative (avoids division by zero).
 */
export function calculateConsumedPercent(used: number, limit: number): number {
  if (limit <= 0) {
    return 0;
  }
  const raw = (used / limit) * 100;
  if (raw < 0) {
    return 0;
  }
  if (raw > 100) {
    return 100;
  }
  return raw;
}
