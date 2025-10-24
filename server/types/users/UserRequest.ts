import { UserMongo } from "./UserMongo"

export interface CreateUserRequest extends UserMongo {
    _id?: unknown
    __V?: unknown
}

export interface LoginUserRequest extends UserMongo {
    username: string,
    password: string,
}