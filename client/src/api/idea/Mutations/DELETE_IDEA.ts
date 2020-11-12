import {gql} from "@apollo/client";


export const DELETE_IDEA = gql`
    mutation deleteIdea($id: Int!, $exerciseId: Int!) {
        deleteIdea(id: $id, exerciseId: $exerciseId){
            id
            name
            exerciseId
        }
    }
`;
