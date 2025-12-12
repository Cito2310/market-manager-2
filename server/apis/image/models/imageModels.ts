import { model, Schema } from "mongoose";
import { ImageMongo } from "../../../types/image/ImageMongo";


const imageSchema = new Schema<ImageMongo>({
    nameImage: { type: String, required: true },
    base64: { type: String, required: true },
    uploadedAt: { type: String, required: true },
    isActive: { type: Boolean, default: true }
})

imageSchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Image = model("Image", imageSchema);