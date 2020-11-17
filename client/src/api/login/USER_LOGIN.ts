import { gql } from '@apollo/client';

export const PLAYER_LOGIN = gql`
    mutation playerLogin($text: String!) {
        playerLogin(name: $text) {
            id
            name
        }
    }
`;


