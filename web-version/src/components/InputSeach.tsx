import { useForm, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface props {
    placeholder?: string;
    autofocus?: boolean;
    onSearch: () => void;
    register: UseFormRegisterReturn<any>;
}

export const InputSearch = ({ placeholder, autofocus, onSearch, register }: props) => {

    return (
        <form 
            className="shadow rounded-md border border-[#c4c4c4] flex overflow-hidden" 
            onSubmit={onSearch}
        >
            <input
                {...register}
                autoFocus={autofocus}
                className="px-3 py-1.5 focus:outline-none"
                placeholder={placeholder}
            />
            
            <button className="w-10 bg-white text-[#c0c0c0] transition-base hover:brightness-[.97] active:brightness-[.94] cursor-pointer" type="submit">
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
        </form>
    )
}