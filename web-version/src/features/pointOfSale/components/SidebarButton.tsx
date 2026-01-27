import { JSX } from "react";

interface props {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const SidebarButton = ({ children, onClick, disabled, className }: props) => {

    const base = "rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow transition-base";

    const state = disabled
        ? 'disabled:opacity-60 cursor-default'
        : `active:brightness-[.90] active:shadow-inner 
            hover:brightness-95 hover:shadow-none
            cursor-pointer`;

            
    const classes = `${base} ${state} ${className || ''}`;


    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classes}>

            {children}

        </button>
    )
}