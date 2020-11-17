import React from 'react';
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "./api/exercise/Queries/FETCH_EXERCISES";
import ExerciseModel from "./api/exercise/ExerciseModel";

import Red5CardFlipperLoginForm from "./component/cards/Red5CardFlipper";
import {useCookies} from "react-cookie";

export interface ExerciseData {
    exercises: ExerciseModel[];
}

export interface Cookie {
    userName: string;
}

function App() {

    const {loading, error, data} = useQuery<ExerciseData>(FETCH_EXERCISES);
    const [userCookie] = useCookies(['dotvote']);
    let cookie: Cookie | undefined = userCookie.dotvote;

    return (
        <div data-testid="app" id="container" className="app">
                <h4>Powered by Red 5</h4>
         <Red5CardFlipperLoginForm/>
            {/*{data ? <ExerciseView loading={loading} exercises={data.exercises} error={error} cookie={cookie}/> : null}*/}
        </div>
    );
}


export default App;




