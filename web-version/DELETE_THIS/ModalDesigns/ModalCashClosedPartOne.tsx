export const ModalCashClosedPartOne = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]" />

            <div
                className={`
                    fixed translate-x-[-50%] top-[10%] left-[50%] z-[120]
                    bg-white font-[Montserrat] py-6 px-10 pb-8 w-[600px] rounded-md
                    flex flex-col gap-4
                    max-h-[80vh] overflow-hidden
                    shadow-2xl
                `}
            >
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-xl">Ingresar Dinero en la Caja</h2>
                    <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
                </div>

                <div className="flex flex-col overflow-y-auto rounded-md gap-6">

                <section className="bg-[#f4f8f8] rounded-md p-4 py-2 shadow-sm flex flex-col gap-3">
                    <h3 className="font-semibold text-lg text-[#008080] mb-2 border-b border-b-[#00000012]">Detalle de Billetes</h3>
                    {[
                        { label: "Billetes de 10", value: "0" },
                        { label: "Billetes de 20", value: "0" },
                        { label: "Billetes de 50", value: "0" },
                        { label: "Billetes de 100", value: "0" },
                        { label: "Billetes de 200", value: "0" },
                        { label: "Billetes de 500", value: "0" },
                        { label: "Billetes de +1000", value: "0" },
                    ].map((item, idx) => (
                        <div className="flex items-center gap-4" key={idx}>
                            <label className="text-[#000] font-medium w-36">{item.label}:</label>
                            <input
                                onChange={() => {}}
                                className="grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-right"
                                value={item.value}
                                type="number"
                                min={0}
                            />
                        </div>
                    ))}
                </section>


                </div>

                <div className="flex gap-4 justify-end mt-4">
                    <button className="transition-base rounded-md w-[140px] text-[#7e9292] px-2 py-2 active:brightness-[.90] active:shadow-inner hover:bg-[#d5e0e0] hover:text-[#3d4646] hover:shadow-none">
                        Cancelar
                    </button>
                    <button className="transition-base rounded-md w-[140px] bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                        Continuar
                    </button>
                </div>
            </div>
        </>
    );
};