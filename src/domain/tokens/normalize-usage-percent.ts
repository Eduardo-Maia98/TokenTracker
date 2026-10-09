/**
 * Clamp a Cursor-provided usage percent into the 0–100 range.
 * Missing / invalid values become 0.
 */
export function normalizeUsagePercent(value: unknown): number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return 0;
  }
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
}
