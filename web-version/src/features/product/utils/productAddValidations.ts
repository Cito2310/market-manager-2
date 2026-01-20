import { UseFormGetValues, UseFormRegister } from "react-hook-form"
import { FormProduct } from "../../../../types/Product";

interface props {
    register: UseFormRegister<FormProduct>;
    getValues: UseFormGetValues<FormProduct>;
}

export const productAddValidations = ({ register, getValues }: props) => {
    // VALIDATIONS FOR INFO
    register("info.name", {
        required: "El nombre del producto es obligatorio",
        minLength: { value: 2, message: "El nombre del producto debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "El nombre del producto no debe exceder los 100 caracteres" },
    });

    register("info.barcode", {
        required: "El código de barras es obligatorio",
        minLength: { value: 2, message: "El nombre del producto debe tener al menos 2 caracteres" },
        maxLength: { value: 20, message: "El código de barras no debe exceder los 20 caracteres" },
    });

    register("info.category", {
        required: "La categoría es obligatoria",
        minLength: { value: 2, message: "La categoría debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "La categoría no debe exceder los 100 caracteres" },
    })

    register("info.subcategory", {
        required: "La subcategoría es obligatoria",
        minLength: { value: 2, message: "La subcategoría debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "La subcategoría no debe exceder los 100 caracteres" },
    })
    
    register("info.brand", {
        required: "La marca es obligatoria",
        minLength: { value: 2, message: "La marca debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "La marca no debe exceder los 100 caracteres" },
    })

    register("info.size", {
        required: "El tamaño es obligatorio",
        min: { value: 1, message: "El tamaño debe ser mayor a 0" },
        maxLength: { value: 24, message: "El tamaño no debe exceder los 24 caracteres" },
    })

    register("info.sizeType", {
        required: "El tipo de tamaño es obligatorio",
    })

    register("info.price", {
        required: "El precio es obligatorio",
        min: { value: 0, message: "El precio debe ser mayor o igual a 0" },
        maxLength: { value: 24, message: "El precio no debe exceder los 24 caracteres" },
    })

    register("info.unitType", {
        required: "El tipo de unidad es obligatorio",
    })



    // VALIDATIONS FOR STOCK
    register("stock.currentStock", {
        validate: {
            validateRequired: value => getValues("options.hasStockControl") ? (value.toString() !== "" || "El stock actual es obligatorio") : true,
            validateNotNegative: value => getValues("options.hasStockControl") ? (value >= 0 || "El stock actual debe ser mayor o igual a 0") : true,
            validateMax: value => getValues("options.hasStockControl") ? (value <= 9999 || "El stock actual no puede ser mayor a 9999") : true,
        }
    })

    register("stock.mediumStockAlert", {
        validate: {
            validateRequired: value => getValues("options.hasStockControl") ? (value.toString() !== "" || "La alerta de stock medio es obligatoria") : true,
            validateNotNegative: value => getValues("options.hasStockControl") ? (value >= 0 || "La alerta de stock medio debe ser mayor o igual a 0") : true,
            validateMax: value => getValues("options.hasStockControl") ? (value <= 9999 || "La alerta de stock medio no puede ser mayor a 9999") : true,
            validateNotLessThanLowStock: value => {
                const lowStockAlert = getValues("stock.lowStockAlert");
                return getValues("options.hasStockControl") ? (Number(value) > Number(lowStockAlert) || "La alerta de stock medio no puede ser menor que la alerta de poco stock") : true;
            },
        }
    })

    register("stock.lowStockAlert", {
        validate: {
            validateRequired: value => getValues("options.hasStockControl") ? (value.toString() !== "" || "La alerta de poco stock es obligatoria") : true,
            validateNotNegative: value => getValues("options.hasStockControl") ? (value >= 0 || "La alerta de poco stock debe ser mayor o igual a 0") : true,
            validateMax: value => getValues("options.hasStockControl") ? (value <= 9999 || "La alerta de poco stock no puede ser mayor a 9999") : true,
            validateNotLessThanVeryLowStock: value => {
                const veryLowStockAlert = getValues("stock.veryLowStockAlert");
                return getValues("options.hasStockControl") ? (Number(value) > Number(veryLowStockAlert) || "La alerta de poco stock no puede ser menor que la alerta de muy poco stock") : true;
            },
        }
    })

    register("stock.veryLowStockAlert", {
        validate: {
            validateRequired: value => getValues("options.hasStockControl") ? (value.toString() !== "" || "La alerta de muy poco stock es obligatoria") : true,
            validateNotNegative: value => getValues("options.hasStockControl") ? (value >= 0 || "La alerta de muy poco stock debe ser mayor o igual a 0") : true,
            validateMax: value => getValues("options.hasStockControl") ? (value <= 9999 || "La alerta de muy poco stock no puede ser mayor a 9999") : true,
        }
    })



    // VALIDATIONS FOR EXPIRATION
    register("expiration.alertExpiration", {
        validate: {
            validateRequired: value => getValues("options.hasExpirationControl") ? (value.toString() !== "" || "La alerta de vencimiento es obligatoria") : true,
            validateNotNegative: value => getValues("options.hasExpirationControl") ? (value >= 0 || "La alerta de vencimiento debe ser mayor o igual a 0") : true,
            validateMax: value => getValues("options.hasExpirationControl") ? (value <= 999 || "La alerta de vencimiento no puede ser mayor a 999") : true,
        }
    })

    register("expiration.batches", {
        validate: {
            validateAtLeastOneBatch: value => getValues("options.hasExpirationControl") ? (value.length > 0 || "Debe agregar al menos un lote") : true,
            validateAllBatchesValid: value => getValues("options.hasExpirationControl") ? (
                value.every(batch => {
                    const validExpirationDate = 
                        typeof batch.expirationDate === "string" && // Check expirationDate is a string
                        batch.expirationDate.length > 0 &&  // Check expirationDate is not empty
                        new Date(batch.expirationDate).toString() !== "Invalid Date"; // Check expirationDate is a valid date
                        
                    const validCurrentQuantity =
                        !isNaN(Number(batch.quantity)) && // Check quantity is a number
                        Number(batch.quantity).toString().length > 0; // Check initialQuantity is not empty
                        Number(batch.quantity) >= 0 && // Check quantity is non-negative
                        Number(batch.quantity) <= 9999; // Check initialQuantity is less than or equal to 9999

                    const validAddedAtDate =
                        typeof batch.addedAt === "string" && // Check addedAt is a string
                        batch.addedAt.length > 0 &&  // Check addedAt is not empty
                        new Date(batch.addedAt).toString() !== "Invalid Date"; // Check addedAt is a valid date
                    
                    return validExpirationDate && validCurrentQuantity && validAddedAtDate;
                }) || "Todos los lotes deben ser validos"
            ) : true,
            validateBatchesNotRepeated: value => getValues("options.hasExpirationControl") ? (
                value.length === new Set(value.map((batch) => batch.expirationDate)).size || "No puede haber lotes con la misma fecha de vencimiento"  
            ) : true,
        }
    })
}