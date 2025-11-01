import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface props {
    register: UseFormRegisterReturn<any> | UseFormRegister<any>;
    label: string;
    options: {value: string, label: string}[];
    defaultValue?: string;
    error?: string;
    placeholder?: string;
    autofocus?: boolean;
}

export const SelectSection = ({ register, label, error, placeholder, autofocus, options, defaultValue }: props) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium px-1">{label}</label>
            <select { ...register } defaultValue={defaultValue} className="h-full border-b-2 border-[#d5e0e0] py-1.5 outline-none focus:border-[#7e9292] transition-base">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}