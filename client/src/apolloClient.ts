
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient(
    {
        uri: '/api/graphql',
        cache: new InMemoryCache(),
        connectToDevTools: true,
    },
);

export default client;
