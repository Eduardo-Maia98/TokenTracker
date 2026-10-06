import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';

type QueryProviderProps = {
  children: ReactNode;
};

function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 30_000,
      },
    },
  });
}

/**
 * Provides TanStack Query to the app tree.
 * Mount once at the root layout — do not nest additional providers without need.
 */
export function QueryProvider({ children }: QueryProviderProps) {
  const [client] = useState(createQueryClient);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
