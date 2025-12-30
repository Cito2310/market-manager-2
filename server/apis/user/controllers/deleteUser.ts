import { Request, Response } from "express";
import { User } from "../userModels";


export const deleteUser = async (req: Request, res: Response) => {
    try {
        // CODIGO AQUI - INICIO
        await User.findByIdAndDelete(req.user._id);
        return res.status(204).json();
        // CODIGO AQUI - FIN

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}