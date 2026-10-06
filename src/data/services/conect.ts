import type { AxiosRequestConfig } from 'axios';

import { httpClient } from '@/data/http/client';

/**
 * Conect API surface.
 * Add concrete endpoints here as the backend contract is defined.
 *
 * @example
 * const usage = await Conect.get<UsageDto>('/v1/usage');
 */
export namespace Conect {
  export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await httpClient.get<T>(url, config);
    return response.data;
  }

  export async function post<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await httpClient.post<T>(url, body, config);
    return response.data;
  }

  export async function put<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await httpClient.put<T>(url, body, config);
    return response.data;
  }

  export async function patch<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await httpClient.patch<T>(url, body, config);
    return response.data;
  }

  export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await httpClient.delete<T>(url, config);
    return response.data;
  }
}
