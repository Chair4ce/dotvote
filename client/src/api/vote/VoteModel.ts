import PlayerModel from "../login/playerModel";
import IdeaModel from "../idea/IdeaModel";

export default class VoteModel {
    private _id: number;
    private _voteType: string;
    private _ideaId: IdeaModel;
    private _playerId: PlayerModel;
    private _nameType: string


    constructor(id: number, voteType: string, ideaId: IdeaModel, playerId: PlayerModel, nameType: string) {
        this._id = id;
        this._voteType = voteType;
        this._ideaId = ideaId;
        this._playerId = playerId;
        this._nameType = nameType;
    }


    get id(): number {
        return this._id;
    }

    get voteType(): string {
        return this._voteType;
    }

    get ideaId(): IdeaModel {
        return this._ideaId;
    }

    get playerId(): PlayerModel {
        return this._playerId;
    }

    get nameType(): string {
        return this._nameType;
    }
}
