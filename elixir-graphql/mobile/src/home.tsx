import { Button, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/client";
import { gql } from "./__gql__";

const color = "#fff";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color,
    display: "flex",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
});

const HELLO_TEST = gql(`
  query todoItems {
    todoItems {
      id content isCompleted
    }
  }
`);

export const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(HELLO_TEST);

  if (loading)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text>Error : {error.message}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button onPress={() => refetch()} title="Refetch" />
    </View>
  );
};
