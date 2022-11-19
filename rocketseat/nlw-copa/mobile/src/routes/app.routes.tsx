import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { PlusCircle, SoccerBall } from "phosphor-react-native";

const { Navigator, Screen } = createBottomTabNavigator();

import NewScreen from "../screens/New";
import PoolsScreen from "../screens/Pools";
import FindScreen from "../screens/Find";
import SignInScreen from "../screens/SignIn";

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  const size = sizes[6];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: sizes['22'],
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "android" ? -10 : 0,
        },
      }}
    >
      <Screen
        name="new"
        component={NewScreen}
        options={{
          tabBarLabel: "Novo bolão",
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
        }}
      />
      <Screen
        name="pools"
        component={PoolsScreen}
        options={{
          tabBarLabel: "Meus bolões",
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={size} />,
        }}
      />

      <Screen
        name="find"
        component={FindScreen}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="signin"
        component={SignInScreen}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
