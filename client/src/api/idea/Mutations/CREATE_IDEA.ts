import { gql } from '@apollo/client';

export const CREATE_IDEA = gql`
    mutation createIdea($text: String!, $exerciseId: Int!) {
        createIdea(name: $text, exerciseId: $exerciseId) {
            id
            name
            exerciseId
        }
    }
`;


