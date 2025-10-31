import { JSX } from "react";

interface props {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    active?: boolean;
    label: string;
}


export const ButtonTopbar = ({ label, onClick, disabled, className, active }: props) => {
const base = "h-full px-4 bg-inherit w-[150px]";

    const state = disabled
        ? 'disabled:opacity-60 cursor-default'
        : active ? 'brightness-[.90] cursor-default'
        : `active:brightness-[.90] 
            hover:brightness-95
            cursor-pointer`;

    const classes = `${base} ${state} ${className || ''}`;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>{ label }</button>
    )
}