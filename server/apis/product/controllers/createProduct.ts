import { Request, Response } from "express";
import { CreateProductRequest } from "../../../types/Product";
import { Product } from "../productModels";

export const createProduct = async( req: Request<{}, {}, CreateProductRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const { __V, _id, ...newProductData } = req.body;

        const newProduct = new Product( newProductData );
        await newProduct.save();

        return res.status(201).json(newProduct);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}