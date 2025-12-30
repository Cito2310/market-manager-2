import { InferSchemaType } from "mongoose";
import { imageSchema } from "../apis/image/imageModels";

// B A S E
export type ImageType = InferSchemaType<typeof imageSchema>;
export type ImageDoc = ImageType & { _id: string };

// R E Q U E S T S
export interface CreateImageRequest extends ImageType {
    _id?: unknown
    __V?: unknown
}

export interface UpdateImageRequest extends Partial<ImageType> {
    _id?: unknown
    __V?: unknown
}