import { HydratedDocument, InferSchemaType } from "mongoose";
import { productSchema } from "../apis/product/productModels";

// B A S E
export type ProductType = InferSchemaType<typeof productSchema>;
export type ProductDoc = ProductType & { _id: string };



// R E Q U E S T S
type InfoWithoutPrimary = Omit<ProductType["info"], "primary">;
type ExtraInfoWithoutPriceHistory = Omit<ProductType["extrainfo"], "priceHistory">;

export type CreateProductRequest = Omit<ProductType, "info" | "extrainfo"> & {
    info: InfoWithoutPrimary;
    extrainfo: ExtraInfoWithoutPriceHistory;
};


export interface UpdateProductRequest extends Partial<ProductType> {
    _id?: unknown
    __V?: unknown
    product: HydratedDocument<ProductType>
}



// U T I L S
export type SizeType = "kg" | "g" | "oz" | "cm3" | "l" | "ml" | "u" | "cc";

export type UnitType = "unit" | "weight";