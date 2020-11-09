import {gql} from "@apollo/client";


export const UPDATE_EXERCISE = gql`
    mutation updateExercise($id: Int!, $text: String!) {
        updateExercise(id: $id, name: $text) {
            id
            name
        }
    }
`;
