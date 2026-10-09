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

/** Raw arc percents as returned by the repository (before normalize). */
export type TokenUsageArcsInput = {
  autoPercent?: number;
  paidPercent?: number;
};

/** Normalized percents for the Tokens tab dual-arc UI. */
export type TokenUsageArcs = {
  /** 0–100 — Cursor individualUsage.plan.apiPercentUsed */
  autoPercent: number;
  /** 0–100 — Cursor apiPercentUsed (root) */
  paidPercent: number;
};
