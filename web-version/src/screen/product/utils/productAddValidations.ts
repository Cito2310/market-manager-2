import { UseFormRegister } from "react-hook-form"
import { FormProduct } from "../../../../types/product/FormProduct"

interface props {
    register: UseFormRegister<FormProduct>;
}

export const productAddValidations = ({ register }: props) => {
    const registerName = register("info.name", {
        required: "El nombre del producto es obligatorio",
        minLength: { value: 2, message: "El nombre del producto debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "El nombre del producto no debe exceder los 100 caracteres" },
    });

    const registerBarcode = register("info.barcode", {
        required: "El código de barras es obligatorio",
        minLength: { value: 2, message: "El nombre del producto debe tener al menos 2 caracteres" },
        maxLength: { value: 20, message: "El código de barras no debe exceder los 20 caracteres" },
    });

    const registerCategory = register("info.category", {
        required: "La categoría es obligatoria",
        minLength: { value: 2, message: "La categoría debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "La categoría no debe exceder los 100 caracteres" },
    })

    const registerSubcategory = register("info.subcategory", {
        required: "La subcategoría es obligatoria",
        minLength: { value: 2, message: "La subcategoría debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "La subcategoría no debe exceder los 100 caracteres" },
    })
    
    const registerBrand = register("info.brand", {
        required: "La marca es obligatoria",
        minLength: { value: 2, message: "La marca debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "La marca no debe exceder los 100 caracteres" },
    })

    const registerSize = register("info.size", {
        required: "El tamaño es obligatorio",
        min: { value: 1, message: "El tamaño debe ser mayor a 0" },
        maxLength: { value: 24, message: "El tamaño no debe exceder los 24 caracteres" },
    })

    const registerSizeType = register("info.sizeType", {
        required: "El tipo de tamaño es obligatorio",
    })

    const registerPrice = register("info.price", {
        required: "El precio es obligatorio",
        min: { value: 1, message: "El precio debe ser mayor a 0" },
        maxLength: { value: 24, message: "El precio no debe exceder los 24 caracteres" },
    })

    const registerUnitType = register("info.unitType", {
        required: "El tipo de unidad es obligatorio",
    })
}