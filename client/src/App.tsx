import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {FETCH_EXERCISES} from "./api/exercise/Queries/FETCH_EXERCISES";
import ExerciseModel from "./api/exercise/ExerciseModel";

import Red5CardFlipperLoginForm from "./component/cards/Red5CardFlipperLoginForm";
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
    const [loggedIn, setLogin] = useState(false);
    const [userCookie, setCookie, removeCookie] = useCookies(['dotvote']);
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
                <ExerciseView loading={loading} exercises={data?.exercises} error={error} cookie={cookie} callback={handleLogOut}/>
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




