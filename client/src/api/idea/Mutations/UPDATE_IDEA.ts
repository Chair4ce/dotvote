import {gql} from "@apollo/client";


export const UPDATE_IDEA = gql`
    mutation updateIdea($id: Int!, $text: String!, $exerciseId: Int!) {
        updateIdea(id: $id, name: $text, exerciseId: $exerciseId) {
            id
            name
            exerciseId
        }
    }
`;
