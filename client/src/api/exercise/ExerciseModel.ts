export default class ExerciseModel {
    private _id: number;
    private _name: string;
    private _typename: string

    constructor(id: number, name: string, typename: string) {
        this._id = id;
        this._name = name;
        this._typename = typename
    }

    get id(): number {
        return this._id;
    }


    get name(): string {
        return this._name;
    }

    get typename(): string {
        return this._typename;
    }
}
