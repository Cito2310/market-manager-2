import { Types } from "mongoose";
import { UserMongo } from "./UserMongo";

export interface User extends UserMongo {
    _id: Types.ObjectId
}