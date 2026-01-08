import React, { useState } from "react";
interface props {
    selected?: boolean;
    exampleImg?: "mayo.webp" | "cañuelas.jpg" | "cabalgata.png";
    base64?: string;
}

export const ItemImages = ({ selected, exampleImg, base64 }: props) => {
    const [showChildren, setShowChildren] = useState(false);

    const buttonDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Se elimino la imagen");
    }

    return (
        <div 
            onMouseEnter={() => setShowChildren(true)}
            onMouseLeave={() => setShowChildren(false)}
            className={`relative aspect-square overflow-hidden shadow-md rounded-md ${selected ? "border-2 border-[#008080]" : ""}`}
        >
            {/* BOTONES DE ADMINISTRACION */}
            <div className={`${showChildren ? "opacity-100" : "opacity-0"} z-100 absolute right-0 flex flex-col h-[75%] w-10 transition-base`}>
                <button
                    onClick={buttonDelete}
                    className="bg-[#DD656F] h-full hover:brightness-95 shadow-lg transition-base cursor-pointer active:brightness-90"
                >
                    <i className="fa-solid fa-trash text-white"></i>
                </button>

            </div>

            {/* BOTON DE SELECCION - PRINCIPAL */}
            <button className={"aspect-square bg-white cursor-pointer hover:brightness-95 active:brightness-90"}>
                {
                    base64
                    ? <img className="w-full h-full object-contain" src={base64}></img>
                    : <img className="w-full h-full object-contain" src={`/img/${exampleImg}`}></img>
                }
                

                <p className={`
                    ${selected ? "bg-[#008080]" : "bg-[#00000080]"} 
                    absolute bottom-0 h-[25%] text-white w-full p-2 truncate
                `}>
                    cañudasdassdsadelas
                </p>
            </button>
        </div>
    )
}