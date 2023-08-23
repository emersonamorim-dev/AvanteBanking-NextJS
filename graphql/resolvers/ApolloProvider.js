// ApolloProvider.js
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'URL_DO_SEU_SERVIDOR_GRAPHQL', // Substitua pela URL do seu servidor GraphQL
  cache: new InMemoryCache()
});

const ApolloProvider = ({ children }) => (
  <Provider client={client}>
    {children}
  </Provider>
);

export default ApolloProvider;
