import {gql} from "@apollo/client";


export const DELETE_EXERCISE = gql`
    mutation deleteExercise($id: Int!) {
        deleteExercise(id: $id)
    }
`;
