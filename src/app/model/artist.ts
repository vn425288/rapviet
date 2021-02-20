export class Artist {
    public _id: number;
    public name: string;
    public detail: string;
    public avatar: string;

    constructor(_id, name, detail, avatar) {
        this._id = _id;
        this.name = name;
        this.detail = detail;
        this.avatar = avatar;
    }
}
