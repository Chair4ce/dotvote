import React, {useState} from 'react';
import ExerciseView from "./component/views/ExerciseView";
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "./api/exercise/Queries/FETCH_EXERCISES";
import ExerciseModel from "./api/exercise/ExerciseModel";

export interface ExerciseData {
    exercises: ExerciseModel[];
}

function App() {

    const {loading, error, data} = useQuery<ExerciseData>(FETCH_EXERCISES);


    return (
        <div data-testid="app" id="container" className="app">
            {data ? <ExerciseView loading={loading} exercises={data.exercises} error={error}/> : null}
        </div>
    );
}

export default App;
