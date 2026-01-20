import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startCreateCategory } from "../../../../store/category";
import { FormCategory } from "../../../../types/category/FormCategory";
import { useCallback } from "react";

const defaultValuesForm: FormCategory = {
    name: "",
    primary: "bebidas",
    subcategories: [{
        name: "",
        brands: [""]
    }]
}

interface props {
    onToggleCreatingMode: () => void;
}

export const useItemAddCategory = ({ onToggleCreatingMode }: props) => {
    const dispatch = useAppDispatch();
    const { status, messageError } = useAppSelector( state => state.category );


    // Form and field array
    const { register, watch, getValues, handleSubmit, control, formState: { errors } } = useForm<FormCategory>({defaultValues: defaultValuesForm});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });
    const appendSubcategory = useCallback(() => { append({ name: "", brands: [""] }) }, [append]);
    const removeSubcategory = useCallback((index: number) => { remove(index) }, [remove]);

    
    // Validations
    const registerName = register("name", {
        required: "El nombre de la categoria es obligatorio",
        minLength: { value: 2, message: "El nombre de la categoria debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "El nombre de la categoria no debe exceder los 100 caracteres" },
    })

    const registerPrimary = register("primary", {
        required: "La seccion de la categoria es obligatoria",
    })

    const getRegisterSubcategoryName = (index: number) => register(`subcategories.${index}.name` as const, {
        required: "El nombre de la subcategoria es obligatorio",
        minLength: { value: 2, message: "El nombre de la subcategoria debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "El nombre de la subcategoria no debe exceder los 100 caracteres" },
    });


    // Function create category
    const onCreateCategory = handleSubmit(async (data) => {
        try {
            await dispatch(startCreateCategory(data));
            onToggleCreatingMode();
        } catch (error) {}
    });


    // Watched data
    const name = watch("name");
    const primary = watch("primary");


    // RETURN VALUES AND FUNCTIONS
    return {
        form: {
            register, getValues, onCreateCategory, registerName, registerPrimary, getRegisterSubcategoryName
        },
        field: {
            fields, appendSubcategory, removeSubcategory, control
        },
        data: {
            hasError: Object.keys(errors).length > 0 || status.hasError,
            // @ts-ignore
            messageError: errors[Object.keys(errors)[0]]?.message || messageError,
            name, primary, status
        }
    }
}