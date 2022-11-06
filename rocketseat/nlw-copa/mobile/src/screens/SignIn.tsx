import { Center, Text } from "native-base";

import Logo from '../assets/logo.svg';

export default function SignInScreen() {
 return (
  <Center flex={1} bgColor="gray.900">
    <Text>Sign In</Text>
    <Logo width={212} height={40} />
  </Center>
 )
}