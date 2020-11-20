import React from 'react';
import IdeaModel from "../../api/idea/IdeaModel";
import {CALLBACK_ENUM} from "../views/CurrentExercise";
import {gql, useMutation} from "@apollo/client";
import {ADD_VOTE} from "../../api/vote/ADD_VOTE";
import PlayerModel from "../../api/login/playerModel";
import VoteModel from "../../api/vote/VoteModel";


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

    const [addVote] = useMutation(ADD_VOTE, {
        update(cache, {data: {addVote}}) {
            cache.modify({
                fields: {
                    votes(existingVotes = []) {
                        const newVoteRef = cache.writeFragment(
                            {
                                data: addVote,
                                fragment: gql`
                                    fragment NewVote on Vote {
                                        voteType
                                        ideaId {
                                            name
                                        }
                                        playerId {
                                            name
                                        }
                                    }
                                `,
                            },
                        );
                        return [...existingVotes, newVoteRef];
                    },
                },
            },);
        },
    });



    const handleAddVote = () => {
        if (props.idea && props.player) {
            addVote({variables: {voteType: "dot", ideaId: props.idea.id, playerId: props.player.id}})
        }
    }
    return (
        <div className="card">
            <h3 className="title">{props.idea.name}</h3>
            <div className="bar">
                <div className="emptybar"/>
                <div className="filledbar"/>
            </div>
            <div className="circle" onClick={handleAddVote}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="32" cy="60" r="30"/>
                </svg>
            </div>
            <button className={'ideaCard_delete_btn'} onClick={handleClick}>
                <div className="element">
                    <p>delete</p>
                </div>

            </button>
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
    )
}

export default IdeaCard;
