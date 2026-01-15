interface props {
    sortSelected: [string, "asc" | "desc"] | null;
    toggleSortSelected: (field: string) => void;
    name: string;
    label: string;
    start?: boolean;
    end?: boolean;
    textCenter?: boolean;
    empty?: boolean;
}

export const TableHeadButton = ({ sortSelected, toggleSortSelected, name, label, start, end, textCenter, empty }: props) => {
    const style = `
        py-1.5 text-[#004C4C] bg-[#CDECEC]
        ${textCenter ? "text-center" : "text-left "}
        ${ start && "rounded-l-lg pl-4" } ${ end && "rounded-r-lg pr-4" }
    `;

    if (empty) return <th className={ style }/>;

    return (
        <th className={ style }>
            <button
                className={`hover:brightness-50 cursor-pointer transition-base ${sortSelected?.[0] === name ? "font-medium" : "font-normal"}`} onClick={() => toggleSortSelected(name)}>
                {label}
                {
                sortSelected?.[0] === name ? 
                    (sortSelected[1] === "asc" 
                        ? <i className="pl-3 fa-solid fa-sort-up text-xs p-1"/> : // Se activa al estar seleccionado y es ascendente
                        <i className="pl-3 fa-solid fa-sort-down text-xs p-1"/> // Se activa al estar seleccionado y es descendente
                    ) : <i className="pl-3 fa-solid fa-sort text-xs p-1"/> // Se activa al no estar seleccionado
                }
            </button>
        </th>
    )
}