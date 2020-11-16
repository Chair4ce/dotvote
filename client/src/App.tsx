import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "./api/exercise/Queries/FETCH_EXERCISES";
import ExerciseModel from "./api/exercise/ExerciseModel";
import {ReactComponent as Red5Card} from "../src/icons/Red_5_card.svg";
import Red5CardFlipper from "./component/cards/Red5CardFlipper";

export interface ExerciseData {
    exercises: ExerciseModel[];
}



function App() {

    const {loading, error, data} = useQuery<ExerciseData>(FETCH_EXERCISES);
    const [showLogin, setShowLogin] = useState<boolean>(false);

    return (
        <div data-testid="app" id="container" className="app">
                <h4>Powered by Red 5</h4>
         <Red5CardFlipper/>
            {/*{data ? <ExerciseView loading={loading} exercises={data.exercises} error={error}/> : null}*/}
        </div>
    );
}


export default App;




