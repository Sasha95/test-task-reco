import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppsDiscovery } from '../apps-discovery/AppsDiscovery';

export function meta() {
  return [
    { title: 'Apps Discovery | App Dashboard' },
    { name: 'description', content: 'Discover and explore applications' },
  ];
}

const queryClient = new QueryClient();

export default function AppsDiscoveryPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppsDiscovery />
    </QueryClientProvider>
  );
}
