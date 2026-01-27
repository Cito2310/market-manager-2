import { SidebarButton } from "./SidebarButton";
import { SidebarButtonBottom } from "./SidebarButtonBottom";
import { SidebarInput } from "./SidebarInput";

interface props {
    widthPercentaje: number;
    buttons: {
        addPOSProduct: () => void;
    }
}

export const SectionSidebar = ({ widthPercentaje, buttons }: props) => (
    <div style={{ width: widthPercentaje+ "%", left: (100 - widthPercentaje) + "%" }} className={`
        fixed top-8 z-40
        h-[calc(100vh-2rem)]

        border-l-2 border-[#7e9292]
        justify-between gap-4 flex flex-col p-4
        `}>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <SidebarButton onClick={ buttons.addPOSProduct }>Agregar Producto</SidebarButton>
                <SidebarButton>Ultimas Ventas</SidebarButton>
                <SidebarButton>Administrar Caja</SidebarButton>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <div className="flex gap-4 w-full">
                    <SidebarInput label="Codigo de barra" value={"Aceite"} onChange={()=>{}} />
                    <SidebarInput label="Dinero" value={"Aceite"} onChange={()=>{}} />
                </div>

                <p className="font-medium px-1 mt-1.5">VUELTO: $ 4.300</p>
            </div>

            <div className="flex gap-4">
                <SidebarButtonBottom variant="danger">F5 - Cancelar</SidebarButtonBottom>
                <SidebarButtonBottom variant="primary">F1 - Pagar</SidebarButtonBottom>
            </div>
        </div>
    </div>
)