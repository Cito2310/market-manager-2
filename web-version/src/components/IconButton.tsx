interface props {
    // label: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    variant: "A" | "B" | "C" | "D";
    icon: "plus" | "trash" | "ellipsis" | "print";
    type?: "button" | "submit";
}

export const IconButton = ({ onClick, disabled, loading, className, variant, type, icon }: props) => {
    const baseSquare = "aspect-square rounded-md transition-base font-medium flex gap-1 justify-center items-center shadow-md "


    const variants = {
        A: baseSquare + "bg-[#7e9292] text-[#ffffff] w-11 text-lg",
        B: baseSquare + "bg-[#ffffff] text-[#7e9292] w-9  text-lg border-1 border-[#7e9292]",
        C: baseSquare + "bg-[#ffffff] text-[#7e9292] w-9  text-sm border-[#7e9292]",
        D: "rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center hover:shadow hover:brightness-90 transition-base"
    };

    const state = disabled || loading
        ? 'disabled:opacity-60 cursor-default'
        : `active:brightness-[.90] 
            hover:brightness-95
            cursor-pointer`; 

    const classes = `${variants[variant]} ${state} ${className || ''}`;

    const iconClass = {
        "plus": "fa-solid fa-plus",
        "trash": "fa-solid fa-trash",
        "ellipsis": "fa-solid fa-ellipsis",
        "print": "fa-solid fa-print"
    };

    return (
        <button 
            type={type || "button"}
            onClick={onClick} 
            disabled={disabled || loading}
            className={classes}>
                {
                    loading
                    ? <i className="fa-solid fa-spinner animate-spin"/>
                    : <i className={iconClass[icon]}/>
                }
        </button>
    )
}