import { CategoryMongo } from "./CategoryMongo"

export interface CreateCategoryRequest extends CategoryMongo {
    _id?: unknown
    __V?: unknown
}

export interface UpdateCategoryRequest extends CategoryMongo {
    _id?: unknown
    __V?: unknown
}