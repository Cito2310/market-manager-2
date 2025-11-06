import { check } from "express-validator";
import { checkFields } from "../../../../middlewares/checkFields";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";

export const createCategoryMiddlewares = [
    validateJWT,

    check("name").custom(basicValidationsString("name")),
    
    check("primary").custom(basicValidationsString("primary")),
    check("primary").trim().isIn([
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

    check("subcategories").isArray().withMessage("subcategories must be an array"),
    check("subcategories.*.name").custom(basicValidationsString("subcategories name")),
    check("subcategories.*.brands").isArray().withMessage("subcategories brands must be an array"),
    check("subcategories.*.brands.*").custom(basicValidationsString("subcategories brands item")),

    checkFields
]