import { useEffect, useRef, useState } from "react";
import { StockBar } from "./StockBar";

interface props {
    name: string;
    category: string;
    section: string;
    stock: [number, number];
    price: number;
    location: string;
}


export const ListItemProduct = ({ category, section, name, price, stock, location }: props) => {
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) setHeight("auto");
        if ( height !== 0 ) setHeight(0);
    }

    return <>
        <tr className={`${ height ? null : "border-b" } border-[#7e9292]`}>
                <td className="px-4 py-4 font-medium">{name}</td>
                <td className="relative mx-2"><div className="flex ">
                    <p className="font-medium rounded-md text-[#7e9292] bg-[#d5e0e0] text-center min-w-[100px] py-0.5 text-sm">{category}</p>
                </div></td>
                <td className="font-medium mx-2 text-[#7e9292]">{section}</td>
                <td className="font-medium mx-2 text-[#7e9292]">{location}</td>
                <td className="font-medium mx-2">${price.toLocaleString("es-ES")}</td>
                <StockBar currentStock={stock[0]} lowStock={stock[1]} />
                <td className="">
                    <div className="flex gap-4 justify-end pr-4">
                        <button 
                        onClick={toggleDetailsMenu}
                        className="
                        rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center
                        hover:shadow hover:brightness-90 transition-base
                        "><i className="fa-solid fa-print"></i></button>
                        
                        <button 
                        onClick={toggleDetailsMenu}
                        className="
                        rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center
                        hover:shadow hover:brightness-90 transition-base
                        "><i className="fa-solid fa-ellipsis"></i></button>
                    </div>

                </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <div style={{height}} className={`
                    ${height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-8`}>

                        <div className="flex gap-8">
                            {/* COLUMNA 1 - IMAGEN */}
                            <div className="flex flex-col gap-4 w-[24%]">
                                <div className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col gap-2">
                                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Imagen</h3>

                                    <div className="flex flex-col rounded-md overflow-hidden shadow-sm">
                                        <img className="w-[full]" src="/img/cañuelas.jpg"></img>
                                        
                                        <button className="flex items-center justify-center gap-3 bg-white rounded-b-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                            <i className="fa-solid fa-image text-2xl text-[#008080]" />
                                            cañuelas.jpg
                                        </button>

                                    </div>
                                </div>

                                <div className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col gap-2">
                                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Opciones</h3>

                                    <label className="flex-1 cursor-pointer">
                                        <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                            <input
                                                type="checkbox"
                                                className="accent-[#008080] w-5 h-5"
                                            />
                                            <i className="fa-solid fa-calendar-days text-2xl text-[#008080]" />
                                            <span className="font-medium text-[#3d4646]">Op. Vencimiento</span>
                                        </div>
                                    </label>

                                    <label className="flex-1 cursor-pointer">
                                        <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                            <input
                                                type="checkbox"
                                                className="accent-[#008080] w-5 h-5"
                                            />
                                            <i className="fa-solid fa-boxes-stacked text-2xl text-[#008080]" />
                                            <span className="font-medium text-[#3d4646]">Op. Stock</span>
                                        </div>
                                    </label>

                                    <label className="flex-1 cursor-pointer">
                                        <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                            <input
                                                type="checkbox"
                                                className="accent-[#008080] w-5 h-5"
                                            />
                                            <i className="fa-solid fa-sliders text-2xl text-[#008080]" />
                                            <span className="font-medium text-[#3d4646]">Op. Avanzadas</span>
                                        </div>
                                    </label>
                                </div>




                        </div>

                            {/* COLUMNA 2 - INFORMACION PRINCIPAL - NOMBRE, MARCA, TAMAÑO, CATEGORIA, SUBCATEGORIA */}
                            {/* COLUMNA 2 - FORMULACION EXTRAS */}
                            <div className="flex flex-col gap-4 w-[76%]">
                                {/* SECCION 1 - DATOS PRINCIPALES */}
                                <div className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col gap">
                                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Datos Principales</h3>
                                    
                                    {/* FILA 1 - NOMBRE Y CODIGO DE BARRA */}
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Nombre</label>
                                            <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base" value={"Aceite de Girasol"}/>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Codigo de Barra</label>
                                            <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base" value={"770303213134"}/>
                                        </div>
                                    </div>

                                    {/* FILA 2 - CATEGORIA, SUBCATEGORIA, MARCA */}
                                    <div className="flex flex-row gap-4 mt-4">
                                        <div className="w-full">
                                            <label className="font-medium px-1">Categoria</label>
                                            <select
                                                id="select-ejemplo"
                                                className="w-full border-b-2 border-[#d5e0e0] px-2 py-2 outline-none focus:border-[#7e9292] transition-base rounded-md bg-white text-[#3d4646] font-medium shadow-sm"
                                                defaultValue="debit"
                                            >
                                                <option value="debit">Categoria</option>
                                                <option value="cash">Efectivo</option>
                                                <option value="credit">Credito</option>
                                                <option value="qr">QR</option>
                                                <option value="transference">Transferencia</option>
                                            </select>
                                        </div>

                                        <div className="w-full">
                                            <label className="font-medium px-1">Subcategoria</label>
                                            <select
                                                id="select-ejemplo"
                                                className="w-full border-b-2 border-[#d5e0e0] px-2 py-2 outline-none focus:border-[#7e9292] transition-base rounded-md bg-white text-[#3d4646] font-medium shadow-sm"
                                                defaultValue="debit"
                                            >
                                                <option value="debit">Subcategoria</option>
                                                <option value="cash">Efectivo</option>
                                                <option value="credit">Credito</option>
                                                <option value="qr">QR</option>
                                                <option value="transference">Transferencia</option>
                                            </select>
                                        </div>

                                        <div className="w-full">
                                            <label className="font-medium px-1">Marca</label>
                                            <select
                                                id="select-ejemplo"
                                                className="w-full border-b-2 border-[#d5e0e0] px-2 py-2 outline-none focus:border-[#7e9292] transition-base rounded-md bg-white text-[#3d4646] font-medium shadow-sm"
                                                defaultValue="debit"
                                            >
                                                <option value="debit">Marca</option>
                                                <option value="cash">Efectivo</option>
                                                <option value="credit">Credito</option>
                                                <option value="qr">QR</option>
                                                <option value="transference">Transferencia</option>
                                            </select>
                                        </div>

                                    </div>

                                    {/* FILA 3 - TAMAÑO Y PRECIO */}
                                    <div className="flex flex-row gap-4 mt-4">
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Tamaño</label>

                                            <div className="flex w-full">
                                                    <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] pl-2 py-2 outline-none focus:border-[#7e9292] transition-base text-right rounded-l-md" value={"100"}/>
                                                    <select defaultValue={"g"} className="h-full border-b-2 border-[#d5e0e0] py-[6px] outline-none rounded-r-md focus:border-[#7e9292] transition-base">
                                                        <option value={"g"}>g</option>
                                                        <option value={"kg"}>kg</option>
                                                        <option value={"l"}>l</option>
                                                        <option value={"u"}>u</option>
                                                    </select>
                                            </div>
                                        </div>



                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Precio</label>

                                            <div className="relative h-full flex items-center grow">
                                                <span className="absolute left-3 text-[#7e9292] text-lg select-none">$</span>
                                                <input
                                                    className="pl-7 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                    type="number"
                                                    min={0}
                                                    placeholder="0"
                                                    value={"20000"}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                {/* SECCION 2 - VENCIMIENTO */}
                                <div className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col">
                                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Vencimiento</h3>
                                    
                                    <div className="flex w-full gap-4">
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Fecha de Vencimiento</label>

                                            <input
                                                className="pl-4 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                type="date"
                                                min={0}
                                                placeholder="0"
                                                value={"20000"}
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Alerta de Vencimiento</label>

                                            <div className="relative h-full flex items-center grow">
                                                <span className="absolute right-8 text-[#7e9292] text-lg select-none">Dias</span>
                                                <input
                                                    className="pl-4 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                    type="number"
                                                    min={0}
                                                    placeholder="0"
                                                    value={"10"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                {/* SECCION 3 - STOCK */}
                                <div className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col gap">
                                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Stock</h3>

                                    {/* FILA 1 - STOCK ACTUAL */}
                                    <div className="flex w-full gap-4">
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Stock Actual</label>

                                            <input
                                                className="pl-4 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                type="number"
                                                min={0}
                                                placeholder="0"
                                                value={"100"}
                                            />
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <div className="w-full">
                                                <label className="font-medium px-1">Tipo de Rotacion</label>
                                                <select
                                                    id="select-ejemplo"
                                                    className="w-full border-b-2 border-[#d5e0e0] px-2 py-2 outline-none focus:border-[#7e9292] transition-base rounded-md bg-white text-[#3d4646] font-medium shadow-sm"
                                                    defaultValue="debit"
                                                >
                                                    <option value="debit">Alta Rotación</option>
                                                    <option value="cash">Baja Rotación</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    {/* FILA 2 - ALERTAS */}
                                    <div className="flex w-full gap-4 mt-4">
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1 text-[#f8da53]">Alerta - Solo lo Expuesto</label>

                                            <div className="relative h-full flex items-center grow">
                                                <span className="absolute right-8 text-[#7e9292] text-lg select-none">Unidades</span>
                                                <input
                                                    className="pl-4 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                    type="number"
                                                    min={0}
                                                    placeholder="0"
                                                    value={"10"}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1 text-[#e49359]">Alerta - Poca Reserva</label>

                                            <div className="relative h-full flex items-center grow">
                                                <span className="absolute right-8 text-[#7e9292] text-lg select-none">Unidades</span>
                                                <input
                                                    className="pl-4 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                    type="number"
                                                    min={0}
                                                    placeholder="0"
                                                    value={"10"}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1 text-[#DD656F]">Alerta - Muy Poco</label>

                                            <div className="relative h-full flex items-center grow">
                                                <span className="absolute right-8 text-[#7e9292] text-lg select-none">Unidades</span>
                                                <input
                                                    className="pl-4 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                    type="number"
                                                    min={0}
                                                    placeholder="0"
                                                    value={"10"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            {/* SECCION 4 - OPCIONES AVANZADAS */}
                             <div className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col">
                                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Opciones Avanzadas</h3>
                                    
                                    <div className="flex w-full gap-4">
                                        <div className="flex flex-col w-full">
                                            <label className="font-medium px-1">Coste del Producto</label>

                                            <div className="relative h-full flex items-center grow">
                                                <span className="absolute left-3 text-[#7e9292] text-lg select-none">$</span>
                                                <input
                                                    className="pl-7 h-full grow border-b-2 border-[#d5e0e0] px-2 py-2 rounded-md outline-none focus:border-[#7e9292] transition-base text-left"
                                                    type="number"
                                                    min={0}
                                                    placeholder="0"
                                                    value={"20000"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>






                        </div>

                        <div className="flex gap-4 justify-end">
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] rounded-md py-1.5 px-4  shadow-[#747474] flex gap-1 justify-center items-center">
                                Cancelar
                            </button>
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base bg-[#DD656F] border border-[#D9545F] text-[#fff] rounded-md py-1.5 px-4  shadow-[#747474] flex gap-1 justify-center items-center">
                                Eliminar Producto
                            </button>
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base bg-[#008080] border border-[#007070] text-[#fff] rounded-md py-1.5 px-4 flex gap-1 justify-center items-center">
                                Editar Producto
                            </button>
                        </div>
                </div>
            </td>
        </tr>
    </>
}