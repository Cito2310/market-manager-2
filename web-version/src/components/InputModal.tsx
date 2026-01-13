import { UseFormRegisterReturn } from "react-hook-form"

interface props {
    register: UseFormRegisterReturn;
    placeholder: string;
    autofocus?: boolean;
    id: string;
}

export const InputModal = ({ register, placeholder, autofocus, id }: props) => {
    return (
        <input 
            className={`
                w-full px-3 py-1.5
                border border-[#c4c4c4] rounded-md
                focus:outline-none focus:border-[#008080]
            `} 
            {...register} 
            placeholder={placeholder}
            autoFocus={autofocus}
            id={id}
        />
    )
}