import { simplifyDataForSort } from './../../../helpers/simplifyDataForSort';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startGetProducts } from "../../../../store/productSlice.ts/thunks";
import { joinData } from "../../../helpers/joinData";

export const useProductScreen = () => {
    // Manage open state for products and creating mode
    const [isOpen, setOpen] = useState<null | "create" | string>(null);

    const toggleCreating = useCallback(() => { setOpen( m => m === "create" ? null : "create" ) }, []);
    const closeAll = useCallback(() => { setOpen(null) }, []);


    // Manage form search and filters select
    const { register, watch } = useForm({ defaultValues: { search: "" } });
    const search = watch("search").trim().toLowerCase();

    const [select, setSelect] = useState<{category: string, primary: string}>({category: "", primary: ""});


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
    const splitTermSearch = search.split(/\s+/).map( str => RegExp(str, "i") );
    const filteredData = useMemo(() => data
        .filter( product => splitTermSearch.every( regex => regex.test(joinData("product", product)) ) )
        // .filter( product => select.primary ? product.primary === select.primary.toLocaleLowerCase() : true )
        .filter( product => select.category ? product.info.category === select.category.toLocaleLowerCase() : true )
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
    , [data, search, select, sortSelected]);


    useEffect( () => {
        if (!wasCalledOnce) dispatch( startGetProducts() );
    }, [wasCalledOnce])


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
        product: {
            data: filteredData,
            messageError,
            status,
            wasCalledOnce
        }
    }
}