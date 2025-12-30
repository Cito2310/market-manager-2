import { Request, Response } from "express";
import { Category } from "../categoryModels";

export const deleteCategoryById = async( req: Request, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        let { forceDelete } = req.query as { forceDelete?: boolean };

        const category = await Category.findOne({ _id: id });

        // hard delete - delete real category
        if ( forceDelete) category!.deleteOne();

        // soft delete - set isActive to false
        if ( !forceDelete ) {
            category!.isActive = false;
            await category!.save();
        }

        return res.status(200).json(category);
        // CODIGO AQUI - FIN
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}