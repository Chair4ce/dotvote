import { gql } from '@apollo/client';

export const FETCH_EXERCISES = gql`
    query getExercises{
        exercises {
            id
            name
        }
    }
`;
