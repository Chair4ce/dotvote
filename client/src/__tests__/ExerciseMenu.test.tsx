import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import client from "../apolloClient";
import ExerciseModel from "../api/exercise/ExerciseModel";
import ExerciseMenu from "../component/ExerciseMenu";


const exercises = [new ExerciseModel(1, "Affinity Map", "exercise"), new ExerciseModel(2, "Vision", "exercise")];
const callback = jest.fn();

function renderExerciseMenu() {
    return render(
        <ApolloProvider client={client}>
            <ExerciseMenu list={exercises} callback={callback}/>
        </ApolloProvider>
    );
}

test('renders a list of exercises', async () => {
    const {findByTestId} = renderExerciseMenu();
    const current = await findByTestId("exercise-menu")
    expect(current).toBeInTheDocument();
    expect(screen.getByText('Vision')).toBeInTheDocument();
    expect(screen.getByText('Affinity Map')).toBeInTheDocument();
});


