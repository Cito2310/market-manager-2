import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

interface props {
    label: string;
    type: "text" | "select" | "number" | "size" | "date";
    prefix?: string;
    subfix?: string;
    padding?: number;
    register?: UseFormRegisterReturn<string>;
    placeholder?: string;
    sizeConfig?: {
        options: {value: string; label: string}[];
        registerNumber: UseFormRegisterReturn<string>;
        registerSizeType: UseFormRegisterReturn<string>;
    }
    options?: {value: string; label: string}[];
}

export const InputProduct = ({ label, type, prefix, subfix, padding, register, placeholder, options, sizeConfig }: props) => {
    const base = "bg-white text-[#023b3b] font-normal border-b-2 border-[#d5e0e0] px-3 py-2 rounded-md outline-none focus:border-[#008080] transition-base";

    const baseSize = "w-full bg-white text-[#023b3b] font-normal border-b-2 border-[#d5e0e0] rounded-l-md outline-none focus:border-[#008080] transition-base px py-2 text-right";
    const baseSizeSelect = "bg-white text-[#023b3b] font-normal h-full border-b-2 border-[#d5e0e0] py-[6px] outline-none rounded-r-md focus:border-[#7e9292] transition-base";

    if (type === "text") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <input
                {...register}
                className={base}
                placeholder={placeholder}
            />
        </label>
    )


    if (type === "select") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <select
                id="select-ejemplo"
                className={base}
                {...register}>
                {
                    options!.map( option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </label>
    )


    if (type === "number") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <div className="relative h-full flex items-center grow">
                {prefix && <span className="absolute left-3 text-[#7e9292] text-lg select-none">{prefix}</span>}
                <input
                    style={{paddingLeft: prefix && `${padding}rem`, paddingRight: subfix && `${padding}rem`}}
                    className={base + " w-full"}
                    type="number"
                    {...register}
                    min={0}
                    placeholder="0"
                />
                {subfix && <span className="font-normal absolute right-8 text-[#7e9292] text-lg select-none">{subfix}</span>}
            </div>
        </label>
    )


    if (type === "size") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <div className="flex w-full">
                <input style={{borderLeftWidth: "none"}} className={baseSize} {...sizeConfig!.registerNumber}/>
                <select className={baseSizeSelect} {...sizeConfig!.registerSizeType}>
                    {
                        sizeConfig!.options.map( option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
            </div>
        </label>
    )


    if (type === "date") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <input
                onChange={() => { }}
                value={"2024-12-31"}
                className={base}
                type="date"
            />
        </label>
    )
}