import React, {useState} from "react";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import {gql, useMutation, useQuery} from "@apollo/client";
import {CREATE_EXERCISE} from "../../api/exercise/Mutations/CREATE_EXERCISE";
import {FETCH_EXERCISES} from "../../api/exercise/Queries/FETCH_EXERCISES";
import {ExerciseData} from "../../App";
import {FETCH_IDEAS} from "../../api/idea/Queries/FETCH_IDEAs";
import {CREATE_IDEA} from "../../api/idea/Mutations/CREATE_IDEA";
import IdeaModel from "../../api/idea/IdeaModel";


export interface IdeaData {
    ideas: IdeaModel[];
}

export interface Props {
    exercise: ExerciseModel;
    callback: () => void;
    className?: String;
}


const CurrentExercise: React.FC<Props> = (props) => {

    const {loading, error, data} = useQuery<IdeaData>(FETCH_IDEAS, {variables: {exerciseId: props.exercise.id}});

    function AddIdea() {
        const [ideaInput, setIdeaInput] = useState('');


        const [createIdea, {error: mutationError}] = useMutation(CREATE_IDEA, {
            update(cache, {data: {createIdea}}) {
                cache.modify({
                    fields: {
                        ideas(existingIdeas = []) {
                            const newIdeaRef = cache.writeFragment(
                                {
                                    data: createIdea,
                                    fragment: gql`
                                        fragment NewIdea on Idea {
                                            name
                                            exerciseId
                                        }
                                    `,
                                },
                            );
                            return [...existingIdeas, newIdeaRef];
                        },
                    },
                },);
            },
        });

        const handleAddIdea = () => {
            console.log(ideaInput);
            console.log(props.exercise.id);
            if (ideaInput !== '') {
                createIdea({variables: {text: ideaInput, exerciseId: props.exercise.id }})
                setIdeaInput('');
            }
        }

        return (
            <>
                <div>

                    <input
                        className="exercise_menu_input_text"
                        value={ideaInput}
                        onChange={(event) => setIdeaInput(event.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleAddIdea();
                            }
                        }}
                        placeholder={'Title'}
                    />

                </div>
                <div className="flex justify-center items-center vh-100">
                    <button
                        className="create_exercise_btn relative"
                        disabled={ideaInput === ''}
                        onClick={handleAddIdea}
                    >
                        <div className="element">
                            <p>Create New Idea</p>
                        </div>
                    </button>
                </div>
            </>
        );
    }

    return (
        <div data-testid="exercise-current" className={'exercise_current'}>

            <div className="wrapper">
                <div className="link_wrapper">
                    <a className={"back_btn_txt"} onClick={props.callback}>Back</a>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                            <path
                                d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                        </svg>
                    </div>
                </div>

            </div>
            <h1>{props.exercise.name}</h1>
            <div className={'exercise_menu_input'}>
                {AddIdea()}
            </div>
            <div className="idea_container">
                {data ? data.ideas.map((m : IdeaModel) => {
                    return <div className={"idea_row"}>
                        {m.name}
                    </div>
                }) : null}
            </div>
        </div>
    )
}

export default CurrentExercise;
