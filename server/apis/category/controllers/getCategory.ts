import { Request, Response } from "express";
import { Category } from "../models/categoryModels";

export const getCategory = async( req: Request, res: Response ) => {
    try {
        // CODIGO AQUI - INICIO
        const categories = await Category.find();

        return res.status(200).json(categories);
        // CODIGO AQUI - FIN

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}