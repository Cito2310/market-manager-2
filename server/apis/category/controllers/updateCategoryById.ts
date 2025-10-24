import { Request, Response } from "express";
import { UpdateCategoryRequest } from "../../../types/categories/CategoryRequest";
import { Category } from "../models/categoryModels";


export const updateCategoryById = async( req: Request<{}, {}, UpdateCategoryRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        const { __V, _id, ...updateCategoryData } = req.body;

        const category = await Category.findOneAndUpdate({ _id: id }, updateCategoryData, { new: true });

        return res.status(200).json(category);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}