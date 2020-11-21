import React, { useState} from "react";
import ExerciseMenu from "../ExerciseMenu";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import {ReactComponent as Red5Card} from "../../icons/TinyRed5Card.svg";
import CurrentExercise from "./CurrentExercise";
import BackButton from "../Button/BackButton";
import {Cookie} from "../../App";
import PlayerModel from "../../api/login/playerModel";

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

    const [player] = useState( props.cookie ? new PlayerModel(props.cookie.id, props.cookie.userName, "player") : undefined);

    function handleCallback(exercise: ExerciseModel) {
        setSelectedExercise(null)
        setSelectedExercise(exercise);
    }

    function handleReset() {
        setSelectedExercise(null)
    }

    return (
        <div data-testid="exercise-view" className={'exercise_view'}>
            <header className="exercise_view_header">
                <div className={'card_avatar'}>
                    <Red5Card/>
                </div>
                <div>
                {selectedExercise ? <BackButton onClick={handleReset}/> : null}
                </div>
                <div className={'exercise_Title_Body'}>
                {selectedExercise ? <h1 className={'exercise_title_text'}>{selectedExercise.name}</h1> : <h1>The Dot Voter</h1>}
                </div>
                <div className={"playerProfile"}>
                    <button className={'logout_btn'} onClick={props.callback}>
                        logout
                    </button>
                </div>
            </header>
            <CurrentExercise exercise={selectedExercise} player={player}/>
            {props.loading ? <p>Loading... </p> :
                props.error ? <p>Uh oh! {props.error}</p> :
                    props.exercises && !selectedExercise ?
                       <ExerciseMenu list={props.exercises} callback={handleCallback}/>
                        : null}
        </div>
    )
}

export default ExerciseView;

