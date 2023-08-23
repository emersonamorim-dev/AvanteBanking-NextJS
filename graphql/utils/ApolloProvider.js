import { ApolloProvider as OriginalApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';

const ApolloProvider = ({ children }) => {
  return (
    <OriginalApolloProvider client={apolloClient}>
      {children}
    </OriginalApolloProvider>
  );
};

export default ApolloProvider;
