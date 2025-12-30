import { Request, Response } from "express";
import { CreateImageRequest } from "../../../types/Image";
import { Image } from "../imageModels";

export const createImage = async( req: Request<{}, {}, CreateImageRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const { nameImage, base64, uploadedAt } = req.body;

        const newImage = new Image({ nameImage, base64, uploadedAt });
        await newImage.save();

        return res.status(201).json(newImage);
        // CODIGO AQUI - FIN
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}