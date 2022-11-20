import { Row, Text, Pressable } from 'native-base';

interface Props {
}

export function EmptyGameList({ }: Props) {
  return (
    <Row flexWrap="wrap" justifyContent="center" p={4}>
      <Text color="gray.200" fontSize="sm">
        Esse bolão parece não ter jogos {'\n'}
      </Text>

      <Row>
        <Text color="gray.200" fontSize="sm" mx={1}>
          Gostaria de
        </Text>

        <Pressable onPress={() => { }}>
          <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
            criar um novo jogo ?
          </Text>
        </Pressable>
      </Row>
    </Row>
  );
}