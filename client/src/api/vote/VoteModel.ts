export default class VoteModel {
    private _id: number;
    private _voteType: string;
    private _ideaId: number;
    private _playerId: number;
    private _nameType: string


    constructor(id: number, voteType: string, ideaId: number, playerId: number, nameType: string) {
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

    get ideaId(): number {
        return this._ideaId;
    }

    get playerId(): number {
        return this._playerId;
    }

    get nameType(): string {
        return this._nameType;
    }
}
