interface props {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "danger";
    type?: "button" | "submit";
}


export const ItemFooterButton = ({ label, onClick, disabled, className, variant, type, loading }: props) => {



    const baseStyle = `
        w-[200px] transition-base cursor-pointer
        rounded-md py-2 px-4 
        shadow-[#747474] flex gap-1 justify-center items-center
        ring-2 ring-inset
        `;

    const activeStyle = `active:brightness-[.90]`;
    const hoverStyle = `hover:brightness-95 hover:shadow-none`;
    const disabledStyle = `disabled:opacity-[.60] disabled:pointer-events-none disabled:shadow-none cursor-default`;
    

    const variants = {
        "primary":      "ring-[#008080] bg-[#008080] text-white",
        "secondary":    "ring-[#008080] bg-[#ffffff] text-[#008080]",
        "danger":       "ring-[#DD656F] bg-[#DD656F] text-[#ffffff]",
    }

    const classes = `${baseStyle} ${disabledStyle} ${activeStyle} ${hoverStyle}  ${variants[variant || "secondary"]} ${className || ''}`;

    return (
        <button disabled={disabled || loading} type={type || "button"} onClick={onClick} className={classes}>
            {
                loading
                ? <>
                    <span className="invisible">I</span>
                    <i className="fa-solid fa-spinner animate-spin text-xl"/>
                    <span className="invisible">I</span>
                </>
                : <>{label}</>
            }
        </button>
    )
}