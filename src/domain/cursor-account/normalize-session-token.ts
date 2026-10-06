const COOKIE_PREFIX = 'WorkosCursorSessionToken=';

/**
 * Normalizes a pasted Cursor session cookie into the raw cookie value
 * suitable for `Cookie: WorkosCursorSessionToken=<value>`.
 */
export function normalizeSessionToken(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.length === 0) {
    throw new Error('Session token is required');
  }

  if (trimmed.toLowerCase().startsWith(COOKIE_PREFIX.toLowerCase())) {
    return trimmed.slice(COOKIE_PREFIX.length).trim();
  }

  return trimmed;
}
