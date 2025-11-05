import { Dispatch, SetStateAction, useState } from "react";
import { Category } from "../../../../types/category/Category";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { FormCategory } from "../../../../types/category/FormCategory";
import { startCreateCategory, startDeleteCategoryById, startUpdateCategoryById } from "../../../../store/category";

interface props {
    category: Category,
    setOpen: Dispatch<SetStateAction<string | null>>;
}

export const useItemCategory = ({ category, setOpen }: props) => {
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) { setHeight("auto"); setOpen(category._id) }
        if ( height !== 0 ) { setHeight(0); setOpen(prev => prev === category._id ? null : prev) }
    }

    const dispatch = useAppDispatch();
    const { register, watch, getValues, handleSubmit, control } = useForm<FormCategory>({defaultValues: {
        name: category?.name || "",
        primary: category?.primary || "",
        subcategories: category?.subcategories
    }});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });

    const { status } = useAppSelector(state => state.category);

    const name = watch("name");
    const primary = watch("primary");
    const subcategories = watch("subcategories");

    const onEditCategory = handleSubmit(async (data) => {
        try {
            await dispatch(startUpdateCategoryById(category._id, data));
            setOpen(null);
        } catch (error) {}
    });

    const onDeleteCategory = async() => {
        try {
            await dispatch(startDeleteCategoryById(category._id));
            setOpen(null);
        } catch (error) {}
    }

    const appendSubcategory = () => { append({ name: "", brands: [""] }) }

    return {
        loading: status.isLoading,
        toggleDetailsMenu, height,
        register, getValues, 
        onEditCategory, onDeleteCategory,
        name, primary, subcategories,
        fields, appendSubcategory, removeSubcategory: remove, control
    }
}