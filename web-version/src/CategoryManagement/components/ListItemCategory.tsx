import { useEffect, useRef, useState } from "react";

interface props {
    name: string;
    section: string;
    subcategories: {name: string, brands: string[]}[]
}


export const ListItemCategory = ({ section, name }: props) => {
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) setHeight("auto");
        if ( height !== 0 ) setHeight(0);
    }

    return <>
        <tr className={`${ height ? null : "border-b" } border-[#7e9292]`}>
            <td className="px-4 py-4 font-medium">{name}</td>
            <td className="font-medium mx-2 text-[#7e9292]">{section}</td>
            <td>
                <button 
                onClick={toggleDetailsMenu}
                className="
                rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center
                hover:shadow hover:brightness-90 transition-base
                "><i className="fa-solid fa-ellipsis"></i></button>
            </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <div style={{height}} className={`
                    ${height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-4`}>


                        <div className="flex gap-4 items-center justify-between">
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1">Nombre de la categoria</label>
                                    <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite"}/>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1">Sección</label>
                                    <select defaultValue={"g"} className="h-full border-b-2 border-[#d5e0e0] py-[6px] outline-none focus:border-[#7e9292] transition-base">
                                        <option value={"g"}>Alimentos</option>
                                        <option value={"kg"}>Higiene Personal</option>
                                        <option value={"l"}>Bebidas</option>
                                        <option value={"u"}>Verduleria</option>
                                        <option value={"u"}>Carniceria</option>
                                    </select>
                                </div>
                            </div>

                            <button className="aspect-square rounded-md px-3 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>



                        {/* CONTIENE LOS CONTAINES DE SUBCATEGORIAS */}
                        <div className="flex gap-4 w-full flex-wrap">
                            <div className="flex flex-col flex-1 min-w-[500px] gap-4 border border-[#d5e0e0] rounded-md p-4">
                                 <div className="flex gap-4">

                                    <button className="aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                    <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <button className="aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                    <i className="fa-solid fa-plus"></i>
                                    </button>
                                    
                                </div> 

                                <div className="h-auto flex flex-wrap gap-x-4 gap-y-2">
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 min-w-[500px] gap-4  border border-[#d5e0e0] rounded-md p-4">
                                 <div className="flex gap-4">
                                    <button className="aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                    <i className="fa-solid fa-trash"></i></button>
                                    <button className="aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                    <i className="fa-solid fa-plus"></i>
                                    </button>

                                    <input onChange={()=>{}} className="border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite de Girasol"}/>

                                </div> 

                                <div className="h-auto flex flex-wrap gap-x-4 gap-y-2">
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col flex-1 min-w-[500px] gap-4  border border-[#d5e0e0] rounded-md p-4">
                                 <div className="flex gap-4">
                                    <button className="aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                    <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <button className="aspect-square rounded-md px-2 active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] flex gap-1 justify-center items-center shadow-md text-lg">
                                    <i className="fa-solid fa-plus"></i>
                                    </button>

                                    <input onChange={()=>{}} className="border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite de Girasol"}/>

                                </div> 

                                <div className="h-auto flex flex-wrap gap-x-4 gap-y-2">
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                    <div className="flex flex-row [width:calc(50%-0.5rem)] gap-4">
                                        <button className="aspect-square rounded-md active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff]  border-[#7e9292] text-[#7e9292] flex justify-center items-center shadow-md text-sm w-9"><i className="fa-solid fa-trash"></i></button>
                                        <input onChange={()=>{}} className="w-full border-b-2 flex-1 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>
                                </div>
                            </div>

                        </div>




                        <div className="flex gap-4 flex-wrap justify-end">
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] rounded-md py-1.5 px-4  shadow-[#747474] flex gap-1 justify-center items-center">
                                Cancelar
                            </button>
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base bg-[#DD656F] border border-[#D9545F] text-[#fff] rounded-md py-1.5 px-4  shadow-[#747474] flex gap-1 justify-center items-center">
                                Eliminar Categoria
                            </button>
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base bg-[#008080] border border-[#007070] text-[#fff] rounded-md py-1.5 px-4 flex gap-1 justify-center items-center">
                                Editar Categoria
                            </button>
                        </div>
                </div>
            </td>
        </tr>
    </>
}