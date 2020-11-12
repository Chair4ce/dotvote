export default class IdeaModel {
    private _id: number;
    private _name: string;
    private _exerciseId: number;
    private _typename: string

    constructor(id: number, name: string, exerciseId: number, typename: string) {
        this._id = id;
        this._name = name;
        this._exerciseId = exerciseId
        this._typename = typename
    }

    get id(): number {
        return this._id;
    }


    get name(): string {
        return this._name;
    }


    get exerciseId(): number {
        return this._exerciseId;
    }

    get typename(): string {
        return this._typename;
    }
}
