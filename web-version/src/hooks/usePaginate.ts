import { useState, useMemo } from 'react';

export const usePaginate = <T>( data: T[] = [], pageSize: number = 15 ) => {
    const [page, setPage] = useState(1);

    // When detect change in data or pageSize, reset to first page
    useMemo(() => {
        setPage(1);
    }, [data, pageSize]);

    const paginatedData = useMemo(() => {
        return data.reduce((acc, item, index) => {
            if ( index % pageSize === 0 ) acc.push( [] );
            acc[acc.length - 1].push( item );
            return acc;
        }, [] as T[][]);
    },  [data, pageSize]);

    const totalPages = paginatedData.length;

    // Functions to navigate pages
    const nextPage = () => { setPage( prev => Math.min( prev + 1, totalPages ) ) };
    const prevPage = () => { setPage( prev => Math.max( prev - 1, 1 ) ) };

    // Disabled 
    const isPrevDisabled = page === 1;
    const isNextDisabled = page === totalPages;

    return {
        page,
        totalPages,
        paginatedData: paginatedData[page - 1] || [],
        nextPage,
        prevPage,
        isPrevDisabled,
        isNextDisabled,
    }
}