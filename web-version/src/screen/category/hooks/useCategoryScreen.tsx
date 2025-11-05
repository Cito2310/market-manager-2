import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startGetCategories } from "../../../../store/category";
import { useForm } from "react-hook-form";
import { joinData } from "../../../helpers/joinData";


export const useCategoryScreen = () => {
    // Manage open state for categories and creating mode
    const [isOpen, setOpen] = useState<null | "create" | string>(null);

    const toggleCreating = useCallback(() => { setOpen( m => m === "create" ? null : "create" ) }, []);
    const closeAll = useCallback(() => { setOpen(null) }, []);


    // Manage form search and filters select
    const { register, watch } = useForm({ defaultValues: { search: "" } });
    const search = watch("search").trim().toLowerCase();

    const [select, setSelect] = useState<{primary: string}>({primary: ""});

    
    // Manage load categories and show data
    const dispatch = useAppDispatch();
    const { data, messageError, status, wasCalledOnce } = useAppSelector( state => state.category );


    // Filter data and sort
    const splitTermSearch = search.split(/\s+/).map( str => RegExp(str, "i") );
    const filteredData = data // Aqui abajo añadir los flitros y los sorts
        .filter( category => splitTermSearch.every( regex => regex.test(joinData("category", category)) ) )
        .filter( category => select.primary ? category.primary === select.primary.toLocaleLowerCase() : true )


    useEffect( () => {
        if (!wasCalledOnce) dispatch( startGetCategories() );
    }, [wasCalledOnce])


    // RETURN VALUES AND FUNCTIONS
    return {
        open: {
            isOpen,
            setOpen,
            onToggleCreatingMode: toggleCreating,
            onCloseCategory: closeAll
        },
        form: {
            register, select, setSelect
        },
        category: {
            data: filteredData,
            messageError,
            status,
            wasCalledOnce
        }
    }
}