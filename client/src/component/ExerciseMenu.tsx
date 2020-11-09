import React from 'react';
import ExerciseModel from "../api/exercise/ExerciseModel";

interface Props {
    list: ExerciseModel[];
    className?: string;
}

const ExerciseMenu: React.FC<Props> = props => {


    return (
        <div data-testid="exercise-menu" className={'exercise_menu'}>
            <div data-testid={"exercise-menu-row"} className={'exercise_menu_row'}>
                <div>
                    <ul>

                        {props.list.map((exercise: any) => (
                            <li>
                                <a href="#" key={exercise.id}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="">
                                        <p className="text-xs">
                                        {exercise.name}
                                        </p>
                                    </span>
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )


}


export default ExerciseMenu;
