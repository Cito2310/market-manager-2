export const SectionSidebar = () => (
    <div className={`
        fixed top-8 z-40
        h-[calc(100vh-2rem)] w-[40%] left-[60%]

        border-l-2 border-[#7e9292]
        justify-between gap-4 flex flex-col p-4
        `}>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <button className="rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Agregar Producto</button>
                <button className="rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Ultimas Ventas</button>
                <button className="rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Administrar Caja</button>
            </div>
            {/* <div className="flex gap-4">
                <button className="rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Descuento Recarga</button>
                <button className="rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Ver Ultimas Ventas</button>
                <button className="rounded-md basis-0 grow bg-[#d5e0e0] px-4 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Realizar Informe</button>
            </div> */}
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-full">
                        <label className="font-medium px-1">Codigo de barra</label>
                        <input onChange={()=>{}} className="border-b-2 w-full border-[#d5e0e0] px-1 pt-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite"}/>
                    </div>
                    <div className="flex flex-col  w-full">
                        <label className="font-medium px-1">Dinero</label>
                        <input onChange={()=>{}} className="border-b-2  w-full border-[#d5e0e0] px-1 pt-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite"}/>
                    </div>
                </div>

                <p className="font-medium px-1 mt-1.5">VUELTO: $ 4.300</p>
            </div>

            <div className="flex gap-4">
                <button className="rounded-md basis-0 grow bg-[#dd656f] px-2 py-6 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">F5 - Cancelar</button>
                <button className="rounded-md basis-0 grow bg-[#008080] text-white px-2 py-6 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">F1 - Pagar</button>
            </div>
        </div>
    </div>
)