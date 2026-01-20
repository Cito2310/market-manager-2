import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

interface props {
    label: string;
    register: UseFormRegisterReturn<string>;
    icon: "boxes-stacked" | "calendar-days"
}

export const InputCheckbox = ({ label, register, icon }: props) => {
    return (
        <label className="flex-1 cursor-pointer">
            <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 
            hover:brightness-[.97] active:brightness-[.94] transition-base cursor-pointer 
            border-2 border-transparent hover:border-[#008080]">
                <input
                    {...register}
                    type="checkbox"
                    className="accent-[#008080] w-5 h-5"
                />
                <i className={`fa-solid fa-${icon} text-2xl text-[#008080]`} />
                <span className="font-medium text-[#3d4646]">{label}</span>
            </div>
        </label>
    )
}