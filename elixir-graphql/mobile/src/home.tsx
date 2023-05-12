import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/client";
import { graphql } from "./__generated__/gql";

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

const HELLO_WORLD = graphql(`
  query hello {
    hello
  }
`);

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO_WORLD);

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
      <Text>{JSON.stringify(data.hello)}</Text>
    </View>
  );
};
