import { check } from "express-validator";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { checkFields } from "../../../../middlewares/checkFields";
import { uniqueImageId } from "../../../../helpers/validationImage";

export const deleteImageMiddlewares = [
    validateJWT,

    check("id")
        .isMongoId().withMessage("Invalid image ID")
        .not().custom( uniqueImageId ).withMessage("Image with this ID does not exist"),

    check("forceDelete")
        .optional().isBoolean().withMessage("forceDelete must be boolean"),

    checkFields
]