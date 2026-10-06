import { normalizeSessionToken } from '@/domain/cursor-account/normalize-session-token';

describe('normalizeSessionToken', () => {
  it('returns trimmed cookie value as-is when already a raw value', () => {
    expect(normalizeSessionToken('  user_01ABC%3A%3Ajwt.here  ')).toBe(
      'user_01ABC%3A%3Ajwt.here',
    );
  });

  it('strips WorkosCursorSessionToken= prefix when pasted as full cookie assignment', () => {
    expect(
      normalizeSessionToken('WorkosCursorSessionToken=user_01ABC%3A%3Ajwt.here'),
    ).toBe('user_01ABC%3A%3Ajwt.here');
  });

  it('throws when empty after trim', () => {
    expect(() => normalizeSessionToken('   ')).toThrow('Session token is required');
  });
});
