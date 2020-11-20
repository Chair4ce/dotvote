import {gql} from '@apollo/client';

export const FETCH_IDEAS = gql`
    query getIdeas($exerciseId: Int!) {
        ideas(exerciseId: $exerciseId) {
            id
            name
            votes {
                id
                voteType
                ideaId {
                    id
                    name
                    exerciseId {
                        id
                        name
                    }
                }
                playerId {
                    id
                    name
                }
            }
        }
    }
`;
