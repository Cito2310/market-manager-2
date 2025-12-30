import { Request, Response } from "express";
import { UpdateCategoryRequest } from "../../../types/categories/CategoryRequest";
import { Category } from "../categoryModels";
import merge from "lodash.merge";


export const updateCategoryById = async( req: Request<{}, {}, UpdateCategoryRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        let { id } = req.params as { id: string };
        const { __V, _id, ...payload } = req.body as any;

        const category = await Category.findById(id);
        if (!category) return res.status(404).json({ msg: "Categoría no encontrada" });

        merge(category, payload);

        const saved = await category.save();
        return res.status(200).json(saved);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}