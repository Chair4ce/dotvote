
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient(
    {
        uri: 'http://localhost:8080/api/graphql',
        cache: new InMemoryCache({
            typePolicies: {
                exercises: {
                    fields: {
                            merge(existing, incoming) {
                                return incoming;
                            },
                    },
                },
            }
        }),
        connectToDevTools: true,
    },
);

export default client;
