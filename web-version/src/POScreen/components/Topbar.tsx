export const Topbar = () => (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#008080] text-white z-50 flex justify-between">
        <div className="bg-inherit">
            <button className="h-full px-4 brightness-[.90] bg-inherit cursor-default w-[150px]">Registradora</button>
            <button className="h-full px-4 active:brightness-[.90] hover:brightness-95 bg-inherit w-[150px]">Inventario</button>
        </div>

        <div className="h-full flex items-center gap-4">
            <p>Cajero</p>
            <i className="fa-solid fa-wifi p-2 pr-4"></i>
        </div>
    </div>
)