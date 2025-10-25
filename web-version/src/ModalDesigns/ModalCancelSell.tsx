export const ModalCancelSell = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]" />

      <div
        className={`
          fixed translate-x-[-50%] top-[15%] left-[50%] z-[120]
          bg-white font-[Montserrat] py-6 px-10 pb-8 w-[600px] rounded-md
          flex flex-col gap-4
          shadow-2xl
        `}
      >
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Cancelar Venta</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

        <section className="bg-[#f8f4f4] rounded-md p-4 shadow-sm flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-[#DD656F] border-b border-b-[#00000012]">¿Estás seguro?</h3>
          <p className="text-[#536464]">
            Esta acción <b>anulará la venta actual</b> y eliminará todos los productos cargados. 
          </p>
        </section>

        <div className="flex gap-4 justify-end mt-4">
          <button className="transition-base rounded-md w-[150px] text-[#7e9292] px-2 py-2 active:brightness-[.90] active:shadow-inner hover:bg-[#d5e0e0] hover:text-[#3d4646] hover:shadow-none">
            Volver
          </button>
          <button className="transition-base rounded-md w-[150px] bg-[#c0392b] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">
            Cancelar venta
          </button>
        </div>
      </div>
    </>
  );
};