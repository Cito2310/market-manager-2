import { Request, Response } from "express";
import { CreateCategoryRequest } from "../../../types/Category";
import { Category } from "../categoryModels";

export const createCategory = async( req: Request<{}, {}, CreateCategoryRequest>, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const { name, primary, subcategories } = req.body;

        const newCategory = new Category({ name, primary, subcategories });
        await newCategory.save();

        return res.status(201).json(newCategory);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}