import React from "react";
import ExerciseMenu from "../ExerciseMenu";
import ExerciseModel from "../../api/exercise/ExerciseModel";



export interface Props {
    loading: boolean;
    error: any;
    exercises?: ExerciseModel[];
    className?: String;
}

const ExerciseView: React.FC<Props> = (props) => {

    return (
        <div data-testid="exercise-view" className={'exercise_view'}>
            {props.loading ? <p>Loading... </p> :
                props.error ? <p>Uh oh! {props.error}</p> :
                    props.exercises ?
                       <ExerciseMenu list={props.exercises} />
                        : null}
        </div>
    )
}

export default ExerciseView;

