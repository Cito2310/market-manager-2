import { JSX } from "react";

interface props {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "danger";
}

export const SidebarButtonBottom = ({ children, onClick, disabled, className, variant = "secondary" }: props) => {
    const baseStyle = `
        rounded-md basis-0 grow px-2 py-6 shadow transition-base
        disabled:opacity-60 disabled:cursor-default disabled:pointer-events-none
        active:brightness-[.90] active:shadow-inner 
        hover:brightness-95 hover:shadow-none hover:cursor-pointer
    `;

    const variants = {
        "primary": "bg-[#008080] text-white",
        "secondary": "bg-[#d5e0e0] text-black",
        "danger": "bg-[#dd656f] text-white",
    }

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className || ''}`}>

            {children}

        </button>
    )
}