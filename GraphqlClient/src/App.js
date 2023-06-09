import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import Form from "./components/Forms";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="" style={{ background: "aliceblue" }}>
        <h1 className="text-center text-info mb-3">App name</h1>
        <Form />
        <ProductList />
      </Container>
    </ApolloProvider>
  );
}

export default App;
