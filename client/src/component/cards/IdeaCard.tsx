import React from 'react';
import IdeaModel from "../../api/idea/IdeaModel";
import {CALLBACK_ENUM} from "../views/CurrentExercise";
import PlayerModel from "../../api/login/playerModel";
import VoteModel from "../../api/vote/VoteModel";
import {ReactComponent as MoreDots} from "../../icons/16px/3dots.svg";
import {ReactComponent as Trash} from "../../icons/16px/Bin.svg";

interface Props {
    idea: IdeaModel;
    onClick: (name: string, data?: IdeaModel) => void;
    player?: PlayerModel;
    className?: string;
}

export const IdeaCard: React.FC<Props> = props => {

    function handleClick() {
        props.onClick(CALLBACK_ENUM.DELETE_IDEA, props.idea);
    }



    return (
        <div className={'card_container'}>
        <div className="card">
            <h3 className="title">{props.idea.name}</h3>
            <div className="bar">
                <div className="emptybar"/>
                <div className="filledbar"/>
            </div>
            <div className="circle" onClick={() => props.onClick(CALLBACK_ENUM.VOTE_IDEA, props.idea)}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="32" cy="60" r="30"/>
                </svg>
            </div>
            {/*<button className={'ideaCard_delete_btn'} onClick={handleClick}>*/}
            {/*    <div className="element">*/}
            {/*        <p>delete</p>*/}
            {/*    </div>*/}

            {/*</button>*/}
            <div className={'vote_container'}>


                { props.idea.votes ? props.idea.votes.map((vote: VoteModel) => {
                   return <div key={vote.id} className="circle_tiny">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="4" cy="4" r="4"/>
                    </svg>
                </div>}
                ) : null}

            </div>
        </div>
            <div className="exercise_menu_action_area">
                <MoreDots className={"exercise_menu_action_area_dots"}/>
                <button className="exercise_menu_action_btn_delete" onClick={handleClick}>
                    <Trash/>
                </button>
            </div>
            </div>
    )
}

export default IdeaCard;
