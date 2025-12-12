import { ImageMongo } from './ImageMongo';

export interface CreateImageRequest extends ImageMongo {
    _id?: unknown
    __V?: unknown
}

export interface UpdateImageRequest extends ImageMongo {
    _id?: unknown
    __V?: unknown
}