import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_CODEGEN_HASURA_ENDPOINT as string,
  // uri: 'http://localhost:8080/v1/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      // 'x-hasura-admin-secret': 'myadminsecretkey',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default client;