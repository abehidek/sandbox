import { StyleSheet, Text, View } from "react-native";
import { useQuery, gql } from "@apollo/client";

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

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `);

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
    </View>
  );
};
