import { check } from "express-validator";
import { emailExist, usernameExist } from "../../../../helpers/validationUser";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";
import { checkFields } from "../../../../middlewares/checkFields";

export const createUserMiddlewares = [
    check("password").custom(basicValidationsString("password", { minLength: 8, maxLength: 32 })),
    check("username").custom(basicValidationsString("username", { minLength: 8, maxLength: 32 })),
    check("username", "username invalid, it already exists").trim().custom(usernameExist),

    checkFields
];