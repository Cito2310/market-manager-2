import { useForm, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface props {
    placeholder?: string;
    autofocus?: boolean;
    searchFunction: (value: string) => void;
}

export const InputSearch = ({ placeholder, autofocus, searchFunction }: props) => {
    const { getValues, register, handleSubmit } = useForm({ defaultValues: { search: "" } });

    return (
        <form 
            className="shadow rounded-md border border-[#c4c4c4] flex overflow-hidden" 
            onSubmit={handleSubmit(() => searchFunction( getValues("search") ))}
        >
            <input
                {...register("search")}
                autoFocus={autofocus}
                className="px-3 py-1.5 focus:outline-none"
                placeholder={placeholder}
            />
            
            <button className="w-10 bg-white text-[#c0c0c0] transition-base hover:brightness-[.97] active:brightness-[.94] cursor-pointer" onClick={() => searchFunction(getValues("search"))}>
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
        </form>
    )
}