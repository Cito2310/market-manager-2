import { Request, Response } from "express";
import { Image } from "../imageModels";

export const getImages = async( req: Request, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const images = await Image.find();

        return res.status(200).json(images);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}