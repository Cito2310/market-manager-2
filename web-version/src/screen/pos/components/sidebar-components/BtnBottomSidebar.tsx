import { JSX } from "react";

interface props {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "danger";
}

export const BtnBottomSidebar = ({ children, onClick, disabled, className, variant = "secondary" }: props) => {

    const base = "rounded-md basis-0 grow px-2 py-6 shadow transition-base";

    const state = disabled
        ? 'disabled:opacity-60 cursor-default'
        : `active:brightness-[.90] active:shadow-inner 
            hover:brightness-95 hover:shadow-none
            cursor-pointer`;

        const variants = {
            "primary": "bg-[#008080] text-white",
            "secondary": "bg-[#d5e0e0] text-black",
            "danger": "bg-[#dd656f] text-black",
        }

    const classes = `${base} ${state} ${variants[variant]} ${className || ''}`;


    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classes}>

            {children}

        </button>
    )
}