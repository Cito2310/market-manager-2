import { Request, Response } from "express";
import merge from "lodash.merge";
import { UpdateImageRequest } from "../../../types/image/ImageRequest";
import { Image } from "../models/imageModels";


export const updateImageById = async( req: Request<{}, {}, UpdateImageRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        const { __V, _id, ...payload } = req.body as any;

        const image = await Image.findById(id);
        if (!image) return res.status(404).json({ msg: "Imagen no encontrada" });

        merge(image, payload);

        const saved = await image.save();
        return res.status(200).json(saved);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}