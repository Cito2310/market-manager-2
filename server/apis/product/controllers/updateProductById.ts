import { Request, Response } from "express";
import { UpdateProductRequest } from "../../../types/products/ProductRequest";
import { Product } from "../models/productModels";


export const updateProductById = async( req: Request<{}, {}, UpdateProductRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        const { __V, _id, product: oldProduct, ...updateProductData } = req.body;

        const product = await Product.findOneAndUpdate({ _id: id }, updateProductData, { new: true });

        return res.status(200).json(product);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}