import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form/dist/types/form";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    label: string;
    type: "password" | "text"; 
    error?: string;
    placeholder?: string;
    autofocus?: boolean;
}

export const InputLogin = ({ label, register, type, error, placeholder, autofocus }: props) => {
    return (
        <div>
                <label className="ml-1 cursor-pointer" htmlFor={register.name}>
                    {label}
                </label>

                <input
                    id={register.name}
                    type={type}
                    autoFocus={autofocus}
                    {...register}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 transition-base focus:outline-none focus:border-[#7e9292]"
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                />
                    {error && (
                        <p id={`${register.name}-error`} className="mt-1 text-xs text-red-600">
                            {error}
                        </p>
                    )}
            </div>
    )
}