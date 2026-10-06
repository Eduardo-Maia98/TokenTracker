import { cursorCookieHeader, cursorHttpClient } from '@/data/http/cursor-client';

export type CursorAuthMeDto = {
  email?: string;
  id?: number | string;
  sub?: string;
};

export type CursorUsageSummaryDto = {
  membershipType?: string;
  individualMembershipType?: string;
  plan?: string;
};

/**
 * Cursor dashboard HTTP surface (unofficial, may change).
 */
export namespace CursorApi {
  export async function getAuthMe(sessionToken: string): Promise<CursorAuthMeDto> {
    const response = await cursorHttpClient.get<CursorAuthMeDto>('/api/auth/me', {
      headers: {
        Cookie: cursorCookieHeader(sessionToken),
      },
    });
    return response.data;
  }

  export async function getUsageSummary(
    sessionToken: string,
  ): Promise<CursorUsageSummaryDto> {
    const response = await cursorHttpClient.get<CursorUsageSummaryDto>(
      '/api/usage-summary',
      {
        headers: {
          Cookie: cursorCookieHeader(sessionToken),
        },
      },
    );
    return response.data;
  }
}
