import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "./__gql__";
import { FlatList } from "react-native";

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

const GET_TODO_ITEMS = gql(`
  query getTodoItems {
    todoItems {
      id content isCompleted
    }
  }
`);

const TOGGLE_TODO_ITEM = gql(`
  mutation toggleTodoItem($id: ID!){
    toggleTodoItem(id: $id) {
      content id isCompleted
    }
  }
`);

export const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_TODO_ITEMS);

  const [toggleItem, _] = useMutation(TOGGLE_TODO_ITEM, {
    onCompleted: () => refetch(),
  });

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
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <FlatList
        data={data.todoItems}
        renderItem={(i) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Button
              title={i.item.isCompleted ? "[x]" : "[  ]"}
              onPress={() => toggleItem({ variables: { id: i.item.id } })}
            />
            <Text>{i.item.content}</Text>
          </View>
        )}
        keyExtractor={(i) => i.id}
        style={{ maxHeight: 300 }}
      />
      <Button onPress={() => refetch()} title="Refetch" />
    </SafeAreaView>
  );
};
