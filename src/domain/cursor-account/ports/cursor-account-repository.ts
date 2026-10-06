import type { CursorAccount } from '@/domain/cursor-account/types';

/**
 * Port owned by domain — data layer implements storage + Cursor HTTP.
 */
export interface CursorAccountRepository {
  saveSessionToken(token: string): Promise<void>;
  getSessionToken(): Promise<string | null>;
  clearSessionToken(): Promise<void>;
  /** Validates token against Cursor and returns account + plan. */
  fetchAccount(sessionToken: string): Promise<CursorAccount>;
}
