import { randomUUID } from "crypto";

export class UniqueIdType {
    private id: string;

    public get(): string {
        return this.id;
    }

    constructor(id?: string) {
        this.id = id || randomUUID();
    }
}