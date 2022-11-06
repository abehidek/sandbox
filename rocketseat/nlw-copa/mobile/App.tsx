import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { THEME } from "./src/styles/theme"
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"

import HomeScreen from './src/screens/Home';
import { Loading } from './src/components/Loading';
import SignInScreen from './src/screens/SignIn';

import { AuthContextProvider } from './src/contexts/AuthContext';


const queryClient = new QueryClient()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={THEME}>
        <AuthContextProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          {/* {fontsLoaded ? <HomeScreen /> : <Loading />} */}
          {fontsLoaded ? <SignInScreen /> : <Loading />}
        </AuthContextProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

