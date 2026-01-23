import { ItemProductPos } from "./sidebar-components/ItemProductPos";

const POSTableHeadItem = ({ label, width, className }: {label: string, width?: string, className?: string}) => <th
    className={`py-1.5 text-[#004C4C] bg-[#CDECEC] font-normal ${className}`}
    style={{ width }}
>
    { label }
</th>

interface props {
    widthPercentaje: number;
}

export const SectionSumProduct = ({ widthPercentaje }: props) => (
    <div style={{ width: widthPercentaje + "%" }} className={`
        mt-8 h-[calc(100vh-2rem)] overflow-y-auto
        flex flex-col justify-between
    `}>
        <div className="">
            <table className="w-full">
                <thead className="">
                    <tr>
                        <POSTableHeadItem label="Producto" className="text-left px-4" />
                        <POSTableHeadItem label="Cantidad" width="16%" />
                        <POSTableHeadItem label="P. Unidad" width="16%" />
                        <POSTableHeadItem label="P. Total" width="16%" />
                        <POSTableHeadItem label="" width="4%" />
                    </tr>
                </thead>


                <tbody>
                    <ItemProductPos productName="Morixe Harina" unit={3} priceUnit="$ 800" priceTotal="$ 3.200" />
                    <ItemProductPos productName="Cañuelas Aceite de Girasol" unit={2} priceUnit="$ 2.400" priceTotal="$ 4.800" />
                    <ItemProductPos productName="Cabalgata Gaseosa Cola" unit={1} priceUnit="$ 1.700" priceTotal="$ 1.700" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ItemProductPos productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 5.400" />
                </tbody>
            </table>
        </div>

        <h2 className="sticky bottom-0 w-full font-medium text-right text-3xl py-2 px-4 bg-slate-100 border-t border-slate-200 text-[#023b3b]">$ 12.400,00</h2>
    </div>
)
