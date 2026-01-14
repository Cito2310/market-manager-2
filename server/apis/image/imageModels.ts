import { model, Schema } from "mongoose";


export const imageSchema = new Schema({
    nameImage: { type: String, required: true, lowercase: true },
    base64: { type: String, required: true },
    uploadedAt: { type: String, required: true },
    isActive: { type: Boolean, default: true }
})

imageSchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Image = model("Image", imageSchema);