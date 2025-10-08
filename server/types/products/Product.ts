import { ProductMongo } from "./ProductMongo";

export interface Product extends ProductMongo {
    _id: string;
}