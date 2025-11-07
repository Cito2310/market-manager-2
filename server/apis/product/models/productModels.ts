import { model, Schema } from "mongoose";
import { ProductMongo } from "../../../types/products/ProductMongo";


const productSchema = new Schema<ProductMongo>({
    extraInfo: {
        priceHistory: { type: [{ date: String, price: Number }], default: [] },
        costPrice: { type: Number },
    },

    options: {
        hasExpirationControl: { type: Boolean, default: false },
        hasStockControl: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        hasImg: { type: Boolean, default: false },
    },

    info: {
        name: { type: String, required: true },
        barcode: { type: String, required: true },
        category: { type: String, required: true },
        subcategory: { type: String, required: true },
        brand: { type: String, required: true },
        size: { type: Number, required: true },
        sizeType: { type: String, enum: ["kg", "g", "oz", "cm3", "l", "ml", "u", "cc"], required: true },
        price: { type: Number, required: true },
        unitType: { type: String, enum: ["unit", "weight"], required: true },
        imgUrl: { type: String },
        location: { type: String, required: true },
        primary: { type: String, required: true },
        type: { type: String, enum: ["units", "granel"], required: true },
        
    },

    expiration: {
        batches: { type: [{ expirationDate: String, initialQuantity: String, quantity: Number, addedAt: String }], default: [] },
        alertExpiration: { type: Number },
    },

    stock: {
        currentStock: { type: Number },
        rotationType: { type: String, enum: ["high", "low"] },
        mediumStockAlert: { type: Number },
        lowStockAlert: { type: Number },
        veryLowStockAlert: { type: Number },
    }
})

productSchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Product = model("Product", productSchema);