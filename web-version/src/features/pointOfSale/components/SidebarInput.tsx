import { UseFormRegisterReturn } from "react-hook-form";

interface props {
    label: string;
    width?: string
    id: string;
    registerReturn: UseFormRegisterReturn;
    placeholder: string;
}

export const SidebarInput = ({ label, width, id, registerReturn, placeholder }: props) => {
    return (
        <div className={`flex flex-col ${width || "w-full"}`}>
            <label htmlFor={id} className="font-medium px-1">{label}</label>
            <input 
                id={id}
                {...registerReturn}
                placeholder={placeholder}
                className="border-b w-full border-[#d5e0e0] px-1 pt-1 outline-none focus:border-[#008080] transition-base" 
            />
        </div>
    )
}