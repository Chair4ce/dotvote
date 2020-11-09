import React from "react";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "../../api/exercise/Queries/FETCH_EXERCISES";

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
                    data && data !== undefined ?
                        <div>
                            {data.exercises.map((exercise: any) => (
                                <div data-testid={"exercise-row"} className={'dataRow'} key={exercise.id}>
                                    <p>{exercise.name}</p></div>
                            ))}
                        </div>
                        : null}
        </div>
    )
}

export default ExerciseView;

