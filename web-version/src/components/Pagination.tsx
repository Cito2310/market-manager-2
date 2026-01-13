interface props {
    pagination: {
        nextPage: () => void;
        prevPage: () => void;
        page: number;
        totalPages: number;
        isPrevDisabled: boolean;
        isNextDisabled: boolean;
    }
}

export const Pagination = ({ pagination }: props) => (
    <div className="flex items-center gap-2">
        <button 
            disabled={pagination.isPrevDisabled}
            onClick={pagination.prevPage} 
            className="
            flex items-center justify-center 
            bg-white text-[#c0c0c0] border-[#c4c4c4]
            w-9 h-full rounded-md border shadow
            cursor-pointer transition-base hover:brightness-[.97] active:brightness-[.94]
            disabled:opacity-[.60] disabled:pointer-events-none disabled:shadow-none disabled:cursor-default"
        >
            <i className="fa-solid fa-chevron-left"/>
        </button>
        <span className="mx-2 font-semibold text-[#008080] text-base select-none">
            {pagination.page} <span className="text-[#7e9292]">/ {pagination.totalPages}</span>
        </span>
        <button 
            disabled={pagination.isNextDisabled}
            onClick={pagination.nextPage} 
            className="
            flex items-center justify-center 
            bg-white text-[#c0c0c0] border-[#c4c4c4]
            w-9 h-full rounded-md border shadow
            cursor-pointer transition-base hover:brightness-[.97] active:brightness-[.94]
            disabled:opacity-[.60] disabled:pointer-events-none disabled:shadow-none disabled:cursor-default"
        >
            <i className="fa-solid fa-chevron-right"/>
        </button>
    </div>
)