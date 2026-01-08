import { check } from "express-validator";
import { checkFields } from "../../../../middlewares/checkFields";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";
import { uniqueImageId } from "../../../../helpers/validationImage";

export const updateImageMiddlewares = [
    validateJWT,

    check("id")
        .isMongoId().withMessage("Invalid image ID")
        .not().custom( uniqueImageId ).withMessage("Image with this ID does not exist"),

    check("nameImage").optional().custom(basicValidationsString("nameImage")),
    check("base64").optional().not().isEmpty().withMessage("base64 is required"),
    check("uploadedAt").optional().custom(basicValidationsString("uploadedAt")),
    
    checkFields
]