import PokeCardContainer from "../components/PokeCardContainer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <div>
      <ApolloProvider client={client}>
        <PokeCardContainer />
      </ApolloProvider>
    </div>
  );
}
