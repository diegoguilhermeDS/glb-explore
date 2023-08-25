import { Exclude } from "class-transformer";
import { randomUUID } from "crypto";

export class User {
    readonly id: string;
    name: string;
    email: string;

    @Exclude()
    password: string;
    avatar_url: string;

    constructor () {
        this.id = randomUUID();
    }
}
