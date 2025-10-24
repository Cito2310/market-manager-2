import { Router } from "express";

import { createUserMiddlewares } from "./middlewares/createUserMiddlewares";
import { loginUserMiddlewares } from "./middlewares/loginUserMiddlewares";
import { createUser } from "../controllers/createUser";
import { validateJWT } from "../../../middlewares/validateJWT";
import { deleteUser } from "../controllers/deleteUser";
import { loginUser } from "../controllers/loginUser";

export const routeUser = Router();


routeUser.post("/register", createUserMiddlewares, createUser);

routeUser.delete("/",[ validateJWT ], deleteUser);

routeUser.get("/login", loginUserMiddlewares, loginUser);