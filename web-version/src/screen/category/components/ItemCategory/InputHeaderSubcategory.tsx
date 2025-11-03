import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { IconButton } from "../../../../components/IconButton";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    type?: "password" | "text"; 
    error?: string;
    placeholder?: string;
    autofocus?: boolean;
    removeSubcategory: () => void;
    appendBrand: () => void;
}

export const InputHeaderSubcategory = ({ register, autofocus, error, placeholder, type, removeSubcategory, appendBrand }: props) => {
    return (
        <div className="flex gap-4">
            <IconButton variant="B" icon="trash" onClick={removeSubcategory} />
            <IconButton variant="B" icon="plus" onClick={appendBrand} />

            <input 
                { ...register }
                id={register.name}
                type={type} 
                autoFocus={autofocus}
                placeholder={placeholder}
                className="border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" 
            />
        </div> 
    )
}