import React, {useState} from 'react';
import ExerciseModel from "../api/exercise/ExerciseModel";
import {gql, useMutation} from "@apollo/client";
import {CREATE_EXERCISE} from "../api/exercise/Mutations/CREATE_EXERCISE";

interface Props {
    list: ExerciseModel[];
    className?: string;
}

const ExerciseMenu: React.FC<Props> = props => {



    function handleClick() {
        console.log("click!!!")
    }



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
                                        fragment NewExercise on Exercise{
                                            id
                                            name
                                        }`,
                                },
                            );
                            return [...existingExercises, newExerciseRef];
                        },
                    },
                },);
            },
        });

        const handleAddExercise = () => {
            if ( exerciseInput !== '') {
                createExercise({variables: {text: exerciseInput}}).then(r => setExerciseInput(''));
            }
        }

        return (
            <div>
                <input
                    value={exerciseInput}
                    onChange={(event) => setExerciseInput(event.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            handleAddExercise();
                        }
                    }}
                    placeholder={'New Exercise text'}
                />
                <button
                    disabled={exerciseInput === ''}
                    onClick={handleAddExercise}
                >
                    add
                </button>
            </div>
        );
    }


    return (
        <div data-testid="exercise-menu" className={'exercise_menu'}>
            {AddExercise()}
            <>
                <ul>
                    {props.list.map((exercise: any) => (
                        <div data-testid={"exercise-menu-row"} className={'exercise_menu_row'} key={exercise.id}>
                            <li className="h-50 w-120
                                    rounded bg-grey">
                                <button className="btn-exercise h-50 w-120
                                    rounded bg-grey" onClick={handleClick}>
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
                            </li>
                        </div>
                    ))}
                </ul>
            </>
        </div>
    )


}


export default ExerciseMenu;
