import React from 'react';
import IdeaModel from "../../api/idea/IdeaModel";


interface Props {
    idea: IdeaModel;
    onClick: () => void;
    className?: string;
}

export const IdeaCard: React.FC<Props> = props => {
    return (
        <div className="card">
            <h3 className="title">{props.idea.name}</h3>
            <div className="bar">
                <div className="emptybar"/>
                <div className="filledbar"/>
            </div>
            <div className="circle" onClick={props.onClick}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="32" cy="60" r="30"/>
                </svg>
            </div>
        </div>
    )
}

export default IdeaCard;
