import { ImageMongo } from "./ImageMongo";

export interface Image extends ImageMongo {
    _id: string;
}