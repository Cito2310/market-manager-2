import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startGetCategories } from "../../../../store/category";
import { useForm } from "react-hook-form";


export const useCategoryScreen = () => {
    const [isCreatingCategory, setIsCreatingCategory] = useState<boolean>(false);
    const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

    const onSetCategoryId = ( id: string ) => setOpenCategoryId(openCategoryId === id ? null : id);
    const onToggleCreatingMode = () => { setIsCreatingCategory(!isCreatingCategory); setOpenCategoryId(null); };
    const onCloseCategory = () => setOpenCategoryId(null);

    const { register, handleSubmit } = useForm({ defaultValues: { search: "" } });



    const dispatch = useAppDispatch();
    const { data, messageError, status, wasCalledOnce } = useAppSelector( state => state.category );

    useEffect(() => {
        dispatch( startGetCategories() )
    }, []);

    return {
        openCategoryId, onSetCategoryId, onToggleCreatingMode, isCreatingCategory, onCloseCategory,
        register,
        handleSubmit,
        data,
        messageError,
        status,
        wasCalledOnce
    }
}