import React from 'react';
import EntryProvider from './context/entryProvider';
import Index from './src';
// import {
//   ApolloClient,
//   ApolloProvider,
//   createHttpLink,
//   InMemoryCache,
// } from '@apollo/client';

// const httpLink = createHttpLink({
//   fetch,
//   uri: 'https://graphql.contentful.com/content/v1/spaces/y0vql4lgwa04',
//   headers: {
//     Authorization: 'Bearer q9eJqpPqdgKU4wfjztDngADtDij5aFcMiY41xo-YX3c',
//   },
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const App = () => {
  return (
    // <ApolloProvider client={client}>
    <EntryProvider>
      <Index />
    </EntryProvider>
    // </ApolloProvider>
  );
};
export default App;
