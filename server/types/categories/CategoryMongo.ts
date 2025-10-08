import { Subcategory } from "./Category";
import { PrimaryCategory } from "./CategoryUtils";

export interface CategoryMongo {
    name: string;
    primary: PrimaryCategory;
    subcategories: Subcategory[];
    isActive: boolean;
}