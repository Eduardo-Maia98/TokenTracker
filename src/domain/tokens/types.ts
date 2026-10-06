/**
 * Domain types for token usage (provider-agnostic shape; MVP fills with Cursor data).
 */
export type TokenUsage = {
  used: number;
  limit: number;
};

export type TokenUsagePercent = {
  used: number;
  limit: number;
  /** 0–100, how much of the limit was already consumed */
  consumedPercent: number;
};
