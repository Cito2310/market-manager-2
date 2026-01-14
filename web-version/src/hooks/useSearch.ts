import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export const useSearch = () => {
    const [currentSearch, setCurrentSearch] = useState("");
    const { register, handleSubmit } = useForm({ defaultValues: { search: "" } });


    const onSearchSubmit = handleSubmit(data => {
        setCurrentSearch(data.search.trim().toLowerCase());
    })
    

    const filterSearch = useCallback( (
        data: any[], 
        dataJoined: string[],
    ) => {
        const splitSearchTerm = currentSearch.split(/\s+/).map( str => RegExp(str, "i") );

        return data.filter( (item, index) => splitSearchTerm.every( regex => regex.test(dataJoined[index]) ) )
    }, [currentSearch] );


    return {
        onSearchSubmit,
        registerSearch: register,
        filterSearch,
    }
}