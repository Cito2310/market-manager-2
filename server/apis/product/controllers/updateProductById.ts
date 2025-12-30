import { Request, Response } from "express";
import { UpdateProductRequest } from "../../../types/Product";
import { Product } from "../productModels";
import merge from "lodash.merge";
import { Category } from "../../category/categoryModels";


export const updateProductById = async( req: Request<{}, {}, UpdateProductRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        const { __V, _id, product: oldProduct, ...payload } = req.body;

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ msg: "Producto no encontrado" });

        merge(product, payload);

        // Add historical price if price has changed
        const newPrice = payload.info?.price;
        if (newPrice && newPrice !== oldProduct.info.price) {
            product.extrainfo.priceHistory.push({ date: new Date(), price: newPrice });
        }

        // Change primary category if category has changed
        const newCategory = payload.info?.category;
        if (newCategory && newCategory !== oldProduct.info.category) {
            const category = await Category.findOne({ name: newCategory });
            product.info.primary = category ? category.primary : "NOT EXIST";
        }

        // Save updated product
        const saved = await product.save();
        return res.status(200).json(saved);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}