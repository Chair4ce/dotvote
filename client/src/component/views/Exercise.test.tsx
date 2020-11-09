import React from "react";
import {render, fireEvent, waitFor} from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import ExerciseView, {Props} from "./ExerciseView";
import client from "../../apolloClient";


function renderExerciseView(props: Partial<Props> = {}) {

    return render(
        <ApolloProvider client={client}>
            <ExerciseView {...props} />
        </ApolloProvider>
    );
}

test('should render a loading message while fetching data', async () => {
    const {findByTestId} = renderExerciseView();
    const exerciseView = await findByTestId("exercise-view");
    expect(exerciseView.className).toBe("exercise_view");
    expect(exerciseView).toHaveTextContent("Loading...");
});
