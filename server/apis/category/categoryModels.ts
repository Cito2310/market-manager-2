import { model, Schema } from "mongoose";

export const categorySchema = new Schema({
    name: { type: String, required: true },
    primary: { type: String, required: true },
    subcategories: [{ name: String, brands: [String] }, { default: [] }],
    isActive: { type: Boolean, default: true }
});

categorySchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Category = model("Category", categorySchema);