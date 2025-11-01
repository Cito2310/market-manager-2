import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    type?: "password" | "text"; 
    error?: string;
    placeholder?: string;
    autofocus?: boolean;
}


export const InputNameCategory = ({ register, error, placeholder, autofocus }: props) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium px-1">Nombre de la categoria</label>
            <input {...register} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" placeholder={placeholder} autoFocus={autofocus} />
        </div>
    )
}