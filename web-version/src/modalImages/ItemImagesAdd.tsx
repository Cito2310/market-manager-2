interface props {
    onClick: (e: any) => void
}

export const ItemImagesAdd = ({ onClick }: props) => {
    return (
        <button
            onClick={onClick}
            className="
                flex items-center justify-center aspect-square w-full h-full
                bg-white shadow-md rounded-md
                transition-base cursor-pointer relative overflow-hidden
                hover:bg-[#eafbe7] hover:border-[#008080] active:brightness-95
                group
            "
        >
            <i className="fa-solid fa-plus text-[#008080] text-5xl group-hover:scale-110 transition-transform"></i>
        </button>
    )
}