import { useQuery } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Center, Text } from 'native-base';

export default function HomeScreen() {
  const query = useQuery(["todos"], () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  )

  if (query.isLoading) return <Text>Loading...</Text>
  if (query.error) return <Text>{JSON.stringify(query.error)}</Text>

  return (
    <Center flex={1} bgColor="gray.900">
      <Text color="white" fontSize={24}>Home!</Text>
      <Text color="white" fontSize={24}>{JSON.stringify(query.data)}</Text>
      <StatusBar style="auto" />
    </Center>
  )
}
