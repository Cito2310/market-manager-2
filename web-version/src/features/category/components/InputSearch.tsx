import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    placeholder?: string;
    autofocus?: boolean;
}

export const InputSearch = ({ register, placeholder, autofocus }: props) => {
    return (
        <input
            {...register}
            id={register.name}
            autoFocus={autofocus}
            className="shadow rounded-md border border-[#c4c4c4] px-3 py-1 transition-base focus:outline-none focus:border-[#008080]"
            placeholder={placeholder}
        />
    )
}