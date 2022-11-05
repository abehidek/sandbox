import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import HomeScreen from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { THEME } from "./src/styles/theme"
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"

const queryClient = new QueryClient()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={THEME}>
        {fontsLoaded ? <HomeScreen /> : <Loading />}
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

