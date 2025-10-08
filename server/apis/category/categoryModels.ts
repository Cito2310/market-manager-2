import { model, Schema } from "mongoose";
import { CategoryMongo } from "../../types/categories/CategoryMongo";


const categorySchema = new Schema<CategoryMongo>({
    name: { type: String, required: true },
    primary: { type: String, required: true },
    subcategories: [{ name: String, brands: [String] }],
    isActive: { type: Boolean, default: true }
})

categorySchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Category = model("Category", categorySchema);