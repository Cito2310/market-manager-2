import { Request, Response } from "express";
import { Product } from "../productModels";

export const deleteProductById = async( req: Request, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        let { forceDelete } = req.query as { forceDelete?: boolean };

        const product = await Product.findOne({ _id: id });

        // hard delete - delete real product
        if ( forceDelete) product!.deleteOne();

        // soft delete - set isActive to false
        if ( !forceDelete ) {
            product!.options.isActive = false;
            await product!.save();
        }

        return res.status(200).json(product);
        // CODIGO AQUI - FIN
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}