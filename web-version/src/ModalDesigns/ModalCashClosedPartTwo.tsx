export const ModalCashClosedPartTwo = () => {
    return <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]"/>


        <div
            className={`
                fixed translate-x-[-50%] top-[10%] left-[50%] z-[120]
                bg-white font-[Montserrat] py-6 px-10 pb-8 w-[600px] rounded-md
                flex flex-col gap-4
                max-h-[80vh] overflow-hidden
                shadow-2xl
            `}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Resumen - Cerrar Caja</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

            <div className="flex flex-col overflow-y-auto rounded-md gap-6">
                {/* Ingresos */}
                <section className="bg-[#f4f8f8] rounded-md p-4 py-2 shadow-sm">
                    <h3 className="font-semibold text-lg text-[#008080] mb-2 border-b border-b-[#00000012]">Ingresos</h3>
                    <div className="flex w-full justify-between mb-1">
                        <p className="font-medium flex-1">Débito: <b className="font-normal text-[#536464]">$2.500 - 1</b></p>
                        <p className="font-medium flex-1">Crédito: <b className="font-normal text-[#536464]">$0 - 0</b></p>
                    </div>
                    <div className="flex w-full justify-between mb-1">
                        <p className="font-medium flex-1">QR: <b className="font-normal text-[#536464]">$2.800 - 2</b></p>
                        <p className="font-medium flex-1">Transferencia: <b className="font-normal text-[#536464]">$24.456 - 6</b></p>
                    </div>
                    <p className="font-medium">Efectivo Estimado: <b className="font-normal text-[#536464]">$72.400 - 15</b></p>
                </section>

                {/* Gastos */}
                <section className="bg-[#f8f4f4] rounded-md p-4 py-2 shadow-sm">
                    <h3 className="font-semibold text-lg text-[#c0392b] mb-2 border-b border-b-[#00000012]">Gastos</h3>
                    <p className="font-medium mb-1">2 Gases: <b className="font-normal text-[#536464]">$32.000</b></p>
                    <p className="font-medium mb-1">Bolsa Manija Grande: <b className="font-normal text-[#536464]">$2.000</b></p>
                </section>

                {/* Otros datos */}
                <section className="bg-[#f7fafc] rounded-md p-4 py-2 shadow-sm flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-[#008080] mb-2 border-b border-b-[#00000012]">Resumen Final</h3>
                    <div className="flex flex-col gap-0.5 border-b border-dashed border-[#d1d5db] pb-2">
                        <div className="flex justify-between py-1">
                            <span className="font-medium">Ingresos Registrados:</span>
                            <b className="font-normal text-[#536464]">$102.156</b>
                        </div>
                        <ul className="ml-4 mt-0.5 flex flex-col gap-0.5 text-sm">
                            <li className="flex justify-between">
                                <span className="text-[#008080]">• Efectivo Estimado</span>
                                <span className="text-[#536464]">$72.400</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-[#008080]">• Medios Electrónicos</span>
                                <span className="text-[#536464]">$29.756</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-0.5 border-b border-dashed border-[#d1d5db] pb-2">
                        <div className="flex justify-between py-1">
                            <span className="font-medium">Efectivo Contado:</span>
                            <b className="font-normal text-[#536464]">$102.156</b>
                        </div>
                        <ul className="ml-4 mt-0.5 flex flex-col gap-0.5 text-sm">
                            <li className="flex justify-between">
                                <span className="text-[#008080]">• Efectivo En Caja Actual</span>
                                <span className="text-[#536464]">$13.340</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-[#008080]">• Efectivo Retirado</span>
                                <span className="text-[#536464]">$34.000</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-[#d1d5db]">
                        <span className="font-medium">Caja Inicial:</span>
                        <b className="font-normal text-[#536464]">$23.240</b>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="font-medium">Gastos:</span>
                        <b className="font-normal text-[#c0392b]">$34.000</b>
                    </div>
                </section>

                {/* Balance Final */}
                <div className="flex justify-center mt-2">
                    <h2 className="text-2xl font-bold text-[#79B26A] bg-[#eafbe7] px-6 py-2 rounded-lg shadow">
                        Balance Final: <span className="font-medium">+$1.254</span>
                    </h2>
                </div>
            </div>

            <div className="flex gap-4 justify-end mt-4">
                <button className="transition-base rounded-md w-[140px] bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                    Imprimir
                </button>
            </div>
        </div>
    </>
}