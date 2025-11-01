import { useState } from "react";
import { Category } from "../../../../types/category/Category";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../store/store";
import { FormCategory } from "../../../../types/category/FormCategory";
import { startCreateCategory } from "../../../../store/category";

interface props {
    category: Category
}

export const useItemCategory = ({ category }: props) => {
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) setHeight("auto");
        if ( height !== 0 ) setHeight(0);
    }

    console.log(category);

    const dispatch = useAppDispatch();
    const { register, watch, getValues, handleSubmit, control } = useForm<FormCategory>({defaultValues: {
        name: category?.name || "",
        primary: category?.primary || "",
        subcategories: category?.subcategories
    }});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });


    const name = watch("name");
    const primary = watch("primary");
    const subcategories = watch("subcategories");

    const onSubmit = handleSubmit((data) => {
        console.log(data); //remover
        dispatch(startCreateCategory(data));
    });

    const appendSubcategory = () => { append({ name: "", brands: [""] }) }

    return {
        toggleDetailsMenu, height,
        register, getValues, onSubmit, 
        name, primary, subcategories,
        fields, appendSubcategory, removeSubcategory: remove, control
    }
}