export const ModalCashSession = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]" />


        <div className={`
            fixed translate-x-[-50%] top-[20%] left-[50%] z-[120]
            bg-white font-[Montserrat] py-6 px-10 pb-10 w-[500px] rounded-md
            flex flex-col gap-4
        `}>
            <div className="flex justify-between  items-center">
                <h2 className="font-medium text-xl">Administrar Caja</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

                <section className="bg-[#f4f8f8] rounded-md p-4 shadow-sm flex flex-col gap-3">
                    <button className="transition-base rounded-md bg-[#d5e0e0] text-[#3d4646] px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                        Abrir Caja
                    </button>
                    <button className="transition-base rounded-md bg-[#d5e0e0] text-[#3d4646] px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                        Retirar Efectivo
                    </button>
                    <button className="transition-base rounded-md bg-[#d5e0e0] text-[#3d4646] px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                        Registrar Gasto
                    </button>
                </section>

            </div>
        </>
    );
};