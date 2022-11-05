import { useQuery } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const query = useQuery(["todos"], () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  )

  if (query.isLoading) return <Text>Loading...</Text>
  if (query.error) return <Text>{JSON.stringify(query.error)}</Text>

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Text>{JSON.stringify(query.data)}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});