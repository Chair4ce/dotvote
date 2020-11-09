import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import {ApolloProvider} from "@apollo/client";
import client from "../apolloClient";

function renderMainView() {
    return render(
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    );
}

test('renders the app', async () => {
    const {findByTestId} = renderMainView();
    const app = await findByTestId("app");
    expect(app).toBeTruthy();
});
