import { CustomValidator } from "express-validator";
import { Image } from "../apis/image/imageModels";

export type Operator = "<" | "<=" | ">" | ">=" | "==" | "!=";


// I M A G E
export const uniqueImageId: CustomValidator = async ( id: string ) => {
    const image = await Image.findOne({ _id: id });

    if ( image ) throw new Error;

    return true;
}