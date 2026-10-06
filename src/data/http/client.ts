import { create, type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { env } from '@/shared/env';

/**
 * Shared Axios instance for all data-layer HTTP calls.
 * Configure interceptors / auth headers in a later feature.
 */
export const httpClient = create({
  baseURL: env.apiBaseUrl || undefined,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 15_000,
});

export type { AxiosRequestConfig, AxiosResponse };
