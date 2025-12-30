import { Request, Response } from "express";
import { Product } from "../productModels";

export const getProduct = async( req: Request, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const products = await Product.find()

        return res.status(200).json(products);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}