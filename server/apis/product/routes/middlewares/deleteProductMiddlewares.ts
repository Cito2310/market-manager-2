import { check } from "express-validator";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { checkFields } from "../../../../middlewares/checkFields";
import { uniqueId } from "../../../../helpers/validationProduct";

export const deleteProductMiddlewares = [
    validateJWT,

    check("id")
        .isMongoId().withMessage("Invalid product ID")
        .not().custom( uniqueId ).withMessage("Product with this ID does not exist"),

    checkFields
]