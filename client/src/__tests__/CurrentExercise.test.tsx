import React from "react";
import { render} from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import client from "../apolloClient";
import CurrentExercise from "../component/views/CurrentExercise";
import ExerciseModel from "../api/exercise/ExerciseModel";


const exercise = new ExerciseModel(1, "Affinity Map", "exercise");
function renderCurrentExercise() {
    return render(
        <ApolloProvider client={client}>
            <CurrentExercise  exercise={exercise}  />
        </ApolloProvider>
    );
}

    test('renders the exercise name',  async() => {
        const {findByTestId} = renderCurrentExercise();
        const current = await findByTestId("current-exercise")
        expect(current).toBeInTheDocument();
    })


