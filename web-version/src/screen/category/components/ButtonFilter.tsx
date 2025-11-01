import { useState } from "react";

interface props {
    label: string;
    options: string[];
}

export const ButtonFilter = ({ label, options }: props) => {
    const [isActive, setisActive] = useState(false);
    const toggleIsActive = () => {
        setisActive(!isActive)
    }

    const [selectedOption, setSelectedOption] = useState("");
    const onSelectOption = (option: string) => {
        if ( option === selectedOption ) setSelectedOption("");
        if ( option !== selectedOption ) setSelectedOption(option);
        toggleIsActive();
    }

    const styleButtonMain = `
        border py-1 px-4 rounded-md flex gap-1 items-center justify-center transition-base cursor-pointer
        ${selectedOption
             ? "hover:brightness-[.95] border-[#008080] bg-[#008080] text-white font-light" 
             : "hover:brightness-[.95] border-[#c4c4c4] bg-white text-black shadow"
        }
    `;

    const styleButtonSelect = (data: string) => `
        text-sm px-2 py-2 bg-inherit transition-base rounded cursor-pointer
        ${data === selectedOption 
            ? "brightness-[.95] hover:brightness-[.98]" 
            : "hover:brightness-[.90]"}
    `;


    return (
        <div className="relative">
            <button 
                onClick={toggleIsActive} 
                className={styleButtonMain}
                >{selectedOption ? selectedOption : label} <i className="fa-solid fa-angle-down text-sm"></i></button>
            {
                isActive ?
                <div className="absolute min-w-[200px] mt-0 bg-[#f3f3f3] flex flex-col rounded shadow-md">{options.map((data)=>
                    <button 
                        onClick={()=>onSelectOption(data)} 
                        className={styleButtonSelect(data)}>{data}</button>)}
                </div> : null
            }
        </div>
    )
}