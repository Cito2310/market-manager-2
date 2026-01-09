import React, { useState } from "react";
import { Image } from "../../../../types/Image";
interface props {
    selected?: boolean;
    handleImageDelete: ( id: string ) => void;
    handleSelectImage: ( id: string ) => void;
    image: Image;
}

export const ItemImages = ({ selected, image, handleImageDelete, handleSelectImage }: props) => {
    const [showChildren, setShowChildren] = useState(false);

    return (
        <div 
            onMouseEnter={() => setShowChildren(true)}
            onMouseLeave={() => setShowChildren(false)}
            className={`relative aspect-square overflow-hidden shadow-md rounded-md ${selected ? "border-2 border-[#008080]" : ""}`}
        >
            {/* BOTONES DE ADMINISTRACION */}
            <div className={`${showChildren ? "opacity-100" : "opacity-0"} z-100 absolute right-0 flex flex-col h-[25%] w-10 transition-base`}>
                <button
                    disabled={selected}
                    onClick={() => handleImageDelete(image._id)}
                    className="bg-[#DD656F] rounded-bl h-full hover:brightness-95 shadow-lg transition-base cursor-pointer active:brightness-90"
                >
                    <i className="fa-solid fa-trash text-white"></i>
                </button>

            </div>

            {/* BOTON DE SELECCION - PRINCIPAL */}
            <button onClick={() => handleSelectImage(image._id)} className={"aspect-square bg-white cursor-pointer hover:brightness-95 active:brightness-90 flex h-full w-full"}>
                <img className="w-full h-full object-contain" src={image.base64}></img>
                

                <p className={`
                    ${selected ? "bg-[#ffffffc5] text-[#008080]" : "bg-[#ffffffc5] text-[#222222]"} 
                    absolute bottom-0 h-[25%] w-full p-2 truncate transition-base text-sm
                `}>
                    {image.nameImage}
                </p>
            </button>
        </div>
    )
}