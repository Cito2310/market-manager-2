interface props {
    // label: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    variant: "A" | "B" | "C";
    icon: "plus" | "trash";
    type?: "button" | "submit";
}

export const IconButton = ({ onClick, disabled, loading, className, variant, type, icon }: props) => {
    const style = {
        A: "aspect-square rounded-md px-3 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg",
        B: "aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg",
        C: "aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9",
    };

    const iconClass = {
        "plus": "fa-solid fa-plus",
        "trash": "fa-solid fa-trash",
    };

    return (
        <button 
            type={type || "button"}
            onClick={onClick} 
            disabled={disabled || loading}
            className={style[variant]}>
                <i className={iconClass[icon]}></i>
        </button>
    )
}