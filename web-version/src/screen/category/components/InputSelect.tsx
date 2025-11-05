import { useState } from "react";

interface props {
    name: string;
    select: { [key: string]: string };
    setSelect: React.Dispatch<React.SetStateAction<any>>;
    label: string;
    options: string[];
    disabled?: boolean;
}


export const InputSelect = ({ label, options, disabled, select, setSelect, name }: props) => {
    const [open, setOpen] = useState(false);
    const selected = select[name] || "";

    
    const onSelectOption = (option: string) => {
        const copySelect = structuredClone(select);
        if ( option === select[name] ) setSelect({ ...copySelect, [name]: "" });
        if ( option !== select[name] ) setSelect({ ...copySelect, [name]: option });
        setOpen(false);
    }

    // Style variables
    const base = `border py-1 px-4 rounded-md flex gap-1 items-center justify-center transition-base outline-none `;

    const state = disabled
    ? 'opacity-[.60] cursor-default border-[#c4c4c4]'
    : selected
        ? "hover:brightness-[.95] border-[#008080] bg-[#008080] text-white font-light cursor-pointer" 
        : "hover:brightness-[.95] border-[#c4c4c4] bg-white text-black shadow cursor-pointer"


    const styleButtonSelect = (opt: string) => `
        text-sm px-2 py-2 bg-inherit transition-base rounded cursor-pointer
        ${opt === selected ? "brightness-[.95] hover:brightness-[.98]" : "hover:brightness-[.90]"}
    `;

    // RETURN COMPONENT
    return (
        <div className="relative">
            {/* Main Button */}
            <button type="button" disabled={disabled} onClick={() => setOpen(o => !o)} className={base + state}>
                { select[name] ? select[name] : label } <i className="fa-solid fa-angle-down text-sm"/>
            </button>

            {/* Dropdown */}
            {
                open ? 
                <div className="absolute min-w-[200px] mt-0 bg-[#f3f3f3] flex flex-col rounded shadow-md">{options.map((data, index)=>
                    <button 
                        key={index+data}
                        onClick={()=>onSelectOption(data)} 
                        className={styleButtonSelect(data)}>{data}</button>)}
                </div> : null
            }
        </div>
    )
}