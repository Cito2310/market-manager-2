import { Request, Response } from "express";
import { Image } from "../imageModels";

export const deleteImageById = async( req: Request, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        let { forceDelete } = req.query as { forceDelete?: boolean };

        const image = await Image.findOne({ _id: id });

        // hard delete - delete real image
        if ( forceDelete) image!.deleteOne();

        // soft delete - set isActive to false
        if ( !forceDelete ) {
            image!.isActive = false;
            await image!.save();
        }

        return res.status(200).json(image);
        // CODIGO AQUI - FIN
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}