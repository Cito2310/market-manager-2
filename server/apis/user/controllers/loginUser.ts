import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { LoginUserRequest } from "../../../types/User";
import { User } from "../userModels";
import { generatorJWT } from "../../../helpers/generatorJWT";


export const loginUser = async (req: Request<{}, {}, LoginUserRequest>, res: Response) => {
    try {
        // CODIGO AQUI - INICIO
        const { username, password } = req.body;

        // get user with username
        const user = await User.findOne({ username });
        
        // check user exist
        if ( !user ) return res.status(400).json({ msg: "login invalid" });

        // check password is equal
        const samePassword = bcryptjs.compareSync( password, user.password );
        if ( !samePassword ) return res.status(400).json({ msg: "login invalid" })

        // generate JWT and return
        const token: string = await generatorJWT({ id: user._id });
        return res.status(200).json({ token });
        // CODIGO AQUI - FIN

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}