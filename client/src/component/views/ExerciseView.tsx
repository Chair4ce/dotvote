import React from "react";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "../../api/exercise/Queries/FETCH_EXERCISES";
import ExerciseMenu from "../ExerciseMenu";

export interface ExcerciseData {
    exercises: ExerciseModel[];
}

export interface Props {
    className?: String;
}

const ExerciseView: React.FC<Props> = (props) => {

    const {loading, error, data} = useQuery<ExcerciseData>(FETCH_EXERCISES);

    return (
        <div data-testid="exercise-view" className={'exercise_view'}>
            {loading ? <p>Loading... </p> :
                error ? <p>Uh oh! {error.message}</p> :
                    data ?
                       <ExerciseMenu list={data.exercises} />
                        : null}
        </div>
    )
}

export default ExerciseView;

