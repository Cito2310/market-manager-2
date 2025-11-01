export interface Category {
    name: string;
    primary: PrimaryCategory;
    subcategories: Subcategory[];
    isActive: boolean;
    _id: string;
}

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
    "fruteria" | 
    "carniceria" | 
    "otros";
