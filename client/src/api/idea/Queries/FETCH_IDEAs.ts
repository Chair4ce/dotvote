import { gql } from '@apollo/client';

export const FETCH_IDEAS = gql`
    query getIdeas($exerciseId: Int!) {
        ideas(exerciseId: $exerciseId) {
            id
            name
            exerciseId
        }
    }
`;
