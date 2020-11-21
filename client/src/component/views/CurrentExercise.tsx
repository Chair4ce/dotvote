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
import PlayerModel from "../../api/login/playerModel";

export interface IdeaData {
    ideas: IdeaModel[];
}

export interface Props {
    exercise: ExerciseModel | null;
    player: PlayerModel | undefined;
    className?: String;
}

export const CALLBACK_ENUM = {
    DELETE_IDEA: 'DELETE_IDEA',
    VOTE_IDEA: 'VOTE_IDEA'
}


const CurrentExercise: React.FC<Props> = (props) => {

    function AddIdea() {
        const [ideaInput, setIdeaInput] = useState('');

        const [createIdea, {error: mutationerror}] = useMutation(CREATE_IDEA, {
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
                        maxLength={64}
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

    function RenderIdeas() {

        const {loading, data} = useQuery<IdeaData>(FETCH_IDEAS, {variables: {exerciseId: props.exercise!.id}});

        const [deleteIdea] = useMutation(DELETE_IDEA, {
                update(cache, {data}) {
                    const deletedIdeaId = 'Idea:' + data.deleteIdea.id.toString();
                    cache.evict({id: deletedIdeaId});
                },
            },
        )

        // function callback_handler(action: string, data?: IdeaModel) {
        //     switch (action) {
        //         case CALLBACK_ENUM.DELETE_IDEA:
        //             deleteIdea({variables: {id: data!.id.toString(), exerciseId: data?.exerciseId }})
        //             break;
        //         case CALLBACK_ENUM.VOTE_IDEA:
        //
        //             break;
        //     }
        // }

        return (
            <>
                {!loading ? <div className="container">
                    {data ? data.ideas.map((m: IdeaModel) => {
                        return <IdeaCard key={m.id} idea={m} player={props.player} deleteIdea={deleteIdea}/>
                    }) : null}
                </div> : null}
            </>
        )

    }

    if (props.exercise !== null) {
    return (
        <div data-testid="exercise-current" className="exercise_current">
            <div className="exercise_menu_sub_header">
                {AddIdea()}
            </div>
            {RenderIdeas()}
        </div>
    )
    } else {
        return (<></>)
    }
}

export default CurrentExercise;
