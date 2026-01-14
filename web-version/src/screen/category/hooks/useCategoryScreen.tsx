import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
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


    // Manage sort selected
    const [sortSelected, setSortSelected] = useState<[string, "asc" | "desc"] | null >(null);
    const toggleSortSelected = useCallback( ( field: string ) => {
        setSortSelected( current => {
            if (current === null) return [field, "asc"];
            if (current[0] !== field) return [field, "asc"];
            if (current[1] === "asc") return [field, "desc"];
            if (current[1] === "desc") return null;
            return null;
        })}, []);

    
    // Manage load categories and show data
    const dispatch = useAppDispatch();
    const { data, messageError, status, wasCalledOnce } = useAppSelector( state => state.category );


    // Filter data and sort
    const splitTermSearch = search.split(/\s+/).map( str => RegExp(str, "i") );
    const filteredData = useMemo(() => data
        .filter( category => splitTermSearch.every( regex => regex.test(joinData("category", category)) ) )
        .filter( category => select.primary ? category.primary === select.primary.toLocaleLowerCase() : true )
        .sort( (a, b) => {
            if (!sortSelected) return 0;
            const [field, order] = sortSelected;
            const fieldA = (a as any)[field];
            const fieldB = (b as any)[field];
            if (fieldA < fieldB) return order === "asc" ? -1 : 1;
            if (fieldA > fieldB) return order === "asc" ? 1 : -1;
            return 0;
        })
    , [data, search, select, sortSelected]);



    // RETURN VALUES AND FUNCTIONS
    return {
        sort: {
            sortSelected,
            toggleSortSelected
        },
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