import { model, Schema } from "mongoose";


export const productSchema = new Schema({
    options: {
        type: {
            hasExpirationControl: { type: Boolean, default: false },
            hasStockControl: { type: Boolean, default: false },
            isActive: { type: Boolean, default: true },
        },
        required: true
    },


    extrainfo: {
        type: {
            priceHistory: [{ date: { type: Date, required: true }, price: { type: Number, required: true } }],
            associatedProduct: { type: String, default: null },
        },
        required: true
    },

    info: {
        type: {
            name: { type: String, required: true },
            category: { type: String, required: true },
            subcategory: { type: String, required: true },
            brand: { type: String, required: true },
            barcode: { type: String, required: true },
            size: { type: Number, required: true },
            sizeType: { type: String, enum: ["kg", "g", "oz", "cm3", "l", "ml", "u", "cc"], required: true },
            price: { type: Number, required: true },
            unitType: { type: String, enum: ["unit", "weight"], required: true },
            imgId: { type: String, default: null },
            primary: { type: String, required: true },
        },
        required: true
    },

    expiration: {
        type: {
            batches: { type: [{ expirationDate: String, quantity: Number, addedAt: Date }], default: [] },
            alertExpiration: { type: Number },
        },
        required: true
    },

    stock: {
        type: {
            currentStock: { type: Number },
            mediumStockAlert: { type: Number },
            lowStockAlert: { type: Number },
            veryLowStockAlert: { type: Number },
        },
        required: true
    }
})

productSchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Product = model("Product", productSchema);