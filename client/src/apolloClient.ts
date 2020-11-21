import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient(
    {
        uri: '/api/graphql',
        cache: new InMemoryCache(
            {
                typePolicies: {
                    Ideas: {
                        fields: {
                            Idea: {
                                merge(existing = [], incoming: any[]) {
                                    return [...existing, ...incoming];
                                },
                            },
                        },
                    },
                },
            }
            ),
        connectToDevTools: true,
    },
);

// const httpLink = new HttpLink({
//     uri: '/api/graphql'
// });
//
//
// export const wsLink = new WebSocketLink({
//     uri: `/api/graphql`,
//     options: {
//         reconnect: true
//     }
// });
//
// const splitLink = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === 'OperationDefinition' &&
//             definition.operation === 'subscription'
//         );
//     },
//     wsLink,
//     httpLink,
// );

