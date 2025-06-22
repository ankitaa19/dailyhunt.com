// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql', // Update to your GraphQL server URI
  cache: new InMemoryCache(),
});

export default client;
