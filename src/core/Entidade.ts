import { randomUUID } from "crypto";
import { UniqueIdType } from "./utils/unique-id-type";

export class Entidade<T> {
    private id: UniqueIdType;
    protected props: T;

    public getid(): UniqueIdType {
        return this.id;
    }

    public getProps(): T {
        return this.props;
    }

    public setProps(props: T): void {
        this.props = props;
    }

    constructor(props: T, id: UniqueIdType) {
        this.props = props;
        this.id = id
    }

}