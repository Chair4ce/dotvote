
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient(
    {
        uri: '/api/graphql',
        cache: new InMemoryCache(
            // {
            //     typePolicies: {
            //         ideas: {
            //             fields: {
            //                 votes: {
            //                     merge(existing = [], incoming: any[]) {
            //                         return [...existing, ...incoming];
            //                     },
            //                 },
            //             },
            //         },
            //     },
            // }
            ),
        connectToDevTools: true,
    },
);

export default client;
