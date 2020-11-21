import React, {useState} from "react";
import ExerciseModel from "../../api/exercise/ExerciseModel";
import {gql, useMutation, useQuery} from "@apollo/client";
import {FETCH_IDEAS} from "../../api/idea/Queries/FETCH_IDEAs";
import {CREATE_IDEA} from "../../api/idea/Mutations/CREATE_IDEA";
import IdeaModel from "../../api/idea/IdeaModel";
import '../cards/Cards.css';
import CreateButton from "../Button/CreateButton";
import IdeaCard from "../cards/IdeaCard";
import {DELETE_IDEA} from "../../api/idea/Mutations/DELETE_IDEA";
import {ADD_VOTE} from "../../api/vote/ADD_VOTE";
import PlayerModel from "../../api/login/playerModel";
import client from "../../apolloClient";

export interface IdeaData {
    ideas: IdeaModel[];
}

export interface Props {
    exercise: ExerciseModel;
    player: PlayerModel | undefined;
    className?: String;
}

export const CALLBACK_ENUM = {
    DELETE_IDEA: 'DELETE_IDEA',
    VOTE_IDEA: 'VOTE_IDEA'
}


const CurrentExercise: React.FC<Props> = (props) => {

    const {loading, error, data} = useQuery<IdeaData>(FETCH_IDEAS, {variables: {exerciseId: props.exercise.id}});


function callback_handler(action: string, data?: IdeaModel) {
    switch (action) {
        case CALLBACK_ENUM.DELETE_IDEA:
            deleteIdea({variables: {id: data!.id.toString(), exerciseId: data?.exerciseId }})
            break;
        case CALLBACK_ENUM.VOTE_IDEA:

            break;
    }
}

    const [deleteIdea] = useMutation(DELETE_IDEA, {
            update(cache, {data}) {
                const deletedIdeaId = 'Idea:' + data.deleteIdea.id.toString();
                cache.evict({id: deletedIdeaId});
            },
        },
    )



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
                                            exerciseId {
                                                name
                                            }
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
                if (props.exercise) {
                    createIdea({variables: {text: ideaInput, exerciseId: props.exercise.id}})
                }

                setIdeaInput('');
            }
        }



        return (
            <div data-testid="current-exercise" className="create_exercise_form">
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
                <CreateButton
                    wrapper={'create_idea_btn_wrapper'}
                    className={'create_idea_btn'}
                    buttonText={"Add Idea"}
                    input={ideaInput}
                    onClick={handleAddIdea}/>

            </div>
        );
    }

    function handleOnClickCallback() {
        console.log("click!!!")
    }

    return (
        <div data-testid="exercise-current" className="exercise_current">
            <div className="exercise_menu_sub_header">
                {AddIdea()}
            </div>

            {!loading ? <div className="container">
                {data ? data.ideas.map((m: IdeaModel) => {
                    return <IdeaCard key={m.id} idea={m} player={props.player} onClick={callback_handler}/>
                }) : null}
            </div> : null }

        </div>
    )
}

export default CurrentExercise;
