import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com', // substitua pela URL do seu endpoint GraphQL
  cache: new InMemoryCache()
});

export default client;
