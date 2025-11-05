import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Category } from "../../../../types/category/Category";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { FormCategory } from "../../../../types/category/FormCategory";
import { startCreateCategory, startDeleteCategoryById, startUpdateCategoryById } from "../../../../store/category";

interface props {
    category: Category,
    setOpen: Dispatch<SetStateAction<string | null>>;
    isOpen?: boolean;
}

export const useItemCategory = ({ category, setOpen, isOpen }: props) => {
    const dispatch = useAppDispatch();
    const { status, messageError } = useAppSelector(state => state.category);


    // Manage height for details menu
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) { setHeight("auto") ; setOpen(category._id) }
        if ( height !== 0 ) { setHeight(0)      ; setOpen(prev => prev === category._id ? null : prev) }
    }

    useEffect(() => {
    if (typeof isOpen === "boolean") {
        if (isOpen && height === 0) toggleDetailsMenu();
        if (!isOpen && height !== 0) toggleDetailsMenu();
    }
    }, [isOpen]);


    // Form and field array
    const { register, watch, getValues, handleSubmit, control } = useForm<FormCategory>({defaultValues: {
        name: category.name,
        primary: category.primary,
        subcategories: category.subcategories
    }});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });
    const removeSubcategory = (index: number) => { remove(index) };
    const appendSubcategory = () => { append({ name: "", brands: [""] }) };


    // Function edit category and delete category
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
    };


    // Watched data
    const name = watch("name");
    const primary = watch("primary");


    // RETURN VALUES AND FUNCTIONS
    return {
        detailsMenu: {
            height, toggleDetailsMenu
        },
        form: {
            register, getValues, onEditCategory, onDeleteCategory
        },
        field: {
            fields, appendSubcategory, removeSubcategory, control
        },
        data: {
            messageError, status, name, primary
        }
    }
}