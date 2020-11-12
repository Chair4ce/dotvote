import React, {useState} from 'react';
import ExerciseModel from "../api/exercise/ExerciseModel";
import {gql, useMutation} from "@apollo/client";
import {CREATE_EXERCISE} from "../api/exercise/Mutations/CREATE_EXERCISE";
import {DELETE_EXERCISE} from "../api/exercise/Mutations/DELETE_EXERCISE";
import {ReactComponent as MoreDots} from "../icons/16px/3dots.svg";
import {ReactComponent as Trash} from "../icons/16px/Bin.svg";

interface Props {
    list: ExerciseModel[];
    callback: (exercise: ExerciseModel) => void;
    className?: string;
}

const ExerciseMenu: React.FC<Props> = props => {


        const [deleteExercise] = useMutation(DELETE_EXERCISE, {
                update(cache, {data}) {
                    const deletedExerciseId = 'Exercise:' + data.deleteExercise.id.toString();
                     cache.evict({id: deletedExerciseId});
                },
            },
        )

    function AddExercise() {
        const [exerciseInput, setExerciseInput] = useState('');
        const [createExercise, {error: mutationError}] = useMutation(CREATE_EXERCISE, {
            update(cache, {data: {createExercise}}) {
                cache.modify({
                    fields: {
                        exercises(existingExercises = []) {
                            const newExerciseRef = cache.writeFragment(
                                {
                                    data: createExercise,
                                    fragment: gql`
                                        fragment NewExercise on Exercise {
                                            name
                                        }
                                    `,
                                },
                            );
                            return [...existingExercises, newExerciseRef];
                        },
                    },
                },);
            },
        });

        const handleAddExercise = () => {
            if (exerciseInput !== '') {
                createExercise({variables: {text: exerciseInput}})
                setExerciseInput('');
            }
        }

        return (
            <>
                <div>

                <input
                    className="exercise_menu_input_text"
                    value={exerciseInput}
                    onChange={(event) => setExerciseInput(event.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            handleAddExercise();
                        }
                    }}
                    placeholder={'Title'}
                />

                </div>
                <div className="flex justify-center items-center vh-100">
                    <button
                        className="create_exercise_btn relative"
                        disabled={exerciseInput === ''}
                        onClick={handleAddExercise}
                    >
                        <div className="element">
                            <p>Create New Exercise</p>
                        </div>
                    </button>
                </div>
            </>
        );
    }

    function handleClick(exercise: ExerciseModel){
            props.callback(exercise);
    }

    return (
        <div data-testid="exercise-menu" className={'exercise_menu'}>
            <div className={'exercise_menu_input'}>
                {AddExercise()}
            </div>
            <div className="exercise_menu_items">
                <div className="card_stacks">
                    {props.list.map((exercise: ExerciseModel) => (
                        <div data-testid={"exercise-menu-row"} className={'exercise_menu_row'} key={exercise.id}>
                            <div className="card_stack">
                                <button className="btn-exercise h-50 w-120
                                    rounded bg-grey" onClick={() => handleClick(exercise)}  >
                                    <a href="#">
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span className="">
                                        <p className="text-xs">
                                        {exercise.name}
                                        </p>
                                    </span>
                                    </a>
                                </button>
                            </div>
                            <div className="exercise_menu_action_area" >
                                <MoreDots className={"exercise_menu_action_area_dots"}/>
                                <button className="exercise_menu_action_btn_delete" onClick={() => {
                                    deleteExercise({variables: {id: exercise.id.toString()}});
                                }}>
                                <Trash/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExerciseMenu;
