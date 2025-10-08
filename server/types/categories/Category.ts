import { CategoryMongo } from "./CategoryMongo";

export interface Category extends CategoryMongo {
    _id: string;
}

export interface Subcategory {
    name: string;
    brands: string[];
}