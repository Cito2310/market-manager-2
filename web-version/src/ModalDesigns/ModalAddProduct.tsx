export const ModalAddProduct = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]" />


        <div className={`
            fixed translate-x-[-50%] top-[20%] left-[50%] z-[120]
            bg-white font-[Montserrat] py-6 px-10 pb-8 w-[500px] rounded-md
            flex flex-col gap-4
        `}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Agregar Producto</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>
            <div className="flex flex-col gap-4">
                <section className="bg-[#f7fafc] rounded-md p-4 shadow-sm flex flex-col gap-4">
                    <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012]">Buscar Producto</h3>
                    
                    <div className="flex flex-col">
                        <input
                            className=" border-[#d5e0e0] px-2 py-2 outline-none focus:border-[#7e9292] transition-base rounded-md bg-white"
                            placeholder="Nombre o código del producto"
                            value={"Cañuelas"}
                            onChange={() => {}}
                        />
                        {/* Sugerencias de productos */}
                        <div className="flex flex-col  shadow-md border rounded-md bg-white gap-1">
                            <button className="px-4 py-2 text-left rounded-md transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] text-[#536464] bg-white shadow-sm">
                                Cañuelas Aceite 520ml
                            </button>
                            <button className="px-4 py-2 text-left rounded-md transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] text-[#536464] bg-white shadow-sm">
                                Cañuelas Aceite 1.5l
                            </button>
                            <button className="px-4 py-2 text-left rounded-md transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] text-[#536464] bg-white shadow-sm">
                                Cañuelas Harina 000 1kg
                            </button>
                            <button className="px-4 py-2 text-left rounded-md transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] text-[#536464] bg-white shadow-sm">
                                Cañuelas Harina 0000 1kg
                            </button>
                        </div>
                    </div>
                </section>

                <div className="flex gap-4 justify-end mt-4">
                    <button className="transition-base rounded-md w-[140px] text-[#7e9292] px-2 py-2 active:brightness-[.90] active:shadow-inner hover:bg-[#d5e0e0] hover:text-[#3d4646] hover:shadow-none">
                        Cancelar
                    </button>
                    <button className="transition-base rounded-md w-[140px] bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                        Agregar
                    </button>
                </div>
            </div>
            </div>
        </>
    );
};