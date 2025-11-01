import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startGetCategories } from "../../../../store/category";

export const useCategoryScreen = () => {
    const dispatch = useAppDispatch();
    const { data, messageError, status, wasCalledOnce } = useAppSelector( state => state.category );

    useEffect(() => {
        dispatch( startGetCategories() )
    }, []);

    return {
        data,
        messageError,
        status,
        wasCalledOnce
    }
}