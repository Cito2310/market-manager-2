import { HydratedDocument, InferSchemaType } from "mongoose";
import { productSchema } from "../apis/product/productModels";

// B A S E
export type ProductType = InferSchemaType<typeof productSchema>;
export type ProductDoc = ProductType & { _id: string };


// R E Q U E S T S
export interface CreateProductRequest {
    options: {
        hasExpirationControl: boolean;
        hasStockControl: boolean;
        isActive: boolean;
    },
    extrainfo: {
        associatedProduct?: string | null;
    },
    info: {
        name: string;
        category: string;
        subcategory: string;
        brand: string;
        barcode: string;
        size: number;
        sizeType: SizeType;
        price: number;
        unitType: UnitType;
        imgId?: string | null;
    },
    expiration: {
        batches: { expirationDate: string; quantity: number; addedAt: Date }[];
        alertExpiration: number;
    },
    stock: {
        currentStock: number;
        mediumStockAlert: number;
        lowStockAlert: number;
        veryLowStockAlert: number;
    }
    _id?: unknown
    __V?: unknown
}


export interface UpdateProductRequest extends Partial<ProductType> {
    _id?: unknown
    __V?: unknown
    product: HydratedDocument<ProductType>
}



// U T I L S
export type SizeType = "kg" | "g" | "oz" | "cm3" | "l" | "ml" | "u" | "cc";

export type UnitType = "unit" | "weight";