import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "./api/exercise/Queries/FETCH_EXERCISES";
import ExerciseModel from "./api/exercise/ExerciseModel";

import Red5CardFlipperLoginForm from "./component/forms/Red5CardFlipperLoginForm";
import {useCookies} from "react-cookie";
import ExerciseView from "./component/views/ExerciseView";

export interface ExerciseData {
    exercises: ExerciseModel[];
}

export interface Cookie {
    id: number;
    userName: string;
}

function App() {

    const {loading, error, data} = useQuery<ExerciseData>(FETCH_EXERCISES);
    const [, setLogin] = useState(false);
    const [userCookie,, removeCookie] = useCookies(['dotvote']);
    let cookie: Cookie | undefined = userCookie.dotvote;

    function handleLogin() {
        setLogin(true);
    }

    function handleLogOut() {
        removeCookie('dotvote');
        setLogin(false);
    }

    function renderApp() {
        if (cookie?.userName) {
            return (
                <>
                { data ? <ExerciseView loading={loading} exercises={data?.exercises} error={error} cookie={cookie} callback={handleLogOut}/> : null}
                </>
            )
        } else {
            return (
                <Red5CardFlipperLoginForm callback={handleLogin} cookie={cookie}/>
            )
        }
    }

    return (
        <div data-testid="app" id="container" className="app">
            {renderApp()}
        </div>
    );
}


export default App;




