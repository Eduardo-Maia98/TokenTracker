/**
 * Public environment values used at the app edge (data / shared).
 * Secrets must not live here — use SecureStore in a future feature.
 */

export type AppEnv = {
  apiBaseUrl: string;
};

export const env: AppEnv = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? '',
};
