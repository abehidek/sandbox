import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './screens/Home';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}

