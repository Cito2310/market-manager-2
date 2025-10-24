import { check } from "express-validator";
import { checkFields } from "../../../../middlewares/checkFields";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";

export const loginUserMiddlewares = [
    check("password").custom(basicValidationsString("password", { maxLength: 100 })),
    check("username").custom(basicValidationsString("username", { maxLength: 100 })),
    
    checkFields
];