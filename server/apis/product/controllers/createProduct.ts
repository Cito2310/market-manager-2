import { Request, Response } from "express";
import { CreateProductRequest } from "../../../types/Product";
import { Product } from "../productModels";
import { Category } from "../../category/categoryModels";

export const createProduct = async( req: Request<{}, {}, CreateProductRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const { __V, _id, ...newProductData } = req.body;

        const newProduct = new Product( newProductData );

        // Set primary category based on category
        const category = await Category.findOne({ name: newProduct.info.category });
        newProduct.info.primary = category ? category.primary : "NOT EXIST";

        // Add historical price
        newProduct.extrainfo.priceHistory = [{ date: new Date(), price: newProduct.info.price }];

        await newProduct.save();

        return res.status(201).json(newProduct);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}