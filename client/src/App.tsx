import React from 'react';
import './App.css';
import ExerciseView from "./component/views/ExerciseView";

function App() {
    return (
        <div data-testid="app" className="App">
            <ExerciseView/>
        </div>
    );
}

export default App;
