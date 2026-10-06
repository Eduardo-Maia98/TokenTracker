import { create } from 'axios';

export const CURSOR_API_BASE_URL = 'https://cursor.com';

/**
 * Axios instance dedicated to Cursor dashboard APIs.
 * Do not reuse the generic httpClient base URL — Cursor is a fixed host.
 */
export const cursorHttpClient = create({
  baseURL: CURSOR_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: 15_000,
});

export function cursorCookieHeader(sessionToken: string): string {
  return `WorkosCursorSessionToken=${sessionToken}`;
}
