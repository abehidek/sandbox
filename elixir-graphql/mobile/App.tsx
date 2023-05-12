import { Home } from "./src/home";
import { client } from "./src/client";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
