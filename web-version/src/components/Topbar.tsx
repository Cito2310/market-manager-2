import { ButtonTopbar } from "./ButtonTopbar";

export const Topbar = () => (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#008080] text-white z-50 flex justify-between">
        <div className="bg-inherit">
            <ButtonTopbar label="Registradora" />
            <ButtonTopbar label="Inventario" active />
        </div>

        <div className="h-full flex items-center gap-4">
            <p>Cajero</p>
            <i className="fa-solid fa-wifi p-2 pr-4"></i>
        </div>
    </div>
)