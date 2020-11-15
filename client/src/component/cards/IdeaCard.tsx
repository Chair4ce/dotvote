import React from 'react';
import IdeaModel from "../../api/idea/IdeaModel";
import {CALLBACK_ENUM} from "../views/CurrentExercise";


interface Props {
    idea: IdeaModel;
    onClick: (name: string, data?: IdeaModel) => void;
    className?: string;
}

export const IdeaCard: React.FC<Props> = props => {

    function handleClick() {
        props.onClick(CALLBACK_ENUM.DELETE_IDEA, props.idea);
    }
    return (
        <div className="card">
            <h3 className="title">{props.idea.name}</h3>
            <div className="bar">
                <div className="emptybar"/>
                <div className="filledbar"/>
            </div>
            <div className="circle" onClick={handleClick}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="32" cy="60" r="30"/>
                </svg>
            </div>
        </div>
    )
}

export default IdeaCard;
