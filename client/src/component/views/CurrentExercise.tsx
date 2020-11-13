import React, {useState} from "react";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import {gql, useMutation, useQuery} from "@apollo/client";
import {FETCH_IDEAS} from "../../api/idea/Queries/FETCH_IDEAs";
import {CREATE_IDEA} from "../../api/idea/Mutations/CREATE_IDEA";
import IdeaModel from "../../api/idea/IdeaModel";
import '../cards/Cards.css';

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


        const [createIdea] = useMutation(CREATE_IDEA, {
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
            if (ideaInput !== '') {
                if(props.exercise) {
                createIdea({variables: {text: ideaInput, exerciseId: props.exercise.id }})
                }

                setIdeaInput('');
            }
        }

        return (
            <div className="create_exercise_form">
                <div className={"form_input"}>
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
                <div className="form_submit flex justify-center items-center vh-100">
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
            </div>
        );
    }

    return (
        <div data-testid="exercise-current" className="exercise_current">
            <div className="exercise_menu_sub_header">
                {AddIdea()}
            </div>
            <div className="container">
                {data ? data.ideas.map((m : IdeaModel) => {
                    return <div key={m.id} className="card">
                        <h3 className="title">{m.name}</h3>
                        <div className="bar">
                            <div className="emptybar"/>
                            <div className="filledbar"/>
                        </div>
                        <div className="circle">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <circle className="stroke" cx="32" cy="60" r="30"/>
                            </svg>
                        </div>
                    </div>
                }) : null}
            </div>
        </div>
    )
}

export default CurrentExercise;
