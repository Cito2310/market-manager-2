import { model, Schema } from "mongoose";

export const categorySchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    primary: { type: String, required: true, lowercase: true },
    subcategories: [{ 
        name: { type: String, required: true, lowercase: true }, 
        brands: [{ type: String, lowercase: true }]
    }, { default: [] }],
    isActive: { type: Boolean, default: true }
});

categorySchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Category = model("Category", categorySchema);