import { check } from "express-validator";
import { checkFields } from "../../../../middlewares/checkFields";
import { validateJWT } from "../../../../middlewares/validateJWT";
import { compareWithValid, dateValid, uniqueId } from "../../../../helpers/validationProduct";
import { basicValidationsString } from "../../../../helpers/basicValidationsString";
import { attachProduct } from "./attachProduct";

export const updateProductMiddlewares = [
    validateJWT,

    // VALIDACIONES ID - AÑADIR PRODUCTO EXISTENTE
    check("id")
        .isMongoId().withMessage("Invalid product ID")
        .custom(uniqueId).withMessage("Product with this ID does not exist"),

    attachProduct,

    // VALIDACIONES INFO
    check("info.name").optional().custom(basicValidationsString("info.name")),

    check("info.barcode").optional().custom(basicValidationsString("info.barcode", { maxLength: 20 })),

    check("info.category").optional().custom(basicValidationsString("info.category")),

    check("info.subcategory").optional().custom(basicValidationsString("info.subcategory")),

    check("info.brand").optional().custom(basicValidationsString("info.brand")),

    check("info.size").optional().isNumeric().withMessage("size is required"),
    check("info.size").optional().trim().isLength({max: 24}).withMessage("size length can only be less than 24 characters"),

    check("info.sizeType").optional().isString().trim().notEmpty().withMessage("sizeType is required"),
    check("info.sizeType").optional().trim().isIn(["kg", "g", "oz", "cm3", "l", "ml", "u", "cc"]).withMessage("sizeType invalid [kg, g, oz, cm3, l, ml, cc, u]"),

    check("info.price").optional().isNumeric().withMessage("price is required"),
    check("info.price").optional().trim().isLength({max: 24}).withMessage("price length can only be less than 24 characters"),

    check("info.unitType").optional().isString().trim().notEmpty().withMessage("unitType is required"),
    check("info.unitType").optional().trim().isIn(["unit", "weight"]).withMessage("unitType invalid [ weight | unit ]"),

    check("info.imgUrl").optional().trim().isURL().withMessage("imgUrl must be a valid URL"),
    check("info.imgUrl").optional().trim().isLength({max: 2048}).withMessage("imgUrl max length 2048"),

    check("info.location").optional().custom(basicValidationsString("info.location")),

    check("info.primary").optional().custom(basicValidationsString("info.primary")),



    // VALIDACIONES OPTIONS
    check("options.hasExpirationControl").optional().isBoolean().withMessage("hasExpirationControl must be boolean"),
    check("options.hasStockControl").optional().isBoolean().withMessage("hasStockControl must be boolean"),
    check("options.isActive").optional().isBoolean().withMessage("isActive must be boolean"),
    check("options.hasImg").optional().isBoolean().withMessage("hasImg must be boolean"),



    // VALIDACIONES EXTRA INFO
    check("extraInfo.costPrice").optional().isNumeric().withMessage("costPrice must be number"),
    check("extraInfo.costPrice").optional().isLength({max: 24}).withMessage("costPrice length can only be less than 24 characters"),

    check("extraInfo.priceHistory").optional().isArray().withMessage("priceHistory must be array"),
    check("extraInfo.priceHistory.*.date").optional().isString().withMessage("priceHistory date must be string"),
    check("extraInfo.priceHistory.*.date").optional().custom(dateValid).withMessage("date not valid"),
    check("extraInfo.priceHistory.*.price").optional().isNumeric().withMessage("priceHistory price must be number"),
    check("extraInfo.priceHistory.*.price").optional().isLength({max: 24}).withMessage("priceHistory price length can only be less than 24 characters"),



    // VALIDACIONES EXPIRATION
    check("expiration.batches")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasExpirationControl))
      .exists().withMessage("batches is required when hasExpirationControl is true")
      .isArray().withMessage("batches must be array"),

    check("expiration.batches.*.expirationDate")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasExpirationControl))
      .exists().withMessage("batches expirationDate is required")
      .custom(dateValid).withMessage("expirationDate not valid"),

    check("expiration.batches.*.initialQuantity")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasExpirationControl))
      .exists().withMessage("batches initialQuantity is required")
      .isNumeric().withMessage("batches initialQuantity must be number")
      .isLength({ max: 24 }).withMessage("batches initialQuantity length can only be less than 24 characters"),

    check("expiration.batches.*.quantity")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasExpirationControl))
      .exists().withMessage("batches quantity is required")
      .isNumeric().withMessage("batches quantity must be number")
      .isLength({ max: 24 }).withMessage("batches quantity length can only be less than 24 characters"),

    check("expiration.batches.*.addedAt")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasExpirationControl))
      .exists().withMessage("batches addedAt is required")
      .custom(dateValid).withMessage("addedAt date not valid"),

    check("expiration.alertExpiration")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasExpirationControl))
      .optional()
      .isNumeric().withMessage("alertExpiration must be number")
      .isLength({ max: 24 }).withMessage("alertExpiration length can only be less than 24 characters"),




    // VALIDACIONES STOCK
    check("stock.currentStock")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasStockControl))
      .exists().withMessage("currentStock is required when hasStockControl is true")
      .isNumeric().withMessage("currentStock must be number")
      .isLength({ max: 24 }).withMessage("currentStock length can only be less than 24 characters"),

    check("stock.rotationType")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasStockControl))
      .exists().withMessage("rotationType is required when hasStockControl is true")
      .isString().withMessage("rotationType must be string")
      .isIn(["high", "low"]).withMessage("rotationType invalid [ high | low ]"),

    check("stock.mediumStockAlert")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasStockControl))
      .exists().withMessage("mediumStockAlert is required when hasStockControl is true")
      .isNumeric().withMessage("mediumStockAlert must be number")
      .isLength({ max: 24 }).withMessage("mediumStockAlert length can only be less than 24 characters"),

    check("stock.lowStockAlert")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasStockControl))
      .exists().withMessage("lowStockAlert is required when hasStockControl is true")
      .isNumeric().withMessage("lowStockAlert must be number")
      .isLength({ max: 24 }).withMessage("lowStockAlert length can only be less than 24 characters")
      .custom( compareWithValid("<", "product.stock.mediumStockAlert") ).withMessage("lowStockAlert must be less than mediumStockAlert"),

    check("stock.veryLowStockAlert")
      .if((_: any, { req }: any) => Boolean(req.body?.options?.hasStockControl))
      .exists().withMessage("veryLowStockAlert is required when hasStockControl is true")
      .isNumeric().withMessage("veryLowStockAlert must be number")
      .isLength({ max: 24 }).withMessage("veryLowStockAlert length can only be less than 24 characters")
      .custom( compareWithValid("<", "product.stock.lowStockAlert") ).withMessage("veryLowStockAlert must be less than lowStockAlert"),



    checkFields
]