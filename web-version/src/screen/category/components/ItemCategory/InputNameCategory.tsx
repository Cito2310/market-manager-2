import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    type?: "password" | "text"; 
    error?: string;
    placeholder?: string;
    autofocus?: boolean;
    forHtml: string;
}


export const InputNameCategory = ({ register, error, placeholder, autofocus, forHtml }: props) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={forHtml} className="text-sm font-medium px-1">Nombre de la categoria</label>
            <input autoComplete="false" id={forHtml} {...register} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" placeholder={placeholder} autoFocus={autofocus} />
        </div>
    )
}