export const ModalPay = () => (
    <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]" />

        <div
            className={`
                fixed translate-x-[-50%] top-[10%] left-[50%] z-[120]
                bg-white font-[Montserrat] py-6 px-10 pb-8 w-[1000px] rounded-md
                flex flex-col gap-4
                max-h-[80vh] overflow-hidden
                shadow-2xl
            `}
        >
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Pantalla de Pago</h2>
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

            {/* CONTENEDOR DOS COLUMNAS */}
            <div className="flex overflow-y-auto rounded-md gap-6">
                {/* COLUMNA PRIMARIA - Opciones - Agregar Bolsa - Metodo de Pago -  */}
                <section className="flex flex-col gap-6 flex-1">
                    {/* SECCION - Agregar Bolsa */}
                    <section className="
                        bg-[#f4f8f8] rounded-md p-4 py-2 shadow-sm flex flex-col gap-3
                    ">
                        <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012]">Agregar Bolsa</h3>
                        <div className="flex items-center gap-3">
                            <button className="flex w-full justify-center items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                Bolsa Chica
                            </button>
                            <button className="flex w-full justify-center items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                Bolsa Mediana
                            </button>
                            <button className="flex w-full justify-center items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                Bolsa Grande
                            </button>
                        </div>
                    </section>

                    {/* SECCION - Metodo de Pago */}
                    <section className="
                        bg-[#f4f8f8] rounded-md p-4 py-2 shadow-sm flex flex-col gap-3
                    ">
                        <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012]">Metodo de Pago</h3>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col gap-2">
                                <select
                                    id="select-ejemplo"
                                    className="border-b-2 border-[#d5e0e0] px-2 py-2 outline-none focus:border-[#7e9292] transition-base rounded-md bg-white text-[#3d4646] font-medium shadow-sm"
                                    defaultValue="cash"
                                >
                                    <option value="debit">Debito</option>
                                    <option value="cash">Efectivo</option>
                                    <option value="credit">Credito</option>
                                    <option value="qr">QR</option>
                                    <option value="transference">Transferencia</option>
                                </select>
                            </div>

                            <div className="relative h-full flex items-center grow">
                                <span className="absolute left-3 text-[#7e9292] text-lg select-none">$</span>
                                <input
                                    className="pl-7 h-full grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={"20000"}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="flex gap-3 items-center justify-center h-[37px] bg-[#fff] transition-base rounded-md w-full  text-[#3d4646] px-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                                <i className="fa-solid fa-plus text-xl" />
                                <p className="font-medium">Agregar Metodo de Pago</p>
                            </button>
                        </div>

                    </section>


                    <section className="bg-[#f4f8f8] rounded-md p-4 shadow-sm flex flex-col gap-3">
                        <h3 className="font-semibold text-lg text-[#008080] border-b border-b-[#00000012] mb-2">Opciones</h3>
                        <div className="flex gap-3">
                            {/* Opción 2 */}
                            <label className="flex-1 cursor-pointer">
                                <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                    <input
                                        type="checkbox"
                                        className="accent-[#008080] w-5 h-5"
                                    />
                                    <i className="fa-solid fa-percent text-2xl text-[#008080]" />
                                    <span className="font-medium text-[#3d4646]">Descuento</span>
                                </div>
                            </label>
                            {/* Opción 3 */}
                            <label className="flex-1 cursor-pointer">
                                <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                    <input
                                        type="checkbox"
                                        className="accent-[#008080] w-5 h-5"
                                    />
                                    <i className="fa-solid fa-receipt text-2xl text-[#008080]" />
                                    <span className="font-medium text-[#3d4646]">Ticket</span>
                                </div>
                            </label>

                            <label className="flex-1 cursor-pointer">
                                <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                    <input
                                        type="checkbox"
                                        className="accent-[#008080] w-5 h-5"
                                    />
                                    <i className="fa-solid fa-file-lines text-2xl text-[#008080]" />
                                    <span className="font-medium text-[#3d4646]">Informe</span>
                                </div>
                            </label>
                        </div>

                        <div className="flex gap-3 items-center">
                            <label className="cursor-pointer">
                                Descuento:
                            </label>

                            <div className="relative h-full flex items-center grow">
                                <span className="absolute left-3 text-[#7e9292] text-lg select-none">%</span>
                                <input
                                    className="pl-10 h-[37px] grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={"30"}
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <label className="cursor-pointer">
                                Informe:
                            </label>

                            <input
                                className="px-4 h-[37px] text-left grow border-b-2 border-[#d5e0e0] py-1 outline-none focus:border-[#7e9292] transition-base"
                                type="text"
                                min={0}
                                placeholder="0"
                                value={"Consumo Propio"}
                            />
                        </div>
                    </section>

                    <section className="flex gap-4 w-full">
                        <button className="transition-base rounded-md w-full text-[#7e9292] px-2 py-2 active:brightness-[.90] active:shadow-inner hover:bg-[#d5e0e0] hover:text-[#3d4646] hover:shadow-none">
                            Cancelar
                        </button>
                        <button className="transition-base rounded-md w-full bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
                            Pagar
                        </button>
                    </section>
                </section>


                {/* COLUMNA TOTAL - Productos - Bolsa - Interes - Total */}
                <section className="
                    bg-[#f4f8f8] rounded-md shadow-sm flex flex-col justify-between gap-3
                ">
                    <div className="flex flex-col gap-3 p-4 py-2">
                        <table className="border-separate border-spacing-3 m-[-0.75em]">
                            <thead>
                                <tr>
                                    <th className="pr-2 font-medium">Cargo</th>
                                    <th className="font-medium">Precio</th>
                                </tr>

                                <tr>
                                    <td className="pr-2">20 Productos</td>
                                    <td className="text-center">$ 13.970</td>
                                </tr>
                                <tr>
                                    <td className="pr-2">Debito Interes (5%)</td>
                                    <td className="text-center">$ 530</td>
                                </tr>
                                <tr>
                                    <td className="pr-2">2 Bolsa Chica</td>
                                    <td className="text-center">$ 0</td>
                                </tr>
                                <tr>
                                    <td className="pr-2">Descuento (30%)</td>
                                    <td className="text-center">- $ 24.400</td>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col justify-between p-4 py-2 border-t border-[#00000012]">
                        <div className="flex justify-between w-full">
                            <p className="font-medium text-[#008080]">TOTAL</p>
                            <p className="font-semibold text-[#008080]">$ 14.230</p>
                        </div>

                        <ul className="ml-4 flex flex-col gap-0.5 text-sm">
                            <li className="flex justify-between gap-2">
                                <span className="text-[#008080]">• Efectivo</span>
                                <span className="text-[#536464]">$72.400</span>
                            </li>
                            <li className="flex justify-between gap-2">
                                <span className="text-[#008080]">• Debito</span>
                                <span className="text-[#536464]">$29.756</span>
                            </li>
                        </ul>
                    </div>

                </section>
            </div>
        </div>
    </>
)