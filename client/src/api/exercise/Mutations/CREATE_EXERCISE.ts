import { gql } from '@apollo/client';

export const CREATE_EXERCISE = gql`
    mutation createExercise($text: String!) {
        createExercise(name: $text) {
            name
        }
    }
`;


