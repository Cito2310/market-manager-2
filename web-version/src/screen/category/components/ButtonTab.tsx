interface props {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    active?: boolean;
}

export const ButtonTab = ({ label, onClick, disabled, className, active }: props) => {

    const base = "font-medium px-2 py-2 relative transition-base";

    const state = disabled ? 'disabled:opacity-60 cursor-default'
                : active ? `cursor-default after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#008080] after:transition-colors after:duration-300`
                : "hover:text-[#4f4f4f] active:text-[#828282] cursor-pointer";

    const classes = `${base} ${state} ${className || ''}`;


    return (
        <button className={classes} onClick={onClick} disabled={disabled} >
            { label }
        </button>
    )
}