import { simplifyDataForSort } from './../../../helpers/simplifyDataForSort';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { joinData } from "../../../helpers/joinData";
import { useSearch } from '../../../hooks/useSearch';
import { joinArrayData } from '../../../helpers/joinArrayData';

export const useProductScreen = () => {
    // Manage open state for products and creating mode
    const [isOpen, setOpen] = useState<null | "create" | string>(null);

    const toggleCreating = useCallback(() => { setOpen( m => m === "create" ? null : "create" ) }, []);
    const closeAll = useCallback(() => { setOpen(null) }, []);


    // Manage form search and filters select
    const { filterSearch, onSearchSubmit, registerSearch } = useSearch()
    const { register, watch } = useForm({defaultValues: { primary: "", category: "" }})
    const watchPrimary = watch("primary");
    const watchCategory = watch("category");


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
    const { data, messageError, status, wasCalledOnce } = useAppSelector( state => state.product );


    // Filter data and sort
    const filteredData = useMemo(() =>
        filterSearch( data, joinArrayData("product", data) )
        .filter( product => watchPrimary ? product.info.primary === watchPrimary.toLocaleLowerCase() : true )
        .filter( product => watchCategory ? product.info.category === watchCategory.toLocaleLowerCase() : true )
        .sort( (a, b) => {
            if (!sortSelected) return 0;
            const simplifiedA = simplifyDataForSort("product", a);
            const simplifiedB = simplifyDataForSort("product", b);

            const [field, order] = sortSelected;
            const fieldA = (simplifiedA as any)[field];
            const fieldB = (simplifiedB as any)[field];
            console.log(sortSelected,a ,b, fieldA, fieldB);
            if (fieldA < fieldB) return order === "asc" ? -1 : 1;
            if (fieldA > fieldB) return order === "asc" ? 1 : -1;
            return 0;
        })
    , [data, filterSearch, watchPrimary, watchCategory, sortSelected]);


    // RETURN VALUES AND FUNCTIONS
    return {
        search: {
            onSearchSubmit,
            registerSearch
        },
        select: {
            watchPrimary,
            watchCategory,
            registerSelect: register,
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
        product: {
            data: filteredData,
            messageError,
            status,
            wasCalledOnce
        }
    }
}