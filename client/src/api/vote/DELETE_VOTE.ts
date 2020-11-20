import {gql} from "@apollo/client";


export const DELETE_VOTE = gql`
    mutation deleteVote($id: Int!) {
        deleteVote(id: $id){
            id
            voteType
        }
    }
`;
