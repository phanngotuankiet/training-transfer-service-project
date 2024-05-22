import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://hasura-transfer-services-develop.onrender.com/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  const zsData = JSON.parse(localStorage.getItem('userData') ?? '');
  if (!zsData) return {};

  return {
    headers: {
      ...headers,
      Authorization: zsData.token ? `Bearer ${zsData.token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
