import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// HTTP link for queries and mutations
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_CODEGEN_HASURA_ENDPOINT as string,
});

// WebSocket link for subscriptions
const wsLink = new WebSocketLink({
  uri: import.meta.env.VITE_CODEGEN_HASURA_ENDPOINT.replace(/^http/, 'ws') as string, // đổi HTTP thành WS
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // truyền token qua WebSocket
      },
    },
  },
});

// Authentication link
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

// Split link based on operation type
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

// Apollo Client setup
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

client.resetStore();

export default client;
