import { check } from "express-validator";
import { checkFields } from "../../../../middlewares/checkFields";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";

export const updateCategoryMiddlewares = [
    validateJWT,

    check("name").optional().custom(basicValidationsString("name")),
    
    check("primary").optional().custom(basicValidationsString("primary")),
    check("primary").optional().trim().isIn([
        "almacen",
        "limpieza",
        "perfumeria",
        "lacteos",
        "bebidas",
        "congelados",
        "bazar",
        "polleria",
        "fiambreria",
        "panaderia",
        "verduleria",
        "carniceria",
        "otros"
    ]).withMessage("primary category invalid"),

    check("subcategories").optional().isArray().withMessage("subcategories must be an array"),
    check("subcategories.*.name").optional().custom(basicValidationsString("subcategories name")),
    check("subcategories.*.brands").optional().isArray().withMessage("subcategories brands must be an array"),
    check("subcategories.*.brands.*").optional().custom(basicValidationsString("subcategories brands item")),

    checkFields
]