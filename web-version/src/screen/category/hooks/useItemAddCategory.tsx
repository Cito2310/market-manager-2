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

export const useItemAddCategory = () => {
    const dispatch = useAppDispatch();
    const { register, watch, getValues, handleSubmit, control } = useForm<FormCategory>({defaultValues: defaultValuesForm});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });


    const name = watch("name");
    const primary = watch("primary");

    const onSubmit = handleSubmit((data) => {
        console.log(data); //remover
        dispatch(startCreateCategory(data));
    });

    const appendSubcategory = () => { append({ name: "", brands: [""] }) }

    return {
        register, getValues, onSubmit, 
        name, primary,
        fields, appendSubcategory, removeSubcategory: remove, control
    }
}