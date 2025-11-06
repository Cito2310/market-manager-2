import { useCallback } from "react";
import { useFieldArray } from "react-hook-form";

export const useSubcategory = (index: number, control: any, register: any) => {
    const { fields, append, remove } = useFieldArray({ name: `subcategories.${index}.brands`, control });
    const removeBrand = useCallback((brandIndex: number) => { remove(brandIndex) }, [remove]);
    const appendBrand = useCallback(() => { append("") }, [append]);

    // Validations
    const getRegisterName = useCallback(() => 
        register(`subcategories.${index}.name` as const, {
            required: "El nombre de la subcategoria es obligatorio",
            minLength: { value: 2, message: "El nombre de la subcategoria debe tener al menos 2 caracteres" },
            maxLength: { value: 100, message: "El nombre de la subcategoria no debe exceder los 100 caracteres" },
    }), [register, index]);

    const getRegisterBrand = useCallback((brandIndex: number) => 
        register(`subcategories.${index}.brands.${brandIndex}` as const, {
            required: "La marca es obligatoria",
            minLength: { value: 2, message: "La marca debe tener al menos 2 caracteres" },
            maxLength: { value: 100, message: "La marca no debe exceder los 100 caracteres" },
    }), [register, index]);

    return { 
        field: {
            fieldsBrand: fields,
            appendBrand, removeBrand
        },
        registers: {
            getRegisterName, getRegisterBrand
        }
    };
}