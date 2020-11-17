import React, { useState} from "react";
import ExerciseMenu from "../ExerciseMenu";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import CurrentExercise from "./CurrentExercise";
import BackButton from "../Button/BackButton";
import {Cookie} from "../../App";

export interface Props {
    loading: boolean;
    error: any;
    cookie: Cookie | undefined;
    callback: () => void;
    exercises?: ExerciseModel[];
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

    function handleLogOut() {

    }

    return (
        <div data-testid="exercise-view" className={'exercise_view'}>
            <header className="exercise_view_header">
                <div>
                {selectedExercise ? <BackButton onClick={handleReset}/> : null}
                </div>
                <div>
                {selectedExercise ? <h1>{selectedExercise.name}</h1> : <h1>The Dot Voter</h1>}
                </div>
                <div className={"playerProfile"}>
                    <h5>
                    Logged in as: {props.cookie?.userName}
                    </h5>
                    <button onClick={props.callback}>
                        logout
                    </button>
                </div>
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

