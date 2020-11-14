import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import BackButton from "../component/Button/BackButton";
import client from "../apolloClient";


describe('Back', () => {
    test('calls the onClick callback handler', () => {
        const onClick = jest.fn();
        render(
            <ApolloProvider client={client}>
                <BackButton onClick={onClick}/>
            </ApolloProvider>
        );
        expect(screen.getByText('Back')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Back'));
        expect(onClick).toHaveBeenCalled();
    })

})

