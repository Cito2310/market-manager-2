import { JSX } from "react";

interface props {
    label: string;
    children?: JSX.Element | JSX.Element[] | string;
    className?: string;
}

export const ContainerData = ({ label, children, className }: props) => {
    return (
        <div className={`bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col gap-2 pb-4 ${className}`}>
            <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">{label}</h3>

            {children}
        </div>
    )
}