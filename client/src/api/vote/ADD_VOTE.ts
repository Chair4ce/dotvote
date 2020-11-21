import { gql } from '@apollo/client';

export const ADD_VOTE = gql`
    mutation addVote($voteType: String!, $ideaId: Int!, $playerId: Int!) {
        addVote(voteType: $voteType, ideaId: $ideaId, playerId: $playerId) {
            id
            name
            votes {
                id
                voteType
                playerId {
                    id
                    name
                }
            }
        }
    }
`;
