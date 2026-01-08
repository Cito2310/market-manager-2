import { check } from "express-validator";
import { checkFields } from "../../../../middlewares/checkFields";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";

export const createImageMiddlewares = [
    validateJWT,

    check("nameImage").custom(basicValidationsString("nameImage")),
    check("base64").not().isEmpty().withMessage("base64 is required"),
    check("uploadedAt").custom(basicValidationsString("uploadedAt")),
    
    checkFields
]