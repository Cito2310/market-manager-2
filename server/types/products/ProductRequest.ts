import { ProductMongo } from "./ProductMongo";

export interface CreateProductRequest extends ProductMongo {
    _id?: unknown
    __V?: unknown
}

export interface UpdateProductRequest extends Partial<ProductMongo> {
    _id?: unknown
    __V?: unknown
}