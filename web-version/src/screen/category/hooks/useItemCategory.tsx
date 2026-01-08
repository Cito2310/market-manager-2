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

    useEffect(() => {
        reset({
            name: category.name,
            primary: category.primary,
            subcategories: category.subcategories
        })
    }, [category])
    

    // Manage height for details menu
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) { setHeight("auto") ; setOpen(category._id) }
        if ( height !== 0 ) { setHeight(0)      ; setOpen(prev => prev === category._id ? null : prev); reset() }
    }

    useEffect(() => {
    if (typeof isOpen === "boolean") {
        if (isOpen && height === 0) toggleDetailsMenu();
        if (!isOpen && height !== 0) toggleDetailsMenu();
    }
    }, [isOpen]);


    // Form and field array
    const { register, watch, getValues, handleSubmit, control, formState: { errors }, reset } = useForm<FormCategory>({defaultValues: {
        name: category.name,
        primary: category.primary,
        subcategories: category.subcategories
    }});

    const { fields, append, remove } = useFieldArray({ control, name: "subcategories" });
    const removeSubcategory = (index: number) => { remove(index) };
    const appendSubcategory = () => { append({ name: "", brands: [""] }) };


    // Validations
    const registerName = register("name", {
        required: "El nombre de la categoria es obligatorio",
        minLength: { value: 2, message: "El nombre de la categoria debe tener al menos 2 caracteres" },
        maxLength: { value: 100, message: "El nombre de la categoria no debe exceder los 100 caracteres" },
    })

    const registerPrimary = register("primary", {
        required: "La seccion de la categoria es obligatoria",
    })


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
            register, getValues, onEditCategory, onDeleteCategory, registerName, registerPrimary
        },
        field: {
            fields, appendSubcategory, removeSubcategory, control
        },
        data: {
            hasError: Object.keys(errors).length > 0 || status.hasError,
            // @ts-ignore
            messageError: errors[Object.keys(errors)[0]]?.message || messageError,
            status, name, primary
        }
    }
}