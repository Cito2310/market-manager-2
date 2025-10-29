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

    return (
        <div className="relative">
            <button 
                onClick={toggleIsActive} 
                className={`
                    border rounded-md py-1 px-4 flex gap-1 items-center
                    ${selectedOption ? "bg-black text-white font-light" : null}
                    ${selectedOption === "" ? "bg-white text-black shadow shadow-[#747474]" : null}
                    `}
                >{selectedOption ? selectedOption : label} <i className="fa-solid fa-angle-down text-sm"></i></button>
            {
                isActive ?
                <div className="absolute min-w-[200px] mt-2 bg-[#f3f3f3] flex flex-col rounded shadow-md">{options.map((data)=>
                    <button 
                        onClick={()=>onSelectOption(data)} 
                        className={`
                            text-sm px-2 py-1 bg-inherit hover:brightness-90 transition-base rounded
                            ${data === selectedOption ? "font-medium brightness-90 hover:brightness-100" : null}
                        `}>{data}</button>)}</div>
                : null
            }
        </div>

    )
}