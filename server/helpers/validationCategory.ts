import { CustomValidator } from "express-validator";
import { Category } from "../apis/category/categoryModels";

export type Operator = "<" | "<=" | ">" | ">=" | "==" | "!=";


// C A T E G O R Y
export const uniqueCategoryId: CustomValidator = async ( id: string ) => {
    const category = await Category.findOne({ _id: id });

    if ( category ) throw new Error;

    return true;
}