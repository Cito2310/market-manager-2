import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useForm } from "react-hook-form";
import { joinData } from "../../../helpers/joinData";
import { useSearch } from "../../../hooks/useSearch";
import { joinArrayData } from "../../../helpers/joinArrayData";


export const useCategoryScreen = () => {
    // Manage open state for categories and creating mode
    const [isOpen, setOpen] = useState<null | "create" | string>(null);

    const toggleCreating = useCallback(() => { setOpen( m => m === "create" ? null : "create" ) }, []);
    const closeAll = useCallback(() => { setOpen(null) }, []);


    // Manage form search and filters select
    const { filterSearch, onSearchSubmit, registerSearch } = useSearch()
    const { register, watch } = useForm({defaultValues: { primary: "" }})
    const watchPrimary = watch("primary");


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
    const filteredData = useMemo(() => 
        filterSearch( data, joinArrayData("category", data) )
        .filter( category => watchPrimary ? category.primary === watchPrimary.toLocaleLowerCase() : true )
        .sort( (a, b) => {
            if (!sortSelected) return 0;
            const [field, order] = sortSelected;
            const fieldA = (a as any)[field];
            const fieldB = (b as any)[field];
            if (fieldA < fieldB) return order === "asc" ? -1 : 1;
            if (fieldA > fieldB) return order === "asc" ? 1 : -1;
            return 0;
        })
    , [data, filterSearch, watchPrimary, sortSelected]);



    // RETURN VALUES AND FUNCTIONS
    return {
        select: {
            selectedPrimary: watchPrimary,
            registerSelect: register,
        },
        search: {
            onSearchSubmit,
            registerSearch
        },
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
        category: {
            data: filteredData,
            messageError,
            status,
            wasCalledOnce
        }
    }
}