import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { DiscoveryDataType, DiscoveryRequestType } from '~/types';

export const useApps = (params: DiscoveryRequestType) => {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['apps', params],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/app-service/get-apps`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      if (!res.ok) {
        throw new Error('Failed to fetch apps');
      }
      return res.json() as unknown as DiscoveryDataType;
    },
  });

  return { data, isLoading, error, isFetching };
};
