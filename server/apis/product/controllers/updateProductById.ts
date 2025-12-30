import { Request, Response } from "express";
import { UpdateProductRequest } from "../../../types/Product";
import { Product } from "../productModels";
import merge from "lodash.merge";


export const updateProductById = async( req: Request<{}, {}, UpdateProductRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        const { __V, _id, product: oldProduct, ...payload } = req.body as any;

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ msg: "Producto no encontrado" });

        merge(product, payload);

        const saved = await product.save();
        return res.status(200).json(saved);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}