import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import HomeScreen from './src/screens/Home';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

