import { JSX } from "react";

interface props {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "danger";
}

export const ButtonLogin = ({ loading, children, className, disabled, onClick, variant }: props) => {

    const base = "transition-base rounded-md w-full bg-[#008080] text-white px-2 py-2 shadow";

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

    const classes = `${base} ${state} ${variants[variant || "secondary"]} ${className || ''}`;

    return (
        <button
            disabled={loading}
            type="submit"
            aria-busy={loading}
            className={classes}>
                {loading ? "Cargando..." : children}
        </button>
    )
}