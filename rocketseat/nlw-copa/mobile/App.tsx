import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './src/screens/Home';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}

