import React from 'react';
import IdeaModel from "../../api/idea/IdeaModel";
import PlayerModel from "../../api/login/playerModel";
import VoteModel from "../../api/vote/VoteModel";
import {ReactComponent as MoreDots} from "../../icons/16px/3dots.svg";
import {ReactComponent as Trash} from "../../icons/16px/Bin.svg";
import {gql, useMutation} from "@apollo/client";
import {ADD_VOTE} from "../../api/vote/ADD_VOTE";
import classNames from "classnames";

interface Props {
    idea: IdeaModel;
    deleteIdea: ({}: Object) => void;
    player?: PlayerModel;
    className?: string;
}

export const IdeaCard: React.FC<Props> = props => {

    const [addVote] = useMutation(ADD_VOTE, {
        update(cache, {data: {addVote}}) {
            cache.modify({
                id: props.idea.id.toString(),
                    fields: {
                        ideas(existingVotes = []) {
                            const newVoteRef = cache.writeFragment(
                                {
                                    data: addVote,
                                    fragment: gql`
                                        fragment NewVote on Idea {
                                            id
                                            name
                                            votes {
                                                id
                                                voteType
                                                playerId {
                                                    id
                                                    name
                                                }
                                            }
                                        }
                                    `,
                                },
                            );
                            return [...existingVotes, newVoteRef];
                        },
                    },
                },
            );
        },
    });

    function handleClick() {
        // props.onClick(CALLBACK_ENUM.DELETE_IDEA, props.idea);
        props.deleteIdea({variables: {id: props.idea.id.toString(), exerciseId: props.idea.exerciseId }});
    }

    function handleVote() {
        if (props.player) {
            addVote({variables: {voteType: "dot", ideaId: props.idea.id, playerId: props.player.id}})
        }
    }

    return (
        <div className={'card_container'}>
        <div className="card">
            <h3 className="title">{props.idea.name}</h3>
            <div className="bar">
                <div className="emptybar"/>
                <div className="filledbar"/>
            </div>
            <div className="circle" onClick={handleVote}>
                <div className={'vote_count'}>{props.idea.votes.length}</div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="32" cy="40" r="30"/>
                </svg>
            </div>
            <div className={'vote_container'}>
                { props.idea.votes ? props.idea.votes.filter((m:VoteModel) => m.playerId.id === props.player!.id).map((vote: VoteModel) => {
                   return <div key={vote.id} className={classNames('circle_tiny', 'my_vote')}>
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
