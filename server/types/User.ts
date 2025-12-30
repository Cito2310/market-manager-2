import { InferSchemaType, Types } from "mongoose";
import { userSchema } from "../apis/user/userModels";

// B A S E
export type UserType = InferSchemaType<typeof userSchema>;
export type UserDoc = UserType & { _id: Types.ObjectId };

// R E Q U E S T S
export interface CreateUserRequest extends UserType {
    _id?: unknown
    __V?: unknown
}

export interface UpdateUserRequest extends Partial<UserType> {
    _id?: unknown
    __V?: unknown
}

export interface LoginUserRequest {
    username: string;
    password: string;
}