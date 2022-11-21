import { useNavigation } from "@react-navigation/native";
import { Avatar, Menu, Box, Pressable, Text, useToast } from "native-base"
import { useAuth } from "../hooks/useAuth";

export function AccountMenu() {
  const { user, signOut } = useAuth()
  const toast = useToast();

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error(error)
      toast.show({
        title: 'Não foi possível fazer sign out',
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }

  if (!user) return null

  return (
    <Box w="90%" alignItems="center">
      <Menu
        bgColor="gray.900"
        w="190"
        trigger={triggerProps => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Avatar
                key={user.sub}
                source={{ uri: user.avatar }}
                w={8}
                h={8}
                rounded="full"
                borderWidth={2}
                marginLeft={2}
                borderColor="gray.800"
              />
            </Pressable>
          );
        }}
      >
        <Menu.Item color="white" onPress={handleSignOut}>
          <Text color="white">Sign Out</Text>
        </Menu.Item>
      </Menu>
    </Box >
  )
}