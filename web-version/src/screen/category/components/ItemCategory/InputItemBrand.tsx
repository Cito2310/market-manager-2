import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { IconButton } from "./IconButton";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    type?: "password" | "text"; 
    error?: string;
    placeholder?: string;
    autofocus?: boolean;
    removeBrand: () => void;
}

export const InputItemBrand = ({ register, type, error, placeholder, autofocus, removeBrand }: props) => {
    return (
        <div className="flex flex-row w-[calc(50%-0.5rem)] gap-4">
            <IconButton variant="C" icon="trash" onClick={ removeBrand } />
            
            <input 
                {...register}
                id={register.name} 
                type={type} 
                autoFocus={autofocus}
                className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" 
                placeholder={placeholder}
            />
        </div>
    )
}
