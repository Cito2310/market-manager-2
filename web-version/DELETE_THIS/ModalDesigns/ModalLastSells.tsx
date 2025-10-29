export const ModalLastSells = () => {
    // Ejemplo de tickets, puedes reemplazarlo por tus datos reales
    const lastTickets = [
        { id: 1, fecha: "10:32", total: "$5.200", nro: "T-0012", metodo: "Débito", cantidadDeProductos: 4 },
        { id: 2, fecha: "10:15", total: "$3.800", nro: "T-0011", metodo: "Efectivo", cantidadDeProductos: 3 },
        { id: 3, fecha: "09:58", total: "$2.100", nro: "T-0010", metodo: "Crédito", cantidadDeProductos: 7 },
        { id: 4, fecha: "09:40", total: "$7.450", nro: "T-0009", metodo: "Transferencia", cantidadDeProductos: 2 },
        { id: 4, fecha: "09:40", total: "$7.450", nro: "T-0009", metodo: "Transferencia", cantidadDeProductos: 2 },
        { id: 4, fecha: "09:40", total: "$7.450", nro: "T-0009", metodo: "Transferencia", cantidadDeProductos: 2 },
        { id: 4, fecha: "09:40", total: "$7.450", nro: "T-0009", metodo: "Transferencia", cantidadDeProductos: 2 },
        { id: 4, fecha: "09:40", total: "$7.450", nro: "T-0009", metodo: "Transferencia", cantidadDeProductos: 2 },
        { id: 4, fecha: "09:40", total: "$7.450", nro: "T-0009", metodo: "Transferencia", cantidadDeProductos: 2 },
    ];

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
                <h2 className="font-medium text-xl">Ventas Recientes</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

                <section className="bg-[#f7fafc] rounded-md p-4 shadow-sm flex flex-col gap-2 max-h-[55vh] overflow-y-auto">
                    {lastTickets.length === 0 ? (
                        <div className="text-center text-[#7e9292] py-8">No hay tickets recientes.</div>
                    ) : (
                        <ul className="flex flex-col gap-2">
                            {lastTickets.map(ticket => (
                                <li
                                    key={ticket.id}
                                    className="flex items-center justify-between bg-white rounded-md px-4 py-2 shadow-sm hover:bg-[#eafbe7] transition"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-medium text-[#008080]">{ticket.fecha} - {ticket.cantidadDeProductos} Productos</span>
                                        <span className="text-xs text-[#536464]">Método: {ticket.metodo}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-xl text-[#536464] mr-2">{ticket.total}</span>
                                        <button
                                            className="rounded-full p-2 bg-[#d5e0e0] hover:bg-[#008080] hover:text-white transition"
                                            title="Imprimir ticket"
                                            style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center" }}
                                        >
                                            <i className="fa-solid fa-print text-lg" />
                                        </button>
                                        <button
                                            className="rounded-full p-2 bg-[#d5e0e0] hover:bg-[#008080] hover:text-white transition"
                                            title="Más detalles"
                                            style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center" }}
                                        >
                                            <i className="fa-solid fa-ellipsis-v text-lg" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </>
    );
};