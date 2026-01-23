import { BtnBottomSidebar } from "./sidebar-components/BtnBottomSidebar";
import { BtnSidebar } from "./sidebar-components/BtnSidebar";
import { InputSidebar } from "./sidebar-components/InputSidebar";

interface props {
    widthPercentaje: number;
}

export const SectionSidebar = ({ widthPercentaje }: props) => (
    <div style={{ width: widthPercentaje+ "%", left: (100 - widthPercentaje) + "%" }} className={`
        fixed top-8 z-40
        h-[calc(100vh-2rem)]

        border-l-2 border-[#7e9292]
        justify-between gap-4 flex flex-col p-4
        `}>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <BtnSidebar>Agregar Producto</BtnSidebar>
                <BtnSidebar>Ultimas Ventas</BtnSidebar>
                <BtnSidebar>Administrar Caja</BtnSidebar>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <div className="flex gap-4 w-full">
                    <InputSidebar label="Codigo de barra" value={"Aceite"} onChange={()=>{}} />
                    <InputSidebar label="Dinero" value={"Aceite"} onChange={()=>{}} />
                </div>

                <p className="font-medium px-1 mt-1.5">VUELTO: $ 4.300</p>
            </div>

            <div className="flex gap-4">
                <BtnBottomSidebar variant="danger">F5 - Cancelar</BtnBottomSidebar>
                <BtnBottomSidebar variant="primary">F1 - Pagar</BtnBottomSidebar>
            </div>
        </div>
    </div>
)