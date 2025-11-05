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
    const { register, watch, getValues, handleSubmit, control } = useForm<FormCategory>({defaultValues: defaultValuesForm});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });
    const appendSubcategory = useCallback(() => { append({ name: "", brands: [""] }) }, [append]);
    const removeSubcategory = useCallback((index: number) => { remove(index) }, [remove]);

    
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
            register, getValues, onCreateCategory
        },
        field: {
            fields, appendSubcategory, removeSubcategory, control
        },
        data: {
            name, primary, messageError, status
        }
    }
}