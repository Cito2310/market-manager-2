import { UseFormRegisterReturn } from "react-hook-form";

interface props {
    label: string;
    options: string[] | { value: string; label: string }[];
    registerReturn: UseFormRegisterReturn<string>;
    optionSelected?: boolean;
}


export const InputSelect = ({ label, options, registerReturn, optionSelected }: props) => {
    const parseOptions = typeof options[0] === "string"
        ? (options as string[]).map( option => ({ value: option, label: option }) )
        : (options as { value: string; label: string }[]);


    // RETURN COMPONENT
    return (
        <select className={`
            border py-1 px-4 rounded-md flex gap-1 transition-base outline-none w-[150px]
            ${ optionSelected && "hover:brightness-[.95] border-[#008080] bg-[#008080] text-white font-light cursor-pointer" }
            ${ !optionSelected && "hover:brightness-[.97] active:brightness-[.94] border-[#c4c4c4] bg-white text-black shadow cursor-pointer" }
        `} {...registerReturn}>
                <option value="">{label}</option>
            { parseOptions.map( (data, index) => 
                <option key={index+data.value} value={data.value} >{data.label}</option> 
            ) }
        </select>
    )
}