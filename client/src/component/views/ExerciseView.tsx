import React, { useState} from "react";
import ExerciseMenu from "../ExerciseMenu";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import CurrentExercise from "./CurrentExercise";
import BackButton from "../Button/BackButton";

export interface Props {
    loading: boolean;
    error: any;
    exercises: ExerciseModel[];
    className?: String;
}

const ExerciseView: React.FC<Props> = (props) => {

    const [selectedExercise, setSelectedExercise] = useState<ExerciseModel  | null>(null);


    function handleCallback(exercise: ExerciseModel) {
        setSelectedExercise(exercise);
    }

    function handleReset() {
        setSelectedExercise(null)
    }

    return (
        <div data-testid="exercise-view" className={'exercise_view'}>
            <header className="exercise_view_header">
                {selectedExercise ? <BackButton onClick={handleReset}/> : null}
                {selectedExercise ? <h1>{selectedExercise.name}</h1> : <h1>The Dot Voter</h1>}
            </header>
            {selectedExercise ? <CurrentExercise exercise={selectedExercise}/> : null}
            {props.loading ? <p>Loading... </p> :
                props.error ? <p>Uh oh! {props.error}</p> :
                    props.exercises && !selectedExercise ?
                       <ExerciseMenu list={props.exercises} callback={handleCallback}/>
                        : null}
        </div>
    )
}

export default ExerciseView;

