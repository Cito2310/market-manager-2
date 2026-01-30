import { UseFormRegister } from "react-hook-form";
import { SidebarButton } from "./SidebarButton";
import { SidebarButtonBottom } from "./SidebarButtonBottom";
import { SidebarInput } from "./SidebarInput";

interface props {
    widthPercentaje: number;
    buttons: {
        addPOSProduct: () => void;
        onPayModal: () => void;
    }
    register: UseFormRegister<any>;
    cashChange: number;
    disabled?: boolean;
}

export const SectionSidebar = ({ widthPercentaje, buttons, register, cashChange, disabled }: props) => (
    <div style={{ width: widthPercentaje+ "%", left: (100 - widthPercentaje) + "%" }} className={`
        fixed top-8 z-40
        h-[calc(100vh-2rem)]

        border-l border-slate-200 bg-slate-50
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
                    <SidebarInput registerReturn={register("barcode")} id="barcodeInput" label="Codigo de barra" placeholder="Ingrese el código de barra" />
                    <SidebarInput registerReturn={register("clientMoney")} id="clientMoneyInput" label="Dinero" placeholder="Ingrese el dinero del cliente" />
                </div>

                <p className="font-medium px-1 mt-1.5">VUELTO: $ {cashChange}</p>
            </div>

            <div className="flex gap-4">
                <SidebarButtonBottom disabled={disabled} variant="danger">F5 - Cancelar</SidebarButtonBottom>
                <SidebarButtonBottom disabled={disabled} variant="primary" onClick={buttons.onPayModal}>F1 - Pagar</SidebarButtonBottom>
            </div>
        </div>
    </div>
)