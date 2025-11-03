import { useFieldArray, UseFieldArrayProps, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startCreateCategory, startGetCategories } from "../../../../store/category";
import { useEffect } from "react";
import { FormCategory } from "../../../../types/category/FormCategory";

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
    const { register, watch, getValues, handleSubmit, control } = useForm<FormCategory>({defaultValues: defaultValuesForm});
    const { status, messageError } = useAppSelector( state => state.category );

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });


    const name = watch("name");
    const primary = watch("primary");

    const onSubmit = handleSubmit(async (data) => {
        try {
            await dispatch(startCreateCategory(data));
            if (status.hasError) return;
            onToggleCreatingMode();
        } catch (error) {}
        console.log(data); //remover
    });

    const appendSubcategory = () => { append({ name: "", brands: [""] }) }

    return {
        register, getValues, onSubmit, messageError, status,
        name, primary,
        fields, appendSubcategory, removeSubcategory: remove, control
    }
}