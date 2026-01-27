import { JSX } from "react";

interface props {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const SidebarButton = ({ children, onClick, disabled, className }: props) => {
    const baseStyle = `
        bg-[#CDECEC] text-[#004C4C]
        rounded-md basis-0 grow px-4 py-2 shadow transition-base
        disabled:opacity-60 disabled:cursor-default disabled:pointer-events-none
        active:brightness-[.90] active:shadow-inner 
        hover:brightness-95 hover:shadow-none hover:cursor-pointer
    `;
    
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={baseStyle + (className ? ` ${className}` : '')}>

            {children}

        </button>
    )
}