import React from "react";
import {render} from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import ExerciseView, {Props} from "../component/views/ExerciseView";
import client from "../apolloClient";

function renderExerciseView(props: Partial<Props> = {}) {

    return render(
        <ApolloProvider client={client}>
            <ExerciseView {...props} loading={false} error={""} exercises={[]} />
        </ApolloProvider>
    );
}

test('should render a loading message while fetching data', async () => {
    const {findByTestId} = renderExerciseView();
    const exerciseView = await findByTestId("exercise-view");
    expect(exerciseView.className).toBe("exercise_view");
});
