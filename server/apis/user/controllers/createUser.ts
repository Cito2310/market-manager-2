import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { CreateUserRequest } from "../../../types/User";
import { User } from "../userModels";
import { generatorJWT } from "../../../helpers/generatorJWT";

export const createUser = async (req: Request<{}, {}, CreateUserRequest>, res: Response) => {
    try {
        // CODIGO AQUI - INICIO
        const { _id, ...userData } = req.body;
    
        // encrypt password
        const salt = bcryptjs.genSaltSync();
        userData.password = bcryptjs.hashSync( userData.password , salt)
    
        // create new user and save
        const newUser = new User(userData);
        await newUser.save();
    
        // generator JWT
        const token: string = await generatorJWT({ id: newUser._id });
    
        // return new user
        return res.json({ user: newUser, token });
        // CODIGO AQUI - FIN

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}