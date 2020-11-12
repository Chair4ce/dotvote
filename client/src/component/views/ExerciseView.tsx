import React, {useState} from "react";
import ExerciseMenu from "../ExerciseMenu";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import CurrentExercise from "./CurrentExercise";

export interface Props {
    loading: boolean;
    error: any;
    exercises?: ExerciseModel[];
    className?: String;
}

const ExerciseView: React.FC<Props> = (props) => {

    const [selectedExercise, setSelectedExercise] = useState<ExerciseModel  | undefined>(undefined);

    function handleCallback(exercise: ExerciseModel) {
        setSelectedExercise(exercise);
    }

    function handleReset() {
        setSelectedExercise(undefined)
    }

    return (
        <div data-testid="exercise-view" className={'exercise_view'}>
            {selectedExercise ? <CurrentExercise exercise={selectedExercise} callback={handleReset} /> : null}
            {props.loading ? <p>Loading... </p> :
                props.error ? <p>Uh oh! {props.error}</p> :
                    props.exercises && !selectedExercise ?
                       <ExerciseMenu list={props.exercises} callback={handleCallback}/>
                        : null}
        </div>
    )
}

export default ExerciseView;

