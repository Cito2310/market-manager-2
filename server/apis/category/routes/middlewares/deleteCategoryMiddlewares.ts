import { check } from "express-validator";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { checkFields } from "../../../../middlewares/checkFields";
import { uniqueCategoryId } from "../../../../helpers/validationCategory";

export const deleteCategoryMiddlewares = [
    validateJWT,

    check("id")
        .isMongoId().withMessage("Invalid category ID")
        .not().custom( uniqueCategoryId ).withMessage("Category with this ID does not exist"),

    check("forceDelete")
        .optional().isBoolean().withMessage("forceDelete must be boolean"),

    checkFields
]