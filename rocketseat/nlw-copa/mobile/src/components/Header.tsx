import { useNavigation } from '@react-navigation/native';
import { Text, HStack, Box, Avatar, Menu } from 'native-base';
import { CaretLeft, Export } from 'phosphor-react-native';
import { useAuth } from '../hooks/useAuth';
import { AccountMenu } from './AccountMenu';

import { ButtonIcon } from './ButtonIcon';

interface Props {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
  onShare?: () => void;
}

export function Header({ title, showBackButton = false, showShareButton = false, onShare }: Props) {
  const EmptyBoxSpace = () => (<Box w={6} h={6} />);
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  return (
    <HStack w="full" h={24} bgColor="gray.800" alignItems="flex-end" pb={5} px={5}>
      <HStack w="full" alignItems="center" justifyContent="space-between">
        {
          showBackButton
            ? <ButtonIcon icon={CaretLeft} onPress={() => navigation.navigate('pools')} />
            : <EmptyBoxSpace />
        }

        <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
          {title}
        </Text>

        <HStack alignItems="center" justifyContent="space-between">
          {
            showShareButton
              ?
              <ButtonIcon icon={Export} onPress={onShare} />
              :
              <EmptyBoxSpace />
          }
          <AccountMenu />
        </HStack>


      </HStack>
    </HStack>
  );
}