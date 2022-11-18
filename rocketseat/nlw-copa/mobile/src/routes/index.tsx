import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import SignInScreen from "../screens/SignIn";
import { AppRoutes } from "./app.routes";

export default function Routes() {
  const { user, isUserLoading } = useAuth();

  if (isUserLoading) return <Loading />;

  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>
        {user ? <AppRoutes /> : <SignInScreen />}
      </NavigationContainer>
    </Box>
  );
}
