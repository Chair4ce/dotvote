import {gql} from "@apollo/client";


export const DELETE_IDEA = gql`
    mutation deleteIdea($id: Int!) {
        deleteIdea(id: $id){
            id
            name
        }
    }
`;
