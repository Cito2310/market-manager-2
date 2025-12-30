import { InferSchemaType } from "mongoose";
import { categorySchema } from "../apis/category/categoryModels";

// B A S E
export type CategoryType = InferSchemaType<typeof categorySchema>;
export type CategoryDoc = CategoryType & { _id: string };



// R E Q U E S T S
export interface CreateCategoryRequest extends CategoryType {
    _id?: unknown
    __V?: unknown
}

export interface UpdateCategoryRequest extends Partial<CategoryType> {
    _id?: unknown
    __V?: unknown
}



// U T I L S
export interface Subcategory {
    name: string;
    brands: string[];
}

export type PrimaryCategory = 
    "almacen" | 
    "limpieza" | 
    "perfumeria" | 
    "lacteos" | 
    "bebidas" | 
    "congelados" |
    "bazar" | 
    "polleria" | 
    "fiambreria" | 
    "panaderia" | 
    "verduleria" | 
    "carniceria" | 
    "otros";


